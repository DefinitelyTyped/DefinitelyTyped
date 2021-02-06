/**
 * This API provides common Tizen functionality.
 *
 * The API provides the basic definitions that are used in the Tizen Web Device API.
 * These include generic callbacks that are invoked when the operations succeed or fail,
 * WebAPIError and WebAPIException that give information of the platform's error and
 * filter interfaces that are used to make query statements for searching.
 *
 * Additionally, this API specifies the location in the ECMAScript hierarchy in which
 * the Tizen Web Device API is instantiated (`window.tizen`).
 *
 * For more information on the Tizen features, see [Tizen Guide](/application/web/guides/index).
 */

/**
 * Representation of raw data as a sequence of values in range 0 - 255.
 * @since 5.5
 * @remark This is equivalent to Uint8Array in JavaScript.
 */
export type ByteStream = Uint8Array[];

/**
 * Filter match flags.
 *
 * These values are supported:
 * - `EXACTLY` - Indicates that an attribute value should match exactly with the specified default value.
 * For `strings`- this type of comparison is case-sensitive.
 * - `FULLSTRING` - Indicates String-based comparison and that the attribute value should match the whole string (case insensitive).
 * - `CONTAINS` - Indicates that an attribute value should contain the specified string. This type of comparison works only on strings and is case insensitive.
 * - `STARTSWITH` - Indicates that an attribute value should start with the specified string.
 * This type of comparison works only on strings and is case insensitive.
 * - `ENDSWITH` - Indicates that an attribute value should end with the specified string. This type of comparison works only on strings and is case insensitive.
 * - `EXISTS` - Indicates that a filter comparison should match if the specified attribute exists.
 *
 */
export enum FilterMatchFlag {
    EXACTLY = 'EXACTLY',
    FULLSTRING = 'FULLSTRING',
    CONTAINS = 'CONTAINS',
    STARTSWITH = 'STARTSWITH',
    ENDSWITH = 'ENDSWITH',
    EXISTS = 'EXISTS',
}

/**
 * An enumerator that indicates the sorting order.
 *
 * Following values are supported:
 * - `ASC` - Indicates that the sorting order is ascending
 * - `DESC` - Indicates that the sorting order is descending
 */
export enum SortModeOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

/**
 * An enumerator that indicates the type of composite filter.
 *
 * Following values are supported:
 * - `UNION` - Indicates that the composite is a union of filters ("OR" operator)
 * - `INTERSECTION` - Indicates that the composite is an intersection of filters ("AND" operator)
 */
export enum CompositeFilterType {
    UNION = 'UNION',
    INTERSECTION = 'INTERSECTION',
}

/**
 * `Bundle` item value types.
 *
 * The following value types are supported by `Bundle` objects:
 * - `STRING` - string value type
 * - `STRING_ARRAY` - array of strings value type
 * - `BYTES` - ByteStream`
 * - `BYTES_ARRAY` - array of `ByteStream`
 *
 * @remark Empty array will be assigned STRING_ARRAY type.
 */

export enum BundleValueType {
    STRING = 'STRING',
    STRING_ARRAY = 'STRING_ARRAY',
    BYTES = 'BYTES',
    BYTES_ARRAY = 'BYTES_ARRAY',
}

export interface BundleConstructor {
    new (): Bundle;
}
/**
 * Key-value pair container.
 *
 * Bundle keys are always strings.
 * All supported value types are specified in the BundleValueType enum.
 *
 * Plain dictionary will be implicitly converted to the Bundle object in every
 * Bundle context within WebAPI.
 */
export class Bundle {
    constructor();
    /**
     * Gets value stored under given key.
     * @param key Bundle entry key.
     * @returns Bundle entry value for a given key.
     * @throw WebAPIException `NotFoundError`
     */

    get: (key: string) => any;

    /**
     * Inserts the key-value pair.
     * @param key Entry key.
     * @param value Entry value.
     * @remark Any value type not specified in the BundleValueType enum will be converted to a string.
     * @remark Empty array value will be treated like STRING_ARRAY.
     */

    set: (key: string, value: any) => void;
    /**
     * Gets type of the value for a given key.
     * @param key Entry key.
     * @returns Entry value type.
     * @throw WebAPIException `NotFoundError`
     * @remark If the value for the given key is an empty array this function returns STRING_ARRAY.
     *
     */
    typeOf: (key: string) => BundleValueType | 'STRING' | 'STRING_ARRAY' | 'BYTES' | 'BYTES_ARRAY';
    /**
     * Calls the callback function for each item stored in the bundle.
     * If bundle is empty the callback function will not be called.
     * @param callback Function to be called for each entry.
     * @remark Empty arrays are treated like string arrays.
     */

    forEach: (callback: BundleItemCallback) => void;
    /**
     * Converts bundle to JSON-compatible object.
     * @returns JSON-compatible object.
     */

    toJSON: () => object;
    /**
     * Returns string representation of the bundle's data.
     * @returns JSON string representation of the bundle's data.
     */
    toString: () => string;
}

/**
 * This is a common interface used by different types of
 * object filters.
 *
 * Never use this base interface directly, instead use `AbstractFilter` subtypes,
 * such as `AttributeFilter`, `AttributeRangeFilter`, and `CompositeFilter`.
 */
export class AbstractFilter {}

export interface AttributeFilterConstructor {
    new (
        attributeName: string,
        matchFlag?: FilterMatchFlag | 'EXACTLY' | 'FULLSTRING' | 'CONTAINS' | 'STARTSWITH' | 'ENDSWITH' | 'EXISTS',
        matchValue?: any,
    ): AttributeFilter;
}

/**
 * This interface represents a set of filters.
 * It represents the query statement for the specified value of `matchValue` by the rule of `matchFlag`.
 * If no `matchValue` is defined, the filter matches all objects that have the attribute
 * defined (same as the "EXISTS" filter works), otherwise, it only matches objects which have an attribute that match
 * the specified value.
 */
export class AttributeFilter extends AbstractFilter {
    constructor(
        attributeName: string,
        matchFlag?: FilterMatchFlag | 'EXACTLY' | 'FULLSTRING' | 'CONTAINS' | 'STARTSWITH' | 'ENDSWITH' | 'EXISTS',
        matchValue?: any,
    );
    /**
     * The name of the object attribute used for filtering.
     *
     * This is the name of the object attribute exactly as it is defined in
     * the object's interface. For attributes of complex type, use fully-qualified names
     * (such as "geolocation.latitude" to filter a video or image content's latitude in a geolocation).
     *
     * For attributes of an array type, the filter will match if any value in the array
     * matches.
     */
    attributeName: string;
    /**
     * The match flag used for attribute-based filtering.
     * By default, this attribute is set to "EXACTLY".
     */
    matchFlag: FilterMatchFlag | 'EXACTLY' | 'FULLSTRING' | 'CONTAINS' | 'STARTSWITH' | 'ENDSWITH' | 'EXISTS';
    /**
     * The value used for matching.
     * The filter will match if the attribute value matches the given matchValue.
     * This value is not used if the `matchFlag` is set to "EXISTS".
     * By default, this attribute is set to ***null***.
     */
    matchValue: any;
}

export interface AttributeRangeFilterConstructor {
    new (attributeName: string, initialValue?: any, endValue?: any): AttributeRangeFilter;
}
/**
 * `AttributeRangeFilter` represents a filter based on an object attribute
 * which has values that are within a particular range.
 *
 * Range filters, where only one boundary is set, are available.
 */
export class AttributeRangeFilter extends AbstractFilter {
    constructor(attributeName: string, initialValue?: any, endValue?: any);

    /**
     * The name of the object attribute used for filtering.
     *
     * The value of this attribute is exactly as it is defined in the object's interface. For attributes of complex type, use fully-qualified names
     * (such as "geolocation.latitude" to filter a video or image content's latitude in a geolocation).
     *
     * For attributes of array type, the filter will match if any value in the array
     * matches.
     */
    attributeName: string;
    /**
     * Objects with an attribute that is greater than or equal to `initialValue` will match.
     * By default, this attribute is set to ***null***.
     */
    initialValue: any;
    /**
     * Objects with an attribute that is strictly lower than or equal to `endValue` will match.
     * By default, this attribute is set to ***null***.
     */
    endValue: any;
}

export interface CompositeFilterConstructor {
    new (type: CompositeFilterType | 'UNION' | 'INTERSECTION', filters?: AbstractFilter[]): CompositeFilter;
}
/**
 * `CompositeFilter` represents a set of filters.
 *
 * The composite filters can be one of the following 2 types:
 * - `union` - used to filter objects that match any of the filters it includes.
 * - `intersection` - used to filter objects that match all the filters it includes.
 */
export class CompositeFilter extends AbstractFilter {
    constructor(type: CompositeFilterType | 'UNION' | 'INTERSECTION', filters?: AbstractFilter[]);
    /**
     * The composite filter type.
     *
     */
    type: CompositeFilterType | 'UNION' | 'INTERSECTION';
    /**
     * The list of filters in the composite filter.
     */
    filters: AbstractFilter[];
}

export interface SortModeConstructor {
    new (attributeName: string, order?: SortModeOrder | 'ASC' | 'DESC'): SortMode;
}
/**
 * `SortMode` is a common interface used for sorting of queried data.
 *
 * Note that the sorting result of list type attributes is not determined.
 */
export class SortMode {
    constructor(attributeName: string, order?: SortModeOrder | 'ASC' | 'DESC');
    /**
     * The name of the object attribute used for sorting.
     */
    attributeName: string;
    /**
     * The type of the sorting.
     *
     * By default, this attribute is set to ***ASC***.
     */
    order: SortModeOrder | 'ASC' | 'DESC';
}

export interface SimpleCoordinatesConstructor {
    new (latitude: number, longitude: number): SimpleCoordinates;
}
/**
 * `SimpleCoordinates` represents a point (latitude and longitude) in the map coordinate system.
 * Latitude and longitude are of the WGS84 datum.
 */
export class SimpleCoordinates {
    constructor(latitude: number, longitude: number);
    /**
     * Latitude.
     */
    latitude: number;
    /**
     * Longitude.
     */
    longitude: number;
}

/**
 * Generic exception interface.
 * This interface will be used by the APIs to throw errors synchronously.
 * The attempt to set an attribute value may or may not raise WebAPIException synchronously with error type TypeMismatchError or InvalidValuesError.
 */

export interface WebAPIException {
    /**
     * 16-bit error code.
     *
     * For the possible values of this attribute, see [DOMException](http://www.w3.org/TR/dom/#domexception).
     */
    readonly code: number;
    /**
     * An error type. The name attribute must return the value it had been initialized with.
     *
     *  This attribute can have one of the following value
     * - UnknownError : An unknown error has occurred.
     * - InvalidValuesError : The content of an object does not contain valid values.
     * - IOError : An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
     * - ServiceNotAvailableError : The requested service is not available.
     * - VerificationError : An error occurred in authentication and so the requested method cannot be completed.
     * For other possible values of this attribute, see the values defined in [DOM error names](http://www.w3.org/TR/dom/#error-names-0).
     */
    readonly name: string;
    /**
     * An error message that describes the details of an encountered error.
     *
     * This attribute is mainly intended to be used for developers rather than end users, so it should not be used directly in the user interfaces as it is.
     */
    readonly message: string;
    /**
     * The index is not in the allowed range.
     */
    readonly INDEX_SIZE_ERR: 1;
    /**
     * The specified range of text is too large.
     */
    readonly DOMSTRING_SIZE_ERR: 2; // historical.
    /**
     * The operation would yield an incorrect node tree.
     */
    readonly HIERARCHY_REQUEST_ERR: 3;
    /**
     * The object is in the wrong document.
     */
    readonly WRONG_DOCUMENT_ERR: 4;
    /**
     * The string contains invalid characters.
     */
    readonly INVALID_CHARACTER_ERR: 5;
    /**
     * Data is specified for a node that does not support data.
     */
    readonly NO_DATA_ALLOWED_ERR: 6; // historical.
    /**
     * The object cannot be modified.
     */
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    /**
     * The object cannot be found here.
     */
    readonly NOT_FOUND_ERR: 8;
    /**
     * The operation is not supported.
     */
    readonly NOT_SUPPORTED_ERR: 9;
    /**
     * The specified attribute is already in use elsewhere.
     */
    readonly INUSE_ATTRIBUTE_ERR: 10; // historical.
    /**
     * The object is in an invalid state.
     */
    readonly INVALID_STATE_ERR: 11;
    /**
     * The string did not match the expected pattern.
     */
    readonly SYNTAX_ERR: 12;
    /**
     * The object cannot be modified in this way.
     */
    readonly INVALID_MODIFICATION_ERR: 13;
    /**
     * The operation is not allowed by Namespaces in XML.
     */
    readonly NAMESPACE_ERR: 14;
    /**
     * The object does not support the operation or argument.
     */
    readonly INVALID_ACCESS_ERR: 15;
    /**
     * The operation would cause the node to fail validation.
     */
    readonly VALIDATION_ERR: 16; // historical.
    /**
     * The type of the object does not match the expected type.
     */
    readonly TYPE_MISMATCH_ERR: 17;
    /**
     * The operation is insecure.
     */
    readonly SECURITY_ERR: 18;
    /**
     * A network error occurred.
     */
    readonly NETWORK_ERR: 19;
    /**
     * The operation has been aborted.
     */
    readonly ABORT_ERR: 20;
    /**
     * The given URL does not match another URL.
     */
    readonly URL_MISMATCH_ERR: 21;
    /**
     * The quota has been exceeded.
     */
    readonly QUOTA_EXCEEDED_ERR: 22;
    /**
     * The operation has timed out.
     */
    readonly TIMEOUT_ERR: 23;
    /**
     * The supplied node is incorrect or has an incorrect ancestor for this operation.
     */
    readonly INVALID_NODE_TYPE_ERR: 24;
    /**
     * The object cannot be cloned.
     */
    readonly DATA_CLONE_ERR: 25;
}

/**
 * Generic error interface.
 * This interface will be used by the APIs in order to return them in the error callback of asynchronous methods.
 */
export interface WebAPIError {
    /**
     * 16-bit error code.
     * Possible values are defined in [DOMException](http://www.w3.org/TR/dom/#domexception).
     */
    readonly code: number;

    /**
     * An error type. The name attribute must return the value it had been initialized with.
     *
     *  This attribute can have one of the following values:
     * - UnknownError  An unknown error has occurred
     * - InvalidValuesError  The content of an object does not contain valid values
     * - IOError  An error occurred in communication with the underlying implementation and so the requested method cannot be completed
     * - ServiceNotAvailableError  The requested service is not available
     * - VerificationError  An error occurred in authentication and so the requested method cannot be completed
     *  For other possible values of this attribute, see the values defined in [DOM error names](http://www.w3.org/TR/dom/#error-names-0)
     */
    readonly name: string;
    /**
     * An error message that describes the details of the error encountered.
     *
     * This attribute is not intended to be used directly in the user interfaces
     * as it is mainly intended to be useful for developers rather than end users.
     */
    readonly message: string;
}

/**
 * This interface is used in methods that do not require any return value in the success callback.
 * In case of successful execution of an asynchronous call, `SuccessCallback` or an API defined callback must be called immediately to notify the user.
 */
export interface SuccessCallback {
    /**
     * Method invoked when the asynchronous call completes successfully.
     */
    (): void;
}

/**
 * This interface is used in methods that require only an error as an input parameter in the error callback.
 * If an invalid function (such as null) is passed to the API that accepts ErrorCallback,
 * it silently fails and there is no further action.
 */
export interface ErrorCallback {
    /**
     * Method that is invoked when an error occurs.
     * @param error Generic error.
     */
    (error: WebAPIError): void;
}

/**
 * Callback for `Bundle.forEach()` method.
 */
export interface BundleItemCallback {
    /**
     * Callback for `Bundle.forEach()` method.
     * @param key Bundle item key.
     * @param value Bundle item value.
     * @param type Bundle item type.
     */
    (key: string, value: any, type: BundleValueType): void;
}
