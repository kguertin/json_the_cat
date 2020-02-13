const { fetchBreedDescription } = require('../breedFetcher');
const { assert } =  require('chai');

describe('#FeatchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('Returns cannot find breed when passed an invalid breed but still returns a result (no error or invlaid path', (done) => {
    fetchBreedDescription('Poodle', (err, desc) => {
      assert.equal(err, null)
      const expectedDesc = 'Breed Not Found'
      assert.equal(expectedDesc, desc)
      done()
    })
  })
})