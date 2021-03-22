import { Class } from './Class';
import { Control } from './Control';
import { Control_Constructor } from './Control_Constructor';
import { Notifications } from './Notifications';
import { Panel } from './Panel';
import { Panel_Constructor } from './Panel_Constructor';
import { Previewer } from './Previewer';
import { Section } from './Section';
import { Section_Constructor } from './Section_Constructor';
import { Setting } from './Setting';
import { Setting_Constructor } from './Setting_Constructor';
import { Utils } from './Utils';
import { Values } from './Values';

export interface DirtyValuesOptions {
    unsaved?: boolean;
}

export interface RequestChangesetUpdateOptions {
    autosave?: boolean;
    force?: boolean;
    title?: string;
    date?: string;
}

export interface HandleSettingValiditiesArgs {
    settingValidities: Record<string, any>; // TODO
    focusInvalidControl?: boolean;
}

export interface Customize extends Values<Setting<any>> {
    _latestRevision: number;
    _lastSavedRevision: number;
    _latestSettingRevision: Record<string, number>;
    // (a: any, b?: any): any; // TODO

    utils: Utils;
    ensure(element: string | JQuery): JQuery;
    dirtyValues(options?: DirtyValuesOptions): Record<string, any>;
    requestChangesetUpdate(changes?: Record<string, any>, args?: RequestChangesetUpdateOptions): JQuery.Promise<any>;
    get(): Record<string, any>;
    defaultConstructor: Setting<Class>;
    control: Values<Control>;
    section: Values<Section>;
    panel: Values<Panel>;
    notifications: Notifications;
    setDocumentTitle(documentTitle: string): void;
    settingConstructor: Setting_Constructor;
    controlConstructor: Control_Constructor;
    panelConstructor: Panel_Constructor;
    sectionConstructor: Section_Constructor;
    _handleSettingValidities(args: HandleSettingValiditiesArgs): void;
    findControlsForSettings(settingIds: ReadonlyArray<string>): Record<string, Control>;
    reflowPaneContents(): void;
    state: Values<Class>;
    settings: any; // TODO
    l10n: Record<string, string>;
    previewer: Previewer<string>;
}
