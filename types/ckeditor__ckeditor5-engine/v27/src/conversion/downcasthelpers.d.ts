import AttributeElement from "../view/attributeelement";
import DowncastWriter from "../view/downcastwriter";
import ConversionHelpers from "./conversionhelpers";
import { DowncastConversionApi } from "./downcastdispatcher";
import { ElementDefinition } from "../view/elementdefinition";
import Element from "../model/element";
import ContainerElement from "../view/containerelement";
import UIElement from "../view/uielement";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";

export interface HighlightDescriptor {
    attributes?: Record<string, string | number | boolean> | undefined;
    classes?: string | string[] | undefined;
    id?: string | undefined;
    priority?: number | undefined;
}

export function clearAttributes(): (...arg: any[]) => any;
export function convertCollapsedSelection(): (...arg: any[]) => any;
export function convertRangeSelection(): (...arg: any[]) => any;
export function createViewElementFromHighlightDescriptor(
    writer: DowncastWriter,
    descriptor: HighlightDescriptor,
): AttributeElement;
export function insertText(): (...arg: any[]) => any;
export function remove(): (...arg: any[]) => any;

export default class DowncastHelpers extends ConversionHelpers<DowncastHelpers> {
    attributeToAttribute(config?: {
        model: string | { key: string; values: string[]; name?: string | undefined };
        view:
            | string
            | { key: string; value: string }
            | ((
                  modelAttributeValue: any,
              ) => {
                  key: string;
                  value: string | string[] | Record<string, string>;
              });
        converterPriority?: PriorityString | number | undefined;
    }): DowncastHelpers;
    attributeToElement(config?: {
        model: string | { key: string; values: string[]; name?: string | undefined };
        view: string | ElementDefinition | ((value: string, api: DowncastConversionApi) => AttributeElement);
        converterPriority?: PriorityString | number | undefined;
    }): DowncastHelpers;
    elementToElement(config?: {
        model: string;
        view: ElementDefinition | ((element: Element, api: DowncastConversionApi) => ContainerElement);
        triggerBy?: { attributes: string[]; children: string[] } | undefined;
    }): DowncastHelpers;
    markerToData(config?: {
        model: string;
        view?: ((markerName: string, api: DowncastConversionApi) => { group: string; name: string }) | undefined;
        converterPriority?: PriorityString | number | undefined;
    }): DowncastHelpers;
    markerToElement(config?: {
        model: string;
        view:
            | ElementDefinition
            | ((data: { [key: string]: any; isOpening: boolean }, api: DowncastConversionApi) => UIElement);
        converterPriority?: PriorityString | number | undefined;
    }): DowncastHelpers;
    markerToHighlight(config?: {
        model: string;
        view: HighlightDescriptor | ((data: any, api: DowncastConversionApi) => HighlightDescriptor);
        converterPriority?: PriorityString | number | undefined;
    }): DowncastHelpers;
}
