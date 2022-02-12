import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { ImageStyleOptionDefinition } from '../imagestyle';

export function modelToViewStyleAttribute(
    styles: ImageStyleOptionDefinition[],
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;
export function viewToModelStyleAttribute(
    styles: ImageStyleOptionDefinition[],
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;
