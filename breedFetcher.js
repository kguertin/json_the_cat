const request = require('request');

const fetchBreedDescription = (breedName , callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else if (response.statusCode !== 200) {
      callback(error, null);
      return;
    }

    let data = JSON.parse(body);
    if (data.length < 1) {
      callback(error, 'Breed Not Found');
    } else {
      callback(error, data[0].description.trim());
    }
  });
};

module.exports = {fetchBreedDescription};