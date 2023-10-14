interface WindowSize {
    /**
     * Returns terminal width
     */
    readonly width: number;
    /**
     * Returns terminal height
     */
    readonly height: number;
}

declare const windowSize: WindowSize;
export = windowSize;
