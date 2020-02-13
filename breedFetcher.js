const request = require('request');
const userInput = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length < 1) {
    console.log('Breed not found');
  } else if (error) {
    console.log('error:', error);
  } else {
    console.log(data);
  }
});