import React, {Component} from 'react';
// var Component = React.Component (same as above)
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';

class CountryContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      selectedCountry: null
    };
  }

  componentDidMount(){
    // set up a new XMLHttpRequest
    const url = 'https://restcountries.eu/rest/v2/all';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    // pass a callback to its onload
    xhr.onload = () => {
      if(xhr.status === 200){
        const data = JSON.parse(xhr.responseText);
        // setState
        this.setState({
          countries: data
        })
      }
    }
    // send the request
    xhr.send();
  }

  handleSelectedCountry(country){
    this.setState({selectedCountry: country});
  }

  render(){
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector countries={this.state.countries} handleSelectedCountry={this.handleSelectedCountry.bind(this)} />
        <CountryDetail country={this.state.selectedCountry}/>
      </div>
    );
  }
}

export default CountryContainer;

