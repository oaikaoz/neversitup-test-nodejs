import { test, describe } from 'node:test'
import assert from 'node:assert'
import { countSmilyFace } from './smily'
describe('smily SDK', () => {
  for (let obj of [
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