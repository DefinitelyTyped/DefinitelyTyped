

import pathwatcher = require("pathwatcher");
var File = pathwatcher.File;

var filePath: string;
var file = new File(filePath);

pathwatcher.watch(filePath, ()=>{
});
