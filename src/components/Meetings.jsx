import React, {useState} from "react";
import MultiSelect from "react-bootstrap-multiselect";
import Form from "react-bootstrap/Form";

export const Meetings = () => {
    const [options, setOptions] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    return(
        <Form>
            <Row>
                <Form.Group>
                    <Form.Label>Days</Form.Label>
                    <MultiSelect
                        isObject={false}
                        onRemove={(event)=>{event}}
                        onSelect={(event)=>{event;}}

                        options={options}

                        showCheckbox
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Start Meeting</Form.Label>
                    <Form.Control placeholder="12:00"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>End Meeting</Form.Label>
                    <Form.Control placeholder="14:00"/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" id="start" placeholder="2022-07-22"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" id="end" placeholder="2022-12-15"/>
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>          
    )
}