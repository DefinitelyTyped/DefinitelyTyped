// Type definitions for gifffer 1.5
// Project: https://github.com/krasimir/gifffer#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Gifffer {
    /**
     * @see {@link https://github.com/krasimir/gifffer#styling|Styling}
     */
    interface GiffferOptions {
        playButtonStyles: { [style: string]: string; };
        playButtonIconStyles: { [style: string]: string; };
    }
}

/**
 * @see {@link https://github.com/krasimir/gifffer#usage|Usage}
 */
declare function Gifffer(options?: Gifffer.GiffferOptions): HTMLButtonElement[];

export as namespace Gifffer;

export = Gifffer;
