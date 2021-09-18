import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ImageUploadProgress extends Plugin {
    static readonly pluginName: 'ImageUploadProgress';
    init(): void;
    uploadStatusChange(evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageUploadProgress: ImageUploadProgress;
    }
}
