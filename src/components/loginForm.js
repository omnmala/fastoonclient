import React from 'react'
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <div className='login-form'>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          로그인하고 웹툰보기
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />            
            <Link to={'/curating'}>
            <Button primary fluid size='large'>
              Login
            </Button>
            </Link>
          </Segment>
        </Form>
        <Message>
          처음이신가요? <a href='/register'>회원가입</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm