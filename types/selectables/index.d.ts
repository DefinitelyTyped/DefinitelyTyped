// Type definitions for selectables 1.4
// Project: https://github.com/p34eu/Selectables#readme
// Definitions by: Soner Köksal <https://github.com/renjfk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Selectables;

declare class Selectables {
    options: Selectables.Options;

    constructor(options?: Selectables.Options);

    enable(): void;

    disable(): void;
}

declare namespace Selectables {
    interface Options {
        zone?: string | undefined;
        elements?: string | undefined;
        selectedClass?: string | undefined;
        key?: string | boolean | undefined;
        moreUsing?: string | undefined;
        enabled?: boolean | undefined;

        start?(e: Event): void;

        stop?(e: Event): void;

        onSelect?(el: Element): void;

        onDeselect?(el: Element): void;
    }
}
