import { Element, Model, Range } from '@ckeditor/ckeditor5-engine';
import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import { Item } from '@ckeditor/ckeditor5-engine/src/view/item';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { CodeBlockLanguageDefinition } from './codeblock';

export function modelToViewCodeBlockInsertion(
    model: Model,
    languageDefs: CodeBlockLanguageDefinition[],
    useLabels?: boolean,
): (evt: EventInfo, data: { item: Element; range: Range }, api: DowncastConversionApi) => void;

export function modelToDataViewSoftBreakInsertion(
    model: Model,
): (evt: EventInfo, data: { item: Element; range: Range }, api: DowncastConversionApi) => void;

export function dataViewToModelCodeBlockInsertion(
    editingView: View,
    languageDefs: CodeBlockLanguageDefinition[],
): (evt: EventInfo, data: { viewItem: Item; modelCursor: Element }, api: DowncastConversionApi) => void;

export function dataViewToModelTextNewlinesInsertion(): (
    evt: EventInfo,
    data: { viewItem: Item; modelCursor: Position },
    api: DowncastConversionApi,
) => void;
