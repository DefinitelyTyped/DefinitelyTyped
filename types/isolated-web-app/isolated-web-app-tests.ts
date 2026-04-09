const iwaApi = window.chromeos?.isolatedWebApp;

async function testSetShape() {
    if (iwaApi) {
        // Create dummy DOMRectReadOnly objects for testing
        const rect1 = new DOMRectReadOnly(0, 0, 100, 100);
        const rect2 = new DOMRectReadOnly(50, 50, 200, 200);

        // Valid call: passing an array of DOMRectReadOnly should return a Promise<void>
        const result: Promise<void> = iwaApi.setShape([rect1, rect2]);
        await result;

        // Valid call: passing an empty array is allowed per the spec
        await iwaApi.setShape([]);
    }
}

async function testErrors() {
    if (iwaApi) {
        // @ts-expect-error - setShape requires an array, not a single DOMRectReadOnly
        iwaApi.setShape(new DOMRectReadOnly(0, 0, 100, 100));

        // @ts-expect-error - setShape requires DOMRectReadOnly objects, not numbers
        iwaApi.setShape([1, 2, 3]);

        // @ts-expect-error - setShape requires an argument
        iwaApi.setShape();
    }

    if (window.chromeos) {
        // @ts-expect-error - isolatedWebApp is readonly and cannot be reassigned
        window.chromeos.isolatedWebApp = {} as any;
    }

    // @ts-expect-error - The global variable itself should be readonly
    chromeos = undefined;
}
