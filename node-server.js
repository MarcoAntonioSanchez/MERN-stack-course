const http = require("http"); // No installation of package needed, just module import as it already comes along with Node.js

const server = http.createServer((req, res) => { // Create a server and save it on variable with a req, res callback.
    // console.log("Node server up!"); // This will be printed when a client visits: http://localhost:5000
    // console.log(req.url); // This prints out the '/' url route, example: http://localhost:5000/.
    // console.log(req.method); // This prints out the GET method when a browser hits the '/' url / route.
    if (req.url === "/") { // When the root route "/" is visited, then...
        res.setHeader("Content-Type", "text/html") // Set headers, for the next response function to work.
        res.write("<h1>Home page...</h1>"); // Write as HTML, thanks to content type and html atributes.
        res.end(); // End of the response.
    }
    if (req.url === "/about") { // When another route, the "/about" route, is visited, then...
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>About page...</h1>"); // Response with a different title.
        res.end();
    }
});

server.listen("5000", "localhost", () => { // Server listening on specified port and IP address (localhost).
    console.log("Server running on port: 5000"); // This will be printed when node executes it with command: node node-server.
});

// 127.0.0.1 = localhost: IP address of local computer.
// PORT 5000