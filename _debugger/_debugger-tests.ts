/// <reference path="_debugger.d.ts"/>
import _debugger = require("_debugger");
var {Client} = _debugger;

var client = new Client();

client.connect(8888, 'localhost');
client.listbreakpoints((err, res) => {

});
