declare namespace FontFaceObserver {
    interface FontVariant {
        weight?: number | string | undefined;
        style?: string | undefined;
        stretch?: string | undefined;
    }
}

declare class FontFaceObserver {
    /**
     * Creates a new FontFaceObserver.
     * @param fontFamilyName Name of the font family to observe.
     * @param variant Description of the font variant to observe. If a property is not present it will default to normal.
     */
    constructor(fontFamilyName: string, variant?: FontFaceObserver.FontVariant);

    /**
     * Starts observing the loading of the specified font. Immediately returns a new Promise that resolves when the font is available and rejected when the font is not available.
     * @param testString If your font doesn't contain latin characters you can pass a custom test string.
     * @param timeout The default timeout for giving up on font loading is 3 seconds. You can increase or decrease this by passing a number of milliseconds.
     */
    load(testString?: string | null, timeout?: number): Promise<void>;
}

declare module "fontfaceobserver" {
    export = FontFaceObserver;
}
