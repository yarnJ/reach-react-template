import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import FunderViews from "./FunderViews";

export class Funder extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            /* Resolves */
            resGetParams: null,
        }

        // Bind functions
        this.getParamsExt = this.getParamsExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , ctcArgs] = this.context;

        // Parayı her 50 saniyede güncellemesi
        this.interval = setInterval(async () => await this.updateBalance(), 50000);

        // Kontrat argümanları

        // Reach'a bağlan
        Backend.Funder(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async getParams() {
        const params = await new Promise(res => {
            this.setState({
                appState: "getParams",
                resGetParams: res
            });
        });

        this.updateBalance();
        return params;
    }
    getParamsExt(params) {
        this.state.resGetParams(params);
    }

    async showOutcome(address) {
        this.setState({
            appState: "showOutcome",
            args: [address]
        });
    }

    render() {
        return <FunderViews
            appState={this.state.appState}
            args={this.state.args}
            /* Resolves */
            getParamsReady={this.state.resGetParams !== null}
            getParams={this.getParamsExt} />
    }
}