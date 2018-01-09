// Type definitions for legal-eagle 0.15
// Project: https://github.com/atom/legal-eagle
// Definitions by: Jed Fox <https://github.com/j-f1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function legalEagle(
    options: legalEagle.Options,
    cb: (err: Error | null, licenseSummary: legalEagle.LicenseLookup) => void
): void;

declare namespace legalEagle {
    interface Options {
        path: string;
        overrides?: LicenseLookup;
        omitPermissive?: boolean;
    }
    interface LicenseLookup {
        [id: string]: Entry;
    }
    interface Entry {
        license: string;
        source: string;
        repository: string;
        sourceText: string;
    }
}

export = legalEagle;
