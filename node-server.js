const http = require("http"); // No installation of package needed, just module import as it already comes along with Node.js

const server = http.createServer((req, res) => { // Create a server and save it on variable with a req, res callback.
    console.log("Node server up!"); // This will be printed when a client visits: http://localhost:5000
});

server.listen("5000", "localhost", () => { // Server listening on specified port and IP address (localhost).
    console.log("Server running on port: 5000"); // This will be printed when node executes it with command: node node-server.
});

// 127.0.0.1 = localhost: IP address of local computer.
// PORT 5000