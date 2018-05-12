/// <reference path="./common.d.ts" />
/// <reference path="./dropdown.d.ts" />

declare namespace M {
    class FormSelect extends Component<FormSelectOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): FormSelect;

        /**
         * Init FormSelect
         */
        static init(els: Element, options?: Partial<FormSelectOptions>): FormSelect;

        /**
         * Init FormSelects
         */
        static init(els: MElements, options?: Partial<FormSelectOptions>): FormSelect[];

        /**
         * If this is a multiple select
         */
        isMultiple: boolean;

        /**
         * The select wrapper element
         */
        wrapper: Element;

        /**
         * Dropdown UL element
         */
        dropdownOptions: HTMLUListElement;

        /**
         * Text input that shows current selected option
         */
        input: HTMLInputElement;

        /**
         * Instance of the dropdown plugin for this select
         */
        dropdown: Dropdown;

        /**
         * Get selected values in an array
         */
        getSelectedValues(): string[];
    }

    interface FormSelectOptions {
        /**
         * Classes to be added to the select wrapper element
         * @default ''
         */
        classes: string;

        /**
         * Pass options object to select dropdown initialization
         * @default {}
         */
        dropdownOptions: Partial<DropdownOptions>;
    }
}

interface JQuery {
    formSelect(method: keyof Pick<M.FormSelect, "getSelectedValues" | "destroy">): JQuery;
    formSelect(options?: Partial<M.FormSelectOptions>): JQuery;
}
