/**
 * Primitive data types in the Swagger Specification are based on the types supported by the JSON-Schema Draft 4.
 * Models are described using the Schema Object which is a subset of JSON Schema Draft 4.
 *
 * An additional primitive data type "file" is used by the Parameter Object and the Response Object to set the parameter type or the response as being a file.
 *
 * Primitives have an optional modifier property format.
 * Swagger uses several known formats to more finely define the data type being used.
 * However, the format property is an open string-valued property, and can have any value to support documentation needs.
 * Formats such as "email", "uuid", etc., can be used even though they are not defined by this specification.
 * Types that are not accompanied by a format property follow their definition from the JSON Schema (except for file type which is defined above). The formats defined by the Swagger
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types
 */
export type OpenApiDataFormat =
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

/** The value MUST be one of "string", "number", "integer", "boolean", or "array". */
export type OpenApiDataType = 'string' | 'number' | 'integer' | 'boolean' | 'array';

/**
 * Allows referencing an external resource for extended documentation.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#external-documentation-object
 */
export interface OpenApiExternalDocs {
    /**
     * A short description of the target documentation. GFM syntax can be used for rich text representation.
     */
    description?: string;
    /**
     * The URL for the target documentation. Value MUST be in the format of a URL.
     */
    url: string;
}

/** Key value pair */
export interface OpenApiMap<T> {
    [key: string]: T;
}

/**
 * A metadata object that allows for more fine-tuned XML model definitions.
 *
 * When using arrays, XML element names are not inferred (for singular/plural forms) and the name property should be used to add that information. See examples for expected behavior.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#xml-object
 */
export interface OpenApiXml {
    /**
     * Replaces the name of the element/attribute used for the described schema property.
     * When defined within the Items Object (items), it will affect the name of the individual XML elements within the list.
     * When defined alongside type being array (outside the items), it will affect the wrapping element and only if wrapped is true. If wrapped is false, it will be ignored.
     */
    name?: string;
    /**
     * The URL of the namespace definition. Value SHOULD be in the form of a URL.
     */
    namespace?: string;
    /**
     * The prefix to be used for the name.
     */
    prefix?: string;
    /**
     * Declares whether the property definition translates to an attribute instead of an element. Default value is false.
     */
    attribute?: boolean;
    /**
     * MAY be used only for an array definition.
     * Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>).
     * Default value is false. The definition takes effect only when defined alongside type being array (outside the items).
     */
    wrapped?: boolean;
}

/**
 * The Schema Object allows the definition of input and output data types.
 * These types can be objects, but also primitives and arrays.
 * This object is based on the JSON Schema Specification Draft 4 and uses a predefined subset of it.
 * On top of this subset, there are extensions provided by this specification to allow for more complete documentation.
 *
 * Further information about the properties can be found in JSON Schema Core and JSON Schema Validation.
 * Unless stated otherwise, the property definitions follow the JSON Schema specification as referenced here.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schema-object
 */
export interface OpenApiSchema {
    /**
     * External definition
     */
    $ref?: string;
    /**
     * The title of the schema.
     */
    title?: string;
    /**
     * A short description of the schema.
     */
    description?: string;
    /**
     * Declares the value of the header that the server will use if none is provided.
     * (Note: "default" has no meaning for required headers.) See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
     * Unlike JSON Schema this value MUST conform to the defined type for the header.
     */
    default?: any;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    maximum?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    exclusiveMaximum?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    minimum?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    exclusiveMinimum?: boolean;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1.
     */
    maxLength?: number;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2.
     */
    minLength?: number;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3.
     */
    pattern?: string;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2.
     */
    maxItems?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3.
     */
    minItems?: number;
    /**
     * 	https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4.
     */
    uniqueItems?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1.
     */
    enum?: any[];
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1.
     */
    multipleOf?: number;
    /**
     * The type of the object. The value MUST be one of "string", "number", "integer", "boolean", or "array".
     */
    type?: OpenApiDataType;
    /**
     * The extending format for the previously mentioned type. See Data Type Formats for further details.
     */
    format?: OpenApiDataFormat;
    /**
     * Required if type is "array".
     * Describes the type of items in the array.
     */
    items?: OpenApiSchema | OpenApiReference;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.3.
     */
    allOf?: OpenApiSchema[] | OpenApiReference[];
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.4.4.
     */
    properties?: OpenApiMap<OpenApiSchema | OpenApiReference>;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.4.4.
     */
    additionalProperties?: OpenApiSchema | OpenApiReference;
    /**
     * Adds support for polymorphism.
     * The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema.
     * The property name used MUST be defined at this schema and it MUST be in the required property list.
     * When used, the value MUST be the name of this schema or any schema that inherits it.
     */
    discriminator?: string;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property as "read only".
     * This means that it MAY be sent as part of a response but MUST NOT be sent as part of the request.
     * Properties marked as readOnly being true SHOULD NOT be in the required list of the defined schema. Default value is false.
     */
    readOnly?: boolean;
    /**
     * This MAY be used only on properties schemas. It has no effect on root schemas. Adds Additional metadata to describe the XML representation format of this property.
     */
    xml?: OpenApiXml;
    /**
     * Additional external documentation for this schema.
     */
    externalDocs?: OpenApiExternalDocs;
    /**
     * A free-form property to include an example of an instance for this schema.
     */
    example?: any;
}

/**
 * An object to hold data types that can be consumed and produced by operations. These data types can be primitives, arrays or models.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#definitions-object
 */
export interface OpenApiDefinitions {
    /**
     * A single definition, mapping a "name" to the schema it defines.
     */
    [name: string]: OpenApiSchema;
}

/**
 * Provides the version of the application API (not to be confused with the specification version).
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#contact-object
 */
export interface OpenApiContact {
    /**
     * The identifying name of the contact person/organization.
     */
    name?: string;
    /**
     * The URL pointing to the contact information. MUST be in the format of a URL.
     */
    url?: string;
    /**
     * The email address of the contact person/organization. MUST be in the format of an email address.
     */
    email?: string;
}

/**
 * License information for the exposed API.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#license-object
 */
export interface OpenApiLicense {
    /**
     * The license name used for the API.
     */
    name: string;
    /**
     * A URL to the license used for the API. MUST be in the format of a URL.
     */
    url?: string;
}

/**
 * The object provides metadata about the API. The metadata can be used by the clients if needed, and can be presented in the Swagger-UI for convenience.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#info-object
 */
export interface OpenApiInfo {
    /**
     * The title of the application.
     */
    title: string;
    /**
     * A short description of the application. GFM syntax can be used for rich text representation.
     */
    description?: string;
    /**
     * The Terms of Service for the API.
     */
    termsOfService?: string;
    /**
     * The contact information for the exposed API.
     */
    contact?: OpenApiContact;
    /**
     * The license information for the exposed API.
     */
    license?: OpenApiLicense;
    /**
     * Provides the version of the application API (not to be confused with the specification version).
     */
    version: string;
}

/**
 * The format of the array if type array is used. Possible values are:
 * csv - comma separated values foo,bar.
 *
 * ssv - space separated values foo bar.
 *
 * tsv - tab separated values foo\tbar.
 *
 * pipes - pipe separated values foo|bar.
 *
 * Default value is csv.
 */
export type OpenApiCollectionFormat = 'csv' | 'ssv' | 'tsv' | 'pipes';

/**
 * A limited subset of JSON-Schema's items object. It is used by parameter definitions that are not located in "body".
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#items-object
 */
export interface OpenApiItems {
    /**
     * The internal type of the array. The value MUST be one of "string", "number", "integer", "boolean", or "array".
     * Files and models are not allowed.
     */
    type: OpenApiDataType;
    /**
     * The extending format for the previously mentioned type. See Data Type Formats for further details.
     */
    format?: OpenApiDataFormat;
    /**
     * Required if type is "array".
     * Describes the type of items in the array.
     */
    items?: OpenApiItems;
    /**
     * Determines the format of the array if type array is used.
     * Possible values are: "csv" | "ssv" | "tsv" | "pipes";
     */
    collectionFormat?: OpenApiCollectionFormat;
    /**
     * Declares the value of the item that the server will use if none is provided.
     * (Note: "default" has no meaning for required items.) See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
     *  Unlike JSON Schema this value MUST conform to the defined type for the data type.
     */
    default?: any;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    maximum?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    exclusiveMaximum?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    minimum?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    exclusiveMinimum?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1.
     */
    maxLength?: number;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2.
     */
    minLength?: number;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3.
     */
    pattern?: string;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2.
     */
    maxItems?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3.
     */
    minItems?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4.
     */
    uniqueItems?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1.
     */
    enum?: any[];
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1.
     */
    multipleOf?: number;
}

/**
 * Describes a single operation parameter.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameter-object
 */
export interface OpenApiParameter {
    /**
     * The name of the parameter. Parameter names are case sensitive.
     *
     * If in is "path", the name field MUST correspond to the associated path segment from the path field in the Paths Object. See Path Templating for further information.
     *
     * For all other cases, the name corresponds to the parameter name used based on the in property.
     */
    name: string;
    /**
     * The location of the parameter. Possible values are "query", "header", "path", "formData" or "body".
     */
    in: OpenApiParameterIn;
    /**
     * A brief description of the parameter. This could contain examples of use. GFM syntax can be used for rich text representation.
     */
    description?: string;
    /**
     * Determines whether this parameter is mandatory. If the parameter is in "path", this property is required and its value MUST be true.
     * Otherwise, the property MAY be included and its default value is false.
     */
    required?: boolean;
    /**
     * Required if in is "body":
     * The schema defining the type used for the body parameter.
     */
    schema?: OpenApiSchema;
    /**
     * Required if in is any value other than "body"
     * The type of the parameter. Since the parameter is not located at the request body, it is limited to simple types (that is, not an object).
     * The value MUST be one of "string", "number", "integer", "boolean", "array" or "file".
     * If type is "file", the consumes MUST be either "multipart/form-data", "application/x-www-form-urlencoded" or both and the parameter MUST be in "formData".
     */
    type?: OpenApiParameterType;
    /**
     * The extending format for the previously mentioned type. See Data Type Formats for further details.
     */
    format?: OpenApiDataFormat;
    /**
     * Sets the ability to pass empty-valued parameters.
     * This is valid only for either query or formData parameters and allows you to send a parameter with a name only or an empty value. Default value is false.
     */
    allowEmptyValue?: boolean;
    /**
     * Required if in is any value other than "body" and if type is "array".
     * Describes the type of items in the array.
     */
    items?: OpenApiItems;
    /**
     * Determines the format of the array if type array is used. Possible values "csv", "ssv", "tsv", "pipes", "multi".
     */
    collectionFormat?: OpenApiParameterCollectionFormat;
    /**
     * Declares the value of the parameter that the server will use if none is provided,
     * for example a "count" to control the number of results per page might default to 100 if not supplied by the client in the request.
     * (Note: "default" has no meaning for required parameters.) See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
     * Unlike JSON Schema this value MUST conform to the defined type for this parameter.
     */
    default?: any;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    maximum?: number;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    exclusiveMaximum?: boolean;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    minimum?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    exclusiveMinimum?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1.
     */
    maxLength?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2.
     */
    minLength?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3.
     */
    pattern?: string;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2.
     */
    maxItems?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3.
     */
    minItems?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4.
     */
    uniqueItems?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1.
     */
    enum?: any[];
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1.
     */
    multipleOf?: number;
}
/**
 * The type of the parameter. Since the parameter is not located at the request body, it is limited to simple types (that is, not an object).
 * The value MUST be one of "string", "number", "integer", "boolean", "array" or "file".
 * If type is "file", the consumes MUST be either "multipart/form-data", " application/x-www-form-urlencoded" or both and the parameter MUST be in "formData".
 */
export type OpenApiParameterType = OpenApiDataType | 'file';
/**
 * Path - Used together with Path Templating, where the parameter value is actually part of the operation's URL.
 * This does not include the host or base path of the API. For example, in /items/{itemId}, the path parameter is itemId.
 *
 * Query - Parameters that are appended to the URL. For example, in /items?id=###, the query parameter is id.
 *
 * Header - Custom headers that are expected as part of the request.
 *
 * Body - The payload that's appended to the HTTP request. Since there can only be one payload, there can only be one body parameter.
 * The name of the body parameter has no effect on the parameter itself and is used for documentation purposes only.
 * Since Form parameters are also in the payload, body and form parameters cannot exist together for the same operation.
 *
 * Form - Used to describe the payload of an HTTP request when either application/x-www-form-urlencoded, multipart/form-data or both are used as the content type of the request
 * (in Swagger's definition, the consumes property of an operation). This is the only parameter type that can be used to send files, thus supporting the file type.
 * Since form parameters are sent in the payload, they cannot be declared together with a body parameter for the same operation.
 * Form parameters have a different format based on the content-type used (for further details, consult http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4):
 * application/x-www-form-urlencoded - Similar to the format of Query parameters but as a payload.
 * For example, foo=1&bar=swagger - both foo and bar are form parameters.
 * This is normally used for simple parameters that are being transferred. multipart/form-data - each parameter takes a section in the payload with an internal header.
 * For example, for the header Content-Disposition: form-data; name="submit-name" the name of the parameter is submit-name. This type of form parameters is more commonly used for file transfers.
 */
export type OpenApiParameterIn = 'path' | 'query' | 'header' | 'formData' | 'body';
/**
 * The format of the array if type array is used. Possible values are:
 * csv - comma separated values foo,bar.
 *
 * ssv - space separated values foo bar.
 *
 * tsv - tab separated values foo\tbar.
 *
 * pipes - pipe separated values foo|bar.
 *
 * multi - corresponds to multiple parameter instances instead of multiple values for a single instance foo=bar&foo=baz. This is valid only for parameters in "query" or "formData".
 *
 * Default value is csv.
 */
export type OpenApiParameterCollectionFormat = OpenApiCollectionFormat | 'multi';

/**
 * An object to hold parameters to be reused across operations. Parameter definitions can be referenced to the ones defined here.
 * This does not define global operation parameters.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameters-definitions-object
 */
export interface OpenApiParametersDefinitions {
    /**
     * A single parameter definition, mapping a "name" to the parameter it defines.
     */
    [name: string]: OpenApiParameter;
}

/**
 * A simple object to allow referencing other definitions in the specification.
 * It can be used to reference parameters and responses that are defined at the top level for reuse.
 *
 * The Reference Object is a JSON Reference that uses a JSON Pointer as its value. For this specification, only canonical dereferencing is supported.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#reference-object
 */
export interface OpenApiReference {
    /**
     * The reference string.
     */
    $ref: string;
}

/**
 * Allows sharing examples for operation responses.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#example-object
 */
export interface OpenApiExample {
    /**
     * The name of the property MUST be one of the Operation produces values (either implicit or inherited).
     * The value SHOULD be an example of what such a response would look like.
     */
    [mimeType: string]: any;
}

/**
 * Header Object
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#header-object
 */
export interface OpenApiHeader {
    /**
     * A short description of the header.
     */
    description?: string;
    /**
     * The type of the object. The value MUST be one of "string", "number", "integer", "boolean", or "array".
     */
    type: OpenApiDataType;
    /**
     * The extending format for the previously mentioned type. See Data Type Formats for further details.
     */
    format?: OpenApiDataFormat;
    /**
     * Required if type is "array".
     * Describes the type of items in the array.
     */
    items?: OpenApiItems;
    /**
     * Determines the format of the array if type array is used.
     * Possible values are: "csv", "ssv", "tsv", "pipes"
     * Default value is csv.
     */
    collectionFormat?: OpenApiCollectionFormat;
    /**
     * Declares the value of the header that the server will use if none is provided.
     * (Note: "default" has no meaning for required headers.) See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
     * Unlike JSON Schema this value MUST conform to the defined type for the header.
     */
    default?: any;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    maximum?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    exclusiveMaximum?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    minimum?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    exclusiveMinimum?: boolean;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1.
     */
    maxLength?: number;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2.
     */
    minLength?: number;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3.
     */
    pattern?: string;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2.
     */
    maxItems?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3.
     */
    minItems?: number;
    /**
     * 	https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4.
     */
    uniqueItems?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1.
     */
    enum?: any[];
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1.
     */
    multipleOf?: number;
}

/**
 * Describes a single response from an API Operation.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#response-object
 */
export interface OpenApiResponse {
    /**
     * A short description of the response. GFM syntax can be used for rich text representation.
     */
    description: string;
    /**
     * A definition of the response structure. It can be a primitive, an array or an object.
     * If this field does not exist, it means no content is returned as part of the response.
     * As an extension to the Schema Object, its root type value may also be "file". This SHOULD be accompanied by a relevant produces mime-type.
     */
    schema?: OpenApiSchema;
    /**
     * A list of headers that are sent with the response.
     */
    headers?: OpenApiMap<OpenApiHeader>;
    /**
     * An example of the response message.
     */
    examples?: OpenApiExample;
}

/**
 * Any HTTP status code can be used as the property name (one property per HTTP status code).
 * Describes the expected response for that HTTP status code.
 * Reference Object can be used to link to a response that is defined at the Swagger Object's responses section.
 */
export type OpenApiResponsesHttpCodes = {
    [k in HttpStatusCodes]?: OpenApiResponse | OpenApiReference;
};
/**
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.
 * It is not expected from the documentation to necessarily cover all possible HTTP response codes, since they may not be known in advance.
 * However, it is expected from the documentation to cover a successful operation response and any known errors.
 *
 * The default can be used as the default response object for all HTTP codes that are not covered individually by the specification.
 *
 * The Responses Object MUST contain at least one response code, and it SHOULD be the response for a successful operation call.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#responses-object
 */
export interface OpenApiResponses extends OpenApiResponsesHttpCodes {
    /**
     * The documentation of responses other than the ones declared for specific HTTP response codes.
     * It can be used to cover undeclared responses.
     * Reference Object can be used to link to a response that is defined at the Swagger Object's responses section.
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

/** The value for the Swagger Object schemes definition. Values MUST be from the list: "http", "https", "ws", "wss". */
export type OpenApiScheme = 'http' | 'https' | 'ws' | 'wss';

/**
 * Lists the required security schemes to execute this operation.
 * The object can have multiple security schemes declared in it which are all required (that is, there is a logical AND between the schemes).
 *
 * The name used for each property MUST correspond to a security scheme declared in the Security Definitions.
 *
 *  * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#securityRequirementObject
 */
export interface OpenApiSecurityRequirement {
    /**
     * Each name must correspond to a security scheme which is declared in the Security Definitions.
     * If the security scheme is of type "oauth2", then the value is a list of scope names required for the execution.
     * For other security scheme types, the array MUST be empty.
     */
    [key: string]: string[];
}

/**
 * Describes a single API operation on a path.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#operation-object
 */
export interface OpenApiOperation {
    /**
     * A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.
     */
    tags?: string[];
    /**
     * A short summary of what the operation does. For maximum readability in the swagger-ui, this field SHOULD be less than 120 characters.
     */
    summary?: string;
    /**
     * A verbose explanation of the operation behavior. GFM syntax can be used for rich text representation.
     */
    description?: string;
    /**
     * Additional external documentation for this operation.
     */
    externalDocs?: OpenApiExternalDocs;
    /**
     * Unique string used to identify the operation.
     * The id MUST be unique among all operations described in the API.
     * Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is recommended to follow common programming naming conventions.
     */
    operationId?: string;
    /**
     * A list of MIME types the operation can consume. This overrides the consumes definition at the Swagger Object.
     * An empty value MAY be used to clear the global definition. Value MUST be as described under Mime Types.
     */
    consumes?: string[];
    /**
     * A list of MIME types the operation can produce. This overrides the produces definition at the Swagger Object.
     * An empty value MAY be used to clear the global definition. Value MUST be as described under Mime Types.
     */
    produces?: string[];
    /**
     * A list of parameters that are applicable for this operation.
     * If a parameter is already defined at the Path Item, the new definition will override it, but can never remove it. The list MUST NOT include duplicated parameters.
     * A unique parameter is defined by a combination of a name and location.
     * The list can use the Reference Object to link to parameters that are defined at the Swagger Object's parameters. There can be one "body" parameter at most.
     */
    parameters?: OpenApiParameter[] | OpenApiReference[];
    /**
     * The list of possible responses as they are returned from executing this operation.
     */
    responses: OpenApiResponses;
    /**
     * The transfer protocol for the operation. Values MUST be from the list: "http", "https", "ws", "wss". The value overrides the Swagger Object schemes definition.
     */
    schemes?: OpenApiScheme[];
    /**
     * Declares this operation to be deprecated. Usage of the declared operation should be refrained. Default value is false.
     */
    deprecated?: boolean;
    /**
     * A declaration of which security schemes are applied for this operation.
     * The list of values describes alternative security schemes that can be used (that is, there is a logical OR between the security requirements).
     * This definition overrides any declared top-level security. To remove a top-level security declaration, an empty array can be used.
     */
    security?: OpenApiSecurityRequirement[];
}

/**
 * Describes the operations available on a single path. A Path Item may be empty, due to ACL constraints.
 * The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#path-item-object
 */
export interface OpenApiPath {
    /**
     * Allows for an external definition of this path item.
     * The referenced structure MUST be in the format of a Path Item Object.
     * If there are conflicts between the referenced definition and this Path Item's definition, the behavior is undefined.
     */
    $ref?: string;
    /**
     * A definition of a GET operation on this path.
     */
    get?: OpenApiOperation;
    /**
     * A definition of a PUT operation on this path.
     */
    put?: OpenApiOperation;
    /**
     * A definition of a POST operation on this path.
     */
    post?: OpenApiOperation;
    /**
     * A definition of a DELETE operation on this path.
     */
    delete?: OpenApiOperation;
    /**
     * A definition of a OPTIONS operation on this path.
     */
    options?: OpenApiOperation;
    /**
     * A definition of a HEAD operation on this path.
     */
    head?: OpenApiOperation;
    /**
     * A definition of a PATCH operation on this path.
     */
    patch?: OpenApiOperation;
    /**
     * A list of parameters that are applicable for all the operations described under this path.
     * These parameters can be overridden at the operation level, but cannot be removed there.
     * The list MUST NOT include duplicated parameters.
     * A unique parameter is defined by a combination of a name and location.
     * The list can use the Reference Object to link to parameters that are defined at the Swagger Object's parameters.
     * There can be one "body" parameter at most.
     */
    parameters?: OpenApiParameter[] | OpenApiReference[];
}

/**
 * Holds the relative paths to the individual endpoints.
 * The path is appended to the basePath in order to construct the full URL. The Paths may be empty, due to ACL constraints.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#paths-object
 */
export interface OpenApiPaths {
    /**
     * A relative path to an individual endpoint.
     * The field name MUST begin with a slash. The path is appended to the basePath in order to construct the full URL. Path templating is allowed.
     */
    [path: string]: OpenApiPath;
}

/**
 * An object to hold responses to be reused across operations. Response definitions can be referenced to the ones defined here.
 *
 * This does not define global operation responses.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#responses-definitions-object
 */
export interface OpenApiResponsesDefinitions {
    /**
     * A single response definition, mapping a "name" to the response it defines.
     */
    [name: string]: OpenApiResponse;
}

/**
 * Lists the available scopes for an OAuth2 security scheme.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-definitions-object
 */
export interface OpenApiScopes {
    /**
     * Maps between a name of a scope to a short description of it (as the value of the property).
     */
    [name: string]: string;
}

/**
 * Allows the definition of a security scheme that can be used by the operations.
 * Supported schemes are basic authentication, an API key (either as a header or as a query parameter) and OAuth2's common flows (implicit, password, application and access code).
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-scheme-object
 */
export interface OpenApiSecurityScheme {
    /**
     * The type of the security scheme. Valid values are "basic", "apiKey" or "oauth2".
     */
    type: 'basic' | 'apiKey' | 'oauth2';
    /**
     * A short description for security scheme.
     */
    description?: string;
    /**
     * The name of the header or query parameter to be used.
     */
    name?: string;
    /**
     * The location of the API key. Valid values are "query" or "header".
     */
    in?: 'query' | 'header';
    /**
     * The flow used by the OAuth2 security scheme. Valid values are "implicit", "password", "application" or "accessCode".
     */
    flow?: 'implicit' | 'password' | 'application' | 'accessCode';
    /**
     * The authorization URL to be used for this flow. This SHOULD be in the form of a URL.
     */
    authorizationUrl?: string;
    /**
     * The token URL to be used for this flow. This SHOULD be in the form of a URL.
     */
    tokenUrl?: string;
    /**
     * The available scopes for the OAuth2 security scheme.
     */
    scopes: OpenApiScopes;
}

/**
 * A declaration of the security schemes available to be used in the specification.
 * This does not enforce the security schemes on the operations and only serves to provide the relevant details for each scheme.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-definitions-object
 */
export interface OpenApiSecurityDefinitions {
    /**
     * A single security scheme definition, mapping a "name" to the scheme it defines.
     */
    [name: string]: OpenApiSecurityScheme;
}

/**
 * Allows adding meta data to a single tag that is used by the Operation Object.
 * It is not mandatory to have a Tag Object per tag used there.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#tag-object
 */
export interface OpenApiTag {
    /**
     * The name of the tag.
     */
    name: string;
    /**
     * A short description for the tag. GFM syntax can be used for rich text representation.
     */
    description?: string;
    /**
     * Additional external documentation for this tag.
     */
    externalDocs?: OpenApiExternalDocs;
}

/**
 * This is the root document object for the API specification.
 * It combines what previously was the Resource Listing and API Declaration (version 1.2 and earlier) together into one document.
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swagger-object
 */
export interface OpenApi {
    /**
     * Specifies the Swagger Specification version being used. It can be used by the Swagger UI and other clients to interpret the API listing. The value MUST be "2.0"
     */
    swagger: string;
    /**
     * Provides metadata about the API. The metadata can be used by the clients if needed.
     */
    info: OpenApiInfo;
    /**
     * The host (name or ip) serving the API. This MUST be the host only and does not include the scheme nor sub-paths.
     * It MAY include a port. If the host is not included, the host serving the documentation is to be used (including the port). The host does not support path templating.
     */
    host?: string;
    /**
     * The base path on which the API is served, which is relative to the host.
     * If it is not included, the API is served directly under the host. The value MUST start with a leading slash (/).
     * The basePath does not support path templating.
     */
    basePath?: string;
    /**
     * The transfer protocol of the API. Values MUST be from the list: "http", "https", "ws", "wss".
     * If the schemes is not included, the default scheme to be used is the one used to access the Swagger definition itself.
     */
    schemes?: OpenApiScheme[];
    /**
     * A list of MIME types the APIs can consume. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under Mime Types.
     */
    consumes?: string[];
    /**
     * A list of MIME types the APIs can produce. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under Mime Types.
     */
    produces?: string[];
    /**
     * The available paths and operations for the API.
     */
    paths: OpenApiPaths;
    /**
     * An object to hold data types produced and consumed by operations.
     */
    definitions?: OpenApiDefinitions;
    /**
     * An object to hold parameters that can be used across operations. This property does not define global parameters for all operations.
     */
    parameters?: OpenApiParametersDefinitions;
    /**
     * An object to hold responses that can be used across operations. This property does not define global responses for all operations.
     */
    responses?: OpenApiResponsesDefinitions;
    /**
     * Security scheme definitions that can be used across the specification.
     */
    securityDefinitions?: OpenApiSecurityDefinitions;
    /**
     * A declaration of which security schemes are applied for the API as a whole.
     * The list of values describes alternative security schemes that can be used (that is, there is a logical OR between the security requirements).
     * Individual operations can override this definition.
     */
    security?: OpenApiSecurityRequirement[];
    /**
     * A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools.
     * Not all tags that are used by the Operation Object must be declared.
     * The tags that are not declared may be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.
     */
    tags?: OpenApiTag[];
    /**
     * Additional external documentation.
     */
    externalDocs?: OpenApiExternalDocs;
}

/**
 * Lists the headers that can be sent as part of a response.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#headers-object
 */
export interface OpenApiHeaders {
    /**
     * The name of the property corresponds to the name of the header. The value describes the type of the header.
     */
    [header: string]: OpenApiHeader;
}
