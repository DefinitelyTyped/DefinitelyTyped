import DOMException = require('domexception');

new DOMException(); // $ExpectType DOMException
new DOMException('foo'); // $ExpectType DOMException
new DOMException('foo', 'SyntaxError'); // $ExpectType DOMException

new DOMException().INDEX_SIZE_ERR; // $ExpectType 1
new DOMException().DOMSTRING_SIZE_ERR; // $ExpectType 2
new DOMException().HIERARCHY_REQUEST_ERR; // $ExpectType 3
new DOMException().WRONG_DOCUMENT_ERR; // $ExpectType 4
new DOMException().INVALID_CHARACTER_ERR; // $ExpectType 5
new DOMException().NO_DATA_ALLOWED_ERR; // $ExpectType 6
new DOMException().NO_MODIFICATION_ALLOWED_ERR; // $ExpectType 7
new DOMException().NOT_FOUND_ERR; // $ExpectType 8
new DOMException().NOT_SUPPORTED_ERR; // $ExpectType 9
new DOMException().INUSE_ATTRIBUTE_ERR; // $ExpectType 10
new DOMException().INVALID_STATE_ERR; // $ExpectType 11
new DOMException().SYNTAX_ERR; // $ExpectType 12
new DOMException().INVALID_MODIFICATION_ERR; // $ExpectType 13
new DOMException().NAMESPACE_ERR; // $ExpectType 14
new DOMException().INVALID_ACCESS_ERR; // $ExpectType 15
new DOMException().VALIDATION_ERR; // $ExpectType 16
new DOMException().TYPE_MISMATCH_ERR; // $ExpectType 17
new DOMException().SECURITY_ERR; // $ExpectType 18
new DOMException().NETWORK_ERR; // $ExpectType 19
new DOMException().ABORT_ERR; // $ExpectType 20
new DOMException().URL_MISMATCH_ERR; // $ExpectType 21
new DOMException().QUOTA_EXCEEDED_ERR; // $ExpectType 22
new DOMException().TIMEOUT_ERR; // $ExpectType 23
new DOMException().INVALID_NODE_TYPE_ERR; // $ExpectType 24
new DOMException().DATA_CLONE_ERR; // $ExpectType 25

DOMException.INDEX_SIZE_ERR; // $ExpectType 1
DOMException.DOMSTRING_SIZE_ERR; // $ExpectType 2
DOMException.HIERARCHY_REQUEST_ERR; // $ExpectType 3
DOMException.WRONG_DOCUMENT_ERR; // $ExpectType 4
DOMException.INVALID_CHARACTER_ERR; // $ExpectType 5
DOMException.NO_DATA_ALLOWED_ERR; // $ExpectType 6
DOMException.NO_MODIFICATION_ALLOWED_ERR; // $ExpectType 7
DOMException.NOT_FOUND_ERR; // $ExpectType 8
DOMException.NOT_SUPPORTED_ERR; // $ExpectType 9
DOMException.INUSE_ATTRIBUTE_ERR; // $ExpectType 10
DOMException.INVALID_STATE_ERR; // $ExpectType 11
DOMException.SYNTAX_ERR; // $ExpectType 12
DOMException.INVALID_MODIFICATION_ERR; // $ExpectType 13
DOMException.NAMESPACE_ERR; // $ExpectType 14
DOMException.INVALID_ACCESS_ERR; // $ExpectType 15
DOMException.VALIDATION_ERR; // $ExpectType 16
DOMException.TYPE_MISMATCH_ERR; // $ExpectType 17
DOMException.SECURITY_ERR; // $ExpectType 18
DOMException.NETWORK_ERR; // $ExpectType 19
DOMException.ABORT_ERR; // $ExpectType 20
DOMException.URL_MISMATCH_ERR; // $ExpectType 21
DOMException.QUOTA_EXCEEDED_ERR; // $ExpectType 22
DOMException.TIMEOUT_ERR; // $ExpectType 23
DOMException.INVALID_NODE_TYPE_ERR; // $ExpectType 24
DOMException.DATA_CLONE_ERR; // $ExpectType 25
