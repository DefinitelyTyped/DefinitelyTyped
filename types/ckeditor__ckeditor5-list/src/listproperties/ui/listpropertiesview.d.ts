import {
    ButtonView,
    FocusCycler,
    LabeledFieldView,
    SwitchButtonView,
    View,
    ViewCollection,
} from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';
import CollapsibleView from "./collapsibleview";

/**
 * The list properties view to be displayed in the list dropdown.
 *
 * Contains a grid of available list styles and, for numbered list, also the list start index and reversed fields.
 */
export default class ListPropertiesView extends View {
    /**
     * Creates an instance of the list properties view.
     */
    constructor(
        locale: Locale,
        options: {
            enabledProperties: Record<'styles' | 'startIndex' | 'reversed', boolean>;
            styleButtonViews?: ButtonView[] | null;
            styleGridAriaLabel?: string;
        },
    );

    /**
     * A collection of the child views.
     */
    readonly children: ViewCollection;

    /**
     * A view that renders the grid of list styles.
     */
    get stylesView(): View | null;
    protected set stylesView(view: View | null);

    /**
     * A collapsible view that hosts additional list property fields ({@link #startIndexFieldView} and
     * {@link #reversedSwitchButtonView}) to visually separate them from the {@link #stylesView grid of styles}.
     *
     * **Note**: Only present when:
     * * the view represents **numbered** list properties,
     * * and the {@link #stylesView} is rendered,
     * * and either {@link #startIndexFieldView} or {@link #reversedSwitchButtonView} is rendered.
     */
    get additionalPropertiesCollapsibleView(): CollapsibleView | null;
    protected set additionalPropertiesCollapsibleView(view: CollapsibleView | null);

    /**
     * A labeled number field allowing the user to set the start index of the list.
     *
     * **Note**: Only present when the view represents **numbered** list properties.
     */
    get startIndexFieldView(): LabeledFieldView | null;
    protected set startIndexFieldView(view: LabeledFieldView | null);

    /**
     * A switch button allowing the user to make the edited list reversed.
     *
     * **Note**: Only present when the view represents **numbered** list properties.
     */
    get reversedSwitchButtonView(): SwitchButtonView | null;
    protected set reversedSwitchButtonView(view: SwitchButtonView | null);

    /**
     * Tracks information about the DOM focus in the view.
     */
    readonly focusTracker: FocusTracker;

    /**
     * An instance of the {@link module:utils/keystrokehandler~KeystrokeHandler}.
     */
    readonly keystrokes: KeystrokeHandler;

    /**
     * A collection of views that can be focused in the properties view.
     */
    readonly focusables: ViewCollection;

    /**
     * Helps cycling over {@link #focusables} in the view.
     */
    readonly focusCycler: FocusCycler;

    render(): void;
    focus(): void;
    focusLast(): void;
    destroy(): void;
}
