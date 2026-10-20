import { mkdir, readFile, writeFile } from 'node:fs/promises';

const title = process.env.SITE_TITLE || 'Hello GitHub Actions';
const escapedTitle = title.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);
const source = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
const page = source
  .replace(/<title>.*?<\/title>/, () => `<title>${escapedTitle}</title>`)
  .replace(/<h1>.*?<\/h1>/, () => `<h1>${escapedTitle}</h1>`);
const output = new URL('../_site/', import.meta.url);
await mkdir(output, { recursive: true });
await writeFile(new URL('index.html', output), page, 'utf8');
console.log('Built _site/index.html');
