import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('home page contains a heading and UTF-8 encoding', async () => {
  const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
  assert.match(html, /<h1>Hello GitHub Actions<\/h1>/);
  assert.match(html, /<meta charset="UTF-8">/);
});

test('home page has a title', async () => {
  const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
  assert.match(html, /<title>.+<\/title>/);
});

test('home page declares Thai as its language', async () => {
  const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
  assert.match(html, /<html lang="th">/);
});
