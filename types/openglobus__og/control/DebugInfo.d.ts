export function debugInfo(options: any): DebugInfo;
/**
 * Debug information
 * @class
 * @extends {og.control.Control}
 * @param {Object} [options] - Control options.
 */
export class DebugInfo {
    constructor(options: any);
    el: HTMLDivElement;
    _watch: any;
    addWatches(watches: any): void;
    addWatch(watch: any): void;
    oninit(): void;
    _frame(): void;
}
