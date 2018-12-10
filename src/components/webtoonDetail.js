import React, { Fragment } from "react";
import { Card, Image } from 'semantic-ui-react';
import { getDetail } from '../client';
import { NavLink, Link } from "react-router-dom";

export default class WebtoonCard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            details: []
        }
    }
    
    _getDetail = (title) => {
        getDetail(title)
            .then(res => {
                this.setState({ details: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        this._getDetail(this.props.match.params.title);
    }

    render () {
        return (
            <Fragment>
                {this.state.details.map(detail => {
                    return (
                        <Card.Group>
                        <Card style={{ margin: '10px 10px 10px 10px' }}>
                            <Image src={detail.thumnail} />
                            <Card.Content>
                            <Card.Header>{detail.title}</Card.Header>
                            <Card.Meta>{detail.author}</Card.Meta>
                            <Card.Description>{detail.description}</Card.Description>
                            </Card.Content>
                        </Card>   
                        <Link as={NavLink} to={`/details/${detail.suggestionList[0]}`}>                     
                            <Card as={NavLink} to={`/details/${detail.suggestionList[0]}`} style={{ margin: '10px 10px 10px 10px' }}>
                                <Card.Content>
                                <Card.Header>{detail.suggestionList[0]}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Link>
                        <Link to={`/details/${detail.suggestionList[1]}`}>                     
                            <Card as={NavLink} to={`/details/${detail.suggestionList[0]}`} style={{ margin: '10px 10px 10px 10px' }}>
                                <Card.Content>
                                <Card.Header>{detail.suggestionList[1]}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Link>
                        <Link to={`/details/${detail.suggestionList[2]}`}>                     
                            <Card as={NavLink} to={`/details/${detail.suggestionList[0]}`} style={{ margin: '10px 10px 10px 10px' }}>
                                <Card.Content>
                                <Card.Header>{detail.suggestionList[2]}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Link>
                        <Link to={`/details/${detail.suggestionList[3]}`}>                     
                            <Card as={NavLink} to={`/details/${detail.suggestionList[0]}`} style={{ margin: '10px 10px 10px 10px' }}>
                                <Card.Content>
                                <Card.Header>{detail.suggestionList[3]}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Link>
                        <Link to={`/details/${detail.suggestionList[4]}`}>                     
                            <Card as={NavLink} to={`/details/${detail.suggestionList[0]}`} style={{ margin: '10px 10px 10px 10px' }}>
                                <Card.Content>
                                <Card.Header>{detail.suggestionList[4]}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Link>                        
                        </Card.Group>
                    );
                })}
            </Fragment>
        );
    }
};
