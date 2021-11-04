import { WindowOption } from '../window/windowOption';
export interface ApplicationOption extends LegacyWinOptionsInAppOptions {
    disableIabSecureLogging?: boolean | undefined;
    loadErrorMessage?: string | undefined;
    mainWindowOptions?: WindowOption | undefined;
    name?: string | undefined;
    nonPersistent?: boolean | undefined;
    plugins?: boolean | undefined;
    spellCheck?: boolean | undefined;
    url?: string | undefined;
    uuid: string;
    webSecurity?: boolean | undefined;
}
export declare type LegacyWinOptionsInAppOptions = Pick<WindowOption, 'accelerator' | 'alwaysOnTop' | 'api' | 'aspectRatio' | 'autoShow' | 'backgroundColor' | 'contentNavigation' | 'contextMenu' | 'cornerRounding' | 'customData' | 'customRequestHeaders' | 'defaultCentered' | 'defaultHeight' | 'defaultLeft' | 'defaultTop' | 'defaultWidth' | 'frame' | 'hideOnClose' | 'icon' | 'maxHeight' | 'maximizable' | 'maxWidth' | 'minHeight' | 'minimizable' | 'minWidth' | 'opacity' | 'preloadScripts' | 'resizable' | 'resizeRegion' | 'saveWindowState' | 'shadow' | 'showTaskbarIcon' | 'smallWindow' | 'state' | 'taskbarIconGroup' | 'waitForPageLoad'>;
