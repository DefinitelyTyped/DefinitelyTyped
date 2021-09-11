import ClipboardPipeline from '@ckeditor/ckeditor5-clipboard/src/clipboardpipeline';
import DataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';
import { Plugin } from '@ckeditor/ckeditor5-core';
import { Notification } from '@ckeditor/ckeditor5-ui';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';

export default class ImageUploadEditing extends Plugin {
    static readonly requires: [typeof FileRepository, typeof Notification, typeof ClipboardPipeline];
    static readonly pluginName: 'ImageUploadEditing';
    init(): void;
}

export function isHtmlIncluded(dataTransfer: DataTransfer): boolean;

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageUploadEditing: ImageUploadEditing;
    }
}
