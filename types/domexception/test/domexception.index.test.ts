import DOMException = require('domexception');

new DOMException(); // $ExpectType DOMException
new DOMException('foo'); // $ExpectType DOMException
new DOMException('foo', 'SyntaxError'); // $ExpectType DOMException

new DOMException().INDEX_SIZE_ERR; // $ExpectType number
new DOMException().DOMSTRING_SIZE_ERR; // $ExpectType number
new DOMException().HIERARCHY_REQUEST_ERR; // $ExpectType number
new DOMException().WRONG_DOCUMENT_ERR; // $ExpectType number
new DOMException().INVALID_CHARACTER_ERR; // $ExpectType number
new DOMException().NO_DATA_ALLOWED_ERR; // $ExpectType number
new DOMException().NO_MODIFICATION_ALLOWED_ERR; // $ExpectType number
new DOMException().NOT_FOUND_ERR; // $ExpectType number
new DOMException().NOT_SUPPORTED_ERR; // $ExpectType number
new DOMException().INUSE_ATTRIBUTE_ERR; // $ExpectType number
new DOMException().INVALID_STATE_ERR; // $ExpectType number
new DOMException().SYNTAX_ERR; // $ExpectType number
new DOMException().INVALID_MODIFICATION_ERR; // $ExpectType number
new DOMException().NAMESPACE_ERR; // $ExpectType number
new DOMException().INVALID_ACCESS_ERR; // $ExpectType number
new DOMException().VALIDATION_ERR; // $ExpectType number
new DOMException().TYPE_MISMATCH_ERR; // $ExpectType number
new DOMException().SECURITY_ERR; // $ExpectType number
new DOMException().NETWORK_ERR; // $ExpectType number
new DOMException().ABORT_ERR; // $ExpectType number
new DOMException().URL_MISMATCH_ERR; // $ExpectType number
new DOMException().QUOTA_EXCEEDED_ERR; // $ExpectType number
new DOMException().TIMEOUT_ERR; // $ExpectType number
new DOMException().INVALID_NODE_TYPE_ERR; // $ExpectType number
new DOMException().DATA_CLONE_ERR; // $ExpectType number

DOMException.INDEX_SIZE_ERR; // $ExpectType number
DOMException.DOMSTRING_SIZE_ERR; // $ExpectType number
DOMException.HIERARCHY_REQUEST_ERR; // $ExpectType number
DOMException.WRONG_DOCUMENT_ERR; // $ExpectType number
DOMException.INVALID_CHARACTER_ERR; // $ExpectType number
DOMException.NO_DATA_ALLOWED_ERR; // $ExpectType number
DOMException.NO_MODIFICATION_ALLOWED_ERR; // $ExpectType number
DOMException.NOT_FOUND_ERR; // $ExpectType number
DOMException.NOT_SUPPORTED_ERR; // $ExpectType number
DOMException.INUSE_ATTRIBUTE_ERR; // $ExpectType number
DOMException.INVALID_STATE_ERR; // $ExpectType number
DOMException.SYNTAX_ERR; // $ExpectType number
DOMException.INVALID_MODIFICATION_ERR; // $ExpectType number
DOMException.NAMESPACE_ERR; // $ExpectType number
DOMException.INVALID_ACCESS_ERR; // $ExpectType number
DOMException.VALIDATION_ERR; // $ExpectType number
DOMException.TYPE_MISMATCH_ERR; // $ExpectType number
DOMException.SECURITY_ERR; // $ExpectType number
DOMException.NETWORK_ERR; // $ExpectType number
DOMException.ABORT_ERR; // $ExpectType number
DOMException.URL_MISMATCH_ERR; // $ExpectType number
DOMException.QUOTA_EXCEEDED_ERR; // $ExpectType number
DOMException.TIMEOUT_ERR; // $ExpectType number
DOMException.INVALID_NODE_TYPE_ERR; // $ExpectType number
DOMException.DATA_CLONE_ERR; // $ExpectType number
