import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {Linking} from 'react-native'

class GenerateList extends Component{
    constructor(props){
        super(props)
        this.data = props.data
    }

    render(){
        return(
            <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://us.123rf.com/450wm/deniskolt/deniskolt1712/deniskolt171200009/91679710-stock-vector-breaking-news-background.jpg?ver=6 ' }} />
            </Left>
            <Body>
                <Text note numberOfLines={2}>{this.data.title}</Text>
                <Text note numberOfLines={2}>{this.data.description}</Text>
                <Text note numberOfLines={1}>Source: {this.data.source.name}</Text>
            </Body>
            <Right>
                <Button transparent  onPress={() => {
                    Linking.openURL(this.data.url);
                }}>
                <Text>View</Text>
                </Button>
            </Right>
            </ListItem>
        )
    }
}

export default GenerateList