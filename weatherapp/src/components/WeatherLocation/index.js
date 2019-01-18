import React,{Component} from 'react'; // parte todo
import WheatherData from './WeatherData';
import Location from './Location';
import './style.css'
import {SUN} from '../../constants/weathers';
import transformWeather from './../../services/transformWeather'

const location ='London,uk';
const api_id = '6064a8a97abf12ed9ad3b85a40d38db3';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_id}`;//&units=metric
 

const data1 ={
    temperature:80,
    weatherstate:SUN,
    humidity:50,
    winds:'10 m/s',
}
/*
const data2 ={
    temperature:15,
    weatherstate:WINDY,
    humidity:12,
    winds:'0.5 m/s',
}*/

class WheatherLocation extends Component{
       
        constructor(){
            super();
            this.state = {
                city: 'Privet Drive',
                data: data1,
            };
        }
        /* O
        
        state = {
                city: 'Privet Drive',
                data: data1,
        };
        
        */
        handleUpdateClick = ()=>{
            fetch(url).then(response => {               //busca datos en el servidor
                return response.json();                //cascada ->|>
            }).then(weather_data => {
                const data = transformWeather(weather_data);
                this.setState({data});
                this.setState({city:weather_data.name})
            });                           
            /*console.log("Con esa mirada tan hiriente");
            
            if(this.state.data === data1){
                this.setState({
                    city: 'Surey',
                    data:data2,
                });
            }    
            else{
              
                this.setState({
                   city: 'Privet Drive',
                data: data1,
                });
            }*/
        }
        render = () =>  {
            const {city,data} = this.state;
            return(
                <div className="weatherLocationCont">
                    <Location city={city}/> 
                    <WheatherData data={data}/>
                    <button className="btn" onClick={this.handleUpdateClick}>Actualizar</button>
                </div>
            )
        };
}
export default WheatherLocation;