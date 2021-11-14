import View from "../view";

export default class TooltipView extends View {
    position: "s" | "n" | "e" | "w" | "sw" | "se";
    text: string;
}
