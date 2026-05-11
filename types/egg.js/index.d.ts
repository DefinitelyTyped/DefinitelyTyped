declare var egg: Egg;

/**
 * Egg.js is a simple JS library that has no prerequisites and allows you to easily add web easter
 * eggs by watching the user's key strokes.
 */
declare class Egg {
    /**
     * Egg.js is a simple JS library that has no prerequisites and allows you to easily add web easter
     * eggs by watching the user's key strokes.
     */
    constructor();
    /**
     * Egg.js is a simple JS library that has no prerequisites and allows you to easily add web easter
     * eggs by watching the user's key strokes.
     * @param keySequence You need to pass it the character sequence to trigger the easter egg
     *                    callback (which can either be in plain English or JavaScript key codes).
     * @param fn A function to trigger when it happens.
     */
    constructor(keySequence: string, fn: () => any);
    /**
     * Egg.js is a simple JS library that has no prerequisites and allows you to easily add web easter
     * eggs by watching the user's key strokes.
     * @param keySequence You need to pass it the character sequence to trigger the easter egg
     *                    callback (which can either be in plain English or JavaScript key codes).
     * @param fn A function to trigger when it happens.
     * @param metadata An optional set of metadata.
     */
    constructor(keySequence: string, fn: () => any, metadata: any);
    /**
     * Use to add in your easter eggs.
     * @param keySequence You need to pass it the character sequence to trigger the easter egg
     *                    callback (which can either be in plain English or JavaScript key codes).
     * @param fn A function to trigger when it happens.
     */
    AddCode(keySequence: string, fn: () => any): Egg;
    /**
     * Use to add in your easter eggs.
     * @param keySequence You need to pass it the character sequence to trigger the easter egg
     *                    callback (which can either be in plain English or JavaScript key codes).
     * @param fn A function to trigger when it happens.
     * @param metadata An optional set of metadata.
     */
    AddCode(keySequence: string, fn: () => any, metadata: any): Egg;
    /**
     * Add a hook, that will run after any egg code is triggered. You could use it to fire a Google
     * Analytics event or send out a tweet that someone finally found your easter egg. Hooks get
     * access to the whole Egg.js object so you can pull information about the easter egg that
     * fired via this.activeEgg.
     * @param fn A function to trigger when it happens.
     */
    AddHook(fn: () => any): Egg;
    /**
     * Start listening to key codes.
     */
    Listen(): Egg;
    /**
     * Use to add in your easter eggs.
     * @param keySequence You need to pass it the character sequence to trigger the easter egg
     *                    callback (which can either be in plain English or JavaScript key codes).
     * @param fn A function to trigger when it happens.
     */
    addCode(keySequence: string, fn: () => any): Egg;
    /**
     * Use to add in your easter eggs.
     * @param keySequence You need to pass it the character sequence to trigger the easter egg
     *                    callback (which can either be in plain English or JavaScript key codes).
     * @param fn A function to trigger when it happens.
     * @param metadata An optional set of metadata.
     */
    addCode(keySequence: string, fn: () => any, metadata: any): Egg;
    /**
     * Add a hook, that will run after any egg code is triggered. You could use it to fire a Google
     * Analytics event or send out a tweet that someone finally found your easter egg. Hooks get
     * access to the whole Egg.js object so you can pull information about the easter egg that
     * fired via this.activeEgg.
     * @param fn A function to trigger when it happens.
     */
    addHook(fn: () => any): Egg;
    /**
     * Start listening to key codes.
     */
    listen(): Egg;
}
