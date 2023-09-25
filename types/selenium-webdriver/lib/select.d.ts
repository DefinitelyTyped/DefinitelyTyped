import { WebElement } from "../";

export class Select {
    /**
     * Create an Select Element
     * @param {WebElement} element Select WebElement.
     */
    constructor(element: WebElement);

    element: WebElement;

    /**
     * Select the option at the given index. This is done by examining the "index" attribute of an
     * element, and not merely by counting.
     *
     * @param {Number} index The option at this index will be selected
     * @return {Promise<void>}
     */
    selectByIndex(index: number): Promise<void>;

    /**
     *
     * Select option by specific value.
     *
     * <example>
       <select id="selectbox">
       <option value="1">Option 1</option>
       <option value="2">Option 2</option>
       <option value="3">Option 3</option>
       </select>
       const selectBox = await driver.findElement(By.id("selectbox"));
       await selectObject.selectByValue("Value");
     * </example>
     *
     *
     * @param {string} value value of option element to be selected
     */
    selectByValue(value: string): Promise<void>;

    /**
     *
     * Select option with displayed text matching the argument.
     *
     * <example>
       <select id="selectbox">
       <option value="1">Option 1</option>
       <option value="2">Option 2</option>
       <option value="3">Option 3</option>
       </select>
       const selectBox = await driver.findElement(By.id("selectbox"));
       await selectObject.selectByVisibleText("Option 2");
     * </example>
     *
     * @param {String|Number} text       text of option element to get selected
     *
     */
    selectByVisibleText(text: string | number): Promise<void>;

    /**
     * @return {!Promise<!Array<!WebElement>>} All options belonging to this select tag
     */
    getOptions(): Promise<WebElement[]>;

    /**
     * Retruns a boolean value if the select tag is multiple
     * @returns {Promise<boolean>}
     */
    isMultiple(): Promise<boolean>;

    /**
     * Returns a list of all selected options belonging to this select tag
     *
     * @returns {Promise<void>}
     */
    getAllSelectedOptions(): Promise<WebElement[]>;

    /**
     * Returns first Selected Option
     * @returns {Promise<Element>}
     */
    getFirstSelectedOption(): Promise<WebElement | undefined>;

    /**
     * Deselects all selected options
     * @returns {Promise<void>}
     */
    deselectAll(): Promise<void>;

    /**
     * @param {string|Number}text text of option to deselect
     * @returns {Promise<void>}
     */
    deselectByVisibleText(text: string | number): Promise<void>;

    /**
     * @param {Number} index       index of option element to deselect
     * Deselect the option at the given index.
     * This is done by examining the "index"
     * attribute of an element, and not merely by counting.
     * @returns {Promise<void>}
     */
    deselectByIndex(index: number): Promise<void>;

    /**
     * @param {String} value value of an option to deselect
     * @returns {Promise<void>}
     */
    deselectByValue(value: string): Promise<void>;
}
