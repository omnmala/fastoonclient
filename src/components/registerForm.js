import * as React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
    }
    render() {
        return (
            <Segment basic textAlign='center'>
                <Form>
                    <Form.Field>
                    <label>Name</label>
                    <input type="text" placeholder='Type your name' />
                    </Form.Field>
                    <Form.Field>
                    <label>E-mail</label>
                    <input type="text" placeholder='Type your e-mail address' />
                    </Form.Field>                    
                    <Form.Field>
                    <label>password</label>
                    <input type="password" placeholder='password' />
                    </Form.Field>
                    <Button primary type='submit'>Register</Button>
                </Form>
            </Segment>
        )
    }
};