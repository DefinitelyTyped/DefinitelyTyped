const policy = {
	createHTML: (s: string) => s,
	createScript: (s: string) => s,
	createScriptURL: (s: string) => s,
	createURL: (s: string) => s,
};

TrustedTypes.getPolicyNames();
TrustedTypes.createPolicy('default', policy, true);
TrustedTypes.getExposedPolicy('default');

const trustedTypes = TrustedTypes.createPolicy('test', policy);

trustedTypes.createHTML('') instanceof TrustedHTML;
trustedTypes.createScript('') instanceof TrustedScript;
trustedTypes.createScriptURL('') instanceof TrustedScriptURL;
trustedTypes.createURL('') instanceof TrustedURL;
