import { View } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

/**
 * The find and replace form view class.
 */
export default class FindAndReplaceFormView extends View {
    constructor(locale: Locale);
    /**
     * Stores the number of matched search results.
     */
    get matchCount(): number;
    protected set matchCount(value: number);
    /**
     * The offset of currently highlighted search result in {@link #matchCount matched results}.
     */
    get highlightOffset(): number;
    protected set highlightOffset(value: number);
    /**
     * Whether the search results counter should be visible.
     */
    get isDirty(): boolean;
    protected set isDirty(value: boolean);
    render(): void;
    /**
     * Focuses the fist {@link #_focusables} in the form.
     */
    focus(): void;
    /**
     * A collection of views for the 'find' functionality of the feature
     * Resets the form before re-appearing.
     *
     * It clears error messages, hides the match counter and disables the replace feature
     * until the next hit of the "Find" button.
     *
     * **Note**: It does not reset inputs and options, though. This way the form works better in editors with
     * disappearing toolbar (e.g. BalloonEditor): hiding the toolbar by accident (together with the find and replace UI)
     * does not require filling the entire form again.
     */
    reset(): void;
}
