// Type definitions for humanparser 1.1.1
// Project: https://github.com/chovy/humanparser
// Definitions by: Michał Podeszwa <https://github.com/MichalPodeszwa/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace humanparser {
    interface NameOutput {
        firstName: string;
        lastName: string;
        fullName: string;
        suffix?: string;
        middleName?: string;
        salutation?: string;
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
        parseName (name: string): NameOutput;
        getFullestName (name: string): FullerNameOutput;
        parseAddress (address: string): AddressOutput;
    }

}

declare const humanparser: humanparser.HumanparserStatic;
export = humanparser;
