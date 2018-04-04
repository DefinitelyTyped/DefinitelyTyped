// Type definitions for evernote v 1.25.8
// Project: https://www.npmjs.com/package/evernote
// Definitions by: Zachary Collins <https://github.com/corps>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Thrift } from 'thrift';

declare namespace Evernote {
    interface Callback<T> {
        (err: EDAMUserException | EDAMSystemException | EDAMNotFoundException, v: T): void
    }

    interface ClientConfig {
        consumerKey?: string
        consumerSecret?: string
        sandbox?: boolean
        token?: string
        serviceHost?: string
        additionalHeaders?: { [k: string]: string }
        secret?: string
    }

    class Client {
        static "new": (config: ClientConfig) => Client
        constructor(config: ClientConfig);
        getNoteStore(): NoteStoreClient;
        getUserStore(): UserStoreClient;
    }


    /**
     * Numeric codes indicating the type of error that occurred on the
     * service.
     * <dl>
     *     <dt>UNKNOWN</dt>
     *         <dd>No information available about the error</dd>
     *     <dt>BAD_DATA_FORMAT</dt>
     *         <dd>The format of the request data was incorrect</dd>
     *     <dt>PERMISSION_DENIED</dt>
     *         <dd>Not permitted to perform action</dd>
     *     <dt>INTERNAL_ERROR</dt>
     *         <dd>Unexpected problem with the service</dd>
     *     <dt>DATA_REQUIRED</dt>
     *         <dd>A required parameter/field was absent</dd>
     *     <dt>LIMIT_REACHED</dt>
     *         <dd>Operation denied due to data model limit</dd>
     *     <dt>QUOTA_REACHED</dt>
     *         <dd>Operation denied due to user storage limit</dd>
     *     <dt>INVALID_AUTH</dt>
     *         <dd>Username and/or password incorrect</dd>
     *     <dt>AUTH_EXPIRED</dt>
     *         <dd>Authentication token expired</dd>
     *     <dt>DATA_CONFLICT</dt>
     *         <dd>Change denied due to data model conflict</dd>
     *     <dt>ENML_VALIDATION</dt>
     *         <dd>Content of submitted note was malformed</dd>
     *     <dt>SHARD_UNAVAILABLE</dt>
     *         <dd>Service shard with account data is temporarily down</dd>
     *     <dt>LEN_TOO_SHORT</dt>
     *         <dd>Operation denied due to data model limit, where something such
     *                 as a string length was too short</dd>
     *     <dt>LEN_TOO_LONG</dt>
     *         <dd>Operation denied due to data model limit, where something such
     *                 as a string length was too long</dd>
     *     <dt>TOO_FEW</dt>
     *         <dd>Operation denied due to data model limit, where there were
     *                 too few of something.</dd>
     *     <dt>TOO_MANY</dt>
     *         <dd>Operation denied due to data model limit, where there were
     *                 too many of something.</dd>
     *     <dt>UNSUPPORTED_OPERATION</dt>
     *         <dd>Operation denied because it is currently unsupported.</dd>
     *     <dt>TAKEN_DOWN</dt>
     *         <dd>Operation denied because access to the corresponding object is
     *                 prohibited in response to a take-down notice.</dd>
     *     <dt>RATE_LIMIT_REACHED</dt>
     *         <dd>Operation denied because the calling application has reached
     *                 its hourly API call limit for this user.</dd>
     * </dl>
     */
    enum EDAMErrorCode {
        'UNKNOWN' = 1,
        'BAD_DATA_FORMAT' = 2,
        'PERMISSION_DENIED' = 3,
        'INTERNAL_ERROR' = 4,
        'DATA_REQUIRED' = 5,
        'LIMIT_REACHED' = 6,
        'QUOTA_REACHED' = 7,
        'INVALID_AUTH' = 8,
        'AUTH_EXPIRED' = 9,
        'DATA_CONFLICT' = 10,
        'ENML_VALIDATION' = 11,
        'SHARD_UNAVAILABLE' = 12,
        'LEN_TOO_SHORT' = 13,
        'LEN_TOO_LONG' = 14,
        'TOO_FEW' = 15,
        'TOO_MANY' = 16,
        'UNSUPPORTED_OPERATION' = 17,
        'TAKEN_DOWN' = 18,
        'RATE_LIMIT_REACHED' = 19,
    }

    /**
     * This exception is thrown by EDAM procedures when a call fails as a result of
     * a problem that a caller may be able to resolve.    For example, if the user
     * attempts to add a note to their account which would exceed their storage
     * quota, this type of exception may be thrown to indicate the source of the
     * error so that they can choose an alternate action.
     *
     * This exception would not be used for internal system errors that do not
     * reflect user actions, but rather reflect a problem within the service that
     * the user cannot resolve.
     *
     * errorCode:    The numeric code indicating the type of error that occurred.
     *     must be one of the values of EDAMErrorCode.
     *
     * parameter:    If the error applied to a particular input parameter, this will
     *     indicate which parameter.
     */
    class EDAMUserException extends Thrift.TException {
        errorCode: EDAMErrorCode;
        parameter: string;

        constructor(args?: { errorCode: EDAMErrorCode; parameter?: string; });
    }

    /**
     * This exception is thrown by EDAM procedures when a call fails as a result of
     * a problem in the service that could not be changed through caller action.
     *
     * errorCode:    The numeric code indicating the type of error that occurred.
     *     must be one of the values of EDAMErrorCode.
     *
     * message:    This may contain additional information about the error
     *
     * rateLimitDuration:    Indicates the minimum number of seconds that an application should
     *     expect subsequent API calls for this user to fail. The application should not retry
     *     API requests for the user until at least this many seconds have passed. Present only
     *     when errorCode is RATE_LIMIT_REACHED,
     */
    class EDAMSystemException extends Thrift.TException {
        errorCode: EDAMErrorCode;
        message: string;
        rateLimitDuration: number;

        constructor(args?: { errorCode: EDAMErrorCode; message?: string; rateLimitDuration?: number; });
    }

    /**
     * This exception is thrown by EDAM procedures when a caller asks to perform
     * an operation on an object that does not exist.    This may be thrown based on an invalid
     * primary identifier (e.g. a bad GUID), or when the caller refers to an object
     * by another unique identifier (e.g. a User's email address).
     *
     * identifier:    A description of the object that was not found on the server.
     *     For example, "Note.notebookGuid" when a caller attempts to create a note in a
     *     notebook that does not exist in the user's account.
     *
     * key:    The value passed from the client in the identifier, which was not
     *     found. For example, the GUID that was not found.
     */
    class EDAMNotFoundException extends Thrift.TException {
        identifier: string;
        key: string;

        constructor(args?: { identifier?: string; key?: string; });
    }
    /**
     * Minimum length of any string-based attribute, in Unicode chars
     */
    var EDAM_ATTRIBUTE_LEN_MIN: number;

    /**
     * Maximum length of any string-based attribute, in Unicode chars
     */
    var EDAM_ATTRIBUTE_LEN_MAX: number;

    /**
     * Any string-based attribute must match the provided regular expression.
     * This excludes all Unicode line endings and control characters.
     */
    var EDAM_ATTRIBUTE_REGEX: string;

    /**
     * The maximum number of values that can be stored in a list-based attribute
     * (e.g. see UserAttributes.recentMailedAddresses)
     */
    var EDAM_ATTRIBUTE_LIST_MAX: number;

    /**
     * The maximum number of entries that can be stored in a map-based attribute
     * such as applicationData fields in Resources and Notes.
     */
    var EDAM_ATTRIBUTE_MAP_MAX: number;

    /**
     * The minimum length of a GUID generated by the Evernote service
     */
    var EDAM_GUID_LEN_MIN: number;

    /**
     * The maximum length of a GUID generated by the Evernote service
     */
    var EDAM_GUID_LEN_MAX: number;

    /**
     * GUIDs generated by the Evernote service will match the provided pattern
     */
    var EDAM_GUID_REGEX: string;

    /**
     * The minimum length of any email address
     */
    var EDAM_EMAIL_LEN_MIN: number;

    /**
     * The maximum length of any email address
     */
    var EDAM_EMAIL_LEN_MAX: number;

    /**
     * A regular expression that matches the part of an email address before
     * the '@' symbol.
     */
    var EDAM_EMAIL_LOCAL_REGEX: string;

    /**
     * A regular expression that matches the part of an email address after
     * the '@' symbol.
     */
    var EDAM_EMAIL_DOMAIN_REGEX: string;

    /**
     * A regular expression that must match any email address given to Evernote.
     * Email addresses must comply with RFC 2821 and 2822.
     */
    var EDAM_EMAIL_REGEX: string;

    /**
     * A regular expression that must match any VAT ID given to Evernote.
     * ref http://en.wikipedia.org/wiki/VAT_identification_number
     * ref http://my.safaribooksonline.com/book/programming/regular-expressions/9780596802837/4dot-validation-and-formatting/id2995136
     */
    var EDAM_VAT_REGEX: string;

    /**
     * The minimum length of a timezone specification string
     */
    var EDAM_TIMEZONE_LEN_MIN: number;

    /**
     * The maximum length of a timezone specification string
     */
    var EDAM_TIMEZONE_LEN_MAX: number;

    /**
     * Any timezone string given to Evernote must match the provided pattern.
     * This permits either a locale-based standard timezone or a GMT offset.
     * E.g.:<ul>
     *        <li>America/Los_Angeles</li>
     *        <li>GMT+08:00</li>
     * </ul>
     */
    var EDAM_TIMEZONE_REGEX: string;

    /**
     * The minimum length of any MIME type string given to Evernote
     */
    var EDAM_MIME_LEN_MIN: number;

    /**
     * The maximum length of any MIME type string given to Evernote
     */
    var EDAM_MIME_LEN_MAX: number;

    /**
     * Any MIME type string given to Evernote must match the provided pattern.
     * E.g.:    image/gif
     */
    var EDAM_MIME_REGEX: string;

    /**
     * Canonical MIME type string for GIF image resources
     */
    var EDAM_MIME_TYPE_GIF: string;

    /**
     * Canonical MIME type string for JPEG image resources
     */
    var EDAM_MIME_TYPE_JPEG: string;

    /**
     * Canonical MIME type string for PNG image resources
     */
    var EDAM_MIME_TYPE_PNG: string;

    /**
     * Canonical MIME type string for WAV audio resources
     */
    var EDAM_MIME_TYPE_WAV: string;

    /**
     * Canonical MIME type string for MP3 audio resources
     */
    var EDAM_MIME_TYPE_MP3: string;

    /**
     * Canonical MIME type string for AMR audio resources
     */
    var EDAM_MIME_TYPE_AMR: string;

    /**
     * Canonical MIME type string for AAC audio resources
     */
    var EDAM_MIME_TYPE_AAC: string;

    /**
     * Canonical MIME type string for MP4 audio resources
     */
    var EDAM_MIME_TYPE_M4A: string;

    /**
     * Canonical MIME type string for MP4 video resources
     */
    var EDAM_MIME_TYPE_MP4_VIDEO: string;

    /**
     * Canonical MIME type string for Evernote Ink resources
     */
    var EDAM_MIME_TYPE_INK: string;

    /**
     * Canonical MIME type string for PDF resources
     */
    var EDAM_MIME_TYPE_PDF: string;

    /**
     * MIME type used for attachments of an unspecified type
     */
    var EDAM_MIME_TYPE_DEFAULT: string;

    /**
     * The set of resource MIME types that are expected to be handled
     * correctly by all of the major Evernote client applications.
     */
    var EDAM_MIME_TYPES: string[];

    /**
     * The set of MIME types that Evernote will parse and index for
     * searching. With exception of images, and PDFs, which are
     * handled in a different way.
     */
    var EDAM_INDEXABLE_RESOURCE_MIME_TYPES: string[];

    /**
     * The minimum length of a user search query string in Unicode chars
     */
    var EDAM_SEARCH_QUERY_LEN_MIN: number;

    /**
     * The maximum length of a user search query string in Unicode chars
     */
    var EDAM_SEARCH_QUERY_LEN_MAX: number;

    /**
     * Search queries must match the provided pattern.    This is used for
     * both ad-hoc queries and SavedSearch.query fields.
     * This excludes all control characters and line/paragraph separators.
     */
    var EDAM_SEARCH_QUERY_REGEX: string;

    /**
     * The exact length of a MD5 hash checksum, in binary bytes.
     * This is the exact length that must be matched for any binary hash
     * value.
     */
    var EDAM_HASH_LEN: number;

    /**
     * The minimum length of an Evernote username
     */
    var EDAM_USER_USERNAME_LEN_MIN: number;

    /**
     * The maximum length of an Evernote username
     */
    var EDAM_USER_USERNAME_LEN_MAX: number;

    /**
     * Any Evernote User.username field must match this pattern.    This
     * restricts usernames to a format that could permit use as a domain
     * name component.    E.g. "username.whatever.evernote.com"
     */
    var EDAM_USER_USERNAME_REGEX: string;

    /**
     * Minimum length of the User.name field
     */
    var EDAM_USER_NAME_LEN_MIN: number;

    /**
     * Maximum length of the User.name field
     */
    var EDAM_USER_NAME_LEN_MAX: number;

    /**
     * The User.name field must match this pattern, which excludes line
     * endings and control characters.
     */
    var EDAM_USER_NAME_REGEX: string;

    /**
     * The minimum length of a Tag.name, in Unicode characters
     */
    var EDAM_TAG_NAME_LEN_MIN: number;

    /**
     * The maximum length of a Tag.name, in Unicode characters
     */
    var EDAM_TAG_NAME_LEN_MAX: number;

    /**
     * All Tag.name fields must match this pattern.
     * This excludes control chars, commas or line/paragraph separators.
     * The string may not begin or end with whitespace.
     */
    var EDAM_TAG_NAME_REGEX: string;

    /**
     * The minimum length of a Note.title, in Unicode characters
     */
    var EDAM_NOTE_TITLE_LEN_MIN: number;

    /**
     * The maximum length of a Note.title, in Unicode characters
     */
    var EDAM_NOTE_TITLE_LEN_MAX: number;

    /**
     * All Note.title fields must match this pattern.
     * This excludes control chars or line/paragraph separators.
     * The string may not begin or end with whitespace.
     */
    var EDAM_NOTE_TITLE_REGEX: string;

    /**
     * Minimum length of a Note.content field.
     * Note.content fields must comply with the ENML DTD.
     */
    var EDAM_NOTE_CONTENT_LEN_MIN: number;

    /**
     * Maximum length of a Note.content field
     * Note.content fields must comply with the ENML DTD.
     */
    var EDAM_NOTE_CONTENT_LEN_MAX: number;

    /**
     * Minimum length of an application name, which is the key in an
     * applicationData LazyMap found in entities such as Resources and
     * Notes.
     */
    var EDAM_APPLICATIONDATA_NAME_LEN_MIN: number;

    /**
     * Maximum length of an application name, which is the key in an
     * applicationData LazyMap found in entities such as Resources and
     * Notes.
     */
    var EDAM_APPLICATIONDATA_NAME_LEN_MAX: number;

    /**
     * Minimum length of an applicationData value in a LazyMap, found
     * in entities such as Resources and Notes.
     */
    var EDAM_APPLICATIONDATA_VALUE_LEN_MIN: number;

    /**
     * Maximum length of an applicationData value in a LazyMap, found
     * in entities such as Resources and Notes.    Note, however, that
     * the sum of the size of hte key and value is constrained by
     * EDAM_APPLICATIONDATA_ENTRY_LEN_MAX, so the maximum length, in
     * practice, depends upon the key value being used.
     */
    var EDAM_APPLICATIONDATA_VALUE_LEN_MAX: number;

    /**
     * The total length of an entry in an applicationData LazyMap, which
     * is the sum of the length of the key and the value for the entry.
     */
    var EDAM_APPLICATIONDATA_ENTRY_LEN_MAX: number;

    /**
     * An application name must match this regex.    An application
     * name is the key portion of an entry in an applicationData
     * map as found in entities such as Resources and Notes.
     * Note that even if both the name and value regexes match,
     * it is still necessary to check the sum of the lengths
     * against EDAM_APPLICATIONDATA_ENTRY_LEN_MAX.
     */
    var EDAM_APPLICATIONDATA_NAME_REGEX: string;

    /**
     * An applicationData map value must match this regex.
     * Note that even if both the name and value regexes match,
     * it is still necessary to check the sum of the lengths
     * against EDAM_APPLICATIONDATA_ENTRY_LEN_MAX.
     */
    var EDAM_APPLICATIONDATA_VALUE_REGEX: string;

    /**
     * The minimum length of a Notebook.name, in Unicode characters
     */
    var EDAM_NOTEBOOK_NAME_LEN_MIN: number;

    /**
     * The maximum length of a Notebook.name, in Unicode characters
     */
    var EDAM_NOTEBOOK_NAME_LEN_MAX: number;

    /**
     * All Notebook.name fields must match this pattern.
     * This excludes control chars or line/paragraph separators.
     * The string may not begin or end with whitespace.
     */
    var EDAM_NOTEBOOK_NAME_REGEX: string;

    /**
     * The minimum length of a Notebook.stack, in Unicode characters
     */
    var EDAM_NOTEBOOK_STACK_LEN_MIN: number;

    /**
     * The maximum length of a Notebook.stack, in Unicode characters
     */
    var EDAM_NOTEBOOK_STACK_LEN_MAX: number;

    /**
     * All Notebook.stack fields must match this pattern.
     * This excludes control chars or line/paragraph separators.
     * The string may not begin or end with whitespace.
     */
    var EDAM_NOTEBOOK_STACK_REGEX: string;

    /**
     * The minimum length of a public notebook URI component
     */
    var EDAM_PUBLISHING_URI_LEN_MIN: number;

    /**
     * The maximum length of a public notebook URI component
     */
    var EDAM_PUBLISHING_URI_LEN_MAX: number;

    /**
     * A public notebook URI component must match the provided pattern
     */
    var EDAM_PUBLISHING_URI_REGEX: string;

    /**
     * The set of strings that may not be used as a publishing URI
     */
    var EDAM_PUBLISHING_URI_PROHIBITED: string[];

    /**
     * The minimum length of a Publishing.publicDescription field.
     */
    var EDAM_PUBLISHING_DESCRIPTION_LEN_MIN: number;

    /**
     * The maximum length of a Publishing.publicDescription field.
     */
    var EDAM_PUBLISHING_DESCRIPTION_LEN_MAX: number;

    /**
     * Any public notebook's Publishing.publicDescription field must match
     * this pattern.
     * No control chars or line/paragraph separators, and can't start or
     * end with whitespace.
     */
    var EDAM_PUBLISHING_DESCRIPTION_REGEX: string;

    /**
     * The minimum length of a SavedSearch.name field
     */
    var EDAM_SAVED_SEARCH_NAME_LEN_MIN: number;

    /**
     * The maximum length of a SavedSearch.name field
     */
    var EDAM_SAVED_SEARCH_NAME_LEN_MAX: number;

    /**
     * SavedSearch.name fields must match this pattern.
     * No control chars or line/paragraph separators, and can't start or
     * end with whitespace.
     */
    var EDAM_SAVED_SEARCH_NAME_REGEX: string;

    /**
     * The minimum length of an Evernote user password
     */
    var EDAM_USER_PASSWORD_LEN_MIN: number;

    /**
     * The maximum length of an Evernote user password
     */
    var EDAM_USER_PASSWORD_LEN_MAX: number;

    /**
     * Evernote user passwords must match this regular expression
     */
    var EDAM_USER_PASSWORD_REGEX: string;

    /**
     * The maximum length of an Evernote Business URI
     */
    var EDAM_BUSINESS_URI_LEN_MAX: number;

    /**
     * The maximum number of Tags per Note
     */
    var EDAM_NOTE_TAGS_MAX: number;

    /**
     * The maximum number of Resources per Note
     */
    var EDAM_NOTE_RESOURCES_MAX: number;

    /**
     * Maximum number of Tags per account
     */
    var EDAM_USER_TAGS_MAX: number;

    /**
     * Maximum number of Tags per business account.
     */
    var EDAM_BUSINESS_TAGS_MAX: number;

    /**
     * Maximum number of SavedSearches per account
     */
    var EDAM_USER_SAVED_SEARCHES_MAX: number;

    /**
     * Maximum number of Notes per user
     */
    var EDAM_USER_NOTES_MAX: number;

    /**
     * Maximum number of Notes per business account
     */
    var EDAM_BUSINESS_NOTES_MAX: number;

    /**
     * Maximum number of Notebooks per user
     */
    var EDAM_USER_NOTEBOOKS_MAX: number;

    /**
     * Maximum number of Notebooks in a business account
     */
    var EDAM_BUSINESS_NOTEBOOKS_MAX: number;

    /**
     * Maximum number of recent email addresses that are maintained
     * (see UserAttributes.recentMailedAddresses)
     */
    var EDAM_USER_RECENT_MAILED_ADDRESSES_MAX: number;

    /**
     * The number of emails of any type that can be sent by a user with a Free
     * account from the service per day.    If an email is sent to two different
     * recipients, this counts as two emails.
     */
    var EDAM_USER_MAIL_LIMIT_DAILY_FREE: number;

    /**
     * The number of emails of any type that can be sent by a user with a Premium
     * account from the service per day.    If an email is sent to two different
     * recipients, this counts as two emails.
     */
    var EDAM_USER_MAIL_LIMIT_DAILY_PREMIUM: number;

    /**
     * The number of bytes of new data that may be uploaded to a Free user's
     * account each month.
     */
    var EDAM_USER_UPLOAD_LIMIT_FREE: number;

    /**
     * The number of bytes of new data that may be uploaded to a Premium user's
     * account each month.
     */
    var EDAM_USER_UPLOAD_LIMIT_PREMIUM: number;

    /**
     * The number of bytes of new data that may be uploaded to a Business user's
     * personal account each month. Note that content uploaded into the Business
     * notebooks by the user does not count against this limit.
     */
    var EDAM_USER_UPLOAD_LIMIT_BUSINESS: number;

    /**
     * Maximum total size of a Note that can be added to a Free account.
     * The size of a note is calculated as:
     * ENML content length (in Unicode characters) plus the sum of all resource
     * sizes (in bytes).
     */
    var EDAM_NOTE_SIZE_MAX_FREE: number;

    /**
     * Maximum total size of a Note that can be added to a Premium account.
     * The size of a note is calculated as:
     * ENML content length (in Unicode characters) plus the sum of all resource
     * sizes (in bytes).
     */
    var EDAM_NOTE_SIZE_MAX_PREMIUM: number;

    /**
     * Maximum size of a resource, in bytes, for Free accounts
     */
    var EDAM_RESOURCE_SIZE_MAX_FREE: number;

    /**
     * Maximum size of a resource, in bytes, for Premium accounts
     */
    var EDAM_RESOURCE_SIZE_MAX_PREMIUM: number;

    /**
     * Maximum number of linked notebooks per account, for a free
     * account.
     */
    var EDAM_USER_LINKED_NOTEBOOK_MAX: number;

    /**
     * Maximum number of linked notebooks per account, for a premium
     * account.    Users who are part of an active business are also
     * covered under "premium".
     */
    var EDAM_USER_LINKED_NOTEBOOK_MAX_PREMIUM: number;

    /**
     * Maximum number of shared notebooks per notebook
     */
    var EDAM_NOTEBOOK_SHARED_NOTEBOOK_MAX: number;

    /**
     * The minimum length of the content class attribute of a note.
     */
    var EDAM_NOTE_CONTENT_CLASS_LEN_MIN: number;

    /**
     * The maximum length of the content class attribute of a note.
     */
    var EDAM_NOTE_CONTENT_CLASS_LEN_MAX: number;

    /**
     * The regular expression that the content class of a note must match
     * to be valid.
     */
    var EDAM_NOTE_CONTENT_CLASS_REGEX: string;

    /**
     * The content class prefix used for all notes created by Evernote Hello.
     * This prefix can be used to assemble individual content class strings,
     * or can be used to create a wildcard search to get all notes created by
     * Hello. When performing a wildcard search via filtered sync chunks or
     * search strings, the * character must be appended to this constant.
     */
    var EDAM_HELLO_APP_CONTENT_CLASS_PREFIX: string;

    /**
     * The content class prefix used for all notes created by Evernote Food.
     * This prefix can be used to assemble individual content class strings,
     * or can be used to create a wildcard search to get all notes created by
     * Food. When performing a wildcard search via filtered sync chunks or
     * search strings, the * character must be appended to this constant.
     */
    var EDAM_FOOD_APP_CONTENT_CLASS_PREFIX: string;

    /**
     * The content class prefix used for structured notes created by Evernote
     * Hello that represents an encounter with a person. When performing a
     * wildcard search via filtered sync chunks or search strings, the *
     * character must be appended to this constant.
     */
    var EDAM_CONTENT_CLASS_HELLO_ENCOUNTER: string;

    /**
     * The content class prefix used for structured notes created by Evernote
     * Hello that represents the user's profile. When performing a
     * wildcard search via filtered sync chunks or search strings, the *
     * character must be appended to this constant.
     */
    var EDAM_CONTENT_CLASS_HELLO_PROFILE: string;

    /**
     * The content class prefix used for structured notes created by
     * Evernote Food that captures the experience of a particular meal.
     * When performing a wildcard search via filtered sync chunks or search
     * strings, the * character must be appended to this constant.
     */
    var EDAM_CONTENT_CLASS_FOOD_MEAL: string;

    /**
     * The content class prefix used for structured notes created by Evernote
     * Skitch. When performing a wildcard search via filtered sync chunks
     * or search strings, the * character must be appended to this constant.
     */
    var EDAM_CONTENT_CLASS_SKITCH_PREFIX: string;

    /**
     * The content class value used for structured image notes created by Evernote
     * Skitch.
     */
    var EDAM_CONTENT_CLASS_SKITCH: string;

    /**
     * The content class value used for structured PDF notes created by Evernote
     * Skitch.
     */
    var EDAM_CONTENT_CLASS_SKITCH_PDF: string;

    /**
     * The content class prefix used for structured notes created by Evernote
     * Penultimate. When performing a wildcard search via filtered sync chunks
     * or search strings, the * character must be appended to this constant.
     */
    var EDAM_CONTENT_CLASS_PENULTIMATE_PREFIX: string;

    /**
     * The content class value used for structured notes created by Evernote
     * Penultimate that represents a Penultimate notebook.
     */
    var EDAM_CONTENT_CLASS_PENULTIMATE_NOTEBOOK: string;

    /**
     * The minimum length of the plain text in a findRelated query, assuming that
     * plaintext is being provided.
     */
    var EDAM_RELATED_PLAINTEXT_LEN_MIN: number;

    /**
     * The maximum length of the plain text in a findRelated query, assuming that
     * plaintext is being provided.
     */
    var EDAM_RELATED_PLAINTEXT_LEN_MAX: number;

    /**
     * The maximum number of notes that will be returned from a findRelated()
     * query.
     */
    var EDAM_RELATED_MAX_NOTES: number;

    /**
     * The maximum number of notebooks that will be returned from a findRelated()
     * query.
     */
    var EDAM_RELATED_MAX_NOTEBOOKS: number;

    /**
     * The maximum number of tags that will be returned from a findRelated() query.
     */
    var EDAM_RELATED_MAX_TAGS: number;

    /**
     * The minimum length, in Unicode characters, of a description for a business
     * notebook.
     */
    var EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MIN: number;

    /**
     * The maximum length, in Unicode characters, of a description for a business
     * notebook.
     */
    var EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MAX: number;

    /**
     * All business notebook descriptions must match this pattern.
     * This excludes control chars or line/paragraph separators.
     * The string may not begin or end with whitespace.
     */
    var EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_REGEX: string;

    /**
     * The maximum length of a business phone number.
     */
    var EDAM_BUSINESS_PHONE_NUMBER_LEN_MAX: number;

    /**
     * Minimum length of a preference name
     */
    var EDAM_PREFERENCE_NAME_LEN_MIN: number;

    /**
     * Maximum length of a preference name
     */
    var EDAM_PREFERENCE_NAME_LEN_MAX: number;

    /**
     * Minimum length of a preference value
     */
    var EDAM_PREFERENCE_VALUE_LEN_MIN: number;

    /**
     * Maximum length of a preference value
     */
    var EDAM_PREFERENCE_VALUE_LEN_MAX: number;

    /**
     * Maximum number of name/value pairs allowed
     */
    var EDAM_MAX_PREFERENCES: number;

    /**
     * Maximum number of values per preference name
     */
    var EDAM_MAX_VALUES_PER_PREFERENCE: number;

    /**
     * A preference name must match this regex.
     */
    var EDAM_PREFERENCE_NAME_REGEX: string;

    /**
     * A preference value must match this regex.
     */
    var EDAM_PREFERENCE_VALUE_REGEX: string;

    /**
     * The name of the preferences entry that contains shortcuts.
     */
    var EDAM_PREFERENCE_SHORTCUTS: string;

    /**
     * The maximum number of shortcuts that a user may have.
     */
    var EDAM_PREFERENCE_SHORTCUTS_MAX_VALUES: number;

    /**
     * Maximum length of the device identifier string associated with long sessions.
     */
    var EDAM_DEVICE_ID_LEN_MAX: number;

    /**
     * Regular expression for device identifier strings associated with long sessions.
     */
    var EDAM_DEVICE_ID_REGEX: string;

    /**
     * Maximum length of the device description string associated with long sessions.
     */
    var EDAM_DEVICE_DESCRIPTION_LEN_MAX: number;

    /**
     * Regular expression for device description strings associated with long sessions.
     */
    var EDAM_DEVICE_DESCRIPTION_REGEX: string;

    /**
     * Maximum number of search suggestions that can be returned
     */
    var EDAM_SEARCH_SUGGESTIONS_MAX: number;

    /**
     * Maximum length of the search suggestion prefix
     */
    var EDAM_SEARCH_SUGGESTIONS_PREFIX_LEN_MAX: number;

    /**
     * Minimum length of the search suggestion prefix
     */
    var EDAM_SEARCH_SUGGESTIONS_PREFIX_LEN_MIN: number;
    class NoteStoreClient {
        seqid: number;

        /**
         * Asks the NoteStore to provide information about the status of the user
         * account corresponding to the provided authentication token.
         */
        getSyncState(cb: Callback<SyncState>): void;

        /**
         * Asks the NoteStore to provide information about the status of the user
         * account corresponding to the provided authentication token.
         * This version of 'getSyncState' allows the client to upload coarse-
         * grained usage metrics to the service.
         *
         * @param clientMetrics    see the documentation of the ClientUsageMetrics
         *     structure for an explanation of the fields that clients can pass to
         *     the service.
         */
        getSyncStateWithMetrics(clientMetrics: ClientUsageMetrics, cb: Callback<SyncState>): void;

        /**
         * Asks the NoteStore to provide the state of the account in order of
         * last modification.    This request retrieves one block of the server's
         * state so that a client can make several small requests against a large
         * account rather than getting the entire state in one big message.
         * This call gives fine-grained control of the data that will
         * be received by a client by omitting data elements that a client doesn't
         * need. This may reduce network traffic and sync times.
         *
         * @param afterUSN
         *     The client can pass this value to ask only for objects that
         *     have been updated after a certain point.    This allows the client to
         *     receive updates after its last checkpoint rather than doing a full
         *     synchronization on every pass.    The default value of "0" indicates
         *     that the client wants to get objects from the start of the account.
         *
         * @param maxEntries
         *     The maximum number of modified objects that should be
         *     returned in the result SyncChunk.    This can be used to limit the size
         *     of each individual message to be friendly for network transfer.
         *
         * @param filter
         *     The caller must set some of the flags in this structure to specify which
         *     data types should be returned during the synchronization.    See
         *     the SyncChunkFilter structure for information on each flag.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "afterUSN" - if negative
         *     </li>
         *     <li> BAD_DATA_FORMAT "maxEntries" - if less than 1
         *     </li>
         * </ul>
         */
        getFilteredSyncChunk(afterUSN: number, maxEntries: number, filter: SyncChunkFilter, cb: Callback<SyncState>): void;

        /**
         * Asks the NoteStore to provide information about the status of a linked
         * notebook that has been shared with the caller, or that is public to the
         * world.
         * This will return a result that is similar to getSyncState, but may omit
         * SyncState.uploaded if the caller doesn't have permission to write to
         * the linked notebook.
         *
         * This function must be called on the shard that owns the referenced
         * notebook.    (I.e. the shardId in /shard/shardId/edam/note must be the
         * same as LinkedNotebook.shardId.)
         *
         * @param authenticationToken
         *     This should be an authenticationToken for the guest who has received
         *     the invitation to the share.    (I.e. this should not be the result of
         *     NoteStore.authenticateToSharedNotebook)
         *
         * @param linkedNotebook
         *     This structure should contain identifying information and permissions
         *     to access the notebook in question.
         */
        getLinkedNotebookSyncState(linkedNotebook: LinkedNotebook, cb: Callback<SyncState>): void;

        /**
         * Asks the NoteStore to provide information about the contents of a linked
         * notebook that has been shared with the caller, or that is public to the
         * world.
         * This will return a result that is similar to getSyncChunk, but will only
         * contain entries that are visible to the caller.    I.e. only that particular
         * Notebook will be visible, along with its Notes, and Tags on those Notes.
         *
         * This function must be called on the shard that owns the referenced
         * notebook.    (I.e. the shardId in /shard/shardId/edam/note must be the
         * same as LinkedNotebook.shardId.)
         *
         * @param authenticationToken
         *     This should be an authenticationToken for the guest who has received
         *     the invitation to the share.    (I.e. this should not be the result of
         *     NoteStore.authenticateToSharedNotebook)
         *
         * @param linkedNotebook
         *     This structure should contain identifying information and permissions
         *     to access the notebook in question.    This must contain the valid fields
         *     for either a shared notebook (e.g. shareKey)
         *     or a public notebook (e.g. username, uri)
         *
         * @param afterUSN
         *     The client can pass this value to ask only for objects that
         *     have been updated after a certain point.    This allows the client to
         *     receive updates after its last checkpoint rather than doing a full
         *     synchronization on every pass.    The default value of "0" indicates
         *     that the client wants to get objects from the start of the account.
         *
         * @param maxEntries
         *     The maximum number of modified objects that should be
         *     returned in the result SyncChunk.    This can be used to limit the size
         *     of each individual message to be friendly for network transfer.
         *     Applications should not request more than 256 objects at a time,
         *     and must handle the case where the service returns less than the
         *     requested number of objects in a given request even though more
         *     objects are available on the service.
         *
         * @param fullSyncOnly
         *     If true, then the client only wants initial data for a full sync.
         *     In this case, the service will not return any expunged objects,
         *     and will not return any Resources, since these are also provided
         *     in their corresponding Notes.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "afterUSN" - if negative
         *     </li>
         *     <li> BAD_DATA_FORMAT "maxEntries" - if less than 1
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "LinkedNotebook" - if the provided information doesn't match any
         *         valid notebook
         *     </li>
         *     <li> "LinkedNotebook.uri" - if the provided public URI doesn't match any
         *         valid notebook
         *     </li>
         *     <li> "SharedNotebook.id" - if the provided information indicates a
         *            shared notebook that no longer exists
         *     </li>
         * </ul>
         */
        getLinkedNotebookSyncChunk(linkedNotebook: LinkedNotebook, afterUSN: number, maxEntries: number, fullSyncOnly: boolean, cb: Callback<SyncChunk>): void;

        /**
         * Returns a list of all of the notebooks in the account.
         */
        listNotebooks(cb: Callback<Notebook[]>): void;

        /**
         * Returns the current state of the notebook with the provided GUID.
         * The notebook may be active or deleted (but not expunged).
         *
         * @param guid
         *     The GUID of the notebook to be retrieved.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Notebook.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Notebook" - private notebook, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Notebook.guid" - tag not found, by GUID
         *     </li>
         * </ul>
         */
        getNotebook(guid: string, cb: Callback<Notebook>): void;

        /**
         * Returns the notebook that should be used to store new notes in the
         * user's account when no other notebooks are specified.
         */
        getDefaultNotebook(cb: Callback<Notebook>): void;

        /**
         * Asks the service to make a notebook with the provided name.
         *
         * @param notebook
         *     The desired fields for the notebook must be provided on this
         *     object.    The name of the notebook must be set, and either the 'active'
         *     or 'defaultNotebook' fields may be set by the client at creation.
         *     If a notebook exists in the account with the same name (via
         *     case-insensitive compare), this will throw an EDAMUserException.
         *
         * @return
         *     The newly created Notebook.    The server-side GUID will be
         *     saved in this object's 'guid' field.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Notebook.name" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "Notebook.stack" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "Publishing.uri" - if publishing set but bad uri
         *     </li>
         *     <li> BAD_DATA_FORMAT "Publishing.publicDescription" - if too long
         *     </li>
         *     <li> DATA_CONFLICT "Notebook.name" - name already in use
         *     </li>
         *     <li> DATA_CONFLICT "Publishing.uri" - if URI already in use
         *     </li>
         *     <li> DATA_REQUIRED "Publishing.uri" - if publishing set but uri missing
         *     </li>
         *     <li> LIMIT_REACHED "Notebook" - at max number of notebooks
         *     </li>
         * </ul>
         */
        createNotebook(notebook: Notebook, cb: Callback<Notebook>): void;

        /**
         * Submits notebook changes to the service.    The provided data must include
         * the notebook's guid field for identification.
         *
         * @param notebook
         *     The notebook object containing the requested changes.
         *
         * @return
         *     The Update Sequence Number for this change within the account.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Notebook.name" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "Notebook.stack" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "Publishing.uri" - if publishing set but bad uri
         *     </li>
         *     <li> BAD_DATA_FORMAT "Publishing.publicDescription" - if too long
         *     </li>
         *     <li> DATA_CONFLICT "Notebook.name" - name already in use
         *     </li>
         *     <li> DATA_CONFLICT "Publishing.uri" - if URI already in use
         *     </li>
         *     <li> DATA_REQUIRED "Publishing.uri" - if publishing set but uri missing
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Notebook.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        updateNotebook(notebook: Notebook, cb: Callback<number>): void;

        /**
         * Permanently removes the notebook from the user's account.
         * After this action, the notebook is no longer available for undeletion, etc.
         * If the notebook contains any Notes, they will be moved to the current
         * default notebook and moved into the trash (i.e. Note.active=false).
         * <p/>
         * NOTE: This function is generally not available to third party applications.
         * Calls will result in an EDAMUserException with the error code
         * PERMISSION_DENIED.
         *
         * @param guid
         *     The GUID of the notebook to delete.
         *
         * @return
         *     The Update Sequence Number for this change within the account.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Notebook.guid" - if the parameter is missing
         *     </li>
         *     <li> LIMIT_REACHED "Notebook" - trying to expunge the last Notebook
         *     </li>
         *     <li> PERMISSION_DENIED "Notebook" - private notebook, user doesn't own
         *     </li>
         * </ul>
         */
        expungeNotebook(guid: string, cb: Callback<number>): void;

        /**
         * Returns a list of the tags in the account.    Evernote does not support
         * the undeletion of tags, so this will only include active tags.
         */
        listTags(cb: Callback<Tag[]>): void;

        /**
         * Returns a list of the tags that are applied to at least one note within
         * the provided notebook.    If the notebook is public, the authenticationToken
         * may be ignored.
         *
         * @param notebookGuid
         *        the GUID of the notebook to use to find tags
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Notebook.guid" - notebook not found by GUID
         *     </li>
         * </ul>
         */
        listTagsByNotebook(notebookGuid: string, cb: Callback<Tag[]>): void;

        /**
         * Returns the current state of the Tag with the provided GUID.
         *
         * @param guid
         *     The GUID of the tag to be retrieved.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Tag.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Tag" - private Tag, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Tag.guid" - tag not found, by GUID
         *     </li>
         * </ul>
         */
        getTag(guid: string, cb: Callback<Tag>): void;

        /**
         * Asks the service to make a tag with a set of information.
         *
         * @param tag
         *     The desired list of fields for the tag are specified in this
         *     object.    The caller must specify the tag name, and may provide
         *     the parentGUID.
         *
         * @return
         *     The newly created Tag.    The server-side GUID will be
         *     saved in this object.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Tag.name" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "Tag.parentGuid" - malformed GUID
         *     </li>
         *     <li> DATA_CONFLICT "Tag.name" - name already in use
         *     </li>
         *     <li> LIMIT_REACHED "Tag" - at max number of tags
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Tag.parentGuid" - not found, by GUID
         *     </li>
         * </ul>
         */
        createTag(tag: Tag, cb: Callback<Tag>): void;

        /**
         * Submits tag changes to the service.    The provided data must include
         * the tag's guid field for identification.    The service will apply
         * updates to the following tag fields:    name, parentGuid
         *
         * @param tag
         *     The tag object containing the requested changes.
         *
         * @return
         *     The Update Sequence Number for this change within the account.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Tag.name" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "Tag.parentGuid" - malformed GUID
         *     </li>
         *     <li> DATA_CONFLICT "Tag.name" - name already in use
         *     </li>
         *     <li> DATA_CONFLICT "Tag.parentGuid" - can't set parent: circular
         *     </li>
         *     <li> PERMISSION_DENIED "Tag" - user doesn't own tag
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Tag.guid" - tag not found, by GUID
         *     </li>
         *     <li> "Tag.parentGuid" - parent not found, by GUID
         *     </li>
         * </ul>
         */
        updateTag(tag: Tag, cb: Callback<number>): void;

        /**
         * Removes the provided tag from every note that is currently tagged with
         * this tag.    If this operation is successful, the tag will still be in
         * the account, but it will not be tagged on any notes.
         *
         * This function is not indended for use by full synchronizing clients, since
         * it does not provide enough result information to the client to reconcile
         * the local state without performing a follow-up sync from the service.    This
         * is intended for "thin clients" that need to efficiently support this as
         * a UI operation.
         *
         * @param guid
         *     The GUID of the tag to remove from all notes.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Tag.guid" - if the guid parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Tag" - user doesn't own tag
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Tag.guid" - tag not found, by GUID
         *     </li>
         * </ul>
         */
        untagAll(guid: string, cb: Callback<void>): void;

        /**
         * Permanently deletes the tag with the provided GUID, if present.
         * <p/>
         * NOTE: This function is generally not available to third party applications.
         * Calls will result in an EDAMUserException with the error code
         * PERMISSION_DENIED.
         *
         * @param guid
         *     The GUID of the tag to delete.
         *
         * @return
         *     The Update Sequence Number for this change within the account.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Tag.guid" - if the guid parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Tag" - user doesn't own tag
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Tag.guid" - tag not found, by GUID
         *     </li>
         * </ul>
         */
        expungeTag(guid: string, cb: Callback<number>): void;

        /**
         * Returns a list of the searches in the account.    Evernote does not support
         * the undeletion of searches, so this will only include active searches.
         */
        listSearches(cb: Callback<SavedSearch[]>): void;

        /**
         * Returns the current state of the search with the provided GUID.
         *
         * @param guid
         *     The GUID of the search to be retrieved.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "SavedSearch.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "SavedSearch" - private Tag, user doesn't own
         *     </li>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "SavedSearch.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        getSearch(guid: string, cb: Callback<SavedSearch>): void;

        /**
         * Asks the service to make a saved search with a set of information.
         *
         * @param search
         *     The desired list of fields for the search are specified in this
         *     object. The caller must specify the name and query for the
         *     search, and may optionally specify a search scope.
         *     The SavedSearch.format field is ignored by the service.
         *
         * @return
         *     The newly created SavedSearch.    The server-side GUID will be
         *     saved in this object.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "SavedSearch.name" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "SavedSearch.query" - invalid length
         *     </li>
         *     <li> DATA_CONFLICT "SavedSearch.name" - name already in use
         *     </li>
         *     <li> LIMIT_REACHED "SavedSearch" - at max number of searches
         *     </li>
         * </ul>
         */
        createSearch(search: SavedSearch, cb: Callback<SavedSearch>): void;

        /**
         * Submits search changes to the service. The provided data must include
         * the search's guid field for identification. The service will apply
         * updates to the following search fields: name, query, and scope.
         *
         * @param search
         *     The search object containing the requested changes.
         *
         * @return
         *     The Update Sequence Number for this change within the account.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "SavedSearch.name" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "SavedSearch.query" - invalid length
         *     </li>
         *     <li> DATA_CONFLICT "SavedSearch.name" - name already in use
         *     </li>
         *     <li> PERMISSION_DENIED "SavedSearch" - user doesn't own tag
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "SavedSearch.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        updateSearch(search: SavedSearch, cb: Callback<number>): number;

        /**
         * Permanently deletes the saved search with the provided GUID, if present.
         * <p/>
         * NOTE: This function is generally not available to third party applications.
         * Calls will result in an EDAMUserException with the error code
         * PERMISSION_DENIED.
         *
         * @param guid
         *     The GUID of the search to delete.
         *
         * @return
         *     The Update Sequence Number for this change within the account.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "SavedSearch.guid" - if the guid parameter is empty
         *     </li>
         *     <li> PERMISSION_DENIED "SavedSearch" - user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "SavedSearch.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        expungeSearch(guid: string, cb: Callback<number>): void;

        /**
         * DEPRECATED. Use findNotesMetadata.
         */
        findNotes(filter: NoteFilter, offset: number, maxNotes: number, cb: Callback<NoteList>): void;

        /**
         * Finds the position of a note within a sorted subset of all of the user's
         * notes. This may be useful for thin clients that are displaying a paginated
         * listing of a large account, which need to know where a particular note
         * sits in the list without retrieving all notes first.
         *
         * @param authenticationToken
         *     Must be a valid token for the user's account unless the NoteFilter
         *     'notebookGuid' is the GUID of a public notebook.
         *
         * @param filter
         *     The list of criteria that will constrain the notes to be returned.
         *
         * @param guid
         *     The GUID of the note to be retrieved.
         *
         * @return
         *     If the note with the provided GUID is found within the matching note
         *     list, this will return the offset of that note within that list (where
         *     the first offset is 0).    If the note is not found within the set of
         *     notes, this will return -1.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "offset" - not between 0 and EDAM_USER_NOTES_MAX
         *     </li>
         *     <li> BAD_DATA_FORMAT "maxNotes" - not between 0 and EDAM_USER_NOTES_MAX
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.notebookGuid" - if malformed
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.tagGuids" - if any are malformed
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.words" - if search string too long
         *     </li>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Notebook.guid" - not found, by GUID
         *     </li>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        findNoteOffset(filter: NoteFilter, guid: string, cb: Callback<number>): void;

        /**
         * Used to find the high-level information about a set of the notes from a
         * user's account based on various criteria specified via a NoteFilter object.
         * <p/>
         * Web applications that wish to periodically check for new content in a user's
         * Evernote account should consider using webhooks instead of polling this API.
         * See http://dev.evernote.com/documentation/cloud/chapters/polling_notification.php
         * for more information.
         *
         * @param authenticationToken
         *     Must be a valid token for the user's account unless the NoteFilter
         *     'notebookGuid' is the GUID of a public notebook.
         *
         * @param filter
         *     The list of criteria that will constrain the notes to be returned.
         *
         * @param offset
         *     The numeric index of the first note to show within the sorted
         *     results.    The numbering scheme starts with "0".    This can be used for
         *     pagination.
         *
         * @param maxNotes
         *     The mximum notes to return in this query.    The service will return a set
         *     of notes that is no larger than this number, but may return fewer notes
         *     if needed.    The NoteList.totalNotes field in the return value will
         *     indicate whether there are more values available after the returned set.
         *
         * @param resultSpec
         *     This specifies which information should be returned for each matching
         *     Note. The fields on this structure can be used to eliminate data that
         *     the client doesn't need, which will reduce the time and bandwidth
         *     to receive and process the reply.
         *
         * @return
         *     The list of notes that match the criteria.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "offset" - not between 0 and EDAM_USER_NOTES_MAX
         *     </li>
         *     <li> BAD_DATA_FORMAT "maxNotes" - not between 0 and EDAM_USER_NOTES_MAX
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.notebookGuid" - if malformed
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.tagGuids" - if any are malformed
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.words" - if search string too long
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Notebook.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        findNotesMetadata(filter: NoteFilter, offset: number, maxNotes: number, resultSpec: NotesMetadataResultSpec, cb: Callback<NotesMetadataList>): void;

        /**
         * This function is used to determine how many notes are found for each
         * notebook and tag in the user's account, given a current set of filter
         * parameters that determine the current selection.    This function will
         * return a structure that gives the note count for each notebook and tag
         * that has at least one note under the requested filter.    Any notebook or
         * tag that has zero notes in the filtered set will not be listed in the
         * reply to this function (so they can be assumed to be 0).
         *
         * @param authenticationToken
         *     Must be a valid token for the user's account unless the NoteFilter
         *     'notebookGuid' is the GUID of a public notebook.
         *
         * @param filter
         *     The note selection filter that is currently being applied.    The note
         *     counts are to be calculated with this filter applied to the total set
         *     of notes in the user's account.
         *
         * @param withTrash
         *     If true, then the NoteCollectionCounts.trashCount will be calculated
         *     and supplied in the reply. Otherwise, the trash value will be omitted.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "NoteFilter.notebookGuid" - if malformed
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.notebookGuids" - if any are malformed
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.words" - if search string too long
         *     </li>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Notebook.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        findNoteCounts(filter: NoteFilter, withTrash: boolean, cb: Callback<NoteCollectionCounts>): void;

        /**
         * Returns the current state of the note in the service with the provided
         * GUID.    The ENML contents of the note will only be provided if the
         * 'withContent' parameter is true.    The service will include the meta-data
         * for each resource in the note, but the binary contents of the resources
         * and their recognition data will be omitted.
         * If the Note is found in a public notebook, the authenticationToken
         * will be ignored (so it could be an empty string).    The applicationData
         * fields are returned as keysOnly.
         *
         * @param guid
         *     The GUID of the note to be retrieved.
         *
         * @param withContent
         *     If true, the note will include the ENML contents of its
         *     'content' field.
         *
         * @param withResourcesData
         *     If true, any Resource elements in this Note will include the binary
         *     contents of their 'data' field's body.
         *
         * @param withResourcesRecognition
         *     If true, any Resource elements will include the binary contents of the
         *     'recognition' field's body if recognition data is present.
         *
         * @param withResourcesAlternateData
         *     If true, any Resource elements in this Note will include the binary
         *     contents of their 'alternateData' fields' body, if an alternate form
         *     is present.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Note.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - private note, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        getNote(guid: string, withContent: boolean, withResourcesData: boolean, withResourcesRecognition: boolean, withResourcesAlternateData: boolean, cb: Callback<Note>): void;

        /**
         * Get all of the application data for the note identified by GUID,
         * with values returned within the LazyMap fullMap field.
         * If there are no applicationData entries, then a LazyMap
         * with an empty fullMap will be returned. If your application
         * only needs to fetch its own applicationData entry, use
         * getNoteApplicationDataEntry instead.
         */
        getNoteApplicationData(guid: string, cb: Callback<LazyMap>): void;

        /**
         * Get the value of a single entry in the applicationData map
         * for the note identified by GUID.
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - note not found, by GUID</li>
         *     <li> "NoteAttributes.applicationData.key" - note not found, by key</li>
         * </ul>
         */
        getNoteApplicationDataEntry(guid: string, key: string, cb: Callback<string>): void;

        /**
         * Update, or create, an entry in the applicationData map for
         * the note identified by guid.
         */
        setNoteApplicationDataEntry(guid: string, key: string, value: string, cb: Callback<number>): void;

        /**
         * Remove an entry identified by 'key' from the applicationData map for
         * the note identified by 'guid'. Silently ignores an unset of a
         * non-existing key.
         */
        unsetNoteApplicationDataEntry(guid: string, key: string, cb: Callback<number>): void;

        /**
         * Returns XHTML contents of the note with the provided GUID.
         * If the Note is found in a public notebook, the authenticationToken
         * will be ignored (so it could be an empty string).
         *
         * @param guid
         *     The GUID of the note to be retrieved.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Note.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - private note, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        getNoteContent(guid: string, cb: Callback<string>): void;

        /**
         * Returns a block of the extracted plain text contents of the note with the
         * provided GUID.    This text can be indexed for search purposes by a light
         * client that doesn't have capabilities to extract all of the searchable
         * text content from the note and its resources.
         *
         * If the Note is found in a public notebook, the authenticationToken
         * will be ignored (so it could be an empty string).
         *
         * @param guid
         *     The GUID of the note to be retrieved.
         *
         * @param noteOnly
         *     If true, this will only return the text extracted from the ENML contents
         *     of the note itself.    If false, this will also include the extracted text
         *     from any text-bearing resources (PDF, recognized images)
         *
         * @param tokenizeForIndexing
         *     If true, this will break the text into cleanly separated and sanitized
         *     tokens.    If false, this will return the more raw text extraction, with
         *     its original punctuation, capitalization, spacing, etc.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Note.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - private note, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        getNoteSearchText(guid: string, noteOnly: boolean, tokenizeForIndexing: boolean, cb: Callback<string>): void;

        /**
         * Returns a block of the extracted plain text contents of the resource with
         * the provided GUID.    This text can be indexed for search purposes by a light
         * client that doesn't have capability to extract all of the searchable
         * text content from a resource.
         *
         * If the Resource is found in a public notebook, the authenticationToken
         * will be ignored (so it could be an empty string).
         *
         * @param guid
         *     The GUID of the resource to be retrieved.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Resource.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Resource" - private resource, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Resource.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        getResourceSearchText(guid: string, cb: Callback<string>): void;

        /**
         * Returns a list of the names of the tags for the note with the provided
         * guid.    This can be used with authentication to get the tags for a
         * user's own note, or can be used without valid authentication to retrieve
         * the names of the tags for a note in a public notebook.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Note.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - private note, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        getNoteTagNames(guid: string, cb: Callback<string[]>): void;

        /**
         * Asks the service to make a note with the provided set of information.
         *
         * @param note
         *     A Note object containing the desired fields to be populated on
         *     the service.
         *
         * @return
         *     The newly created Note from the service.    The server-side
         *     GUIDs for the Note and any Resources will be saved in this object.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Note.title" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "Note.content" - invalid length for ENML content
         *     </li>
         *     <li> BAD_DATA_FORMAT "Resource.mime" - invalid resource MIME type
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteAttributes.*" - bad resource string
         *     </li>
         *     <li> BAD_DATA_FORMAT "ResourceAttributes.*" - bad resource string
         *     </li>
         *     <li> DATA_CONFLICT "Note.deleted" - deleted time set on active note
         *     </li>
         *     <li> DATA_REQUIRED "Resource.data" - resource data body missing
         *     </li>
         *     <li> ENML_VALIDATION "*" - note content doesn't validate against DTD
         *     </li>
         *     <li> LIMIT_REACHED "Note" - at max number per account
         *     </li>
         *     <li> LIMIT_REACHED "Note.size" - total note size too large
         *     </li>
         *     <li> LIMIT_REACHED "Note.resources" - too many resources on Note
         *     </li>
         *     <li> LIMIT_REACHED "Note.tagGuids" - too many Tags on Note
         *     </li>
         *     <li> LIMIT_REACHED "Resource.data.size" - resource too large
         *     </li>
         *     <li> LIMIT_REACHED "NoteAttribute.*" - attribute string too long
         *     </li>
         *     <li> LIMIT_REACHED "ResourceAttribute.*" - attribute string too long
         *     </li>
         *     <li> PERMISSION_DENIED "Note.notebookGuid" - NB not owned by user
         *     </li>
         *     <li> QUOTA_REACHED "Accounting.uploadLimit" - note exceeds upload quota
         *     </li>
         *     <li> BAD_DATA_FORMAT "Tag.name" - Note.tagNames was provided, and one
         *         of the specified tags had an invalid length or pattern
         *     </li>
         *     <li> LIMIT_REACHED "Tag" - Note.tagNames was provided, and the required
         *         new tags would exceed the maximum number per account
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.notebookGuid" - not found, by GUID
         *     </li>
         * </ul>
         */
        createNote(note: Note, cb: Callback<Note>): void;

        /**
         * Submit a set of changes to a note to the service.    The provided data
         * must include the note's guid field for identification. The note's
         * title must also be set.
         *
         * @param note
         *     A Note object containing the desired fields to be populated on
         *     the service. With the exception of the note's title and guid, fields
         *     that are not being changed do not need to be set. If the content is not
         *     being modified, note.content should be left unset. If the list of
         *     resources is not being modified, note.resources should be left unset.
         *
         * @return
         *     The metadata (no contents) for the Note on the server after the update
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Note.title" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "Note.content" - invalid length for ENML body
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteAttributes.*" - bad resource string
         *     </li>
         *     <li> BAD_DATA_FORMAT "ResourceAttributes.*" - bad resource string
         *     </li>
         *     <li> BAD_DATA_FORMAT "Resource.mime" - invalid resource MIME type
         *     </li>
         *     <li> DATA_CONFLICT "Note.deleted" - deleted time set on active note
         *     </li>
         *     <li> DATA_REQUIRED "Resource.data" - resource data body missing
         *     </li>
         *     <li> ENML_VALIDATION "*" - note content doesn't validate against DTD
         *     </li>
         *     <li> LIMIT_REACHED "Note.tagGuids" - too many Tags on Note
         *     </li>
         *     <li> LIMIT_REACHED "Note.resources" - too many resources on Note
         *     </li>
         *     <li> LIMIT_REACHED "Note.size" - total note size too large
         *     </li>
         *     <li> LIMIT_REACHED "Resource.data.size" - resource too large
         *     </li>
         *     <li> LIMIT_REACHED "NoteAttribute.*" - attribute string too long
         *     </li>
         *     <li> LIMIT_REACHED "ResourceAttribute.*" - attribute string too long
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - user doesn't own
         *     </li>
         *     <li> PERMISSION_DENIED "Note.notebookGuid" - user doesn't own destination
         *     </li>
         *     <li> QUOTA_REACHED "Accounting.uploadLimit" - note exceeds upload quota
         *     </li>
         *     <li> BAD_DATA_FORMAT "Tag.name" - Note.tagNames was provided, and one
         *         of the specified tags had an invalid length or pattern
         *     </li>
         *     <li> LIMIT_REACHED "Tag" - Note.tagNames was provided, and the required
         *         new tags would exceed the maximum number per account
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - note not found, by GUID
         *     </li>
         *     <li> "Note.notebookGuid" - if notebookGuid provided, but not found
         *     </li>
         * </ul>
         */
        updateNote(note: Note, cb: Callback<Note>): void;

        /**
         * Moves the note into the trash. The note may still be undeleted, unless it
         * is expunged.    This is equivalent to calling updateNote() after setting
         * Note.active = false
         *
         * @param guid
         *     The GUID of the note to delete.
         *
         * @return
         *     The Update Sequence Number for this change within the account.
         *
         * @throws EDAMUserException <ul>
         *     <li> PERMISSION_DENIED "Note" - user doesn't have permission to
         *                    update the note.
         *     </li>
         * </ul>
         *
         * @throws EDAMUserException <ul>
         *     <li> DATA_CONFLICT "Note.guid" - the note is already deleted
         *     </li>
         * </ul>
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        deleteNote(guid: string, cb: Callback<number>): void;

        /**
         * Permanently removes a Note, and all of its Resources,
         * from the service.
         * <p/>
         * NOTE: This function is not available to third party applications.
         * Calls will result in an EDAMUserException with the error code
         * PERMISSION_DENIED.
         *
         * @param guid
         *     The GUID of the note to delete.
         *
         * @return
         *     The Update Sequence Number for this change within the account.
         *
         * @throws EDAMUserException <ul>
         *     <li> PERMISSION_DENIED "Note" - user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        expungeNote(guid: string, cb: Callback<number>): void;

        /**
         * Permanently removes a list of Notes, and all of their Resources, from
         * the service.    This should be invoked with a small number of Note GUIDs
         * (e.g. 100 or less) on each call.    To expunge a larger number of notes,
         * call this method multiple times.    This should also be used to reduce the
         * number of Notes in a notebook before calling expungeNotebook() or
         * in the trash before calling expungeInactiveNotes(), since these calls may
         * be prohibitively slow if there are more than a few hundred notes.
         * If an exception is thrown for any of the GUIDs, then none of the notes
         * will be deleted.    I.e. this call can be treated as an atomic transaction.
         * <p/>
         * NOTE: This function is not available to third party applications.
         * Calls will result in an EDAMUserException with the error code
         * PERMISSION_DENIED.
         *
         * @param noteGuids
         *     The list of GUIDs for the Notes to remove.
         *
         * @return
         *     The account's updateCount at the end of this operation
         *
         * @throws EDAMUserException <ul>
         *     <li> PERMISSION_DENIED "Note" - user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        expungeNotes(noteGuids: string[], cb: Callback<number>): void;

        /**
         * Permanently removes all of the Notes that are currently marked as
         * inactive.    This is equivalent to "emptying the trash", and these Notes
         * will be gone permanently.
         * <p/>
         * This operation may be relatively slow if the account contains a large
         * number of inactive Notes.
         * <p/>
         * NOTE: This function is not available to third party applications.
         * Calls will result in an EDAMUserException with the error code
         * PERMISSION_DENIED.
         *
         * @return
         *        The number of notes that were expunged.
         */
        expungeInactiveNotes(cb: Callback<number>): void;

        /**
         * Performs a deep copy of the Note with the provided GUID 'noteGuid' into
         * the Notebook with the provided GUID 'toNotebookGuid'.
         * The caller must be the owner of both the Note and the Notebook.
         * This creates a new Note in the destination Notebook with new content and
         * Resources that match all of the content and Resources from the original
         * Note, but with new GUID identifiers.
         * The original Note is not modified by this operation.
         * The copied note is considered as an "upload" for the purpose of upload
         * transfer limit calculation, so its size is added to the upload count for
         * the owner.
         *
         * @param noteGuid
         *     The GUID of the Note to copy.
         *
         * @param toNotebookGuid
         *     The GUID of the Notebook that should receive the new Note.
         *
         * @return
         *     The metadata for the new Note that was created.    This will include the
         *     new GUID for this Note (and any copied Resources), but will not include
         *     the content body or the binary bodies of any Resources.
         *
         * @throws EDAMUserException <ul>
         *     <li> LIMIT_REACHED "Note" - at max number per account
         *     </li>
         *     <li> PERMISSION_DENIED "Notebook.guid" - destination not owned by user
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - user doesn't own
         *     </li>
         *     <li> QUOTA_REACHED "Accounting.uploadLimit" - note exceeds upload quota
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Notebook.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        copyNote(noteGuid: string, toNotebookGuid: string, cb: Callback<Note>): void;

        /**
         * Returns a list of the prior versions of a particular note that are
         * saved within the service.    These prior versions are stored to provide a
         * recovery from unintentional removal of content from a note. The identifiers
         * that are returned by this call can be used with getNoteVersion to retrieve
         * the previous note.
         * The identifiers will be listed from the most recent versions to the oldest.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Note.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - private note, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        listNoteVersions(noteGuid: string, cb: Callback<NoteVersionId[]>): void;

        /**
         * This can be used to retrieve a previous version of a Note after it has been
         * updated within the service.    The caller must identify the note (via its
         * guid) and the version (via the updateSequenceNumber of that version).
         * to find a listing of the stored version USNs for a note, call
         * listNoteVersions.
         * This call is only available for notes in Premium accounts.    (I.e. access
         * to past versions of Notes is a Premium-only feature.)
         *
         * @param noteGuid
         *     The GUID of the note to be retrieved.
         *
         * @param updateSequenceNum
         *     The USN of the version of the note that is being retrieved
         *
         * @param withResourcesData
         *     If true, any Resource elements in this Note will include the binary
         *     contents of their 'data' field's body.
         *
         * @param withResourcesRecognition
         *     If true, any Resource elements will include the binary contents of the
         *     'recognition' field's body if recognition data is present.
         *
         * @param withResourcesAlternateData
         *     If true, any Resource elements in this Note will include the binary
         *     contents of their 'alternateData' fields' body, if an alternate form
         *     is present.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Note.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - private note, user doesn't own
         *     </li>
         *     <li> PERMISSION_DENIED "updateSequenceNum" -
         *         The account isn't permitted to access previous versions of notes.
         *         (i.e. this is a Free account.)
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         *     <li> "Note.updateSequenceNumber" - the Note doesn't have a version with
         *            the corresponding USN.
         *     </li>
         * </ul>
         */
        getNoteVersion(noteGuid: string, updateSequenceNum: number, withResourcesData: boolean, withResourcesRecognition: boolean, withResourcesAlternateData: boolean, cb: Callback<Note>): void;

        /**
         * Returns the current state of the resource in the service with the
         * provided GUID.
         * If the Resource is found in a public notebook, the authenticationToken
         * will be ignored (so it could be an empty string).    Only the
         * keys for the applicationData will be returned.
         *
         * @param guid
         *     The GUID of the resource to be retrieved.
         *
         * @param withData
         *     If true, the Resource will include the binary contents of the
         *     'data' field's body.
         *
         * @param withRecognition
         *     If true, the Resource will include the binary contents of the
         *     'recognition' field's body if recognition data is present.
         *
         * @param withAttributes
         *     If true, the Resource will include the attributes
         *
         * @param withAlternateData
         *     If true, the Resource will include the binary contents of the
         *     'alternateData' field's body, if an alternate form is present.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Resource.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Resource" - private resource, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Resource.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        getResource(guid: string, withData: boolean, withRecognition: boolean, withAttributes: boolean, withAlternateData: boolean, cb: Callback<Resource>): void;

        /**
         * Get all of the application data for the Resource identified by GUID,
         * with values returned within the LazyMap fullMap field.
         * If there are no applicationData entries, then a LazyMap
         * with an empty fullMap will be returned. If your application
         * only needs to fetch its own applicationData entry, use
         * getResourceApplicationDataEntry instead.
         */
        getResourceApplicationData(guid: string, cb: Callback<LazyMap>): void;

        /**
         * Get the value of a single entry in the applicationData map
         * for the Resource identified by GUID.
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Resource.guid" - Resource not found, by GUID</li>
         *     <li> "ResourceAttributes.applicationData.key" - Resource not found, by key</li>
         * </ul>
         */
        getResourceApplicationDataEntry(guid: string, key: string, cb: Callback<string>): void;

        /**
         * Update, or create, an entry in the applicationData map for
         * the Resource identified by guid.
         */
        setResourceApplicationDataEntry(guid: string, key: string, value: string, cb: Callback<number>): void;

        /**
         * Remove an entry identified by 'key' from the applicationData map for
         * the Resource identified by 'guid'.
         */
        unsetResourceApplicationDataEntry(guid: string, key: string, cb: Callback<number>): void;

        /**
         * Submit a set of changes to a resource to the service.    This can be used
         * to update the meta-data about the resource, but cannot be used to change
         * the binary contents of the resource (including the length and hash).    These
         * cannot be changed directly without creating a new resource and removing the
         * old one via updateNote.
         *
         * @param resource
         *     A Resource object containing the desired fields to be populated on
         *     the service.    The service will attempt to update the resource with the
         *     following fields from the client:
         *     <ul>
         *            <li>guid:    must be provided to identify the resource
         *            </li>
         *            <li>mime
         *            </li>
         *            <li>width
         *            </li>
         *            <li>height
         *            </li>
         *            <li>duration
         *            </li>
         *            <li>attributes:    optional.    if present, the set of attributes will
         *                     be replaced.
         *            </li>
         *     </ul>
         *
         * @return
         *     The Update Sequence Number of the resource after the changes have been
         *     applied.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Resource.guid" - if the parameter is missing
         *     </li>
         *     <li> BAD_DATA_FORMAT "Resource.mime" - invalid resource MIME type
         *     </li>
         *     <li> BAD_DATA_FORMAT "ResourceAttributes.*" - bad resource string
         *     </li>
         *     <li> LIMIT_REACHED "ResourceAttribute.*" - attribute string too long
         *     </li>
         *     <li> PERMISSION_DENIED "Resource" - private resource, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Resource.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        updateResource(resource: Resource, cb: Callback<number>): void;

        /**
         * Returns binary data of the resource with the provided GUID.    For
         * example, if this were an image resource, this would contain the
         * raw bits of the image.
         * If the Resource is found in a public notebook, the authenticationToken
         * will be ignored (so it could be an empty string).
         *
         * @param guid
         *     The GUID of the resource to be retrieved.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Resource.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Resource" - private resource, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Resource.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        getResourceData(guid: string, cb: Callback<string>): void;

        /**
         * Returns the current state of a resource, referenced by containing
         * note GUID and resource content hash.
         *
         * @param noteGuid
         *     The GUID of the note that holds the resource to be retrieved.
         *
         * @param contentHash
         *     The MD5 checksum of the resource within that note. Note that
         *     this is the binary checksum, for example from Resource.data.bodyHash,
         *     and not the hex-encoded checksum that is used within an en-media
         *     tag in a note body.
         *
         * @param withData
         *     If true, the Resource will include the binary contents of the
         *     'data' field's body.
         *
         * @param withRecognition
         *     If true, the Resource will include the binary contents of the
         *     'recognition' field's body.
         *
         * @param withAlternateData
         *     If true, the Resource will include the binary contents of the
         *     'alternateData' field's body, if an alternate form is present.
         *
         * @throws EDAMUserException <ul>
         *     <li> DATA_REQUIRED "Note.guid" - noteGuid param missing
         *     </li>
         *     <li> DATA_REQUIRED "Note.contentHash" - contentHash param missing
         *     </li>
         *     <li> PERMISSION_DENIED "Resource" - private resource, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note" - not found, by guid
         *     </li>
         *     <li> "Resource" - not found, by hash
         *     </li>
         * </ul>
         */
        getResourceByHash(noteGuid: string, contentHash: string, withData: boolean, withRecognition: boolean, withAlternateData: boolean, cb: Callback<Resource>): void;

        /**
         * Returns the binary contents of the recognition index for the resource
         * with the provided GUID.    If the caller asks about a resource that has
         * no recognition data, this will throw EDAMNotFoundException.
         * If the Resource is found in a public notebook, the authenticationToken
         * will be ignored (so it could be an empty string).
         *
         * @param guid
         *     The GUID of the resource whose recognition data should be retrieved.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Resource.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Resource" - private resource, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Resource.guid" - not found, by GUID
         *     </li>
         *     <li> "Resource.recognition" - resource has no recognition
         *     </li>
         * </ul>
         */
        getResourceRecognition(guid: string, cb: Callback<string>): void;

        /**
         * If the Resource with the provided GUID has an alternate data representation
         * (indicated via the Resource.alternateData field), then this request can
         * be used to retrieve the binary contents of that alternate data file.
         * If the caller asks about a resource that has no alternate data form, this
         * will throw EDAMNotFoundException.
         *
         * @param guid
         *        The GUID of the resource whose recognition data should be retrieved.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Resource.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Resource" - private resource, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Resource.guid" - not found, by GUID
         *     </li>
         *     <li> "Resource.alternateData" - resource has no recognition
         *     </li>
         * </ul>
         */
        getResourceAlternateData(guid: string, cb: Callback<string>): void;

        /**
         * Returns the set of attributes for the Resource with the provided GUID.
         * If the Resource is found in a public notebook, the authenticationToken
         * will be ignored (so it could be an empty string).
         *
         * @param guid
         *     The GUID of the resource whose attributes should be retrieved.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Resource.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Resource" - private resource, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Resource.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        getResourceAttributes(guid: string, cb: Callback<ResourceAttributes>): void;

        /**
         * <p>
         * Looks for a user account with the provided userId on this NoteStore
         * shard and determines whether that account contains a public notebook
         * with the given URI.    If the account is not found, or no public notebook
         * exists with this URI, this will throw an EDAMNotFoundException,
         * otherwise this will return the information for that Notebook.
         * </p>
         * <p>
         * If a notebook is visible on the web with a full URL like
         * http://www.evernote.com/pub/sethdemo/api
         * Then 'sethdemo' is the username that can be used to look up the userId,
         * and 'api' is the publicUri.
         * </p>
         *
         * @param userId
         *        The numeric identifier for the user who owns the public notebook.
         *        To find this value based on a username string, you can invoke
         *        UserStore.getPublicUserInfo
         *
         * @param publicUri
         *        The uri string for the public notebook, from Notebook.publishing.uri.
         *
         * @throws EDAMNotFoundException <ul>
         *     <li>"Publishing.uri" - not found, by URI</li>
         * </ul>
         *
         * @throws EDAMSystemException <ul>
         *     <li> TAKEN_DOWN "PublicNotebook" - The specified public notebook is
         *         taken down (for all requesters).</li>
         *     <li> TAKEN_DOWN "Country" - The specified public notebook is taken
         *         down for the requester because of an IP-based country lookup.</li>
         * </ul>
         */
        getPublicNotebook(userId: number, publicUri: string, cb: Callback<Notebook>): void;

        /**
         * Used to construct a shared notebook object. The constructed notebook will
         * contain a "share key" which serve as a unique identifer and access token
         * for a user to access the notebook of the shared notebook owner.
         *
         * @param sharedNotebook
         *     A shared notebook object populated with the email address of the share
         *     recipient, the notebook guid and the access permissions. All other
         *     attributes of the shared object are ignored. The SharedNotebook.allowPreview
         *     field must be explicitly set with either a true or false value.
         *
         * @return
         *     The fully populated SharedNotebook object including the server assigned
         *     share id and shareKey which can both be used to uniquely identify the
         *     SharedNotebook.
         *
         * @throws EDAMUserException <ul>
         *     <li>BAD_DATA_FORMAT "SharedNotebook.email" - if the email was not valid</li>
         *     <li>BAD_DATA_FORMAT "requireLogin" - if the SharedNotebook.allowPreview field was
         *             not set, and the SharedNotebook.requireLogin was also not set or was set to
         *             false.</li>
         *     <li>PERMISSION_DENIED "SharedNotebook.recipientSettings" - if
         *             recipientSettings is set in the sharedNotebook.    Only the recipient
         *             can set these values via the setSharedNotebookRecipientSettings
         *             method.
         *     </li>
         *     </ul>
         * @throws EDAMNotFoundException <ul>
         *     <li>Notebook.guid - if the notebookGuid is not a valid GUID for the user.
         *     </li>
         *     </ul>
         */
        createSharedNotebook(sharedNotebook: SharedNotebook, cb: Callback<SharedNotebook>): void;

        /**
         * Update a SharedNotebook object.
         *
         * @param authenticationToken
         *     Must be an authentication token from the owner or a shared notebook
         *     authentication token or business authentication token with sufficient
         *     permissions to change invitations for a notebook.
         *
         * @param sharedNotebook
         *    The SharedNotebook object containing the requested changes.
         *    The "id" of the shared notebook must be set to allow the service
         *    to identify the SharedNotebook to be updated. In addition, you MUST set
         *    the email, permission, and allowPreview fields to the desired values.
         *    All other fields will be ignored if set.
         *
         * @return
         *    The Update Serial Number for this change within the account.
         *
         * @throws EDAMUserException <ul>
         *     <li>UNSUPPORTED_OPERATION "updateSharedNotebook" - if this service instance does not support shared notebooks.</li>
         *     <li>BAD_DATA_FORMAT "SharedNotebook.email" - if the email was not valid.</li>
         *     <li>DATA_REQUIRED "SharedNotebook.id" - if the id field was not set.</li>
         *     <li>DATA_REQUIRED "SharedNotebook.privilege" - if the privilege field was not set.</li>
         *     <li>DATA_REQUIRED "SharedNotebook.allowPreview" - if the allowPreview field was not set.</li>
         *     </ul>
         * @throws EDAMNotFoundException <ul>
         *     <li>SharedNotebook.id - if no shared notebook with the specified ID was found.
         *     </ul>
         */
        updateSharedNotebook(sharedNotebook: SharedNotebook, cb: Callback<number>): void;

        /**
         * Set values for the recipient settings associated with a shared notebook.    Having
         * update rights to the shared notebook record itself has no effect on this call;
         * only the recipient of the shared notebook can can the recipient settings.
         *
         * If you do <i>not</i> wish to, or cannot, change one of the reminderNotifyEmail or
         * reminderNotifyInApp fields, you must leave that field unset in recipientSettings.
         * This method will skip that field for updates and leave the existing state as
         * it is.
         *
         * @return The update sequence number of the account to which the shared notebook
         *     belongs, which is the account from which we are sharing a notebook.
         *
         * @throws EDAMNotFoundException "sharedNotebookId" - Thrown if the service does not
         *     have a shared notebook record for the sharedNotebookId on the given shard.    If you
         *     receive this exception, it is probable that the shared notebook record has
         *     been revoked or expired, or that you accessed the wrong shard.
         *
         * @throws EDAMUserException <ul>
         *     <li>PEMISSION_DENIED "authenticationToken" - If you do not have permission to set
         *             the recipient settings for the shared notebook.    Only the recipient has
         *             permission to do this.
         *     <li>DATA_CONFLICT "recipientSettings.reminderNotifyEmail" - Setting whether
         *             or not you want to receive reminder e-mail notifications is possible on
         *             a business notebook in the business to which the user belongs.    All
         *             others can safely unset the reminderNotifyEmail field from the
         *             recipientSettings parameter.
         * </ul>
         */
        setSharedNotebookRecipientSettings(sharedNotebookId: number, recipientSettings: SharedNotebookRecipientSettings, cb: Callback<number>): void;

        /**
         * Send a reminder message to some or all of the email addresses that a notebook has been
         * shared with. The message includes the current link to view the notebook.
         * @param authenticationToken
         *     The auth token of the user with permissions to share the notebook
         * @param notebookGuid
         *     The guid of the shared notebook
         * @param messageText
         *    User provided text to include in the email
         * @param recipients
         *    The email addresses of the recipients. If this list is empty then all of the
         *    users that the notebook has been shared with are emailed.
         *    If an email address doesn't correspond to share invite members then that address
         *    is ignored.
         * @return
         *    The number of messages sent
         * @throws EDAMUserException <ul>
         *     <li> LIMIT_REACHED "(recipients)" -
         *         The email can't be sent because this would exceed the user's daily
         *         email limit.
         *     </li>
         *     <li> PERMISSION_DENIED "Notebook.guid" - The user doesn't have permission to
         *         send a message for the specified notebook.
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Notebook.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        sendMessageToSharedNotebookMembers(notebookGuid: string, messageText: string, recipients: string[], cb: Callback<number>): void;

        /**
         * Lists the collection of shared notebooks for all notebooks in the
         * users account.
         *
         * @return
         *    The list of all SharedNotebooks for the user
         */
        listSharedNotebooks(cb: Callback<SharedNotebook[]>): void;

        /**
         * Expunges the SharedNotebooks in the user's account using the
         * SharedNotebook.id as the identifier.
         * <p/>
         * NOTE: This function is generally not available to third party applications.
         * Calls will result in an EDAMUserException with the error code
         * PERMISSION_DENIED.
         *
         * @param
         *     sharedNotebookIds - a list of ShardNotebook.id longs identifying the
         *             objects to delete permanently.
         *
         * @return
         *     The account's update sequence number.
         */
        expungeSharedNotebooks(sharedNotebookIds: number[], cb: Callback<number>): void;

        /**
         * Asks the service to make a linked notebook with the provided name, username
         * of the owner and identifiers provided. A linked notebook can be either a
         * link to a public notebook or to a private shared notebook.
         *
         * @param linkedNotebook
         *     The desired fields for the linked notebook must be provided on this
         *     object.    The name of the linked notebook must be set. Either a username
         *     uri or a shard id and share key must be provided otherwise a
         *     EDAMUserException is thrown.
         *
         * @return
         *     The newly created LinkedNotebook.    The server-side id will be
         *     saved in this object's 'id' field.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "LinkedNotebook.name" - invalid length or pattern
         *     </li>
         *     <li> BAD_DATA_FORMAT "LinkedNotebook.username" - bad username format
         *     </li>
         *     <li> BAD_DATA_FORMAT "LinkedNotebook.uri" -
         *         if public notebook set but bad uri
         *     </li>
         *     <li> BAD_DATA_FORMAT "LinkedNotebook.shareKey" -
         *         if private notebook set but bad shareKey
         *     </li>
         *     <li> DATA_REQUIRED "LinkedNotebook.shardId" -
         *         if private notebook but shard id not provided
         *     </li>
         * </ul>
         */
        createLinkedNotebook(linkedNotebook: LinkedNotebook, cb: Callback<LinkedNotebook>): void;

        /**
         * @param linkedNotebook
         *     Updates the name of a linked notebook.
         *
         * @return
         *     The Update Sequence Number for this change within the account.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "LinkedNotebook.name" - invalid length or pattern
         *     </li>
         * </ul>
         */
        updateLinkedNotebook(linkedNotebook: LinkedNotebook, cb: Callback<number>): void;

        /**
         * Returns a list of linked notebooks
         */
        listLinkedNotebooks(cb: Callback<LinkedNotebook[]>): void;

        /**
         * Permanently expunges the linked notebook from the account.
         * <p/>
         * NOTE: This function is generally not available to third party applications.
         * Calls will result in an EDAMUserException with the error code
         * PERMISSION_DENIED.
         *
         * @param guid
         *     The LinkedNotebook.guid field of the LinkedNotebook to permanently remove
         *     from the account.
         */
        expungeLinkedNotebook(guid: string, cb: Callback<number>): void;

        /**
         * Asks the service to produce an authentication token that can be used to
         * access the contents of a shared notebook from someone else's account.
         * This authenticationToken can be used with the various other NoteStore
         * calls to find and retrieve notes, and if the permissions in the shared
         * notebook are sufficient, to make changes to the contents of the notebook.
         *
         * @param shareKey
         *     The 'shareKey' identifier from the SharedNotebook that was granted to
         *     some recipient.    This string internally encodes the notebook identifier
         *     and a security signature.
         *
         * @param authenticationToken
         *     If a non-empty string is provided, this is the full user-based
         *     authentication token that identifies the user who is currently logged in
         *     and trying to access the shared notebook.    This may be required if the
         *     notebook was created with 'requireLogin'.
         *     If this string is empty, the service will attempt to authenticate to the
         *     shared notebook without any logged in user.
         *
         * @throws EDAMSystemException <ul>
         *     <li> BAD_DATA_FORMAT "shareKey" - invalid shareKey string
         *     </li>
         *     <li> INVALID_AUTH "shareKey" - bad signature on shareKey string
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "SharedNotebook.id" - the shared notebook no longer exists
         *     </li>
         * </ul>
         *
         * @throws EDAMUserException <ul>
         *     <li> DATA_REQUIRED "authenticationToken" - the share requires login, and
         *                    no valid authentication token was provided.
         *     </li>
         *     <li> PERMISSION_DENIED "SharedNotebook.username" - share requires login,
         *                    and another username has already been bound to this notebook.
         *     </li>
         * </ul>
         */
        authenticateToSharedNotebook(shareKey: string, cb: Callback<AuthenticationResult>): void;

        /**
         * This function is used to retrieve extended information about a shared
         * notebook by a guest who has already authenticated to access that notebook.
         * This requires an 'authenticationToken' parameter which should be the
         * resut of a call to authenticateToSharedNotebook(...).
         * I.e. this is the token that gives access to the particular shared notebook
         * in someone else's account -- it's not the authenticationToken for the
         * owner of the notebook itself.
         *
         * @param authenticationToken
         *     Should be the authentication token retrieved from the reply of
         *     authenticateToSharedNotebook(), proving access to a particular shared
         *     notebook.
         *
         * @throws EDAMUserException <ul>
         *     <li> PERMISSION_DENIED "authenticationToken" -
         *                    authentication token doesn't correspond to a valid shared notebook
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "SharedNotebook.id" - the shared notebook no longer exists
         *     </li>
         * </ul>
         */
        getSharedNotebookByAuth(cb: Callback<SharedNotebook>): void;

        /**
         * Attempts to send a single note to one or more email recipients.
         * <p/>
         * NOTE: This function is generally not available to third party applications.
         * Calls will result in an EDAMUserException with the error code
         * PERMISSION_DENIED.
         *
         * @param authenticationToken
         *        The note will be sent as the user logged in via this token, using that
         *        user's registered email address.    If the authenticated user doesn't
         *        have permission to read that note, the emailing will fail.
         *
         * @param parameters
         *        The note must be specified either by GUID (in which case it will be
         *        sent using the existing data in the service), or else the full Note
         *        must be passed to this call.    This also specifies the additional
         *        email fields that will be used in the email.
         *
         * @throws EDAMUserException <ul>
         *     <li> LIMIT_REACHED "NoteEmailParameters.toAddresses" -
         *         The email can't be sent because this would exceed the user's daily
         *         email limit.
         *     </li>
         *     <li> BAD_DATA_FORMAT "(email address)" -
         *         email address malformed
         *     </li>
         *     <li> DATA_REQUIRED "NoteEmailParameters.toAddresses" -
         *         if there are no To: or Cc: addresses provided.
         *     </li>
         *     <li> DATA_REQUIRED "Note.title" -
         *         if the caller provides a Note parameter with no title
         *     </li>
         *     <li> DATA_REQUIRED "Note.content" -
         *         if the caller provides a Note parameter with no content
         *     </li>
         *     <li> ENML_VALIDATION "*" - note content doesn't validate against DTD
         *     </li>
         *     <li> DATA_REQUIRED "NoteEmailParameters.note" -
         *         if no guid or note provided
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - private note, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        emailNote(parameters: NoteEmailParameters, cb: Callback<void>): void;

        /**
         * If this note is not already shared (via its own direct URL), then this
         * will start sharing that note.
         * This will return the secret "Note Key" for this note that
         * can currently be used in conjunction with the Note's GUID to gain direct
         * read-only access to the Note.
         * If the note is already shared, then this won't make any changes to the
         * note, and the existing "Note Key" will be returned.    The only way to change
         * the Note Key for an existing note is to stopSharingNote first, and then
         * call this function.
         *
         * @param guid
         *     The GUID of the note to be shared.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Note.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - private note, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        shareNote(guid: string, cb: Callback<string>): void;

        /**
         * If this note is not already shared then this will stop sharing that note
         * and invalidate its "Note Key", so any existing URLs to access that Note
         * will stop working.
         * If the Note is not shared, then this function will do nothing.
         *
         * @param guid
         *     The GUID of the note to be un-shared.
         *
         * @throws EDAMUserException <ul>
         *     <li> BAD_DATA_FORMAT "Note.guid" - if the parameter is missing
         *     </li>
         *     <li> PERMISSION_DENIED "Note" - private note, user doesn't own
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "Note.guid" - not found, by GUID
         *     </li>
         * </ul>
         */
        stopSharingNote(guid: string, cb: Callback<void>): void;

        /**
         * Asks the service to produce an authentication token that can be used to
         * access the contents of a single Note which was individually shared
         * from someone's account.
         * This authenticationToken can be used with the various other NoteStore
         * calls to find and retrieve the Note and its directly-referenced children.
         *
         * @param guid
         *     The GUID identifying this Note on this shard.
         *
         * @param noteKey
         *     The 'noteKey' identifier from the Note that was originally created via
         *     a call to shareNote() and then given to a recipient to access.
         *
         * @param authenticationToken
         *     An optional authenticationToken that identifies the user accessing the
         *     shared note. This parameter may be required to access some shared notes.
         *
         * @throws EDAMUserException <ul>
         *     <li> PERMISSION_DENIED "Note" - the Note with that GUID is either not
         *         shared, or the noteKey doesn't match the current key for this note
         *     </li>
         *     <li> PERMISSION_DENIED "authenticationToken" - an authentication token is
         *         required to access this Note, but either no authentication token or a
         *         "non-owner" authentication token was provided.
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li> "guid" - the note with that GUID is not found
         *     </li>
         * </ul>
         *
         * @throws EDAMSystemException <ul>
         *     <li> TAKEN_DOWN "Note" - The specified shared note is taken down (for
         *         all requesters).
         *     </li>
         *     <li> TAKEN_DOWN "Country" - The specified shared note is taken down
         *         for the requester because of an IP-based country lookup.
         *     </ul>
         * </ul>
         */
        authenticateToSharedNote(guid: string, noteKey: string, cb: Callback<AuthenticationResult>): void;

        /**
         * Identify related entities on the service, such as notes,
         * notebooks, and tags related to notes or content.
         *
         * @param query
         *     The information about which we are finding related entities.
         *
         * @param resultSpec
         *     Allows the client to indicate the type and quantity of
         *     information to be returned, allowing a saving of time and
         *     bandwidth.
         *
         * @return
         *     The result of the query, with information considered
         *     to likely be relevantly related to the information
         *     described by the query.
         *
         * @throws EDAMUserException <ul>
         *     <li>BAD_DATA_FORMAT "RelatedQuery.plainText" - If you provided a
         *         a zero-length plain text value.
         *     </li>
         *     <li>BAD_DATA_FORMAT "RelatedQuery.noteGuid" - If you provided an
         *         invalid Note GUID, that is, one that does not match the constraints
         *         defined by EDAM_GUID_LEN_MIN, EDAM_GUID_LEN_MAX, EDAM_GUID_REGEX.
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.notebookGuid" - if malformed
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.tagGuids" - if any are malformed
         *     </li>
         *     <li> BAD_DATA_FORMAT "NoteFilter.words" - if search string too long
         *     </li>
         *     <li>PERMISSION_DENIED "Note" - If the caller does not have access to
         *         the note identified by RelatedQuery.noteGuid.
         *     </li>
         *     <li>DATA_REQUIRED "RelatedResultSpec" - If you did not not set any values
         *         in the result spec.
         *     </li>
         * </ul>
         *
         * @throws EDAMNotFoundException <ul>
         *     <li>"RelatedQuery.noteGuid" - the note with that GUID is not
         *         found, if that field has been set in the query.
         *     </li>
         * </ul>
         */
        findRelated(query: RelatedQuery, resultSpec: RelatedResultSpec, cb: Callback<RelatedResult>): void;
    }
    /**
     *    This structure encapsulates the information about the state of the
     *    user's account for the purpose of "state based" synchronization.
     * <dl>
     *    <dt>currentTime</dt>
     *        <dd>
     *        The server's current date and time.
     *        </dd>
     *
     *    <dt>fullSyncBefore</dt>
     *        <dd>
     *        The cutoff date and time for client caches to be
     *        updated via incremental synchronization.    Any clients that were last
     *        synched with the server before this date/time must do a full resync of all
     *        objects.    This cutoff point will change over time as archival data is
     *        deleted or special circumstances on the service require resynchronization.
     *        </dd>
     *
     *    <dt>updateCount</dt>
     *        <dd>
     *        Indicates the total number of transactions that have
     *        been committed within the account.    This reflects (for example) the
     *        number of discrete additions or modifications that have been made to
     *        the data in this account (tags, notes, resources, etc.).
     *        This number is the "high water mark" for Update Sequence Numbers (USN)
     *        within the account.
     *        </dd>
     *
     *    <dt>uploaded</dt>
     *        <dd>
     *        The total number of bytes that have been uploaded to
     *        this account in the current monthly period.    This can be compared against
     *        Accounting.uploadLimit (from the UserStore) to determine how close the user
     *        is to their monthly upload limit.
     *        This value may not be present if the SyncState has been retrieved by
     *        a caller that only has read access to the account.
     *        </dd>
     *    </dl>
     */
    class SyncState {
        currentTime: number;
        fullSyncBefore: number;
        updateCount: number;
        uploaded: number;

        constructor(args?: { currentTime: number; fullSyncBefore: number; updateCount: number; uploaded?: number; });
    }

    /**
     *    This structure is given out by the NoteStore when a client asks to
     *    receive the current state of an account.    The client asks for the server's
     *    state one chunk at a time in order to allow clients to retrieve the state
     *    of a large account without needing to transfer the entire account in
     *    a single message.
     *
     *    The server always gives SyncChunks using an ascending series of Update
     *    Sequence Numbers (USNs).
     *
     * <dl>
     *    <dt>currentTime</dt>
     *        <dd>
     *        The server's current date and time.
     *        </dd>
     *
     *    <dt>chunkHighUSN</dt>
     *        <dd>
     *        The highest USN for any of the data objects represented
     *        in this sync chunk.    If there are no objects in the chunk, this will not be
     *        set.
     *        </dd>
     *
     *    <dt>updateCount</dt>
     *        <dd>
     *        The total number of updates that have been performed in
     *        the service for this account.    This is equal to the highest USN within the
     *        account at the point that this SyncChunk was generated.    If updateCount
     *        and chunkHighUSN are identical, that means that this is the last chunk
     *        in the account ... there is no more recent information.
     *        </dd>
     *
     *    <dt>notes</dt>
     *        <dd>
     *        If present, this is a list of non-expunged notes that
     *        have a USN in this chunk.    This will include notes that are "deleted"
     *        but not expunged (i.e. in the trash).    The notes will include their list
     *        of tags and resources, but the note content, resource content, resource
     *        recognition data and resource alternate data will not be supplied.
     *        </dd>
     *
     *    <dt>notebooks</dt>
     *        <dd>
     *        If present, this is a list of non-expunged notebooks that
     *        have a USN in this chunk.    This will include notebooks that are "deleted"
     *        but not expunged (i.e. in the trash).
     *        </dd>
     *
     *    <dt>tags</dt>
     *        <dd>
     *        If present, this is a list of the non-expunged tags that have a
     *        USN in this chunk.
     *        </dd>
     *
     *    <dt>searches</dt>
     *        <dd>
     *        If present, this is a list of non-expunged searches that
     *        have a USN in this chunk.
     *        </dd>
     *
     *    <dt>resources</dt>
     *        <dd>
     *        If present, this is a list of the non-expunged resources
     *        that have a USN in this chunk.    This will include the metadata for each
     *        resource, but not its binary contents or recognition data, which must be
     *        retrieved separately.
     *        </dd>
     *
     *    <dt>expungedNotes</dt>
     *        <dd>
     *        If present, the GUIDs of all of the notes that were
     *        permanently expunged in this chunk.
     *        </dd>
     *
     *    <dt>expungedNotebooks</dt>
     *        <dd>
     *        If present, the GUIDs of all of the notebooks that
     *        were permanently expunged in this chunk.    When a notebook is expunged,
     *        this implies that all of its child notes (and their resources) were
     *        also expunged.
     *        </dd>
     *
     *    <dt>expungedTags</dt>
     *        <dd>
     *        If present, the GUIDs of all of the tags that were
     *        permanently expunged in this chunk.
     *        </dd>
     *
     *    <dt>expungedSearches</dt>
     *        <dd>
     *        If present, the GUIDs of all of the saved searches
     *        that were permanently expunged in this chunk.
     *        </dd>
     *
     *    <dt>linkedNotebooks</dt>
     *        <dd>
     *        If present, this is a list of non-expunged LinkedNotebooks that
     *        have a USN in this chunk.
     *        </dd>
     *
     *    <dt>expungedLinkedNotebooks</dt>
     *        <dd>
     *        If present, the GUIDs of all of the LinkedNotebooks
     *        that were permanently expunged in this chunk.
     *        </dd>
     *    </dl>
     */
    class SyncChunk {
        currentTime: number;
        chunkHighUSN: number;
        updateCount: number;
        notes: Note[];
        notebooks: Notebook[];
        tags: Tag[];
        searches: SavedSearch[];
        resources: Resource[];
        expungedNotes: string[];
        expungedNotebooks: string[];
        expungedTags: string[];
        expungedSearches: string[];
        linkedNotebooks: LinkedNotebook[];
        expungedLinkedNotebooks: string[];

        constructor(args?: { currentTime: number; chunkHighUSN?: number; updateCount: number; notes?: Note[]; notebooks?: Notebook[]; tags?: Tag[]; searches?: SavedSearch[]; resources?: Resource[]; expungedNotes?: string[]; expungedNotebooks?: string[]; expungedTags?: string[]; expungedSearches?: string[]; linkedNotebooks?: LinkedNotebook[]; expungedLinkedNotebooks?: string[]; });
    }

    /**
     *    This structure is used with the 'getFilteredSyncChunk' call to provide
     *    fine-grained control over the data that's returned when a client needs
     *    to synchronize with the service. Each flag in this structure specifies
     *    whether to include one class of data in the results of that call.
     *
     * <dl>
     *    <dt>includeNotes</dt>
     *        <dd>
     *        If true, then the server will include the SyncChunks.notes field
     *        </dd>
     *
     *    <dt>includeNoteResources</dt>
     *        <dd>
     *        If true, then the server will include the 'resources' field on all of
     *        the Notes that are in SyncChunk.notes.
     *        If 'includeNotes' is false, then this will have no effect.
     *        </dd>
     *
     *    <dt>includeNoteAttributes</dt>
     *        <dd>
     *        If true, then the server will include the 'attributes' field on all of
     *        the Notes that are in SyncChunks.notes.
     *        If 'includeNotes' is false, then this will have no effect.
     *        </dd>
     *
     *    <dt>includeNotebooks</dt>
     *        <dd>
     *        If true, then the server will include the SyncChunks.notebooks field
     *        </dd>
     *
     *    <dt>includeTags</dt>
     *        <dd>
     *        If true, then the server will include the SyncChunks.tags field
     *        </dd>
     *
     *    <dt>includeSearches</dt>
     *        <dd>
     *        If true, then the server will include the SyncChunks.searches field
     *        </dd>
     *
     *    <dt>includeResources</dt>
     *        <dd>
     *        If true, then the server will include the SyncChunks.resources field.
     *        Since the Resources are also provided with their Note
     *        (in the Notes.resources list), this is primarily useful for clients that
     *        want to watch for changes to individual Resources due to recognition data
     *        being added.
     *        </dd>
     *
     *    <dt>includeLinkedNotebooks</dt>
     *        <dd>
     *        If true, then the server will include the SyncChunks.linkedNotebooks field.
     *        </dd>
     *
     *    <dt>includeExpunged</dt>
     *        <dd>
     *        If true, then the server will include the 'expunged' data for any type
     *        of included data.    For example, if 'includeTags' and 'includeExpunged'
     *        are both true, then the SyncChunks.expungedTags field will be set with
     *        the GUIDs of tags that have been expunged from the server.
     *        </dd>
     *
     *    <dt>includeNoteApplicationDataFullMap</dt>
     *        <dd>
     *        If true, then the values for the applicationData map will be filled
     *        in, assuming notes and note attributes are being returned.    Otherwise,
     *        only the keysOnly field will be filled in.
     *        </dd>
     *
     *    <dt>includeResourceApplicationDataFullMap</dt>
     *        <dd>
     *        If true, then the fullMap values for the applicationData map will be
     *        filled in, assuming resources and resource attributes are being returned
     *        (includeResources is true).    Otherwise, only the keysOnly field will be
     *        filled in.
     *        </dd>
     *
     *    <dt>includeNoteResourceApplicationDataFullMap</dt>
     *        <dd>
     *        If true, then the fullMap values for the applicationData map will be
     *        filled in for resources found inside of notes, assuming resources are
     *        being returned in notes (includeNoteResources is true).    Otherwise,
     *        only the keysOnly field will be filled in.
     *        </dd>
     *
     *    <dt>requireNoteContentClass</dt>
     *        <dd>
     *        If set, then only send notes whose content class matches this value.
     *        The value can be a literal match or, if the last character is an
     *        asterisk, a prefix match.
     *        </dd>
     *    </dl>
     */
    class SyncChunkFilter {
        includeNotes: boolean;
        includeNoteResources: boolean;
        includeNoteAttributes: boolean;
        includeNotebooks: boolean;
        includeTags: boolean;
        includeSearches: boolean;
        includeResources: boolean;
        includeLinkedNotebooks: boolean;
        includeExpunged: boolean;
        includeNoteApplicationDataFullMap: boolean;
        includeResourceApplicationDataFullMap: boolean;
        includeNoteResourceApplicationDataFullMap: boolean;
        requireNoteContentClass: string;

        constructor(args?: { includeNotes?: boolean; includeNoteResources?: boolean; includeNoteAttributes?: boolean; includeNotebooks?: boolean; includeTags?: boolean; includeSearches?: boolean; includeResources?: boolean; includeLinkedNotebooks?: boolean; includeExpunged?: boolean; includeNoteApplicationDataFullMap?: boolean; includeResourceApplicationDataFullMap?: boolean; includeNoteResourceApplicationDataFullMap?: boolean; requireNoteContentClass?: string; });
    }

    /**
     *    A list of criteria that are used to indicate which notes are desired from
     *    the account.    This is used in queries to the NoteStore to determine
     *    which notes should be retrieved.
     *
     * <dl>
     *    <dt>order</dt>
     *        <dd>
     *        The NoteSortOrder value indicating what criterion should be
     *        used to sort the results of the filter.
     *        </dd>
     *
     *    <dt>ascending</dt>
     *        <dd>
     *        If true, the results will be ascending in the requested
     *        sort order.    If false, the results will be descending.
     *        </dd>
     *
     *    <dt>words</dt>
     *        <dd>
     *        If present, a search query string that will filter the set of notes to be returned.
     *        Accepts the full search grammar documented in the Evernote API Overview.
     *        </dd>
     *
     *    <dt>notebookGuid</dt>
     *        <dd>
     *        If present, the Guid of the notebook that must contain
     *        the notes.
     *        </dd>
     *
     *    <dt>tagGuids</dt>
     *        <dd>
     *        If present, the list of tags (by GUID) that must be present
     *        on the notes.
     *        </dd>
     *
     *    <dt>timeZone</dt>
     *        <dd>
     *        The zone ID for the user, which will be used to interpret
     *        any dates or times in the queries that do not include their desired zone
     *        information.
     *        For example, if a query requests notes created "yesterday", this
     *        will be evaluated from the provided time zone, if provided.
     *        The format must be encoded as a standard zone ID such as
     *        "America/Los_Angeles".
     *        </dd>
     *
     *    <dt>inactive</dt>
     *        <dd>
     *        If true, then only notes that are not active (i.e. notes in
     *        the Trash) will be returned. Otherwise, only active notes will be returned.
     *        There is no way to find both active and inactive notes in a single query.
     *        </dd>
     *
     *    <dt>emphasized</dt>
     *        <dd>
     *        If present, a search query string that may or may not influence the notes
     *        to be returned, both in terms of coverage as well as of order. Think of it
     *        as a wish list, not a requirement.
     *        Accepts the full search grammar documented in the Evernote API Overview.
     *        </dd>
     *    </dl>
     */
    class NoteFilter {
        order: number;
        ascending: boolean;
        words: string;
        notebookGuid: string;
        tagGuids: string[];
        timeZone: string;
        inactive: boolean;
        emphasized: string;

        constructor(args?: { order?: number; ascending?: boolean; words?: string; notebookGuid?: string; tagGuids?: string[]; timeZone?: string; inactive?: boolean; emphasized?: string; });
    }

    /**
     *    A small structure for returning a list of notes out of a larger set.
     *
     * <dl>
     *    <dt>startIndex</dt>
     *        <dd>
     *        The starting index within the overall set of notes.    This
     *        is also the number of notes that are "before" this list in the set.
     *        </dd>
     *
     *    <dt>totalNotes</dt>
     *        <dd>
     *        The number of notes in the larger set.    This can be used
     *        to calculate how many notes are "after" this note in the set.
     *        (I.e.    remaining = totalNotes - (startIndex + notes.length)    )
     *        </dd>
     *
     *    <dt>notes</dt>
     *        <dd>
     *        The list of notes from this range.    The Notes will include all
     *        metadata (attributes, resources, etc.), but will not include the ENML
     *        content of the note or the binary contents of any resources.
     *        </dd>
     *
     *    <dt>stoppedWords</dt>
     *        <dd>
     *        If the NoteList was produced using a text based search
     *        query that included words that are not indexed or searched by the service,
     *        this will include a list of those ignored words.
     *        </dd>
     *
     *    <dt>searchedWords</dt>
     *        <dd>
     *        If the NoteList was produced using a text based search
     *        query that included viable search words or quoted expressions, this will
     *        include a list of those words.    Any stopped words will not be included
     *        in this list.
     *        </dd>
     *
     *    <dt>updateCount</dt>
     *        <dd>
     *        Indicates the total number of transactions that have
     *        been committed within the account.    This reflects (for example) the
     *        number of discrete additions or modifications that have been made to
     *        the data in this account (tags, notes, resources, etc.).
     *        This number is the "high water mark" for Update Sequence Numbers (USN)
     *        within the account.
     *        </dd>
     *    </dl>
     */
    class NoteList {
        startIndex: number;
        totalNotes: number;
        notes: Note[];
        stoppedWords: string[];
        searchedWords: string[];
        updateCount: number;

        constructor(args?: { startIndex: number; totalNotes: number; notes: Note[]; stoppedWords?: string[]; searchedWords?: string[]; updateCount?: number; });
    }

    /**
     * This structure is used in the set of results returned by the
     * findNotesMetadata function.    It represents the high-level information about
     * a single Note, without some of the larger deep structure.    This allows
     * for the information about a list of Notes to be returned relatively quickly
     * with less marshalling and data transfer to remote clients.
     * Most fields in this structure are identical to the corresponding field in
     * the Note structure, with the exception of:
     *
     * <dl>
     * <dt>largestResourceMime</dt>
     *     <dd>If set, then this will contain the MIME type of the largest Resource
     *     (in bytes) within the Note.    This may be useful, for example, to choose
     *     an appropriate icon or thumbnail to represent the Note.
     *     </dd>
     *
     * <dt>largestResourceSize</dt>
     *    <dd>If set, this will contain the size of the largest Resource file, in
     *    bytes, within the Note.    This may be useful, for example, to decide whether
     *    to ask the server for a thumbnail to represent the Note.
     *    </dd>
     * </dl>
     */
    class NoteMetadata {
        guid: string;
        title: string;
        contentLength: number;
        created: number;
        updated: number;
        deleted: number;
        updateSequenceNum: number;
        notebookGuid: string;
        tagGuids: string[];
        attributes: NoteAttributes;
        largestResourceMime: string;
        largestResourceSize: number;

        constructor(args?: { guid: string; title?: string; contentLength?: number; created?: number; updated?: number; deleted?: number; updateSequenceNum?: number; notebookGuid?: string; tagGuids?: string[]; attributes?: NoteAttributes; largestResourceMime?: string; largestResourceSize?: number; });
    }

    /**
     *    This structure is returned from calls to the findNotesMetadata function to
     *    give the high-level metadata about a subset of Notes that are found to
     *    match a specified NoteFilter in a search.
     *
     * <dl>
     *    <dt>startIndex</dt>
     *        <dd>
     *        The starting index within the overall set of notes.    This
     *        is also the number of notes that are "before" this list in the set.
     *        </dd>
     *
     *    <dt>totalNotes</dt>
     *        <dd>
     *        The number of notes in the larger set.    This can be used
     *        to calculate how many notes are "after" this note in the set.
     *        (I.e.    remaining = totalNotes - (startIndex + notes.length)    )
     *        </dd>
     *
     *    <dt>notes</dt>
     *        <dd>
     *        The list of metadata for Notes in this range.    The set of optional fields
     *        that are set in each metadata structure will depend on the
     *        NotesMetadataResultSpec provided by the caller when the search was
     *        performed.    Only the 'guid' field will be guaranteed to be set in each
     *        Note.
     *        </dd>
     *
     *    <dt>stoppedWords</dt>
     *        <dd>
     *        If the NoteList was produced using a text based search
     *        query that included words that are not indexed or searched by the service,
     *        this will include a list of those ignored words.
     *        </dd>
     *
     *    <dt>searchedWords</dt>
     *        <dd>
     *        If the NoteList was produced using a text based search
     *        query that included viable search words or quoted expressions, this will
     *        include a list of those words.    Any stopped words will not be included
     *        in this list.
     *        </dd>
     *
     *    <dt>updateCount</dt>
     *        <dd>
     *        Indicates the total number of transactions that have
     *        been committed within the account.    This reflects (for example) the
     *        number of discrete additions or modifications that have been made to
     *        the data in this account (tags, notes, resources, etc.).
     *        This number is the "high water mark" for Update Sequence Numbers (USN)
     *        within the account.
     *        </dd>
     *    </dl>
     */
    class NotesMetadataList {
        startIndex: number;
        totalNotes: number;
        notes: NoteMetadata[];
        stoppedWords: string[];
        searchedWords: string[];
        updateCount: number;

        constructor(args?: { startIndex: number; totalNotes: number; notes: NoteMetadata[]; stoppedWords?: string[]; searchedWords?: string[]; updateCount?: number; });
    }

    /**
     * This structure is provided to the findNotesMetadata function to specify
     * the subset of fields that should be included in each NoteMetadata element
     * that is returned in the NotesMetadataList.
     * Each field on this structure is a boolean flag that indicates whether the
     * corresponding field should be included in the NoteMetadata structure when
     * it is returned.    For example, if the 'includeTitle' field is set on this
     * structure when calling findNotesMetadata, then each NoteMetadata in the
     * list should have its 'title' field set.
     * If one of the fields in this spec is not set, then it will be treated as
     * 'false' by the server, so the default behavior is to include nothing in
     * replies (but the mandatory GUID)
     */
    class NotesMetadataResultSpec {
        includeTitle: boolean;
        includeContentLength: boolean;
        includeCreated: boolean;
        includeUpdated: boolean;
        includeDeleted: boolean;
        includeUpdateSequenceNum: boolean;
        includeNotebookGuid: boolean;
        includeTagGuids: boolean;
        includeAttributes: boolean;
        includeLargestResourceMime: boolean;
        includeLargestResourceSize: boolean;

        constructor(args?: { includeTitle?: boolean; includeContentLength?: boolean; includeCreated?: boolean; includeUpdated?: boolean; includeDeleted?: boolean; includeUpdateSequenceNum?: boolean; includeNotebookGuid?: boolean; includeTagGuids?: boolean; includeAttributes?: boolean; includeLargestResourceMime?: boolean; includeLargestResourceSize?: boolean; });
    }

    /**
     *    A data structure representing the number of notes for each notebook
     *    and tag with a non-zero set of applicable notes.
     *
     * <dl>
     *    <dt>notebookCounts</dt>
     *        <dd>
     *        A mapping from the Notebook GUID to the number of
     *        notes (from some selection) that are in the corresponding notebook.
     *        </dd>
     *
     *    <dt>tagCounts</dt>
     *        <dd>
     *        A mapping from the Tag GUID to the number of notes (from some
     *        selection) that have the corresponding tag.
     *        </dd>
     *
     *    <dt>trashCount</dt>
     *        <dd>
     *        If this is set, then this is the number of notes that are in the trash.
     *        If this is not set, then the number of notes in the trash hasn't been
     *        reported.    (I.e. if there are no notes in the trash, this will be set
     *        to 0.)
     *        </dd>
     *    </dl>
     */
    class NoteCollectionCounts {
        notebookCounts: { [k: string]: number; };
        tagCounts: { [k: string]: number; };
        trashCount: number;

        constructor(args?: { notebookCounts?: { [k: string]: number; }; tagCounts?: { [k: string]: number; }; trashCount?: number; });
    }

    /**
     * Parameters that must be given to the NoteStore emailNote call. These allow
     * the caller to specify the note to send, the recipient addresses, etc.
     *
     * <dl>
     *    <dt>guid</dt>
     *        <dd>
     *            If set, this must be the GUID of a note within the user's account that
     *            should be retrieved from the service and sent as email.    If not set,
     *            the 'note' field must be provided instead.
     *        </dd>
     *
     *    <dt>note</dt>
     *        <dd>
     *            If the 'guid' field is not set, this field must be provided, including
     *            the full contents of the note note (and all of its Resources) to send.
     *            This can be used for a Note that as not been created in the service,
     *            for example by a local client with local notes.
     *        </dd>
     *
     *    <dt>toAddresses</dt>
     *        <dd>
     *            If provided, this should contain a list of the SMTP email addresses
     *            that should be included in the "To:" line of the email.
     *            Callers must specify at least one "to" or "cc" email address.
     *        </dd>
     *
     *    <dt>ccAddresses</dt>
     *        <dd>
     *            If provided, this should contain a list of the SMTP email addresses
     *            that should be included in the "Cc:" line of the email.
     *            Callers must specify at least one "to" or "cc" email address.
     *        </dd>
     *
     *    <dt>subject</dt>
     *        <dd>
     *            If provided, this should contain the subject line of the email that
     *            will be sent.    If not provided, the title of the note will be used
     *            as the subject of the email.
     *        </dd>
     *
     *    <dt>message</dt>
     *        <dd>
     *            If provided, this is additional personal text that should be included
     *            into the email as a message from the owner to the recipient(s).
     *        </dd>
     * </dl>
     */
    class NoteEmailParameters {
        guid: string;
        note: Note;
        toAddresses: string[];
        ccAddresses: string[];
        subject: string;
        message: string;

        constructor(args?: { guid?: string; note?: Note; toAddresses?: string[]; ccAddresses?: string[]; subject?: string; message?: string; });
    }

    /**
     * Identifying information about previous versions of a note that are backed up
     * within Evernote's servers.    Used in the return value of the listNoteVersions
     * call.
     *
     * <dl>
     *    <dt>updateSequenceNum</dt>
     *    <dd>
     *        The update sequence number for the Note when it last had this content.
     *        This serves to uniquely identify each version of the note, since USN
     *        values are unique within an account for each update.
     *    </dd>
     *    <dt>updated</dt>
     *    <dd>
     *        The 'updated' time that was set on the Note when it had this version
     *        of the content.    This is the user-modifiable modification time on the
     *        note, so it's not reliable for guaranteeing the order of various
     *        versions.    (E.g. if someone modifies the note, then changes this time
     *        manually into the past and then updates the note again.)
     *    </dd>
     *    <dt>saved</dt>
     *    <dd>
     *        A timestamp that holds the date and time when this version of the note
     *        was backed up by Evernote's servers.    This
     *    </dd>
     *    <dt>title</dt>
     *    <dd>
     *        The title of the note when this particular version was saved.    (The
     *        current title of the note may differ from this value.)
     *    </dd>
     * </dl>
     */
    class NoteVersionId {
        updateSequenceNum: number;
        updated: number;
        saved: number;
        title: string;

        constructor(args?: { updateSequenceNum: number; updated: number; saved: number; title: string; });
    }

    /**
     * This structure is passed from clients to the Evernote service when they wish
     * to relay coarse-grained usage metrics to the service to help improve
     * products.
     *
     * <dl>
     *    <dt>sessions</dt>
     *    <dd>
     *        This field contains a count of the number of usage "sessions" that have
     *        occurred with this client which have not previously been reported to
     *        the service.
     *        A "session" is defined as one of the 96 fifteen-minute intervals of the
     *        day when someone used Evernote's interface at least once.
     *        So if a user interacts with an Evernote client at 12:18, 12:24, and 12:36,
     *        and then the client synchronizes at 12:39, it would report that there were
     *        two previously-unreported sessions (one session for the 12:15-12:30 time
     *        period, and one for the 12:30-12:45 period).
     *        If the user used Evernote again at 12:41 and synchronized at 12:43, it
     *        would not report any new sessions, because the 12:30-12:45 session had
     *        already been reported.
     *    </dd>
     * </dl>
     */
    class ClientUsageMetrics {
        sessions: number;

        constructor(args?: { sessions?: number; });
    }

    /**
     * A description of the thing for which we are searching for related
     * entities.
     *
     * You must specify either <em>noteGuid</em> or <em>plainText</em>, but
     * not both. <em>filter</em> and <em>referenceUri</em> are optional.
     *
     * <dl>
     * <dt>noteGuid</dt>
     * <dd>The GUID of an existing note in your account for which related
     *         entities will be found.</dd>
     *
     * <dt>plainText</dt>
     * <dd>A string of plain text for which to find related entities.
     *         You should provide a text block with a number of characters between
     *         EDAM_RELATED_PLAINTEXT_LEN_MIN and EDAM_RELATED_PLAINTEXT_LEN_MAX.
     *         </dd>
     *
     * <dt>filter</dt>
     * <dd>The list of criteria that will constrain the notes being considered
     *         related.
     *         Please note that some of the parameters may be ignored, such as
     *         <em>order</em> and <em>ascending</em>.
     * </dd>
     *
     * <dt>referenceUri</dt>
     * <dd>A URI string specifying a reference entity, around which "relatedness"
     *         should be based. This can be an URL pointing to a web page, for example.
     * </dd>
     * </dl>
     */
    class RelatedQuery {
        noteGuid: string;
        plainText: string;
        filter: NoteFilter;
        referenceUri: string;

        constructor(args?: { noteGuid?: string; plainText?: string; filter?: NoteFilter; referenceUri?: string; });
    }

    /**
     * The result of calling findRelated().    The contents of the notes,
     * notebooks, and tags fields will be in decreasing order of expected
     * relevance.    It is possible that fewer results than requested will be
     * returned even if there are enough distinct entities in the account
     * in cases where the relevance is estimated to be low.
     *
     * <dl>
     * <dt>notes</dt>
     * <dd>If notes have been requested to be included, this will be the
     *         list of notes.</dd>
     *
     * <dt>notebooks</dt>
     * <dd>If notebooks have been requested to be included, this will be the
     *         list of notebooks.</dd>
     *
     * <dt>tags</dt>
     * <dd>If tags have been requested to be included, this will be the list
     *         of tags.</dd>
     * </dl>
     *
     * <dt>containingNotebooks</dt>
     * <dd>If <code>includeContainingNotebooks</code> is set to <code>true</code>
     *         in the RelatedResultSpec, return the list of notebooks to
     *         to which the returned related notes belong. The notebooks in this
     *         list will occur once per notebook GUID and are represented as
     *         NotebookDescriptor objects.</dd>
     * </dl>
     * </dl>
     */
    class RelatedResult {
        notes: Note[];
        notebooks: Notebook[];
        tags: Tag[];
        containingNotebooks: NotebookDescriptor[];

        constructor(args?: { notes?: Note[]; notebooks?: Notebook[]; tags?: Tag[]; containingNotebooks?: NotebookDescriptor[]; });
    }

    /**
     * A description of the thing for which the service will find related
     * entities, via findRelated(), together with a description of what
     * type of entities and how many you are seeking in the
     * RelatedResult.
     *
     * <dl>
     * <dt>maxNotes</dt>
     * <dd>Return notes that are related to the query, but no more than
     *         this many.    Any value greater than EDAM_RELATED_MAX_NOTES
     *         will be silently capped.    If you do not set this field, then
     *         no notes will be returned.</dd>
     *
     * <dt>maxNotebooks</dt>
     * <dd>Return notebooks that are related to the query, but no more than
     *         this many.    Any value greater than EDAM_RELATED_MAX_NOTEBOOKS
     *         will be silently capped.    If you do not set this field, then
     *         no notebooks will be returned.</dd>
     *
     * <dt>maxTags</dt>
     * <dd>Return tags that are related to the query, but no more than
     *         this many.    Any value greater than EDAM_RELATED_MAX_TAGS
     *         will be silently capped.    If you do not set this field, then
     *         no tags will be returned.</dd>
     * </dl>
     *
     * <dt>writableNotebooksOnly</dt>
     * <dd>Require that all returned related notebooks are writable.
     *         The user will be able to create notes in all returned notebooks.
     *         However, individual notes returned may still belong to notebooks
     *         in which the user lacks the ability to create notes.</dd>
     * </dl>
     *
     * <dt>includeContainingNotebooks</dt>
     * <dd>If set to <code>true</code>, return the containingNotebooks field
     *         in the RelatedResult, which will contain the list of notebooks to
     *         to which the returned related notes belong.</dd>
     * </dl>
     * </dl>
     */
    class RelatedResultSpec {
        maxNotes: number;
        maxNotebooks: number;
        maxTags: number;
        writableNotebooksOnly: boolean;
        includeContainingNotebooks: boolean;

        constructor(args?: { maxNotes?: number; maxNotebooks?: number; maxTags?: number; writableNotebooksOnly?: boolean; includeContainingNotebooks?: boolean; });
    }
    /**
     * This enumeration defines the possible permission levels for a user.
     * Free accounts will have a level of NORMAL and paid Premium accounts
     * will have a level of PREMIUM.
     */
    enum PrivilegeLevel {
        'NORMAL' = 1,
        'PREMIUM' = 3,
        'VIP' = 5,
        'MANAGER' = 7,
        'SUPPORT' = 8,
        'ADMIN' = 9,
    }

    /**
     * Every search query is specified as a sequence of characters.
     * Currently, only the USER query format is supported.
     */
    enum QueryFormat {
        'USER' = 1,
        'SEXP' = 2,
    }

    /**
     * This enumeration defines the possible sort ordering for notes when
     * they are returned from a search result.
     */
    enum NoteSortOrder {
        'CREATED' = 1,
        'UPDATED' = 2,
        'RELEVANCE' = 3,
        'UPDATE_SEQUENCE_NUMBER' = 4,
        'TITLE' = 5,
    }

    /**
     * This enumeration defines the possible states of a premium account
     *
     * NONE:        the user has never attempted to become a premium subscriber
     *
     * PENDING: the user has requested a premium account but their charge has not
     *     been confirmed
     *
     * ACTIVE:    the user has been charged and their premium account is in good
     *    standing
     *
     * FAILED:    the system attempted to charge the was denied. Their premium
     *     privileges have been revoked. We will periodically attempt to re-validate
     *     their order.
     *
     * CANCELLATION_PENDING: the user has requested that no further charges be made
     *     but the current account is still active.
     *
     * CANCELED: the premium account was canceled either because of failure to pay
     *     or user cancelation. No more attempts will be made to activate the account.
     */
    enum PremiumOrderStatus {
        'NONE' = 0,
        'PENDING' = 1,
        'ACTIVE' = 2,
        'FAILED' = 3,
        'CANCELLATION_PENDING' = 4,
        'CANCELED' = 5,
    }

    /**
     * Privilege levels for accessing shared notebooks.
     *
     * READ_NOTEBOOK: Recipient is able to read the contents of the shared notebook
     *     but does to have access to information about other recipients of the
     *     notebook or the activity stream information.
     *
     * MODIFY_NOTEBOOK_PLUS_ACTIVITY: Recipient has rights to read and modify the contents
     *     of the shared notebook, including the right to move notes to the trash and to create
     *     notes in the notebook.    The recipient can also access information about other
     *     recipients and the activity stream.
     *
     * READ_NOTEBOOK_PLUS_ACTIVITY: Recipient has READ_NOTEBOOK rights and can also
     *     access information about other recipients and the activity stream.
     *
     * GROUP: If the user belongs to a group, such as a Business, that has a defined
     *     privilege level, use the privilege level of the group as the privilege for
     *     the individual.
     *
     * FULL_ACCESS: Recipient has full rights to the shared notebook and recipient lists,
     *     including privilege to revoke and create invitations and to change privilege
     *     levels on invitations for individuals.    This privilege level is primarily intended
     *     for use by individual shares.
     *
     * BUSINESS_FULL_ACCESS: Intended for use with Business Notebooks, a
     * BUSINESS_FULL_ACCESS level is FULL_ACCESS with the additional rights to
     * change how the notebook will appear in the business library, including the
     * rights to publish and unpublish the notebook from the library.
     */
    enum SharedNotebookPrivilegeLevel {
        'READ_NOTEBOOK' = 0,
        'MODIFY_NOTEBOOK_PLUS_ACTIVITY' = 1,
        'READ_NOTEBOOK_PLUS_ACTIVITY' = 2,
        'GROUP' = 3,
        'FULL_ACCESS' = 4,
        'BUSINESS_FULL_ACCESS' = 5,
    }

    /**
     * Enumeration of the roles that a User can have within a sponsored group.
     *
     * GROUP_MEMBER: The user is a member of the group with no special privileges.
     *
     * GROUP_ADMIN: The user is an administrator within the group.
     *
     * GROUP_OWNER: The user is the owner of the group.
     */
    enum SponsoredGroupRole {
        'GROUP_MEMBER' = 1,
        'GROUP_ADMIN' = 2,
        'GROUP_OWNER' = 3,
    }

    /**
     * Enumeration of the roles that a User can have within an Evernote Business account.
     *
     * ADMIN: The user is an administrator of the Evernote Business account.
     *
     * NORMAL: The user is a regular user within the Evernote Business account.
     */
    enum BusinessUserRole {
        'ADMIN' = 1,
        'NORMAL' = 2,
    }

    /**
     * An enumeration describing restrictions on the domain of shared notebook
     * instances that are valid for a given operation, as used, for example, in
     * NotebookRestrictions.
     *
     * ONLY_JOINED_OR_PREVIEW: The domain consists of shared notebooks that
     *     "belong" to the recipient or still available for preview by any recipient.
     *     Shared notebooks that the recipient has joined (the username has already been
     *     assigned to our user) are in the domain.    Additionally, shared notebooks
     *     that allow preview and have not yet been joined are in the domain.
     *
     * NO_SHARED_NOTEBOOKS: No shared notebooks are applicable to the operation.
     */
    enum SharedNotebookInstanceRestrictions {
        'ONLY_JOINED_OR_PREVIEW' = 1,
        'NO_SHARED_NOTEBOOKS' = 2,
    }

    /**
     * An enumeration describing the configuration state related to receiving
     * reminder e-mails from the service.    Reminder e-mails summarize notes
     * based on their Note.attributes.reminderTime values.
     *
     * DO_NOT_SEND: The user has selected to not receive reminder e-mail.
     *
     * SEND_DAILY_EMAIL: The user has selected to receive reminder e-mail for those
     *     days when there is a reminder.
     */
    enum ReminderEmailConfig {
        'DO_NOT_SEND' = 1,
        'SEND_DAILY_EMAIL' = 2,
    }

    /**
     *    In several places, EDAM exchanges blocks of bytes of data for a component
     *    which may be relatively large.    For example:    the contents of a clipped
     *    HTML note, the bytes of an embedded image, or the recognition XML for
     *    a large image.    This structure is used in the protocol to represent
     *    any of those large blocks of data when they are transmitted or when
     *    they are only referenced their metadata.
     *
     * <dl>
     *    <dt>bodyHash</dt>
     *        <dd>This field carries a one-way hash of the contents of the
     *        data body, in binary form.    The hash function is MD5<br/>
     *        Length:    EDAM_HASH_LEN (exactly)
     *        </dd>
     *
     *    <dt>size</dt>
     *        <dd>The length, in bytes, of the data body.
     *        </dd>
     *
     *    <dt>body</dt>
     *        <dd>This field is set to contain the binary contents of the data
     *        whenever the resource is being transferred.    If only metadata is
     *        being exchanged, this field will be empty.    For example, a client could
     *        notify the service about the change to an attribute for a resource
     *        without transmitting the binary resource contents.
     *        </dd>
     *    </dl>
     */
    class Data {
        bodyHash: string;
        size: number;
        body: string;

        constructor(args?: { bodyHash?: string; size?: number; body?: string; });
    }

    /**
     *    A structure holding the optional attributes that can be stored
     *    on a User.    These are generally less critical than the core User fields.
     *
     * <dl>
     *    <dt>defaultLocationName</dt>
     *        <dd>the location string that should be associated
     *        with the user in order to determine where notes are taken if not otherwise
     *        specified.<br/>
     *        Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *        </dd>
     *
     *    <dt>defaultLatitude</dt>
     *        <dd>if set, this is the latitude that should be
     *        assigned to any notes that have no other latitude information.
     *        </dd>
     *
     *    <dt>defaultLongitude</dt>
     *        <dd>if set, this is the longitude that should be
     *        assigned to any notes that have no other longitude information.
     *        </dd>
     *
     *    <dt>preactivation</dt>
     *        <dd>if set, the user account is not yet confirmed for
     *        login.    I.e. the account has been created, but we are still waiting for
     *        the user to complete the activation step.
     *        </dd>
     *
     *    <dt>viewedPromotions</dt>
     *        <dd>a list of promotions the user has seen.
     *         This list may occasionally be modified by the system when promotions are
     *         no longer available.<br/>
     *         Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *        </dd>
     *
     *    <dt>incomingEmailAddress</dt>
     *        <dd>if set, this is the email address that the
     *         user may send email to in order to add an email note directly into the
     *         account via the SMTP email gateway.    This is the part of the email
     *         address before the '@' symbol ... our domain is not included.
     *         If this is not set, the user may not add notes via the gateway.<br/>
     *         Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *        </dd>
     *
     *    <dt>recentMailedAddresses</dt>
     *        <dd>if set, this will contain a list of email
     *         addresses that have recently been used as recipients
     *         of outbound emails by the user.    This can be used to pre-populate a
     *         list of possible destinations when a user wishes to send a note via
     *         email.<br/>
     *         Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX each<br/>
     *         Max:    EDAM_USER_RECENT_MAILED_ADDRESSES_MAX entries
     *        </dd>
     *
     *    <dt>comments</dt>
     *        <dd>Free-form text field that may hold general support
     *         information, etc.<br/>
     *         Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *        </dd>
     *
     *    <dt>dateAgreedToTermsOfService</dt>
     *        <dd>The date/time when the user agreed to
     *         the terms of service.    This can be used as the effective "start date"
     *         for the account.
     *        </dd>
     *
     *    <dt>maxReferrals</dt>
     *        <dd>The number of referrals that the user is permitted
     *         to make.
     *        </dd>
     *
     *    <dt>referralCount</dt>
     *        <dd>The number of referrals sent from this account.
     *        </dd>
     *
     *    <dt>refererCode</dt>
     *        <dd>A code indicating where the user was sent from. AKA
     *         promotion code
     *        </dd>
     *
     *    <dt>sentEmailDate</dt>
     *        <dd>The most recent date when the user sent outbound
     *         emails from the service.    Used with sentEmailCount to limit the number
     *         of emails that can be sent per day.
     *        </dd>
     *
     *    <dt>sentEmailCount</dt>
     *        <dd>The number of emails that were sent from the user
     *         via the service on sentEmailDate.    Used to enforce a limit on the number
     *         of emails per user per day to prevent spamming.
     *        </dd>
     *
     *    <dt>dailyEmailLimit</dt>
     *        <dd>If set, this is the maximum number of emails that
     *         may be sent in a given day from this account.    If unset, the server will
     *         use the configured default limit.
     *        </dd>
     *
     *    <dt>emailOptOutDate</dt>
     *        <dd>If set, this is the date when the user asked
     *         to be excluded from offers and promotions sent by Evernote.    If not set,
     *         then the user currently agrees to receive these messages.
     *        </dd>
     *
     *    <dt>partnerEmailOptInDate</dt>
     *        <dd>If set, this is the date when the user asked
     *         to be included in offers and promotions sent by Evernote's partners.
     *         If not sent, then the user currently does not agree to receive these
     *         emails.
     *        </dd>
     *
     *    <dt>preferredLanguage</dt>
     *        <dd>a 2 character language codes based on:
     *                http://ftp.ics.uci.edu/pub/ietf/http/related/iso639.txt used for
     *             localization purposes to determine what language to use for the web
     *             interface and for other direct communication (e.g. emails).
     *        </dd>
     *
     *    <dt>preferredCountry</dt>
     *        <dd>Preferred country code based on ISO 3166-1-alpha-2 indicating the
     *        users preferred country</dd>
     *
     *    <dt>clipFullPage</dt>
     *        <dd>Boolean flag set to true if the user wants to clip full pages by
     *        default when they use the web clipper without a selection.</dd>
     *
     *    <dt>twitterUserName</dt>
     *        <dd>The username of the account of someone who has chosen to enable
     *        Twittering into Evernote.    This value is subject to change, since users
     *        may change their Twitter user name.</dd>
     *
     *    <dt>twitterId</dt>
     *        <dd>The unique identifier of the user's Twitter account if that user
     *        has chosen to enable Twittering into Evernote.</dd>
     *
     *    <dt>groupName</dt>
     *        <dd>A name identifier used to identify a particular set of branding and
     *         light customization.</dd>
     *
     *    <dt>recognitionLanguage</dt>
     *        <dd>a 2 character language codes based on:
     *                http://ftp.ics.uci.edu/pub/ietf/http/related/iso639.txt
     *                If set, this is used to determine the language that should be used
     *                when processing images and PDF files to find text.
     *                If not set, then the 'preferredLanguage' will be used.
     *        </dd>
     *
     *    <dt>educationalInstitution</dt>
     *        <dd>a flag indicating that the user is part of an educational institution which
     *        makes them eligible for discounts on bulk purchases
     *        </dd>
     *
     *    <dt>businessAddress</dt>
     *        <dd>A string recording the business address of a Sponsored Account user who has requested invoicing.
     *        </dd>
     *
     *    <dt>hideSponsorBilling</dt>
     *        <dd>A flag indicating whether to hide the billing information on a sponsored
     *                account owner's settings page
     *        </dd>
     *
     *    <dt>taxExempt</dt>
     *        <dd>A flag indicating the user's sponsored group is exempt from sale tax
     *        </dd>
     *
     *    <dt>useEmailAutoFiling</dt>
     *        <dd>A flag indicating whether the user chooses to allow Evernote to automatically
     *                file and tag emailed notes
     *        </dd>
     *
     *    <dt>reminderEmailConfig</dt>
     *        <dd>Configuration state for whether or not the user wishes to receive
     *                reminder e-mail.    This setting applies to both the reminder e-mail sent
     *                for personal reminder notes and for the reminder e-mail sent for reminder
     *                notes in the user's business notebooks that the user has configured for
     *                e-mail notifications.
     *        </dd>
     *    </dl>
     */
    class UserAttributes {
        defaultLocationName: string;
        defaultLatitude: number;
        defaultLongitude: number;
        preactivation: boolean;
        viewedPromotions: string[];
        incomingEmailAddress: string;
        recentMailedAddresses: string[];
        comments: string;
        dateAgreedToTermsOfService: number;
        maxReferrals: number;
        referralCount: number;
        refererCode: string;
        sentEmailDate: number;
        sentEmailCount: number;
        dailyEmailLimit: number;
        emailOptOutDate: number;
        partnerEmailOptInDate: number;
        preferredLanguage: string;
        preferredCountry: string;
        clipFullPage: boolean;
        twitterUserName: string;
        twitterId: string;
        groupName: string;
        recognitionLanguage: string;
        referralProof: string;
        educationalDiscount: boolean;
        businessAddress: string;
        hideSponsorBilling: boolean;
        taxExempt: boolean;
        useEmailAutoFiling: boolean;
        reminderEmailConfig: ReminderEmailConfig;

        constructor(args?: { defaultLocationName?: string; defaultLatitude?: number; defaultLongitude?: number; preactivation?: boolean; viewedPromotions?: string[]; incomingEmailAddress?: string; recentMailedAddresses?: string[]; comments?: string; dateAgreedToTermsOfService?: number; maxReferrals?: number; referralCount?: number; refererCode?: string; sentEmailDate?: number; sentEmailCount?: number; dailyEmailLimit?: number; emailOptOutDate?: number; partnerEmailOptInDate?: number; preferredLanguage?: string; preferredCountry?: string; clipFullPage?: boolean; twitterUserName?: string; twitterId?: string; groupName?: string; recognitionLanguage?: string; referralProof?: string; educationalDiscount?: boolean; businessAddress?: string; hideSponsorBilling?: boolean; taxExempt?: boolean; useEmailAutoFiling?: boolean; reminderEmailConfig?: ReminderEmailConfig; });
    }

    /**
     *    This represents the bookkeeping information for the user's subscription.
     *
     * <dl>
     *    <dt>uploadLimit</dt>
     *        <dd>The number of bytes that can be uploaded to the account
     *        in the current month.    For new notes that are created, this is the length
     *        of the note content (in Unicode characters) plus the size of each resource
     *        (in bytes).    For edited notes, this is the the difference between the old
     *        length and the new length (if this is greater than 0) plus the size of
     *        each new resource.
     *        </dd>
     *    <dt>uploadLimitEnd</dt>
     *        <dd>The date and time when the current upload limit
     *        expires.    At this time, the monthly upload count reverts to 0 and a new
     *        limit is imposed.    This date and time is exclusive, so this is effectively
     *        the start of the new month.
     *        </dd>
     *    <dt>uploadLimitNextMonth</dt>
     *        <dd> When uploadLimitEnd is reached, the service
     *        will change uploadLimit to uploadLimitNextMonth. If a premium account is
     *        canceled, this mechanism will reset the quota appropriately.
     *        </dd>
     *    <dt>premiumServiceStatus</dt>
     *        <dd>Indicates the phases of a premium account
     *        during the billing process.
     *        </dd>
     *    <dt>premiumOrderNumber</dt>
     *        <dd>The order number used by the commerce system to
     *        process recurring payments
     *        </dd>
     *    <dt>premiumServiceStart</dt>
     *        <dd>The start date when this premium promotion
     *        began (this number will get overwritten if a premium service is canceled
     *        and then re-activated).
     *        </dd>
     *    <dt>premiumCommerceService</dt>
     *        <dd>The commerce system used (paypal, Google
     *        checkout, etc)
     *        </dd>
     *    <dt>premiumServiceSKU</dt>
     *        <dd>The code associated with the purchase eg. monthly
     *        or annual purchase. Clients should interpret this value and localize it.
     *        </dd>
     *    <dt>lastSuccessfulCharge</dt>
     *        <dd>Date the last time the user was charged.
     *        Null if never charged.
     *        </dd>
     *    <dt>lastFailedCharge</dt>
     *        <dd>Date the last time a charge was attempted and
     *        failed.
     *        </dd>
     *    <dt>lastFailedChargeReason</dt>
     *        <dd>Reason provided for the charge failure
     *        </dd>
     *    <dt>nextPaymentDue</dt>
     *        <dd>The end of the billing cycle. This could be in the
     *        past if there are failed charges.
     *        </dd>
     *    <dt>premiumLockUntil</dt>
     *        <dd>An internal variable to manage locking operations
     *        on the commerce variables.
     *        </dd>
     *    <dt>updated</dt>
     *        <dd>The date any modification where made to this record.
     *        </dd>
     *    <dt>premiumSubscriptionNumber</dt>
     *        <dd>The number number identifying the
     *        recurring subscription used to make the recurring charges.
     *        </dd>
     *    <dt>lastRequestedCharge</dt>
     *        <dd>Date charge last attempted</dd>
     *    <dt>currency</dt>
     *        <dd>ISO 4217 currency code</dd>
     *    <dt>unitPrice</dt>
     *        <dd>charge in the smallest unit of the currency (e.g. cents for USD)</dd>
     *    <dt>businessId</dt>
     *        <dd><i>DEPRECATED:</i>See BusinessUserInfo.</dd>
     *    <dt>businessName</dt>
     *        <dd><i>DEPRECATED:</i>See BusinessUserInfo.</dd>
     *    <dt>businessRole</dt>
     *        <dd><i>DEPRECATED:</i>See BusinessUserInfo.</dd>
     *    <dt>unitDiscount</dt>
     *        <dd>discount per seat in negative amount and smallest unit of the currency (e.g. cents for USD)</dd>
     *    <dt>nextChargeDate</dt>
     *        <dd>The next time the user will be charged, may or may not be the same as nextPaymentDue</dd>
     *    </dl>
     */
    class Accounting {
        uploadLimit: number;
        uploadLimitEnd: number;
        uploadLimitNextMonth: number;
        premiumServiceStatus: PremiumOrderStatus;
        premiumOrderNumber: string;
        premiumCommerceService: string;
        premiumServiceStart: number;
        premiumServiceSKU: string;
        lastSuccessfulCharge: number;
        lastFailedCharge: number;
        lastFailedChargeReason: string;
        nextPaymentDue: number;
        premiumLockUntil: number;
        updated: number;
        premiumSubscriptionNumber: string;
        lastRequestedCharge: number;
        currency: string;
        unitPrice: number;
        businessId: number;
        businessName: string;
        businessRole: BusinessUserRole;
        unitDiscount: number;
        nextChargeDate: number;

        constructor(args?: { uploadLimit?: number; uploadLimitEnd?: number; uploadLimitNextMonth?: number; premiumServiceStatus?: PremiumOrderStatus; premiumOrderNumber?: string; premiumCommerceService?: string; premiumServiceStart?: number; premiumServiceSKU?: string; lastSuccessfulCharge?: number; lastFailedCharge?: number; lastFailedChargeReason?: string; nextPaymentDue?: number; premiumLockUntil?: number; updated?: number; premiumSubscriptionNumber?: string; lastRequestedCharge?: number; currency?: string; unitPrice?: number; businessId?: number; businessName?: string; businessRole?: BusinessUserRole; unitDiscount?: number; nextChargeDate?: number; });
    }

    /**
     * This structure is used to provide information about an Evernote Business
     * membership, for members who are part of a business.
     *
     * <dl>
     * <dt>businessId</dt>
     *     <dd>The ID of the Evernote Business account that the user is a member of.
     * <dt>businessName</dt>
     *     <dd>The human-readable name of the Evernote Business account that the user
     *             is a member of.</dd>
     * <dt>role</dt>
     *     <dd>The role of the user within the Evernote Business account that
     *             they are a member of.</dd>
     * <dt>email</dt>
     *     <dd>An e-mail address that will be used by the service in the context of your
     *             Evernote Business activities.    For example, this e-mail address will be used
     *             when you e-mail a business note, when you update notes in the account of
     *             your business, etc.    The business e-mail cannot be used for identification
     *             purposes such as for logging into the service.
     *     </dd>
     * </dl>
     */
    class BusinessUserInfo {
        businessId: number;
        businessName: string;
        role: BusinessUserRole;
        email: string;

        constructor(args?: { businessId?: number; businessName?: string; role?: BusinessUserRole; email?: string; });
    }

    /**
     *    This structure is used to provide information about a user's Premium account.
     * <dl>
     *    <dt>currentTime</dt>
     *        <dd>
     *        The server-side date and time when this data was generated.
     *        </dd>
     *    <dt>premium</dt>
     *        <dd>
     *        True if the user's account is Premium.
     *        </dd>
     *    <dt>premiumRecurring</dt>
     *        <dd>
     *        True if the user's account is Premium and has a recurring payment method.
     *        </dd>
     *    <dt>premiumExpirationDate</dt>
     *        <dd>
     *        The date when the user's Premium account expires, or the date when the
     *        user's account is due for payment if it has a recurring payment method.
     *        </dd>
     *    <dt>premiumExtendable</dt>
     *        <dd>
     *        True if the user is eligible for purchasing Premium account extensions.
     *        </dd>
     *    <dt>premiumPending</dt>
     *        <dd>
     *        True if the user's Premium account is pending payment confirmation
     *        </dd>
     *    <dt>premiumCancellationPending</dt>
     *        <dd>
     *        True if the user has requested that no further charges to be made; the
     *        Premium account will remain active until it expires.
     *        </dd>
     *    <dt>canPurchaseUploadAllowance</dt>
     *        <dd>
     *        True if the user is eligible for purchasing additional upload allowance.
     *        </dd>
     *    <dt>sponsoredGroupName</dt>
     *        <dd>
     *        The name of the sponsored group that the user is part of.
     *        </dd>
     *    <dt>sponsoredGroupRole</dt>
     *        <dd>
     *        DEPRECATED - will be removed in a future update.
     *        </dd>
     *    <dt>premiumUpgradable</dt>
     *        <dd>
     *        True if the user is eligible for purchasing Premium account upgrade.
     *        </dd>
     *    </dl>
     */
    class PremiumInfo {
        currentTime: number;
        premium: boolean;
        premiumRecurring: boolean;
        premiumExpirationDate: number;
        premiumExtendable: boolean;
        premiumPending: boolean;
        premiumCancellationPending: boolean;
        canPurchaseUploadAllowance: boolean;
        sponsoredGroupName: string;
        sponsoredGroupRole: SponsoredGroupRole;
        premiumUpgradable: boolean;

        constructor(args?: { currentTime: number; premium: boolean; premiumRecurring: boolean; premiumExpirationDate?: number; premiumExtendable: boolean; premiumPending: boolean; premiumCancellationPending: boolean; canPurchaseUploadAllowance: boolean; sponsoredGroupName?: string; sponsoredGroupRole?: SponsoredGroupRole; premiumUpgradable?: boolean; });
    }

    /**
     *    This represents the information about a single user account.
     * <dl>
     *    <dt>id</dt>
     *        <dd>The unique numeric identifier for the account, which will not
     *        change for the lifetime of the account.
     *        </dd>
     *
     *    <dt>username</dt>
     *        <dd>The name that uniquely identifies a single user account. This name
     *        may be presented by the user, along with their password, to log into
     *        their account.
     *        May only contain a-z, 0-9, or '-', and may not start or end with the '-'
     *        <br/>
     *        Length:    EDAM_USER_USERNAME_LEN_MIN - EDAM_USER_USERNAME_LEN_MAX
     *        <br/>
     *        Regex:    EDAM_USER_USERNAME_REGEX
     *        </dd>
     *
     *    <dt>email</dt>
     *        <dd>The email address registered for the user.    Must comply with
     *        RFC 2821 and RFC 2822.<br/>
     *        Third party applications that authenticate using OAuth do not have
     *        access to this field.
     *        Length:    EDAM_EMAIL_LEN_MIN - EDAM_EMAIL_LEN_MAX
     *        <br/>
     *        Regex:    EDAM_EMAIL_REGEX
     *        </dd>
     *
     *    <dt>name</dt>
     *        <dd>The printable name of the user, which may be a combination
     *        of given and family names.    This is used instead of separate "first"
     *        and "last" names due to variations in international name format/order.
     *        May not start or end with a whitespace character.    May contain any
     *        character but carriage return or newline (Unicode classes Zl and Zp).
     *        <br/>
     *        Length:    EDAM_USER_NAME_LEN_MIN - EDAM_USER_NAME_LEN_MAX
     *        <br/>
     *        Regex:    EDAM_USER_NAME_REGEX
     *        </dd>
     *
     *    <dt>timezone</dt>
     *        <dd>The zone ID for the user's default location.    If present,
     *        this may be used to localize the display of any timestamp for which no
     *        other timezone is available.
     *        The format must be encoded as a standard zone ID such as
     *        "America/Los_Angeles" or "GMT+08:00"
     *        <br/>
     *        Length:    EDAM_TIMEZONE_LEN_MIN - EDAM_TIMEZONE_LEN_MAX
     *        <br/>
     *        Regex:    EDAM_TIMEZONE_REGEX
     *        </dd>
     *
     *    <dt>privilege</dt>
     *        <dd>The level of access permitted for the user.
     *        </dd>
     *
     *    <dt>created</dt>
     *        <dd>The date and time when this user account was created in the
     *        service.
     *        </dd>
     *
     *    <dt>updated</dt>
     *        <dd>The date and time when this user account was last modified
     *        in the service.
     *        </dd>
     *
     *    <dt>deleted</dt>
     *        <dd>If the account has been deleted from the system (e.g. as
     *        the result of a legal request by the user), the date and time of the
     *        deletion will be represented here.    If not, this value will not be set.
     *        </dd>
     *
     *    <dt>active</dt>
     *        <dd>If the user account is available for login and
     *        synchronization, this flag will be set to true.
     *        </dd>
     *
     *    <dt>shardId</dt>
     *        <dd>DEPRECATED - Client applications should have no need to use this field.
     *        </dd>
     *
     *    <dt>attributes</dt>
     *        <dd>If present, this will contain a list of the attributes
     *        for this user account.
     *        </dd>
     *
     *    <dt>accounting</dt>
     *        <dd>Bookkeeping information for the user's subscription.
     *        </dd>
     *
     *    <dt>premiumInfo</dt>
     *        <dd>If present, this will contain a set of commerce information
     *        relating to the user's premium service level.
     *        </dd>
     *
     *    <dt>businessUserInfo</dt>
     *        <dd>If present, this will contain a set of business information
     *        relating to the user's business membership.    If not present, the
     *        user is not currently part of a business.
     *        </dd>
     *    </dl>
     */
    class User {
        id: number;
        username: string;
        email: string;
        name: string;
        timezone: string;
        privilege: PrivilegeLevel;
        created: number;
        updated: number;
        deleted: number;
        active: boolean;
        shardId: string;
        attributes: UserAttributes;
        accounting: Accounting;
        premiumInfo: PremiumInfo;
        businessUserInfo: BusinessUserInfo;

        constructor(args?: { id?: number; username?: string; email?: string; name?: string; timezone?: string; privilege?: PrivilegeLevel; created?: number; updated?: number; deleted?: number; active?: boolean; shardId?: string; attributes?: UserAttributes; accounting?: Accounting; premiumInfo?: PremiumInfo; businessUserInfo?: BusinessUserInfo; });
    }

    /**
     *    A tag within a user's account is a unique name which may be organized
     *    a simple hierarchy.
     * <dl>
     *    <dt>guid</dt>
     *        <dd>The unique identifier of this tag. Will be set by the service,
     *        so may be omitted by the client when creating the Tag.
     *        <br/>
     *        Length:    EDAM_GUID_LEN_MIN - EDAM_GUID_LEN_MAX
     *        <br/>
     *        Regex:    EDAM_GUID_REGEX
     *        </dd>
     *
     *    <dt>name</dt>
     *        <dd>A sequence of characters representing the tag's identifier.
     *        Case is preserved, but is ignored for comparisons.
     *        This means that an account may only have one tag with a given name, via
     *        case-insensitive comparison, so an account may not have both "food" and
     *        "Food" tags.
     *        May not contain a comma (','), and may not begin or end with a space.
     *        <br/>
     *        Length:    EDAM_TAG_NAME_LEN_MIN - EDAM_TAG_NAME_LEN_MAX
     *        <br/>
     *        Regex:    EDAM_TAG_NAME_REGEX
     *        </dd>
     *
     *    <dt>parentGuid</dt>
     *        <dd>If this is set, then this is the GUID of the tag that
     *        holds this tag within the tag organizational hierarchy.    If this is
     *        not set, then the tag has no parent and it is a "top level" tag.
     *        Cycles are not allowed (e.g. a->parent->parent == a) and will be
     *        rejected by the service.
     *        <br/>
     *        Length:    EDAM_GUID_LEN_MIN - EDAM_GUID_LEN_MAX
     *        <br/>
     *        Regex:    EDAM_GUID_REGEX
     *        </dd>
     *
     *    <dt>updateSequenceNum</dt>
     *        <dd>A number identifying the last transaction to
     *        modify the state of this object.    The USN values are sequential within an
     *        account, and can be used to compare the order of modifications within the
     *        service.
     *        </dd>
     *    </dl>
     */
    class Tag {
        guid: string;
        name: string;
        parentGuid: string;
        updateSequenceNum: number;

        constructor(args?: { guid?: string; name?: string; parentGuid?: string; updateSequenceNum?: number; });
    }

    /**
     * A structure that wraps a map of name/value pairs whose values are not
     * always present in the structure in order to reduce space when obtaining
     * batches of entities that contain the map.
     *
     * When the server provides the client with a LazyMap, it will fill in either
     * the keysOnly field or the fullMap field, but never both, based on the API
     * and parameters.
     *
     * When a client provides a LazyMap to the server as part of an update to
     * an object, the server will only update the LazyMap if the fullMap field is
     * set. If the fullMap field is not set, the server will not make any changes
     * to the map.
     *
     * Check the API documentation of the individual calls involving the LazyMap
     * for full details including the constraints of the names and values of the
     * map.
     *
     * <dl>
     * <dt>keysOnly</dt>
     *     <dd>The set of keys for the map.    This field is ignored by the
     *             server when set.
     *     </dd>
     *
     * <dt>fullMap</dt>
     *     <dd>The complete map, including all keys and values.
     *     </dd>
     * </dl>
     */
    class LazyMap {
        keysOnly: string[];
        fullMap: { [k: string]: string; };

        constructor(args?: { keysOnly?: string[]; fullMap?: { [k: string]: string; }; });
    }

    /**
     * Structure holding the optional attributes of a Resource
     * <dl>
     * <dt>sourceURL</dt>
     *     <dd>the original location where the resource was hosted
     *     <br/>
     *        Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *     </dd>
     *
     * <dt>timestamp</dt>
     *     <dd>the date and time that is associated with this resource
     *     (e.g. the time embedded in an image from a digital camera with a clock)
     *     </dd>
     *
     * <dt>latitude</dt>
     *     <dd>the latitude where the resource was captured
     *     </dd>
     *
     * <dt>longitude</dt>
     *     <dd>the longitude where the resource was captured
     *     </dd>
     *
     * <dt>altitude</dt>
     *     <dd>the altitude where the resource was captured
     *     </dd>
     *
     * <dt>cameraMake</dt>
     *     <dd>information about an image's camera, e.g. as embedded in
     *     the image's EXIF data
     *     <br/>
     *     Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *     </dd>
     *
     * <dt>cameraModel</dt>
     *     <dd>information about an image's camera, e.g. as embedded
     *     in the image's EXIF data
     *     <br/>
     *     Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *     </dd>
     *
     * <dt>clientWillIndex</dt>
     *     <dd>if true, then the original client that submitted
     *     the resource plans to submit the recognition index for this resource at a
     *     later time.
     *     </dd>
     *
     * <dt>recoType</dt>
     *     <dd>DEPRECATED - this field is no longer set by the service, so should
     *         be ignored.
     *     </dd>
     *
     * <dt>fileName</dt>
     *     <dd>if the resource came from a source that provided an
     *     explicit file name, the original name will be stored here.    Many resources
     *     come from unnamed sources, so this will not always be set.
     *     </dd>
     *
     * <dt>attachment</dt>
     *     <dd>this will be true if the resource should be displayed as an attachment,
     *     or false if the resource should be displayed inline (if possible).
     *     </dd>
     *
     * <dt>applicationData</dt>
     * <dd>Provides a location for applications to store a relatively small
     * (4kb) blob of data associated with a Resource that is not visible to the user
     * and that is opaque to the Evernote service. A single application may use at most
     * one entry in this map, using its API consumer key as the map key. See the
     * documentation for LazyMap for a description of when the actual map values
     * are returned by the service.
     * <p>To safely add or modify your application's entry in the map, use
     * NoteStore.setResourceApplicationDataEntry. To safely remove your application's
     * entry from the map, use NoteStore.unsetResourceApplicationDataEntry.</p>
     * Minimum length of a name (key): EDAM_APPLICATIONDATA_NAME_LEN_MIN
     * <br/>
     * Sum max size of key and value: EDAM_APPLICATIONDATA_ENTRY_LEN_MAX
     * <br/>
     * Syntax regex for name (key): EDAM_APPLICATIONDATA_NAME_REGEX
     * </dd>
     *
     * </dl>
     */
    class ResourceAttributes {
        sourceURL: string;
        timestamp: number;
        latitude: number;
        longitude: number;
        altitude: number;
        cameraMake: string;
        cameraModel: string;
        clientWillIndex: boolean;
        recoType: string;
        fileName: string;
        attachment: boolean;
        applicationData: LazyMap;

        constructor(args?: { sourceURL?: string; timestamp?: number; latitude?: number; longitude?: number; altitude?: number; cameraMake?: string; cameraModel?: string; clientWillIndex?: boolean; recoType?: string; fileName?: string; attachment?: boolean; applicationData?: LazyMap; });
    }

    /**
     * Every media file that is embedded or attached to a note is represented
     * through a Resource entry.
     * <dl>
     * <dt>guid</dt>
     *     <dd>The unique identifier of this resource.    Will be set whenever
     *     a resource is retrieved from the service, but may be null when a client
     *     is creating a resource.
     *     <br/>
     *     Length:    EDAM_GUID_LEN_MIN - EDAM_GUID_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_GUID_REGEX
     *     </dd>
     *
     * <dt>noteGuid</dt>
     *     <dd>The unique identifier of the Note that holds this
     *     Resource. Will be set whenever the resource is retrieved from the service,
     *     but may be null when a client is creating a resource.
     *     <br/>
     *     Length:    EDAM_GUID_LEN_MIN - EDAM_GUID_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_GUID_REGEX
     *     </dd>
     *
     * <dt>data</dt>
     *     <dd>The contents of the resource.
     *     Maximum length:    The data.body is limited to EDAM_RESOURCE_SIZE_MAX_FREE
     *     for free accounts and EDAM_RESOURCE_SIZE_MAX_PREMIUM for premium accounts.
     *     </dd>
     *
     * <dt>mime</dt>
     *     <dd>The MIME type for the embedded resource.    E.g. "image/gif"
     *     <br/>
     *     Length:    EDAM_MIME_LEN_MIN - EDAM_MIME_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_MIME_REGEX
     *     </dd>
     *
     * <dt>width</dt>
     *     <dd>If set, this contains the display width of this resource, in
     *     pixels.
     *     </dd>
     *
     * <dt>height</dt>
     *     <dd>If set, this contains the display height of this resource,
     *     in pixels.
     *     </dd>
     *
     * <dt>duration</dt>
     *     <dd>DEPRECATED: ignored.
     *     </dd>
     *
     * <dt>active</dt>
     *     <dd>DEPRECATED: ignored.
     *     </dd>
     *
     * <dt>recognition</dt>
     *     <dd>If set, this will hold the encoded data that provides
     *     information on search and recognition within this resource.
     *     </dd>
     *
     * <dt>attributes</dt>
     *     <dd>A list of the attributes for this resource.
     *     </dd>
     *
     * <dt>updateSequenceNum</dt>
     *     <dd>A number identifying the last transaction to
     *     modify the state of this object. The USN values are sequential within an
     *     account, and can be used to compare the order of modifications within the
     *     service.
     *     </dd>
     *
     * <dt>alternateData</dt>
     *     <dd>Some Resources may be assigned an alternate data format by the service
     *     which may be more appropriate for indexing or rendering than the original
     *     data provided by the user.    In these cases, the alternate data form will
     *     be available via this Data element.    If a Resource has no alternate form,
     *     this field will be unset.</dd>
     * </dl>
     */
    class Resource {
        guid: string;
        noteGuid: string;
        data: Data;
        mime: string;
        width: number;
        height: number;
        duration: number;
        active: boolean;
        recognition: Data;
        attributes: ResourceAttributes;
        updateSequenceNum: number;
        alternateData: Data;

        constructor(args?: { guid?: string; noteGuid?: string; data?: Data; mime?: string; width?: number; height?: number; duration?: number; active?: boolean; recognition?: Data; attributes?: ResourceAttributes; updateSequenceNum?: number; alternateData?: Data; });
    }

    /**
     * The list of optional attributes that can be stored on a note.
     * <dl>
     * <dt>subjectDate</dt>
     *     <dd>time that the note refers to
     *     </dd>
     *
     * <dt>latitude</dt>
     *     <dd>the latitude where the note was taken
     *     </dd>
     *
     * <dt>longitude</dt>
     *     <dd>the longitude where the note was taken
     *     </dd>
     *
     * <dt>altitude</dt>
     *     <dd>the altitude where the note was taken
     *     </dd>
     *
     * <dt>author</dt>
     *     <dd>the author of the content of the note
     *     <br/>
     *     Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *     </dd>
     *
     * <dt>source</dt>
     *     <dd>the method that the note was added to the account, if the
     *     note wasn't directly authored in an Evernote desktop client.
     *     <br/>
     *     Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *     </dd>
     *
     * <dt>sourceURL</dt>
     *     <dd>the original location where the resource was hosted. For web clips,
     *     this will be the URL of the page that was clipped.
     *     <br/>
     *     Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *     </dd>
     *
     * <dt>sourceApplication</dt>
     *     <dd>an identifying string for the application that
     *     created this note.    This string does not have a guaranteed syntax or
     *     structure -- it is intended for human inspection and tracking.
     *     <br/>
     *     Length:    EDAM_ATTRIBUTE_LEN_MIN - EDAM_ATTRIBUTE_LEN_MAX
     *     </dd>
     *
     * <dt>shareDate</dt>
     *    <dd>The date and time when this note was directly shared via its own URL.
     *    This is only set on notes that were individually shared - it is independent
     *    of any notebook-level sharing of the containing notebook. This field
     *    is treated as "read-only" for clients; the server will ignore changes
     *    to this field from an external client.
     *    </dd>
     *
     * <dt>reminderOrder</dt>
     * <dd>The set of notes with this parameter set are considered
     * "reminders" and are to be treated specially by clients to give them
     * higher UI prominence within a notebook.    The value is used to sort
     * the reminder notes within the notebook with higher values
     * representing greater prominence.    Outside of the context of a
     * notebook, the value of this parameter is undefined.    The value is
     * not intended to be compared to the values of reminder notes in
     * other notebooks.    In order to allow clients to place a note at a
     * higher precedence than other notes, you should never set a value
     * greater than the current time (as defined for a Timetstamp). To
     * place a note at higher precedence than existing notes, set the
     * value to the current time as defined for a timestamp (milliseconds
     * since the epoch).    Synchronizing clients must remember the time when
     * the update was performed, using the local clock on the client,
     * and use that value when they later upload the note to the service.
     * Clients must not set the reminderOrder to the reminderTime as the
     * reminderTime could be in the future.    Those two fields are never
     * intended to be related.    The correct value for reminderOrder field
     * for new notes is the "current" time when the user indicated that
     * the note is a reminder.    Clients may implement a separate
     * "sort by date" feature to show notes ordered by reminderTime.
     * Whenever a reminderDoneTime or reminderTime is set but a
     * reminderOrder is not set, the server will fill in the current
     * server time for the reminderOrder field.</dd>
     *
     * <dt>reminderDoneTime</dt>
     * <dd>The date and time when a user dismissed/"marked done" the reminder
     * on the note.    Users typically do not manually set this value directly
     * as it is set to the time when the user dismissed/"marked done" the
     * reminder.</dd>
     *
     * <dt>reminderTime</dt>
     * <dd>The date and time a user has selected to be reminded of the note.
     * A note with this value set is known as a "reminder" and the user can
     * be reminded, via e-mail or client-specific notifications, of the note
     * when the time is reached or about to be reached.    When a user sets
     * a reminder time on a note that has a reminder done time, and that
     * reminder time is in the future, then the reminder done time should be
     * cleared.    This should happen regardless of any existing reminder time
     * that may have previously existed on the note.</dd>
     *
     * <dt>placeName</dt>
     * <dd>Allows the user to assign a human-readable location name associated
     * with a note. Users may assign values like 'Home' and 'Work'. Place
     * names may also be populated with values from geonames database
     * (e.g., a restaurant name). Applications are encouraged to normalize values
     * so that grouping values by place name provides a useful result. Applications
     * MUST NOT automatically add place name values based on geolocation without
     * confirmation from the user; that is, the value in this field should be
     * more useful than a simple automated lookup based on the note's latitude
     * and longitude.</dd>
     *
     * <dt>contentClass</dt>
     * <dd>The class (or type) of note. This field is used to indicate to
     * clients that special structured information is represented within
     * the note such that special rules apply when making
     * modifications. If contentClass is set and the client
     * application does not specifically support the specified class,
     * the client MUST treat the note as read-only. In this case, the
     * client MAY modify the note's notebook and tags via the
     * Note.notebookGuid and Note.tagGuids fields.    The client MAY also
     * modify the reminderOrder field as well as the reminderTime and
     * reminderDoneTime fields.
     * <p>Applications should set contentClass only when they are creating notes
     * that contain structured information that needs to be maintained in order
     * for the user to be able to use the note within that application.
     * Setting contentClass makes a note read-only in other applications, so
     * there is a trade-off when an application chooses to use contentClass.
     * Applications that set contentClass when creating notes must use a contentClass
     * string of the form <i>CompanyName.ApplicationName</i> to ensure uniqueness.</p>
     * Length restrictions: EDAM_NOTE_CONTENT_CLASS_LEN_MIN, EDAM_NOTE_CONTENT_CLASS_LEN_MAX
     * <br/>
     * Regex: EDAM_NOTE_CONTENT_CLASS_REGEX
     * </dd>
     *
     * <dt>applicationData</dt>
     * <dd>Provides a location for applications to store a relatively small
     * (4kb) blob of data that is not meant to be visible to the user and
     * that is opaque to the Evernote service. A single application may use at most
     * one entry in this map, using its API consumer key as the map key. See the
     * documentation for LazyMap for a description of when the actual map values
     * are returned by the service.
     * <p>To safely add or modify your application's entry in the map, use
     * NoteStore.setNoteApplicationDataEntry. To safely remove your application's
     * entry from the map, use NoteStore.unsetNoteApplicationDataEntry.</p>
     * Minimum length of a name (key): EDAM_APPLICATIONDATA_NAME_LEN_MIN
     * <br/>
     * Sum max size of key and value: EDAM_APPLICATIONDATA_ENTRY_LEN_MAX
     * <br/>
     * Syntax regex for name (key): EDAM_APPLICATIONDATA_NAME_REGEX
     * </dd>
     *
     * <dt>creatorId</dt>
     * <dd>The numeric user ID of the user who originally created the note.</dd>
     *
     * <dt>lastEditedBy</dt>
     * <dd>An indication of who made the last change to the note.    If you are
     * accessing the note via a shared notebook to which you have modification
     * rights, or if you are the owner of the notebook to which the note belongs,
     * then you have access to the value.    In this case, the value will be
     * unset if the owner of the notebook containing the note was the last to
     * make the modification, else it will be a string describing the
     * guest who made the last edit.    If you do not have access to this value,
     * it will be left unset.    This field is read-only by clients.    The server
     * will ignore all values set by clients into this field.</dd>
     *
     * <dt>lastEditorId</dt>
     * <dd>The numeric user ID of the user described in lastEditedBy.</dd>
     *
     * <dt>classifications</dt>
     * <dd>A map of classifications applied to the note by clients or by the
     * Evernote service. The key is the string name of the classification type,
     * and the value is a constant that begins with CLASSIFICATION_.</dd>
     *
     * </dl>
     */
    class NoteAttributes {
        subjectDate: number;
        latitude: number;
        longitude: number;
        altitude: number;
        author: string;
        source: string;
        sourceURL: string;
        sourceApplication: string;
        shareDate: number;
        reminderOrder: number;
        reminderDoneTime: number;
        reminderTime: number;
        placeName: string;
        contentClass: string;
        applicationData: LazyMap;
        lastEditedBy: string;
        classifications: { [k: string]: string; };
        creatorId: number;
        lastEditorId: number;

        constructor(args?: { subjectDate?: number; latitude?: number; longitude?: number; altitude?: number; author?: string; source?: string; sourceURL?: string; sourceApplication?: string; shareDate?: number; reminderOrder?: number; reminderDoneTime?: number; reminderTime?: number; placeName?: string; contentClass?: string; applicationData?: LazyMap; lastEditedBy?: string; classifications?: { [k: string]: string; }; creatorId?: number; lastEditorId?: number; });
    }

    /**
     * Represents a single note in the user's account.
     *
     * <dl>
     * <dt>guid</dt>
     *     <dd>The unique identifier of this note.    Will be set by the
     *     server, but will be omitted by clients calling NoteStore.createNote()
     *     <br/>
     *     Length:    EDAM_GUID_LEN_MIN - EDAM_GUID_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_GUID_REGEX
     *     </dd>
     *
     * <dt>title</dt>
     *     <dd>The subject of the note.    Can't begin or end with a space.
     *     <br/>
     *     Length:    EDAM_NOTE_TITLE_LEN_MIN - EDAM_NOTE_TITLE_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_NOTE_TITLE_REGEX
     *     </dd>
     *
     * <dt>content</dt>
     *     <dd>The XHTML block that makes up the note.    This is
     *     the canonical form of the note's contents, so will include abstract
     *     Evernote tags for internal resource references.    A client may create
     *     a separate transformed version of this content for internal presentation,
     *     but the same canonical bytes should be used for transmission and
     *     comparison unless the user chooses to modify their content.
     *     <br/>
     *     Length:    EDAM_NOTE_CONTENT_LEN_MIN - EDAM_NOTE_CONTENT_LEN_MAX
     *     </dd>
     *
     * <dt>contentHash</dt>
     *     <dd>The binary MD5 checksum of the UTF-8 encoded content
     *     body. This will always be set by the server, but clients may choose to omit
     *     this when they submit a note with content.
     *     <br/>
     *     Length:    EDAM_HASH_LEN (exactly)
     *     </dd>
     *
     * <dt>contentLength</dt>
     *     <dd>The number of Unicode characters in the content of
     *     the note.    This will always be set by the service, but clients may choose
     *     to omit this value when they submit a Note.
     *     </dd>
     *
     * <dt>created</dt>
     *     <dd>The date and time when the note was created in one of the
     *     clients.    In most cases, this will match the user's sense of when
     *     the note was created, and ordering between notes will be based on
     *     ordering of this field.    However, this is not a "reliable" timestamp
     *     if a client has an incorrect clock, so it cannot provide a true absolute
     *     ordering between notes.    Notes created directly through the service
     *     (e.g. via the web GUI) will have an absolutely ordered "created" value.
     *     </dd>
     *
     * <dt>updated</dt>
     *     <dd>The date and time when the note was last modified in one of
     *     the clients.    In most cases, this will match the user's sense of when
     *     the note was modified, but this field may not be absolutely reliable
     *     due to the possibility of client clock errors.
     *     </dd>
     *
     * <dt>deleted</dt>
     *     <dd>If present, the note is considered "deleted", and this
     *     stores the date and time when the note was deleted by one of the clients.
     *     In most cases, this will match the user's sense of when the note was
     *     deleted, but this field may be unreliable due to the possibility of
     *     client clock errors.
     *     </dd>
     *
     * <dt>active</dt>
     *     <dd>If the note is available for normal actions and viewing,
     *     this flag will be set to true.
     *     </dd>
     *
     * <dt>updateSequenceNum</dt>
     *     <dd>A number identifying the last transaction to
     *     modify the state of this note (including changes to the note's attributes
     *     or resources).    The USN values are sequential within an account,
     *     and can be used to compare the order of modifications within the service.
     *     </dd>
     *
     * <dt>notebookGuid</dt>
     *     <dd>The unique identifier of the notebook that contains
     *     this note.    If no notebookGuid is provided on a call to createNote(), the
     *     default notebook will be used instead.
     *     <br/>
     *     Length:    EDAM_GUID_LEN_MIN - EDAM_GUID_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_GUID_REGEX
     *     </dd>
     *
     * <dt>tagGuids</dt>
     *     <dd>A list of the GUID identifiers for tags that are applied to this note.
     *     This may be provided in a call to createNote() to unambiguously
     *     the tags that should be assigned to the new note.    Alternately, clients
     *     may pass the names of desired tags via the 'tagNames' field during
     *     note creation.
     *     If the list of tags are omitted on a call to createNote(), then
     *     the server will assume that no changes have been made to the resources.
     *     Maximum:    EDAM_NOTE_TAGS_MAX tags per note
     *     </dd>
     *
     * <dt>resources</dt>
     *     <dd>The list of resources that are embedded within this note.
     *     If the list of resources are omitted on a call to updateNote(), then
     *     the server will assume that no changes have been made to the resources.
     *     The binary contents of the resources must be provided when the resource
     *     is first sent to the service, but it will be omitted by the service when
     *     the Note is returned in the future.
     *     Maximum:    EDAM_NOTE_RESOURCES_MAX resources per note
     *     </dd>
     *
     * <dt>attributes</dt>
     *     <dd>A list of the attributes for this note.
     *     If the list of attributes are omitted on a call to updateNote(), then
     *     the server will assume that no changes have been made to the resources.
     *     </dd>
     *
     * <dt>tagNames</dt>
     *     <dd>May be provided by clients during calls to createNote() as an
     *     alternative to providing the tagGuids of existing tags.    If any tagNames
     *     are provided during createNote(), these will be found, or created if they
     *     don't already exist.    Created tags will have no parent (they will be at
     *     the top level of the tag panel).
     *     </dd>
     * </dl>
     */
    class Note {
        guid: string;
        title: string;
        content: string;
        contentHash: string;
        contentLength: number;
        created: number;
        updated: number;
        deleted: number;
        active: boolean;
        updateSequenceNum: number;
        notebookGuid: string;
        tagGuids: string[];
        resources: Resource[];
        attributes: NoteAttributes;
        tagNames: string[];

        constructor(args?: { guid?: string; title?: string; content?: string; contentHash?: string; contentLength?: number; created?: number; updated?: number; deleted?: number; active?: boolean; updateSequenceNum?: number; notebookGuid?: string; tagGuids?: string[]; resources?: Resource[]; attributes?: NoteAttributes; tagNames?: string[]; });
    }

    /**
     * If a Notebook has been opened to the public, the Notebook will have a
     * reference to one of these structures, which gives the location and optional
     * description of the externally-visible public Notebook.
     * <dl>
     * <dt>uri</dt>
     *     <dd>If this field is present, then the notebook is published for
     *     mass consumption on the Internet under the provided URI, which is
     *     relative to a defined base publishing URI defined by the service.
     *     This field can only be modified via the web service GUI ... publishing
     *     cannot be modified via an offline client.
     *     <br/>
     *     Length:    EDAM_PUBLISHING_URI_LEN_MIN - EDAM_PUBLISHING_URI_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_PUBLISHING_URI_REGEX
     *     </dd>
     *
     * <dt>order</dt>
     *     <dd>When the notes are publicly displayed, they will be sorted
     *     based on the requested criteria.
     *     </dd>
     *
     * <dt>ascending</dt>
     *     <dd>If this is set to true, then the public notes will be
     *     displayed in ascending order (e.g. from oldest to newest).    Otherwise,
     *     the notes will be displayed in descending order (e.g. newest to oldest).
     *     </dd>
     *
     * <dt>publicDescription</dt>
     *     <dd>This field may be used to provide a short
     *     description of the notebook, which may be displayed when (e.g.) the
     *     notebook is shown in a public view.    Can't begin or end with a space.
     *     <br/>
     *     Length:    EDAM_PUBLISHING_DESCRIPTION_LEN_MIN -
     *                        EDAM_PUBLISHING_DESCRIPTION_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_PUBLISHING_DESCRIPTION_REGEX
     *     </dd>
     *
     * </dl>
     */
    class Publishing {
        uri: string;
        order: NoteSortOrder;
        ascending: boolean;
        publicDescription: string;

        constructor(args?: { uri?: string; order?: NoteSortOrder; ascending?: boolean; publicDescription?: string; });
    }

    /**
     * If a Notebook contained in an Evernote Business account has been published
     * the to business library, the Notebook will have a reference to one of these
     * structures, which specifies how the Notebook will be represented in the
     * library.
     *
     * <dl>
     * <dt>notebookDescription</dt>
     *     <dd>A short description of the notebook's content that will be displayed
     *             in the business library user interface. The description may not begin
     *             or end with whitespace.
     *     <br/>
     *     Length: EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MIN -
     *                     EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_REGEX
     *     </dd>
     *
     * <dt>privilege</dt>
     *     <dd>The privileges that will be granted to users who join the notebook through
     *             the business library.
     *     </dd>
     *
     * <dt>recommended</dt>
     *     <dd>Whether the notebook should be "recommended" when displayed in the business
     *             library user interface.
     *     </dd>
     * </dl>
     */
    class BusinessNotebook {
        notebookDescription: string;
        privilege: SharedNotebookPrivilegeLevel;
        recommended: boolean;

        constructor(args?: { notebookDescription?: string; privilege?: SharedNotebookPrivilegeLevel; recommended?: boolean; });
    }

    /**
     * A structure defining the scope of a SavedSearch.
     *
     * <dl>
     *     <dt>includeAccount</dt>
     *     <dd>The search should include notes from the account that contains the SavedSearch.</dd>
     *
     *     <dt>includePersonalLinkedNotebooks</dt>
     *     <dd>The search should include notes within those shared notebooks
     *     that the user has joined that are NOT business notebooks.</dd>
     *
     *     <dt>includeBusinessLinkedNotebooks</dt>
     *     <dd>The search should include notes within those shared notebooks
     *     that the user has joined that are business notebooks in the business that
     *     the user is currently a member of.</dd>
     * </dl>
     */
    class SavedSearchScope {
        includeAccount: boolean;
        includePersonalLinkedNotebooks: boolean;
        includeBusinessLinkedNotebooks: boolean;

        constructor(args?: { includeAccount?: boolean; includePersonalLinkedNotebooks?: boolean; includeBusinessLinkedNotebooks?: boolean; });
    }

    /**
     * A named search associated with the account that can be quickly re-used.
     * <dl>
     * <dt>guid</dt>
     *     <dd>The unique identifier of this search.    Will be set by the
     *     service, so may be omitted by the client when creating.
     *     <br/>
     *     Length:    EDAM_GUID_LEN_MIN - EDAM_GUID_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_GUID_REGEX
     *     </dd>
     *
     * <dt>name</dt>
     *     <dd>The name of the saved search to display in the GUI.    The
     *     account may only contain one search with a given name (case-insensitive
     *     compare). Can't begin or end with a space.
     *     <br/>
     *     Length:    EDAM_SAVED_SEARCH_NAME_LEN_MIN - EDAM_SAVED_SEARCH_NAME_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_SAVED_SEARCH_NAME_REGEX
     *     </dd>
     *
     * <dt>query</dt>
     *     <dd>A string expressing the search to be performed.
     *     <br/>
     *     Length:    EDAM_SAVED_SEARCH_QUERY_LEN_MIN - EDAM_SAVED_SEARCH_QUERY_LEN_MAX
     *     </dd>
     *
     * <dt>format</dt>
     *     <dd>The format of the query string, to determine how to parse
     *     and process it.
     *     </dd>
     *
     * <dt>updateSequenceNum</dt>
     *     <dd>A number identifying the last transaction to
     *     modify the state of this object.    The USN values are sequential within an
     *     account, and can be used to compare the order of modifications within the
     *     service.
     *     </dd>
     *
     * <dt>scope</dt>
     *     <dd><p>Specifies the set of notes that should be included in the search, if
     *        possible.</p>
     *        <p>Clients are expected to search as much of the desired scope as possible,
     *        with the understanding that a given client may not be able to cover the full
     *        specified scope. For example, when executing a search that includes notes in both
     *        the owner's account and business notebooks, a mobile client may choose to only
     *        search within the user's account because it is not capable of searching both
     *        scopes simultaneously. When a search across multiple scopes is not possible,
     *        a client may choose which scope to search based on the current application
     *        context. If a client cannot search any of the desired scopes, it should refuse
     *        to execute the search.</p>
     *        </dd>
     * </dl>
     */
    class SavedSearch {
        guid: string;
        name: string;
        query: string;
        format: QueryFormat;
        updateSequenceNum: number;
        scope: SavedSearchScope;

        constructor(args?: { guid?: string; name?: string; query?: string; format?: QueryFormat; updateSequenceNum?: number; scope?: SavedSearchScope; });
    }

    /**
     * Settings meant for the recipient of a shared notebook, such as
     * for indicating which types of notifications the recipient wishes
     * for reminders, etc.
     *
     * The reminderNotifyEmail and reminderNotifyInApp fields have a
     * 3-state read value but a 2-state write value.    On read, it is
     * possible to observe "unset", true, or false.    The initial state is
     * "unset".    When you choose to set a value, you may set it to either
     * true or false, but you cannot unset the value.    Once one of these
     * members has a true/false value, it will always have a true/false
     * value.
     *
     * <dl>
     * <dt>reminderNotifyEmail</dt>
     * <dd>Indicates that the user wishes to receive daily e-mail notifications
     *         for reminders associated with the shared notebook.    This may be
     *         true only for business notebooks that belong to the business of
     *         which the user is a member.    You may only set this value on a
     *         notebook in your business.</dd>
     * <dt>reminderNotifyInApp</dt>
     * <dd>Indicates that the user wishes to receive notifications for
     *         reminders by applications that support providing such
     *         notifications.    The exact nature of the notification is defined
     *         by the individual applications.</dd>
     * </dl>
     *
     */
    class SharedNotebookRecipientSettings {
        reminderNotifyEmail: boolean;
        reminderNotifyInApp: boolean;

        constructor(args?: { reminderNotifyEmail?: boolean; reminderNotifyInApp?: boolean; });
    }

    /**
     * Shared notebooks represent a relationship between a notebook and a single
     * share invitation recipient.
     * <dl>
     * <dt>id</dt>
     * <dd>the primary identifier of the share</dd>
     *
     * <dt>userId</dt>
     * <dd>the user id of the owner of the notebook</dd>
     *
     * <dt>notebookGuid</dt>
     * <dd>the GUID of the associated notebook shared.</dd>
     *
     * <dt>email</dt>
     * <dd>the email address of the recipient - used by the notebook
     * owner to identify who they shared with.</dd>
     *
     * <dt>notebookModifiable</dt>
     * <dd>(DEPRECATED) a flag indicating the share is read/write -otherwise it's read
     *         only.    This field is deprecated in favor of the new "privilege" field.</dd>
     *
     * <dt>requireLogin</dt>
     * <dd>(DEPRECATED) indicates that a user must login to access the share.    This
     *         field is deprecated and will be "true" for all new shared notebooks.    It
     *         is read-only and ignored when creating or modifying a shared notebook,
     *         except that a shared notebook can be modified to require login.
     *         See "allowPreview" for information on privileges and shared notebooks.</dd>
     *
     * <dt>serviceCreated</dt>
     * <dd>the date the owner first created the share with the specific email
     *     address</dd>
     *
     * <dt>serviceUpdated</dt>
     * <dd>the date the shared notebook was last updated on the service.    This
     *         will be updated when authenticateToSharedNotebook is called the first
     *         time with a shared notebook requiring login (i.e. when the username is
     *         bound to that shared notebook).</dd>
     *
     * <dt>username</dt>
     * <dd>the username of the user who can access this share.
     *     Once it's assigned it cannot be changed.</dd>
     *
     * <dt>privilege</dt>
     * <dd>The privilege level granted to the notebook, activity stream, and
     *         invitations.    See the corresponding enumeration for details.</dd>
     *
     * <dt>allowPreview</dt>
     * <dd>Whether or not to grant "READ_NOTEBOOK" privilege without an
     *         authentication token, for authenticateToSharedNotebook(...).    With
     *         the change to "requireLogin" always being true for new shared
     *         notebooks, this is the only way to access a shared notebook without
     *         an authorization token.    This setting expires after the first use
     *         of authenticateToSharedNotebook(...) with a valid authentication
     *         token.</dd>
     *
     * <dt>recipientSettings</dt>
     * <dd>Settings intended for use only by the recipient of this shared
     *         notebook.    You should skip setting this value unless you want
     *         to change the value contained inside the structure, and only if
     *         you are the recipient.</dd>
     * </dl>
     */
    class SharedNotebook {
        id: number;
        userId: number;
        notebookGuid: string;
        email: string;
        notebookModifiable: boolean;
        requireLogin: boolean;
        serviceCreated: number;
        serviceUpdated: number;
        shareKey: string;
        username: string;
        privilege: SharedNotebookPrivilegeLevel;
        allowPreview: boolean;
        recipientSettings: SharedNotebookRecipientSettings;

        constructor(args?: { id?: number; userId?: number; notebookGuid?: string; email?: string; notebookModifiable?: boolean; requireLogin?: boolean; serviceCreated?: number; serviceUpdated?: number; shareKey?: string; username?: string; privilege?: SharedNotebookPrivilegeLevel; allowPreview?: boolean; recipientSettings?: SharedNotebookRecipientSettings; });
    }

    /**
     * This structure captures information about the types of operations
     * that cannot be performed on a given notebook with a type of
     * authenticated access and credentials.    The values filled into this
     * structure are based on then-current values in the server database
     * for shared notebooks and notebook publishing records, as well as
     * information related to the authentication token.    Information from
     * the authentication token includes the application that is accessing
     * the server, as defined by the permissions granted by consumer (api)
     * key, and the method used to obtain the token, for example via
     * authenticateToSharedNotebook, authenticateToBusiness, etc.    Note
     * that changes to values in this structure that are the result of
     * shared notebook or publishing record changes are communicated to
     * the client via a change in the notebook USN during sync.    It is
     * important to use the same access method, parameters, and consumer
     * key in order obtain correct results from the sync engine.
     *
     * The server has the final say on what is allowed as values may
     * change between calls to obtain NotebookRestrictions instances
     * and to operate on data on the service.
     *
     * If the following are set and true, then the given restriction is
     * in effect, as accessed by the same authentication token from which
     * the values were obtained.
     *
     * <dt>noReadNotes</dt>
     *     <dd>The client is not able to read notes from the service and
     *     the notebook is write-only.
     *     </dd>
     * <dt>noCreateNotes</dt>
     *     <dd>The client may not create new notes in the notebook.
     *     </dd>
     * <dt>noUpdateNotes</dt>
     *     <dd>The client may not update notes currently in the notebook.
     *     </dd>
     * <dt>noExpungeNotes</dt>
     *     <dd>The client may not expunge notes currently in the notebook.
     *     </dd>
     * <dt>noShareNotes</dt>
     *     <dd>The client may not share notes in the notebook via the
     *     shareNote method.
     *     </dd>
     * <dt>noEmailNotes</dt>
     *     <dd>The client may not e-mail notes via the Evernote service by
     *     using the emailNote method.
     *     </dd>
     * <dt>noSendMessageToRecipients</dt>
     *     <dd>The client may not send messages to the share recipients of
     *     the notebook.
     *     </dd>
     * <dt>noUpdateNotebook</dt>
     *     <dd>The client may not update the Notebook object itself, for
     *     example, via the updateNotebook method.
     *     </dd>
     * <dt>noExpungeNotebook</dt>
     *     <dd>The client may not expunge the Notebook object itself, for
     *     example, via the expungeNotebook method.
     *     </dd>
     * <dt>noSetDefaultNotebook</dt>
     *     <dd>The client may not set this notebook to be the default notebook.
     *     The caller should leave Notebook.defaultNotebook unset.
     *     </dd>
     * <dt>noSetNotebookStack</dt>
     *     <dd>If the client is able to update the Notebook, the Notebook.stack
     *     value may not be set.
     *     </dd>
     * <dt>noPublishToPublic</dt>
     *     <dd>The client may not change the publish the notebook to the public.
     *     For example, business notebooks may not be shared publicly.
     *     </dd>
     * <dt>noPublishToBusinessLibrary</dt>
     *     <dd>The client may not publish the notebook to the business library.
     *     </dd>
     * <dt>noCreateTags</dt>
     *     <dd>The client may not complete an operation that results in a new tag
     *     being created in the owner's account.
     *     </dd>
     * <dt>noUpdateTags</dt>
     *     <dd>The client may not update tags in the owner's account.
     *     </dd>
     * <dt>noExpungeTags</dt>
     *     <dd>The client may not expunge tags in the owner's account.
     *     </dd>
     * <dt>noSetParentTag</dt>
     *     <dd>If the client is able to create or update tags in the owner's account,
     *     then they will not be able to set the parent tag.    Leave the value unset.
     *     </dd>
     * <dt>noCreateSharedNotebooks</dt>
     *     <dd>The client is unable to create shared notebooks for the notebook.
     *     </dd>
     * <dt>updateWhichSharedNotebookRestrictions</dt>
     *     <dd>Restrictions on which shared notebook instances can be updated.    If the
     *     value is not set or null, then the client can update any of the shared notebooks
     *     associated with the notebook on which the NotebookRestrictions are defined.
     *     See the enumeration for further details.
     *     </dd>
     * <dt>expungeWhichSharedNotebookRestrictions</dt>
     *     <dd>Restrictions on which shared notebook instances can be expunged.    If the
     *     value is not set or null, then the client can expunge any of the shared notebooks
     *     associated with the notebook on which the NotebookRestrictions are defined.
     *     See the enumeration for further details.
     *     </dd>
     */
    class NotebookRestrictions {
        noReadNotes: boolean;
        noCreateNotes: boolean;
        noUpdateNotes: boolean;
        noExpungeNotes: boolean;
        noShareNotes: boolean;
        noEmailNotes: boolean;
        noSendMessageToRecipients: boolean;
        noUpdateNotebook: boolean;
        noExpungeNotebook: boolean;
        noSetDefaultNotebook: boolean;
        noSetNotebookStack: boolean;
        noPublishToPublic: boolean;
        noPublishToBusinessLibrary: boolean;
        noCreateTags: boolean;
        noUpdateTags: boolean;
        noExpungeTags: boolean;
        noSetParentTag: boolean;
        noCreateSharedNotebooks: boolean;
        updateWhichSharedNotebookRestrictions: SharedNotebookInstanceRestrictions;
        expungeWhichSharedNotebookRestrictions: SharedNotebookInstanceRestrictions;

        constructor(args?: { noReadNotes?: boolean; noCreateNotes?: boolean; noUpdateNotes?: boolean; noExpungeNotes?: boolean; noShareNotes?: boolean; noEmailNotes?: boolean; noSendMessageToRecipients?: boolean; noUpdateNotebook?: boolean; noExpungeNotebook?: boolean; noSetDefaultNotebook?: boolean; noSetNotebookStack?: boolean; noPublishToPublic?: boolean; noPublishToBusinessLibrary?: boolean; noCreateTags?: boolean; noUpdateTags?: boolean; noExpungeTags?: boolean; noSetParentTag?: boolean; noCreateSharedNotebooks?: boolean; updateWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions; expungeWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions; });
    }

    /**
     * A unique container for a set of notes.
     * <dl>
     * <dt>guid</dt>
     *     <dd>The unique identifier of this notebook.
     *     <br/>
     *     Length:    EDAM_GUID_LEN_MIN - EDAM_GUID_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_GUID_REGEX
     *     </dd>
     *
     * <dt>name</dt>
     *     <dd>A sequence of characters representing the name of the
     *     notebook.    May be changed by clients, but the account may not contain two
     *     notebooks with names that are equal via a case-insensitive comparison.
     *     Can't begin or end with a space.
     *     <br/>
     *     Length:    EDAM_NOTEBOOK_NAME_LEN_MIN - EDAM_NOTEBOOK_NAME_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_NOTEBOOK_NAME_REGEX
     *     </dd>
     *
     * <dt>updateSequenceNum</dt>
     *     <dd>A number identifying the last transaction to
     *     modify the state of this object.    The USN values are sequential within an
     *     account, and can be used to compare the order of modifications within the
     *     service.
     *     </dd>
     *
     * <dt>defaultNotebook</dt>
     *     <dd>If true, this notebook should be used for new notes
     *     whenever the user has not (or cannot) specify a desired target notebook.
     *     For example, if a note is submitted via SMTP email.
     *     The service will maintain at most one defaultNotebook per account.
     *     If a second notebook is created or updated with defaultNotebook set to
     *     true, the service will automatically update the prior notebook's
     *     defaultNotebook field to false.    If the default notebook is deleted
     *     (i.e. "active" set to false), the "defaultNotebook" field will be
     *     set to false by the service.    If the account has no default notebook
     *     set, the service will use the most recent notebook as the default.
     *     </dd>
     *
     * <dt>serviceCreated</dt>
     *     <dd>The time when this notebook was created on the
     *     service. This will be set on the service during creation, and the service
     *     will provide this value when it returns a Notebook to a client.
     *     The service will ignore this value if it is sent by clients.
     *     </dd>
     *
     * <dt>serviceUpdated</dt>
     *     <dd>The time when this notebook was last modified on the
     *     service.    This will be set on the service during creation, and the service
     *     will provide this value when it returns a Notebook to a client.
     *     The service will ignore this value if it is sent by clients.
     *     </dd>
     *
     * <dt>publishing</dt>
     *     <dd>If the Notebook has been opened for public access, or
     *     business users shared with their business (i.e. if 'published' is
     *     set to true), then this will point to the set of publishing
     *     information for the Notebook (URI, description, etc.).    A
     *     Notebook cannot be published without providing this information,
     *     but it will persist for later use if publishing is ever disabled
     *     on the Notebook.    Clients that do not wish to change the
     *     publishing behavior of a Notebook should not set this value when
     *     calling NoteStore.updateNotebook().
     *     </dd>
     *
     * <dt>published</dt>
     *     <dd>If this is set to true, then the Notebook will be
     *     accessible either to the public, or for business users to their business,
     *     via the 'publishing' specification, which must also be set.    If this is set
     *     to false, the Notebook will not be available to the public (or business).
     *     Clients that do not wish to change the publishing behavior of a Notebook
     *     should not set this value when calling NoteStore.updateNotebook().
     *     </dd>
     *
     * <dt>stack</dt>
     *     <dd>If this is set, then the notebook is visually contained within a stack
     *     of notebooks with this name.    All notebooks in the same account with the
     *     same 'stack' field are considered to be in the same stack.
     *     Notebooks with no stack set are "top level" and not contained within a
     *     stack.
     *     </dd>
     *
     * <dt>sharedNotebookIds</dt>
     *     <dd><i>DEPRECATED</i> - replaced by sharedNotebooks.</dd>
     *
     * <dt>sharedNotebooks</dt>
     *     <dd>The list of recipients to whom this notebook has been shared
     *     (one SharedNotebook object per recipient email address). This field will
     *     be unset if you do not have permission to access this data. If you are
     *     accessing the notebook as the owner or via a shared notebook that is
     *     modifiable, then you have access to this data and the value will be set.
     *     This field is read-only. Clients may not make changes to shared notebooks
     *     via this field.
     *     </dd>
     *
     * <dt>businessNotebook</dt>
     *     <dd>If the notebook is part of a business account and has been published to the
     *     business library, this will contain information for the library listing.
     *     The presence or absence of this field is not a reliable test of whether a given
     *     notebook is in fact a business notebook - the field is only used when a notebook is or
     *     has been published to the business library.
     *     </dd>
     *
     * <dt>contact</dt>
     *     <dd>Intended for use with Business accounts, this field identifies the user who
     *     has been designated as the "contact".    For notebooks created in business
     *     accounts, the server will automatically set this value to the user who created
     *     the notebook unless Notebook.contact.username has been set, in which that value
     *     will be used.    When updating a notebook, it is common to leave Notebook.contact
     *     field unset, indicating that no change to the value is being requested and that
     *     the existing value, if any, should be preserved.
     *     </dd>
     *
     * </dl>
     */
    class Notebook {
        guid: string;
        name: string;
        updateSequenceNum: number;
        defaultNotebook: boolean;
        serviceCreated: number;
        serviceUpdated: number;
        publishing: Publishing;
        published: boolean;
        stack: string;
        sharedNotebookIds: number[];
        sharedNotebooks: SharedNotebook[];
        businessNotebook: BusinessNotebook;
        contact: User;
        restrictions: NotebookRestrictions;

        constructor(args?: { guid?: string; name?: string; updateSequenceNum?: number; defaultNotebook?: boolean; serviceCreated?: number; serviceUpdated?: number; publishing?: Publishing; published?: boolean; stack?: string; sharedNotebookIds?: number[]; sharedNotebooks?: SharedNotebook[]; businessNotebook?: BusinessNotebook; contact?: User; restrictions?: NotebookRestrictions; });
    }

    /**
     * A link in an users account that refers them to a public or individual share in
     * another user's account.
     *
     * <dl>
     * <dt>shareName</dt>
     * <dd>the display name of the shared notebook.
     *     The link owner can change this.</dd>
     *
     * <dt>username</dt>
     * <dd>the username of the user who owns the shared or public notebook</dd>
     *
     * <dt>shardId</dt>
     * <dd>the shard ID of the notebook if the notebook is not public</dt>
     *
     * <dt>shareKey</dt>
     * <dd>the secret key that provides access to the shared notebook</dd>
     *
     * <dt>uri</dt>
     * <dd>the identifier of the public notebook</dd>
     *
     * <dt>guid</dt>
     *     <dd>The unique identifier of this linked notebook.    Will be set whenever
     *     a linked notebook is retrieved from the service, but may be null when a client
     *     is creating a linked notebook.
     *     <br/>
     *     Length:    EDAM_GUID_LEN_MIN - EDAM_GUID_LEN_MAX
     *     <br/>
     *     Regex:    EDAM_GUID_REGEX
     *     </dd>
     *
     * <dt>updateSequenceNum</dt>
     *     <dd>A number identifying the last transaction to
     *     modify the state of this object.    The USN values are sequential within an
     *     account, and can be used to compare the order of modifications within the
     *     service.
     *     </dd>
     *
     * <dt>noteStoreUrl</dt>
     *     <dd>
     *     This field will contain the full URL that clients should use to make
     *     NoteStore requests to the server shard that contains that notebook's data.
     *     I.e. this is the URL that should be used to create the Thrift HTTP client
     *     transport to send messages to the NoteStore service for the account.
     *     </dd>
     *
     * <dt>webApiUrlPrefix:</dt>
     *     <dd>
     *     This field will contain the initial part of the URLs that should be used
     *     to make requests to Evernote's thin client "web API", which provide
     *     optimized operations for clients that aren't capable of manipulating
     *     the full contents of accounts via the full Thrift data model. Clients
     *     should concatenate the relative path for the various servlets onto the
     *     end of this string to construct the full URL, as documented on our
     *     developer web site.
     *     </dd>
     *
     * <dt>stack</dt>
     *     <dd>If this is set, then the notebook is visually contained within a stack
     *     of notebooks with this name.    All notebooks in the same account with the
     *     same 'stack' field are considered to be in the same stack.
     *     Notebooks with no stack set are "top level" and not contained within a
     *     stack.    The link owner can change this and this field is for the benefit
     *     of the link owner.
     *     </dd>
     *
     * <dt>businessId</dt>
     *     <dd>If set, this will be the unique identifier for the business that owns
     *     the notebook to which the linked notebook refers.
     *
     * </dl>
     */
    class LinkedNotebook {
        shareName: string;
        username: string;
        shardId: string;
        shareKey: string;
        uri: string;
        guid: string;
        updateSequenceNum: number;
        noteStoreUrl: string;
        webApiUrlPrefix: string;
        stack: string;
        businessId: number;

        constructor(args?: { shareName?: string; username?: string; shardId?: string; shareKey?: string; uri?: string; guid?: string; updateSequenceNum?: number; noteStoreUrl?: string; webApiUrlPrefix?: string; stack?: string; businessId?: number; });
    }

    /**
     * A structure that describes a notebook or a user's relationship with
     * a notebook. NotebookDescriptor is expected to remain a lighter-weight
     * structure when compared to Notebook.
     * <dl>
     * <dt>guid</dt>
     *     <dd>The unique identifier of the notebook.
     *     </dd>
     *
     * <dt>notebookDisplayName</dt>
     *     <dd>A sequence of characters representing the name of the
     *     notebook.
     *     </dd>
     *
     * <dt>contactName</dt>
     *     <dd>The User.name value of the notebook's "contact".
     *     </dd>
     *
     * <dt>hasSharedNotebook</dt>
     *     <dd>Whether a SharedNotebook record exists between the calling user and this
     *     notebook.
     *     </dd>
     *
     * <dt>joinedUserCount</dt>
     *     <dd>The number of users who have joined this notebook.
     *     </dd>
     *
     * </dl>
     */
    class NotebookDescriptor {
        guid: string;
        notebookDisplayName: string;
        contactName: string;
        hasSharedNotebook: boolean;
        joinedUserCount: number;

        constructor(args?: { guid?: string; notebookDisplayName?: string; contactName?: string; hasSharedNotebook?: boolean; joinedUserCount?: number; });
    }

    /**
     * A value for the "recipe" key in the "classifications" map in NoteAttributes
     * that indicates the user has classified a note as being a non-recipe.
     */
    var CLASSIFICATION_RECIPE_USER_NON_RECIPE: string;

    /**
     * A value for the "recipe" key in the "classifications" map in NoteAttributes
     * that indicates the user has classified a note as being a recipe.
     */
    var CLASSIFICATION_RECIPE_USER_RECIPE: string;

    /**
     * A value for the "recipe" key in the "classifications" map in NoteAttributes
     * that indicates the Evernote service has classified a note as being a recipe.
     */
    var CLASSIFICATION_RECIPE_SERVICE_RECIPE: string;

    /**
     * Standardized value for the 'source' NoteAttribute for notes that
     * were clipped from the web in some manner.
     */
    var EDAM_NOTE_SOURCE_WEB_CLIP: string;

    /**
     * Standardized value for the 'source' NoteAttribute for notes that
     * were clipped from an email message.
     */
    var EDAM_NOTE_SOURCE_MAIL_CLIP: string;

    /**
     * Standardized value for the 'source' NoteAttribute for notes that
     * were created via email sent to Evernote's email interface.
     */
    var EDAM_NOTE_SOURCE_MAIL_SMTP_GATEWAY: string;
    /**
     * Service:    UserStore
     * <p>
     * The UserStore service is primarily used by EDAM clients to establish
     * authentication via username and password over a trusted connection (e.g.
     * SSL).    A client's first call to this interface should be checkVersion() to
     * ensure that the client's software is up to date.
     * </p>
     * All calls which require an authenticationToken may throw an
     * EDAMUserException for the following reasons:
     *    <ul>
     *     <li> AUTH_EXPIRED "authenticationToken" - token has expired
     *     <li> BAD_DATA_FORMAT "authenticationToken" - token is malformed
     *     <li> DATA_REQUIRED "authenticationToken" - token is empty
     *     <li> INVALID_AUTH "authenticationToken" - token signature is invalid
     * </ul>
     */
    class UserStoreClient {
        seqid: number;

        /**
         * This should be the first call made by a client to the EDAM service.    It
         * tells the service what protocol version is used by the client.    The
         * service will then return true if the client is capable of talking to
         * the service, and false if the client's protocol version is incompatible
         * with the service, so the client must upgrade.    If a client receives a
         * false value, it should report the incompatibility to the user and not
         * continue with any more EDAM requests (UserStore or NoteStore).
         *
         * @param clientName
         *     This string provides some information about the client for
         *     tracking/logging on the service.    It should provide information about
         *     the client's software and platform. The structure should be:
         *     application/version; platform/version; [ device/version ]
         *     E.g. "Evernote Windows/3.0.1; Windows/XP SP3".
         *
         * @param edamVersionMajor
         *     This should be the major protocol version that was compiled by the
         *     client.    This should be the current value of the EDAM_VERSION_MAJOR
         *     constant for the client.
         *
         * @param edamVersionMinor
         *     This should be the major protocol version that was compiled by the
         *     client.    This should be the current value of the EDAM_VERSION_MINOR
         *     constant for the client.
         */
        checkVersion(clientName: string, edamVersionMajor: number, edamVersionMinor: number, cb: Callback<boolean>): void;

        /**
         * This provides bootstrap information to the client. Various bootstrap
         * profiles and settings may be used by the client to configure itself.
         *
         * @param locale
         *     The client's current locale, expressed in language[_country]
         *     format. E.g., "en_US". See ISO-639 and ISO-3166 for valid
         *     language and country codes.
         *
         * @return
         *     The bootstrap information suitable for this client.
         */
        getBootstrapInfo(locale: string, cb: Callback<BootstrapInfo>): void;

        /**
         * Revoke an existing long lived authentication token. This can be used to
         * revoke OAuth tokens or tokens created by calling authenticateLongSession,
         * and allows a user to effectively log out of Evernote from the perspective
         * of the application that holds the token. The authentication token that is
         * passed is immediately revoked and may not be used to call any authenticated
         * EDAM function.
         *
         * @param authenticationToken the authentication token to revoke.
         *
         * @throws EDAMUserException <ul>
         *     <li> DATA_REQUIRED "authenticationToken" - no authentication token provided
         *     <li> BAD_DATA_FORMAT "authenticationToken" - the authentication token is not well formed
         *     <li> INVALID_AUTH "authenticationToken" - the authentication token is invalid
         *     <li> AUTH_EXPIRED "authenticationToken" - the authentication token is expired or
         *         is already revoked.
         * </ul>
         */
        revokeLongSession(cb: Callback<void>): void;

        /**
         * This is used to take an existing authentication token that grants access
         * to an individual user account (returned from 'authenticate',
         * 'authenticateLongSession' or an OAuth authorization) and obtain an additional
         * authentication token that may be used to access business notebooks if the user
         * is a member of an Evernote Business account.
         *
         * The resulting authentication token may be used to make NoteStore API calls
         * against the business using the NoteStore URL returned in the result.
         *
         * @param authenticationToken
         *     The authentication token for the user. This may not be a shared authentication
         *     token (returned by NoteStore.authenticateToSharedNotebook or
         *     NoteStore.authenticateToSharedNote) or a business authentication token.
         *
         * @return
         *     The result of the authentication, with the token granting access to the
         *     business in the result's 'authenticationToken' field. The URL that must
         *     be used to access the business account NoteStore will be returned in the
         *     result's 'noteStoreUrl' field.    The 'User' field will
         *     not be set in the result.
         *
         * @throws EDAMUserException <ul>
         *     <li> PERMISSION_DENIED "authenticationToken" - the provided authentication token
         *                is a shared or business authentication token. </li>
         *     <li> PERMISSION_DENIED "Business" - the user identified by the provided
         *                authentication token is not currently a member of a business. </li>
         *     <li> PERMISSION_DENIED "Business.status" - the business that the user is a
         *                member of is not currently in an active status. </li>
         * </ul>
         */
        authenticateToBusiness(cb: Callback<AuthenticationResult>): void;

        /**
         * Returns the User corresponding to the provided authentication token,
         * or throws an exception if this token is not valid.
         * The level of detail provided in the returned User structure depends on
         * the access level granted by the token, so a web service client may receive
         * fewer fields than an integrated desktop client.
         */
        getUser(cb: Callback<User>): void;

        /**
         * Asks the UserStore about the publicly available location information for
         * a particular username.
         *
         * @throws EDAMUserException <ul>
         *     <li> DATA_REQUIRED "username" - username is empty
         * </ul>
         */
        getPublicUserInfo(username: string, cb: Callback<PublicUserInfo>): void;


        /**
         * Returns the URL that should be used to talk to the NoteStore for the
         * account represented by the provided authenticationToken.
         * This method isn't needed by most clients, who can retrieve the correct
         * NoteStore URL from the AuthenticationResult returned from the authenticate
         * or refreshAuthentication calls. This method is typically only needed
         * to look up the correct URL for a long-lived session token (e.g. for an
         * OAuth web service).
         */
        getNoteStoreUrl(cb: Callback<string>): void;
    }
    /**
     *    This structure is used to provide publicly-available user information
     *    about a particular account.
     * <dl>
     *    <dt>userId:</dt>
     *        <dd>
     *        The unique numeric user identifier for the user account.
     *        </dd>
     *    <dt>shardId:</dt>
     *        <dd>
     *        DEPRECATED - Client applications should have no need to use this field.
     *        </dd>
     *    <dt>privilege:</dt>
     *        <dd>
     *        The privilege level of the account, to determine whether
     *        this is a Premium or Free account.
     *        </dd>
     *    <dt>noteStoreUrl:</dt>
     *        <dd>
     *        This field will contain the full URL that clients should use to make
     *        NoteStore requests to the server shard that contains that user's data.
     *        I.e. this is the URL that should be used to create the Thrift HTTP client
     *        transport to send messages to the NoteStore service for the account.
     *        </dd>
     *    <dt>webApiUrlPrefix:</dt>
     *        <dd>
     *        This field will contain the initial part of the URLs that should be used
     *        to make requests to Evernote's thin client "web API", which provide
     *        optimized operations for clients that aren't capable of manipulating
     *        the full contents of accounts via the full Thrift data model. Clients
     *        should concatenate the relative path for the various servlets onto the
     *        end of this string to construct the full URL, as documented on our
     *        developer web site.
     *        </dd>
     *    </dl>
     */
    class PublicUserInfo {
        userId: number;
        shardId: string;
        privilege: PrivilegeLevel;
        username: string;
        noteStoreUrl: string;
        webApiUrlPrefix: string;

        constructor(args?: { userId: number; shardId: string; privilege?: PrivilegeLevel; username?: string; noteStoreUrl?: string; webApiUrlPrefix?: string; });
    }

    /**
     *    When an authentication (or re-authentication) is performed, this structure
     *    provides the result to the client.
     * <dl>
     *    <dt>currentTime:</dt>
     *        <dd>
     *        The server-side date and time when this result was
     *        generated.
     *        </dd>
     *    <dt>authenticationToken:</dt>
     *        <dd>
     *        Holds an opaque, ASCII-encoded token that can be
     *        used by the client to perform actions on a NoteStore.
     *        </dd>
     *    <dt>expiration:</dt>
     *        <dd>
     *        Holds the server-side date and time when the
     *        authentication token will expire.
     *        This time can be compared to "currentTime" to produce an expiration
     *        time that can be reconciled with the client's local clock.
     *        </dd>
     *    <dt>user:</dt>
     *        <dd>
     *        Holds the information about the account which was
     *        authenticated if this was a full authentication.    May be absent if this
     *        particular authentication did not require user information.
     *        </dd>
     *    <dt>publicUserInfo:</dt>
     *        <dd>
     *        If this authentication result was achieved without full permissions to
     *        access the full User structure, this field may be set to give back
     *        a more limited public set of data.
     *        </dd>
     *    <dt>noteStoreUrl:</dt>
     *        <dd>
     *        This field will contain the full URL that clients should use to make
     *        NoteStore requests to the server shard that contains that user's data.
     *        I.e. this is the URL that should be used to create the Thrift HTTP client
     *        transport to send messages to the NoteStore service for the account.
     *        </dd>
     *    <dt>webApiUrlPrefix:</dt>
     *        <dd>
     *        This field will contain the initial part of the URLs that should be used
     *        to make requests to Evernote's thin client "web API", which provide
     *        optimized operations for clients that aren't capable of manipulating
     *        the full contents of accounts via the full Thrift data model. Clients
     *        should concatenate the relative path for the various servlets onto the
     *        end of this string to construct the full URL, as documented on our
     *        developer web site.
     *        </dd>
     *    <dt>secondFactorRequired:</dt>
     *        <dd>
     *        If set to true, this field indicates that the user has enabled two-factor
     *        authentication and must enter their second factor in order to complete
     *        authentication. In this case the value of authenticationResult will be
     *        a short-lived authentication token that may only be used to make a
     *        subsequent call to completeTwoFactorAuthentication.
     *        </dd>
     *    <dt>secondFactorDeliveryHint:</dt>
     *        <dd>
     *        When secondFactorRequired is set to true, this field may contain a string
     *        describing the second factor delivery method that the user has configured.
     *        This will typically be an obfuscated mobile device number, such as
     *        "(xxx) xxx-x095". This string can be displayed to the user to remind them
     *        how to obtain the required second factor.
     *        TODO do we need to differentiate between SMS and voice delivery?
     *        </dd>
     *    </dl>
     */
    class AuthenticationResult {
        currentTime: number;
        authenticationToken: string;
        expiration: number;
        user: User;
        publicUserInfo: PublicUserInfo;
        noteStoreUrl: string;
        webApiUrlPrefix: string;
        secondFactorRequired: boolean;
        secondFactorDeliveryHint: string;

        constructor(args?: { currentTime: number; authenticationToken: string; expiration: number; user?: User; publicUserInfo?: PublicUserInfo; noteStoreUrl?: string; webApiUrlPrefix?: string; secondFactorRequired?: boolean; secondFactorDeliveryHint?: string; });
    }

    /**
     *    This structure describes a collection of bootstrap settings.
     * <dl>
     *    <dt>serviceHost:</dt>
     *        <dd>
     *        The hostname and optional port for composing Evernote web service URLs.
     *        This URL can be used to access the UserStore and related services,
     *        but must not be used to compose the NoteStore URL. Client applications
     *        must handle serviceHost values that include only the hostname
     *        (e.g. www.evernote.com) or both the hostname and port (e.g. www.evernote.com:8080).
     *        If no port is specified, or if port 443 is specified, client applications must
     *        use the scheme "https" when composing URLs. Otherwise, a client must use the
     *        scheme "http".
     *    </dd>
     *    <dt>marketingUrl:</dt>
     *        <dd>
     *        The URL stem for the Evernote corporate marketing website, e.g. http://www.evernote.com.
     *        This stem can be used to compose website URLs. For example, the URL of the Evernote
     *        Trunk is composed by appending "/about/trunk/" to the value of marketingUrl.
     *        </dd>
     *    <dt>supportUrl:</dt>
     *        <dd>
     *        The full URL for the Evernote customer support website, e.g. https://support.evernote.com.
     *        </dd>
     *    <dt>accountEmailDomain:</dt>
     *        <dd>
     *        The domain used for an Evernote user's incoming email address, which allows notes to
     *        be emailed into an account. E.g. m.evernote.com.
     *        </dd>
     *    <dt>enableFacebookSharing:</dt>
     *        <dd>
     *        Whether the client application should enable sharing of notes on Facebook.
     *        </dd>
     *    <dt>enableGiftSubscriptions:</dt>
     *        <dd>
     *        Whether the client application should enable gift subscriptions.
     *        </dd>
     *    <dt>enableSupportTickets:</dt>
     *        <dd>
     *        Whether the client application should enable in-client creation of support tickets.
     *        </dd>
     *    <dt>enableSharedNotebooks:</dt>
     *        <dd>
     *        Whether the client application should enable shared notebooks.
     *        </dd>
     *    <dt>enableSingleNoteSharing:</dt>
     *        <dd>
     *        Whether the client application should enable single note sharing.
     *        </dd>
     *    <dt>enableSponsoredAccounts:</dt>
     *        <dd>
     *        Whether the client application should enable sponsored accounts.
     *        </dd>
     *    <dt>enableTwitterSharing:</dt>
     *        <dd>
     *        Whether the client application should enable sharing of notes on Twitter.
     *        </dd>
     *    </dl>
     */
    class BootstrapSettings {
        serviceHost: string;
        marketingUrl: string;
        supportUrl: string;
        accountEmailDomain: string;
        enableFacebookSharing: boolean;
        enableGiftSubscriptions: boolean;
        enableSupportTickets: boolean;
        enableSharedNotebooks: boolean;
        enableSingleNoteSharing: boolean;
        enableSponsoredAccounts: boolean;
        enableTwitterSharing: boolean;
        enableLinkedInSharing: boolean;
        enablePublicNotebooks: boolean;

        constructor(args?: { serviceHost: string; marketingUrl: string; supportUrl: string; accountEmailDomain: string; enableFacebookSharing?: boolean; enableGiftSubscriptions?: boolean; enableSupportTickets?: boolean; enableSharedNotebooks?: boolean; enableSingleNoteSharing?: boolean; enableSponsoredAccounts?: boolean; enableTwitterSharing?: boolean; enableLinkedInSharing?: boolean; enablePublicNotebooks?: boolean; });
    }

    /**
     *    This structure describes a collection of bootstrap settings.
     * <dl>
     *    <dt>name:</dt>
     *        <dd>
     *        The unique name of the profile, which is guaranteed to remain consistent across
     *        calls to getBootstrapInfo.
     *        </dd>
     *    <dt>settings:</dt>
     *        <dd>
     *        The settings for this profile.
     *        </dd>
     *    </dl>
     */
    class BootstrapProfile {
        name: string;
        settings: BootstrapSettings;

        constructor(args?: { name: string; settings: BootstrapSettings; });
    }

    /**
     *    This structure describes a collection of bootstrap profiles.
     * <dl>
     *    <dt>profiles:</dt>
     *        <dd>
     *        List of one or more bootstrap profiles, in descending
     *        preference order.
     *        </dd>
     *    </dl>
     */
    class BootstrapInfo {
        profiles: BootstrapProfile[];

        constructor(args?: { profiles: BootstrapProfile[]; });
    }

    /**
     * The major version number for the current revision of the EDAM protocol.
     * Clients pass this to the service using UserStore.checkVersion at the
     * beginning of a session to confirm that they are not out of date.
     */
    var EDAM_VERSION_MAJOR: number;

    /**
     * The minor version number for the current revision of the EDAM protocol.
     * Clients pass this to the service using UserStore.checkVersion at the
     * beginning of a session to confirm that they are not out of date.
     */
    var EDAM_VERSION_MINOR: number;

}
