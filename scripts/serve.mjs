import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const files = new Map([['/', ['index.html', 'text/html; charset=utf-8']], ['/index.html', ['index.html', 'text/html; charset=utf-8']], ['/styles.css', ['styles.css', 'text/css; charset=utf-8']], ['/favicon.svg', ['favicon.svg', 'image/svg+xml']]]);
files.set('/assets/ace-header.png', ['assets/ace-header.png', 'image/png']);
files.set('/assets/ace-brand.png', ['assets/ace-brand.png', 'image/png']);
files.set('/assets/ace-social-card.png', ['assets/ace-social-card.png', 'image/png']);
files.set('/sitemap.xml', ['sitemap.xml', 'application/xml; charset=utf-8']);
files.set('/robots.txt', ['robots.txt', 'text/plain; charset=utf-8']);
createServer(async (request, response) => {
  const asset = files.get(new URL(request.url, 'http://localhost').pathname);
  if (!asset) { response.writeHead(404); response.end('Not found'); return; }
  try { const content = await readFile(asset[0]); response.writeHead(200, { 'Content-Type': asset[1] }); response.end(content); }
  catch { response.writeHead(500); response.end('Unable to load page'); }
}).listen(4173, '127.0.0.1', () => console.log('ACE preview: http://127.0.0.1:4173'));
