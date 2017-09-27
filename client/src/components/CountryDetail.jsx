import React from 'react';

const CountryDetail = ({country}) => {

    if(!country){
      return null
    }

    return (
      <h3>
        {country.name}
      </h3>
    );
  }

export default CountryDetail;
