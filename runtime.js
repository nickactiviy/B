const http = require('http');

const port = process.env.PORT || 3000; // Gunakan PORT dari variabel lingkungan atau fallback ke 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bot Status</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
            text-align: center;
          }
          h1 {
            color: #333;
          }
          .status {
            font-size: 24px;
            color: #4CAF50;
          }
        </style>
      </head>
      <body>
        <h1>Bot Status</h1>
        <p class="status">I'm alive</p>
        <p>Server is running smoothly.</p>
      </body>
      </html>
    `);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found\n');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
            
