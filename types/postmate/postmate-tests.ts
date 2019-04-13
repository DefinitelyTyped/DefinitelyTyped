import Postmate = require('postmate');

//
// Tests are based on code samples on https://github.com/dollarshaveclub/postmate#usage
//

///////////////////////////
// parent.com

// Kick off the handshake with the iFrame
const parentHandshake = new Postmate({
  container: document.getElementById('some-div'),
  url: 'http://child.com/page.html',
  classListArray: ["myClass"]
});

// When parent <-> child handshake is complete, data may be requested from the child
parentHandshake.then(child => {
  // Fetch the height property in child.html and set it to the iFrames height
  child.get('height')
    .then(height => child.frame.style.height = `${height}px`);

  // Listen to a particular event from the child
  child.on('some-event', data => console.log(data)); // Logs "Hello, World!"
});

///////////////////////////
// child.com/page.html

const childHandshake = new Postmate.Model({
  // Expose your model to the Parent. Property values may be functions, promises, or regular values
  height: () => (document as any).height || document.body.offsetHeight
});

// When parent <-> child handshake is complete, events may be emitted to the parent
childHandshake.then(parent => {
  parent.emit('some-event', 'Hello, World!');
});
