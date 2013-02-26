/// <reference path="iscroll.d.ts" />

var myScroll1 = new iScroll('wrapper');
var myScroll2 = new iScroll('wrapper', { hScrollbar: false, vScrollbar: false });
var myScroll3= new iScroll('wrapper', {
    snap: true,
    momentum: false,
    hScrollbar: false,
    vScrollbar: false
});
var myScroll4 = new iScroll('wrapper', {
    snap: 'li',
    momentum: false,
    hScrollbar: false,
    vScrollbar: false
});
var myScroll6 = new iScroll('wrapper', { scrollbarClass: 'myScrollbar' });

myScroll1.refresh();