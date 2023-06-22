interface ComboBoxContext {
    comboBoxEl: HTMLElement;
    selectEl: HTMLSelectElement;
    inputEl: HTMLInputElement;
    listEl: HTMLUListElement;
    statusEl: HTMLDivElement;
    focusedOptionEl: HTMLLIElement;
    selectedOptionEl: HTMLLIElement;
    toggleListBtnEl: HTMLButtonElement;
    clearInputBtnEl: HTMLButtonElement;
    isPristine: boolean;
    disableFiltering: boolean;
}

interface ComboBox {
    init(root: HTMLElement | Document): void;
    COMBO_BOX_CLASS: string;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * Get an object of elements belonging directly to the given
     * combo box component.
     */
    getComboBoxContext(el: HTMLElement): ComboBoxContext;
    /**
     * Enhance a select element into a combo box component.
     */
    enhanceComboBox(_comboBoxEl: HTMLElement): void;
    /**
     * Generate a dynamic regular expression based off of a replaceable and possibly filtered value.
     */
    generateDynamicRegExp(filter: string, query?: string, extras?: object): RegExp;
    /**
     * Disable the combo-box component
     */
    disable(el: HTMLElement): void;
    /**
     * Enable the combo-box component
     */
    enable(el: HTMLElement): void;
    /**
     * Display the option list of a combo box component.
     */
    displayList(el: HTMLElement): void;
    /**
     * Hide the option list of a combo box component.
     */
    hideList(el: HTMLElement): void;
}

declare const comboBox: ComboBox;

export default comboBox;
