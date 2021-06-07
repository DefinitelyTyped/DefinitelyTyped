import { Button } from "../../button/button";
import ButtonView from "../../button/buttonview";

export default class BlockButtonView extends ButtonView implements Button {
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

    left: number;
    top: number;
}
