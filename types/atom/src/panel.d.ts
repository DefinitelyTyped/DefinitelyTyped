import { Disposable } from '../index';

/**
 *  A container representing a panel on the edges of the editor window. You
 *  should not create a Panel directly, instead use Workspace::addTopPanel and
 *  friends to add panels.
 */
export interface Panel<T = object> {
    /** Whether or not the Panel is visible. */
    readonly visible: boolean;

    // Construction and Destruction
    /** Destroy and remove this panel from the UI. */
    destroy(): void;

    // Event Subscription
    /** Invoke the given callback when the pane hidden or shown. */
    onDidChangeVisible(callback: (visible: boolean) => void): Disposable;

    /** Invoke the given callback when the pane is destroyed. */
    onDidDestroy(callback: (panel: Panel<T>) => void): Disposable;

    // Panel Details
    /** Returns the panel's item. */
    getItem(): T;

    /** Returns a number indicating this panel's priority. */
    getPriority(): number;

    /** Returns a boolean true when the panel is visible. */
    isVisible(): boolean;

    /** Hide this panel. */
    hide(): void;

    /** Show this panel. */
    show(): void;
}
