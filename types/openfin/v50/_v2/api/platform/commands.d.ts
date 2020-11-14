import { InputEvent } from '../../api/events/view';
import { LayoutManager } from './openfin-layout';
import { ViewComponent } from './utils';
import { ShortcutOverride, Hotkey } from '../../shapes';
import { PlatformOptions } from './platform';
export declare const handleViewCommand: (e: InputEvent, bv: ViewComponent, context: LayoutManager) => Promise<void>;
export declare const handleWindowCommand: (e: InputEvent, context: LayoutManager) => void;
export declare const mergeDefaultCommands: (providedCommands: ShortcutOverride[]) => {
    command: string;
    keys: string;
}[];
export declare const setUpKeyboardCommands: (hotkeys: Hotkey[], appOptions: PlatformOptions) => Hotkey[];
