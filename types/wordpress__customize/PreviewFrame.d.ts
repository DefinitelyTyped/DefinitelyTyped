import { Messenger_Params, Messenger } from './Messenger';

export interface PreviewFrame_Params extends Messenger_Params {
    container: any; // TODO
    previewUrl: any; // TODO
    query: any; // TODO
}

export class PreviewFrame<T> extends Messenger<T> {
    static uuid(): string;
    sensitivity: number | null;
    initialize(params: PreviewFrame_Params, options?: object): void;
    run(deferred: JQuery.Deferred<any>): void;
    login(deferred: JQuery.Deferred<any>): void;
}
