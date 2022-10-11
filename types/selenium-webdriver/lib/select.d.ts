import { WebElement } from '../';

export class Select {
    constructor(element: WebElement);

    element: WebElement;

    selectByIndex(index: number): Promise<void>;

    selectByValue(value: string): Promise<void>;

    selectByVisibleText(text: string|number): Promise<void>;

    getOptions(): Promise<WebElement[]>;

    isMultiple(): Promise<boolean>;

    getAllSelectedOptions(): Promise<WebElement[]>;

    getFirstSelectedOption(): Promise<WebElement>;

    deselectAll(): Promise<void>;

    deselectByVisibleText(text: string|number): Promise<void>;

    deselectByIndex(index: number): Promise<void>;

    deselectByValue(value: string): Promise<void>;
}
