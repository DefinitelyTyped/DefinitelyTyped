interface Erase {
    /**
     * Entire screen
     */
    readonly screen: string;
    /**
     * Left portion of a screen
     */
    readonly screenLeft: string;
    /**
     * Right portion of a screen
     */
    readonly screenRight: string;
    /**
     * Current line
     */
    readonly line: string;
    /**
     * Right portion of current line
     */
    readonly lineLeft: string;
    /**
     * Left portion of current line
     */
    readonly lineRight: string;
}

declare const erase: Erase;
export = erase;
