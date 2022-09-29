import DOMPurify = require('dompurify');

DOMPurify.addHook('beforeSanitizeElements', (el, data, config) => undefined);

// examples from the DOMPurify README
const dirty = '<script>alert("hi")</script><p>Totally safe<p><p onerror="blowUp()">Totally not safe</p>';
let frag: DocumentFragment;
let trustedHtml: TrustedHTML;

DOMPurify.sanitize('<div><b>preserve me</b></div><p><b>no not preserve me</b></p>', {
    FORBID_CONTENTS: ['p'],
    FORBID_TAGS: ['div', 'p'],
});

DOMPurify.sanitize('<script>alert("hi")</script>'); // $ExpectType string
DOMPurify.sanitize(dirty, { ADD_ATTR: ['my-attr'] }); // $ExpectType string
DOMPurify.sanitize(dirty, { ADD_DATA_URI_TAGS: ['a', 'area'] }); // $ExpectType string
DOMPurify.sanitize(dirty, { ADD_TAGS: ['my-tag'] }); // $ExpectType string
DOMPurify.sanitize(dirty, { ADD_URI_SAFE_ATTR: ['my-attr'] }); // $ExpectType string
DOMPurify.sanitize(dirty, { ALLOW_ARIA_ATTR: false }); // $ExpectType string
DOMPurify.sanitize(dirty, { ALLOW_DATA_ATTR: false }); // $ExpectType string
DOMPurify.sanitize(dirty, { ALLOWED_TAGS: ['b', 'q'], ALLOWED_ATTR: ['style'] }); // $ExpectType string
DOMPurify.sanitize(dirty, { ALLOWED_TAGS: ['b'] }); // $ExpectType string
DOMPurify.sanitize(dirty, { FORBID_ATTR: ['style'] }); // $ExpectType string
DOMPurify.sanitize(dirty, { FORBID_TAGS: ['style'] }); // $ExpectType string
DOMPurify.sanitize(dirty, { KEEP_CONTENT: false }); // $ExpectType string
DOMPurify.sanitize(dirty, { NAMESPACE: 'http://www.w3.org/2000/svg' }); // $ExpectType string
DOMPurify.sanitize(dirty, { PARSER_MEDIA_TYPE: 'text/html' }); // $ExpectType string
DOMPurify.sanitize(dirty, { RETURN_DOM: false }); // $ExpectType string
DOMPurify.sanitize(dirty, { SANITIZE_DOM: false }); // $ExpectType string
DOMPurify.sanitize(dirty, { SANITIZE_NAMED_PROPS: true }); // $ExpectType string
DOMPurify.sanitize(dirty, { WHOLE_DOCUMENT: true }); // $ExpectType string
// $ExpectType string
DOMPurify.sanitize(dirty, {
    CUSTOM_ELEMENT_HANDLING: {
        tagNameCheck: /foo/,
        attributeNameCheck: attr => attr === 'baz',
        allowCustomizedBuiltInElements: true,
    },
});

DOMPurify.sanitize(dirty, { RETURN_DOM: true }); // $ExpectType HTMLElement
DOMPurify.sanitize(dirty, { RETURN_DOM: true, RETURN_DOM_FRAGMENT: false }); // $ExpectType HTMLElement

// return a DOM DocumentFragment instead of an HTML string (default is false)
DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: false }); // $ExpectType string
DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true }); // $ExpectType DocumentFragment
DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true, RETURN_DOM: false }); // $ExpectType DocumentFragment
DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true, RETURN_DOM: true }); // $ExpectType DocumentFragment

// return a DOM DocumentFragment instead of an HTML string (default is false)
// also import it into the current document (default is false).
// RETURN_DOM_IMPORT must be set if you would like to append
// the returned node to the current document
frag = DOMPurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true, RETURN_DOM_IMPORT: true });

// return a TrustHTML type instead of a HTML string
trustedHtml = DOMPurify.sanitize(dirty, { RETURN_TRUSTED_TYPE: true });

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
