const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Ma Ksenia !');
});

server.listen(process.env.PORT || 3000);