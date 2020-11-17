// Type definitions for non-npm package Node.js 12.19
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};

/**
 * The `Tracing` object is used to enable or disable tracing for sets of
 * categories. Instances are created using the
 * `trace_events.createTracing()` method.
 *
 * When created, the `Tracing` object is disabled. Calling the
 * `tracing.enable()` method adds the categories to the set of enabled trace
 * event categories. Calling `tracing.disable()` will remove the categories
 * from the set of enabled trace event categories.
 */
export interface Tracing {
    /**
     * A comma-separated list of the trace event categories covered by this
     * `Tracing` object.
     */
    readonly categories: string;

    /**
     * Disables this `Tracing` object.
     *
     * Only trace event categories _not_ covered by other enabled `Tracing`
     * objects and _not_ specified by the `--trace-event-categories` flag
     * will be disabled.
     */
    disable(): void;

    /**
     * Enables this `Tracing` object for the set of categories covered by
     * the `Tracing` object.
     */
    enable(): void;

    /**
     * `true` only if the `Tracing` object has been enabled.
     */
    readonly enabled: boolean;
}

export interface CreateTracingOptions {
    /**
     * An array of trace category names. Values included in the array are
     * coerced to a string when possible. An error will be thrown if the
     * value cannot be coerced.
     */
    categories: string[];
}

/**
 * Creates and returns a Tracing object for the given set of categories.
 */
export function createTracing(options: CreateTracingOptions): Tracing;

/**
 * Returns a comma-separated list of all currently-enabled trace event
 * categories. The current set of enabled trace event categories is
 * determined by the union of all currently-enabled `Tracing` objects and
 * any categories enabled using the `--trace-event-categories` flag.
 */
export function getEnabledCategories(): string | undefined;
