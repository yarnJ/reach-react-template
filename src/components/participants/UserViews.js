import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const UserViews = props => {

    const [value, setValue] = useState(0);

    const handleGet = () => props.useCommand(['Get', null]);
    const handleSet = () => props.useCommand(['Set', value]);

    /**
     * @dev Bu kısımda gelen appState'e göre bilgi göstermek gerekli
     * reachStorage kontratında sadece bir etkileşim olduğu için
     * bir adet form bir adet de görüntüleme kutusu olacak.
     * 
     * Bu kontrata özel bir tasarım olduğu için çok özen göstermedim
     * Kendi sitenizde istediğiniz gibi şekil verirsiniz.
     */
    return (
        <Container className="mt-4">
            <Row>
                <Col md={6}>
                    <Button onClick={handleGet}>Get Value</Button>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Control value={value} onChange={(e) => setValue(e.target.value)} type="number" placeholder="Enter value" />
                        <Button onClick={handleSet}>Set Value</Button>
                    </Form.Group>
                </Col>
                <Col>
                    {props.appState === "valueChanged" &&
                        <Alert variant="success">
                            <Alert.Heading>Value changed</Alert.Heading>
                            <p>Value is changed by {props.args[1]} to {props.args[0]}</p>
                        </Alert>}
                </Col>
                <Col>
                    {props.appState === "seeValue" &&
                        <Alert variant="success">
                            <Alert.Heading>Value changed</Alert.Heading>
                            <p>seeValue is {props.args[0]}</p>
                        </Alert>}
                </Col>
            </Row>
            {/* 
                Burada Loading Modal'ı başka bir değişkene göre
                çağırıp sadece ilk yüklemede görünmesini 
                sağlayabilirsiniz.
            */}
            <LoadingModal show={!props.useCommandReady} />
        </Container>
    );
}

const LoadingModal = ({ show }) => {
    return (
        <Modal show={show} className="text-center">
            <Modal.Body>
                <h2>Waiting for the contract</h2>
                <Spinner animation="border" />
            </Modal.Body>
        </Modal>
    );
}

export default UserViews;