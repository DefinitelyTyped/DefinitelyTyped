export interface Button {
    class?: string | undefined;
    icon?: string | undefined;
    isEnabled: boolean;
    isOn: boolean;
    isToggleable: boolean;
    isVisible: boolean;
    keystroke?: string | undefined;
    label: string;
    labelStyle?: string | undefined;
    tabindex?: string | undefined;
    tooltip?: boolean | string | ((label: string, keystroke: string) => string) | undefined;
    tooltipPosition?: "s" | "n" | "e" | "w" | "sw" | "se" | undefined;
    type?: "button" | "submit" | "reset" | "menu" | undefined;
    withKeystroke?: boolean | undefined;
    withText?: boolean | undefined;
}
