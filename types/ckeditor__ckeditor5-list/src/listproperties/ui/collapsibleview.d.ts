import { ButtonView, View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

/**
 * A collapsible UI component. Consists of a labeled button and a container which can be collapsed
 * by clicking the button. The collapsible container can be a host to other UI views.
 */
export default class CollapsibleView extends View {
    /**
     * Creates an instance of the collapsible view.
     */
    constructor(locale: Locale, childViews: View[]);

    /**
     * `true` when the container with {@link #children} is collapsed. `false` otherwise.
     */
    get isCollapsed(): boolean;
    protected set isCollapsed(isCollapsed: boolean);

    /**
     * The text label of the {@link #buttonView}.
     */
    get label(): string;
    protected set label(val: string);

    /**
     * The main button that, when clicked, collapses or expands the container with {@link #children}.
     */
    readonly buttonView: ButtonView;

    /**
     * A collection of the child views that can be collapsed by clicking the {@link #buttonView}.
     */
    readonly children: ViewCollection;

    render(): void;
}
