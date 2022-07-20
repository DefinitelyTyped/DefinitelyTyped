import subsetFont = require('subset-font');

(async () => {
    // Sample from subset-font page
    const mySfntFontBuffer = Buffer.from('');

    // Create a new font with only the characters required to render "Hello, world!" in WOFF2 format:
    const subsetBuffer = await subsetFont(mySfntFontBuffer, 'Hello, world!', {
        targetFormat: 'woff2',
    });

    // Different target output types
    const otherOptionsBuffer = await subsetFont(mySfntFontBuffer, '1234', {
        targetFormat: 'sfnt',
        preserveNameIds: [1, 2, 3],
    });

    // No options provided
    const sameFormatBuffer = await subsetFont(mySfntFontBuffer, '1234');

    // No options provided, should error
    /** @ts-expect-error */
    const noCharsProvidedError = await subsetFont(mySfntFontBuffer);

    // Invalid target format provided, should error
    const invalidTargetFormatError = await subsetFont(mySfntFontBuffer, '1234', {
        /** @ts-expect-error */
        targetFormat: 'eot',
    });
})();
