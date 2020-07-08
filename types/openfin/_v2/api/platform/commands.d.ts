import { InputEvent } from '../events/view';
import LayoutManager from './openfin-layout';
import { ViewComponent } from './utils';
import { ShortcutOverride, Hotkey } from '../../shapes/shapes';
import { PlatformOptions } from '../../shapes/Platform';
export declare const handleViewCommand: (e: InputEvent, bv: ViewComponent, context: LayoutManager) => Promise<void>;
export declare const handleWindowCommand: (e: InputEvent, context: LayoutManager) => void;
export declare const mergeDefaultCommands: (providedCommands: ShortcutOverride[]) => {
    command: string;
    keys: string;
}[];
export declare const setUpKeyboardCommands: (hotkeys: Hotkey[], appOptions: PlatformOptions) => Hotkey[];
export declare function detachView(tab: GoldenLayout.Tab, context: LayoutManager): void;
