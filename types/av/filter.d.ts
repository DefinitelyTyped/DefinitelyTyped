/// <reference path="./baseTypes.d.ts" />

declare namespace AV {
    class Filter {
        constructor();
        constructor(context: {}, key: string);

        process(buffer: TypedArray): void;
    }

    class VolumeFilter extends Filter {
    }

    class BalanceFilter extends Filter {
    }
}
