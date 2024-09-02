// Import the http module
const http = require('http');

// Define the hostname and port for the server
const hostname = '127.0.0.1';
const port = 3000;

// Create a server object
const server = http.createServer((req, res) => {
    // Set the response HTTP header with status and content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Send the response body "Hello, World!"
    res.end('Hello, World!\n');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});