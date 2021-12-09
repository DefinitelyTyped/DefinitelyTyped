import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ImageUploadProgress extends Plugin {
    static readonly pluginName: 'ImageUploadProgress';
    /**
     * The image placeholder that is displayed before real image data can be accessed.
     */
    readonly placeholder: string;
    init(): void;
    /**
     * This method is called each time the image `uploadStatus` attribute is changed.
     */
    uploadStatusChange(evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageUploadProgress: ImageUploadProgress;
    }
}
