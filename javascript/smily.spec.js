const { test, describe } = require('node:test')
const assert = require('node:assert')
const { countSmilyFace } = require('./smily')
describe('smily SDK', () => {
  for (obj of [
    {
      input: [':)', ';(', ';}', ':-D'],
      expect: 2
    },
    {
      input: [';D', ':-(', ':-)', ';~)'],
      expect: 3
    },
    {
      input: [';]', ':[', ';*', ':$', ';-D'],
      expect: 1
    }
  ]) {
    test(`input ${JSON.stringify(obj.input)} shoud return ${obj.expect}`, () => {
      assert.equal(countSmilyFace(obj.input), obj.expect);
    });
  };
});
