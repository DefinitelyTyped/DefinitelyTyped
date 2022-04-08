// Type definitions for swe-validation 1.0
// Project: https://github.com/keype/swe-validation
// Definitions by: Robert Hjalmers <https://github.com/hjalmers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface cin {
    isValid: boolean;
    corporation: {
        type: string;
        id: string;
    };
}

interface ssn {
    isValid: boolean;
    person?: {
        type: string;
        sex: string;
        ssn: string;
    };
}

declare let validate: {
    ssn(number: number): ssn;
    cin(number: number): cin;
};
export = validate;
