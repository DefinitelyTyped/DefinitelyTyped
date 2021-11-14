import { Plugin } from '@ckeditor/ckeditor5-core';
import { AttributeProperties, SchemaItemDefinition } from '@ckeditor/ckeditor5-engine/src/model/schema';

/**
 * Holds representation of the extended HTML document type definitions to be used by the
 * editor in HTML support.
 *
 * Data schema is represented by data schema definitions.
 *
 * To add new definition for block element,
 * use {@link module:html-support/dataschema~DataSchema#registerBlockElement} method:
 *
 *        dataSchema.registerBlockElement( {
 *            view: 'section',
 *            model: 'my-section',
 *            modelSchema: {
 *                inheritAllFrom: '$block'
 *            }
 *        } );
 *
 * To add new definition for inline element,
 * use {@link module:html-support/dataschema~DataSchema#registerInlineElement} method:
 *
 *        dataSchema.registerInlineElement( {
 *            view: 'span',
 *            model: 'my-span',
 *            attributeProperties: {
 *                copyOnEnter: true
 *            }
 *        } );
 */
export default class DataSchema extends Plugin {
    static readonly pluginName: 'DataSchema';
    init(): void;
    /**
     * Add new data schema definition describing block element.
     */
    registerBlockElement(definition: Partial<DataSchemaBlockElementDefinition>): void;

    /**
     * Add new data schema definition describing inline element.
     */
    registerInlineElement(definition: Partial<DataSchemaInlineElementDefinition>): void;

    /**
     * Returns all definitions matching the given view name.
     */
    getDefinitionsForView(
        viewName: string | RegExp,
        includeReferences?: boolean,
    ): Set<DataSchemaInlineElementDefinition|DataSchemaBlockElementDefinition>;
}

export interface DataSchemaDefinition {
    model: string;
    view?: string | undefined;
    isObject?: boolean | undefined;
    modelSchema?: SchemaItemDefinition | undefined;
}

export interface DataSchemaBlockElementDefinition extends DataSchemaDefinition {
    isBlock: boolean;
    allowChildren?: string[];
}

export interface DataSchemaInlineElementDefinition extends DataSchemaDefinition {
    attributeProperties?: AttributeProperties | undefined;
    isInline: boolean;
    priority?: number | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        DataSchema: DataSchema;
    }
}
