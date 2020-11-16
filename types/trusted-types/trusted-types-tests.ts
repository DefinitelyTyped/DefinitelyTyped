import TT from 'trusted-types';

// $ExpectType TrustedTypePolicyFactory
TT;

// $ExpectError
trustedTypes;

// $ExpectType TrustedTypePolicyFactory | undefined
window.trustedTypes;

const rules = {
    createHTML: (s: string) => s,
    createScript: (s: string) => s,
    createScriptURL: (s: string) => s,
};

const createPolicy = TT.createPolicy;
const policy = createPolicy('test', rules);

// $ExpectType string
policy.name;
// $ExpectType TrustedHTML
policy.createHTML('');
// $ExpectType TrustedScript
policy.createScript('');
// $ExpectType TrustedScriptURL
policy.createScriptURL('');

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

const policyWithArgs = TT.createPolicy('withArgs', {
    createHTML: (val: string, option1: number, option2: boolean) => val,
    createScriptURL: (val: string) => val,
});

// $ExpectType TrustedHTML
policyWithArgs.createHTML('', 1, true);
// $ExpectType TrustedScriptURL
policyWithArgs.createScriptURL('');
// $ExpectError
policyWithArgs.createHTML('', '', true);
// $ExpectError
policyWithArgs.createHTML('');
// $ExpectError
policyWithArgs.createScript('');
// $ExpectError
policyWithArgs.createScriptURL('', 1, true);

const genericPolicy = TT.defaultPolicy!;

// $ExpectType TrustedHTML
genericPolicy.createHTML('', true, {});
// $ExpectType TrustedScript
genericPolicy.createScript('', true, {});
// $ExpectType TrustedScriptURL
genericPolicy.createScriptURL('', true, {});

const genericOptions: TrustedTypePolicyOptions = {};
const genericPolicy2 = TT.createPolicy('generic', genericOptions);

// $ExpectType TrustedHTML
genericPolicy2.createHTML('', true, {});
// $ExpectType TrustedScript
genericPolicy2.createScript('', true, {});
// $ExpectType TrustedScriptURL
genericPolicy2.createScriptURL('', true, {});

const castedAsGenericPolicy: TrustedTypePolicy = TT.createPolicy('castedAsGeneric', {
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

// $ExpectError
trustedHTML = trustedScript;

// $ExpectError
new TrustedHTML();
