import View from "../view";
import ViewCollection from "../viewcollection";

export default class DropdownPanelView extends View {
    readonly children: ViewCollection;
    isVisible: boolean;
    position: "s" | "se" | "sw" | "sme" | "smw" | "n" | "ne" | "nw" | "nme" | "nmw";

    focus(): void;
    focusLast(): void;
}
