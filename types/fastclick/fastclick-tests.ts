

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
import fastclick = require('fastclick');
fastclick(document.body);
new fastclick.FastClick(document.links[0]);
new fastclick.FastClick(document.links[1], {tapDelay: 50});
new fastclick.FastClick(document.links[2], {touchBoundary: 50});
