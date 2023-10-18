declare namespace humanparser {
    interface NameOutput {
        firstName?: string | undefined;
        lastName: string;
        fullName: string;
        suffix?: string | undefined;
        middleName?: string | undefined;
        salutation?: string | undefined;
    }

    interface FullerNameOutput {
        fullName: string;
    }

    interface AddressOutput {
        address: string;
        state: string;
        fullAddress: string;
        zip: string;
        city: string;
    }

    interface ParseNameOptions {
        extraCompound?: string[];
        extraSalutations?: string[];
        extraSuffixes?: string[];
        ignoreCompound?: string[];
        ignoreSalutation?: string[];
        ignoreSuffix?: string[];
    }

    interface HumanparserStatic {
        parseName(name: string, options?: string[] | ParseNameOptions): NameOutput;
        getFullestName(name: string): FullerNameOutput;
        parseAddress(address: string): AddressOutput;
    }
}

declare const humanparser: humanparser.HumanparserStatic;
export = humanparser;
