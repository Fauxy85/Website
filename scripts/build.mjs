import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'site.js', 'styles.css', 'favicon.svg', 'sitemap.xml', 'robots.txt']) await copyFile(file, `dist/${file}`);
for (const page of ['services', 'about', 'contact']) await cp(page, `dist/${page}`, { recursive: true });
await cp('assets', 'dist/assets', { recursive: true });
console.log('ACE website built in dist/');
