import { test, describe } from 'node:test'
import assert from 'node:assert'
import { findOddNumber } from './odd-number'
describe('odd-number SDK', () => {
  for (let obj of [
    {
      input: [7],
      expect: 7
    },
    {
      input: [0],
      expect: 0
    },
    {
      input: [1, 1, 2],
      expect: 2
    },
    {
      input: [0, 1, 0, 1, 0],
      expect: 0
    },
    {
      input: [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1],
      expect: 4
    }
  ]) {
    test(`input ${JSON.stringify(obj.input)} shoud return ${obj.expect}`, () => {
      assert.equal(findOddNumber(obj.input), obj.expect);
    });
  };
});