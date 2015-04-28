// Type definitions for Masked Input plugin for jQuery
// Project: http://digitalbush.com/projects/masked-input-plugin
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />
///<reference path="maskedinput.d.ts" />

$("#test").inputmask("9:000");
$("#test").inputmask("9:000", { numeric: true });

var alies = $.inputmask.defaults.aliases;