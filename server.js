// =============================================================
var express = require("express");
// var path = require("path");
const fs = require("fs");

// const { json } = require("express");


// const { promisify } = require("util");
// const readFileAsync = promisify(fs.readFile);
// const writeFileAsync = promisify(fs.writeFile);

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.json());

// =================== ROUTES =====================
// ("/api", apiRoutes)
app.use(require("./controllers/notesController"))
app.use(require("./controllers/htmlController"))
// (htmlRoutes)
// // =================== ROUTES =====================

app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);

});