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
