import React, {Component, Fragment} from "react";
import {Card, CardBody, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

class Inputs extends Component {
    render() {
        return (
            <Fragment>
                <ContentHeader>RSV</ContentHeader>
                <ContentSubHeader>Data</ContentSubHeader>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col xl="12" lg="12" md="12">
                                            <FormGroup>
                                                <Label for="basicinput">DSS ID</Label>
                                                <Input type="text" id="basicinput" name="basicinput"/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Inputs;
