import { Locale } from "@ckeditor/ckeditor5-utils";
import ButtonView from "../button/buttonview";
import Model from "../model";
import DropdownView from "./dropdownview";
import { DropdownButton } from "../dropdown/button/dropdownbutton";

export interface ListDropdownItemDefinition {
    model: Model;
    type: "separator" | "button" | "switchbutton";
}

export function addListToDropdown(dropdownView: DropdownView, items: Iterable<ListDropdownItemDefinition>): void;

export function addToolbarToDropdown(dropdownView: DropdownView, buttons: Iterable<ButtonView>): void;

export function createDropdown(locale: Locale, ButtonClass?: DropdownButton): DropdownView;
