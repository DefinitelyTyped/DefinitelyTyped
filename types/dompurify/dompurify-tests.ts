

import dompurify = require('dompurify');

dompurify.sanitize('<script>alert("hi")</script>');
dompurify.addHook('beforeSanitizeElements', (el, data, config) => {
  return el;
});

//examples from the DOMPurify README
let dirty = '<script>alert("hi")</script><p>Totally safe<p><p onerror="blowUp()">Totally not safe</p>';

// allow only <b>
dompurify.sanitize(dirty, {ALLOWED_TAGS: ['b']});

// allow only <b> and <q> with style attributes (for whatever reason)
dompurify.sanitize(dirty, {ALLOWED_TAGS: ['b', 'q'], ALLOWED_ATTR: ['style']});

// leave all as it is but forbid <style>
dompurify.sanitize(dirty, {FORBID_TAGS: ['style']});

// leave all as it is but forbid style attributes
dompurify.sanitize(dirty, {FORBID_ATTR: ['style']});

// extend the existing array of allowed tags
dompurify.sanitize(dirty, {ADD_TAGS: ['my-tag']});

// extend the existing array of attributes
dompurify.sanitize(dirty, {ADD_ATTR: ['my-attr']});

// prohibit HTML5 data attributes (default is true)
dompurify.sanitize(dirty, {ALLOW_DATA_ATTR: false});

// return a DOM HTMLBodyElement instead of an HTML string (default is false)
dompurify.sanitize(dirty, {RETURN_DOM: true});

// return a DOM DocumentFragment instead of an HTML string (default is false)
dompurify.sanitize(dirty, {RETURN_DOM_FRAGMENT: true});

// return a DOM DocumentFragment instead of an HTML string (default is false)
// also import it into the current document (default is false).
// RETURN_DOM_IMPORT must be set if you would like to append
// the returned node to the current document
let clean = dompurify.sanitize(dirty, {RETURN_DOM_FRAGMENT: true, RETURN_DOM_IMPORT: true});
document.body.appendChild(clean);

// return entire document including <html> tags (default is false)
dompurify.sanitize(dirty, {WHOLE_DOCUMENT: true});

// make output safe for usage in jQuery's $()/html() method (default is false)
dompurify.sanitize(dirty, {SAFE_FOR_JQUERY: true});

// disable DOM Clobbering protection on output (default is true, handle with care!)
dompurify.sanitize(dirty, {SANITIZE_DOM: false});

// discard an element's content when the element is removed (default is true)
dompurify.sanitize(dirty, {KEEP_CONTENT: false});
