import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Container, Header, Tab, Tabs, ScrollableTab, Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';

export default class TabsScrollableExample extends Component {
    timer(){
        var d = new Date();
        var n = d.getHours();
        if(n < 12){
            return "Morning"
        }
        else if(n >= 12 && n < 17){
            return "Afternoon"
        }
        else{
            return "Evening"
        }
    }

    render() {
      var t = this.timer()
      return (
        <Container>
          <Header>
            <Left/>
                <Body>
                    <Title>Good {t}</Title>
                </Body>
            <Right />
          </Header>
          <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Search Topic">
              <Tab1 />
            </Tab>
            <Tab heading="Top news">
              <Tab2 />
            </Tab>
            <Tab heading="Weather">
              <Tab3 />
            </Tab>
          </Tabs>
        </Container>
      );
    }
}