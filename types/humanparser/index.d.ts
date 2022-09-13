// Type definitions for humanparser 1.1.1
// Project: https://github.com/chovy/humanparser
// Definitions by: Michał Podeszwa <https://github.com/MichalPodeszwa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

    interface HumanparserStatic {
        parseName (name: string, ignoreSuffix?: string[]): NameOutput;
        getFullestName (name: string): FullerNameOutput;
        parseAddress (address: string): AddressOutput;
    }

}

declare const humanparser: humanparser.HumanparserStatic;
export = humanparser;
