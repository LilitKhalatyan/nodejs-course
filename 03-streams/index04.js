// /Task: Create an HTTP server using the `http` module that streams a large file to the client
// upon request instead of loading it into memory all at once.

const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'large-file.txt');

http
  .createServer((req, res) => {
    if (req.url === '/file') {
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('File not found');
          console.log('File not found');
          return;
        }

        const readStream = fs.createReadStream(filePath);

        res.writeHead(200, { 'Content-Type': 'text/plain' });

        readStream.pipe(res);

        res.on('finish', () => {
          console.log('File was successfully sent');
        });
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  })
  .listen(8080, () => {
    console.log('Server listening on port 8080');
  });
