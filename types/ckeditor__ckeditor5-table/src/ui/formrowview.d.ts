import { View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

/**
 * The class representing a single row in a complex form,
 * used by {@link module:table/tablecellproperties/ui/tablecellpropertiesview~TableCellPropertiesView}.
 *
 * **Note**: For now this class is private. When more use cases arrive (beyond ckeditor5-table),
 * it will become a component in ckeditor5-ui.
 */
export default class FormRowView extends View {
    /**
     * Creates an instance of the form row class.
     */
    constructor(locale: Locale, options?: { children: View[]; class?: string; labelView?: View });

    /**
     * An additional CSS class added to the {@link #element}.
     */
    get class(): string | null;
    protected set class(value: string | null);

    /**
     * A collection of row items (buttons, dropdowns, etc.).
     */
    readonly children: ViewCollection;
}
