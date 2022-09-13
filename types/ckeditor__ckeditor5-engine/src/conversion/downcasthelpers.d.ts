import AttributeElement from '../view/attributeelement';
import DowncastWriter from '../view/downcastwriter';
import ConversionHelpers from './conversionhelpers';
import DowncastDispatcher, {
    DowncastConversionApi,
    DowncastDispatcherCallback,
    DowncastEventDataTypes,
} from './downcastdispatcher';
import { ElementDefinition } from '../view/elementdefinition';
import ModelElement from '../model/element';
import ContainerElement from '../view/containerelement';
import Element from '../view/element';
import UIElement from '../view/uielement';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

export interface HighlightDescriptor {
    attributes?: Record<string, string | number | boolean> | undefined;
    classes?: string | string[] | undefined;
    id?: string | undefined;
    priority?: number | undefined;
}

export function clearAttributes(): DowncastDispatcherCallback<'selection'>;
export function convertCollapsedSelection(): DowncastDispatcherCallback<'selection'>;
export function convertRangeSelection(): DowncastDispatcherCallback<'selection'>;
export function createViewElementFromHighlightDescriptor(
    writer: DowncastWriter,
    descriptor: HighlightDescriptor,
): AttributeElement;
export function insertText(): DowncastDispatcherCallback<'insert:$text'>;
export function remove(): DowncastDispatcherCallback<'remove'>;
export function wrap(
    elementCreator: (modelAttributeValue: any, conversionApi: DowncastConversionApi) => Element | void | null,
): DowncastDispatcherCallback<`attribute:${string}:$text` | `attribute:${string}`>;
export function insertElement(
    elementCreator: (modelItem: ModelElement, conversionApi: DowncastConversionApi) => Element | void | null,
): DowncastDispatcherCallback<'insert' | `insert:${string}`>;
export function insertUIElement(
    elementOrElementCreator:
        | UIElement
        | ((
              data: DowncastEventDataTypes['addMarker'] & { isOpening: boolean },
              conversionApi: DowncastConversionApi,
          ) => UIElement | void | null),
): DowncastDispatcherCallback<'addMarker' | `addMarker:${string}`>;

export default class DowncastHelpers extends ConversionHelpers<DowncastHelpers> {
    add(conversionHelper: (dispatcher: DowncastDispatcher) => void): this;

    attributeToAttribute(config?: {
        model: string | { key: string; values: string[]; name?: string | undefined };
        view:
            | string
            | { key: string; value: string }
            | ((modelAttributeValue: any) => {
                  key: string;
                  value: string | string[] | Record<string, string>;
              });
        converterPriority?: PriorityString | number | undefined;
    }): this;
    attributeToElement(config?: {
        model: string | { key: string; values: string[]; name?: string | undefined };
        view: string | ElementDefinition | ((value: string, api: DowncastConversionApi) => AttributeElement);
        converterPriority?: PriorityString | number | undefined;
    }): this;
    elementToElement(config?: {
        model: string;
        view: ElementDefinition | ((element: ModelElement, api: DowncastConversionApi) => ContainerElement);
        converterPriority?: PriorityString | number | undefined;
        triggerBy?: { attributes: string[]; children: string[] } | undefined;
    }): this;
    markerToData(config?: {
        model: string;
        view?: ((markerName: string, api: DowncastConversionApi) => { group: string; name: string }) | undefined;
        converterPriority?: PriorityString | number | undefined;
    }): this;
    markerToElement(config?: {
        model: string;
        view:
            | ElementDefinition
            | ((data: { [key: string]: any; isOpening: boolean }, api: DowncastConversionApi) => UIElement);
        converterPriority?: PriorityString | number | undefined;
    }): this;
    markerToHighlight(config?: {
        model: string;
        view: HighlightDescriptor | ((data: any, api: DowncastConversionApi) => HighlightDescriptor);
        converterPriority?: PriorityString | number | undefined;
    }): this;
}
