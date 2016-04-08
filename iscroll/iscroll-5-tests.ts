/// <reference path="iscroll-5.d.ts" />

var myScroll1 = new IScroll('#wrapper');
var myScroll2 = new IScroll('#wrapper', { hScrollbar: false, vScrollbar: false });
var myScroll3 = new IScroll('#wrapper', {
    snap: true,
    momentum: false,
    hScrollbar: false,
    vScrollbar: false
});
var myScroll4 = new IScroll('#wrapper', {
    snap: 'li',
    momentum: false,
    hScrollbar: false,
    vScrollbar: false
});
var myScroll6 = new IScroll('#wrapper', { scrollbarClass: 'myScrollbar' });
var myScroll7 = new IScroll('#wrapper', { bounceEasing: 'elastic', bounceTime: 1200 });

var myScroll8 = new IScroll('#wrapper', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });

myScroll1.refresh();
myScroll1.scrollTo(0, 100);
myScroll1.scrollTo(0, 100, 200);
myScroll1.scrollTo(0, 100, 200, true);

myScroll1.scrollToElement('selectedElement');
myScroll1.scrollToElement('selectedElement', 250);

myScroll1.scrollToElement(document.getElementById('selectedElement'));
myScroll1.scrollToElement(document.getElementById('selectedElement'), 250);

myScroll2.on('scrollStart', function () { console.log('scroll started'); });

var myScroll9 = new IScroll(document.getElementById('wrapper'));
var myScroll10 = new IScroll(document.getElementById('wrapper'), { scrollbarClass: 'myScrollbar' });