///<reference path="../jquery/jquery.d.ts" />
///<reference path="jquery.maskedinput.d.ts" />

$("#test").inputmask("9:000");
$("#test").inputmask("9:000", { numeric: true });

var alies = $.inputmask.defaults.aliases;