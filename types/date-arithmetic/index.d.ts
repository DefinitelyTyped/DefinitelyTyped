// Type definitions for date-arithmetic v3.1.0
// Project: https://github.com/jquense/date-math
// Definitions by: Sergii Paryzhskyi <https://github.com/HeeL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Unit = 'second' | 'minutes' | 'hours' | 'day' | 'week' | 'month' | 'year' | 'decade' | 'century';

/** dateArithmetic Public Instance Methods */
interface dateArithmeticStatic {
    /** Add specified amount of units to a provided date and return new date as a result */
    add(date: Date, num: number, unit: Unit): Date;

    /** Subtract specified amount of units from a provided date and return new date as a result */
    subtract(date: Date, num: number, unit: Unit): Date;
}

declare module 'dateArithmetic' {
    const dateArithmetic: dateArithmeticStatic;
    export = dateArithmetic;
}
