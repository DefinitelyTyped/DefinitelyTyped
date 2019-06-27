import dompurify = require('dompurify');

dompurify.sanitize('<script>alert("hi")</script>');
dompurify.addHook('beforeSanitizeElements', (el, data, config) => undefined);

//examples from the DOMPurify README
let dirty = '<script>alert("hi")</script><p>Totally safe<p><p onerror="blowUp()">Totally not safe</p>';
let str: string;
let elem: HTMLElement;
let frag: DocumentFragment;

// allow only <b>
str = dompurify.sanitize(dirty, { ALLOWED_TAGS: ['b'] });

// allow only <b> and <q> with style attributes (for whatever reason)
str = dompurify.sanitize(dirty, { ALLOWED_TAGS: ['b', 'q'], ALLOWED_ATTR: ['style'] });

// leave all as it is but forbid <style>
str = dompurify.sanitize(dirty, { FORBID_TAGS: ['style'] });

// leave all as it is but forbid style attributes
str = dompurify.sanitize(dirty, { FORBID_ATTR: ['style'] });

// extend the existing array of allowed tags
str = dompurify.sanitize(dirty, { ADD_TAGS: ['my-tag'] });

// extend the existing array of attributes
str = dompurify.sanitize(dirty, { ADD_ATTR: ['my-attr'] });

// prohibit HTML5 data attributes (default is true)
str = dompurify.sanitize(dirty, { ALLOW_DATA_ATTR: false });

// return a DOM HTMLBodyElement instead of an HTML string (default is false)
str = dompurify.sanitize(dirty, { RETURN_DOM: false });
elem = dompurify.sanitize(dirty, { RETURN_DOM: true });
elem = dompurify.sanitize(dirty, { RETURN_DOM: true, RETURN_DOM_FRAGMENT: false });

// return a DOM DocumentFragment instead of an HTML string (default is false)
str = dompurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: false });
frag = dompurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true });
frag = dompurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true, RETURN_DOM: false });
frag = dompurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true, RETURN_DOM: true });

// return a DOM DocumentFragment instead of an HTML string (default is false)
// also import it into the current document (default is false).
// RETURN_DOM_IMPORT must be set if you would like to append
// the returned node to the current document
frag = dompurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true, RETURN_DOM_IMPORT: true });

// return entire document including <html> tags (default is false)
str = dompurify.sanitize(dirty, { WHOLE_DOCUMENT: true });

// make output safe for usage in jQuery's $()/html() method (default is false)
str = dompurify.sanitize(dirty, { SAFE_FOR_JQUERY: true });

// disable DOM Clobbering protection on output (default is true, handle with care!)
str = dompurify.sanitize(dirty, { SANITIZE_DOM: false });

// discard an element's content when the element is removed (default is true)
str = dompurify.sanitize(dirty, { KEEP_CONTENT: false });

// test createDOMPurify factory that accepts custom window (very helpful for nodejs)
const createDOMPurify = dompurify;
const customDOMPurify = createDOMPurify();
customDOMPurify.sanitize(dirty);

const customWindow = {} as Window;
const customDOMPurifyWithCustomWindow = createDOMPurify(customWindow);
customDOMPurifyWithCustomWindow.sanitize(dirty);
