/// <reference path="./common.d.ts" />
/// <reference path="./autocomplete.d.ts" />

declare namespace M {
    class Chips extends Component<ChipsOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Chips;

        /**
         * Init Chips
         */
        static init(els: Element, options?: Partial<ChipsOptions>): Chips;

        /**
         * Init Chipses
         */
        static init(els: MElements, options?: Partial<ChipsOptions>): Chips[];

        /**
         * Array of the current chips data
         */
        chipsData: ChipData[];

        /**
         * If the chips has autocomplete enabled
         */
        hasAutocomplete: boolean;

        /**
         * Autocomplete instance, if any
         */
        autocomplete: Autocomplete;

        /**
         * Add chip to input
         * @param data Chip data object
         */
        addChip(chip: ChipData): void;

        /**
         * Delete nth chip
         * @param n  Index of chip
         */
        deleteChip(n?: number): void;

        /**
         * Select nth chip
         * @param n Index of chip
         */
        selectChip(n: number): void;
    }

    interface ChipData {
        /**
         * Chip tag
         */
        tag: string;

        /**
         * Chip image
         */
        img?: string;
    }

    interface ChipsOptions {
        /**
         * Set the chip data
         * @default []
         */
        data: ChipData[];

        /**
         * Set first placeholder when there are no tags
         * @default ''
         */
        placeholder: string;

        /**
         * Set second placeholder when adding additional tags
         * @default ''
         */
        secondaryPlaceholder: string;

        /**
         * Set autocomplete options
         * @default {}
         */
        autocompleteOptions: Partial<AutocompleteOptions>;

        /**
         * Set chips limit
         * @default Infinity
         */
        limit: number;

        /**
         * Callback for chip add
         * @default null
         */
        onChipAdd: (this: Chips, element: Element, chip: Element) => void;

        /**
         * Callback for chip select
         * @default null
         */
        onChipSelect: (this: Chips, element: Element, chip: Element) => void;

        /**
         * Callback for chip delete
         * @default null
         */
        onChipDelete: (this: Chips, element: Element, chip: Element) => void;
    }
}

interface JQuery {
    chips(method: keyof Pick<M.Chips, "destroy">): JQuery;
    chips(method: keyof Pick<M.Chips, "addChip">, chip: M.ChipData): JQuery;
    chips(method: keyof Pick<M.Chips, "deleteChip">, n?: number): JQuery;
    chips(method: keyof Pick<M.Chips, "selectChip">, n: number): JQuery;
    chips(options?: Partial<M.ChipsOptions>): JQuery;
}
