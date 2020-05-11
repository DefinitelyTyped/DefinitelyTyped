import * as eh from '@wordpress/escape-html';

// $ExpectType string
eh.escapeAmpersand('foo');

// $ExpectType string
eh.escapeAttribute('foo');

// $ExpectType string
eh.escapeHTML('foo');

// $ExpectType string
eh.escapeLessThan('foo');

// $ExpectType string
eh.escapeQuotationMark('foo');

// $ExpectType boolean
eh.isValidAttributeName('foo');
