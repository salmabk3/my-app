
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('TP2 Jenkins Docker CI/CD successful!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running on port ${port}`);
});
