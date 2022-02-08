// Type definitions for danish-ssn 2.1
// Project: https://github.com/mathiasvr/danish-ssn/
// Definitions by: Yuriy Guzenko <https://github.com/yuriyg86>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace cpr {
    function isValid(ssn: string): boolean;
    function validate(ssn: string): string;
    function validForDate(date: Date): string[];

    interface DanishSsnStatus {
        cpr: string;
        valid: boolean;
        date: Date;
        sex: 'Female' | 'Male';
    }
}

declare function cpr(ssn: string): cpr.DanishSsnStatus;

export = cpr;
