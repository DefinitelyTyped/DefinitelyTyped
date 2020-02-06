// Type definitions for smshelper 0.1
// Project: https://github.com/jaygel179/smshelper.js#readme
// Definitions by: André Matthies <https://github.com/matthiez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function count(text: string): number;

export function detectEncoding(text: string): 'GSM_7BIT' | 'GSM_7BIT_EX' | 'UTF16';

export function parts(text: string): number;
