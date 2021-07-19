// Type definitions for cldr 7.1
// Project: https://github.com/papandreou/node-cldr
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Cldr {
    // TODO add remaining properties and methods

    checkValidLocaleId(localeId: string): void;

    extractTextToSpeechCharacterLabels(localeId?: string): Partial<Record<string, string>>;

    extractDerivedTextToSpeechCharacterLabels(localeId?: string): Partial<Record<string, string>>;

    extractAllTextToSpeechCharacterLabels(localeId?: string): Partial<Record<string, string>>;
}

declare const cldr: Cldr;

export default cldr;

export function load(cldrPath: string): Cldr;
