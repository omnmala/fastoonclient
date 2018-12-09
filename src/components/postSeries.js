import React from 'react';
import { postSeries } from '../client';
import { Button, Form, Segment } from 'semantic-ui-react';

export default class PostSeries extends React.Component {
    state = {
        title: '',
        author: '',
        description: '',
        thumnail: '',
        suggestionList: '',
        postList: '',
        tagList: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const payload = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            thumnail: this.state.thumnail
        };
        postSeries(payload)
            .then(()=>{
                this.setState({
                    title: '',
                    author: '',
                    description: '',
                    thumnail: '',
                    suggestionList: '',
                    postList: '',
                    tagList: ''
                })
            })
            .catch(err=>{
                console.log(err);
            });
    }

    render() {
        return (
            <Segment basic textAlign='center'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Title</label>
                        <input 
                            placeholder='Title'
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Author</label>
                        <input 
                            placeholder='Author'
                            type="text"
                            name="author"
                            onChange={this.handleChange}
                        />
                    </Form.Field>                    
                    <Form.Field>
                        <label>Description</label>
                        <input 
                            placeholder='Description'
                            type="text"
                            name="description"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Thumnail Address</label>
                        <input 
                            placeholder='Thumnail Address'
                            type="text"
                            name="thumnail"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Button primary type='submit'>연재하기</Button>
                </Form>
                <h3>제출내용 확인</h3>
                <p>{this.state.title}</p>
                <p>{this.state.author}</p>
                <p>{this.state.description}</p>
                <p>{this.state.thumnail}</p>
            </Segment>
        )
    }
};