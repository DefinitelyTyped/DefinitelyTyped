import * as lib from 'trusted-types/lib';

// $ExpectType TrustedTypesWindow
const ttWindow = window as lib.TrustedTypesWindow;

let trustedHTML: TrustedHTML = null as any;
let libTrustedHTML: lib.TrustedHTML = null as any;
const trustedScript: TrustedScript = null as any;
const libTrustedScript: lib.TrustedScript = null as any;

// Ensure the globally available types are the same as the library-exported ones
trustedHTML = libTrustedHTML;
libTrustedHTML = trustedHTML;

// Ensure that different types are not compatible
// @ts-expect-error
trustedHTML = trustedScript;
// @ts-expect-error
trustedHTML = libTrustedScript;
// @ts-expect-error
libTrustedHTML = trustedScript;
// @ts-expect-error
libTrustedHTML = libTrustedScript;
