import { RuntimeEvent, BaseEventMap } from './base';
import { Identity } from '../../identity';
import { nonHotkeyEvents } from '../global-hotkey';
export interface GlobalHotkeyEvent<Type> extends RuntimeEvent<'global-hotkey', Type> {
    identity: Identity;
    hotkey: string;
}
export interface GlobalHotkeyEvents extends BaseEventMap {
    [nonHotkeyEvents.REGISTERED]: GlobalHotkeyEvent<nonHotkeyEvents.REGISTERED>;
    [nonHotkeyEvents.UNREGISTERED]: GlobalHotkeyEvent<nonHotkeyEvents.UNREGISTERED>;
}
