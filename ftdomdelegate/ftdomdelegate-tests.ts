/// <reference path="ftdomdelegate.d.ts" />

function handleButtonClicks(event) {
  // Do some things
}

function handleTouchMove(event) {
  // Do some other things
}

window.addEventListener('load', function() {
  var delegate = new Delegate(document.body);
  delegate.on('click', 'button', handleButtonClicks);

  // Listen to all touch move
  // events that reach the body
  delegate.on('touchmove', handleTouchMove);

}, false);