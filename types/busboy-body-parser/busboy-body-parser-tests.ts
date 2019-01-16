import express = require("express");
import busboyBodyParser = require("./index");

const app = express();

//test types
app.use("/form1", busboyBodyParser(), (req, res, next) => {
    //test multi
    let multiFile = (<busboyBodyParser.File[]>(<busboyBodyParser.Files>req.files)["a"])[0];

    // $ExpectType Buffer
    multiFile.data;
    // $ExpectType string
    multiFile.encoding
    // $ExpectType string
    multiFile.mimetype
    // $ExpectType string
    multiFile.name
    // $ExpectType number
    multiFile.size
    // $ExpectType boolean
    multiFile.truncated

    //test not multi
    let singleFile = (<busboyBodyParser.File>(<busboyBodyParser.Files>req.files)["a"]);
    // $ExpectType Buffer
    singleFile.data;
    // $ExpectType string
    singleFile.encoding;
    // $ExpectType string
    singleFile.mimetype;
    // $ExpectType string
    singleFile.name;
    // $ExpectType number
    singleFile.size;
    // $ExpectType boolean
    singleFile.truncated;
    next();
});

//test options
app.use("/form2", busboyBodyParser({
    multi:true,
    limit:"250mb"
}));
