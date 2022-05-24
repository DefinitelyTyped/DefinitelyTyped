import { FormHeaderView } from '@ckeditor/ckeditor5-ui';
import DropdownView from '@ckeditor/ckeditor5-ui/src/dropdown/dropdownview';
import { Locale } from '@ckeditor/ckeditor5-utils';

/**
 * A class representing the navigation part of the special characters UI. It is responsible
 * for describing the feature and allowing the user to select a particular character group.
 */
export default class SpecialCharactersNavigationView extends FormHeaderView {
    /**
     * Creates an instance of the {@link module:special-characters/ui/specialcharactersnavigationview~SpecialCharactersNavigationView}
     * class.
     */
    constructor(locale: Locale, groupNames: string[]);

    /**
     * A dropdown that allows selecting a group of special characters to be displayed.
     */
    readonly groupDropdownView: DropdownView;

    /**
     * Returns the name of the character group currently selected in the {@link #groupDropdownView}.
     */
    readonly currentGroupName: string;
}
