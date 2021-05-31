import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';

console.log(process.env.REACT_APP_BRISTOL_OPEN_DATA_API_KEY)

//store the api in a variable
const apiLink = "https://opendata.bristol.gov.uk/api/v2/";

//create a function to fetch the data
const fetchData = async () => {
  const res = await axios.get(`${apiLink}catalog/datasets/air-quality-data-continuous/exports/json?order_by=date_time%20asc&limit=-1&facet=location&refine=location%3AColston%20Avenue`, { 
    headers: { 
      Accept: "application/json" 
    } 
  });
  console.log(res.data);
}

fetchData();