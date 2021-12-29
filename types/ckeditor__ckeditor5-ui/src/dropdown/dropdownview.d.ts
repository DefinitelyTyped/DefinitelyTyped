import { KeystrokeHandler, Locale, Rect } from "@ckeditor/ckeditor5-utils";
import View from "../view";
import ListView from "../list/listview";
import ToolbarView from "../toolbar/toolbarview";
import ButtonView from "../button/buttonview";
import { Position } from "@ckeditor/ckeditor5-utils/src/dom/position";
import { DropdownButton } from "./button/dropdownbutton";
import DropdownPanelView from "../dropdown/dropdownpanelview";

export default class DropdownView extends View {
    readonly buttonView: ButtonView;
    class?: string | undefined;
    id?: string | undefined;
    isEnabled: boolean;
    isOpen: boolean;
    readonly keystrokes: KeystrokeHandler;
    readonly listView: ListView;
    panelPosition: "auto" | "s" | "se" | "sw" | "sme" | "smw" | "n" | "ne" | "nw" | "nme" | "nmw";
    readonly panelView: DropdownPanelView;
    readonly toolbarView: ToolbarView;

    static defaultPanelPositions: {
        south(targetRect: Rect, balloonReact: Rect): Position;
        southEast(targetRect: Rect, balloonReact: Rect): Position;
        southWest(targetRect: Rect, balloonReact: Rect): Position;
        southMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
        southMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
        southMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
        north(targetRect: Rect, balloonReact: Rect): Position;
        northEast(targetRect: Rect, balloonReact: Rect): Position;
        northWest(targetRect: Rect, balloonReact: Rect): Position;
        northMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
        northMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
    };

    constructor(locale: Locale, buttonView: DropdownButton, panelView: DropdownPanelView);
    focus(): void;
}
