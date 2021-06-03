/**
 * @dev This is the page where you fulfill the participant interface
 * you specified in your index.rsh
 * 
 * Rock Paper Scissors code has two participants: Alice and Bob, because
 * of this the files for the participant functions are named Alice.js and Bob.js
 * For every participant there is also a views file to hold HTML pages, AliceViews.js
 * and BobViews.js respectively 
 * 
 * @note This is just a naming convention and not important for code's execution
 * 
 * In each of the participant file you need to implement every function that participant has
 * in their participant interface and show a page depending on their state on contract.
 * (For example R-P-S app has 3 states for Alice: getHand, seeOutcome and informTimeout)
 * 
 * Most of the time there'll be two type of functions:
 * 
 * @see getHand function for input-waiting functions
 * @see seeOutcome function for display functions
 */

import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import AliceViews from "./AliceViews";

export class Alice extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        /**
         * @dev I talk about the resGetHand above the getHand() function so I'll summarize 
         * what appState and args does quickly
         * 
         * appState: Which screen your app should display, which state is your app in? You specify
         * it via changing appState. For convention you can just change appState to the function you're
         * currently calling
         * 
         * args: Anything comes from the contract, you should store in the args array. That way you can easily
         * access the arguments from the Views file.
         */
        this.state = {
            appState: "",
            args: [],
            resGetHand: null,
        };

        this.getHandExt = this.getHandExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , ctcArgs,] = this.context;
        /* Update balance is called every 20 seconds in case you don't do it
           yourself. */
        this.interval = setInterval(async () => this.updateBalance(), 20000);

        /* Get the contract arguments from Context and set it as a property of
           the class */
        const wagerNumber = Reach.parseCurrency(ctcArgs[0].wager);
        this.wager = wagerNumber;

        /* This tells Reach that this class is responsible for everything about
           participant Alice */
        Backend.Alice(ctc[0], this);
    }

    /**
     * @dev This is a helper function to update the balance. You can call it at the
     * end of every function
     */
    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    random() { return Reach.hasRandom.random(); }

    /**
     * @dev getHand function is unique because you expect a value from the user,
     * an integer value representing the hand the user plays.
     * 
     * The way I implemented this is really inefficient but if you bear with me it is
     * the same process for every input-waiting function
     * (Steps for this process is named GH-1, GH-2, ... and so on)
     * 
     * GH-0: Write the empty getHand() { } function [Line 149]
     *       If you have arguments for the function in your participant interface
     *       include them in between the parentheses.
     * 
     *      E.g. getBid(currentPot) {}
     * 
     * GH-1: Have a resolve object for the function in your state 
     *       (I'll explain what resolve does in the next step) [Line 52]
     * 
     * GH-2: Inside the getHand function, create a new Promise and assign it to a variable. [Line 150]
     *       
     *       Promise is a cool JavaScript feature where the value of the object isn't determined
     *       until the function inside the Promise is finished with either a success or a
     *       failure (thus it is a "promise" of a value). To finish a Promise with a success you 
     *       need to call the "resolve" function that Promise gives to you.
     * 
     *       async/await is used for time-consuming operations and gives code the opportunity 
     *       to wait for the operation to finish. To have that effect you need to add "async" to
     *       the start of your function name and have an "await" statement in the function.
     * 
     *       What we do to get the user input here is very tricky:
     *          - We create a new Promise and don't call it's resolve (success) function. 
     *            This makes the Promise unfulfilled.
     *          - Then inside the async function we await this Promise. Since Promise isn't going
     *            to be finished, this operation halts the program until we somehow call the resolve
     *            function.
     *          - In the next steps we'll create the function that calls the resolve function
     *            and bind it to the user input.
     * 
     * GH-3: Inside the await new Promise assign the resolve function that Promise gives to you
     * to the resolve you created in the 1st step.
     * 
     * GH-4: Return the result of the Promise you stored in a variable. [Line 157]
     * 
     * GH-5: Write the getHandExt (or getHandExternal if you want) function. [Line 159]
     * The argument you'll give to this function will be the thing you'd want to return from
     * the getHand function (In this case, I'll return the move player makes as a number.)
     * 
     * This function's whole purpose will be to call the resolve function you stored. 
     * You'll do this with this.state.resGetHand(hand);
     * 
     * GH-6: Due to how Javascript works, you need to bind the "this" keyword in the code you
     * wrote in the previous step, so that by "this" Javascript understands the Alice class not
     * the getHandExt function. [Line 52]
     * 
     * For more info. @see https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance
     * 
     * GH-7: For the last step you need to pass two things to AliceViews:
     *       * getHandExt function
     *       * Boolean that shows if getHand is ready to call (In React it can take a while to get
     *         the state updated. This boolean is here so that we won't break the program when the
     *         resolve isn't ready)
     * 
     * To do this, pass getHandReady={this.state.resGetHand !== null} and getHand={this.getHandExt}
     * inside the <AliceViews /> [Line 189 & 190]
     *  
     */
    async getHand() {
        const hand = await new Promise(res => {
            this.setState({
                appState: "getHand",
                resGetHand: res,
            });
        });
        console.log(hand);
        return hand;
    }
    getHandExt(hand) {
        console.log("getHandExt is called");
        this.state.resGetHand(hand);
    }

    async informTimeout() {
        this.setState({
            appState: "informTimeout",
        });
    }

    /**
     * @dev Compared to input-waiting functions display function are much easier to implement
     * Just set the appState and args coming from the contract if any.
     * 
     * Note that since outcome is a BN or a BigNumber we need to convert it so that we can read
     * it in the frontend.
     */
    async seeOutcome(outcome) {
        const outcomeNumber = Reach.bigNumberToNumber(outcome);
        this.setState({
            appState: "seeOutcome",
            args: [outcomeNumber],
        });
    }

    render() {
        return (<AliceViews
            appState={this.state.appState}
            args={this.state.args}
            getHandReady={this.state.resGetHand !== null}
            getHand={this.getHandExt} />);
    }
}