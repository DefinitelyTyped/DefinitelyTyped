import { Element, Model, Range } from '@ckeditor/ckeditor5-engine';
import DowncastDispatcher, {
    DowncastConversionApi,
} from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import Mapper from '@ckeditor/ckeditor5-engine/src/conversion/mapper';
import UpcastDispatcher, {
    UpcastConversionApi,
    UpcastConversionData,
} from '@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher';
import { Item } from '@ckeditor/ckeditor5-engine/src/model/item';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';

export function modelViewInsertion(
    model: Model,
    onCheckboxChecked: (item: Item) => void,
): (
    evt: EventInfo<'insert:listItem', DowncastDispatcher>,
    data: {
        item: Element;
        range: Range;
    },
    conversionApi: DowncastConversionApi,
) => void;

/**
 * A model-to-view converter for the `listItem` model element insertion.
 *
 * It is used by {@link module:engine/controller/datacontroller~DataController}.
 *
 * @see module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:insert
 */
export function dataModelViewInsertion(
    model: Model,
): (
    evt: EventInfo<'', DowncastDispatcher>,
    data: Record<string, unknown>,
    conversionApi: DowncastConversionApi,
) => void;

/**
 * A view-to-model converter for the checkbox element inside a view list item.
 *
 * It changes the `listType` of the model `listItem` to a `todo` value.
 * When a view checkbox element is marked as checked, an additional `todoListChecked="true"` attribute is added to the model item.
 *
 * It is used by {@link module:engine/controller/datacontroller~DataController}.
 */
export function dataViewModelCheckmarkInsertion(
    evt: EventInfo<'', UpcastDispatcher>,
    data: UpcastConversionData,
    conversionApi: UpcastConversionApi,
): void;

export function modelViewChangeType(
    onCheckedChange: (item: Item) => void,
    view: View,
): (
    evt: EventInfo<'attribute:listType:listItem', DowncastDispatcher>,
    data: {
        attributeKey: string;
        attributeNewValue: string;
        attributeOldValue: null | string;
        item: Element;
        range: Range;
    },
    conversionApi: DowncastConversionApi,
) => void;

export function modelViewChangeChecked(onCheckedChange: (item: Item) => void): (
    evt: EventInfo<'attribute:todoListChecked:listItem', DowncastDispatcher>,
    data: {
        attributeKey: string;
        attributeNewValue: string;
        attributeOldValue: null | string;
        item: Element;
        range: Range;
    },
    conversionApi: DowncastConversionApi,
) => void;

export function mapModelToViewPosition(view: View): (
    evt: EventInfo<'modelToViewPosition', Mapper>,
    data: {
        isPhantom: boolean;
        mapper: Mapper;
        modelPosition: Position;
    },
) => void;
