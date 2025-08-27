import * as splitFile from "split-file";

// Example code from official documentation
// https://github.com/tomvlk/node-split-file#readme

splitFile
    .splitFile(__dirname + "/testfile.bin", 3)
    .then(names => {
        console.log(names);
    })
    .catch(err => {
        console.log("Error: ", err);
    });

splitFile
    .splitFileBySize(__dirname + "/testfile.bin", 457000)
    .then(names => {
        console.log(names);
    })
    .catch(err => {
        console.log("Error: ", err);
    });

const files = ["testfile.bin.sf-part1", "testfile.bin.sf-part2", "testfile.bin.sf-part3"];

splitFile
    .mergeFiles(files, __dirname + "/testfile-output.bin")
    .then(() => {
        console.log("Done!");
    })
    .catch(err => {
        console.log("Error: ", err);
    });
