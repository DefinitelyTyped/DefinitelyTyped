// Type definitions for vue-select 2.5
// Project: https://github.com/sagalbot/vue-select#readme
// Definitions by: Ilia Beliaev <https://github.com/silh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { VueConstructor } from 'vue';

export default VueSelect;
export const VueSelect: VueSelectConstructor;
export type OptionConsumer = (option: any) => void;

export interface VueSelectProps {
    value: any;
    options: any[];
    disabled: boolean;
    clearable: boolean;
    maxHeight: string;
    searchable: boolean;
    multiple: boolean;
    placeholder: string;
    transition: string;
    clearSearchOnSelect: boolean;
    closeOnSelect: boolean;
    label: string;
    autocomplete: string;
    index: string | null;
    getOptionLabel: (option: any) => string;
    onChange: (val: any) => void;
    onInput: (val: any) => void;
    onTab: () => void;
    taggable: boolean;
    tabindex: number | null;
    pushTags: boolean;
    filterable: boolean;
    filterBy: (option: any, label: string, search: string) => boolean;
    filter: (options: any[], search: string) => boolean;
    createOption: (option: any) => any;
    resetOnOptionsChange: boolean;
    noDrop: boolean;
    inputId: string | null;
    dir: string;
    selectOnTab: boolean;
}

export interface VueSelectData {
    search: string;
    open: boolean;
    mutableValue: any;
    mutableOptions: any[];
}

export interface VueSelectWatch {
    value: (val: any) => void;
    mutableValue: (val: any, old: any) => void;
    options: (val: any) => void;
    mutableOptions: () => void;
    multiple: (reset: boolean) => void;
    created: () => void;
}

export interface VueSelectMethods {
    select: OptionConsumer;
    deselect: OptionConsumer;
    clearSelection: () => void;
    onAfterSelect: OptionConsumer;
    toggleDropdown: (e: Event) => void;
    isOptionSelected: (option: any) => boolean;
    onEscape: () => void;
    onSearchBlur: () => void;
    onSearchFocus: () => void;
    maybeDeleteValue: () => void;
    optionExists: (option: any) => boolean;
    maybePushTag: OptionConsumer;
}

export interface VueSelectComputed {
    dropdownClasses: () => DropdownClasses;
    clearSearchOnBlur: () => boolean;
    searching: () => boolean;
    dropdownOpen: () => boolean;
    searchPlaceholder: () => boolean;
    filteredOptions: () => any[];
    isValueEmpty: () => boolean;
    valueAsArray: () => any[];
    showClearButton: () => boolean;
}

export interface DropdownClasses {
    open: boolean;
    single: boolean;
    searching: boolean;
    searchable: boolean;
    unsearchable: boolean;
    loading: boolean;
    rtl: boolean;
    disabled: boolean;
}

export interface VueSelectConstructor extends VueConstructor {
    props: VueSelectProps;
    data: () => VueSelectData;
    watch: VueSelectWatch;
    methods: VueSelectMethods;
    computed: VueSelectComputed;
}
