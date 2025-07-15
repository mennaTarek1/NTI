const fs = require('fs');
const http = require('http');
const url = require('url');
const nunjucks = require('nunjucks'); 

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const posts = JSON.parse(data);
const template = fs.readFileSync('temp.html', 'utf-8');

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === '/' || pathname === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const html = nunjucks.renderString(template, {
      posts,
      singlePost: false
    });

    res.end(html);

  } else if (pathname === '/post') {
    const id = Number(query.id);
    const post = posts[id];

    if (!post) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('<h1>Post not found</h1>');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });

    const html = nunjucks.renderString(template, {
      ...post,
      singlePost: true
    });

    res.end(html);

  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(posts));

  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page not found!!! Error 404</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
