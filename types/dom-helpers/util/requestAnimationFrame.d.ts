interface DomHelpersRaf {
    /**
     * Returns an ID for canceling
     */
    (callback: () => void): number;
    cancel: (id: number) => void;
}

declare const requestAnimationFrame: DomHelpersRaf;

export = requestAnimationFrame;
