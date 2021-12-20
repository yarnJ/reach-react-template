import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import BuyerViews from "./BuyerViews";

export class Buyer extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            /* Resolves */
            resShouldBuyTicket: null,
        }

        // Bind functions
        this.shouldBuyTicketExt = this.shouldBuyTicketExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , ctcArgs] = this.context;

        // Parayı her 50 saniyede güncellemesi
        this.interval = setInterval(async () => await this.updateBalance(), 50000);

        // Kontrat argümanları

        // Reach'a bağlan
        Backend.Buyer(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async shouldBuyTicket(price) {
        const priceFormatted = Reach.formatCurrency(price, 4);
        const response = await new Promise(res => {
            this.setState({
                appState: "shouldBuyTicket",
                args: [priceFormatted],
                resShouldBuyTicket: res
            });
        });

        return response;
    }
    shouldBuyTicketExt(response) {
        this.state.resShouldBuyTicket(response);
    }


    async showOutcome(address) {
        this.setState({
            appState: "showOutcome",
            args: [address]
        });
    }

    async showPurchase(address) {
        this.setState({
            appState: "showPurchase",
            args: [address]
        });
    }

    render() {
        return (<BuyerViews
            appState={this.state.appState}
            args={this.state.args}
            /* Resolves */
            shouldBuyTicketReady={this.state.resShouldBuyTicket !== null}
            shouldBuyTicket={this.shouldBuyTicketExt} />);
    }
}