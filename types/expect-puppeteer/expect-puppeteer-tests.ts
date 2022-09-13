import { ElementHandle, Page } from "puppeteer";
import { getDefaultOptions, setDefaultOptions } from 'expect-puppeteer';

const testGlobal = async (instance: ElementHandle | Page) => {
    await expect(instance).toClick({ type: 'css', value: 'selector' });
    await expect(instance).toClick({ type: 'xpath', value: 'selector' });
    await expect(instance).toClick("selector");
    await expect(instance).toClick("selector", { text: "text" });
    await expect(instance).toClick("selector", { button: "left" });
    await expect(instance).toClick("selector", { button: "right" });
    await expect(instance).toClick("selector", { button: "middle" });
    await expect(instance).toClick("selector", { clickCount: 3 });
    await expect(instance).toClick("selector", { delay: 100 });

    const dialog = await expect(instance).toDisplayDialog(async () => {});
    console.log(dialog.message());

    await expect(instance).toFill({ type: 'css', value: 'selector' }, 'value');
    await expect(instance).toFill({ type: 'xpath', value: 'selector' }, 'value');
    await expect(instance).toFill("selector", "value");
    await expect(instance).toFill("selector", "value", { delay: 777 });

    await expect(instance).toFillForm({ type: 'css', value: 'selector' }, { foo: 'bar', baz: 123 });
    await expect(instance).toFillForm({ type: 'xpath', value: 'selector' }, { foo: 'bar', baz: 123 });
    await expect(instance).toFillForm("selector", { foo: 'bar', baz: 123 });
    await expect(instance).toFillForm("selector", { foo: 'bar', baz: 123 }, { delay: 777 });

    await expect(instance).toMatch("some_string");
    await expect(instance).toMatch("some_string", { timeout: 777 });
    await expect(instance).toMatch("some_string", { polling: "raf", timeout: 777 });
    await expect(instance).toMatch("some_string", { polling: "mutation", timeout: 777 });
    await expect(instance).toMatch(/some_regexp/);
    await expect(instance).toMatch(/some_regexp/, { timeout: 777 });
    await expect(instance).toMatch(/some_regexp/, { polling: "raf", timeout: 777 });
    await expect(instance).toMatch(/some_regexp/, { polling: "mutation", timeout: 777 });

    await expect(instance).toMatchElement({ type: 'css', value: 'selector' });
    await expect(instance).toMatchElement({ type: 'xpath', value: 'selector' });
    await expect(instance).toMatchElement("selector");
    await expect(instance).toMatchElement("selector", { polling: "raf", timeout: 777 });
    await expect(instance).toMatchElement("selector", { polling: "mutation", text: "text" });
    await expect(instance).toMatchElement("selector", { polling: "raf", visible: true });

    await expect(instance).toSelect({ type: 'css', value: 'selector' }, 'valueOrText');
    await expect(instance).toSelect({ type: 'xpath', value: 'selector' }, 'valueOrText');
    await expect(instance).toSelect("selector", "valueOrText");

    await expect(instance).toUploadFile({ type: 'css', value: 'selector' }, 'filePath');
    await expect(instance).toUploadFile({ type: 'xpath', value: 'selector' }, 'filePath');
    await expect(instance).toUploadFile("selector", "filePath");
    await expect(instance).toUploadFile("selector", "filePath", { timeout: 777 });

    setDefaultOptions({ polling: "mutation", timeout: 5000 });
    const { polling, timeout } = getDefaultOptions();
};

const testImported = async (instance: ElementHandle | Page) => {
    const expectPuppeteer = await import("expect-puppeteer");

    await expectPuppeteer(instance).toClick("selector");
    await expect(instance).toClick("selector", { polling: "mutation", text: "text" });
    await expect(instance).toClick("selector", { polling: "raf", timeout: 777 });
};
