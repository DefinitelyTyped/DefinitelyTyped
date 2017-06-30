

window.addEventListener('load', function() {
  var delegate = new Delegate(document.body);
  delegate.on('click', 'button', function(event) {
  		// Do some things
	}
);

  // Listen to all touch move
  // events that reach the body
  delegate.on('touchmove', function(event) {
  		// Do some other things
	});
}, false);