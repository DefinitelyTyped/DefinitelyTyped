import TT from 'trusted-types';

// $ExpectType TrustedTypePolicyFactory
TT;

// $ExpectError
trustedTypes;

// $ExpectType TrustedTypePolicyFactory | undefined
window.trustedTypes;

// $ExpectType TrustedTypePolicyFactory | undefined
window.TrustedTypes;

const rules = {
    createHTML: (s: string) => s,
    createScript: (s: string) => s,
    createScriptURL: (s: string) => s,
    createURL: (s: string) => s,
};

// $ExpectType string[]
TT.getPolicyNames();
TT.createPolicy('default', rules, true);

const policy = TT.createPolicy('test', rules);

// $ExpectType string
policy.name;
// $ExpectType TrustedHTML
policy.createHTML('');
// $ExpectType TrustedScript
policy.createScript('');
// $ExpectType TrustedScriptURL
policy.createScriptURL('');
// $ExpectType TrustedURL
policy.createURL('');

const htmlOnlyPolicy = TT.createPolicy('htmlOnly', {
    createHTML: (html: string) => {
        return html;
    },
});

// $ExpectType string
htmlOnlyPolicy.name;
// $ExpectType TrustedHTML
const html = htmlOnlyPolicy.createHTML('');
// $ExpectError
htmlOnlyPolicy.createScript('');

// $ExpectType boolean
TT.isHTML(html);
// $ExpectType boolean
TT.isScript(html);
// $ExpectType boolean
TT.isScriptURL(html);
// $ExpectType boolean
TT.isURL(html);

// Ensure the types are globaly available
let trustedHTML: TrustedHTML = null as any;
const trustedScript: TrustedScript = null as any;

// $ExpectError
trustedHTML = trustedScript;

// $ExpectError
new TrustedHTML();
