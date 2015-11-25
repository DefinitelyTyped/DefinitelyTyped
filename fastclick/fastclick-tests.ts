/// <reference path="fastclick.d.ts" />

// on browser
new FastClick(document.body);
new FastClick(document.getElementById('foo'), {tapDelay: 50});
new FastClick(document.getElementsByTagName('p')[0], {touchBoundary: 50});
var fc = FastClick.attach(document.body);
fc.determineEventType(document.getElementsByClassName('foo')).concat('bar');
fc.findControl(document.querySelector('label'));
fc.focus(document.querySelectorAll('section')[0]);
document.body.addEventListener('click', function(e) {
	fc.getTargetElementFromEventTarget(e.target);
	fc.needsClick(e.target);
	fc.needsFocus(e.target);
});

// on CommonJS environment
import attachFastClick = require('fastclick');
attachFastClick(document.body);
