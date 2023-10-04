import { InputEvent } from "../../api/events/view";
import { Hotkey, ShortcutOverride } from "../../shapes";
import { LayoutManager } from "./openfin-layout";
import { PlatformOptions } from "./platform";
import { ViewComponent } from "./utils";
export declare const handleViewCommand: (e: InputEvent, bv: ViewComponent, context: LayoutManager) => Promise<void>;
export declare const handleWindowCommand: (e: InputEvent, context: LayoutManager) => void;
export declare const mergeDefaultCommands: (providedCommands: ShortcutOverride[]) => {
    command: string;
    keys: string;
}[];
export declare const setUpKeyboardCommands: (hotkeys: Hotkey[], appOptions: PlatformOptions) => Hotkey[];
