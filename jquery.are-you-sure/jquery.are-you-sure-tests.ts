// Type definitions for jquery.are-you-sure.js
// Project: https://github.com/codedance/jquery.AreYouSure
// Definitions by: Jon Egerton <https://github.com/jonegerton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>

//Use defaults
$("test").areYouSure();

//Use all settings
$("test").areYouSure({
    message: "Oops - sure you wanna leave?",
    dirtyClass: "soiled",
    fieldSelector: "input[type='text']",
    change: function () { alert("changed");},
	silent: true
})