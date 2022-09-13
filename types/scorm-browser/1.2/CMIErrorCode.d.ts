// Null errors

/**
 * No error
 */
export type CMIErrorCodeNoerror = '0';

// General errors

/**
 * General exception
 */
export type CMIErrorCodeGeneralException = '101';

// Syntax errors

/**
 * Invalid argument error
 */
export type CMIErrorCodeInvalidArgumentError = '201';

/**
 * Element cannot have children
 */
export type CMIErrorCodeElementCannotHaveChildren = '202';

/**
 * Element not an array. Cannot have count
 */
export type CMIErrorCodeElementNotAnArrayCannotHaveCount = '203';

// LMS errors

/**
 * Not initialized
 */
export type CMIErrorCodeNotInitialized = '301';

// Data model errors

/**
 * Not implemented error
 */
export type CMIErrorCodeNotImplementedError = '401';

/**
 * Invalid set value, element is a keyword
 */
export type CMIErrorCodeInvalidSetValueElementIsAKeyword = '402';

/**
 * Element is read only
 */
export type CMIErrorCodeElementIsReadOnly = '403';

/**
 * Element is write only
 */
export type CMIErrorCodeElementIsWriteOnly = '404';

/**
 * Incorrect data type
 */
export type CMIErrorCodeIncorrectDataType = '405';

/**
 * The CMIErrorCode data type is a three-digit number, represented as a string, that corresponds to one of the SCORM Run-Time error codes.
 */
export type CMIErrorCode =
    | CMIErrorCodeNoerror
    | CMIErrorCodeGeneralException
    | CMIErrorCodeInvalidArgumentError
    | CMIErrorCodeElementCannotHaveChildren
    | CMIErrorCodeElementNotAnArrayCannotHaveCount
    | CMIErrorCodeNotInitialized
    | CMIErrorCodeNotImplementedError
    | CMIErrorCodeInvalidSetValueElementIsAKeyword
    | CMIErrorCodeElementIsReadOnly
    | CMIErrorCodeElementIsWriteOnly
    | CMIErrorCodeIncorrectDataType;
