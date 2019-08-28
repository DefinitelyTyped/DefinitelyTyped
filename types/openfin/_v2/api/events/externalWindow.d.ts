import { BaseEventMap } from './base';
import { WindowEventMapping } from './window';
declare type ExternalWindowEventMapping<Topic = string, Type = string> = BaseEventMap & Pick<WindowEventMapping, 'begin-user-bounds-changing' | 'blurred' | 'bounds-changed' | 'bounds-changing' | 'closed' | 'closing' | 'disabled-movement-bounds-changed' | 'disabled-movement-bounds-changing' | 'end-user-bounds-changing' | 'focused' | 'group-changed' | 'hidden' | 'maximized' | 'minimized' | 'restored' | 'shown' | 'user-movement-disabled' | 'user-movement-enabled'>;
export declare type ExternalWindowEvents = {
    [Type in keyof ExternalWindowEventMapping]: ExternalWindowEventMapping<'external-window', Type>[Type];
};
export {};
