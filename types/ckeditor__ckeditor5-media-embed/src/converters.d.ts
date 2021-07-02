import DowncastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import MediaRegistry from './mediaregistry';

export function modelToViewUrlAttributeConverter(
    registry: MediaRegistry,
    options?: {
        elementName?: string;
        renderMediaPreview?: boolean;
        renderForEditingView?: boolean;
    },
): (dispatcher: DowncastDispatcher) => void;
