export type StatusBarHeightHandler = (height: number) => void;

export class StatusBarHeight {
    /**
     * Get the current status bar height
     */
    getAsync(): Promise<number>;
    /**
     * Add 'willChange' event listener
     */
    addEventListener(handler: StatusBarHeightHandler): void;
    /**
     * Remove 'willChange' event listener
     */
    removeEventListener(handler: StatusBarHeightHandler): void;
}

declare const StatusBarHeightStatic: StatusBarHeight;
export default StatusBarHeightStatic;
