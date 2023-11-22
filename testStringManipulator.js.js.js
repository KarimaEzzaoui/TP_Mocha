
const assert = require('chai').assert;
const { reverseString, capitalizeWords, countVowels } = require('./stringManipulator');

describe('Test of string manipulator', function() {
  

  it('Have to reverse a string', function() {
    assert.equal(reverseString('yes'), 'sey');
    assert.equal(reverseString('ok'), 'ko');
  });


  it('Have to capitalize the first letter of each word', function() {
    assert.equal(capitalizeWords('test string'), 'Test String');
    assert.equal(capitalizeWords('another test string'), 'Another Test String');
  });

  
  it('Have to count vowels in a string', function() {
    assert.equal(countVowels('hi'), 1);
    assert.equal(countVowels('cool'), 2);
    assert.equal(countVowels('alone'), 3);
  });

});
