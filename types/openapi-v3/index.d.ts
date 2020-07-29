// Type definitions for OpenApi 3.0
// Project: https://github.com/OAI/OpenAPI-Specification
// Definitions by: Iulian Preda <https://github.com/IulianOctavianPreda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Original Repository: https://github.com/IulianOctavianPreda/OpenApiTypes

/**
 * Allows referencing an external resource for extended documentation.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#externalDocumentationObject
 */
export interface OpenApiExternalDocs {
    /** A short description of the target documentation. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** The URL for the target documentation. Value MUST be in the format of a URL. */
    url: string;
}

/** Key value pair */
export interface OpenApiMap<T> {
    [key: string]: T;
}

/**
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#exampleObject
 */
export interface OpenApiExample {
    /** Short description for the example */
    summary?: string;
    /** Long description for the example. CommonMark syntax MAY be used for rich text representation */
    description?: string;
    /**
     * Embedded literal example. The value field and externalValue field are mutually exclusive.
     * To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary.
     */
    value?: any;
    /**
     * URL that points to the literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents.
     * The value field and externalValue field are mutually exclusive.
     */
    externalValue?: string;
}

/**
 * A simple object to allow referencing other components in the specification, internally and externally.
 * The Reference Object is defined by JSON Reference and follows the same structure, behavior and rules.
 * For this specification, reference resolution is accomplished as defined by the JSON Reference specification and not by the JSON Schema specification.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#referenceObject
 */
export interface OpenApiReference {
    /** The reference string. */
    $ref?: string;
}

/**
 * When request bodies or response payloads may be one of a number of different schemas, a discriminator object can be used to aid in serialization, deserialization, and validation.
 * The discriminator is a specific object in a schema which is used to inform the consumer of the specification of an alternative schema based on the value associated with it.
 * When using the discriminator, inline schemas will not be considered.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#discriminatorObject
 */
export interface OpenApiDiscriminator {
    /** The name of the property in the payload that will hold the discriminator value. */
    propertyName: string;
    /** An object to hold mappings between payload values and schema names or references. */
    mapping?: OpenApiMap<string>;
}

/**
 * A metadata object that allows for more fine-tuned XML model definitions.
 * When using arrays, XML element names are not inferred (for singular/plural forms) and the name property SHOULD be used to add that information. See examples for expected behavior.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#xmlObject
 */
export interface OpenApiXml {
    /**
     * Replaces the name of the element/attribute used for the described schema property.
     * When defined within items, it will affect the name of the individual XML elements within the list.
     * When defined alongside type being array (outside the items), it will affect the wrapping element and only if wrapped is true. If wrapped is false, it will be ignored.
     */
    name?: string;
    /** The URI of the namespace definition. Value MUST be in the form of an absolute URI. */
    namespace?: string;
    /** The prefix to be used for the name. */
    prefix?: string;
    /** Declares whether the property definition translates to an attribute instead of an element. Default value is false. */
    attribute?: boolean;
    /**
     * MAY be used only for an array definition. Signifies whether the array is wrapped (for example, <books><book/><book/></books>)
     * or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being array (outside the items).
     */
    wrapped?: boolean;
}

/**
 * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays.
 * This object is an extended subset of the JSON Schema Specification Wright Draft 00.
 * For more information about the properties, see JSON Schema Core and JSON Schema Validation. Unless stated otherwise, the property definitions follow the JSON Schema.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject
 */
export interface OpenApiSchema {
    title?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    enum?: string[] | number[];
    /** Value MUST be a string. Multiple types via an array are not supported */
    type?: string;
    /** Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. */
    allOf?: OpenApiSchema[] | OpenApiReference[];
    /** Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. */
    oneOf?: OpenApiSchema[] | OpenApiReference[];
    /** Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. */
    anyOf?: OpenApiSchema[] | OpenApiReference[];
    /** Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. */
    not?: OpenApiSchema[] | OpenApiReference[];
    /** Value MUST be an object and not an array. Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. items MUST be present if the type is array. */
    items?: OpenApiSchema | OpenApiReference;
    /** Property definitions MUST be a Schema Object and not a standard JSON Schema (inline or referenced). */
    properties?: OpenApiMap<OpenApiSchema | OpenApiReference>;
    /** Value can be boolean or object. Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. Consistent with JSON Schema, additionalProperties defaults to true. */
    additionalProperties?: boolean | OpenApiSchema | OpenApiReference;
    /**  CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** See Data Type Formats for further details. While relying on JSON Schema's defined formats, the OAS offers a few additional predefined formats. */
    format?:
        | 'int32'
        | 'int64'
        | 'float'
        | 'double'
        | 'string'
        | 'boolean'
        | 'byte'
        | 'binary'
        | 'date'
        | 'date-time'
        | 'password';
    /**
     * The default value represents what would be assumed by the consumer of the input as the value of the schema if one is not provided.
     * Unlike JSON Schema, the value MUST conform to the defined type for the Schema Object defined at the same level.
     * For example, if type is string, then default can be "foo" but cannot be 1.
     */
    default?: any;
    /** Allows sending a null value for the defined schema. Default value is false. */
    nullable?: boolean;
    /**
     * Adds support for polymorphism. The discriminator is an object name that is used to differentiate between other schemas which may satisfy the payload description.
     * See Composition and Inheritance for more details.
     */
    discriminator?: OpenApiDiscriminator;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property as "read only".
     * This means that it MAY be sent as part of a response but SHOULD NOT be sent as part of the request.
     * If the property is marked as readOnly being true and is in the required list, the required will take effect on the response only.
     * A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.
     */
    readOnly?: boolean;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property as "write only".
     * Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response.
     * If the property is marked as writeOnly being true and is in the required list, the required will take effect on the request only.
     * A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.
     */
    writeOnly?: boolean;
    /** This MAY be used only on properties schemas. It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property. */
    xml?: OpenApiXml;
    /** Additional external documentation for this schema. */
    externalDocs?: OpenApiExternalDocs;
    /**
     * A free-form property to include an example of an instance for this schema.
     * To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.
     */
    example?: any;
    /** Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false. */
    deprecated?: boolean;
}

/**
 * In order to support common ways of serializing simple parameters, a set of style values are defined.
 */
export type OpenApiStyle = 'matrix' | 'label' | 'form' | 'simple' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
export type OpenApiStyleType = 'primitive' | 'array' | 'object';

/**
 * The Header Object follows the structure of the Parameter Object.
 * Describes a single operation parameter.
 * A unique parameter is defined by a combination of a name and location.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#headerObject
 */
export interface OpenApiHeader {
    /** A brief description of the parameter. This could contain examples of use. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation. */
    description?: string;
    /**
     * Determines whether this parameter is mandatory.
     * If the [parameter location](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn) is "path",
     * this property is REQUIRED and its value MUST be `true`.
     * Otherwise, the property MAY be included and its default value is `false`.
     */
    required?: boolean;
    /** Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is `false`. */
    deprecated?: boolean;
    /**
     * Sets the ability to pass empty-valued parameters.
     * This is valid only for `query` parameters and allows sending a parameter with an empty value.
     * Default value is `false`.
     * If [style](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterStyle) is used,
     * and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored.
     * Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.
     */
    allowEmptyValue?: boolean;
    /**
     * Describes how the parameter value will be serialized depending on the type of the parameter value.
     * Default values (based on value of in): for query - form; for path - simple; for header - simple; for cookie - form.
     */
    style?: OpenApiStyle;
    /**
     * When this is true, parameter values of type array or object generate separate parameters for each value of the array or key-value pair of the map.
     * For other types of parameters this property has no effect. When style is form, the default value is true. For all other styles, the default value is false.
     */
    explode?: boolean;
    /**
     * Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding.
     * This property only applies to parameters with an in value of query. The default value is false.
     */
    allowReserved?: boolean;
    /** The schema defining the type used for the parameter. */
    schema?: OpenApiSchema | OpenApiReference;
    /**
     * Example of the media type. The example SHOULD match the specified schema and encoding properties if present.
     * The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example,
     * the example value SHALL override the example provided by the schema.
     * To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.
     */
    example?: any;
    /**
     * Examples of the media type. Each example SHOULD contain a value in the correct format as specified in the parameter encoding.
     * The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example,
     * the examples value SHALL override the example provided by the schema.
     */
    examples?: OpenApiMap<OpenApiExample | OpenApiReference>;
    /**
     * A map containing the representations for the parameter. The key is the media type and the value describes it.
     * The map MUST only contain one entry. A parameter MUST contain either a schema property, or a content property, but not both.
     * When example or examples are provided in conjunction with the schema object, the example MUST follow the prescribed serialization strategy for the parameter.
     */
    content: OpenApiMap<OpenApiMediaType>;
}

/**
 * A single encoding definition applied to a single schema property.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#encodingObject
 */
export interface OpenApiEncoding {
    /**
     * The Content-Type for encoding a specific property.
     * Default value depends on the property type: for string with format being:
     * binary – application/octet-stream; for other primitive types – text/plain; for object - application/json; for array – the default is defined based on the inner type.
     * The value can be a specific media type (e.g. application/json), a wildcard media type (e.g. image/*), or a comma-separated list of the two types.
     */
    contentType?: string;
    /**
     * A map allowing additional information to be provided as headers, for example Content-Disposition.
     * Content-Type is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a multipart.
     */
    headers?: OpenApiMap<OpenApiHeader | OpenApiReference>;
    /**
     * Describes how a specific property value will be serialized depending on its type.
     * See Parameter Object for details on the style property. The behavior follows the same values as query parameters, including default values.
     * This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.
     */
    style?: OpenApiStyle;
    /**
     * When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map.
     * For other types of properties this property has no effect.
     * When style is form, the default value is true. For all other styles, the default value is false.
     * This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.
     */
    explode?: boolean;
    /**
     * Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding.
     * The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.
     */
    allowReserved?: boolean;
}

/**
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#mediaTypeObject
 */
export interface OpenApiMediaType extends OpenApiReference {
    /** The schema defining the content of the request, response, or parameter */
    schema?: OpenApiSchema | OpenApiReference;
    /**
     * Example of the media type. The example object SHOULD be in the correct format as specified by the media type.
     * The example field is mutually exclusive of the examples field.
     * Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema.
     */
    example?: any;
    /**
     * Examples of the media type. Each example object SHOULD match the media type and specified schema if present.
     * The examples field is mutually exclusive of the example field.
     * Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema.
     */
    examples?: OpenApiMap<OpenApiExample | OpenApiReference>;
    /**
     * A map between a property name and its encoding information.
     * The key, being the property name, MUST exist in the schema as a property.
     * The encoding object SHALL only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.
     */
    encoding?: OpenApiMap<OpenApiEncoding>;
}

/**
 * Describes a single operation parameter.
 * A unique parameter is defined by a combination of a name and location.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterObject
 */
export interface OpenApiParameter {
    /**
     * The name of the parameter. Parameter names are case sensitive.
     *
     * If `[in](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn)`
     * is "path", the name field MUST correspond to the associated path segment from the [path](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathsPath) field in the
     * [Paths Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathsObject).
     * See [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathTemplating) for further information.
     *
     * If `[in](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn)`
     * is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
     * For all other cases, the name corresponds to the parameter name used by the `[in](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn)` property.
     */
    name: string;
    /** The location of the parameter. Possible values are "query", "header", "path" or "cookie". */
    in: OpenApiParameterIn;
    /** A brief description of the parameter. This could contain examples of use. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation. */
    description?: string;
    /**
     * Determines whether this parameter is mandatory. If the [parameter location](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn)
     * is "path", this property is REQUIRED and its value MUST be `true`. Otherwise, the property MAY be included and its default value is `false`.
     */
    required?: boolean;
    /** Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is `false`. */
    deprecated?: boolean;
    /**
     * Sets the ability to pass empty-valued parameters.
     * This is valid only for `query` parameters and allows sending a parameter with an empty value.
     * Default value is `false`.
     * If [style](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterStyle)
     * is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored.
     * Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.
     */
    allowEmptyValue?: boolean;
    /**
     * Describes how the parameter value will be serialized depending on the type of the parameter value.
     * Default values (based on value of in): for query - form; for path - simple; for header - simple; for cookie - form.
     */
    style?: OpenApiStyle;
    /**
     * When this is true, parameter values of type array or object generate separate parameters for each value of the array or key-value pair of the map.
     * For other types of parameters this property has no effect. When style is form, the default value is true. For all other styles, the default value is false.
     */
    explode?: boolean;
    /**
     * Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding.
     * This property only applies to parameters with an in value of query. The default value is false.
     */
    allowReserved?: boolean;
    /** The schema defining the type used for the parameter. */
    schema?: OpenApiSchema | OpenApiReference;
    /**
     * Example of the media type. The example SHOULD match the specified schema and encoding properties if present.
     * The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example,
     * the example value SHALL override the example provided by the schema.
     * To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.
     */
    example?: any;
    /**
     * Examples of the media type. Each example SHOULD contain a value in the correct format as specified in the parameter encoding.
     * The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example,
     * the examples value SHALL override the example provided by the schema.
     */
    examples?: OpenApiMap<OpenApiExample | OpenApiReference>;
    /**
     * A map containing the representations for the parameter. The key is the media type and the value describes it.
     * The map MUST only contain one entry. A parameter MUST contain either a schema property, or a content property, but not both.
     * When example or examples are provided in conjunction with the schema object, the example MUST follow the prescribed serialization strategy for the parameter.
     */
    content?: OpenApiMap<OpenApiMediaType>;
}
/**
 * The location of the parameter.
 * There are four possible parameter locations specified by the in field:
 * @parameter path - Used together with [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathTemplating),
 * where the parameter value is actually part of the operation's URL. This does not include the host or base path of the API. For example, in /items/{itemId}, the path parameter is itemId.
 * @parameter query - Parameters that are appended to the URL. For example, in /items?id=###, the query parameter is id.
 * @parameter header - Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230#page-22) states header names are case insensitive.
 * @parameter cookie - Used to pass a specific cookie value to the API.
 */
export type OpenApiParameterIn = 'path' | 'query' | 'header' | 'cookie';

/**
 * Describes a single request body.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#requestBodyObject
 */
export interface OpenApiRequestBody {
    /** A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /**
     * The content of the request body. The key is a media type or media type range and the value describes it.
     * For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text
     */
    content: OpenApiMap<OpenApiMediaType>;
    /** Determines if the request body is required in the request. Defaults to false. */
    required?: boolean;
}

/**
 * Runtime expressions allow defining values based on information that will only be available within the HTTP message in an actual API call.
 * This mechanism is used by Link Objects and Callback Objects.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#runtime-expressions
 */
export type OpenApiRuntimeExpression = string;

/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#serverVariableObject
 */
export interface OpenApiServerVariable {
    /** An enumeration of string values to be used if the substitution options are from a limited set. */
    enum?: string[];
    /**
     * The default value to use for substitution, which SHALL be sent if an alternate value is not supplied.
     * Note this behavior is different than the Schema Object's treatment of default values, because in those cases parameter values are optional.
     */
    default: string;
    /** An optional description for the server variable. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
}

/**
 * An object representing a Server.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#serverObject
 */
export interface OpenApiServer {
    /**
     * A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served.
     * Variable substitutions will be made when a variable is named in {brackets}.
     */
    url: string;
    /** An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** A map between a variable name and its value. The value is used for substitution in the server's URL template. */
    variables?: OpenApiMap<OpenApiServerVariable>;
}

/**
 * The Link object represents a possible design-time link for a response.
 * The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.
 * Unlike dynamic links (i.e. links provided in the response payload), the OAS linking mechanism does not require link information in the runtime response.
 * For computing links, and providing instructions to execute them, a runtime expression is used for accessing values in an operation and using them as parameters while invoking the linked operation.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#linkObject
 */
export interface OpenApiLink {
    /**
     * A relative or absolute reference to an OAS operation.
     * This field is mutually exclusive of the operationId field, and MUST point to an Operation Object.
     * Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition.
     */
    operationRef?: string;
    /** The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field. */
    operationId?: string;
    /**
     * A map representing parameters to pass to an operation as specified with operationId or identified via operationRef.
     * The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation.
     * The parameter name can be qualified using the parameter location [{in}.]{name} for operations that use the same parameter name in different locations (e.g. path.id).
     */
    parameters?: OpenApiMap<OpenApiRuntimeExpression>;
    /** A literal value or {expression} to use as a request body when calling the target operation. */
    requestBody?: OpenApiRuntimeExpression;
    /** A description of the link. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** A server object to be used by the target operation. */
    server?: OpenApiServer;
}

/**
 * Describes a single response from an API Operation, including design-time, static links to operations based on the response
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#responseObject
 */
export interface OpenApiResponse {
    /** A short description of the response. CommonMark syntax MAY be used for rich text representation. */
    description: string;
    /** Maps a header name to its definition. RFC7230 states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored. */
    headers?: OpenApiMap<OpenApiHeader | OpenApiReference>;
    /**
     * A map containing descriptions of potential response payloads. The key is a media type or media type range and the value describes it.
     * For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text
     */
    content?: OpenApiMap<OpenApiMediaType | OpenApiReference>;
    /**
     * A map of operations links that can be followed from the response.
     * The key of the map is a short name for the link, following the naming constraints of the names for Component Objects.
     */
    links?: OpenApiMap<OpenApiLink | OpenApiReference>;
}

/**
 * Any HTTP status code can be used as the property name, but only one property per code, to describe the expected response for that HTTP status code.
 * A Reference Object can link to a response that is defined in the OpenAPI Object's components/responses section.
 * This field MUST be enclosed in quotation marks (for example, "200") for compatibility between JSON and YAML.
 * To define a range of response codes, this field MAY contain the uppercase wildcard character X. For example, 2XX represents all response codes between [200-299].
 * Only the following range definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX.
 * If a response is defined using an explicit code, the explicit code definition takes precedence over the range definition for that code.
 */
export type OpenApiResponsesHttpCodes = {
    [k in HttpStatusCodes]?: OpenApiResponse | OpenApiReference;
};
/**
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#responsesObject
 */
export interface OpenApiResponses extends OpenApiResponsesHttpCodes {
    /**
     * The documentation of responses other than the ones declared for specific HTTP response codes.
     * Use this field to cover undeclared responses. A Reference Object can link to a response that the OpenAPI Object's components/responses section defines.
     */
    default?: OpenApiResponse | OpenApiReference;
}
export type HttpStatusCodes =
    | '100'
    | '101'
    | '102'
    | '200'
    | '201'
    | '202'
    | '203'
    | '204'
    | '205'
    | '206'
    | '207'
    | '208'
    | '226'
    | '300'
    | '301'
    | '302'
    | '303'
    | '304'
    | '305'
    | '307'
    | '308'
    | '400'
    | '401'
    | '402'
    | '403'
    | '404'
    | '405'
    | '406'
    | '407'
    | '408'
    | '409'
    | '410'
    | '411'
    | '412'
    | '413'
    | '414'
    | '415'
    | '416'
    | '417'
    | '421'
    | '422'
    | '423'
    | '424'
    | '426'
    | '428'
    | '429'
    | '431'
    | '444'
    | '451'
    | '499'
    | '500'
    | '501'
    | '502'
    | '503'
    | '504'
    | '505'
    | '506'
    | '507'
    | '508'
    | '510'
    | '511'
    | '599';

/**
 * Lists the required security schemes to execute this operation.
 * The name used for each property MUST correspond to a security scheme declared in the Security Schemes under the Components Object.
 * Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized.
 * This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information.
 * When a list of Security Requirement Objects is defined on the OpenAPI Object or Operation Object,
 * only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#securityRequirementObject
 */
export interface OpenApiSecurityRequirement {
    /**
     * Each name MUST correspond to a security scheme which is declared in the Security Schemes under the Components Object.
     * If the security scheme is of type "oauth2" or "openIdConnect", then the value is a list of scope names required for the execution.
     * For other security scheme types, the array MUST be empty.
     */
    [name: string]: string[];
}

/**
 * Describes a single API operation on a path.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#operationObject
 */
export interface OpenApiOperation {
    /** A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier. */
    tags?: string[];
    /** A short summary of what the operation does. */
    summary?: string;
    /** A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** Additional external documentation for this operation. */
    externalDocs?: OpenApiExternalDocs;
    /**
     * Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is case-sensitive.
     * Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.
     */
    operationId?: string;
    /**
     * A list of parameters that are applicable for this operation. If a parameter is already defined at the Path Item, the new definition will override it but can never remove it.
     * The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location.
     *  The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.
     */
    parameters?: OpenApiParameter[] | OpenApiReference[];
    /**
     * The request body applicable for this operation. The requestBody is only supported in HTTP methods where the HTTP 1.1 specification RFC7231 has explicitly defined semantics for request bodies.
     * In other cases where the HTTP spec is vague, requestBody SHALL be ignored by consumers.
     */
    requestBody?: OpenApiRequestBody | OpenApiReference;
    /** The list of possible responses as they are returned from executing this operation. */
    responses: OpenApiResponses | OpenApiReference;
    /**
     * A map of possible out-of band callbacks related to the parent operation. The key is a unique identifier for the Callback Object.
     * Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses.
     * The key value used to identify the callback object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.
     */
    callbacks?: OpenApiMap<OpenApiCallback | OpenApiReference>;
    /** Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false. */
    deprecated?: boolean;
    /**
     * A declaration of which security mechanisms can be used for this operation. The list of values includes alternative security requirement objects that can be used.
     * Only one of the security requirement objects need to be satisfied to authorize a request. This definition overrides any declared top-level security.
     * To remove a top-level security declaration, an empty array can be used.
     */
    security?: OpenApiSecurityRequirement[];
    /** An alternative server array to service this operation. If an alternative server object is specified at the Path Item Object or Root level, it will be overridden by this value. */
    servers?: OpenApiServer[];
}

/**
 * Describes the operations available on a single path. A Path Item MAY be empty, due to ACL constraints.
 * The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathItemObject
 */
export interface OpenApiPath {
    /**
     * Allows for an external definition of this path item. The referenced structure MUST be in the format of a Path Item Object.
     * If there are conflicts between the referenced definition and this Path Item's definition, the behavior is undefined.
     */
    $ref?: string;
    /** An optional, string summary, intended to apply to all operations in this path. */
    summary?: string;
    /** An optional, string description, intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** A definition of a GET operation on this path. */
    get?: OpenApiOperation;
    /** A definition of a PUT operation on this path. */
    put?: OpenApiOperation;
    /** A definition of a POST operation on this path. */
    post?: OpenApiOperation;
    /** A definition of a DELETE operation on this path. */
    delete?: OpenApiOperation;
    /** A definition of a OPTIONS operation on this path. */
    options?: OpenApiOperation;
    /** A definition of a HEAD operation on this path. */
    head?: OpenApiOperation;
    /** A definition of a PATCH operation on this path. */
    patch?: OpenApiOperation;
    /** A definition of a TRACE operation on this path. */
    trace?: OpenApiOperation;
    /** An alternative server array to service all operations in this path. */
    servers?: OpenApiServer[];
    /**
     * A list of parameters that are applicable for all the operations described under this path.
     * These parameters can be overridden at the operation level, but cannot be removed there.
     * The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location.
     * The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.
     */
    parameters?: OpenApiParameter[] | OpenApiReference[];
}

/**
 * A map of possible out-of band callbacks related to the parent operation.
 * Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses.
 * The key value used to identify the callback object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#callbackObject
 */
export interface OpenApiCallback {
    /** A Path Item Object used to define a callback request and expected responses. A complete example is available. */
    [key: string]: OpenApiPath;
}

/**
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oauthFlowObject
 */
export interface OpenApiOAuthFlow {
    /** The authorization URL to be used for this flow. This MUST be in the form of a URL. */
    authorizationUrl: string;
    /** The token URL to be used for this flow. This MUST be in the form of a URL. */
    tokenUrl?: string;
    /** The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. */
    refreshUrl?: string;
    /** The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. */
    scopes: OpenApiMap<string>;
}

/**
 * Allows configuration of the supported OAuth Flows.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oauthFlowsObject
 */
export interface OpenApiOAuthFlows {
    /** Configuration for the OAuth Implicit flow */
    implicit?: OpenApiOAuthFlow;
    /** Configuration for the OAuth Resource Owner Password flow */
    password?: OpenApiOAuthFlow;
    /** Configuration for the OAuth Client Credentials flow. Previously called application in OpenAPI 2.0. */
    clientCredentials?: OpenApiOAuthFlow;
    /** Configuration for the OAuth Authorization Code flow. Previously called accessCode in OpenAPI 2.0. */
    authorizationCode?: OpenApiOAuthFlow;
}

/**
 * Defines a security scheme that can be used by the operations.
 * Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter),
 * OAuth2's common flows (implicit, password, application and access code) as defined in RFC6749, and OpenID Connect Discovery.
 * Based on the type selected, different fields are required.
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#securitySchemeObject
 */
export interface OpenApiSecurityScheme {
    /** The type of the security scheme. Valid values are "apiKey", "http", "oauth2", "openIdConnect". */
    type: OpenApiSecuritySchemeType;
    /** A short description for security scheme. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** The name of the header, query or cookie parameter to be used. */
    name?: string;
    /** The location of the API key. Valid values are "query", "header" or "cookie". */
    in?: OpenApiSecuritySchemeIn;
    /** The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235. */
    scheme?: string;
    /**
     * A hint to the client to identify how the bearer token is formatted.
     * Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.
     */
    bearerFormat?: string;
    /** An object containing configuration information for the flow types supported. */
    flows?: OpenApiOAuthFlows;
    /**  OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL. */
    openIdConnectUrl?: string;
}
/** The type of the security scheme. Valid values are "apiKey", "http", "oauth2", "openIdConnect". */
export type OpenApiSecuritySchemeType = 'apiKey' | 'http' | 'oauth2' | 'openIdConnect';
/** The location of the API key. Valid values are "query", "header" or "cookie". */
export type OpenApiSecuritySchemeIn = 'query' | 'header' | 'cookie';

/**
 * Holds a set of reusable objects for different aspects of the OAS.
 * All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsObject
 */
export interface OpenApiComponents {
    /** An object to hold reusable Schema Objects. */
    schemas?: OpenApiMap<OpenApiSchema | OpenApiReference>;
    /** An object to hold reusable Response Objects. */
    responses?: OpenApiMap<OpenApiResponse | OpenApiReference>;
    /** An object to hold reusable Parameter Objects. */
    parameters?: OpenApiMap<OpenApiParameter | OpenApiReference>;
    /** An object to hold reusable Example Objects. */
    examples?: OpenApiMap<OpenApiExample | OpenApiReference>;
    /** An object to hold reusable Request Body Objects. */
    requestBodies?: OpenApiMap<OpenApiRequestBody | OpenApiReference>;
    /** An object to hold reusable Header Objects. */
    headers?: OpenApiMap<OpenApiHeader | OpenApiReference>;
    /** An object to hold reusable Security Scheme Objects. */
    securitySchemes?: OpenApiMap<OpenApiSecurityScheme | OpenApiReference>;
    /** An object to hold reusable Link Objects. */
    links?: OpenApiMap<OpenApiLink | OpenApiReference>;
    /** An object to hold reusable Callback Objects. */
    callbacks?: OpenApiMap<OpenApiCallback | OpenApiReference>;
}

/**
 * The object provides metadata about the API.
 * The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#contactObject
 */
export interface OpenApiContact {
    /** The identifying name of the contact person/organization */
    name?: string;
    /** The URL pointing to the contact information. MUST be in the format of a URL */
    url?: string;
    /** The email address of the contact person/organization. MUST be in the format of an email address */
    email?: string;
}

/**
 * License information for the exposed API.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#licenseObject
 */
export interface OpenApiLicense {
    /** The license name used for the API. */
    name: string;
    /** A URL to the license used for the API. MUST be in the format of a URL. */
    url?: string;
}

/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#infoObject
 */
export interface OpenApiInfo {
    /** The title of the application. */
    title: string;
    /** A short description of the application. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** A URL to the Terms of Service for the API. MUST be in the format of a URL. */
    termsOfService?: string;
    /** The contact information for the exposed API. */
    contact?: OpenApiContact;
    /** The license information for the exposed API. */
    license?: OpenApiLicense;
    /** The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version). */
    version: string;
}

/**
 * Holds the relative paths to the individual endpoints and their operations.
 * The path is appended to the URL from the Server Object in order to construct the full URL. The Paths MAY be empty, due to ACL constraints.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathsObject
 */
export interface OpenApiPaths {
    /**
     * A relative path to an individual endpoint. The field name MUST begin with a slash.
     * The path is appended (no relative URL resolution) to the expanded URL from the Server Object's url field in order to construct the full URL. Path templating is allowed.
     * When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts.
     * Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.
     * In case of ambiguous matching, it's up to the tooling to decide which one to use.
     */
    [path: string]: OpenApiPath;
}

/**
 * Adds metadata to a single tag that is used by the Operation Object. It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#tagObject
 */
export interface OpenApiTag {
    /** The name of the tag. */
    name: string;
    /** A short description for the tag. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** Additional external documentation for this tag. */
    externalDocs?: OpenApiExternalDocs;
}

export interface OpenApi {
    /**
     * This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses.
     * The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not related to the API info.version string.
     */
    openapi: string;
    /** Provides metadata about the API. The metadata MAY be used by tooling as required. */
    info: OpenApiInfo;
    /**
     * An array of Server Objects, which provide connectivity information to a target server.
     * If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.
     */
    servers?: OpenApiServer[];
    /** The available paths and operations for the API. */
    paths: OpenApiPaths;
    /** An element to hold various schemas for the specification. */
    components?: OpenApiComponents;
    /**
     * A declaration of which security mechanisms can be used across the API.
     * The list of values includes alternative security requirement objects that can be used.
     * Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition.
     */
    security?: OpenApiSecurityRequirement[];
    /**
     * A list of tags used by the specification with additional metadata.
     * The order of the tags can be used to reflect on their order by the parsing tools.
     * Not all tags that are used by the Operation Object must be declared.
     * The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.
     */
    tags?: OpenApiTag[];
    /** Additional external documentation. */
    externalDocs?: OpenApiExternalDocs;
}
