/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery.menuaim.d.ts" />
$('div').menuAim({
    activate: function () { },
    deactivate: function () { },
    enter: function () { },
    exit: function () { },
    exitMenu: function () { },
    rowSelector: "> li",
    submenuSelector: "*",
    submenuDirection: "right"
});