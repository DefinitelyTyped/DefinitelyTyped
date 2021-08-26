export interface Button {
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
    tooltip?: boolean | string | ((label: string, keystroke: string) => string);
    tooltipPosition?: "s" | "n" | "e" | "w" | "sw" | "se";
    type?: "button" | "submit" | "reset" | "menu";
    withKeystroke?: boolean;
    withText?: boolean;
}
