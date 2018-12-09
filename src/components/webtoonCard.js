import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react';
import { getSeries } from '../client';

export default class WebtoonCard extends React.Component{

    state = {
        series: []
    }
    
    _getSeries = () => {
        getSeries()
            .then(res => {
                this.setState({ series: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        this._getSeries();
    }

    render () {
        return (
            <Card.Group>
                {this.state.series.map(sery => {
                    return (
                        <Link to={`/details/${sery.title}`}>
                            <Card style={{ margin: '10px 10px 10px 10px' }}>
                                <Image src={sery.thumnail} disabled />
                                <Card.Content>
                                <Card.Header>{sery.title}</Card.Header>
                                <Card.Meta>{sery.author}</Card.Meta>
                                <Card.Description>{sery.description}</Card.Description>
                                </Card.Content>
                            </Card>
                        </Link>
                    );
                })}                
            </Card.Group>
        );
    }
};
