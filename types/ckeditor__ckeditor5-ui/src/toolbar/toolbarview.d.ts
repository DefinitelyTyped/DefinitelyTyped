import { FocusTracker, KeystrokeHandler, Locale } from "@ckeditor/ckeditor5-utils";
import View from "../view";
import ViewCollection from "../viewcollection";
import ComponentFactory from "../componentfactory";
import { DropdownPanelFocusable } from "../dropdown/dropdownpanelfocusable";

export default class ToolbarView extends View implements DropdownPanelFocusable {
    ariaLabel?: string | undefined;
    readonly children: ViewCollection;
    class?: string | undefined;
    readonly focusTracker: FocusTracker;
    readonly focusables: ViewCollection;
    isCompact: boolean;
    isVertical: boolean;
    readonly items: ViewCollection;
    readonly itemsView: ItemsView;
    readonly keystrokes: KeystrokeHandler;
    maxWidth: string;
    readonly options: ToolbarOptions;

    constructor(locale: Locale, options?: ToolbarOptions);
    fillFromConfig(itemsOrConfig: ToolbarOptions | string[], factory: ComponentFactory): void;
    focus(): void;
    focusLast(): void;
}

export interface ToolbarOptions {
    isFloating?: boolean | undefined;
    shouldGroupWhenFull?: boolean | undefined;
}

export interface ItemsView extends View {
    readonly children: ViewCollection;
}
