import React, { Component } from 'react';
import {createStore} from 'redux';
import {Grid,Row,Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Appbar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = ['London,uk','Lima,pe','Madrid,es','Moscu,rus','Guildford,uk','Glasgow,uk'];

const store = createStore(() =>{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

    constructor(){
        super();
        this.state = {
            city:null};
    }


  handleSelectedLocation = ({city}) =>{
      this.setState({
        city
      });
      console.log(`handleSelectionLocation ${city}`);
      const action = { type:'setCiy',value:city};
      store.dispatch(action);
  }  

  render() {
      let {city} = this.state;
      return (
          <MuiThemeProvider>
            <Grid>
                <Row>
                  <Col xs={12}>
                    <Appbar title="Weather App"/>
                   </Col> 
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper zDepth={4}>
                            <div className="detail">
                                {city && <ForecastExtended city={city}/>}
                                {/* city && <ForecastExtended city={city}/>:<h3>No se selecciono ciudad</h3> (null)*/}
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
          </MuiThemeProvider>
      );

  }
}

export default App;
