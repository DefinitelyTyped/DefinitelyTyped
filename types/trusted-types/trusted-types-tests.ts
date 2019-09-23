import TT from 'trusted-types';

// $ExpectType TrustedTypePolicyFactory
TT;

const rules = {
    createHTML: (s: string) => s,
    createScript: (s: string) => s,
    createScriptURL: (s: string) => s,
    createURL: (s: string) => s,
};

// $ExpectType string[]
window.trustedTypes.getPolicyNames();
window.trustedTypes.createPolicy('default', rules, true);

const policy = window.trustedTypes.createPolicy('test', rules);

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

const htmlOnlyPolicy = window.trustedTypes.createPolicy('htmlOnly', {
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
window.trustedTypes.isHTML(html);
// $ExpectType boolean
window.trustedTypes.isScript(html);
// $ExpectType boolean
window.trustedTypes.isScriptURL(html);
// $ExpectType boolean
window.trustedTypes.isURL(html);
