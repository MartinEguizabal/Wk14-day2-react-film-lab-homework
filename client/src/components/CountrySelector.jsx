import React from 'react';

class CountrySelector extends React.Component {

  constructor(props){
    super(props);

    // this.state = {
    //   selectedIndex: undefined
    // }
  }

  handleChange(e){
    // console.log(e.target.value)
    const index = e.target.value;
    this.props.handleSelectedCountry(this.props.countries[index])
  }

  render() {

    const options = this.props.countries.map((country, index) => {
      return (
        <option value={index} key={index}>{country.name}</option>
        )
    })
  
    // map around all countries 
    // then create array of <option> elements

    return (
      <select 
      id="countries" 
      // value={this.state.selectedIndex} 
      onChange={this.handleChange.bind(this)}>
        {options}
      </select>
    );
  }
}


export default CountrySelector;

// use array of options elements