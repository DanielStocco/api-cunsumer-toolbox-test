const axios = require('axios');

const { askByText } = require('./libs/inquirer');

askByText()
  .then(message => axios.post('http://localhost:3000', message ))
  .then( response => console.log(`Su texto fue: ${response.data.message}`));

