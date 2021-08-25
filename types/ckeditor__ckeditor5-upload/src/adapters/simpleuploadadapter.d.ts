import { Plugin } from '@ckeditor/ckeditor5-core';
import FileRepository from '../filerepository';

export default class SimpleUploadAdapter extends Plugin {
    static requires: [typeof FileRepository];
    static pluginName: 'SimpleUploadAdapter';
    init(): void;
}

export interface SimpleUploadConfig {
    headers?: Record<string, string> | undefined;
    uploadUrl?: string | undefined;
    withCredentials?: boolean | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SimpleUploadAdapter: SimpleUploadAdapter;
    }
}
