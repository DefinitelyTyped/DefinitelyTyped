// Type definitions for react-native-md5 1.0
// Project: https://www.npmjs.com/package/react-native-md5
// Definitions by: redcontritio <https://github.com/RedContritio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function hex_md5(s: string): string;
export function b64_md5(s: string): string;
export function str_md5(s: string): string;
export function hex_hmac_md5(key: string, data: string): string;
export function b64_hmac_md5(key: string, data: string): string;
export function str_hmac_md5(key: string, data: string): string;
