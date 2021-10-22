import { View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

/**
 * The checkbox view class.
 */
export default class CheckboxView extends View {
    /**
     * (Optional) The additional CSS class set on the button.
     */
    class: string | undefined;
    /**
     * Controls whether the checkbox view is enabled, i.e. it can be clicked and can execute an action.
     */
    isEnabled: boolean;
    /**
     * Controls whether the checkbox view is visible. Visible by default, the checkboxes are hidden
     * using a CSS class.
     */
    isVisible: boolean;
    /**
     * Indicates whether a related checkbox is checked.
     */
    isChecked: boolean;
    /**
     * The text of the label associated with the checkbox view.
     */
    label: string | undefined;
    /**
     * The HTML `id` attribute to be assigned to the checkbox.
     */
    id: string | null;
    /**
     * (Optional) Controls the `tabindex` HTML attribute of the checkbox. By default, the checkbox is focusable
     * but is not included in the <kbd>Tab</kbd> order.
     */
    tabindex: number | string;
    /**
     * The collection of the child views inside of the checkbox {@link #element}.
     */
    readonly children: ViewCollection;
    /**
     * The label of the checkbox view. It is configurable using the {@link #label label attribute}.
     */
    readonly labelView: View;
    /**
     * The input of the checkbox view.
     */
    checkboxInputView: View;

    constructor(locale: Locale);

    render(): void;

    /**
     * Focuses the {@link #element} of the checkbox.
     */
    focus(): void;
}
