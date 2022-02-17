const loadPrinter = require("./app.js")
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
    console.log("Running on Server localhost3000");
});

loadPrinter.printer("Check")
loadPrinter.printer("Hello World")

var jsonData = 'data.json'
loadPrinter.writer()
loadPrinter.reader(jsonData)