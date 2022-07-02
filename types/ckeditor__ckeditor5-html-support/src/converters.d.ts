import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, Element } from '@ckeditor/ckeditor5-engine';
import DowncastDispatcher, {
    DowncastConversionApi,
} from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import UpcastDispatcher, { UpcastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
import AttributeElement from '@ckeditor/ckeditor5-engine/src/view/attributeelement';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import DataFilter from './datafilter';
import {
    DataSchemaBlockElementDefinition,
    DataSchemaDefinition,
    DataSchemaInlineElementDefinition,
} from './dataschema';

/**
 * View-to-model conversion helper for object elements.
 *
 * Preserves object element content in `htmlContent` attribute.
 */
export function viewToModelObjectConverter(
    definition: DataSchemaDefinition,
): (viewElement: ViewElement, conversionApi: UpcastConversionApi) => Element;

/**
 * Conversion helper converting object element to HTML object widget.
 */
export function toObjectWidgetConverter(
    editor: Editor,
    definition: DataSchemaInlineElementDefinition,
): (modelElement: ModelElement, conversionApi: DowncastConversionApi) => void;

/**
 * Creates object view element from the given model element.
 */
export function createObjectView(viewName: string, modelElement: ModelElement, writer: DowncastWriter): ViewElement;

/**
 * View-to-attribute conversion helper preserving inline element attributes on `$text`.
 */
export function viewToAttributeInlineConverter(
    definition: DataSchemaInlineElementDefinition,
    dataFilter: DataFilter,
): (dispatcher: UpcastDispatcher) => void;

/**
 * Attribute-to-view conversion helper applying attributes to view element preserved on `$text`.
 */
export function attributeToViewInlineConverter(
    definition: DataSchemaInlineElementDefinition,
): (attributeValue: unknown, conversionApi: DowncastConversionApi) => AttributeElement | undefined;

/**
 * View-to-model conversion helper preserving allowed attributes on block element.
 *
 * All matched attributes will be preserved on `htmlAttributes` attribute.
 */
export function viewToModelBlockAttributeConverter(
    definition: DataSchemaBlockElementDefinition,
    dataFilter: DataFilter,
): (dispatcher: UpcastDispatcher) => void;

/**
 * Model-to-view conversion helper applying attributes preserved in `htmlAttributes` attribute
 * for block elements.
 */
export function modelToViewBlockAttributeConverter(
    definition: DataSchemaBlockElementDefinition,
): (dispatcher: DowncastDispatcher) => void;
