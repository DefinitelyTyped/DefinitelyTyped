

/* Constructor test */
var tester: BlazyInstance = new Blazy({
  breakpoints: [
    {
      width: 420,
      src: 'data-src-small'
    },
    {
      width: 768,
      src: 'data-src-medium'
    }
  ],
  container: '#scrolling-container',
  error: function(ele: HTMLElement, msg: string) {
    if (msg === 'missing') {
      console.log('missing');
    }
    else if (msg === 'invalid') {
      console.log('invalid');
    }
  },
  errorClass: 'b-error',
  loadInvisible: false,
  offset: 100,
  saveViewportOffsetDelay: 50,
  selector: '.b-lazy',
  separator: '|',
  src: 'data-src',
  success: function(ele: HTMLElement) {
    console.log('success');
  },
  successClass: 'b-loaded',
  validateDelay: 25
});

/* Functions tests */
tester.revalidate();

var elements = document.getElementsByTagName('img');
tester.load(elements, true);

tester.destroy();
