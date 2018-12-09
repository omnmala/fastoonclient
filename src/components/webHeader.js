import * as React from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
    Button,
    Menu,
  } from 'semantic-ui-react'

export default class WebHeader extends React.Component{
    state = {
        activeItem: '웹툰찾기'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {

        const { activeItem } = this.state;

        return (
            <div>
                <Menu size='huge'>
                    <Menu.Item
                        name='웹툰찾기'
                        active={activeItem === '웹툰찾기'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        to={{ pathname: '/' }}
                    />
                    <Menu.Item
                        name='연재등록'
                        active={activeItem === '연재등록'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        to={{ pathname: '/postseries'}}
                    />

                    <Menu.Menu position='right'>
                        <Menu.Item as={NavLink} to={{ pathname: '/register' }}>
                            <Button alert>회원가입</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button primary>로그인</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
};