import { FormHeaderView } from "@ckeditor/ckeditor5-ui";
import DropdownView from "@ckeditor/ckeditor5-ui/src/dropdown/dropdownview";
import { Locale } from "@ckeditor/ckeditor5-utils";

export default class SpecialCharactersNavigationView extends FormHeaderView {
    currentGroupName: string;
    groupDropdownView: DropdownView;
    constructor(locale: Locale, groupNames: string[]);
}
