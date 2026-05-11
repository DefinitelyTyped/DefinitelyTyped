declare function legalEagle(
    options: legalEagle.Options,
    cb: (err: Error | null, licenseSummary: legalEagle.LicenseLookup) => void,
): void;

declare namespace legalEagle {
    interface Options {
        path: string;
        overrides?: LicenseLookup | undefined;
        omitPermissive?: boolean | undefined;
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
