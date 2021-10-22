import { ButtonView, LabeledFieldView, View } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';
import CheckboxView from './checkboxview';

/**
 * The find and replace form view controller class.
 */
export default class FindAndReplaceFormView extends View {
    /**
     * Indicates that the form is in active searching state.
     */
    readonly isSearching: boolean;
    readonly searchText: boolean;
    readonly replaceText: boolean;
    /**
     * Stores the number of matched search results.
     */
    readonly matchCount: number | null;
    /**
     * The offset of currently highlighted search result in {@link #matchCount matched results}.
     */
    readonly highlightOffset: number | null;
    /**
     * Whether the search results counter should be visible.
     */
    readonly isCounterHidden: boolean;
    /**
     * The find in text input view that stores the searched string.
     */
    findInputView: LabeledFieldView;
    /**
     * The find button view that initializes the search process.
     */
    findButtonView: ButtonView;
    /**
     * The find previous button view.
     */
    findPrevButtonView: ButtonView;
    /**
     * The find next button view.
     */
    findNextButtonView: ButtonView;
    /**
     * The replace button view.
     */
    replaceButtonView: ButtonView;
    /**
     * The replace all button view.
     */
    replaceAllButtonView: ButtonView;
    /**
     * The match case checkbox view.
     */
    matchCaseView: CheckboxView;
    /**
     * The whole words only checkbox view.
     */
    matchWholeWordsView: CheckboxView;
    /**
     * The replace input view.
     */
    replaceInputView: LabeledFieldView;
    /**
     * Stores gathered views related to find functionality of the feature.
     */
    findView: View;
    /**
     * Stores gathered views related to replace functionality of the feature.
     */
    replaceView: View;
    /**
     * Tracks information about the DOM focus in the form.
     */
    readonly focusTracker: FocusTracker;
    /**
     * An instance of the {@link module:utils/keystrokehandler~KeystrokeHandler}.
     */
    readonly keystrokes: KeystrokeHandler;

    constructor(locale: Locale);

    render(): void;
    /**
     * Focuses the fist {@link #_focusables} in the form.
     */
    focus(): void;
}
