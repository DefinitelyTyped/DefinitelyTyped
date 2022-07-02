import { Model } from '@ckeditor/ckeditor5-engine';
import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import { UpcastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher';
import { Item } from '@ckeditor/ckeditor5-engine/src/model/item';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';

export function modelViewInsertion(
    model: Model,
    onCheckboxChecked: (item: Item) => void,
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;

export function dataModelViewInsertion(
    model: Model,
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;

export function dataViewModelCheckmarkInsertion(
    evt: EventInfo,
    data: Record<string, unknown>,
    conversionApi: UpcastConversionApi,
): void;

export function modelViewChangeType(
    onCheckedChange: (item: Item) => void,
    view: View,
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;

export function modelViewChangeChecked(
    onCheckedChange: (item: Item) => void,
): (evt: EventInfo, data: Record<string, unknown>, conversionApi: DowncastConversionApi) => void;

export function mapModelToViewPosition(view: View): (evt: EventInfo, data: Record<string, unknown>) => void;
