import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Item, Input } from 'native-base';
import GenerateList from "../GenerateList"
import { TextInput } from 'react-native';
export default class tabTwo extends Component {
    constructor(){
        super()
        this.state  ={
            searched: ""
        }
    }

    componentDidMount(text){
        var api = "3bb0d795522b4f5aa1ee28a544ac9dd9"
        var url = "http://newsapi.org/v2/top-headlines?q="+String(text)+"&country=us&apiKey="+api
        fetch(url)
            .then(Response => Response.json())
            .then(info => this.setState({searched: info.articles}))
    }

    render() {
        return (
        <Container>
            <Content>
            <Input placeholder="Search News" onChangeText={text => text != "" ? this.componentDidMount(text) : this.componentDidMount("Apple")} style={{borderBottomWidth:2, borderBottomColor: "black", alignSelf:"center", paddingTop:5}}/>
            <List dataArray={this.state.searched} renderRow={(item => {return <GenerateList data={item}/>})}>
            </List>
            </Content>
        </Container>
        );
    }
}