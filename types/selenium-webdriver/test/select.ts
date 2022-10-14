import { Select } from 'selenium-webdriver/lib/select';
import { Builder, WebDriver, WebElement } from 'selenium-webdriver';

function TestSelect() {
    let driver: WebDriver = new Builder().build();
    let element: WebElement = new WebElement(driver, 'elementId');

    let select: Select = new Select(element);
    select.selectByIndex(1);
    select.selectByValue("Value");
    select.selectByVisibleText("Option 2");
    select.selectByVisibleText(2);
    let options: Promise<WebElement[]> = select.getOptions();
    let multiple: Promise<boolean> = select.isMultiple();
    let allSelectedOptions: Promise<WebElement[]> = select.getAllSelectedOptions();
    let firstSelectedOption: Promise<WebElement | undefined> = select.getFirstSelectedOption();
    select.deselectAll();
    select.deselectByVisibleText("Option 3");
    select.deselectByVisibleText(3);
    select.deselectByIndex(4);
    select.deselectByValue("Value");
}
