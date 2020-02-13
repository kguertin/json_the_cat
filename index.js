const {fetchBreedDescription} = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error!', error);
  } else if (desc === null) {
    console.log('Invalid Path');
  } else {
    console.log(desc);
  }
});

