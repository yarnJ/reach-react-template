import { Component } from "react";
import UserViews from "./UserViews";
import * as Backend from "../../build/index.main.mjs";

import { Context } from "../../Context";

/**
 * @dev Buradaki User benim yazmış olduğum reachStorage kontratındaki bir
 * katılımcı. Sizin de yazdığınız kontratlardaki katılımcılara göre birden
 * fazla bu şekilde class bulundurmanız gerekli. 
 */
export class User extends Component {

    // Context'te tutulan bilgileri al.
    static contextType = Context;

    constructor(props) {
        super(props);

        /**
         * @dev Kullanıcıdan her input bekleyişimizde bir Promise yapısı 
         * kullanacağımızdan her değer isteyen kontrat fonksiyonu için bir resolve
         * fonksiyonunun state'de bulunması gerekli.
         * 
         * @param appState: Kontratın hangi fonksiyonu çağırdığını gösterir
         * @param args: Bu fonksiyonu çağırırken gönderilen argümanlar
         * @param resUseCommand: useCommand appState'inin resolve fonksiyonu
         */
        this.state = {
            appState: "",
            args: [],
            resUseCommand: null
        }

        this.useCommand = this.useCommand.bind(this);
        this.useCommandExt = this.useCommandExt.bind(this);
    }

    componentDidMount() {
        // Kontratı Context'ten al ve kontrattaki User'ın bu class
        // olduğunu belirt.
        const [, , , , , , ctc,] = this.context;
        Backend.User(ctc[0], this);
    }

    /**
     * @dev Burada bir Promise örüntüsü kullanılmakta.
     * Reach useCommand fonksiyonunu dışarıdan çağırdığında veri girişi
     * olana kadar bir şey döndürmemek istiyoruz.
     * 
     * Bu yüzden de await new Promise() ile fonksiyonu bir nevi donduruyoruz.
     * new Promise(resolve => {...}) şeklinde yazılan bir fonksiyondan değer
     * dönmesi için resolve'un çağırılması gerekli.
     * 
     * Bunun için de resolve'u state'e yükleyerek UserViews'a aktarıyoruz ve
     * orada kullanıcıdan input alarak resolve'u çağırıyoruz.
     * 
     * Burada useCommand Reach'in çağıracağı kontratta belirlenen fonksiyon
     * useCommandExt de bizim resolve'u tetiklemek için çağıracağımız fonksiyon.
     * 
     * O yüzden useCommand state'e gidecek, useCommandExt de UserViews'a
     * 
     */
    async useCommand() {
        const command = await new Promise(res => {
            console.log("useCommand is called");
            this.setState({
                appState: "useCommand",
                resUseCommand: res
            });
        });
        console.log(command);
        return command;
    }
    useCommandExt(command) {
        console.log("useCommandExt is called");
        this.state.resUseCommand(command);
    }

    /**
     * 
     * @param {int} value Reach'in seeValue'yu çağırırken bize 
     * vereceği değer
     * 
     * Eğer bizden input beklemeyen bir fonksiyon varsa doğrudan
     * appState'i değiştirmemiz ve gelen argümanları state'de
     * args listesinde eklememiz yeterli. 
     */
    async seeValue(value) {
        this.setState({
            appState: "seeValue",
            args: [value]
        });
    }

    async valueChanged(value, user) {
        this.setState({
            appState: "seeValueChanged",
            args: [value, user]
        });
    }

    /**
     * 
     * @dev UserViews gelen appState değerine göre farklı bir view döndürmeli
     * Her input bekleyen Reach fonksiyonu için bir ready boolean'ı ve bir
     * de onu resolve'u çağıran bir fonksiyon UserViews'a yollanmalı 
     */
    render() {
        return (<UserViews
            appState={this.state.appState}
            args={this.state.args}
            useCommandReady={this.state.resUseCommand != null}
            useCommand={this.useCommandExt} />);
    }
}