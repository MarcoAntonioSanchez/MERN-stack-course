const express = require("express"); // Importing express module to use it.

const app = express(); // Initializing variable app with express() function.

// Routes
app.get("/", (req, res) => { // We use app.get, to specify the root route, with a callback with a request / response attributes.
    res.send("<h1>Welcome to the home page...</h2>"); // Sening the response, when the client send a request to the root route.
})
app.get("/about", (req, res) => { // We use app.get, to specify the root route, with a callback with a request / response attributes.
    res.send("<h1>Welcome to the about page...</h2>"); // Sening the response, when the client send a request to the root route.
})

app.listen("5000", ()=> { // Setting up app to listen on port 5000.
    console.log("Server running on port 5000"); // Printing out a display message of app listening / running.
});