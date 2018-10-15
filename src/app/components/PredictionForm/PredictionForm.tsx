import * as React from 'react';
import * as styles from './styles.css';
import { Form, Label, Input, FormGroup, Row, Col, Button } from "reactstrap";
import { PredictInput } from 'app/models';


export interface PredictionFormProps {
    predict: (input: PredictInput) => void
}

export interface PredictionFormState {
    predictInput: PredictInput
}

export class  PredictionForm extends React.Component<PredictionFormProps, PredictionFormState> {

    constructor(props?: PredictionFormProps, context?: any) {
        super(props, context);
        this.state = {
            predictInput: {
                yes: '',
                no: '',
            }
        }
    }

    private handleEdit = (e: React.ChangeEvent<any>) => {
        const predictInput = {
            ...this.state.predictInput,
            [e.target.name]: e.target.value
        }
        this.setState({ predictInput });
    }


    private handlePredict = () => {

        this.props.predict(this.state.predictInput);
    }

    render() {

        return (
            <Form className={styles.form} >
                <Row>
                    <Col md={6} >
                        <FormGroup>
                            <Label for="yes">Yes</Label>
                            <Input name="yes" id="yes" onChange={this.handleEdit} />
                        </FormGroup>
                    </Col>
                    <Col md={6} >
                        <FormGroup>
                            <Label for="no">No</Label>
                            <Input name="no" id="no" onChange={this.handleEdit} />
                        </FormGroup>
                    </Col>
                </Row>
                <Button className={styles.btn} onClick={this.handlePredict} >Predict</Button>
            </Form>
        );
    }
}