import FloatingLabel = require('makeup-floating-label');

const widgetEls = document.querySelectorAll('.floating-label');

widgetEls.forEach((el: Element) => {
  const widget = new FloatingLabel(el);

  widget.refresh();
});
