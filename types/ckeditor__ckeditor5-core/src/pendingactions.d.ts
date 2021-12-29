import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import ContextPlugin from './contextplugin';

export default class PendingActions extends ContextPlugin implements Iterable<Observable & { message: string }> {
    static pluginName: 'PendingActions';
    init(): void;
    get hasAny(): boolean | undefined;
    protected set hasAny(value: boolean | undefined);
    add(message: string): Observable & { message: string };
    remove(action: Observable & { message: string }): void;
    readonly first: null | (Observable & { message: string });
    [Symbol.iterator](): Iterator<Observable & { message: string }>;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PendingActions: PendingActions;
    }
}
