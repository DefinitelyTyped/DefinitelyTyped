import { WindowOption } from '../window/windowOption';
import { ShortcutOverride } from '../../shapes/shapes';
import { ViewCreationOptions } from '../view/view';
export interface ApplicationOption extends LegacyWinOptionsInAppOptions {
    disableIabSecureLogging?: boolean;
    loadErrorMessage?: string;
    mainWindowOptions?: WindowOption;
    name?: string;
    nonPersistent?: boolean;
    plugins?: boolean;
    spellCheck?: boolean;
    url?: string;
    uuid: string;
    webSecurity?: boolean;
    fdc3Api?: boolean;
    commands?: ShortcutOverride[];
    isPlatformController?: boolean;
    defaultWindowOptions?: WindowOption;
    defaultViewOptions?: ViewCreationOptions;
}
export declare type LegacyWinOptionsInAppOptions = Pick<WindowOption, 'accelerator' | 'alwaysOnTop' | 'api' | 'aspectRatio' | 'autoShow' | 'backgroundColor' | 'contentNavigation' | 'contextMenu' | 'cornerRounding' | 'customData' | 'customRequestHeaders' | 'defaultCentered' | 'defaultHeight' | 'defaultLeft' | 'defaultTop' | 'defaultWidth' | 'frame' | 'hideOnClose' | 'icon' | 'maxHeight' | 'maximizable' | 'maxWidth' | 'minHeight' | 'minimizable' | 'minWidth' | 'opacity' | 'preloadScripts' | 'resizable' | 'resizeRegion' | 'saveWindowState' | 'shadow' | 'showTaskbarIcon' | 'smallWindow' | 'state' | 'taskbarIconGroup' | 'waitForPageLoad'>;
