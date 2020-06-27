import React, { Component } from 'react'
import { View, Text, TextInput, Image } from 'react-native';
import Thumbnail from 'native-base'
class tabThree extends Component{
    constructor(){
        super()
        this.state = {
            location:"",
            temp: "",
            weather: "",
            image: "",
        }
    }

    componentDidMount(p){
        if(p === undefined){

        }
        else{
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+p+'&appid=b6d49e030b041ed841fd0e1523cd575a')
            .then(Response => Response.json())
            .then(info =>{
                if(info.message != "city not found"){
                    this.setState({ location: info.name+", "+info.sys.country, temp: info.main.temp, weather:info.weather[0].description, image: 'http://openweathermap.org/img/wn/'+info.weather[0].icon+'@2x.png' })
                }
            })
        }
    }

    render(){
        return(
            <View>
                <TextInput placeholder="Search Places" onChangeText={text => text != "" ? this.componentDidMount(text) : this.componentDidMount("Indi")} style={{borderBottomWidth:2, borderBottomColor: "black", alignSelf:"center", paddingTop:15}}/>
                <Image
                style={{width:50, height:50, alignSelf:"center", paddingBottom:10, paddingTop:15}}
                source={{uri: this.state.image != "" ? this.state.image : 'https://cdn2.iconfinder.com/data/icons/weather-icons-8/512/day-clear-512.png'}}
                />
                <Text style={{alignSelf:"center"}}>Location: {this.state.location}</Text>
                <Text style={{alignSelf:"center"}}>Temperature: {this.state.temp}</Text>
                <Text style={{alignSelf:"center"}}>weather Description: {this.state.weather}</Text>
                <Text style={{alignSelf:"center"}}>weather Description: {this.state.weather} {"\n"}</Text>
            </View>
        )
    }

}
export default tabThree