import fs = require('fs-ext');

var num:number;
var str:string;

//from node.js 'fs' module
fs.appendFileSync(str, "data");

fs.flock(num, str, (err)=>{
});
fs.flockSync(num, str);

fs.fcntl(num, str, num, (err, res)=>{
});
fs.fcntl(num, str, (err, res)=>{
});
fs.fcntlSync(num, str, num);

fs.seek(num, num, num, (err, pos)=>{
});
fs.seekSync(num, num, num);

fs.utime(str, num, num, (err)=>{
});
fs.utimeSync(str, num, num);
