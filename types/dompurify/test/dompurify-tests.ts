import dompurify = require('dompurify');

dompurify.sanitize('<script>alert("hi")</script>'); // $ExpectType string
dompurify.addHook('beforeSanitizeElements', (el, data, config) => undefined);

// examples from the DOMPurify README
const dirty = '<script>alert("hi")</script><p>Totally safe<p><p onerror="blowUp()">Totally not safe</p>';
let str: string;
let elem: HTMLElement;
let frag: DocumentFragment;
let trustedHtml: TrustedHTML;

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

// extend the existing array of tags that can use Data URIs

str = dompurify.sanitize(dirty, {ADD_DATA_URI_TAGS: ['a', 'area']});

// prohibit HTML5 data attributes (default is true)
str = dompurify.sanitize(dirty, { ALLOW_DATA_ATTR: false });

str = dompurify.sanitize(dirty, { NAMESPACE: "http://www.w3.org/2000/svg" });

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

// return a TrustHTML type instead of a HTML string
trustedHtml = dompurify.sanitize(dirty, { RETURN_TRUSTED_TYPE: true });

// return entire document including <html> tags (default is false)
str = dompurify.sanitize(dirty, { WHOLE_DOCUMENT: true });

// disable DOM Clobbering protection on output (default is true, handle with care!)
str = dompurify.sanitize(dirty, { SANITIZE_DOM: false });

// discard an element's content when the element is removed (default is true)
str = dompurify.sanitize(dirty, { KEEP_CONTENT: false });

// test createDOMPurify factory that accepts custom window (very helpful for nodejs)
const createDOMPurify = dompurify;
const customDOMPurify = createDOMPurify();
customDOMPurify.sanitize(dirty);

const customWindow: Window = window;
const customDOMPurifyWithCustomWindow = createDOMPurify(customWindow);
customDOMPurifyWithCustomWindow.sanitize(dirty);

// test the 'DOMPurifyI' type is publicly accessible.
function registerDomPurifyInstance(domPurify: DOMPurify.DOMPurifyI) {}

// test the 'config' type is publicly accessible.
const config: DOMPurify.Config = {};

// test the 'HookName' type is publicly accessible.
const hookName: DOMPurify.HookName = "beforeSanitizeElements";

// test the 'HookEvent' type is publicly accessible.
dompurify.addHook(hookName, (currentNode: Element, event: DOMPurify.HookEvent) => {});

// test the 'SanitizeElementHookEvent' type is publicly accessible.
dompurify.addHook('uponSanitizeElement', (currentNode: Element, event: DOMPurify.SanitizeElementHookEvent) => {
  if (currentNode.nodeName && currentNode.nodeName.match(/^\w+-\w+$/) && !event.allowedTags[event.tagName]) {
      event.allowedTags[event.tagName] = true;
  }
});

// test the 'SanitizeAttributeHookEvent' type is publicly accessible.
dompurify.addHook('uponSanitizeAttribute', (currentNode: Element, event: DOMPurify.SanitizeAttributeHookEvent) => {
  if (event.attrName && event.attrName.match(/^\w+-\w+$/) && !event.allowedAttributes[event.attrName]) {
      event.allowedAttributes[event.attrName] = true;
      event.forceKeepAttr = true;
  }
});
