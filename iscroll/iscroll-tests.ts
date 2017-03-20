import IScroll = require('iscroll');
import IScrollLite = require('iscroll/build/iscroll-lite');
import IScrollProbe = require('iscroll/build/iscroll-probe');
import IScrollZoom = require('iscroll/build/iscroll-zoom');
import IScrollInfinite = require('iscroll/build/iscroll-infinite');

const myScroll1 = new IScroll('#wrapper');
const myScroll2 = new IScroll('#wrapper', { hScrollbar: false, vScrollbar: false });
const myScroll3 = new IScroll('#wrapper', {
  snap      : true,
  momentum  : false,
  hScrollbar: false,
  vScrollbar: false
});
const myScroll4 = new IScroll('#wrapper', {
  snap      : 'li',
  momentum  : false,
  hScrollbar: false,
  vScrollbar: false
});
const myScroll6 = new IScroll('#wrapper', { scrollbarClass: 'myScrollbar' });
const myScroll7 = new IScroll('#wrapper', { bounceEasing: 'elastic', bounceTime: 1200 });

const myScroll8 = new IScroll('#wrapper', {
  eventPassthrough: true,
  scrollX         : true,
  scrollY         : false,
  preventDefault  : false
});

myScroll1.refresh();
myScroll1.scrollTo(0, 100);
myScroll1.scrollTo(0, 100, 200);
myScroll1.scrollTo(0, 100, 200, IScroll.utils.ease.back);

myScroll1.scrollToElement('selectedElement');
myScroll1.scrollToElement('selectedElement', 250);

myScroll1.scrollToElement(document.getElementById('selectedElement'));
myScroll1.scrollToElement(document.getElementById('selectedElement'), 250);

myScroll2.on('scrollStart', function () { console.log('scroll started'); });

const myScroll9  = new IScroll(document.getElementById('wrapper'));
const myScroll10 = new IScroll(document.getElementById('wrapper'), { scrollbarClass: 'myScrollbar' });
const myScroll11 = new IScroll(document.getElementById('wrapper'), { preventDefaultException: [/^(INPUT|TEXTAREA|BUTTON|SELECT)$/] });
const myScroll12 = new IScroll(document.getElementById('wrapper'), { preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ } });

const myScroll13 = new IScroll(document.getElementById('wrapper'), { bounceEasing: 'circular' });
const myScroll14 = new IScroll(document.getElementById('wrapper'), {
  bounceEasing: {
    style: 'cubic-bezier(0,0,1,1)',
    fn   : function (k) { return k; }
  }
});

const iscrollInfinite = new IScrollInfinite('');
const iscrollLite     = new IScrollLite('');
const iscrollProbe    = new IScrollProbe('');
const iscrollZoom     = new IScrollZoom('');
iscrollInfinite.updateCache();
iscrollLite.refresh();
iscrollProbe.refresh();
iscrollZoom.zoom(2);
