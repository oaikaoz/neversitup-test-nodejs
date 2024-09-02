import { test, describe } from 'node:test'
import assert from 'node:assert'
import { manipulate } from './manipulate'
describe('manipulate SDK', () => {
  for (let obj of [
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
