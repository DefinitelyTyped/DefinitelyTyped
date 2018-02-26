/**
 * Enums from protobufs
 * https://github.com/ampproject/amphtml/blob/master/validator/validator.proto
 */

export type ValidationResultStatus =
    | 'UNKNOWN'
    | 'PASS'
    | 'FAIL'

export type ValidationErrorSeverity =
    | 'UNKNOWN_SEVERITY'
    // A document with at least one error of this severity fails validation.
    | 'ERROR'
    // A document may have warnings and still pass validation.
    | 'WARNING'
    // DO NOT REASSIGN the previously used values 2, 3.

export type ErrorCategoryCode =
    | 'UNKNOWN'
    // Errors for which no other category applies are classified as GENERIC.
    | 'GENERIC'
    // Disallowed common HTML tags for which there are corresponding
    // AMP tags. E.g., 'img', 'video', 'audio', 'iframe' -> 'amp-img',
    // 'amp-video', 'amp-audio', 'amp-iframe'.
    | 'DISALLOWED_HTML_WITH_AMP_EQUIVALENT'
    // Disallowed HTML for which no AMP equivalent exists.
    | 'DISALLOWED_HTML'
    // Something is wrong with the author stylesheet, that is, the style
    // tag identified with 'amp-custom'. This includes CSS
    // syntax errors as well as blacklisted CSS features.
    | 'AUTHOR_STYLESHEET_PROBLEM'
    // AMP HTML requires specific tags to be present. This includes
    // the invocation of the AMP engine, specific style boilerplate,
    // a viewport declaration, etc.
    | 'MANDATORY_AMP_TAG_MISSING_OR_INCORRECT'
    // AMP HTML tags (amp-img, amp-video, amp-brightcove, etc.) require
    // specific attributes, attribute values, etc. Something went wrong
    // with an amp- tag.
    | 'AMP_TAG_PROBLEM'
    // We found something wrong with a script tag. Only specific, whitelisted
    // Javascript inclusions are allowed.
    | 'CUSTOM_JAVASCRIPT_DISALLOWED'
    // AMP supports layout specifications, such as width and height of
    // a given AMP element, and responsiveness.
    // https://github.com/ampproject/amphtml/blob/master/spec/amp-html-layout.md
    | 'AMP_LAYOUT_PROBLEM'
    // AMP supports the HTML template tag (e.g. within amp-list) and interprets
    // Mustache syntax within such templates. To help with debugging, the AMP
    // Validator generates errors for misplaced Mustache template syntax.
    // https://github.com/ampproject/amphtml/blob/master/spec/amp-html-templates.md
    | 'AMP_HTML_TEMPLATE_PROBLEM'
    // This is currently still allowed but may soon be disallowed. Usually
    // a recommendation for a replacement is rendered as part of the error.
    | 'DEPRECATION'

export type ValidationErrorCode =
    | 'UNKNOWN_CODE'
    | 'MANDATORY_TAG_MISSING'
    | 'TAG_REQUIRED_BY_MISSING'
    | 'WARNING_TAG_REQUIRED_BY_MISSING'
    | 'WARNING_EXTENSION_UNUSED'
    | 'EXTENSION_UNUSED'
    | 'WARNING_EXTENSION_DEPRECATED_VERSION'
    | 'ATTR_REQUIRED_BUT_MISSING'
    | 'DISALLOWED_TAG'
    | 'GENERAL_DISALLOWED_TAG'
    | 'DISALLOWED_SCRIPT_TAG'
    | 'DISALLOWED_ATTR'
    | 'DISALLOWED_STYLE_ATTR'
    | 'INVALID_ATTR_VALUE'
    | 'DUPLICATE_ATTRIBUTE'
    | 'ATTR_VALUE_REQUIRED_BY_LAYOUT'
    | 'IMPLIED_LAYOUT_INVALID'
    | 'SPECIFIED_LAYOUT_INVALID'
    | 'MANDATORY_ATTR_MISSING'
    | 'MANDATORY_ONEOF_ATTR_MISSING'
    | 'DUPLICATE_DIMENSION'
    | 'DUPLICATE_UNIQUE_TAG'
    | 'DUPLICATE_UNIQUE_TAG_WARNING'
    | 'WRONG_PARENT_TAG'
    | 'STYLESHEET_TOO_LONG'
    | 'MANDATORY_CDATA_MISSING_OR_INCORRECT'
    | 'CDATA_VIOLATES_BLACKLIST'
    | 'NON_WHITESPACE_CDATA_ENCOUNTERED'
    | 'DEPRECATED_ATTR'
    | 'DEPRECATED_TAG'
    | 'MANDATORY_PROPERTY_MISSING_FROM_ATTR_VALUE'
    | 'INVALID_PROPERTY_VALUE_IN_ATTR_VALUE'
    | 'MISSING_URL'
    | 'INVALID_URL'
    | 'INVALID_URL_PROTOCOL'
    | 'DISALLOWED_DOMAIN'
    | 'DISALLOWED_RELATIVE_URL'
    | 'DISALLOWED_PROPERTY_IN_ATTR_VALUE'
    | 'MUTUALLY_EXCLUSIVE_ATTRS'
    | 'UNESCAPED_TEMPLATE_IN_ATTR_VALUE'
    | 'TEMPLATE_PARTIAL_IN_ATTR_VALUE'
    | 'TEMPLATE_IN_ATTR_NAME'
    | 'INCONSISTENT_UNITS_FOR_WIDTH_AND_HEIGHT'
    | 'DISALLOWED_TAG_ANCESTOR'
    | 'MANDATORY_LAST_CHILD_TAG'
    | 'MANDATORY_TAG_ANCESTOR'
    | 'MANDATORY_TAG_ANCESTOR_WITH_HINT'
    | 'ATTR_DISALLOWED_BY_IMPLIED_LAYOUT'
    | 'ATTR_DISALLOWED_BY_SPECIFIED_LAYOUT'
    | 'INCORRECT_NUM_CHILD_TAGS'
    | 'INCORRECT_MIN_NUM_CHILD_TAGS'
    | 'DISALLOWED_CHILD_TAG_NAME'
    | 'DISALLOWED_FIRST_CHILD_TAG_NAME'
    | 'DISALLOWED_MANUFACTURED_BODY'
    | 'CHILD_TAG_DOES_NOT_SATISFY_REFERENCE_POINT'
    | 'MANDATORY_REFERENCE_POINT_MISSING'
    | 'DUPLICATE_REFERENCE_POINT'
    | 'TAG_NOT_ALLOWED_TO_HAVE_SIBLINGS'
    | 'TAG_REFERENCE_POINT_CONFLICT'
    | 'CHILD_TAG_DOES_NOT_SATISFY_REFERENCE_POINT_SINGULAR'
    | 'BASE_TAG_MUST_PRECEED_ALL_URLS'
    | 'MISSING_REQUIRED_EXTENSION'
    | 'ATTR_MISSING_REQUIRED_EXTENSION'
    | 'DOCUMENT_TOO_COMPLEX'
    | 'INVALID_UTF8'
    | 'CSS_SYNTAX'
    | 'CSS_SYNTAX_INVALID_AT_RULE'
    | 'CSS_SYNTAX_STRAY_TRAILING_BACKSLASH'
    | 'CSS_SYNTAX_UNTERMINATED_COMMENT'
    | 'CSS_SYNTAX_UNTERMINATED_STRING'
    | 'CSS_SYNTAX_BAD_URL'
    | 'CSS_SYNTAX_EOF_IN_PRELUDE_OF_QUALIFIED_RULE'
    | 'CSS_SYNTAX_INVALID_DECLARATION'
    | 'CSS_SYNTAX_INCOMPLETE_DECLARATION'
    | 'CSS_SYNTAX_ERROR_IN_PSEUDO_SELECTOR'
    | 'CSS_SYNTAX_MISSING_SELECTOR'
    | 'CSS_SYNTAX_NOT_A_SELECTOR_START'
    | 'CSS_SYNTAX_UNPARSED_INPUT_REMAINS_IN_SELECTOR'
    | 'CSS_SYNTAX_MISSING_URL'
    | 'CSS_SYNTAX_INVALID_URL'
    | 'CSS_SYNTAX_INVALID_URL_PROTOCOL'
    | 'CSS_SYNTAX_DISALLOWED_DOMAIN'
    | 'CSS_SYNTAX_DISALLOWED_RELATIVE_URL'
    | 'CSS_SYNTAX_INVALID_ATTR_SELECTOR'
    | 'CSS_SYNTAX_INVALID_PROPERTY'
    | 'CSS_SYNTAX_INVALID_PROPERTY_NOLIST'
    | 'CSS_SYNTAX_QUALIFIED_RULE_HAS_NO_DECLARATIONS'
    | 'CSS_SYNTAX_DISALLOWED_QUALIFIED_RULE_MUST_BE_INSIDE_KEYFRAME'
    | 'CSS_SYNTAX_DISALLOWED_KEYFRAME_INSIDE_KEYFRAME'
    | 'CSS_SYNTAX_MALFORMED_MEDIA_QUERY'
    | 'CSS_SYNTAX_DISALLOWED_MEDIA_TYPE'
    | 'CSS_SYNTAX_DISALLOWED_MEDIA_FEATURE'

    // The following codes are currently used only by A4A CSS validation.
    | 'CSS_SYNTAX_DISALLOWED_PROPERTY_VALUE'
    | 'CSS_SYNTAX_DISALLOWED_PROPERTY_VALUE_WITH_HINT'
    | 'CSS_SYNTAX_PROPERTY_DISALLOWED_WITHIN_AT_RULE'
    | 'CSS_SYNTAX_PROPERTY_DISALLOWED_TOGETHER_WITH'
    | 'CSS_SYNTAX_PROPERTY_REQUIRES_QUALIFICATION'
