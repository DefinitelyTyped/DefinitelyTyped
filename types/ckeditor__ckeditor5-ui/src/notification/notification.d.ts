import { ContextPlugin } from '@ckeditor/ckeditor5-core';

export default class Notification extends ContextPlugin {
    showInfo(message: string, data?: { namespace?: string | undefined; title?: string | undefined }): void;
    showSuccess(message: string, data?: { namespace?: string | undefined; title?: string | undefined }): void;
    showWarning(message: string, data?: { namespace?: string | undefined; title?: string | undefined }): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Notification: Notification;
    }
}
