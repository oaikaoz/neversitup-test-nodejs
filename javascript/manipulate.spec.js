const { test, describe } = require('node:test')
const assert = require('node:assert')
const { manipulate } = require('./manipulate')
describe('manipulate SDK', () => {
  for (obj of [
    {
      input: "a",
      expect: ["a"]
    },
    {
      input: "ab",
      expect: ["ab", "ba"]
    },
    {
      input: "abc",
      expect: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
    },
    {
      input: "aabb",
      expect: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
    }
  ]) {
    test(`input ${obj.input} shoud return ${JSON.stringify(obj.expect)}`, () => {
      assert.deepEqual(manipulate(obj.input), obj.expect);
    });
  };
})

