import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const BuyerViews = ({ appState, args, shouldBuyTicketReady, shouldBuyTicket }) => {
    switch (appState) {
        case "shouldBuyTicket":
            return (
                shouldBuyTicketReady
                    ? <BuyTicket price={args[0]} functionToCall={shouldBuyTicket} />
                    : <h1>Loading the shouldBuyTicket page</h1>);
        case "showOutcome":
            return (<ShowOutcome address={args[0]} />);
        case "showPurchase":
            return (<ShowPurchase address={args[0]} />);
        default:
            return (<h1>Waiting for contract</h1>);
    }
}

const BuyTicket = ({ price, functionToCall }) => {

    const [clickedYes, setClickedYes] = useState(false);
    const [clickedNo, setClickedNo] = useState(false);

    const handleYes = () => {
        functionToCall(true);
        setClickedYes(true);
    };

    const handleNo = () => {
        functionToCall(false);
        setClickedNo(true);
    }

    return (
        <Container>
            <h2>Price is {price} ALGO. Do you accept it?</h2>
            <Button onClick={handleYes}>
                {
                    clickedYes
                        ? <Spinner animation="border" size="sm" as="span" variant="light" />
                        : "Yes"
                }
            </Button>
            <Button onClick={handleNo}>
                {
                    clickedNo
                        ? <Spinner animation="border" size="sm" as="span" variant="light" />
                        : "No"
                }
            </Button>
        </Container>
    );
}

const ShowOutcome = ({ address }) => {
    return (
        <Container>
            <h1>Winner address: <small>{address}</small></h1>
        </Container>
    );
}

const ShowPurchase = ({ address }) => {
    return (
        <Container>
            <h1><small>{address}</small> bought ticket</h1>
        </Container>
    );
}

export default BuyerViews;