import { ElementHandle, Page } from "puppeteer";

const testGlobal = async (instance: ElementHandle | Page) => {
    await expect(instance).toClick("selector");
    await expect(instance).toClick("selector", { polling: "mutation", text: "text" });
    await expect(instance).toClick("selector", { polling: "raf", timeout: 777 });

    const dialog = await expect(instance).toDisplayDialog(async () => {});
    console.log(dialog.message());

    await expect(instance).toFill("selector", "value");
    await expect(instance).toFill("selector", "value", { polling: 777 });

    await expect(instance).toMatch("selector");
    await expect(instance).toMatch("selector", { timeout: 777 });

    await expect(instance).toMatchElement("selector");
    await expect(instance).toMatchElement("selector", { polling: "raf", timeout: 777 });
    await expect(instance).toMatchElement("selector", { polling: "mutation", text: "text" });

    await expect(instance).toSelect("selector", "valueOrText");
    await expect(instance).toSelect("selector", "valueOrText", { polling: "raf" });

    await expect(instance).toUploadFile("selector", "filePath");
    await expect(instance).toUploadFile("selector", "filePath", { timeout: 777 });
};

const testImported = async (instance: ElementHandle | Page) => {
    const expectPuppeteer = await import("expect-puppeteer");

    await expectPuppeteer(instance).toClick("selector");
    await expect(instance).toClick("selector", { polling: "mutation", text: "text" });
    await expect(instance).toClick("selector", { polling: "raf", timeout: 777 });
};
