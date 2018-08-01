import getCaretCoordinates = require('textarea-caret');

const element = document.querySelector('textarea');

element!.addEventListener('input', function() {
  const caret = getCaretCoordinates(this, this.selectionEnd);
  console.log('(top, left, height) = (%s, %s, %s)', caret.top, caret.left, caret.height);
});
