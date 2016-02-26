// Type definitions for Cldr.js 0.4.4
// Project: https://github.com/rxaviers/cldrjs
// Definitions by: Raman But-Husaim <https://github.com/RamanBut-Husaim>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// The definition file for supplemental module.

declare module cldr {
    interface TimeDataStatic {
        allowed(): string;
        preferred(): string;
    }

    interface WeekDataStatic {
        firstDay(): string;
        minDays(): number;
    }

    interface SupplementalStatic {
        timeData: TimeDataStatic;
        weekData: WeekDataStatic;
        (path:string): any;
        (paths:string[]): any;
    }

    interface CldrStatic {
        supplemental: SupplementalStatic;
    }
}

declare module "cldr/supplemental" {
    export = cldr;
}
