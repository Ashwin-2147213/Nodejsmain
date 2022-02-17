function printmessage(message) {
    console.log("The message is " + message)
}

function fileReader(file) {
    console.log("File reader is working");
    const fs = require('fs')
    fs.readFile(file, 'utf-8', function (err, data) {
        const readData = JSON.parse(data);
        console.log(readData)
    })
}



function fileWriter() {
    console.log("Starting to write File")
    const fs = require('fs')
    // STEP 1: Reading JSON file
    const jsonFile = require("./data.json");
    // Defining new user
    var user =
    {
        ID: 111,
        Name: "ASHWIN",
        Type: "free",
        Age: 22,
        Designation:"Student"
    }
        ;

    // STEP 2: Adding new data to users object
    jsonFile.push(user);

    // STEP 3: Writing to a file
    fs.writeFile("data.json", JSON.stringify(jsonFile), err => {

        // Checking for errors
        if (err) throw err;

        console.log("Done writing"); // Success
    })
}
module.exports.printer = printmessage;
module.exports.reader = fileReader;
module.exports.writer = fileWriter;


