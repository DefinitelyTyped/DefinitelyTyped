import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Plugin } from '@ckeditor/ckeditor5-core';
import { FileRepository } from '@ckeditor/ckeditor5-upload';

export default class CloudServicesUploadAdapter extends Plugin {
    static pluginName: 'CloudServicesUploadAdapter';
    static requires: [typeof CloudServices, typeof FileRepository];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CloudServicesUploadAdapter: CloudServicesUploadAdapter;
    }
}
