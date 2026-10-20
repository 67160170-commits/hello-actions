import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, divide, sortNumbers, fetchScore } from '../math.js';

test('adds two positive numbers', () => {
  assert.equal(add(1, 2), 3);
});

test('adds negative numbers', () => {
  assert.equal(add(-2, -3), -5);
});

test('adding zero preserves the number', () => {
  assert.equal(add(7, 0), 7);
});

test('adds decimal numbers within floating-point tolerance', () => {
  assert.ok(Math.abs(add(0.1, 0.2) - 0.3) < 1e-9);
});

test('divides numbers', () => {
  assert.equal(divide(10, 4), 2.5);
});

test('rejects division by zero', () => {
  assert.throws(() => divide(1, 0), /หารด้วยศูนย์ไม่ได้/);
});

test('sorts numerically rather than alphabetically', () => {
  assert.deepEqual(sortNumbers([10, 2, -1, 2]), [-1, 2, 2, 10]);
});

test('sorting preserves the original array', () => {
  const original = [3, 1, 2];
  sortNumbers(original);
  assert.deepEqual(original, [3, 1, 2]);
});

test('sorts an empty array', () => {
  assert.deepEqual(sortNumbers([]), []);
});

test('fetchScore resolves with the requested id and score', async () => {
  assert.deepEqual(await fetchScore(7), { id: 7, score: 80 });
});

test('fetchScore accepts id zero', async () => {
  assert.deepEqual(await fetchScore(0), { id: 0, score: 80 });
});

test('fetchScore rejects a negative id', async () => {
  await assert.rejects(fetchScore(-1), /ไม่ติดลบ/);
});
