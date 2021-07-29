import { Plugin } from '@ckeditor/ckeditor5-core';
import { Element, Range } from '@ckeditor/ckeditor5-engine';
import DowncastDispatcher, {
    DowncastConversionApi,
} from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';

export default class ImageUploadProgress extends Plugin {
    static readonly pluginName: 'ImageUploadProgress';
    init(): void;
    uploadStatusChange(
        evt: EventInfo<'attribute:uploadStatus:imageInline', DowncastDispatcher>,
        data: {
            attributeKey: string;
            attributeNewValue: string;
            attributeOldValue: null | string;
            item: Element;
            range: Range;
        },
        conversionApi: DowncastConversionApi,
    ): void;
}
