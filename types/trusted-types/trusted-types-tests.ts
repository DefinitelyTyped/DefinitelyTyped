const policy = {
    createHTML: (s: string) => s,
    createScript: (s: string) => s,
    createScriptURL: (s: string) => s,
    createURL: (s: string) => s,
};

// $ExpectType string[]
TrustedTypes.getPolicyNames();
TrustedTypes.createPolicy('default', policy, true);
// $ExpectType TrustedTypePolicy | null
TrustedTypes.getExposedPolicy('default');

const trustedTypes = TrustedTypes.createPolicy('test', policy);

// $ExpectType string
const policyName = trustedTypes.name;
// $ExpectType TrustedHTML
trustedTypes.createHTML('');
// $ExpectType TrustedScript
trustedTypes.createScript('');
// $ExpectType TrustedScriptURL
trustedTypes.createScriptURL('');
// $ExpectType TrustedURL
trustedTypes.createURL('');

const htmlOnlyPolicy = TrustedTypes.createPolicy('htmlOnly', {
    createHTML: (html: string) => {
        return html;
    },
});

// $ExpectType string
const htmlOnlyName = htmlOnlyPolicy.name;
// $ExpectType TrustedHTML
const html = htmlOnlyPolicy.createHTML('');
// $ExpectError
const script = htmlOnlyPolicy.createScript('');

// $ExpectType boolean
TrustedTypes.isHTML(html);
// $ExpectType boolean
TrustedTypes.isScript(html);
// $ExpectType boolean
TrustedTypes.isScriptURL(html);
// $ExpectType boolean
TrustedTypes.isURL(html);
