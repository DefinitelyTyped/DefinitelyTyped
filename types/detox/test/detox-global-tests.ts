declare var describe: (test: string, callback: () => void) => void;
declare var beforeAll: (callback: () => void) => void;
declare var afterAll: (callback: () => void) => void;
declare var test: (test: string, callback: () => void) => void;

describe("Test", () => {
    beforeAll(async () => {
        await device.reloadReactNative();
        await device.takeScreenshot("test screenshot");
    });

    afterAll(async () => {
        await element(by.id("element")).clearText();
    });

    test("Test", async () => {
        await element(by.id("element")).replaceText("text");
        await element(by.id("element")).tap();
        await element(by.id("element")).scroll(50, "down");
        await element(by.id("scrollView")).scrollTo("bottom");
        await expect(element(by.id("element")).atIndex(0)).toNotExist();
        await element(by.id("scrollView")).swipe("down", "fast");
        await element(by.type("UIPickerView")).setColumnToValue(1, "6");

        await expect(
            element(by.id("element").withAncestor(by.id("parent_element")))
        ).toNotExist();
        await expect(
            element(by.id("element").withDescendant(by.id("child_element")))
        ).toNotExist();

        await waitFor(element(by.id("element")))
            .toBeVisible()
            .withTimeout(2000);
        await device.pressBack();
        await waitFor(element(by.text("Text5")))
            .toBeVisible()
            .whileElement(by.id("ScrollView630"))
            .scroll(50, "down");
    });
});
