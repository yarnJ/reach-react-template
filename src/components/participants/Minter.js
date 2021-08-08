import { Component } from "react";

import * as Backend from "../../contracts/build/token.main.mjs";
import MinterViews from "./views/MinterViews";

import { Context } from "../../Context";
import { loadStdlib } from "@reach-sh/stdlib";
import * as config from "../../config";

class Minter extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {
            view: "",
            args: {}
        };

        /** @type {import("@reach-sh/stdlib/dist/types/interfaces").Stdlib_User} */
        this.stdlib = loadStdlib(config.network);
    }

    componentDidMount() {
        const { contracts } = this.context;

        Backend.Minter(contracts[0], this);
    }

    async getParams() {
        console.log(this.context.account.networkAccount.addr);
        return {
            name: "RAJINI Token",
            symbol: "RJN",
            supply: 300 * 10 ** 9
        }
    };

    /** @param {BigInt} token */
    async seeToken(token, amount) {
        console.log("seeToken", token, amount);
        const { account } = this.context;
        await account.tokenAccept(token);

        const amountFmt = (await this.stdlib.balanceOf(account, token)).toString();
        const tokenStr = token.toString();
        this.setState({
            view: "seeToken",
            args: {
                tokenStr: tokenStr,
                amount: amountFmt
            }
        });
    }

    /** This function isn't supposed to return  */
    async payBack() {
        return await new Promise(res => {
            console.log("payBack entered");
        });
    }

    render() {
        return (
            <MinterViews args={this.state.args} view={this.state.view} />
        );
    }
}

export default Minter;