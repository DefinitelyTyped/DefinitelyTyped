declare namespace Gifffer {
    /**
     * @see {@link https://github.com/krasimir/gifffer#styling|Styling}
     */
    interface GiffferOptions {
        playButtonStyles: { [style: string]: string };
        playButtonIconStyles: { [style: string]: string };
    }
}

/**
 * @see {@link https://github.com/krasimir/gifffer#usage|Usage}
 */
declare function Gifffer(options?: Gifffer.GiffferOptions): HTMLButtonElement[];

export as namespace Gifffer;

export = Gifffer;
