import express = require("express");
import busboyBodyParser = require("./index");

const app = express();

//test types
app.use("/form1", busboyBodyParser(), (req, res, next) => {
    //test multi
    let multiFile = (<busboyBodyParser.File[]>(<busboyBodyParser.Files>req.files)["a"])[0];
    console.log(<Buffer>multiFile.data);
    console.log(<string>multiFile.encoding)
    console.log(<string>multiFile.mimetype)
    console.log(<string>multiFile.name)
    console.log(<number>multiFile.size)
    console.log(<boolean>multiFile.truncated)

    //test not multi
    let singleFile = (<busboyBodyParser.File>(<busboyBodyParser.Files>req.files)["a"]);
    console.log(<Buffer>singleFile.data);
    console.log(<string>singleFile.encoding)
    console.log(<string>singleFile.mimetype)
    console.log(<string>singleFile.name)
    console.log(<number>singleFile.size)
    console.log(<boolean>singleFile.truncated)
    next();
});

//test options
app.use("/form2", busboyBodyParser({
    multi:true,
    limit:"250mb"
}));
