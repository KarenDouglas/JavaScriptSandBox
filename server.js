const http = require('http');

const server = http.createServer((req, res) => {
        console.log(req.url, req.method);

        // set header content type
        res.setHeader('Content-Type', 'text/html');
        res.write('<title>Queenie</title>');
        res.write('<h1>Hello, My beautiful Queen</h1>');
        res.write('<p> How may I serve you?</p>');
        res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});