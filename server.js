// Dependencies
var express = require("express");
var path = require("path");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 9001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var htmlRoutes = require("./app/routing/htmlRoutes");
app.use(htmlRoutes);

var apiRoutes = require("./app/routing/apiRoutes");
app.use("/api", apiRoutes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
