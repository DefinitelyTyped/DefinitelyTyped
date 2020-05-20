export class MDCListAdapter {
    getListItemCount(): number;
    getFocusedElementIndex(): number;
    setAttributeForElementIndex(index: number, attribute: string, value: string): void;
    removeAttributeForElementIndex(index: number, attribute: string): void;
    addClassForElementIndex(index: number, className: string): void;
    removeClassForElementIndex(index: number, className: string): void;

    /**
     * Focuses list item at the index specified.
     */
    focusItemAtIndex(index: number): void;

    /**
     * Sets the tabindex to the value specified for all button/a element children of
     * the list item at the index specified.
     */
    setTabIndexForListItemChildren(listItemIndex: number, tabIndexValue: number): void;

    /**
     * If the given element has an href, follows the link.
     */
    followHref(ele: HTMLAnchorElement): void;

    /**
     * Returns true if radio button is present at given list item index.
     */
    hasRadioAtIndex(index: number): boolean;

    /**
     * Returns true if checkbox is present at given list item index.
     */
    hasCheckboxAtIndex(index: number): boolean;

    /**
     * Returns true if checkbox inside a list item is checked.
     */
    isCheckboxCheckedAtIndex(index: number): boolean;

    /**
     * Sets the checked status of checkbox or radio at given list item index.
     */
    setCheckedCheckboxOrRadioAtIndex(index: number, isChecked: boolean): void;

    /**
     * Returns true when the current focused element is inside list root.
     */
    isFocusInsideList(): boolean;
}
