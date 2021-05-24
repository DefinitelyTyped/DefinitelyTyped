import { Button } from "./button";
import View from "../view";
import ViewCollection from "../viewcollection";
import IconView from "../icon/iconview";
import TooltipView from "../tooltip/tooltipview";

export default class ButtonView extends View implements Button {
    readonly children: ViewCollection;
    class?: string;
    icon?: string;
    readonly iconView: IconView;
    isEnabled: boolean;
    isOn: boolean;
    isToggleable: boolean;
    isVisible: boolean;
    keystroke?: string;
    readonly keystrokeView: View;
    label: string;
    labelStyle?: string;
    readonly labelView: View;
    tabindex?: string;
    tooltip?: boolean | string | ((label: string, keystroke: string) => string);
    tooltipPosition?: "s" | "n" | "e" | "w" | "sw" | "se";
    readonly tooltipView: TooltipView;
    type?: "button" | "submit" | "reset" | "menu";
    withKeystroke?: boolean;
    withText?: boolean;

    focus(): void;
}
