import DOMPurify = require('dompurify');

DOMPurify.sanitize('<script>alert("hi")</script>'); // $ExpectType string
DOMPurify.addHook('beforeSanitizeElements', (el, data, config) => undefined);

// examples from the DOMPurify README
const dirty = '<script>alert("hi")</script><p>Totally safe<p><p onerror="blowUp()">Totally not safe</p>';
let str: string;
let elem: HTMLElement;
let frag: DocumentFragment;
let trustedHtml: TrustedHTML;

// allow only <b>
str = DOMPurify.sanitize(dirty, { ALLOWED_TAGS: ['b'] });

// allow only <b> and <q> with style attributes (for whatever reason)
str = DOMPurify.sanitize(dirty, { ALLOWED_TAGS: ['b', 'q'], ALLOWED_ATTR: ['style'] });

DOMPurify.sanitize('<div><b>preserve me</b></div><p><b>no not preserve me</b></p>', {
    FORBID_CONTENTS: ['p'],
    FORBID_TAGS: ['div', 'p'],
});

// leave all as it is but forbid <style>
str = DOMPurify.sanitize(dirty, { FORBID_TAGS: ['style'] });

// leave all as it is but forbid style attributes
str = DOMPurify.sanitize(dirty, { FORBID_ATTR: ['style'] });

// extend the existing array of allowed tags
str = DOMPurify.sanitize(dirty, { ADD_TAGS: ['my-tag'] });

// extend the existing array of attributes
str = DOMPurify.sanitize(dirty, { ADD_ATTR: ['my-attr'] });

// extend the existing array of tags that can use Data URIs

str = DOMPurify.sanitize(dirty, { ADD_DATA_URI_TAGS: ['a', 'area'] });

// prohibit HTML5 data attributes (default is true)
str = DOMPurify.sanitize(dirty, { ALLOW_DATA_ATTR: false });

str = DOMPurify.sanitize(dirty, { NAMESPACE: 'http://www.w3.org/2000/svg' });

str = DOMPurify.sanitize(dirty, { PARSER_MEDIA_TYPE: 'text/html' });

// return a DOM HTMLBodyElement instead of an HTML string (default is false)
str = DOMPurify.sanitize(dirty, { RETURN_DOM: false });
elem = DOMPurify.sanitize(dirty, { RETURN_DOM: true });
elem = DOMPurify.sanitize(dirty, { RETURN_DOM: true, RETURN_DOM_FRAGMENT: false });

// return a DOM DocumentFragment instead of an HTML string (default is false)
str = DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: false });
frag = DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true });
frag = DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true, RETURN_DOM: false });
frag = DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true, RETURN_DOM: true });

// return a DOM DocumentFragment instead of an HTML string (default is false)
// also import it into the current document (default is false).
// RETURN_DOM_IMPORT must be set if you would like to append
// the returned node to the current document
frag = DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true, RETURN_DOM_IMPORT: true });

// return a TrustHTML type instead of a HTML string
trustedHtml = DOMPurify.sanitize(dirty, { RETURN_TRUSTED_TYPE: true });

// return entire document including <html> tags (default is false)
str = DOMPurify.sanitize(dirty, { WHOLE_DOCUMENT: true });

// disable DOM Clobbering protection on output (default is true, handle with care!)
str = DOMPurify.sanitize(dirty, { SANITIZE_DOM: false });

// discard an element's content when the element is removed (default is true)
str = DOMPurify.sanitize(dirty, { KEEP_CONTENT: false });

// test createDOMPurify factory that accepts custom window (very helpful for nodejs)
const createDOMPurify = DOMPurify;
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
const hookName: DOMPurify.HookName = 'beforeSanitizeElements';

// test the 'HookEvent' type is publicly accessible.
DOMPurify.addHook(hookName, (currentNode: Element, event: DOMPurify.HookEvent) => {});

// test the 'SanitizeElementHookEvent' type is publicly accessible.
DOMPurify.addHook('uponSanitizeElement', (currentNode: Element, event: DOMPurify.SanitizeElementHookEvent) => {
    if (currentNode.nodeName && currentNode.nodeName.match(/^\w+-\w+$/) && !event.allowedTags[event.tagName]) {
        event.allowedTags[event.tagName] = true;
    }
});

// test the 'SanitizeAttributeHookEvent' type is publicly accessible.
DOMPurify.addHook('uponSanitizeAttribute', (currentNode: Element, event: DOMPurify.SanitizeAttributeHookEvent) => {
    if (event.attrName && event.attrName.match(/^\w+-\w+$/) && !event.allowedAttributes[event.attrName]) {
        event.allowedAttributes[event.attrName] = true;
        event.forceKeepAttr = true;
    }
});
