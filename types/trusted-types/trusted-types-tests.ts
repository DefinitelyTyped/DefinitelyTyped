import { trustedTypes, TrustedTypesEnforcer, TrustedTypeConfig } from 'trusted-types';

// $ExpectType InternalTrustedTypePolicyFactory
trustedTypes;

// $ExpectType TrustedTypePolicyFactory | undefined
window.trustedTypes;

const rules = {
    createHTML: (s: string) => s,
    createScript: (s: string) => s,
    createScriptURL: (s: string) => s,
};

const createPolicy = trustedTypes.createPolicy;
const policy = createPolicy('test', rules);

// $ExpectType string
policy.name;
// $ExpectType TrustedHTML
policy.createHTML('');
// $ExpectType TrustedScript
policy.createScript('');
// $ExpectType TrustedScriptURL
policy.createScriptURL('');

const htmlOnlyPolicy = trustedTypes.createPolicy('htmlOnly', {
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
trustedTypes.isHTML(html);
// $ExpectType boolean
trustedTypes.isScript(html);
// $ExpectType boolean
trustedTypes.isScriptURL(html);

const policyWithArgs = trustedTypes.createPolicy('withArgs', {
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

const genericPolicy = trustedTypes.defaultPolicy!;

// $ExpectType TrustedHTML
genericPolicy.createHTML('', true, {});
// $ExpectType TrustedScript
genericPolicy.createScript('', true, {});
// $ExpectType TrustedScriptURL
genericPolicy.createScriptURL('', true, {});

const genericOptions: TrustedTypePolicyOptions = {};
const genericPolicy2 = trustedTypes.createPolicy('generic', genericOptions);

// $ExpectType TrustedHTML
genericPolicy2.createHTML('', true, {});
// $ExpectType TrustedScript
genericPolicy2.createScript('', true, {});
// $ExpectType TrustedScriptURL
genericPolicy2.createScriptURL('', true, {});

const castedAsGenericPolicy: TrustedTypePolicy = trustedTypes.createPolicy('castedAsGeneric', {
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

// $ExpectType typeof TrustedHTML
TrustedHTML;
// $ExpectType typeof TrustedScript
TrustedScript;
// $ExpectType typeof TrustedScriptURL
TrustedScriptURL;

// $ExpectType TrustedHTML
trustedTypes.TrustedHTML;
// $ExpectType TrustedScript
trustedTypes.TrustedScript;
// $ExpectType TrustedScriptURL
trustedTypes.TrustedScriptURL;

// $ExpectError
window.trustedTypes?.TrustedHTML;
// $ExpectError
window.trustedTypes?.TrustedScript;
// $ExpectError
window.trustedTypes?.TrustedScriptURL;

const config = new TrustedTypeConfig(false, false, ['foo'], false);
// $ExpectType TrustedTypesEnforcer
new TrustedTypesEnforcer(config);

const config2 = new TrustedTypeConfig(false, false, ['foo'], false, null, window);
// $ExpectType TrustedTypesEnforcer
new TrustedTypesEnforcer(config);
