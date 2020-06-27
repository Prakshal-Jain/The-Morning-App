import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Item } from 'native-base';
import GenerateList from "../GenerateList"
export default class tabTwo extends Component {
    constructor(){
        super()
        this.state  ={
            data: ""
        }
    }

    componentDidMount(){
        var api = "3bb0d795522b4f5aa1ee28a544ac9dd9"
        var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey="+api
        fetch(url)
            .then(Response => Response.json())
            .then(data => this.setState({data: data.articles}))
    }

    render() {
        return (
        <Container>
            <Content>
            <List dataArray={this.state.data} renderRow={(item => {return <GenerateList data={item}/>})}>
            </List>
            </Content>
        </Container>
        );
    }
}