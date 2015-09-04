/// <reference path="adm-zip.d.ts" />
import AdmZip = require("adm-zip");


// reading archives
var zip = new AdmZip("./my_file.zip");
var zipEntries = zip.getEntries(); // an array of ZipEntry records

zipEntries.forEach(function (zipEntry) {
    console.log(zipEntry.toString()); // outputs zip entries information
    if (zipEntry.entryName == "my_file.txt") {
        console.log(zipEntry.getData().toString('utf8'));
    }
});
// outputs the content of some_folder/my_file.txt
console.log(zip.readAsText("some_folder/my_file.txt"));
// extracts the specified file to the specified location
zip.extractEntryTo(/*entry name*/"some_folder/my_file.txt", /*target path*/"/home/me/tempfolder", /*overwrite*/true)
// extracts everything
zip.extractAllTo(/*target path*/"/home/me/zipcontent/", /*overwrite*/true);


// creating archives
var zip = new AdmZip();

// add file directly
zip.addFile("test.txt", new Buffer("inner content of the file"), "entry comment goes here");
// add local file
zip.addLocalFile("/home/me/some_picture.png");
// get everything as a buffer
var willSendthis = zip.toBuffer();
// or write everything to disk
zip.writeZip(/*target file name*/"/home/me/files.zip");
