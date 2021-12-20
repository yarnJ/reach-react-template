import React, { useState } from "react";
import { parseCurrency } from "@reach-sh/stdlib/ALGO";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FunderViews = ({ appState, args, getParamsReady, getParams }) => {
    switch (appState) {
        case "getParams":
            return (
                getParamsReady
                    ? <GetParams functionToCall={getParams} />
                    : <h1>Loading the getParams page</h1>
            );
        case "showOutcome":
            return (<ShowOutcome address={args[0]} />);
        default:
            return (<h1>Waiting for contract</h1>);
    }
}

const GetParams = ({ functionToCall }) => {

    const [deadline, setDeadline] = useState(500);
    const [ticketPrice, setTicketPrice] = useState(1);

    const handleClick = () => {
        functionToCall({
            deadline: deadline,
            ticketPrice: parseCurrency(ticketPrice)
        });
    }

    return (
        <Container>
            <Form.Group>
                <p>Deadline</p>
                <Form.Control
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    type="number"
                    placeholder="Deadline in blocks" />
                <p>Ticket Price</p>
                <Form.Control
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                    type="number"
                    placeholder="Ticket price" />
            </Form.Group>
            <Button onClick={handleClick}>Set Parameters</Button>
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

export default FunderViews;