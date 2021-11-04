import { Plugin } from '@ckeditor/ckeditor5-core';
import { DataController } from '@ckeditor/ckeditor5-engine';

export default class TrackChangesData extends Plugin {
    getDataWithAcceptedSuggestions(options?: Parameters<DataController['get']>[0]): Promise<string>;
    getDataWithDiscardedSuggestions(options?: Parameters<DataController['get']>[0]): Promise<string>;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TrackChangesData: TrackChangesData;
    }
}
