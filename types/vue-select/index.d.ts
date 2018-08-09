// Type definitions for vue-select 2.4.0
// Project: https://github.com/sagalbot/vue-select#readme
// Definitions by: Ilia Beliaev <https://github.com/silh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript version: 2.4.0

import {VueConstructor} from 'vue';

export default VueSelect;

export const VueSelect: VueSelectConstructor;

export type Option = any | null;

export type OptionConsumer = (option: Option) => void;

export interface VueSelectProps {
    value: Option;
    options: Option[];
    disabled: boolean;
    maxHeight: string;
    searchable: boolean;
    multiple: boolean;
    placeholder: string;
    transition: string;
    clearSearchOnSelect: boolean;
    closeOnSelect: boolean;
    label: string;
    getOptionLabel: (option: Option) => string;
    onChange: OptionConsumer;
    taggable: boolean;
    tabindex: number | null;
    pushTags: boolean;
    filterable: boolean;
    createOption: (option: Option) => Option;
    resetOnOptionsChange: boolean;
    noDrop: boolean;
    inputId: string | null;
    dir: string;
}

export interface VueSelectData {
    search: string;
    open: boolean;
    mutableValue: Option;
    mutableOptions: Option[];
}

export interface VueSelectWatch {
    value: (val: Option) => void;
    mutableValue: (val: Option, old: Option) => void;
    options: (val: Option) => void;
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
    isOptionSelected: (option: Option) => boolean;
    onEscape: () => void;
    onSearchBlur: () => void;
    onSearchFocus: () => void;
    maybeDeleteValue: () => void;
    optionExists: (option: Option) => boolean;
    maybePushTag: OptionConsumer;
}

export interface VueSelectComputed {
    dropdownClasses: () => DropdownClasses;
    clearSearchOnBlur: () => boolean;
    searching: () => boolean;
    dropdownOpen: () => boolean;
    searchPlaceholder: () => boolean;
    filteredOptions: () => Option[];
    isValueEmpty: () => boolean;
    valueAsArray: () => Option[];
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
