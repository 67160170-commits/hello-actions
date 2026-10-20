import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import * as math from '../math.js';

describe('isPrime', () => {
  for (const [number, expected] of [
    [-7, false],
    [0, false],
    [1, false],
    [2, true],
    [9, false],
    [13, true],
  ]) {
    test(`isPrime(${number}) returns ${expected}`, () => {
      assert.equal(math.isPrime(number), expected);
    });
  }
});
