import { IconView, TooltipView } from "@ckeditor/ckeditor5-ui";
import { FocusTracker, KeystrokeHandler } from "@ckeditor/ckeditor5-utils";
import ButtonView from "../../button/buttonview";
import View from "../../view";
import ViewCollection from "../../viewcollection";
import { DropdownButton } from "./dropdownbutton";

export default class SplitButtonView extends View implements DropdownButton {
    class?: string;
    icon?: string;
    isEnabled: boolean;
    isOn: boolean;
    isToggleable: boolean;
    isVisible: boolean;
    keystroke?: string;
    label: string;
    labelStyle?: string;
    tabindex?: string;
    tooltip?: string | boolean | ((label: string, keystroke: string) => string);
    tooltipPosition?: "s" | "n" | "e" | "w" | "sw" | "se";
    type?: "button" | "submit" | "reset" | "menu";
    withKeystroke?: boolean;
    withText?: boolean;
    iconView: IconView;
    keystrokeView: View;
    labelView: View;
    tooltipView: TooltipView;

    readonly actionView: ButtonView;
    readonly arrowView: ButtonView;
    readonly children: ViewCollection;
    readonly focusTracker: FocusTracker;
    readonly keystrokes: KeystrokeHandler;

    focus(): void;
}
