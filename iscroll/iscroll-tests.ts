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
myScroll1.scrollTo(0, 100);
myScroll1.scrollTo(0, 100, 200);
myScroll1.scrollTo(0, 100, 200, true);

myScroll1.scrollToElement('selectedElement');
myScroll1.scrollToElement('selectedElement', 250);

myScroll1.scrollToElement(document.getElementById('selectedElement'));
myScroll1.scrollToElement(document.getElementById('selectedElement'), 250);

var myScroll7 = new iScroll(document.getElementById('wrapper'));
var myScroll8 = new iScroll(document.getElementById('wrapper'), { scrollbarClass: 'myScrollbar' });