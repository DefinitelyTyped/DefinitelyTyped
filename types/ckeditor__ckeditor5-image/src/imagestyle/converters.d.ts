import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { ImageStyleFormat } from './imagestyleediting';

export function modelToViewStyleAttribute(
    styles: ImageStyleFormat,
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;
export function viewToModelStyleAttribute(
    styles: ImageStyleFormat,
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;
