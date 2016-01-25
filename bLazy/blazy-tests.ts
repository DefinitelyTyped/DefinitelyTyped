/// <reference path="blazy.d.ts" />

/* Constructor test */
var tester: blazyInstance = new Blazy({
  breakpoints: [
    {
      width: 420,
      src: 'data-src-small'
    },
    {
      width: 768,
      src: 'data-src-medium'
    }
	];
  container: '#scrolling-container';
  error: function(ele: HTMLElement, msg: string) {
    if (msg === 'missing') {
      alert('missing');
    }
    else if (msg === 'invalid') {
      alert('invalid');
    }  
  }
  errorClass: 'b-error';
  loadInvisible: false;
  offset: 100;
  saveViewportOffsetDelay: 50;
  selector: '.b-lazy';
  separator: '|';
  src: 'data-src';
  success: (ele: Element|HTMLElement|JQueryStatic) => void;
  successClass: 'b-loaded';
  validateDelay: 25;
});

/* Functions tests */
tester.revalidate();

var elements = document.getElementsByTagName('img');
tester.load(elements, true);

tester.destroy();
