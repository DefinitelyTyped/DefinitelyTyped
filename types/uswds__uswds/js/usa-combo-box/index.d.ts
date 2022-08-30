interface ComboBox {
    init(root: HTMLElement | Document): void;
    COMBO_BOX_CLASS: string;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * Get an object of elements belonging directly to the given
     * combo box component.
     *
     * @param el the element within the combo box
     * @returns elements
     */
    getComboBoxContext(el: HTMLElement): {
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
    };
    /**
     * Enhance a select element into a combo box component.
     *
     * @param _comboBoxEl The initial element of the combo box component
     */
    enhanceComboBox(_comboBoxEl: HTMLElement): void;
    /**
     * Generate a dynamic regular expression based off of a replaceable and possibly filtered value.
     *
     * @param filter An element within the combo box component
     * @param query The value to use in the regular expression
     * @param extras An object of regular expressions to replace and filter the query
     */
    generateDynamicRegExp(filter: string, query?: string, extras?: object): RegExp;
    /**
     * Disable the combo-box component
     *
     * @param el An element within the combo box component
     */
    disable(el: HTMLInputElement): void;
    /**
     * Enable the combo-box component
     *
     * @param el An element within the combo box component
     */
    enable(el: HTMLInputElement): void;
    /**
     * Display the option list of a combo box component.
     *
     * @param el An element within the combo box component
     */
    displayList(el: HTMLInputElement): void;
    /**
     * Hide the option list of a combo box component.
     *
     * @param el An element within the combo box component
     */
    hideList(el: HTMLInputElement): void;
}

declare const comboBox: ComboBox;

export default comboBox;
