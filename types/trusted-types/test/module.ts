import { TrustedTypeConfig, trustedTypes as importedTrustedTypes, TrustedTypesEnforcer } from 'trusted-types';

// $ExpectType InternalTrustedTypePolicyFactory
importedTrustedTypes;

const rules = {
    createHTML: (s: string) => s,
    createScript: (s: string) => s,
    createScriptURL: (s: string) => s,
};

const policy = importedTrustedTypes.createPolicy('test', rules);

// $ExpectType string
policy.name;
// $ExpectType TrustedHTML
policy.createHTML('');
// $ExpectType TrustedScript
policy.createScript('');
// $ExpectType TrustedScriptURL
policy.createScriptURL('');

const htmlOnlyPolicy = importedTrustedTypes.createPolicy('htmlOnly', {
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
importedTrustedTypes.isHTML(html);
// $ExpectType boolean
importedTrustedTypes.isScript(html);
// $ExpectType boolean
importedTrustedTypes.isScriptURL(html);

const policyWithArgs = importedTrustedTypes.createPolicy('withArgs', {
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

const genericPolicy = importedTrustedTypes.defaultPolicy!;

// $ExpectType TrustedHTML
genericPolicy.createHTML('', true, {});
// $ExpectType TrustedScript
genericPolicy.createScript('', true, {});
// $ExpectType TrustedScriptURL
genericPolicy.createScriptURL('', true, {});

const genericOptions: TrustedTypePolicyOptions = {};
const genericPolicy2 = importedTrustedTypes.createPolicy('generic', genericOptions);

// $ExpectType TrustedHTML
genericPolicy2.createHTML('', true, {});
// $ExpectType TrustedScript
genericPolicy2.createScript('', true, {});
// $ExpectType TrustedScriptURL
genericPolicy2.createScriptURL('', true, {});

const castedAsGenericPolicy: TrustedTypePolicy = importedTrustedTypes.createPolicy('castedAsGeneric', {
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
importedTrustedTypes.TrustedHTML;
// $ExpectType typeof TrustedScript
importedTrustedTypes.TrustedScript;
// $ExpectType typeof TrustedScriptURL
importedTrustedTypes.TrustedScriptURL;

const config = new TrustedTypeConfig(false, false, ['foo'], false);
// $ExpectType TrustedTypesEnforcer
new TrustedTypesEnforcer(config);

const config2 = new TrustedTypeConfig(false, false, ['foo'], false, null, window);
// $ExpectType TrustedTypesEnforcer
new TrustedTypesEnforcer(config);
