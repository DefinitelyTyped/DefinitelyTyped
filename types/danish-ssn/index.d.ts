declare namespace cpr {
    function isValid(ssn: string): boolean;
    function validate(ssn: string): string;
    function validForDate(date: Date): string[];

    interface DanishSsnStatus {
        cpr: string;
        valid: boolean;
        date: Date;
        sex: "Female" | "Male";
    }
}

declare function cpr(ssn: string): cpr.DanishSsnStatus;

export = cpr;
