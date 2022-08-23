// Type definitions for vue-select 3.16
// Project: https://github.com/sagalbot/vue-select#readme
// Definitions by: Ilia Beliaev <https://github.com/silh>, Flo Edelmann <https://github.com/FloEdelmann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import { VueConstructor, ComponentOptions } from 'vue';
import { ExtendedVue } from 'vue/types/vue';

export default VueSelect;
export const VueSelect: VueSelectConstructor;
export type OptionConsumer<T = void> = (option: VueSelectOption) => T;

type ChildComponentName = 'Deselect' | 'OpenIndicator';
type VueSelectOption = string | object;
type KeyEventMap = Record<number, (event: KeyboardEvent) => any>;
type UnbindPositionCallback = () => void;

interface ClearSearchOnBlurParameters {
    clearSearchOnSelect: boolean;
    multiple: boolean;
}

interface CalculatedPosition {
    width: string;
    top: string;
    left: string;
}

export interface VueSelectProps {
    value: VueSelectOption;
    components: Record<ChildComponentName, VueConstructor | ComponentOptions<Vue>>;
    options: VueSelectOption[];
    disabled: boolean;
    clearable: boolean;
    searchable: boolean;
    multiple: boolean;
    placeholder: string;
    transition: string;
    clearSearchOnSelect: boolean;
    closeOnSelect: boolean;
    label: string;
    autocomplete: string;
    reduce: OptionConsumer<any>;
    selectable: OptionConsumer<boolean>;
    getOptionLabel: OptionConsumer<string>;
    getOptionKey: OptionConsumer<string>;
    /** @deprecated since v3.3 */
    onTab: () => void;
    taggable: boolean;
    tabindex: number | null;
    pushTags: boolean;
    filterable: boolean;
    filterBy: (option: VueSelectOption, label: string, search: string) => boolean;
    filter: (options: readonly VueSelectOption[], search: string) => VueSelectOption[];
    createOption: (option: string) => VueSelectOption;
    resetOnOptionsChange: boolean | ((newOptions: readonly VueSelectOption[], oldOptions: readonly VueSelectOption[], selectedValue: readonly VueSelectOption[]) => boolean);
    clearSearchOnBlur: (parameters: ClearSearchOnBlurParameters) => boolean;
    noDrop: boolean;
    inputId: string | null;
    dir: 'auto' | 'ltr' | 'rtl';
    /** @deprecated since v3.3 - use selectOnKeyCodes instead */
    selectOnTab: boolean;
    selectOnKeyCodes: number[];
    searchInputQuerySelector: string;
    mapKeydown: (map: KeyEventMap, vm: VueSelectInstance) => KeyEventMap;
    appendToBody: boolean;
    calculatePosition: (dropdownList: HTMLUListElement, component: VueSelectInstance, position: CalculatedPosition) => void | UnbindPositionCallback;

    // in pointerScroll mixin:
    autoscroll: boolean;

    // in ajax mixin:
    loading: boolean;

    dropdownShouldOpen: (vSelect: VueSelectInstance) => boolean;
    deselectFromDropdown: boolean;
    uid: string | number;
}

export interface VueSelectData {
    search: string;
    open: boolean;
    isComposing: boolean;
    pushedTags: VueSelectOption[];

    // in typeAheadPointer mixin:
    typeAheadPointer: number;

    // in ajax mixin:
    mutableLoading: boolean;
}

export interface VueSelectWatch {
    options: (newOptions: VueSelectOption[], old: VueSelectOption[]) => void;
    value: OptionConsumer;
    multiple: () => void;
    open: (isOpen: boolean) => void;

    // in pointerScroll mixin:
    typeAheadPointer: () => void;

    // in typeAheadPointer mixin:
    filteredOptions: () => void;

    // in ajax mixin:
    search: () => void;
    loading: (val: boolean) => void;
}

export interface VueSelectMethods {
    setInternalValueFromOptions: OptionConsumer;
    select: OptionConsumer;
    deselect: OptionConsumer;
    clearSelection: () => void;
    onAfterSelect: OptionConsumer;
    updateValue: (value: VueSelectOption) => void;
    toggleDropdown: (e: Event) => void;
    isOptionSelected: OptionConsumer<boolean>;
    optionComparator: (a: object, b: object) => boolean;
    findOptionFromReducedValue: OptionConsumer<any>;
    closeSearchOptions: () => void;
    maybeDeleteValue: () => void;
    optionExists: OptionConsumer<boolean>;
    normalizeOptionForSlot: OptionConsumer<VueSelectOption>;
    pushTag: OptionConsumer;
    onEscape: () => void;
    onSearchBlur: () => void;
    onSearchFocus: () => void;
    onMousedown: () => void;
    onMouseUp: () => void;
    onSearchKeyDown: (event: KeyboardEvent) => any;

    // in pointerScroll mixin:
    maybeAdjustScroll: () => any;
    getDropdownViewport: () => any;

    // in typeAheadPointer mixin:
    typeAheadUp: () => void;
    typeAheadDown: () => void;
    typeAheadSelect: () => void;

    // in ajax mixin:
    toggleLoading: (toggle?: boolean | null) => boolean;

    isOptionDeselectable: OptionConsumer<boolean>;
}

export interface VueSelectComputed {
    isTrackingValues: () => boolean;
    selectedValue: () => VueSelectOption[];
    optionList: () => VueSelectOption[];
    searchEl: () => HTMLInputElement;
    scope: () => VueSelectSlotScope;
    childComponents: () => Record<ChildComponentName, VueConstructor>;
    stateClasses: () => StateClasses;
    searching: () => boolean;
    dropdownOpen: () => boolean;
    searchPlaceholder: () => string;
    filteredOptions: () => VueSelectOption[];
    isValueEmpty: () => boolean;
    showClearButton: () => boolean;
}

interface ListSlotScope {
    search: VueSelectData['search'];
    loading: VueSelectProps['loading'];
    searching: ReturnType<VueSelectComputed['searching']>;
    filteredOptions: ReturnType<VueSelectComputed['filteredOptions']>;
}

export interface VueSelectSlotScope {
    search: {
        attributes: {
            disabled: VueSelectProps['disabled'];
            placeholder: VueSelectProps['placeholder'];
            tabindex: VueSelectProps['tabindex'];
            'readonly': boolean;
            id: VueSelectProps['inputId'];
            'aria-autocomplete': 'list';
            'aria-labelledby': string;
            'aria-controls': string;
            ref: 'search';
            type: 'search';
            autocomplete: VueSelectProps['autocomplete'];
            value: VueSelectData['search'];
            'aria-activedescendant'?: string | undefined;
        };
        events: {
            'compositionstart': () => any;
            'compositionend': () => any;
            'keydown': VueSelectMethods['onSearchKeyDown'];
            'blur': VueSelectMethods['onSearchBlur'];
            'focus': VueSelectMethods['onSearchFocus'];
            'input': (event: KeyboardEvent) => any;
        };
    };
    spinner: {
        loading: VueSelectData['mutableLoading'];
    };
    noOptions: {
        search: VueSelectData['search'];
        loading: VueSelectProps['loading'];
        searching: ReturnType<VueSelectComputed['searching']>;
    };
    openIndicator: {
        attributes: {
            'ref': 'openIndicator';
            'role': 'presentation';
            'class': 'vs__open-indicator';
        };
    };
    listHeader: ListSlotScope;
    listFooter: ListSlotScope;
    header: ListSlotScope & { deselect: VueSelectMethods['deselect'] };
    footer: ListSlotScope & { deselect: VueSelectMethods['deselect'] };
}

export interface StateClasses {
    'vs--open': boolean;
    'vs--single': boolean;
    'vs--searching': boolean;
    'vs--searchable': boolean;
    'vs--unsearchable': boolean;
    'vs--loading': boolean;
    'vs--disabled': boolean;
}

export interface VueSelectConstructor extends VueConstructor {
    props: VueSelectProps;
    data: () => VueSelectData;
    watch: VueSelectWatch;
    methods: VueSelectMethods;
    computed: VueSelectComputed;
}

type ComputedValues = {
    [K in keyof VueSelectComputed]: ReturnType<VueSelectComputed[K]>;
};

export type VueSelectInstance = InstanceType<ExtendedVue<Vue, VueSelectData, VueSelectMethods, ComputedValues, VueSelectProps>> & {
    $refs: {
        search: HTMLInputElement;
        toggle: HTMLDivElement;
        selectedOptions: HTMLDivElement;
        actions: HTMLDivElement;
        clearButton: HTMLButtonElement;
        dropdownMenu: HTMLUListElement | undefined;
    };
};
