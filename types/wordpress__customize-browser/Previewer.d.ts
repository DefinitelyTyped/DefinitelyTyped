import { Messenger_Params, Messenger } from './Messenger';
import { Value } from './Value';

export interface Previewer_Params extends Messenger_Params {
    allowedUrls: any[]; // TODO
    container: string;
    form: string;
    previewUrl: string;
}

export interface Previewer_Deferred {
    active: JQuery.Deferred<any>;
}

export interface Previewer_Data {
    currentUrl: string;
    activePanels: any; // TODO
    activeSections: any; // TODO
    activeControls: any; // TODO
}

export class Previewer<T> extends Messenger<T> {
    refreshBuffer: null | number;
    deferred: Previewer_Deferred;
    previewUrl: Value<string>;
    container: JQuery;
    allowedUrls: string[];
    initialize(params: Previewer_Params, options?: object): void;
    refresh(): void;
    ready(data: Previewer_Data): void;
    keepPreviewAlive(): void;
    query(): void;
    abort(): void;
    login(): JQuery.Promise<any>;
    cheatin(): void;
    refreshNonces(): JQuery.Deferred<any>;
}
