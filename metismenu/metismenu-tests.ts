/// <reference types="jquery"/>

$('#menu').metisMenu();
$('.metismenu').metisMenu({toggle: false});
$('.test').metisMenu({
    toggle: false,
    doubleTapToGo: true,
    activeClass: 'active',
    collapseClass: 'collapse',
    collapseInClass: 'in',
    collapsingClass: 'collapsing'
});
