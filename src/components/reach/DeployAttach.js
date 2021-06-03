import React, { useContext, useState } from "react";
import * as Backend from "../../build/index.main.mjs";
import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import { Context } from "../../Context";

export const DeployButton = ({ ctcArgs }) => {
    const [account, , , , , setCtcInfo, , setCtc, , setCtcArgs] = useContext(Context);
    const [show, setShow] = useState(false);
    // In order to redirect you need to use this hook
    const history = useHistory();

    const deploy = async () => {
        // Show the loading screen
        setShow(true);

        const ctc = account.deploy(Backend);

        // To use in participant page pass contract to Context
        setCtc([ctc]);

        // Pass the contract arguments
        setCtcArgs(ctcArgs);

        // Stringify the contract info and set the state so that you can copy it.
        const ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2);
        setCtcInfo([ctcInfo]);

        // Proceed to deployment page
        history.push('/deploy');
    }

    return (
        <>
            <Button variant="primary" onClick={deploy}>Deploy</Button>
            <DeployModal show={show} />
        </>
    );
}

export const AttachButton = () => {
    const [account, , , , , , , setCtc] = useContext(Context);
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const attach = async (ctcInfo) => {
        // Attach to the contract you know the info of
        const ctc = await account.attach(Backend, JSON.parse(ctcInfo));

        // To use in participant page pass contract to Context
        setCtc([ctc]);

        console.log("Attached to the contract");

        // Proceed to the participant page
        history.push("/app/bob");
    }

    return (
        <>
            <Button onClick={handleShow}>Attach</Button>
            <AttachModal
                show={show}
                handleClose={handleClose}
                attach={attach} />
        </>
    );
}

const AttachModal = ({ show, handleClose, attach }) => {
    const handleAttach = () => {
        // Fetch the contract information
        const info = document.querySelector("#ctcArea").value;
        attach(info);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Attach to Contract</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    id="ctcArea"
                    as="textarea"
                    rows="10"
                    placeholder="Paste contract info here" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAttach}>
                    Attach
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const DeployModal = ({ show }) => {
    return (
        <Modal show={show} centered className="text-center">
            <Modal.Body>
                <h2>Deploying the contract</h2>
                <Spinner animation="border" />
            </Modal.Body>
        </Modal>
    );
}