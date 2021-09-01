import { Button } from "./button";
import View from "../view";
import ViewCollection from "../viewcollection";
import IconView from "../icon/iconview";
import TooltipView from "../tooltip/tooltipview";

export default class ButtonView extends View implements Button {
    readonly children: ViewCollection;
    class?: string | undefined;
    icon?: string | undefined;
    readonly iconView: IconView;
    isEnabled: boolean;
    isOn: boolean;
    isToggleable: boolean;
    isVisible: boolean;
    keystroke?: string | undefined;
    readonly keystrokeView: View;
    label: string;
    labelStyle?: string | undefined;
    readonly labelView: View;
    tabindex?: string | undefined;
    tooltip?: boolean | string | ((label: string, keystroke: string) => string) | undefined;
    tooltipPosition?: "s" | "n" | "e" | "w" | "sw" | "se" | undefined;
    readonly tooltipView: TooltipView;
    type?: "button" | "submit" | "reset" | "menu" | undefined;
    withKeystroke?: boolean | undefined;
    withText?: boolean | undefined;

    focus(): void;
}
