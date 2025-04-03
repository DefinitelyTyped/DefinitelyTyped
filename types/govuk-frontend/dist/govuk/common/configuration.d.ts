import { Component } from "../component.js";

/**
 * Normalise string
 *
 * 'If it looks like a duck, and it quacks like a duck…' 🦆
 *
 * If the passed value looks like a boolean or a number, convert it to a boolean
 * or number.
 *
 * Designed to be used to convert config passed via data attributes (which are
 * always strings) into something sensible.
 *
 * @internal
 * @param {DOMStringMap[string]} value - The value to normalise
 * @param {SchemaProperty} [property] - Component schema property
 * @returns {string | boolean | number | undefined} Normalised data
 */
export function normaliseString(
    value: DOMStringMap[string],
    property?: SchemaProperty,
): string | boolean | number | undefined;

/**
 * Normalise dataset
 *
 * Loop over an object and normalise each value using {@link normaliseString},
 * optionally expanding nested `i18n.field`
 *
 * @internal
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @template {[keyof ConfigurationType, SchemaProperty | undefined][]} SchemaEntryType
 * @param {{ schema?: Schema<ConfigurationType>, moduleName: string }} Component - Component class
 * @param {DOMStringMap} dataset - HTML element dataset
 * @returns {ObjectNested} Normalised dataset
 */
export function normaliseDataset<
    ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>>,
>(
    Component: {
        schema?: Schema<ConfigurationType>;
        moduleName: string;
    },
    dataset: DOMStringMap,
): ObjectNested;

/**
 * Config merging function
 *
 * Takes any number of objects and combines them together, with
 * greatest priority on the LAST item passed in.
 *
 * @internal
 * @param {...{ [key: string]: unknown }} configObjects - Config objects to merge
 * @returns {{ [key: string]: unknown }} A merged config object
 */
export function mergeConfigs(
    ...configObjects: {
        [key: string]: unknown;
    }[]
): {
    [key: string]: unknown;
};

/**
 * Validate component config by schema
 *
 * Follows limited examples in JSON schema for wider support in future
 *
 * {@link https://ajv.js.org/json-schema.html#compound-keywords}
 * {@link https://ajv.js.org/packages/ajv-errors.html#single-message}
 *
 * @internal
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @param {Schema<ConfigurationType>} schema - The schema of a component
 * @param {ConfigurationType} config - Component config
 * @returns {string[]} List of validation errors
 */
export function validateConfig<
    ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>>,
>(schema: Schema<ConfigurationType>, config: ConfigurationType): string[];

/**
 * Extracts keys starting with a particular namespace from dataset ('data-*')
 * object, removing the namespace in the process, normalising all values
 *
 * @internal
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @param {Schema<ConfigurationType>} schema - The schema of a component
 * @param {DOMStringMap} dataset - The object to extract key-value pairs from
 * @param {keyof ConfigurationType} namespace - The namespace to filter keys with
 * @returns {ObjectNested | undefined} Nested object with dot-separated key namespace removed
 */
export function extractConfigByNamespace<
    ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>>,
>(
    schema: Schema<ConfigurationType>,
    dataset: DOMStringMap,
    namespace: keyof ConfigurationType,
): ObjectNested | undefined;

export const configOverride: unique symbol;

/**
 * Base Component class
 *
 * Centralises the behaviours shared by our components
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @template {Element & { dataset: DOMStringMap }} RootElementType
 */
export abstract class ConfigurableComponent<
    ConfigurationType extends Partial<
        Record<keyof ConfigurationType, unknown>
    > = ObjectNested,
    RootElementType extends Element & {
        dataset: DOMStringMap;
    } = HTMLElement,
> extends Component<RootElementType> {
    /**
     * Constructs a new component, validating that GOV.UK Frontend is supported
     *
     * @internal
     * @param {Element | null} [$root] - HTML element to use for component
     * @param {ConfigurationType} [config] - HTML element to use for component
     */
    constructor($root?: Element | null, config?: ConfigurationType);

    /**
     * Returns the root element of the component
     *
     * @returns {ConfigurationType} - the root element of component
     */
    protected get config(): ConfigurationType;

    /** */
    _config: ConfigurationType;

    /**
     * configOverride
     *
     * Function which defines configuration overrides to prioritize
     * properties from the root element's dataset.
     *
     * It should take a subset of configuration as input and return
     * a new configuration object with properties that should be
     * overridden based on the root element's dataset. A Symbol
     * is used for indexing to prevent conflicts.
     *
     * @internal
     * @param {Partial<ConfigurationType>} [param] - Configuration object
     * @returns {Partial<ConfigurationType>} return - Configuration object
     */
    [configOverride](
        param?: Partial<ConfigurationType>,
    ): Partial<ConfigurationType>;
}

export type NestedKey = keyof ObjectNested;

export interface ObjectNested {
    [key: string]: string | boolean | number | ObjectNested | undefined;
}

/**
 * Schema for component config
 */
export interface Schema<
    ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>>,
> {
    /**
     * - Schema properties
     */
    properties: Record<keyof ConfigurationType, SchemaProperty | undefined>;

    /**
     * - List of schema conditions
     */
    anyOf?: SchemaCondition<ConfigurationType>[] | undefined;
}

/**
 * Schema property for component config
 */
export interface SchemaProperty {
    /**
     * - Property type
     */
    type: "string" | "boolean" | "number" | "object";
}

/**
 * Schema condition for component config
 */
export interface SchemaCondition<
    ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>>,
> {
    /**
     * - List of required config fields
     */
    required: (keyof ConfigurationType)[];

    /**
     * - Error message when required config fields not provided
     */
    errorMessage: string;
}
