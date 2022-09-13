// $ExpectType TrustedTypePolicyFactory | undefined
window.trustedTypes;

// @ts-expect-error
trustedTypes;

const rules = {
    createHTML: (s: string) => s,
    createScript: (s: string) => s,
    createScriptURL: (s: string) => s,
};

// $ExpectType TrustedTypePolicyFactory
const tt = window.trustedTypes!;

const policy = tt.createPolicy('test', rules);

// $ExpectType string
policy.name;
// $ExpectType TrustedHTML
policy.createHTML('');
// $ExpectType TrustedScript
policy.createScript('');
// $ExpectType TrustedScriptURL
policy.createScriptURL('');

const htmlOnlyPolicy = tt.createPolicy('htmlOnly', {
    createHTML: (html: string) => {
        return html;
    },
});

// $ExpectType string
htmlOnlyPolicy.name;
// $ExpectType TrustedHTML
const html = htmlOnlyPolicy.createHTML('');
// @ts-expect-error
htmlOnlyPolicy.createScript('');

// $ExpectType boolean
tt.isHTML(html);
// $ExpectType boolean
tt.isScript(html);
// $ExpectType boolean
tt.isScriptURL(html);

const policyWithArgs = tt.createPolicy('withArgs', {
    createHTML: (val: string, option1: number, option2: boolean) => val,
    createScriptURL: (val: string) => val,
});

// $ExpectType TrustedHTML
policyWithArgs.createHTML('', 1, true);
// $ExpectType TrustedScriptURL
policyWithArgs.createScriptURL('');
// @ts-expect-error
policyWithArgs.createHTML('', '', true);
// @ts-expect-error
policyWithArgs.createHTML('');
// @ts-expect-error
policyWithArgs.createScript('');
// @ts-expect-error
policyWithArgs.createScriptURL('', 1, true);

const genericPolicy = tt.defaultPolicy!;

// $ExpectType TrustedHTML
genericPolicy.createHTML('', true, {});
// $ExpectType TrustedScript
genericPolicy.createScript('', true, {});
// $ExpectType TrustedScriptURL
genericPolicy.createScriptURL('', true, {});

const genericOptions: TrustedTypePolicyOptions = {};
const genericPolicy2 = tt.createPolicy('generic', genericOptions);

// $ExpectType TrustedHTML
genericPolicy2.createHTML('', true, {});
// $ExpectType TrustedScript
genericPolicy2.createScript('', true, {});
// $ExpectType TrustedScriptURL
genericPolicy2.createScriptURL('', true, {});

const castedAsGenericPolicy: TrustedTypePolicy = tt.createPolicy('castedAsGeneric', {
    createHTML: (val: string, option1: number, option2: boolean) => val,
    createScriptURL: (val: string) => val,
    createScript: (val: string) => val,
});

// $ExpectType TrustedHTML
castedAsGenericPolicy.createHTML('', true, {});
// $ExpectType TrustedScript
castedAsGenericPolicy.createScript('', true, {});
// $ExpectType TrustedScriptURL
castedAsGenericPolicy.createScriptURL('', true, {});

// Ensure the types are globally available
let trustedHTML: TrustedHTML = null as any;
const trustedScript: TrustedScript = null as any;

// @ts-expect-error
trustedHTML = trustedScript;

// @ts-expect-error
new TrustedHTML();

// $ExpectType typeof TrustedHTML
TrustedHTML;
// $ExpectType typeof TrustedScript
TrustedScript;
// $ExpectType typeof TrustedScriptURL
TrustedScriptURL;

// $ExpectType typeof TrustedHTML
window.TrustedHTML;
// $ExpectType typeof TrustedScript
window.TrustedScript;
// $ExpectType typeof TrustedScriptURL
window.TrustedScriptURL;

// @ts-expect-error
trustedTypes;
