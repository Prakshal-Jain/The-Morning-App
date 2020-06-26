import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            allData: "",
            news:""
        }
        this.analyze = this.analyze.bind(this)
    }

    componentDidMount(text){
        console.log(text)
        var url = 'http://newsapi.org/v2/top-headlines?q='+String(text)+'&country=us&apiKey=3bb0d795522b4f5aa1ee28a544ac9dd9';
        fetch(url)
            .then(Response => Response.json())
            .then(data => this.setState({allData: data.articles}))
        this.analyze()   
    }

    render(){
        return(
            <ScrollView style={{ paddingTop: Constants.statusBarHeight }}>
                <Text style={{textAlign:"center", fontSize:30, paddingBottom:10}}>News{"\n"}</Text>
                <Text style={{textAlign:"center"}}>Enter any topic to see its related news</Text>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:200, alignSelf:"center" }} onChangeText={text => this.componentDidMount(text)}/>
                <Text>{this.state.news}</Text>
            </ScrollView>
        )
    }

    analyze(){
        var n = ""
        for(let e of this.state.allData){
            var structure = "By: "+e.author+"\n"+"Title: "+e.title+"\n"
            n = n.concat(structure)
        }
        this.setState({news: n})
        this.render()
    }
}

export default Login