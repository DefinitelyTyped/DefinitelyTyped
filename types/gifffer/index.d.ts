// Type definitions for gifffer 1.5
// Project: https://github.com/krasimir/gifffer#readme
// Definitions by: William Lohan <https://github.com/gatimus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @see {@link https://github.com/krasimir/gifffer#styling|Styling}
 */
export interface GiffferOptions {
    playButtonStyles: { [style: string]: string; };
    playButtonIconStyles: { [style: string]: string; };
}

/**
 * @see {@link https://github.com/krasimir/gifffer#usage|Usage}
 */
export default function Gifffer(options?: GiffferOptions): HTMLButtonElement[];
