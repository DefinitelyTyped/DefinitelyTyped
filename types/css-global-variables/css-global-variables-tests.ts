import { CSSGlobalVariables } from 'css-global-variables';

export const CSSVars = new CSSGlobalVariables({
    filter: '*',
    autoprefix: false,
    normalize: name => name.toUpperCase(),
});
