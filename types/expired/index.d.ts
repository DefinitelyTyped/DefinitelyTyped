// Type definitions for expired 1.3
// Project: https://github.com/lukechilds/expired
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = expired;

declare const expired: expired;

interface expired {
    /**
     * @returns A boolean relating to whether the resource has expired or not.
     * `true` means it's expired, `false` means it's fresh.
     */
    (headers: expired.Headers, compareWith?: Date): boolean;
    /**
     * @returns The amount of milliseconds from the current date until the resource will expire.
     * If the resource has already expired it will return a negative integer.
     */
    in(headers: expired.Headers, compareWith?: Date): number;
    /**
     * @returns A JavaScript `Date` object for the date the resource will expire.
     */
    on(headers: expired.Headers): Date;
}

declare namespace expired {
    type Headers = string | { [header: string]: string | string[] | undefined };
}
