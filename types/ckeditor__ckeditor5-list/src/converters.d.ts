import { Model } from '@ckeditor/ckeditor5-engine';
import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import { UpcastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';

export function modelViewInsertion(
    model: Model,
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;

export function modelViewRemove(
    model: Model,
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;

export function modelViewChangeType(
    evt: EventInfo,
    data: Record<string, unknown>,
    conversionApi: DowncastConversionApi,
): void;

export function modelViewMergeAfterChangeType(
    evt: EventInfo,
    data: Record<string, unknown>,
    conversionApi: DowncastConversionApi,
): void;

export function modelViewChangeIndent(
    model: Model,
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;

export function modelViewSplitOnInsert(
    evt: EventInfo,
    data: Record<string, unknown>,
    conversionApi: DowncastConversionApi,
): void;

export function modelViewMergeAfter(
    evt: EventInfo,
    data: Record<string, unknown>,
    conversionApi: DowncastConversionApi,
): void;

export function viewModelConverter(
    evt: EventInfo,
    data: Record<string, unknown>,
    conversionApi: DowncastConversionApi,
): void;

export function cleanList(evt: EventInfo, data: Record<string, unknown>, conversionApi: UpcastConversionApi): void;

export function cleanListItem(evt: EventInfo, data: Record<string, unknown>, conversionApi: UpcastConversionApi): void;

export function modelToViewPosition(view: View): (evt: EventInfo, data: Record<string, unknown>) => void;

export function viewToModelPosition(model: Model): (evt: EventInfo, data: Record<string, unknown>) => void;

export function modelChangePostFixer(model: Model, writer: Writer): void;

export function modelIndentPasteFixer(evt: EventInfo, args: Parameters<Model['insertContent']>): void;
