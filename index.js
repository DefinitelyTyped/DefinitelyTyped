// Copyright 2013 Stephen Vickers <stephen.vickers.sv@gmail.com>

const ber = require ("asn1-ber").Ber;
const smartbuffer = require ("smart-buffer");
const dgram = require ("dgram");
const net = require ("net");
const events = require ("events");
const util = require ("util");
const crypto = require ("crypto");
const mibparser = require ("./lib/mib");
const Buffer = require('buffer').Buffer;

var DEBUG = false;

const MIN_SIGNED_INT32 = -2147483648;
const MAX_SIGNED_INT32 = 2147483647;
const MIN_UNSIGNED_INT32 = 0;
const MAX_UNSIGNED_INT32 = 4294967295;
const MAX_UNSIGNED_INT64 = 18446744073709551615;

const DES_IMPLEMENTATION = 'library';

// Use test harness trace or debug functions falling back to console.debug in normal mode.
// eslint-disable-next-line no-undef
var debugfn = typeof(global.debug) === 'function'? global.trace ?? global.debug : console.debug;

function debug () {
	if ( DEBUG ) {
		debugfn.apply (this, arguments);
	}
}

/*****************************************************************************
 ** Constants
 **/


function _expandConstantObject (object) {
	var keys = [];
	for (var key in object)
		keys.push (key);
	for (var i = 0; i < keys.length; i++)
		object[object[keys[i]]] = parseInt (keys[i]);
}

var ErrorStatus = {
	0: "NoError",
	1: "TooBig",
	2: "NoSuchName",
	3: "BadValue",
	4: "ReadOnly",
	5: "GeneralError",
	6: "NoAccess",
	7: "WrongType",
	8: "WrongLength",
	9: "WrongEncoding",
	10: "WrongValue",
	11: "NoCreation",
	12: "InconsistentValue",
	13: "ResourceUnavailable",
	14: "CommitFailed",
	15: "UndoFailed",
	16: "AuthorizationError",
	17: "NotWritable",
	18: "InconsistentName"
};

_expandConstantObject (ErrorStatus);

var ObjectType = {
	1: "Boolean",
	2: "Integer",
	3: "BitString",
	4: "OctetString",
	5: "Null",
	6: "OID",
	64: "IpAddress",
	65: "Counter",
	66: "Gauge",
	67: "TimeTicks",
	68: "Opaque",
	70: "Counter64",
	128: "NoSuchObject",
	129: "NoSuchInstance",
	130: "EndOfMibView"
};

_expandConstantObject (ObjectType);

// ASN.1
ObjectType.INTEGER = ObjectType.Integer;
ObjectType["OCTET STRING"] = ObjectType.OctetString;
ObjectType["OBJECT IDENTIFIER"] = ObjectType.OID;
// SNMPv2-SMI
ObjectType.Integer32 = ObjectType.Integer;
ObjectType.Counter32 = ObjectType.Counter;
ObjectType.Gauge32 = ObjectType.Gauge;
ObjectType.Unsigned32 = ObjectType.Gauge32;

var PduType = {
	160: "GetRequest",
	161: "GetNextRequest",
	162: "GetResponse",
	163: "SetRequest",
	164: "Trap",
	165: "GetBulkRequest",
	166: "InformRequest",
	167: "TrapV2",
	168: "Report"
};

_expandConstantObject (PduType);

var TrapType = {
	0: "ColdStart",
	1: "WarmStart",
	2: "LinkDown",
	3: "LinkUp",
	4: "AuthenticationFailure",
	5: "EgpNeighborLoss",
	6: "EnterpriseSpecific"
};

_expandConstantObject (TrapType);

var SecurityLevel = {
	1: "noAuthNoPriv",
	2: "authNoPriv",
	3: "authPriv"
};

_expandConstantObject (SecurityLevel);

var AuthProtocols = {
	"1": "none",
	"2": "md5",
	"3": "sha",
	"4": "sha224",
	"5": "sha256",
	"6": "sha384",
	"7": "sha512"
};

_expandConstantObject (AuthProtocols);

var PrivProtocols = {
	"1": "none",
	"2": "des",
	"4": "aes",
	"6": "aes256b",
	"8": "aes256r"
};

_expandConstantObject (PrivProtocols);

var UsmStatsBase = "1.3.6.1.6.3.15.1.1";

var UsmStats = {
	"1": "Unsupported Security Level",
	"2": "Not In Time Window",
	"3": "Unknown User Name",
	"4": "Unknown Engine ID",
	"5": "Wrong Digest (incorrect password, community or key)",
	"6": "Decryption Error"
};

_expandConstantObject (UsmStats);

var MibProviderType = {
	"1": "Scalar",
	"2": "Table"
};

_expandConstantObject (MibProviderType);

var Version1 = 0;
var Version2c = 1;
var Version3 = 3;

var Version = {
	"1": Version1,
	"2c": Version2c,
	"3": Version3
};

var AgentXPduType = {
	1: "Open",
	2: "Close",
	3: "Register",
	4: "Unregister",
	5: "Get",
	6: "GetNext",
	7: "GetBulk",
	8: "TestSet",
	9: "CommitSet",
	10: "UndoSet",
	11: "CleanupSet",
	12: "Notify",
	13: "Ping",
	14: "IndexAllocate",
	15: "IndexDeallocate",
	16: "AddAgentCaps",
	17: "RemoveAgentCaps",
	18: "Response"
};

_expandConstantObject (AgentXPduType);

var AccessControlModelType = {
	0: "None",
	1: "Simple"
};

_expandConstantObject (AccessControlModelType);

var AccessLevel = {
	0: "None",
	1: "ReadOnly",
	2: "ReadWrite"
};

_expandConstantObject (AccessLevel);

// SMIv2 MAX-ACCESS values
var MaxAccess = {
	0: "not-accessible",
	1: "accessible-for-notify",
	2: "read-only",
	3: "read-write",
	4: "read-create"
};

_expandConstantObject (MaxAccess);

// SMIv1 ACCESS value mapping to SMIv2 MAX-ACCESS
var AccessToMaxAccess = {
	"not-accessible": "not-accessible",
	"read-only": "read-only",
	"read-write": "read-write",
	"write-only": "read-write"
};

var RowStatus = {
	// status values
	1: "active",
	2: "notInService",
	3: "notReady",

	// actions
	4: "createAndGo",
	5: "createAndWait",
	6: "destroy"
};

_expandConstantObject (RowStatus);

var ResponseInvalidCode = {
	1: "EIp4AddressSize",
	2: "EUnknownObjectType",
	3: "EUnknownPduType",
	4: "ECouldNotDecrypt",
	5: "EAuthFailure",
	6: "EReqResOidNoMatch",
//	7: "ENonRepeaterCountMismatch",  // no longer used
	8: "EOutOfOrder",
	9: "EVersionNoMatch",
	10: "ECommunityNoMatch",
	11: "EUnexpectedReport",
	12: "EResponseNotHandled",
	13: "EUnexpectedResponse"
};

_expandConstantObject (ResponseInvalidCode);

var OidFormat = {
	"oid": "oid",
	"path": "path",
	"module": "module"
};

/*****************************************************************************
 ** Exception class definitions
 **/

function ResponseInvalidError (message, code, info) {
	this.name = "ResponseInvalidError";
	this.message = message;
	this.code = code;
	this.info = info;
	Error.captureStackTrace(this, ResponseInvalidError);
}
util.inherits (ResponseInvalidError, Error);

function RequestInvalidError (message) {
	this.name = "RequestInvalidError";
	this.message = message;
	Error.captureStackTrace(this, RequestInvalidError);
}
util.inherits (RequestInvalidError, Error);

function RequestFailedError (message, status) {
	this.name = "RequestFailedError";
	this.message = message;
	this.status = status;
	Error.captureStackTrace(this, RequestFailedError);
}
util.inherits (RequestFailedError, Error);

function RequestTimedOutError (message) {
	this.name = "RequestTimedOutError";
	this.message = message;
	Error.captureStackTrace(this, RequestTimedOutError);
}
util.inherits (RequestTimedOutError, Error);

function ProcessingError (message, error, rinfo, buffer) {
	this.name = "ProcessingError";
	this.message = message;
	this.error = error;
	this.rinfo = rinfo;
	this.buffer = buffer;
	Error.captureStackTrace(this, ProcessingError);
}
util.inherits (ProcessingError, Error);

/*****************************************************************************
 ** OID and varbind helper functions
 **/

function isVarbindError (varbind) {
	return !!(varbind.type == ObjectType.NoSuchObject
	|| varbind.type == ObjectType.NoSuchInstance
	|| varbind.type == ObjectType.EndOfMibView);
}

function varbindError (varbind) {
	return (ObjectType[varbind.type] || "NotAnError") + ": " + varbind.oid;
}

function oidFollowsOid (oidString, nextString) {
	var oid = {str: oidString, len: oidString.length, idx: 0};
	var next = {str: nextString, len: nextString.length, idx: 0};
	var dotCharCode = ".".charCodeAt (0);

	function getNumber (item) {
		var n = 0;
		if (item.idx >= item.len)
			return null;
		while (item.idx < item.len) {
			var charCode = item.str.charCodeAt (item.idx++);
			if (charCode == dotCharCode)
				return n;
			n = (n ? (n * 10) : n) + (charCode - 48);
		}
		return n;
	}

	while (1) {
		var oidNumber = getNumber (oid);
		var nextNumber = getNumber (next);

		if (oidNumber !== null) {
			if (nextNumber !== null) {
				if (nextNumber > oidNumber) {
					return true;
				} else if (nextNumber < oidNumber) {
					return false;
				}
			} else {
				return true;
			}
		} else {
			return true;
		}
	}
}

function oidInSubtree (oidString, nextString) {
	var oid = oidString.split (".");
	var next = nextString.split (".");

	if (oid.length > next.length)
		return false;

	for (var i = 0; i < oid.length; i++) {
		if (next[i] != oid[i])
			return false;
	}

	return true;
}

function readInt32 (buffer) {
	var parsedInt = buffer.readInt ();
	if ( ! Number.isInteger(parsedInt) ) {
		throw new TypeError('Value read as integer ' + parsedInt + ' is not an integer');
	}
	if ( parsedInt < MIN_SIGNED_INT32 || parsedInt > MAX_SIGNED_INT32 ) {
		throw new RangeError('Read integer ' + parsedInt + ' is outside the signed 32-bit range');
	}
	return parsedInt;
}

function readUint32 (buffer) {
	var parsedInt = buffer.readInt ();
	if ( ! Number.isInteger(parsedInt) ) {
		throw new TypeError('Value read as integer ' + parsedInt + ' is not an integer');
	}
	parsedInt = (parsedInt>>>0);
	if ( parsedInt < MIN_UNSIGNED_INT32 || parsedInt > MAX_UNSIGNED_INT32 ) {
		throw new RangeError('Read integer ' + parsedInt + ' is outside the unsigned 32-bit range');
	}
	return parsedInt;
}

function readUint64 (buffer) {
	var value = buffer.readString (ObjectType.Counter64, true);

	return value;
}

function readIpAddress (buffer) {
	var bytes = buffer.readString (ObjectType.IpAddress, true);
	if (bytes.length != 4)
		throw new ResponseInvalidError ("Length '" + bytes.length
				+ "' of IP address '" + bytes.toString ("hex")
				+ "' is not 4", ResponseInvalidCode.EIp4AddressSize);
	var value = bytes[0] + "." + bytes[1] + "." + bytes[2] + "." + bytes[3];
	return value;
}

function readVarbindValue (buffer, type) {
	var value;
	if (type == ObjectType.Boolean) {
		value = buffer.readBoolean ();
	} else if (type == ObjectType.Integer) {
		value = readInt32 (buffer);
	} else if (type == ObjectType.BitString) {
		value = buffer.readBitString();
	} else if (type == ObjectType.OctetString) {
		value = buffer.readString (null, true);
	} else if (type == ObjectType.Null) {
		buffer.readByte ();
		buffer.readByte ();
		value = null;
	} else if (type == ObjectType.OID) {
		value = buffer.readOID ();
	} else if (type == ObjectType.IpAddress) {
		value = readIpAddress (buffer);
	} else if (type == ObjectType.Counter) {
		value = readUint32 (buffer);
	} else if (type == ObjectType.Gauge) {
		value = readUint32 (buffer);
	} else if (type == ObjectType.TimeTicks) {
		value = readUint32 (buffer);
	} else if (type == ObjectType.Opaque) {
		value = buffer.readString (ObjectType.Opaque, true);
	} else if (type == ObjectType.Counter64) {
		value = readUint64 (buffer);
	} else if (type == ObjectType.NoSuchObject) {
		buffer.readByte ();
		buffer.readByte ();
		value = null;
	} else if (type == ObjectType.NoSuchInstance) {
		buffer.readByte ();
		buffer.readByte ();
		value = null;
	} else if (type == ObjectType.EndOfMibView) {
		buffer.readByte ();
		buffer.readByte ();
		value = null;
	} else {
		throw new ResponseInvalidError ("Unknown type '" + type
				+ "' in response", ResponseInvalidCode.EUnknownObjectType);
	}
	return value;
}

function readVarbinds (buffer, varbinds) {
	buffer.readSequence ();

	while (1) {
		buffer.readSequence ();
		if ( buffer.peek () != ObjectType.OID )
			break;
		var oid = buffer.readOID ();
		var type = buffer.peek ();

		if (type == null)
			break;

		var value = readVarbindValue (buffer, type);

		varbinds.push ({
			oid: oid,
			type: type,
			value: value
		});
	}
}

function writeInt32 (buffer, type, value) {
	if ( ! Number.isInteger(value) ) {
		throw new TypeError('Value to write as integer ' + value + ' is not an integer');
	}
	if ( value < MIN_SIGNED_INT32 || value > MAX_SIGNED_INT32 ) {
		throw new RangeError('Integer to write ' + value + ' is outside the signed 32-bit range');
	}
	buffer.writeInt(value, type);
}

function writeUint32 (buffer, type, value) {
	if ( ! Number.isInteger(value) ) {
		throw new TypeError('Value to write as integer ' + value + ' is not an integer');
	}
	if ( value < MIN_UNSIGNED_INT32 || value > MAX_UNSIGNED_INT32 ) {
		throw new RangeError('Integer to write ' + value + ' is outside the unsigned 32-bit range');
	}
	buffer.writeInt(value, type);
}

function writeUint64 (buffer, value) {
	buffer.writeBuffer (value, ObjectType.Counter64);
}

function writeVarbinds (buffer, varbinds) {
	buffer.startSequence ();
	for (var i = 0; i < varbinds.length; i++) {
		buffer.startSequence ();
		buffer.writeOID (varbinds[i].oid);

		if (varbinds[i].type && varbinds[i].hasOwnProperty("value")) {
			var type = varbinds[i].type;
			var value = varbinds[i].value;

			switch ( type ) {
				case ObjectType.Boolean:
					buffer.writeBoolean (value ? true : false);
					break;
				case ObjectType.Integer: // also Integer32
					writeInt32 (buffer, ObjectType.Integer, value);
					break;
				case ObjectType.OctetString:
					if (typeof value == "string")
						buffer.writeString (value);
					else
						buffer.writeBuffer (value, ObjectType.OctetString);
					break;
				case ObjectType.Null:
					buffer.writeNull ();
					break;
				case ObjectType.OID:
					buffer.writeOID (value);
					break;
				case ObjectType.IpAddress:
					var bytes = value.split (".");
					if (bytes.length != 4)
						throw new RequestInvalidError ("Invalid IP address '"
								+ value + "'");
					buffer.writeBuffer (Buffer.from (bytes), 64);
					break;
				case ObjectType.Counter: // also Counter32
					writeUint32 (buffer, ObjectType.Counter, value);
					break;
				case ObjectType.Gauge: // also Gauge32 & Unsigned32
					writeUint32 (buffer, ObjectType.Gauge, value);
					break;
				case ObjectType.TimeTicks:
					writeUint32 (buffer, ObjectType.TimeTicks, value);
					break;
				case ObjectType.Opaque:
					buffer.writeBuffer (value, ObjectType.Opaque);
					break;
				case ObjectType.Counter64:
					writeUint64 (buffer, value);
					break;
				case ObjectType.NoSuchObject:
				case ObjectType.NoSuchInstance:
				case ObjectType.EndOfMibView:
					buffer.writeByte (type);
					buffer.writeByte (0);
					break;
				default:
					throw new RequestInvalidError ("Unknown type '" + type
						+ "' in request");
			}
		} else {
			buffer.writeNull ();
		}

		buffer.endSequence ();
	}
	buffer.endSequence ();
}

const ObjectTypeUtil = {};

ObjectTypeUtil.castSetValue = function (type, value, constraints) {

	switch (type) {

		case ObjectType.Boolean: {
			return !! value;
		}

		case ObjectType.Integer:
		case ObjectType.Integer32: {
			if ( typeof value != "number" && typeof value != "string" ) {
				throw new Error("Invalid Integer", value);
			}
			const parsedValue = typeof value == "number" ? value : parseInt(value, 10);
			if ( isNaN(parsedValue) ) {
				throw new Error("Invalid Integer", value);
			}
			if ( constraints && ! ObjectTypeUtil.doesIntegerMeetConstraints (parsedValue, constraints) ) {
				throw new Error("Integer does not meet constraints", value);
			}
			return parsedValue;
		}

		case ObjectType.OctetString: {
			if ( ! ( value instanceof Buffer || typeof value == "string" ) ) {
				throw new Error("Invalid OctetString", value);
			}
			if ( constraints && ! ObjectTypeUtil.doesStringMeetConstraints (value, constraints) ) {
				throw new Error("OctetString does not meet constraints", value);
			}
			if ( value instanceof Buffer ) {
				return value.toString();
			} else {
				return value;
			}
		}

		case ObjectType.OID: {
			if ( typeof value != "string" || ! value.match(/^([0-9]+)(\.[0-9]+)+$/) ) {
				throw new Error("Invalid OID", value);
			}
			return value;
		}

		case ObjectType.Counter:
		case ObjectType.Counter32:
		case ObjectType.Gauge:
		case ObjectType.Gauge32:
		case ObjectType.Unsigned32: {
			// Counters should be initialized to 0 (RFC2578, end of section 7.9)
			// We'll do so.
			// return 0;
			// That ^^^ was fine when castSetValue was used only for DEFVAL
			// But now it's used in other set value scenarios
			// So we need to cast the given value to a whole number
			const parsedValue = parseInt(value, 10);
			if ( isNaN(parsedValue) ) {
				throw new Error(`Invalid Integer for ${type}`, value);
			}
			if ( parsedValue < 0 ) {
				throw new Error(`Integer is negative for ${type}`, value);
			}
			if ( parsedValue > MAX_UNSIGNED_INT32 ) {
				throw new Error(`Integer is greater than max unsigned int32 for ${type}`, value);
			}
			return parsedValue;
		}

		case ObjectType.Counter64: {
			if ( value instanceof Buffer ) {
				if ( value.length !== 8 ) {
					throw new Error(`Counter64 buffer is not 8 bytes`, value);
				}
				return value;
			}
			const parsedValue = parseInt(value, 10);
			if ( isNaN(parsedValue) ) {
				throw new Error(`Invalid Integer for Counter64`, value);
			}
			if ( parsedValue < 0 ) {
				throw new Error(`Integer is negative for Counter64`, value);
			}
			if ( parsedValue > MAX_UNSIGNED_INT64 ) {
				throw new Error(`Integer is greater than max unsigned int64 for Counter64`, value);
			}
			return parsedValue;
		}

		case ObjectType.IpAddress: {
			const octets = value.split (".");
			if ( typeof value != "string" || octets.length != 4 ) {
				throw new Error("Invalid IpAddress", value);
			}
			for ( const octet of octets ) {
				if ( isNaN (octet) ) {
					throw new Error("Invalid IpAddress", value);
				}
				if ( parseInt (octet) < 0 || parseInt (octet) > 255) {
					throw new Error("Invalid IpAddress", value);
				}
			}
			return value;
		}

		default: {
			// Assume the caller knows what he's doing
			return value;
		}
	}

};

ObjectTypeUtil.isValid = function (type, value, constraints) {

	switch (type) {
		case ObjectType.Boolean: {
			return typeof value == "boolean";
		}
		case ObjectType.Integer:
		case ObjectType.Integer32: {
			// Allow strings that can be parsed as integers
			const parsedValue = Number(value);
			if ( isNaN(parsedValue) || ! Number.isInteger(parsedValue) || parsedValue < MIN_SIGNED_INT32 || parsedValue > MAX_SIGNED_INT32 ) {
				return false;
			}
			if ( constraints && ! ObjectTypeUtil.doesIntegerMeetConstraints (parsedValue, constraints) ) {
				return false;
			}
			return true;
		}
		case ObjectType.OctetString: {
			// Allow string or buffer
			if ( typeof value != "string" && ! (value instanceof Buffer) ) {
				return false;
			}
			if ( constraints && ! ObjectTypeUtil.doesStringMeetConstraints (value, constraints) ) {
				return false;
			}
			return true;
		}
		case ObjectType.OID: {
			return typeof value == "string" && value.match (/^([0-9]+)(\.[0-9]+)+$/);
		}
		case ObjectType.Counter:
		case ObjectType.Counter32:
		case ObjectType.Gauge:
		case ObjectType.Gauge32:
		case ObjectType.Unsigned32: {
			// Allow strings that can be parsed as integers
			const parsed = Number(value);
			return ! isNaN (parsed) && Number.isInteger (parsed) && parsed >= 0 && parsed <= MAX_UNSIGNED_INT32;
		}
		case ObjectType.Counter64: {
			if ( value instanceof Buffer ) {
				// Allow buffers of 8 bytes - should do further check to see if it translates to a valid integer
				return value.length == 8;
			} else {
				// Allow strings that can be parsed as integers
				const parsed = Number(value);
				return ! isNaN (parsed) && Number.isInteger (parsed) && parsed >= 0;
			}
		}
		case ObjectType.IpAddress: {
			const octets = value.split(".");
			if ( octets.length !== 4 ) {
				return false;
			}
			for ( const octet of octets ) {
				if ( isNaN (octet) ) {
					return false;
				}
				if ( parseInt (octet) < 0 || parseInt (octet) > 255) {
					return false;
				}
			}
			return true;
		}
		// return true for all other types until we are certain all object types are covered with specific rules
		default: {
			return true;
		}
	}

};

ObjectTypeUtil.doesIntegerMeetConstraints = function (value, constraints) {

	if ( ! constraints ) {
		return true;
	}

	if ( constraints.enumeration ) {
		if ( constraints.enumeration[value] ) {
			return true;
		} else {
			return false;
		}
	} else if ( constraints.ranges ) {
		for ( const range of constraints.ranges ) {
			const min = "min" in range ? range.min : Number.MIN_SAFE_INTEGER;
			const max = "max" in range ? range.max : Number.MAX_SAFE_INTEGER;
			if ( value >= min && value <= max ) {
				return true;
			}
		}
		return false;
	}

	return true;
};

ObjectTypeUtil.doesStringMeetConstraints = function (value, constraints) {

	if ( ! constraints ) {
		return true;
	}

	if ( constraints.sizes ) {
		// if size is constrained, value must have a length property
		if ( value.length === undefined ) {
			return false;
		}
		const len = value.length;
		for ( const range of constraints.sizes ) {
			const min = "min" in range ? range.min : Number.MIN_SAFE_INTEGER;
			const max = "max" in range ? range.max : Number.MAX_SAFE_INTEGER;
			if ( len >= min && len <= max ) {
				return true;
			}
		}
		return false;
	}

	return true;
};

ObjectTypeUtil.getEnumerationNumberFromName = function (enumeration, name) {
	for ( const [enumNumber, enumName] of Object.entries (enumeration) ) {
		if ( enumName === name ) {
			return Number (enumNumber);
		}
	}
	return null;
};

/*****************************************************************************
 ** PDU class definitions
 **/

var SimplePdu = function () {
};

SimplePdu.prototype.toBuffer = function (buffer) {
	buffer.startSequence (this.type);

	writeInt32 (buffer, ObjectType.Integer, this.id);
	writeInt32 (buffer, ObjectType.Integer,
			(this.type == PduType.GetBulkRequest)
			? (this.options.nonRepeaters || 0)
			: 0);
	writeInt32 (buffer, ObjectType.Integer,
			(this.type == PduType.GetBulkRequest)
			? (this.options.maxRepetitions || 0)
			: 0);

	writeVarbinds (buffer, this.varbinds);

	buffer.endSequence ();
};

SimplePdu.prototype.initializeFromVariables = function (id, varbinds, options) {
	this.id = id;
	this.varbinds = varbinds;
	this.options = options || {};
	this.contextName = (options && options.context) ? options.context : "";
};

SimplePdu.prototype.initializeFromBuffer = function (reader) {
	this.type = reader.peek ();
	reader.readSequence ();

	this.id = readInt32 (reader);
	this.nonRepeaters = readInt32 (reader);
	this.maxRepetitions = readInt32 (reader);

	this.varbinds = [];
	readVarbinds (reader, this.varbinds);
};

SimplePdu.prototype.getResponsePduForRequest = function () {
	var responsePdu = GetResponsePdu.createFromVariables(this.id, [], {});
	if ( this.contextEngineID ) {
		responsePdu.contextEngineID = this.contextEngineID;
		responsePdu.contextName = this.contextName;
	}
	return responsePdu;
};

SimplePdu.createFromVariables = function (pduClass, id, varbinds, options) {
	var pdu = new pduClass (id, varbinds, options);
	pdu.id = id;
	pdu.varbinds = varbinds;
	pdu.options = options || {};
	pdu.contextName = (options && options.context) ? options.context : "";
	return pdu;
};

var GetBulkRequestPdu = function () {
	this.type = PduType.GetBulkRequest;
	GetBulkRequestPdu.super_.apply (this, arguments);
};

util.inherits (GetBulkRequestPdu, SimplePdu);

GetBulkRequestPdu.createFromBuffer = function (reader) {
	var pdu = new GetBulkRequestPdu ();
	pdu.initializeFromBuffer (reader);
	return pdu;
};

var GetNextRequestPdu = function () {
	this.type = PduType.GetNextRequest;
	GetNextRequestPdu.super_.apply (this, arguments);
};

util.inherits (GetNextRequestPdu, SimplePdu);

GetNextRequestPdu.createFromBuffer = function (reader) {
	var pdu = new GetNextRequestPdu ();
	pdu.initializeFromBuffer (reader);
	return pdu;
};

var GetRequestPdu = function () {
	this.type = PduType.GetRequest;
	GetRequestPdu.super_.apply (this, arguments);
};

util.inherits (GetRequestPdu, SimplePdu);

GetRequestPdu.createFromBuffer = function (reader) {
	var pdu = new GetRequestPdu();
	pdu.initializeFromBuffer (reader);
	return pdu;
};

GetRequestPdu.createFromVariables = function (id, varbinds, options) {
	var pdu = new GetRequestPdu();
	pdu.initializeFromVariables (id, varbinds, options);
	return pdu;
};

var InformRequestPdu = function () {
	this.type = PduType.InformRequest;
	InformRequestPdu.super_.apply (this, arguments);
};

util.inherits (InformRequestPdu, SimplePdu);

InformRequestPdu.createFromBuffer = function (reader) {
	var pdu = new InformRequestPdu();
	pdu.initializeFromBuffer (reader);
	return pdu;
};

var SetRequestPdu = function () {
	this.type = PduType.SetRequest;
	SetRequestPdu.super_.apply (this, arguments);
};

util.inherits (SetRequestPdu, SimplePdu);

SetRequestPdu.createFromBuffer = function (reader) {
	var pdu = new SetRequestPdu ();
	pdu.initializeFromBuffer (reader);
	return pdu;
};

var TrapPdu = function () {
	this.type = PduType.Trap;
};

TrapPdu.prototype.toBuffer = function (buffer) {
	buffer.startSequence (this.type);

	buffer.writeOID (this.enterprise);
	buffer.writeBuffer (Buffer.from (this.agentAddr.split (".")),
			ObjectType.IpAddress);
	writeInt32 (buffer, ObjectType.Integer, this.generic);
	writeInt32 (buffer, ObjectType.Integer, this.specific);
	writeUint32 (buffer, ObjectType.TimeTicks,
			this.upTime || Math.floor (process.uptime () * 100));

	writeVarbinds (buffer, this.varbinds);

	buffer.endSequence ();
};

TrapPdu.createFromBuffer = function (reader) {
	var pdu = new TrapPdu();
	reader.readSequence ();

	pdu.enterprise = reader.readOID ();
	pdu.agentAddr = readIpAddress (reader);
	pdu.generic = readInt32 (reader);
	pdu.specific = readInt32 (reader);
	pdu.upTime = readUint32 (reader);

	pdu.varbinds = [];
	readVarbinds (reader, pdu.varbinds);

	return pdu;
};

TrapPdu.createFromVariables = function (typeOrOid, varbinds, options) {
	var pdu = new TrapPdu ();
	pdu.agentAddr = options.agentAddr || "127.0.0.1";
	pdu.upTime = options.upTime;

	if (typeof typeOrOid == "string") {
		pdu.generic = TrapType.EnterpriseSpecific;
		pdu.specific = parseInt (typeOrOid.match (/\.(\d+)$/)[1]);
		pdu.enterprise = typeOrOid.replace (/\.(\d+)$/, "");
	} else {
		pdu.generic = typeOrOid;
		pdu.specific = 0;
		pdu.enterprise = "1.3.6.1.4.1";
	}

	pdu.varbinds = varbinds;

	return pdu;
};

var TrapV2Pdu = function () {
	this.type = PduType.TrapV2;
	TrapV2Pdu.super_.apply (this, arguments);
};

util.inherits (TrapV2Pdu, SimplePdu);

TrapV2Pdu.createFromBuffer = function (reader) {
	var pdu = new TrapV2Pdu();
	pdu.initializeFromBuffer (reader);
	return pdu;
};

TrapV2Pdu.createFromVariables = function (id, varbinds, options) {
	var pdu = new TrapV2Pdu();
	pdu.initializeFromVariables (id, varbinds, options);
	return pdu;
};

var SimpleResponsePdu = function() {
};

SimpleResponsePdu.prototype.toBuffer = function (writer) {
	writer.startSequence (this.type);

	writeInt32 (writer, ObjectType.Integer, this.id);
	writeInt32 (writer, ObjectType.Integer, this.errorStatus || 0);
	writeInt32 (writer, ObjectType.Integer, this.errorIndex || 0);
	writeVarbinds (writer, this.varbinds);
	writer.endSequence ();

};

SimpleResponsePdu.prototype.initializeFromBuffer = function (reader) {
	reader.readSequence (this.type);

	this.id = readInt32 (reader);
	this.errorStatus = readInt32 (reader);
	this.errorIndex = readInt32 (reader);

	this.varbinds = [];
	readVarbinds (reader, this.varbinds);
};

SimpleResponsePdu.prototype.initializeFromVariables = function (id, varbinds, options) {
	this.id = id;
	this.varbinds = varbinds;
	this.options = options || {};
};

var GetResponsePdu = function () {
	this.type = PduType.GetResponse;
	GetResponsePdu.super_.apply (this, arguments);
};

util.inherits (GetResponsePdu, SimpleResponsePdu);

GetResponsePdu.createFromBuffer = function (reader) {
	var pdu = new GetResponsePdu ();
	pdu.initializeFromBuffer (reader);
	return pdu;
};

GetResponsePdu.createFromVariables = function (id, varbinds, options) {
	var pdu = new GetResponsePdu();
	pdu.initializeFromVariables (id, varbinds, options);
	return pdu;
};

var ReportPdu = function () {
	this.type = PduType.Report;
	ReportPdu.super_.apply (this, arguments);
};

util.inherits (ReportPdu, SimpleResponsePdu);

ReportPdu.createFromBuffer = function (reader) {
	var pdu = new ReportPdu ();
	pdu.initializeFromBuffer (reader);
	return pdu;
};

ReportPdu.createFromVariables = function (id, varbinds, options) {
	var pdu = new ReportPdu();
	pdu.initializeFromVariables (id, varbinds, options);
	return pdu;
};

var readPdu = function (reader, scoped) {
	var pdu;
	var contextEngineID;
	var contextName;
	if ( scoped ) {
		reader = new ber.Reader (reader.readString (ber.Sequence | ber.Constructor, true));
		contextEngineID = reader.readString (ber.OctetString, true);
		contextName = reader.readString ();
	}
	var type = reader.peek ();

	if (type == PduType.GetResponse) {
		pdu = GetResponsePdu.createFromBuffer (reader);
	} else if (type == PduType.Report ) {
		pdu = ReportPdu.createFromBuffer (reader);
	} else if (type == PduType.Trap ) {
		pdu = TrapPdu.createFromBuffer (reader);
	} else if (type == PduType.TrapV2 ) {
		pdu = TrapV2Pdu.createFromBuffer (reader);
	} else if (type == PduType.InformRequest ) {
		pdu = InformRequestPdu.createFromBuffer (reader);
	} else if (type == PduType.GetRequest ) {
		pdu = GetRequestPdu.createFromBuffer (reader);
	} else if (type == PduType.SetRequest ) {
		pdu = SetRequestPdu.createFromBuffer (reader);
	} else if (type == PduType.GetNextRequest ) {
		pdu = GetNextRequestPdu.createFromBuffer (reader);
	} else if (type == PduType.GetBulkRequest ) {
		pdu = GetBulkRequestPdu.createFromBuffer (reader);
	} else {
		throw new ResponseInvalidError ("Unknown PDU type '" + type
				+ "' in response", ResponseInvalidCode.EUnknownPduType);
	}
	if ( scoped ) {
		pdu.contextEngineID = contextEngineID;
		pdu.contextName = contextName;
	}
	pdu.scoped = scoped;
	return pdu;
};

var createDiscoveryPdu = function (context) {
	return GetRequestPdu.createFromVariables(_generateId(), [], {context: context});
};

var Authentication = {};

Authentication.HMAC_BUFFER_SIZE = 1024*1024;

Authentication.algorithms = {};

Authentication.algorithms[AuthProtocols.md5] = {
	KEY_LENGTH: 16,
	AUTHENTICATION_CODE_LENGTH: 12,
	CRYPTO_ALGORITHM: 'md5'
};

Authentication.algorithms[AuthProtocols.sha] = {
	KEY_LENGTH: 20,
	AUTHENTICATION_CODE_LENGTH: 12,
	CRYPTO_ALGORITHM: 'sha1'
};

Authentication.algorithms[AuthProtocols.sha224] = {
	KEY_LENGTH: 28,
	AUTHENTICATION_CODE_LENGTH: 16,
	CRYPTO_ALGORITHM: 'sha224'
};

Authentication.algorithms[AuthProtocols.sha256] = {
	KEY_LENGTH: 32,
	AUTHENTICATION_CODE_LENGTH: 24,
	CRYPTO_ALGORITHM: 'sha256'
};

Authentication.algorithms[AuthProtocols.sha384] = {
	KEY_LENGTH: 48,
	AUTHENTICATION_CODE_LENGTH: 32,
	CRYPTO_ALGORITHM: 'sha384'
};

Authentication.algorithms[AuthProtocols.sha512] = {
	KEY_LENGTH: 64,
	AUTHENTICATION_CODE_LENGTH: 48,
	CRYPTO_ALGORITHM: 'sha512'
};

Authentication.authToKeyCache = {};

Authentication.computeCacheKey = function (authProtocol, authPasswordString, engineID) {
	var engineIDString = engineID.toString('base64');
	return authProtocol + authPasswordString + engineIDString;
};

// Adapted from RFC3414 Appendix A.2.1. Password to Key Sample Code for MD5
Authentication.passwordToKey = function (authProtocol, authPasswordString, engineID) {
	var hashAlgorithm;
	var firstDigest;
	var finalDigest;
	var buf;
	var cryptoAlgorithm = Authentication.algorithms[authProtocol].CRYPTO_ALGORITHM;

	var cacheKey = Authentication.computeCacheKey(authProtocol, authPasswordString, engineID);
	if (Authentication.authToKeyCache[cacheKey] !== undefined) {
		return Authentication.authToKeyCache[cacheKey];
	}

	buf = Buffer.alloc (Authentication.HMAC_BUFFER_SIZE, authPasswordString);

	hashAlgorithm = crypto.createHash(cryptoAlgorithm);
	hashAlgorithm.update(buf);
	firstDigest = hashAlgorithm.digest();
	// debug ("First digest:  " + firstDigest.toString('hex'));

	hashAlgorithm = crypto.createHash(cryptoAlgorithm);
	hashAlgorithm.update(firstDigest);
	hashAlgorithm.update(engineID);
	hashAlgorithm.update(firstDigest);
	finalDigest = hashAlgorithm.digest();
	// debug ("Localized key: " + finalDigest.toString('hex'));

	Authentication.authToKeyCache[cacheKey] = finalDigest;
	return finalDigest;
};

Authentication.getParametersLength = function (authProtocol) {
	return Authentication.algorithms[authProtocol].AUTHENTICATION_CODE_LENGTH;
};

Authentication.writeParameters = function (messageBuffer, authProtocol, authPassword, engineID, digestInMessage) {
	var digestToAdd;

	digestToAdd = Authentication.calculateDigest (messageBuffer, authProtocol, authPassword, engineID);
	digestToAdd.copy (digestInMessage);
	// debug ("Added Auth Parameters: " + digestToAdd.toString('hex'));
};

Authentication.isAuthentic = function (messageBuffer, authProtocol, authPassword, engineID, digestInMessage) {
	var savedDigest;
	var calculatedDigest;

	if (digestInMessage.length !== Authentication.algorithms[authProtocol].AUTHENTICATION_CODE_LENGTH)
		return false;

	// save original authenticationParameters field in message
	savedDigest = Buffer.from (digestInMessage);

	// clear the authenticationParameters field in message
	digestInMessage.fill (0);

	calculatedDigest = Authentication.calculateDigest (messageBuffer, authProtocol, authPassword, engineID);

	// replace previously cleared authenticationParameters field in message
	savedDigest.copy (digestInMessage);

	// debug ("Digest in message: " + digestInMessage.toString('hex'));
	// debug ("Calculated digest: " + calculatedDigest.toString('hex'));
	return calculatedDigest.equals (digestInMessage);
};

Authentication.calculateDigest = function (messageBuffer, authProtocol, authPassword, engineID) {
	var authKey = Authentication.passwordToKey (authProtocol, authPassword, engineID);

	var cryptoAlgorithm = Authentication.algorithms[authProtocol].CRYPTO_ALGORITHM;
	var hmacAlgorithm = crypto.createHmac (cryptoAlgorithm, authKey);
	hmacAlgorithm.update (messageBuffer);
	var digest = hmacAlgorithm.digest ();
	return digest.subarray (0, Authentication.algorithms[authProtocol].AUTHENTICATION_CODE_LENGTH);
};

var Encryption = {};

Encryption.encryptPdu = function (privProtocol, scopedPdu, privPassword, authProtocol, engine) {
	var encryptFunction = Encryption.algorithms[privProtocol].encryptPdu;
	return encryptFunction (scopedPdu, privProtocol, privPassword, authProtocol, engine);
};

Encryption.decryptPdu = function (privProtocol, encryptedPdu, privParameters, privPassword, authProtocol, engine) {
	var decryptFunction = Encryption.algorithms[privProtocol].decryptPdu;
	return decryptFunction (encryptedPdu, privProtocol, privParameters, privPassword, authProtocol, engine);
};

Encryption.debugEncrypt = function (encryptionKey, iv, plainPdu, encryptedPdu) {
	debug ("Key: " + encryptionKey.toString ('hex'));
	debug ("IV:  " + iv.toString ('hex'));
	debug ("Plain:     " + plainPdu.toString ('hex'));
	debug ("Encrypted: " + encryptedPdu.toString ('hex'));
};

Encryption.debugDecrypt = function (decryptionKey, iv, encryptedPdu, plainPdu) {
	debug ("Key: " + decryptionKey.toString ('hex'));
	debug ("IV:  " + iv.toString ('hex'));
	debug ("Encrypted: " + encryptedPdu.toString ('hex'));
	debug ("Plain:     " + plainPdu.toString ('hex'));
};

Encryption.generateLocalizedKey = function (algorithm, authProtocol, privPassword, engineID) {
	var privLocalizedKey;
	var encryptionKey;

	privLocalizedKey = Authentication.passwordToKey (authProtocol, privPassword, engineID);
	encryptionKey = Buffer.alloc (algorithm.KEY_LENGTH);
	privLocalizedKey.copy (encryptionKey, 0, 0, algorithm.KEY_LENGTH);

	return encryptionKey;
};

Encryption.generateLocalizedKeyBlumenthal = function (algorithm, authProtocol, privPassword, engineID) {
	let authKeyLength;
	let privLocalizedKey;
	let encryptionKey;
	let rounds;
	let hashInput;
	let nextHash;
	let hashAlgorithm;

	authKeyLength = Authentication.algorithms[authProtocol].KEY_LENGTH;
	rounds = Math.ceil (algorithm.KEY_LENGTH / authKeyLength );
	encryptionKey = Buffer.alloc (algorithm.KEY_LENGTH);
	privLocalizedKey = Authentication.passwordToKey (authProtocol, privPassword, engineID);
	nextHash = privLocalizedKey;

	for ( let round = 0 ; round < rounds ; round++ ) {
		nextHash.copy (encryptionKey, round * authKeyLength, 0, authKeyLength);
		if ( round < rounds - 1 ) {
			hashAlgorithm = crypto.createHash (Authentication.algorithms[authProtocol].CRYPTO_ALGORITHM);
			hashInput = Buffer.alloc ( (round + 1) * authKeyLength);
			encryptionKey.copy (hashInput, round * authKeyLength, 0, (round + 1) * authKeyLength);
			hashAlgorithm.update (hashInput);
			nextHash = hashAlgorithm.digest ();
		}
	}

	return encryptionKey;
};

Encryption.generateLocalizedKeyReeder = function (algorithm, authProtocol, privPassword, engineID) {
	let authKeyLength;
	let privLocalizedKey;
	let encryptionKey;
	let rounds;
	let nextPasswordInput;

	authKeyLength = Authentication.algorithms[authProtocol].KEY_LENGTH;
	rounds = Math.ceil (algorithm.KEY_LENGTH / authKeyLength );
	encryptionKey = Buffer.alloc (algorithm.KEY_LENGTH);
	nextPasswordInput = privPassword;

	for ( let round = 0 ; round < rounds ; round++ ) {
		privLocalizedKey = Authentication.passwordToKey (authProtocol, nextPasswordInput, engineID);
		privLocalizedKey.copy (encryptionKey, round * authKeyLength, 0, authKeyLength);
		nextPasswordInput = privLocalizedKey;
	}

	return encryptionKey;
};

Encryption.encryptPduDes = function (scopedPdu, privProtocol, privPassword, authProtocol, engine) {
	var des = Encryption.algorithms[PrivProtocols.des];
	var privLocalizedKey;
	var encryptionKey;
	var preIv;
	var salt;
	var iv;
	var i;
	var paddedScopedPduLength;
	var paddedScopedPdu;
	var encryptedPdu;

	encryptionKey = Encryption.generateLocalizedKey (des, authProtocol, privPassword, engine.engineID);
	privLocalizedKey = Authentication.passwordToKey (authProtocol, privPassword, engine.engineID);
	encryptionKey = Buffer.alloc (des.KEY_LENGTH);
	privLocalizedKey.copy (encryptionKey, 0, 0, des.KEY_LENGTH);
	preIv = Buffer.alloc (des.BLOCK_LENGTH);
	privLocalizedKey.copy (preIv, 0, des.KEY_LENGTH, des.KEY_LENGTH + des.BLOCK_LENGTH);

	salt = Buffer.alloc (des.BLOCK_LENGTH);
	// set local SNMP engine boots part of salt to 1, as we have no persistent engine state
	salt.fill ('00000001', 0, 4, 'hex');
	// set local integer part of salt to random
	salt.fill (crypto.randomBytes (4), 4, 8);
	iv = Buffer.alloc (des.BLOCK_LENGTH);
	for (i = 0; i < iv.length; i++) {
		iv[i] = preIv[i] ^ salt[i];
	}


	if (scopedPdu.length % des.BLOCK_LENGTH == 0) {
		paddedScopedPdu = scopedPdu;
	} else {
		paddedScopedPduLength = des.BLOCK_LENGTH * (Math.floor (scopedPdu.length / des.BLOCK_LENGTH) + 1);
		paddedScopedPdu = Buffer.alloc (paddedScopedPduLength);
		scopedPdu.copy (paddedScopedPdu, 0, 0, scopedPdu.length);
	}

	if (DES_IMPLEMENTATION === 'native') {
		// TODO: Implement native encryption
	} else {
		const cipher = crypto.createCipheriv (des.CRYPTO_ALGORITHM, encryptionKey, iv);
		encryptedPdu = cipher.update (paddedScopedPdu);
		encryptedPdu = Buffer.concat ([encryptedPdu, cipher.final()]);
	}
	// Encryption.debugEncrypt (encryptionKey, iv, paddedScopedPdu, encryptedPdu);

	return {
		encryptedPdu: encryptedPdu,
		msgPrivacyParameters: salt
	};
};

Encryption.decryptPduDes = function (encryptedPdu, privProtocol, privParameters, privPassword, authProtocol, engine) {
	var des = Encryption.algorithms[PrivProtocols.des];
	var privLocalizedKey;
	var decryptionKey;
	var preIv;
	var salt;
	var iv;
	var i;
	var decryptedPdu;

	privLocalizedKey = Authentication.passwordToKey (authProtocol, privPassword, engine.engineID);
	decryptionKey = Buffer.alloc (des.KEY_LENGTH);
	privLocalizedKey.copy (decryptionKey, 0, 0, des.KEY_LENGTH);
	preIv = Buffer.alloc (des.BLOCK_LENGTH);
	privLocalizedKey.copy (preIv, 0, des.KEY_LENGTH, des.KEY_LENGTH + des.BLOCK_LENGTH);

	salt = privParameters;
	iv = Buffer.alloc (des.BLOCK_LENGTH);
	for (i = 0; i < iv.length; i++) {
		iv[i] = preIv[i] ^ salt[i];
	}

	if (DES_IMPLEMENTATION === 'native') {
		// TODO: Implement native decryption
	} else {
		const decipher = crypto.createDecipheriv (des.CRYPTO_ALGORITHM, decryptionKey, iv);
		decipher.setAutoPadding (false);
		decryptedPdu = decipher.update (encryptedPdu);
		decryptedPdu = Buffer.concat ([decryptedPdu, decipher.final()]);
	}
	// Encryption.debugDecrypt (decryptionKey, iv, encryptedPdu, decryptedPdu);

	return decryptedPdu;
};

Encryption.generateIvAes = function (aes, engineBoots, engineTime, salt) {
	var iv;
	var engineBootsBuffer;
	var engineTimeBuffer;

	// iv = engineBoots(4) | engineTime(4) | salt(8)
	iv = Buffer.alloc (aes.BLOCK_LENGTH);
	engineBootsBuffer = Buffer.alloc (4);
	engineBootsBuffer.writeUInt32BE (engineBoots);
	engineTimeBuffer = Buffer.alloc (4);
	engineTimeBuffer.writeUInt32BE (engineTime);
	engineBootsBuffer.copy (iv, 0, 0, 4);
	engineTimeBuffer.copy (iv, 4, 0, 4);
	salt.copy (iv, 8, 0, 8);

	return iv;
};

Encryption.encryptPduAes = function (scopedPdu, privProtocol, privPassword, authProtocol, engine) {
	var aes = Encryption.algorithms[privProtocol];
	var localizationAlgorithm = aes.localizationAlgorithm;
	var encryptionKey;
	var salt;
	var iv;
	var cipher;
	var encryptedPdu;

	encryptionKey = localizationAlgorithm (aes, authProtocol, privPassword, engine.engineID);
	salt = Buffer.alloc (8).fill (crypto.randomBytes (8), 0, 8);
	iv = Encryption.generateIvAes (aes, engine.engineBoots, engine.engineTime, salt);
	cipher = crypto.createCipheriv (aes.CRYPTO_ALGORITHM, encryptionKey, iv);
	encryptedPdu = cipher.update (scopedPdu);
	encryptedPdu = Buffer.concat ([encryptedPdu, cipher.final()]);
	// Encryption.debugEncrypt (encryptionKey, iv, scopedPdu, encryptedPdu);

	return {
		encryptedPdu: encryptedPdu,
		msgPrivacyParameters: salt
	};
};

Encryption.decryptPduAes = function (encryptedPdu, privProtocol, privParameters, privPassword, authProtocol, engine) {
	var aes = Encryption.algorithms[privProtocol];
	var localizationAlgorithm = aes.localizationAlgorithm;
	var decryptionKey;
	var iv;
	var decipher;
	var decryptedPdu;

	decryptionKey = localizationAlgorithm (aes, authProtocol, privPassword, engine.engineID);
	iv = Encryption.generateIvAes (aes, engine.engineBoots, engine.engineTime, privParameters);
	decipher = crypto.createDecipheriv (aes.CRYPTO_ALGORITHM, decryptionKey, iv);
	decryptedPdu = decipher.update (encryptedPdu);
	decryptedPdu = Buffer.concat ([decryptedPdu, decipher.final()]);
	// Encryption.debugDecrypt (decryptionKey, iv, encryptedPdu, decryptedPdu);

	return decryptedPdu;
};

Encryption.algorithms = {};

Encryption.algorithms[PrivProtocols.des] = {
	CRYPTO_ALGORITHM: 'des-cbc',
	KEY_LENGTH: 8,
	BLOCK_LENGTH: 8,
	encryptPdu: Encryption.encryptPduDes,
	decryptPdu: Encryption.decryptPduDes,
	localizationAlgorithm: Encryption.generateLocalizedKey
};

Encryption.algorithms[PrivProtocols.aes] = {
	CRYPTO_ALGORITHM: 'aes-128-cfb',
	KEY_LENGTH: 16,
	BLOCK_LENGTH: 16,
	encryptPdu: Encryption.encryptPduAes,
	decryptPdu: Encryption.decryptPduAes,
	localizationAlgorithm: Encryption.generateLocalizedKey
};

Encryption.algorithms[PrivProtocols.aes256b] = {
	CRYPTO_ALGORITHM: 'aes-256-cfb',
	KEY_LENGTH: 32,
	BLOCK_LENGTH: 16,
	encryptPdu: Encryption.encryptPduAes,
	decryptPdu: Encryption.decryptPduAes,
	localizationAlgorithm: Encryption.generateLocalizedKeyBlumenthal
};

Encryption.algorithms[PrivProtocols.aes256r] = {
	CRYPTO_ALGORITHM: 'aes-256-cfb',
	KEY_LENGTH: 32,
	BLOCK_LENGTH: 16,
	encryptPdu: Encryption.encryptPduAes,
	decryptPdu: Encryption.decryptPduAes,
	localizationAlgorithm: Encryption.generateLocalizedKeyReeder
};

/*****************************************************************************
 ** Message class definition
 **/

var Message = function () {
};

Message.prototype.getReqId = function () {
	return this.version == Version3 ? this.msgGlobalData.msgID : this.pdu.id;
};

Message.prototype.toBuffer = function () {
	if ( this.version == Version3 ) {
		return this.toBufferV3();
	} else {
		return this.toBufferCommunity();
	}
};

Message.prototype.toBufferCommunity = function () {
	if (this.buffer)
		return this.buffer;

	var writer = new ber.Writer ();

	writer.startSequence ();

	writeInt32 (writer, ObjectType.Integer, this.version);
	writer.writeString (this.community);

	this.pdu.toBuffer (writer);

	writer.endSequence ();

	this.buffer = writer.buffer;

	return this.buffer;
};

Message.prototype.toBufferV3 = function () {
	var encryptionResult;

	if (this.buffer)
		return this.buffer;

	// ScopedPDU
	var scopedPduWriter = new ber.Writer ();
	scopedPduWriter.startSequence ();
	var contextEngineID = this.pdu.contextEngineID ? this.pdu.contextEngineID : this.msgSecurityParameters.msgAuthoritativeEngineID;
	if ( contextEngineID.length == 0 ) {
		scopedPduWriter.writeString ("");
	} else {
		scopedPduWriter.writeBuffer (contextEngineID, ber.OctetString);
	}
	scopedPduWriter.writeString (this.pdu.contextName);
	this.pdu.toBuffer (scopedPduWriter);
	scopedPduWriter.endSequence ();

	if ( this.hasPrivacy() ) {
		var authoritativeEngine = {
			engineID: this.msgSecurityParameters.msgAuthoritativeEngineID,
			engineBoots: this.msgSecurityParameters.msgAuthoritativeEngineBoots,
			engineTime: this.msgSecurityParameters.msgAuthoritativeEngineTime,
		};
		encryptionResult = Encryption.encryptPdu (this.user.privProtocol, scopedPduWriter.buffer,
				this.user.privKey, this.user.authProtocol, authoritativeEngine);
	}

	var writer = new ber.Writer ();

	writer.startSequence ();

	writeInt32 (writer, ObjectType.Integer, this.version);

	// HeaderData
	writer.startSequence ();
	writeInt32 (writer, ObjectType.Integer, this.msgGlobalData.msgID);
	writeInt32 (writer, ObjectType.Integer, this.msgGlobalData.msgMaxSize);
	writer.writeByte (ber.OctetString);
	writer.writeByte (1);
	writer.writeByte (this.msgGlobalData.msgFlags);
	writeInt32 (writer, ObjectType.Integer, this.msgGlobalData.msgSecurityModel);
	writer.endSequence ();

	// msgSecurityParameters
	writer.startSequence (ber.OctetString);
	writer.startSequence ();
	//writer.writeString (this.msgSecurityParameters.msgAuthoritativeEngineID);
	// writing a zero-length buffer fails - should fix asn1-ber for this condition
	if ( this.msgSecurityParameters.msgAuthoritativeEngineID.length == 0 ) {
		writer.writeString ("");
	} else {
		writer.writeBuffer (this.msgSecurityParameters.msgAuthoritativeEngineID, ber.OctetString);
	}
	writeInt32 (writer, ObjectType.Integer, this.msgSecurityParameters.msgAuthoritativeEngineBoots);
	writeInt32 (writer, ObjectType.Integer, this.msgSecurityParameters.msgAuthoritativeEngineTime);
	writer.writeString (this.msgSecurityParameters.msgUserName);

	var msgAuthenticationParameters = '';
	if ( this.hasAuthentication() ) {
		var authParametersLength = Authentication.getParametersLength (this.user.authProtocol);
		msgAuthenticationParameters = Buffer.alloc (authParametersLength);
		writer.writeBuffer (msgAuthenticationParameters, ber.OctetString);
	} else {
		writer.writeString ("");
	}
	var msgAuthenticationParametersOffset = writer._offset - msgAuthenticationParameters.length;

	if ( this.hasPrivacy() ) {
		writer.writeBuffer (encryptionResult.msgPrivacyParameters, ber.OctetString);
	} else {
		writer.writeString ("");
	}
	msgAuthenticationParametersOffset -= writer._offset;
	writer.endSequence ();
	writer.endSequence ();
	msgAuthenticationParametersOffset += writer._offset;

	if ( this.hasPrivacy() ) {
		writer.writeBuffer (encryptionResult.encryptedPdu, ber.OctetString);
	} else {
		writer.writeBuffer (scopedPduWriter.buffer);
	}

	msgAuthenticationParametersOffset -= writer._offset;
	writer.endSequence ();
	msgAuthenticationParametersOffset += writer._offset;

	this.buffer = writer.buffer;

	if ( this.hasAuthentication() ) {
		msgAuthenticationParameters = this.buffer.subarray (msgAuthenticationParametersOffset,
			msgAuthenticationParametersOffset + msgAuthenticationParameters.length);
		Authentication.writeParameters (this.buffer, this.user.authProtocol, this.user.authKey,
			this.msgSecurityParameters.msgAuthoritativeEngineID, msgAuthenticationParameters);
	}

	return this.buffer;
};

Message.prototype.processIncomingSecurity = function (user, responseCb) {
	if ( this.hasPrivacy() ) {
		if ( ! this.decryptPdu(user, responseCb) ) {
			return false;
		}
	}

	if ( this.hasAuthentication() && ! this.isAuthenticationDisabled() ) {
		return this.checkAuthentication(user, responseCb);
	} else {
		return true;
	}
};

Message.prototype.decryptPdu = function (user, responseCb) {
	var decryptedPdu;
	var decryptedPduReader;
	try {
		var authoratitiveEngine = {
			engineID: this.msgSecurityParameters.msgAuthoritativeEngineID,
			engineBoots: this.msgSecurityParameters.msgAuthoritativeEngineBoots,
			engineTime: this.msgSecurityParameters.msgAuthoritativeEngineTime
		};
		decryptedPdu = Encryption.decryptPdu(user.privProtocol, this.encryptedPdu,
				this.msgSecurityParameters.msgPrivacyParameters, user.privKey, user.authProtocol,
				authoratitiveEngine);
		decryptedPduReader = new ber.Reader (decryptedPdu);
		this.pdu = readPdu(decryptedPduReader, true);
		return true;
	} catch (error) {
		responseCb (new ResponseInvalidError ("Failed to decrypt PDU: " + error,
				ResponseInvalidCode.ECouldNotDecrypt));
		return false;
	}

};

Message.prototype.checkAuthentication = function (user, responseCb) {
	if ( Authentication.isAuthentic(this.buffer, user.authProtocol, user.authKey,
			this.msgSecurityParameters.msgAuthoritativeEngineID, this.msgSecurityParameters.msgAuthenticationParameters) ) {
		return true;
	} else {
		responseCb (new ResponseInvalidError ("Authentication digest "
				+ this.msgSecurityParameters.msgAuthenticationParameters.toString ('hex')
				+ " received in message does not match digest "
				+ Authentication.calculateDigest (this.buffer, user.authProtocol, user.authKey,
					this.msgSecurityParameters.msgAuthoritativeEngineID).toString ('hex')
				+ " calculated for message", ResponseInvalidCode.EAuthFailure, { user }));
		return false;
	}

};

Message.prototype.setMsgFlags = function (bitPosition, flag) {
	if ( this.msgGlobalData && this.msgGlobalData !== undefined && this.msgGlobalData !== null ) {
		if ( flag ) {
			this.msgGlobalData.msgFlags = this.msgGlobalData.msgFlags | ( 2 ** bitPosition );
		} else {
			this.msgGlobalData.msgFlags = this.msgGlobalData.msgFlags & ( 255 - 2 ** bitPosition );
		}
	}
};

Message.prototype.hasAuthentication = function () {
	return this.msgGlobalData && this.msgGlobalData.msgFlags && this.msgGlobalData.msgFlags & 1;
};

Message.prototype.setAuthentication = function (flag) {
	this.setMsgFlags (0, flag);
};

Message.prototype.hasPrivacy = function () {
	return this.msgGlobalData && this.msgGlobalData.msgFlags && this.msgGlobalData.msgFlags & 2;
};

Message.prototype.setPrivacy = function (flag) {
	this.setMsgFlags (1, flag);
};

Message.prototype.isReportable = function () {
	return this.msgGlobalData && this.msgGlobalData.msgFlags && this.msgGlobalData.msgFlags & 4;
};

Message.prototype.setReportable = function (flag) {
	this.setMsgFlags (2, flag);
};

Message.prototype.isAuthenticationDisabled = function () {
	return this.disableAuthentication;
};

Message.prototype.hasAuthoritativeEngineID = function () {
	return this.msgSecurityParameters && this.msgSecurityParameters.msgAuthoritativeEngineID &&
		this.msgSecurityParameters.msgAuthoritativeEngineID != "";
};

Message.prototype.createReportResponseMessage = function (engine, context) {
	var user = {
		name: "",
		level: SecurityLevel.noAuthNoPriv
	};
	var responseSecurityParameters = {
		msgAuthoritativeEngineID: engine.engineID,
		msgAuthoritativeEngineBoots: engine.engineBoots,
		msgAuthoritativeEngineTime: engine.engineTime,
		msgUserName: user.name,
		msgAuthenticationParameters: "",
		msgPrivacyParameters: ""
	};
	var reportPdu = ReportPdu.createFromVariables (this.pdu.id, [], {});
	reportPdu.contextName = context;
	var responseMessage = Message.createRequestV3 (user, responseSecurityParameters, reportPdu);
	responseMessage.msgGlobalData.msgID = this.msgGlobalData.msgID;
	return responseMessage;
};

Message.prototype.createResponseForRequest = function (responsePdu) {
	if ( this.version == Version3 ) {
		return this.createV3ResponseFromRequest(responsePdu);
	} else {
		return this.createCommunityResponseFromRequest(responsePdu);
	}
};

Message.prototype.createCommunityResponseFromRequest = function (responsePdu) {
	return Message.createCommunity(this.version, this.community, responsePdu);
};

Message.prototype.createV3ResponseFromRequest = function (responsePdu) {
	var responseUser = {
		name: this.user.name,
		level: this.user.level,
		authProtocol: this.user.authProtocol,
		authKey: this.user.authKey,
		privProtocol: this.user.privProtocol,
		privKey: this.user.privKey
	};
	var responseSecurityParameters = {
		msgAuthoritativeEngineID: this.msgSecurityParameters.msgAuthoritativeEngineID,
		msgAuthoritativeEngineBoots: this.msgSecurityParameters.msgAuthoritativeEngineBoots,
		msgAuthoritativeEngineTime: this.msgSecurityParameters.msgAuthoritativeEngineTime,
		msgUserName: this.msgSecurityParameters.msgUserName,
		msgAuthenticationParameters: "",
		msgPrivacyParameters: ""
	};
	var responseGlobalData = {
		msgID: this.msgGlobalData.msgID,
		msgMaxSize: 65507,
		msgFlags: this.msgGlobalData.msgFlags & (255 - 4),
		msgSecurityModel: 3
	};
	return Message.createV3 (responseUser, responseGlobalData, responseSecurityParameters, responsePdu);
};

Message.createCommunity = function (version, community, pdu) {
	var message = new Message ();

	message.version = version;
	message.community = community;
	message.pdu = pdu;

	return message;
};

Message.createRequestV3 = function (user, msgSecurityParameters, pdu) {
	var authFlag = user.level == SecurityLevel.authNoPriv || user.level == SecurityLevel.authPriv ? 1 : 0;
	var privFlag = user.level == SecurityLevel.authPriv ? 1 : 0;
	var reportableFlag = ( pdu.type == PduType.GetResponse || pdu.type == PduType.TrapV2 ) ? 0 : 1;
	var msgGlobalData = {
		msgID: _generateId(), // random ID
		msgMaxSize: 65507,
		msgFlags: reportableFlag * 4 | privFlag * 2 | authFlag * 1,
		msgSecurityModel: 3
	};
	return Message.createV3 (user, msgGlobalData, msgSecurityParameters, pdu);
};

Message.createV3 = function (user, msgGlobalData, msgSecurityParameters, pdu) {
	var message = new Message ();

	message.version = 3;
	message.user = user;
	message.msgGlobalData = msgGlobalData;
	message.msgSecurityParameters = {
		msgAuthoritativeEngineID: msgSecurityParameters.msgAuthoritativeEngineID || Buffer.from(""),
		msgAuthoritativeEngineBoots: msgSecurityParameters.msgAuthoritativeEngineBoots || 0,
		msgAuthoritativeEngineTime: msgSecurityParameters.msgAuthoritativeEngineTime || 0,
		msgUserName: user.name || "",
		msgAuthenticationParameters: "",
		msgPrivacyParameters: ""
	};
	message.pdu = pdu;

	return message;
};

Message.createDiscoveryV3 = function (pdu) {
	var msgSecurityParameters = {
		msgAuthoritativeEngineID: Buffer.from(""),
		msgAuthoritativeEngineBoots: 0,
		msgAuthoritativeEngineTime: 0
	};
	var emptyUser = {
		name: "",
		level: SecurityLevel.noAuthNoPriv
	};
	return Message.createRequestV3 (emptyUser, msgSecurityParameters, pdu);
};

Message.createFromBuffer = function (buffer, user) {
	var reader = new ber.Reader (buffer);
	var message = new Message();

	reader.readSequence ();

	message.version = readInt32 (reader);

	if (message.version != 3) {
		message.community = reader.readString ();
		message.pdu = readPdu(reader, false);
	} else {
		// HeaderData
		message.msgGlobalData = {};
		reader.readSequence ();
		message.msgGlobalData.msgID = readInt32 (reader);
		message.msgGlobalData.msgMaxSize = readInt32 (reader);
		message.msgGlobalData.msgFlags = reader.readString (ber.OctetString, true)[0];
		message.msgGlobalData.msgSecurityModel = readInt32 (reader);

		// msgSecurityParameters
		message.msgSecurityParameters = {};
		var msgSecurityParametersReader = new ber.Reader (reader.readString (ber.OctetString, true));
		msgSecurityParametersReader.readSequence ();
		message.msgSecurityParameters.msgAuthoritativeEngineID = msgSecurityParametersReader.readString (ber.OctetString, true);
		message.msgSecurityParameters.msgAuthoritativeEngineBoots = readInt32 (msgSecurityParametersReader);
		message.msgSecurityParameters.msgAuthoritativeEngineTime = readInt32 (msgSecurityParametersReader);
		message.msgSecurityParameters.msgUserName = msgSecurityParametersReader.readString ();
		message.msgSecurityParameters.msgAuthenticationParameters = msgSecurityParametersReader.readString (ber.OctetString, true);
		message.msgSecurityParameters.msgPrivacyParameters = Buffer.from(msgSecurityParametersReader.readString (ber.OctetString, true));

		if ( message.hasPrivacy() ) {
			message.encryptedPdu = reader.readString (ber.OctetString, true);
			message.pdu = null;
		} else {
			message.pdu = readPdu(reader, true);
		}
	}

	message.buffer = buffer;

	return message;
};


var Req = function (session, message, feedCb, responseCb, options) {

	this.message = message;
	this.responseCb = responseCb;
	this.retries = session.retries;
	this.timeout = session.timeout;
	// Add timeout backoff
	this.backoff = session.backoff;
	this.onResponse = session.onSimpleGetResponse;
	this.feedCb = feedCb;
	this.port = (options && options.port) ? options.port : session.port;
	this.context = session.context;
};

Req.prototype.getId = function() {
	return this.message.getReqId ();
};


/*****************************************************************************
 ** Session class definition
 **/

var Session = function (target, authenticator, options) {
	this.target = target || "127.0.0.1";

	options = options || {};
	this.version = options.version
			? options.version
			: Version1;

	if ( this.version == Version3 ) {
		this.user = authenticator;
	} else {
		this.community = authenticator || "public";
	}

	this.transport = options.transport
			? options.transport
			: "udp4";
	this.port = options.port
			? options.port
			: 161;
	this.trapPort = options.trapPort
			? options.trapPort
			: 162;

	this.retries = (options.retries || options.retries == 0)
			? options.retries
			: 1;
	this.timeout = options.timeout
			? options.timeout
			: 5000;

	this.backoff = options.backoff >= 1.0
			? options.backoff
			: 1.0;

	this.sourceAddress = options.sourceAddress
			? options.sourceAddress
			: undefined;
	this.sourcePort = options.sourcePort
			? parseInt(options.sourcePort)
			: undefined;

	this.idBitsSize = options.idBitsSize
			? parseInt(options.idBitsSize)
			: 32;

	this.context = options.context
			? options.context
			: "";

	this.backwardsGetNexts = (typeof options.backwardsGetNexts !== 'undefined')
			? options.backwardsGetNexts
			: true;

	this.reportOidMismatchErrors = (typeof options.reportOidMismatchErrors !== 'undefined')
			? options.reportOidMismatchErrors
			: false;

	DEBUG |= options.debug;

	this.engine = new Engine ({
		engineID: options.engineID
	});
	this.reqs = {};
	this.reqCount = 0;

	const dgramMod = options.dgramModule || dgram;
	this.dgram = dgramMod.createSocket (this.transport);
	this.dgram.unref();

	var me = this;
	this.dgram.on ("message", me.onMsg.bind (me));
	this.dgram.on ("close", me.onClose.bind (me));
	this.dgram.on ("error", me.onError.bind (me));

	if (this.sourceAddress || this.sourcePort)
		this.dgram.bind (this.sourcePort, this.sourceAddress);
};

util.inherits (Session, events.EventEmitter);

Session.prototype.close = function () {
	this.dgram.close ();
	return this;
};

Session.prototype.cancelRequests = function (error) {
	var id;
	for (id in this.reqs) {
		var req = this.reqs[id];
		this.unregisterRequest (req.getId ());
		req.responseCb (error);
	}
};

function _generateId (bitSize) {
	if (bitSize === 16) {
		return Math.floor(Math.random() * 10000) % 65535;
	}
	return Math.floor(Math.random() * 100000000) % 4294967295;
}

Session.prototype.get = function (oids, responseCb) {
	var reportOidMismatchErrors = this.reportOidMismatchErrors;

	function feedCb (req, message) {
		var pdu = message.pdu;
		var varbinds = [];

		if (req.message.pdu.varbinds.length != pdu.varbinds.length) {
			req.responseCb (new ResponseInvalidError ("Requested OIDs do not "
					+ "match response OIDs", ResponseInvalidCode.EReqResOidNoMatch));
		} else {
			for (var i = 0; i < req.message.pdu.varbinds.length; i++) {
				if ( reportOidMismatchErrors && req.message.pdu.varbinds[i].oid != pdu.varbinds[i].oid ) {
					req.responseCb (new ResponseInvalidError ("OID '"
							+ req.message.pdu.varbinds[i].oid
							+ "' in request at position '" + i + "' does not "
							+ "match OID '" + pdu.varbinds[i].oid + "' in response "
							+ "at position '" + i + "'", ResponseInvalidCode.EReqResOidNoMatch));
					return;
				} else {
					varbinds.push (pdu.varbinds[i]);
				}
			}

			req.responseCb (null, varbinds);
		}
	}

	var pduVarbinds = [];

	for (var i = 0; i < oids.length; i++) {
		var varbind = {
			oid: oids[i]
		};
		pduVarbinds.push (varbind);
	}

	this.simpleGet (GetRequestPdu, feedCb, pduVarbinds, responseCb);

	return this;
};

Session.prototype.getBulk = function () {
	var oids, nonRepeaters, maxRepetitions, responseCb;
	var reportOidMismatchErrors = this.reportOidMismatchErrors;
	var backwardsGetNexts = this.backwardsGetNexts;

	if (arguments.length >= 4) {
		oids = arguments[0];
		nonRepeaters = arguments[1];
		maxRepetitions = arguments[2];
		responseCb = arguments[3];
	} else if (arguments.length >= 3) {
		oids = arguments[0];
		nonRepeaters = arguments[1];
		maxRepetitions = 10;
		responseCb = arguments[2];
	} else {
		oids = arguments[0];
		nonRepeaters = 0;
		maxRepetitions = 10;
		responseCb = arguments[1];
	}

	function feedCb (req, message) {
		var pdu = message.pdu;
		var reqVarbinds = req.message.pdu.varbinds;
		var varbinds = [];
		var i = 0;

		for ( ; i < reqVarbinds.length && i < pdu.varbinds.length; i++) {
			if (isVarbindError (pdu.varbinds[i])) {
				if ( reportOidMismatchErrors && reqVarbinds[i].oid != pdu.varbinds[i].oid ) {
					req.responseCb (new ResponseInvalidError ("OID '" + reqVarbinds[i].oid
							+ "' in request at position '" + i + "' does not "
							+ "match OID '" + pdu.varbinds[i].oid + "' in response "
							+ "at position '" + i + "'", ResponseInvalidCode.EReqResOidNoMatch));
					return;
				}
			} else {
				if ( ! backwardsGetNexts && ! oidFollowsOid (reqVarbinds[i].oid, pdu.varbinds[i].oid)) {
					req.responseCb (new ResponseInvalidError ("OID '" + reqVarbinds[i].oid
							+ "' in request at positiion '" + i + "' does not "
							+ "precede OID '" + pdu.varbinds[i].oid + "' in response "
							+ "at position '" + i + "'", ResponseInvalidCode.EOutOfOrder));
					return;
				}
			}
			if (i < nonRepeaters)
				varbinds.push (pdu.varbinds[i]);
			else
				varbinds.push ([pdu.varbinds[i]]);
		}

		var repeaters = reqVarbinds.length - nonRepeaters;

		for ( ; i < pdu.varbinds.length; i++) {
			var reqIndex = (i - nonRepeaters) % repeaters + nonRepeaters;
			var prevIndex = i - repeaters;
			var prevOid = pdu.varbinds[prevIndex].oid;

			if (isVarbindError (pdu.varbinds[i])) {
				if ( reportOidMismatchErrors && prevOid != pdu.varbinds[i].oid ) {
					req.responseCb (new ResponseInvalidError ("OID '" + prevOid
							+ "' in response at position '" + prevIndex + "' does not "
							+ "match OID '" + pdu.varbinds[i].oid + "' in response "
							+ "at position '" + i + "'", ResponseInvalidCode.EReqResOidNoMatch));
					return;
				}
			} else {
				if ( ! backwardsGetNexts && ! oidFollowsOid (prevOid, pdu.varbinds[i].oid)) {
					req.responseCb (new ResponseInvalidError ("OID '" + prevOid
							+ "' in response at positiion '" + prevIndex + "' does not "
							+ "precede OID '" + pdu.varbinds[i].oid + "' in response "
							+ "at position '" + i + "'", ResponseInvalidCode.EOutOfOrder));
					return;
				}
			}
			varbinds[reqIndex].push (pdu.varbinds[i]);
		}

		req.responseCb (null, varbinds);
	}

	var pduVarbinds = [];

	for (var i = 0; i < oids.length; i++) {
		var varbind = {
			oid: oids[i]
		};
		pduVarbinds.push (varbind);
	}

	var options = {
		nonRepeaters: nonRepeaters,
		maxRepetitions: maxRepetitions
	};

	this.simpleGet (GetBulkRequestPdu, feedCb, pduVarbinds, responseCb,
			options);

	return this;
};

Session.prototype.getNext = function (oids, responseCb) {
	var backwardsGetNexts = this.backwardsGetNexts;

	function feedCb (req, message) {
		var pdu = message.pdu;
		var varbinds = [];

		if (req.message.pdu.varbinds.length != pdu.varbinds.length) {
			req.responseCb (new ResponseInvalidError ("Requested OIDs do not "
					+ "match response OIDs", ResponseInvalidCode.EReqResOidNoMatch));
		} else {
			for (var i = 0; i < req.message.pdu.varbinds.length; i++) {
				if (isVarbindError (pdu.varbinds[i])) {
					varbinds.push (pdu.varbinds[i]);
				} else if ( ! backwardsGetNexts && ! oidFollowsOid (req.message.pdu.varbinds[i].oid,
						pdu.varbinds[i].oid)) {
					req.responseCb (new ResponseInvalidError ("OID '"
							+ req.message.pdu.varbinds[i].oid + "' in request at "
							+ "positiion '" + i + "' does not precede "
							+ "OID '" + pdu.varbinds[i].oid + "' in response "
							+ "at position '" + i + "'", ResponseInvalidCode.OutOfOrder));
					return;
				} else {
					varbinds.push (pdu.varbinds[i]);
				}
			}

			req.responseCb (null, varbinds);
		}
	}

	var pduVarbinds = [];

	for (var i = 0; i < oids.length; i++) {
		var varbind = {
			oid: oids[i]
		};
		pduVarbinds.push (varbind);
	}

	this.simpleGet (GetNextRequestPdu, feedCb, pduVarbinds, responseCb);

	return this;
};

Session.prototype.inform = function () {
	var typeOrOid = arguments[0];
	var varbinds, options = {}, responseCb;

	/**
	 ** Support the following signatures:
	 **
	 **    typeOrOid, varbinds, options, callback
	 **    typeOrOid, varbinds, callback
	 **    typeOrOid, options, callback
	 **    typeOrOid, callback
	 **/
	if (arguments.length >= 4) {
		varbinds = arguments[1];
		options = arguments[2];
		responseCb = arguments[3];
	} else if (arguments.length >= 3) {
		if (arguments[1].constructor != Array) {
			varbinds = [];
			options = arguments[1];
			responseCb = arguments[2];
		} else {
			varbinds = arguments[1];
			responseCb = arguments[2];
		}
	} else {
		varbinds = [];
		responseCb = arguments[1];
	}

	if ( this.version == Version1 ) {
		responseCb (new RequestInvalidError ("Inform not allowed for SNMPv1"));
		return;
	}

	function feedCb (req, message) {
		var pdu = message.pdu;
		var varbinds = [];

		if (req.message.pdu.varbinds.length != pdu.varbinds.length) {
			req.responseCb (new ResponseInvalidError ("Inform OIDs do not "
					+ "match response OIDs", ResponseInvalidCode.EReqResOidNoMatch));
		} else {
			for (var i = 0; i < req.message.pdu.varbinds.length; i++) {
				if (req.message.pdu.varbinds[i].oid != pdu.varbinds[i].oid) {
					req.responseCb (new ResponseInvalidError ("OID '"
							+ req.message.pdu.varbinds[i].oid
							+ "' in inform at positiion '" + i + "' does not "
							+ "match OID '" + pdu.varbinds[i].oid + "' in response "
							+ "at position '" + i + "'", ResponseInvalidCode.EReqResOidNoMatch));
					return;
				} else {
					varbinds.push (pdu.varbinds[i]);
				}
			}

			req.responseCb (null, varbinds);
		}
	}

	if (typeof typeOrOid != "string")
		typeOrOid = "1.3.6.1.6.3.1.1.5." + (typeOrOid + 1);

	var pduVarbinds = [
		{
			oid: "1.3.6.1.2.1.1.3.0",
			type: ObjectType.TimeTicks,
			value: options.upTime || Math.floor (process.uptime () * 100)
		},
		{
			oid: "1.3.6.1.6.3.1.1.4.1.0",
			type: ObjectType.OID,
			value: typeOrOid
		}
	];

	for (var i = 0; i < varbinds.length; i++) {
		var varbind = {
			oid: varbinds[i].oid,
			type: varbinds[i].type,
			value: varbinds[i].value
		};
		pduVarbinds.push (varbind);
	}

	options.port = this.trapPort;

	this.simpleGet (InformRequestPdu, feedCb, pduVarbinds, responseCb, options);

	return this;
};

Session.prototype.onClose = function () {
	this.cancelRequests (new Error ("Socket forcibly closed"));
	this.emit ("close");
};

Session.prototype.onError = function (error) {
	this.emit (error);
};

Session.prototype.onMsg = function (buffer) {
	try {
		var message = Message.createFromBuffer (buffer);
	} catch (error) {
		this.emit("error", error);
		return;
	}

	var req = this.unregisterRequest (message.getReqId ());
	if ( ! req )
		return;

	if ( ! message.processIncomingSecurity (this.user, req.responseCb) )
		return;

	if (message.version != req.message.version) {
		req.responseCb (new ResponseInvalidError ("Version in request '"
				+ req.message.version + "' does not match version in "
				+ "response '" + message.version + "'", ResponseInvalidCode.EVersionNoMatch));
	} else if (message.community != req.message.community) {
		req.responseCb (new ResponseInvalidError ("Community '"
				+ req.message.community + "' in request does not match "
				+ "community '" + message.community + "' in response", ResponseInvalidCode.ECommunityNoMatch));
	} else if (message.pdu.type == PduType.Report) {
		this.msgSecurityParameters = {
			msgAuthoritativeEngineID: message.msgSecurityParameters.msgAuthoritativeEngineID,
			msgAuthoritativeEngineBoots: message.msgSecurityParameters.msgAuthoritativeEngineBoots,
			msgAuthoritativeEngineTime: message.msgSecurityParameters.msgAuthoritativeEngineTime
		};
		if ( this.proxy ) {
			this.msgSecurityParameters.msgUserName = this.proxy.user.name;
			this.msgSecurityParameters.msgAuthenticationParameters = "";
			this.msgSecurityParameters.msgPrivacyParameters = "";
		} else {
			if ( ! req.originalPdu || ! req.allowReport ) {
				if (Array.isArray(message.pdu.varbinds) && message.pdu.varbinds[0] && message.pdu.varbinds[0].oid.indexOf(UsmStatsBase) === 0) {
					this.userSecurityModelError (req, message.pdu.varbinds[0].oid);
					return;
				}
				req.responseCb (new ResponseInvalidError ("Unexpected Report PDU", ResponseInvalidCode.EUnexpectedReport) );
				return;
			}
			req.originalPdu.contextName = this.context;
			var timeSyncNeeded = ! message.msgSecurityParameters.msgAuthoritativeEngineBoots && ! message.msgSecurityParameters.msgAuthoritativeEngineTime;
			this.sendV3Req (req.originalPdu, req.feedCb, req.responseCb, req.options, req.port, timeSyncNeeded);
		}
	} else if ( this.proxy ) {
		this.onProxyResponse (req, message);
	} else if (message.pdu.type == PduType.GetResponse) {
		req.onResponse (req, message);
	} else {
		req.responseCb (new ResponseInvalidError ("Unknown PDU type '"
				+ message.pdu.type + "' in response", ResponseInvalidCode.EUnknownPduType));
	}
};

Session.prototype.onSimpleGetResponse = function (req, message) {
	var pdu = message.pdu;

	if (pdu.errorStatus > 0) {
		var statusString = ErrorStatus[pdu.errorStatus]
				|| ErrorStatus.GeneralError;
		var statusCode = ErrorStatus[statusString]
				|| ErrorStatus[ErrorStatus.GeneralError];

		if (pdu.errorIndex <= 0 || pdu.errorIndex > pdu.varbinds.length) {
			req.responseCb (new RequestFailedError (statusString, statusCode));
		} else {
			var oid = pdu.varbinds[pdu.errorIndex - 1].oid;
			var error = new RequestFailedError (statusString + ": " + oid,
					statusCode);
			req.responseCb (error);
		}
	} else {
		req.feedCb (req, message);
	}
};

Session.prototype.registerRequest = function (req) {
	if (! this.reqs[req.getId ()]) {
		this.reqs[req.getId ()] = req;
		if (this.reqCount <= 0)
			this.dgram.ref();
		this.reqCount++;
	}
	var me = this;
	req.timer = setTimeout (function () {
		if (req.retries-- > 0) {
			me.send (req);
		} else {
			me.unregisterRequest (req.getId ());
			req.responseCb (new RequestTimedOutError (
					"Request timed out"));
		}
	}, req.timeout);
	// Apply timeout backoff
	if (req.backoff && req.backoff >= 1)
		req.timeout *= req.backoff;
};

Session.prototype.send = function (req, noWait) {
	try {
		var me = this;

		var buffer = req.message.toBuffer ();

		this.dgram.send (buffer, 0, buffer.length, req.port, this.target,
				function (error, bytes) {
			if (error) {
				req.responseCb (error);
			} else {
				if (noWait) {
					req.responseCb (null);
				} else {
					me.registerRequest (req);
				}
			}
		});
	} catch (error) {
		req.responseCb (error);
	}

	return this;
};

Session.prototype.set = function (varbinds, responseCb) {
	var reportOidMismatchErrors = this.reportOidMismatchErrors;

	function feedCb (req, message) {
		var pdu = message.pdu;
		var varbinds = [];

		if (req.message.pdu.varbinds.length != pdu.varbinds.length) {
			req.responseCb (new ResponseInvalidError ("Requested OIDs do not "
					+ "match response OIDs", ResponseInvalidCode.EReqResOidNoMatch));
		} else {
			for (var i = 0; i < req.message.pdu.varbinds.length; i++) {
				if ( reportOidMismatchErrors && req.message.pdu.varbinds[i].oid != pdu.varbinds[i].oid ) {
					req.responseCb (new ResponseInvalidError ("OID '"
							+ req.message.pdu.varbinds[i].oid
							+ "' in request at position '" + i + "' does not "
							+ "match OID '" + pdu.varbinds[i].oid + "' in response "
							+ "at position '" + i + "'", ResponseInvalidCode.EReqResOidNoMatch));
					return;
				} else {
					varbinds.push (pdu.varbinds[i]);
				}
			}

			req.responseCb (null, varbinds);
		}
	}

	var pduVarbinds = [];

	for (var i = 0; i < varbinds.length; i++) {
		var varbind = {
			oid: varbinds[i].oid,
			type: varbinds[i].type,
			value: varbinds[i].value
		};
		pduVarbinds.push (varbind);
	}

	this.simpleGet (SetRequestPdu, feedCb, pduVarbinds, responseCb);

	return this;
};

Session.prototype.simpleGet = function (pduClass, feedCb, varbinds,
		responseCb, options) {
	var id = _generateId (this.idBitsSize);
	options = Object.assign({}, options, { context: this.context });
	var pdu = SimplePdu.createFromVariables (pduClass, id, varbinds, options);
	var message;
	var req;

	if ( this.version == Version3 ) {
		if ( this.msgSecurityParameters ) {
			this.sendV3Req (pdu, feedCb, responseCb, options, this.port, true);
		} else {
			this.sendV3Discovery (pdu, feedCb, responseCb, options);
		}
	} else {
		message = Message.createCommunity (this.version, this.community, pdu);
		req = new Req (this, message, feedCb, responseCb, options);
		this.send (req);
	}
};

function subtreeCb (req, varbinds) {
	var done = 0;

	for (var i = varbinds.length; i > 0; i--) {
		if (! oidInSubtree (req.baseOid, varbinds[i - 1].oid)) {
			done = 1;
			varbinds.pop ();
		}
	}

	if (varbinds.length > 0) {
		if (req.feedCb (varbinds)) {
			done = 1;
		}
	}

	if (done)
		return true;
}

Session.prototype.subtree  = function () {
	var me = this;
	var oid = arguments[0];
	var maxRepetitions, feedCb, doneCb;

	if (arguments.length < 4) {
		maxRepetitions = 20;
		feedCb = arguments[1];
		doneCb = arguments[2];
	} else {
		maxRepetitions = arguments[1];
		feedCb = arguments[2];
		doneCb = arguments[3];
	}

	var req = {
		feedCb: feedCb,
		doneCb: doneCb,
		maxRepetitions: maxRepetitions,
		baseOid: oid
	};

	this.walk (oid, maxRepetitions, subtreeCb.bind (me, req), doneCb);

	return this;
};

function tableColumnsResponseCb (req, error) {
	if (error) {
		req.responseCb (error);
	} else if (req.error) {
		req.responseCb (req.error);
	} else {
		if (req.columns.length > 0) {
			var column = req.columns.pop ();
			var me = this;
			this.subtree (req.rowOid + column, req.maxRepetitions,
					tableColumnsFeedCb.bind (me, req),
					tableColumnsResponseCb.bind (me, req));
		} else {
			req.responseCb (null, req.table);
		}
	}
}

function tableColumnsFeedCb (req, varbinds) {
	for (var i = 0; i < varbinds.length; i++) {
		if (isVarbindError (varbinds[i])) {
			req.error = new RequestFailedError (varbindError (varbinds[i]));
			return true;
		}

		var oid = varbinds[i].oid.replace (req.rowOid, "");
		if (oid && oid != varbinds[i].oid) {
			var match = oid.match (/^(\d+)\.(.+)$/);
			if (match && match[1] > 0) {
				if (! req.table[match[2]])
					req.table[match[2]] = {};
				req.table[match[2]][match[1]] = varbinds[i].value;
			}
		}
	}
}

Session.prototype.tableColumns = function () {
	var me = this;

	var oid = arguments[0];
	var columns = arguments[1];
	var maxRepetitions, responseCb;

	if (arguments.length < 4) {
		responseCb = arguments[2];
		maxRepetitions = 20;
	} else {
		maxRepetitions = arguments[2];
		responseCb = arguments[3];
	}

	var req = {
		responseCb: responseCb,
		maxRepetitions: maxRepetitions,
		baseOid: oid,
		rowOid: oid + ".1.",
		columns: columns.slice(0),
		table: {}
	};

	if (req.columns.length > 0) {
		var column = req.columns.pop ();
		this.subtree (req.rowOid + column, maxRepetitions,
				tableColumnsFeedCb.bind (me, req),
				tableColumnsResponseCb.bind (me, req));
	}

	return this;
};

function tableResponseCb (req, error) {
	if (error)
		req.responseCb (error);
	else if (req.error)
		req.responseCb (req.error);
	else
		req.responseCb (null, req.table);
}

function tableFeedCb (req, varbinds) {
	for (var i = 0; i < varbinds.length; i++) {
		if (isVarbindError (varbinds[i])) {
			req.error = new RequestFailedError (varbindError (varbinds[i]));
			return true;
		}

		var oid = varbinds[i].oid.replace (req.rowOid, "");
		if (oid && oid != varbinds[i].oid) {
			var match = oid.match (/^(\d+)\.(.+)$/);
			if (match && match[1] > 0) {
				if (! req.table[match[2]])
					req.table[match[2]] = {};
				req.table[match[2]][match[1]] = varbinds[i].value;
			}
		}
	}
}

Session.prototype.table = function () {
	var me = this;

	var oid = arguments[0];
	var maxRepetitions, responseCb;

	if (arguments.length < 3) {
		responseCb = arguments[1];
		maxRepetitions = 20;
	} else {
		maxRepetitions = arguments[1];
		responseCb = arguments[2];
	}

	var req = {
		responseCb: responseCb,
		maxRepetitions: maxRepetitions,
		baseOid: oid,
		rowOid: oid + ".1.",
		table: {}
	};

	this.subtree (oid, maxRepetitions, tableFeedCb.bind (me, req),
			tableResponseCb.bind (me, req));

	return this;
};

Session.prototype.trap = function () {
	var req = {};

	var typeOrOid = arguments[0];
	var varbinds, options = {}, responseCb;
	var message;

	/**
	 ** Support the following signatures:
		**
		**    typeOrOid, varbinds, options, callback
		**    typeOrOid, varbinds, agentAddr, callback
		**    typeOrOid, varbinds, callback
		**    typeOrOid, agentAddr, callback
		**    typeOrOid, options, callback
		**    typeOrOid, callback
		**/
	if (arguments.length >= 4) {
		varbinds = arguments[1];
		if (typeof arguments[2] == "string") {
			options.agentAddr = arguments[2];
		} else if (arguments[2].constructor != Array) {
			options = arguments[2];
		}
		responseCb = arguments[3];
	} else if (arguments.length >= 3) {
		if (typeof arguments[1] == "string") {
			varbinds = [];
			options.agentAddr = arguments[1];
		} else if (arguments[1].constructor != Array) {
			varbinds = [];
			options = arguments[1];
		} else {
			varbinds = arguments[1];
			options.agentAddr = null;
		}
		responseCb = arguments[2];
	} else {
		varbinds = [];
		responseCb = arguments[1];
	}

	var pdu, pduVarbinds = [];

	for (var i = 0; i < varbinds.length; i++) {
		var varbind = {
			oid: varbinds[i].oid,
			type: varbinds[i].type,
			value: varbinds[i].value
		};
		pduVarbinds.push (varbind);
	}

	var id = _generateId (this.idBitsSize);

	if (this.version == Version2c || this.version == Version3 ) {
		if (typeof typeOrOid != "string")
			typeOrOid = "1.3.6.1.6.3.1.1.5." + (typeOrOid + 1);

		pduVarbinds.unshift (
			{
				oid: "1.3.6.1.2.1.1.3.0",
				type: ObjectType.TimeTicks,
				value: options.upTime || Math.floor (process.uptime () * 100)
			},
			{
				oid: "1.3.6.1.6.3.1.1.4.1.0",
				type: ObjectType.OID,
				value: typeOrOid
			}
		);

		pdu = TrapV2Pdu.createFromVariables (id, pduVarbinds, options);
	} else {
		pdu = TrapPdu.createFromVariables (typeOrOid, pduVarbinds, options);
	}

	if ( this.version == Version3 ) {
		var msgSecurityParameters = {
			msgAuthoritativeEngineID: this.engine.engineID,
			msgAuthoritativeEngineBoots: 0,
			msgAuthoritativeEngineTime: 0
		};
		message = Message.createRequestV3 (this.user, msgSecurityParameters, pdu);
	} else {
		message = Message.createCommunity (this.version, this.community, pdu);
	}

	req = {
		id: id,
		message: message,
		responseCb: responseCb,
		port: this.trapPort
	};

	this.send (req, true);

	return this;
};

Session.prototype.unregisterRequest = function (id) {
	var req = this.reqs[id];
	if (req) {
		delete this.reqs[id];
		clearTimeout (req.timer);
		delete req.timer;
		this.reqCount--;
		if (this.reqCount <= 0)
			this.dgram.unref();
		return req;
	} else {
		return null;
	}
};

function walkCb (req, error, varbinds) {
	var done = 0;
	var oid;

	if (error) {
		if (error instanceof RequestFailedError) {
			if (error.status != ErrorStatus.NoSuchName) {
				req.doneCb (error);
				return;
			} else {
				// signal the version 1 walk code below that it should stop
				done = 1;
			}
		} else {
			req.doneCb (error);
			return;
		}
	}

	if ( ! varbinds || ! varbinds.length ) {
		req.doneCb(null);
		return;
	}

	if (this.version == Version2c || this.version == Version3) {
		for (var i = varbinds[0].length; i > 0; i--) {
			if (varbinds[0][i - 1].type == ObjectType.EndOfMibView) {
				varbinds[0].pop ();
				done = 1;
			}
		}
		if (req.feedCb (varbinds[0]))
			done = 1;
		if (! done)
			oid = varbinds[0][varbinds[0].length - 1].oid;
	} else {
		if (varbinds[0].type == ObjectType.EndOfMibView) {
			done = 1;
		}
		if (! done) {
			if (req.feedCb (varbinds)) {
				done = 1;
			} else {
				oid = varbinds[0].oid;
			}
		}
	}

	if (done)
		req.doneCb (null);
	else
		this.walk (oid, req.maxRepetitions, req.feedCb, req.doneCb,
				req.baseOid);
}

Session.prototype.walk  = function () {
	var me = this;
	var oid = arguments[0];
	var maxRepetitions, feedCb, doneCb;

	if (arguments.length < 4) {
		maxRepetitions = 20;
		feedCb = arguments[1];
		doneCb = arguments[2];
	} else {
		maxRepetitions = arguments[1];
		feedCb = arguments[2];
		doneCb = arguments[3];
	}

	var req = {
		maxRepetitions: maxRepetitions,
		feedCb: feedCb,
		doneCb: doneCb
	};

	if (this.version == Version2c || this.version == Version3)
		this.getBulk ([oid], 0, maxRepetitions,
				walkCb.bind (me, req));
	else
		this.getNext ([oid], walkCb.bind (me, req));

	return this;
};

Session.prototype.sendV3Req = function (pdu, feedCb, responseCb, options, port, allowReport) {
	var message = Message.createRequestV3 (this.user, this.msgSecurityParameters, pdu);
	var reqOptions = options || {};
	var req = new Req (this, message, feedCb, responseCb, reqOptions);
	req.port = port;
	req.originalPdu = pdu;
	req.allowReport = allowReport;
	this.send (req);
};


Session.prototype.sendV3Discovery = function (originalPdu, feedCb, responseCb, options) {
	var discoveryPdu = createDiscoveryPdu(this.context);
	var discoveryMessage = Message.createDiscoveryV3 (discoveryPdu);
	var discoveryReq = new Req (this, discoveryMessage, feedCb, responseCb, options);
	discoveryReq.originalPdu = originalPdu;
	discoveryReq.allowReport = true;
	this.send (discoveryReq);
};

Session.prototype.userSecurityModelError = function (req, oid) {
	var oidSuffix = oid.replace (UsmStatsBase + '.', '').replace (/\.0$/, '');
	var errorType = UsmStats[oidSuffix] || "Unexpected Report PDU";
	req.responseCb (new ResponseInvalidError (errorType, ResponseInvalidCode.EAuthFailure) );
};

Session.prototype.onProxyResponse = function (req, message) {
	if ( message.version != Version3 ) {
		this.callback (new RequestFailedError ("Only SNMP version 3 contexts are supported"));
		return;
	}
	message.pdu.contextName = this.proxy.context;
	message.user = req.proxiedUser;
	message.setAuthentication ( ! (req.proxiedUser.level == SecurityLevel.noAuthNoPriv));
	message.setPrivacy (req.proxiedUser.level == SecurityLevel.authPriv);
	message.msgSecurityParameters = {
		msgAuthoritativeEngineID: req.proxiedEngine.engineID,
		msgAuthoritativeEngineBoots: req.proxiedEngine.engineBoots,
		msgAuthoritativeEngineTime: req.proxiedEngine.engineTime,
		msgUserName: req.proxiedUser.name,
		msgAuthenticationParameters: "",
		msgPrivacyParameters: ""
	};
	message.buffer = null;
	message.pdu.contextEngineID = message.msgSecurityParameters.msgAuthoritativeEngineID;
	message.pdu.contextName = this.proxy.context;
	message.pdu.id = req.proxiedPduId;
	this.proxy.listener.send (message, req.proxiedRinfo, req.proxiedSocket);
};

Session.create = function (target, community, options) {
	// Ensure that options may be optional
	var version = (options && options.version) ? options.version : Version1;
	if (version != Version1 && version != Version2c) {
		throw new ResponseInvalidError ("SNMP community session requested but version '" + options.version + "' specified in options not valid",
				ResponseInvalidCode.EVersionNoMatch);
	} else {
		if (!options)
			options = {};
		options.version = version;
		return new Session (target, community, options);
	}
};

Session.createV3 = function (target, user, options) {
	// Ensure that options may be optional
	if ( options && options.version && options.version != Version3 ) {
		throw new ResponseInvalidError ("SNMPv3 session requested but version '" + options.version + "' specified in options",
				ResponseInvalidCode.EVersionNoMatch);
	} else {
		if (!options)
			options = {};
		options.version = Version3;
	}
	return new Session (target, user, options);
};

var Engine = function (engineOptions) {
	let { engineID } = engineOptions;
	if ( engineID ) {
		if ( ! (engineID instanceof Buffer) ) {
			engineID = engineID.replace('0x', '');
			this.engineID = Buffer.from((engineID.toString().length % 2 == 1 ? '0' : '') + engineID.toString(), 'hex');
		} else {
			this.engineID = engineID;
		}
	} else {
		this.generateEngineID ();
	}
	this.engineBoots = 0;
	this.engineTime = 10;
};

Engine.prototype.generateEngineID = function() {
	// generate a 17-byte engine ID in the following format:
	// 0x80 | 0x00B983 (enterprise OID) | 0x80 (enterprise-specific format) | 12 bytes of random
	this.engineID = Buffer.alloc (17);
	this.engineID.fill ('8000B98380', 'hex', 0, 5);
	this.engineID.fill (crypto.randomBytes (12), 5, 17, 'hex');
};

var Listener = function (options, receiver) {
	this.receiver = receiver;
	this.callback = receiver.onMsg;
	this.disableAuthorization = options.disableAuthorization || false;
	this.dgramModule = options.dgramModule || dgram;
	if ( options.sockets ) {
		this.socketOptions = options.sockets;
	} else {
		this.socketOptions = [
			{
				transport: options.transport,
				address: options.address,
				port: options.port
			}
		];
	}
	for ( const socketOption of this.socketOptions ) {
		socketOption.transport = socketOption.transport || 'udp4';
		socketOption.address = socketOption.address || null;
		socketOption.port = socketOption.port || 161;
	}
};

Listener.prototype.startListening = function () {
	var me = this;
	this.sockets = {};
	for ( const socketOptions of this.socketOptions ) {
		const dgramMod = this.dgramModule;
		const socket = dgramMod.createSocket (socketOptions.transport);
		socket.on ("error", me.receiver.callback);
		socket.bind (socketOptions.port, socketOptions.address);
		socket.on ("message", me.callback.bind (me.receiver, socket));
		const socketKey = socketOptions.transport + ':' + socketOptions.address + ':' + socketOptions.port;
		if ( this.sockets[socketKey] ) {
			throw new Error ("Duplicate socket exists for " + socketKey);
		}
		this.sockets[socketKey] = socket;
	}
};

Listener.prototype.send = function (message, rinfo, socket) {
	// var me = this;

	var buffer = message.toBuffer ();

	socket.send (buffer, 0, buffer.length, rinfo.port, rinfo.address, function (error, bytes) {
		if (error) {
			// me.callback (error);
			console.error ("Error sending: " + error.message);
		} else {
			// debug ("Listener sent response message");
		}
	});
};

Listener.formatCallbackData = function (pdu, rinfo) {
	if ( pdu.contextEngineID ) {
		pdu.contextEngineID = pdu.contextEngineID.toString('hex');
	}
	delete pdu.nonRepeaters;
	delete pdu.maxRepetitions;
	return {
		pdu: pdu,
		rinfo: rinfo
	};
};

Listener.processIncoming = function (buffer, authorizer, callback) {
	var message = Message.createFromBuffer (buffer);
	var community;

	// Authorization
	if ( message.version == Version3 ) {
		message.user = authorizer.users.filter( localUser => localUser.name ==
				message.msgSecurityParameters.msgUserName )[0];
		message.disableAuthentication = authorizer.disableAuthorization;
		if ( ! message.user ) {
			if ( message.msgSecurityParameters.msgUserName != "" && ! authorizer.disableAuthorization ) {
				callback (new RequestFailedError ("Local user not found for message with user " +
						message.msgSecurityParameters.msgUserName));
				return;
			} else if ( message.hasAuthentication () ) {
				callback (new RequestFailedError ("Local user not found and message requires authentication with user " +
						message.msgSecurityParameters.msgUserName));
				return;
			} else {
				message.user = {
					name: "",
					level: SecurityLevel.noAuthNoPriv
				};
			}
		}
		if ( (message.user.level == SecurityLevel.authNoPriv || message.user.level == SecurityLevel.authPriv) && ! message.hasAuthentication() ) {
			callback (new RequestFailedError ("Local user " + message.msgSecurityParameters.msgUserName +
					" requires authentication but message does not provide it"));
			return;
		}
		if ( message.user.level == SecurityLevel.authPriv && ! message.hasPrivacy() ) {
			callback (new RequestFailedError ("Local user " + message.msgSecurityParameters.msgUserName +
					" requires privacy but message does not provide it"));
			return;
		}
		if ( ! message.processIncomingSecurity (message.user, callback) ) {
			return;
		}
	} else {
		community = authorizer.communities.filter( localCommunity => localCommunity == message.community )[0];
		if ( ! community && ! authorizer.disableAuthorization ) {
			callback (new RequestFailedError ("Local community not found for message with community " + message.community));
			return;
		}
	}

	return message;
};

Listener.prototype.close = function (callback) {
	for ( const socket of Object.values(this.sockets) ) {
		if ( callback ) {
			const socketInfo = socket.address();
			const socketCallback = () => {
				callback(socketInfo);
			};
			socket.close (socketCallback);
		} else {
			socket.close();
		}
	}
};

var Authorizer = function (options) {
	this.communities = [];
	this.users = [];
	this.disableAuthorization = options.disableAuthorization;
	this.accessControlModelType = options.accessControlModelType || AccessControlModelType.None;

	if ( this.accessControlModelType == AccessControlModelType.None ) {
		this.accessControlModel = null;
	} else if ( this.accessControlModelType == AccessControlModelType.Simple ) {
		this.accessControlModel = new SimpleAccessControlModel ();
	}
};

Authorizer.prototype.addCommunity = function (community) {
	if ( this.getCommunity (community) ) {
		return;
	} else {
		this.communities.push (community);
		if ( this.accessControlModelType == AccessControlModelType.Simple ) {
			this.accessControlModel.setCommunityAccess (community, AccessLevel.ReadOnly);
		}
	}
};

Authorizer.prototype.getCommunity = function (community) {
	return this.communities.filter( localCommunity => localCommunity == community )[0] || null;
};

Authorizer.prototype.getCommunities = function () {
	return this.communities;
};

Authorizer.prototype.deleteCommunity = function (community) {
	var index = this.communities.indexOf(community);
	if ( index > -1 ) {
		this.communities.splice(index, 1);
	}
};

Authorizer.prototype.addUser = function (user) {
	if ( this.getUser (user.name) ) {
		this.deleteUser (user.name);
	}
	this.users.push (user);
	if ( this.accessControlModelType == AccessControlModelType.Simple ) {
		this.accessControlModel.setUserAccess (user.name, AccessLevel.ReadOnly);
	}
};

Authorizer.prototype.getUser = function (userName) {
	return this.users.filter( localUser => localUser.name == userName )[0] || null;
};

Authorizer.prototype.getUsers = function () {
	return this.users;
};

Authorizer.prototype.deleteUser = function (userName) {
	var index = this.users.findIndex(localUser => localUser.name == userName );
	if ( index > -1 ) {
		this.users.splice(index, 1);
	}
};

Authorizer.prototype.getAccessControlModelType = function () {
	return this.accessControlModelType;
};

Authorizer.prototype.getAccessControlModel = function () {
	return this.accessControlModel;
};

Authorizer.prototype.isAccessAllowed = function (securityModel, securityName, pduType) {
	if ( this.accessControlModel ) {
		return this.accessControlModel.isAccessAllowed (securityModel, securityName, pduType);
	} else {
		return true;
	}
};

var SimpleAccessControlModel = function () {
	this.communitiesAccess = [];
	this.usersAccess = [];
};

SimpleAccessControlModel.prototype.getCommunityAccess = function (community) {
	return this.communitiesAccess.find (entry => entry.community == community );
};

SimpleAccessControlModel.prototype.getCommunityAccessLevel = function (community) {
	var communityAccessEntry = this.getCommunityAccess (community);
	return communityAccessEntry ? communityAccessEntry.level : AccessLevel.None;
};

SimpleAccessControlModel.prototype.getCommunitiesAccess = function () {
	return this.communitiesAccess;
};

SimpleAccessControlModel.prototype.setCommunityAccess = function (community, accessLevel) {
	let accessEntry = this.getCommunityAccess (community);
	if ( accessEntry ) {
		accessEntry.level = accessLevel;
	} else {
		this.communitiesAccess.push ({
			community: community,
			level: accessLevel
		});
		this.communitiesAccess.sort ((a, b) => (a.community > b.community) ? 1 : -1);
	}
};

SimpleAccessControlModel.prototype.removeCommunityAccess = function (community) {
	this.communitiesAccess.splice ( this.communitiesAccess.findIndex (entry => entry.community == community), 1);
};

SimpleAccessControlModel.prototype.getUserAccess = function (userName) {
	return this.usersAccess.find (entry => entry.userName == userName );
};

SimpleAccessControlModel.prototype.getUserAccessLevel = function (user) {
	var userAccessEntry = this.getUserAccess (user);
	return userAccessEntry ? userAccessEntry.level : AccessLevel.None;
};

SimpleAccessControlModel.prototype.getUsersAccess = function () {
	return this.usersAccess;
};

SimpleAccessControlModel.prototype.setUserAccess = function (userName, accessLevel) {
	let accessEntry = this.getUserAccess (userName);
	if ( accessEntry ) {
		accessEntry.level = accessLevel;
	} else {
		this.usersAccess.push ({
			userName: userName,
			level: accessLevel
		});
		this.usersAccess.sort ((a, b) => (a.userName > b.userName) ? 1 : -1);
	}
};

SimpleAccessControlModel.prototype.removeUserAccess = function (userName) {
	this.usersAccess.splice ( this.usersAccess.findIndex (entry => entry.userName == userName), 1);
};

SimpleAccessControlModel.prototype.isAccessAllowed = function (securityModel, securityName, pduType) {
	var accessLevelConfigured;
	var accessLevelRequired;

	switch ( securityModel ) {
		case Version1:
		case Version2c:
			accessLevelConfigured = this.getCommunityAccessLevel (securityName);
			break;
		case Version3:
			accessLevelConfigured = this.getUserAccessLevel (securityName);
			break;
	}
	switch ( pduType ) {
		case PduType.SetRequest:
			accessLevelRequired = AccessLevel.ReadWrite;
			break;
		case PduType.GetRequest:
		case PduType.GetNextRequest:
		case PduType.GetBulkRequest:
			accessLevelRequired = AccessLevel.ReadOnly;
			break;
		default:
			accessLevelRequired = AccessLevel.None;
			break;
	}
	switch ( accessLevelRequired ) {
		case AccessLevel.ReadWrite:
			return accessLevelConfigured == AccessLevel.ReadWrite;
		case AccessLevel.ReadOnly:
			return accessLevelConfigured == AccessLevel.ReadWrite || accessLevelConfigured == AccessLevel.ReadOnly;
		case AccessLevel.None:
			return true;
		default:
			return false;
	}
};


/*****************************************************************************
 ** Receiver class definition
 **/

var Receiver = function (options, callback) {
	DEBUG |= options.debug;
	this.authorizer = new Authorizer (options);
	this.engine = new Engine ({
		engineID: options.engineID
	});

	this.engineBoots = 0;
	this.engineTime = 10;
	this.disableAuthorization = false;

	this.callback = callback;
	this.family = options.transport || 'udp4';
	this.port = options.port || 162;
	options.port = this.port;
	this.disableAuthorization = options.disableAuthorization || false;
	this.includeAuthentication = options.includeAuthentication || false;
	this.context = (options && options.context) ? options.context : "";
	this.listener = new Listener (options, this);
};

Receiver.prototype.getAuthorizer = function () {
	return this.authorizer;
};

Receiver.prototype.onMsg = function (socket, buffer, rinfo) {

	let message;

	try {
		message = Listener.processIncoming (buffer, this.authorizer, this.callback);
	} catch (error) {
		this.callback (new ProcessingError ("Failure to process incoming message", error, rinfo, buffer));
		return;
	}

	if ( ! message ) {
		return;
	}

	// The only GetRequest PDUs supported are those used for SNMPv3 discovery
	if ( message.pdu.type == PduType.GetRequest ) {
		if ( message.version != Version3 ) {
			this.callback (new RequestInvalidError ("Only SNMPv3 discovery GetRequests are supported"));
			return;
		} else if ( message.hasAuthentication() ) {
			this.callback (new RequestInvalidError ("Only discovery (noAuthNoPriv) GetRequests are supported but this message has authentication"));
			return;
		} else if ( ! message.isReportable () ) {
			this.callback (new RequestInvalidError ("Only discovery GetRequests are supported and this message does not have the reportable flag set"));
			return;
		}
		let reportMessage = message.createReportResponseMessage (this.engine, this.context);
		this.listener.send (reportMessage, rinfo, socket);
		return;
	}

	// Inform/trap processing
	// debug (JSON.stringify (message.pdu, null, 2));
	if ( message.pdu.type == PduType.Trap || message.pdu.type == PduType.TrapV2 ) {
		this.callback (null, this.formatCallbackData (message, rinfo) );
	} else if ( message.pdu.type == PduType.InformRequest ) {
		message.pdu.type = PduType.GetResponse;
		message.buffer = null;
		message.setReportable (false);
		this.listener.send (message, rinfo, socket);
		message.pdu.type = PduType.InformRequest;
		this.callback (null, this.formatCallbackData (message, rinfo) );
	} else {
		this.callback (new RequestInvalidError ("Unexpected PDU type " + message.pdu.type + " (" + PduType[message.pdu.type] + ")"));
	}
};

Receiver.prototype.formatCallbackData = function (message, rinfo) {
	if ( message.pdu.contextEngineID ) {
		message.pdu.contextEngineID = message.pdu.contextEngineID.toString('hex');
	}
	delete message.pdu.nonRepeaters;
	delete message.pdu.maxRepetitions;
	const formattedData = {
		pdu: message.pdu,
		rinfo: rinfo
	};
	if (this.includeAuthentication) {
		if (message.community) {
			formattedData.pdu.community = message.community;
		} else if (message.user) {
			formattedData.pdu.user = message.user.name;
		}
	}

	return formattedData;
};

Receiver.prototype.close  = function (callback) {
	this.listener.close (callback);
};

Receiver.create = function (options, callback) {
	var receiver = new Receiver (options, callback);
	receiver.listener.startListening ();
	return receiver;
};

var ModuleStore = function (baseModules) {
	this.baseModules = baseModules ?? ModuleStore.BASE_MODULES;
	this.parser = mibparser ();
	this.translations = {
		oidToPath: {},
		oidToModule: {},
		pathToOid: {},
		pathToModule: {},
		moduleToOid: {},
		moduleToPath: {}
	};
};

ModuleStore.prototype.getSyntaxTypes = function () {
	var syntaxTypes = {};
	Object.assign (syntaxTypes, ObjectType);
	var entryArray;

	for ( var mibModule of Object.values (this.parser.Modules) ) {
		entryArray = Object.values (mibModule);
		for ( var mibEntry of entryArray ) {
			// SMIv2 Textual Conventions
			if ( mibEntry.MACRO == "TEXTUAL-CONVENTION" ) {
				if ( mibEntry.SYNTAX && ! syntaxTypes[mibEntry.ObjectName] ) {
					if ( typeof mibEntry.SYNTAX == "object" ) {
						syntaxTypes[mibEntry.ObjectName] = mibEntry.SYNTAX;
					} else {
						syntaxTypes[mibEntry.ObjectName] = syntaxTypes[mibEntry.SYNTAX];
					}
				}
			// SMIv1 Defined Types
			} else if ( ! mibEntry.OID && ! syntaxTypes[mibEntry.ObjectName] ) {
				if ( mibEntry.SYNTAX ) {
					syntaxTypes[mibEntry.ObjectName] = mibEntry.SYNTAX;
				} else {
					syntaxTypes[mibEntry.ObjectName] = syntaxTypes[mibEntry.MACRO];
				}
			}
		}
	}
	return syntaxTypes;
};

ModuleStore.prototype.loadFromFile = function (fileName) {
	var modulesBeforeLoad = this.getModuleNames();
	this.parser.Import (fileName);
	this.parser.Serialize ();
	var modulesAfterLoad = this.getModuleNames();
	var newModulesForTranslation = modulesAfterLoad.filter (moduleName => modulesBeforeLoad.indexOf (moduleName) === -1);
	newModulesForTranslation.forEach ( moduleName => this.addTranslationsForModule (moduleName) );
};

ModuleStore.prototype.addTranslationsForModule = function (moduleName) {
	var mibModule = this.parser.Modules[moduleName];

	if ( ! mibModule ) {
		throw new ReferenceError ("MIB module " + moduleName + " not loaded");
	}
	var entryArray = Object.values (mibModule);
	for ( var i = 0; i < entryArray.length ; i++ ) {
		var mibEntry = entryArray[i];
		var oid = mibEntry.OID;
		var namedPath = mibEntry.NameSpace;
		var moduleQualifiedName;
		if ( mibEntry.ObjectName ) {
			moduleQualifiedName = moduleName + "::" + mibEntry.ObjectName;
		} else {
			moduleQualifiedName = undefined;
		}
		if ( oid && namedPath ) {
			this.translations.oidToPath[oid] = namedPath;
			this.translations.pathToOid[namedPath] = oid;
		}
		if ( oid && moduleQualifiedName ) {
			this.translations.oidToModule[oid] = moduleQualifiedName;
			this.translations.moduleToOid[moduleQualifiedName] = oid;
		}
		if ( namedPath && moduleQualifiedName ) {
			this.translations.pathToModule[namedPath] = moduleQualifiedName;
			this.translations.moduleToPath[moduleQualifiedName] = namedPath;
		}
	}
};

ModuleStore.prototype.getModule = function (moduleName) {
	return this.parser.Modules[moduleName];
};

ModuleStore.prototype.getModules = function (includeBase) {
	var modules = {};
	for ( var moduleName of Object.keys(this.parser.Modules) ) {
		if ( includeBase || this.baseModules.indexOf (moduleName) == -1 ) {
			modules[moduleName] = this.parser.Modules[moduleName];
		}
	}
	return modules;
};

ModuleStore.prototype.getModuleNames = function (includeBase) {
	var modules = [];
	for ( var moduleName of Object.keys(this.parser.Modules) ) {
		if ( includeBase || this.baseModules.indexOf (moduleName) == -1 ) {
			modules.push (moduleName);
		}
	}
	return modules;
};

ModuleStore.prototype.getProvidersForModule = function (moduleName) {
	var mibModule = this.parser.Modules[moduleName];
	var scalars = [];
	var tables = [];
	var mibEntry;
	var syntaxTypes;
	var entryArray;
	var currentTableProvider;
	var parentOid;
	var constraintsResults;
	var constraints;

	if ( ! mibModule ) {
		throw new ReferenceError ("MIB module " + moduleName + " not loaded");
	}
	syntaxTypes = this.getSyntaxTypes ();
	entryArray = Object.values (mibModule);
	for ( var i = 0; i < entryArray.length ; i++ ) {
		mibEntry = entryArray[i];
		var syntax = mibEntry.SYNTAX;
		var access = mibEntry["ACCESS"];
		var maxAccess = (typeof mibEntry["MAX-ACCESS"] != "undefined" ? mibEntry["MAX-ACCESS"] : (access ? AccessToMaxAccess[access] : "not-accessible"));
		var defVal = mibEntry["DEFVAL"];

		if ( syntax ) {
			constraintsResults = ModuleStore.getConstraintsFromSyntax (syntax, syntaxTypes);
			syntax = constraintsResults.syntax;
			constraints = constraintsResults.constraints;

			if ( syntax.startsWith ("SEQUENCE OF") ) {
				// start of table
				currentTableProvider = {
					tableName: mibEntry.ObjectName,
					type: MibProviderType.Table,
					//oid: mibEntry.OID,
					tableColumns: [],
					tableIndex: [1]	 // default - assume first column is index
				};
				currentTableProvider.maxAccess = MaxAccess[maxAccess];

				// read table to completion
				while ( currentTableProvider || i >= entryArray.length ) {
					i++;
					mibEntry = entryArray[i];
					if ( ! mibEntry ) {
						tables.push (currentTableProvider);
						currentTableProvider = null;
						i--;
						break;
					}
					syntax = mibEntry.SYNTAX;
					access = mibEntry["ACCESS"];
					maxAccess = (typeof mibEntry["MAX-ACCESS"] != "undefined" ? mibEntry["MAX-ACCESS"] : (access ? AccessToMaxAccess[access] : "not-accessible"));
					defVal = mibEntry["DEFVAL"];

					constraintsResults = ModuleStore.getConstraintsFromSyntax (syntax, syntaxTypes);
					syntax = constraintsResults.syntax;
					constraints = constraintsResults.constraints;

					if ( mibEntry.MACRO == "SEQUENCE" ) {
						// table entry sequence - ignore
					} else if ( ! mibEntry["OBJECT IDENTIFIER"] ) {
						// unexpected
					} else {
						parentOid = mibEntry["OBJECT IDENTIFIER"].split (" ")[0];
						if ( parentOid == currentTableProvider.tableName ) {
							// table entry
							currentTableProvider.name = mibEntry.ObjectName;
							currentTableProvider.oid = mibEntry.OID;
							if ( mibEntry.INDEX ) {
								currentTableProvider.tableIndex = [];
								for ( var indexEntry of mibEntry.INDEX ) {
									indexEntry = indexEntry.trim ();
									if ( indexEntry.includes(" ") ) {
										if ( indexEntry.split(" ")[0] == "IMPLIED" ) {
											currentTableProvider.tableIndex.push ({
												columnName: indexEntry.split(" ")[1],
												implied: true
											});
										} else {
											// unknown condition - guess that last token is name
											currentTableProvider.tableIndex.push ({
												columnName: indexEntry.split(" ").slice(-1)[0],
											});
										}
									} else {
										currentTableProvider.tableIndex.push ({
											columnName: indexEntry
										});
									}
								}
							}
							if ( mibEntry.AUGMENTS ) {
								currentTableProvider.tableAugments = mibEntry.AUGMENTS[0].trim();
								currentTableProvider.tableIndex = null;
							}
						} else if ( parentOid == currentTableProvider.name ) {
							// table column
							let columnType = syntaxTypes[syntax];
							if (typeof columnType === 'object') {
								columnType = syntaxTypes[Object.keys(columnType)[0]];
							}
							var columnDefinition = {
								number: parseInt (mibEntry["OBJECT IDENTIFIER"].split (" ")[1]),
								name: mibEntry.ObjectName,
								type: columnType,
								maxAccess: MaxAccess[maxAccess]
							};
							if ( constraints ) {
								columnDefinition.constraints = constraints;
							}
							if (defVal) {
								columnDefinition.defVal = defVal;
							}
							// If this column has syntax RowStatus and
							// the MIB module imports RowStatus from
							// SNMPv2-TC, mark this column as the
							// rowStatus column so we can act on it.
							// (See lib/mibs/SNMPv2-TC.mib#L186.)
							if ( syntax == "RowStatus" &&
									"IMPORTS" in mibModule &&
									Array.isArray(mibModule.IMPORTS["SNMPv2-TC"]) &&
									mibModule.IMPORTS["SNMPv2-TC"].includes("RowStatus") ) {

								// Mark this column as being rowStatus
								columnDefinition.rowStatus = true;
							}
							currentTableProvider.tableColumns.push (columnDefinition);
						} else {
							// table finished
							tables.push (currentTableProvider);
							// console.log ("Table: " + currentTableProvider.name);
							currentTableProvider = null;
							i--;
						}
					}
				}
			} else if ( mibEntry.MACRO == "OBJECT-TYPE" ) {
				// OBJECT-TYPE entries not in a table are scalars
				let scalarType = syntaxTypes[syntax];
				if (typeof scalarType === 'object') {
					scalarType = syntaxTypes[Object.keys(scalarType)[0]];
				}
				var scalarDefinition = {
					name: mibEntry.ObjectName,
					type: MibProviderType.Scalar,
					oid: mibEntry.OID,
					scalarType: scalarType,
					maxAccess: MaxAccess[maxAccess]
				};

				if (defVal) {
					scalarDefinition.defVal = defVal;
				}

				if ( constraints ) {
					scalarDefinition.constraints = constraints;
				}
				scalars.push (scalarDefinition);
				// console.log ("Scalar: " + mibEntry.ObjectName);
			}
		}
	}
	return scalars.concat (tables);
};

ModuleStore.prototype.loadBaseModules = function () {
	for ( var mibModule of this.baseModules ) {
		this.parser.Import (__dirname + "/lib/mibs/" + mibModule + ".mib");
	}
	this.parser.Serialize ();
	this.getModuleNames (true).forEach( moduleName => this.addTranslationsForModule (moduleName) );
};

ModuleStore.getConstraintsFromSyntax = function (syntax, syntaxTypes) {
	let constraints;
	if ( typeof syntaxTypes[syntax] === 'object' ) {
		syntax = syntaxTypes[syntax];
	}
	// detect INTEGER ranges, OCTET STRING sizes, and INTEGER enumerations
	if ( typeof syntax == "object" ) {
		let firstSyntaxKey = syntax[Object.keys(syntax)[0]];
		if ( firstSyntaxKey.ranges ) {
			constraints = {
				ranges: firstSyntaxKey.ranges
			};
			syntax = Object.keys(syntax)[0];
		} else if ( firstSyntaxKey.sizes ) {
			constraints = {
				sizes: firstSyntaxKey.sizes
			};
			syntax = Object.keys(syntax)[0];
		} else {
			constraints = {
				enumeration: syntax.INTEGER
			};
			syntax = "INTEGER";
		}
	} else {
		constraints = null;
	}
	return {
		constraints: constraints,
		syntax: syntax
	};
};

ModuleStore.prototype.translate = function (name, destinationFormat) {
	var sourceFormat;
	if ( name.includes ("::") ) {
		sourceFormat = OidFormat.module;
	} else if ( name.startsWith ("1.") ) {
		sourceFormat = OidFormat.oid;
	} else {
		sourceFormat = OidFormat.path;
	}
	var lowercaseDestinationFormat = destinationFormat.toLowerCase();
	if ( sourceFormat === lowercaseDestinationFormat ) {
		var testMap;
		switch ( sourceFormat ) {
			case OidFormat.oid: {
				testMap = "oidToPath";
				break;
			}
			case OidFormat.path: {
				testMap = "pathToOid";
				break;
			}
			case OidFormat.module: {
				testMap = "moduleToOid";
				break;
			}
		}
		var entryExists = this.translations[testMap][name];
		if ( entryExists === undefined ) {
			throw new Error ("No translation found for " + name);
		} else {
			return name;
		}
	} else {
		var capitalizedDestinationFormat = destinationFormat.charAt(0).toUpperCase() + destinationFormat.slice(1).toLowerCase();
		var translationMap = sourceFormat + "To" + capitalizedDestinationFormat;
		var translation = this.translations[translationMap][name];
		if ( ! translation ) {
			throw new Error ("No '" + destinationFormat + "' translation found for " + name);
		} else {
			return translation;
		}
	}
};

ModuleStore.create = function (options) {
	const store = new ModuleStore (options?.baseModules ?? ModuleStore.BASE_MODULES);
	store.loadBaseModules ();
	return store;
};

ModuleStore.BASE_MODULES = [
	"RFC1155-SMI",
	"RFC1158-MIB",
	"RFC-1212",
	"RFC1213-MIB",
	"RFC-1215",
	"SNMPv2-SMI",
	"SNMPv2-CONF",
	"SNMPv2-TC",
	"SNMPv2-MIB"
];

var MibNode = function(address, parent) {
	this.address = address;
	this.oid = this.address.join('.');
	this.parent = parent;
	this.children = {};
};

MibNode.prototype.child = function (index) {
	return this.children[index];
};

MibNode.prototype.listChildren = function (lowest) {
	var sorted = [];

	lowest = lowest || 0;

	this.children.forEach (function (c, i) {
		if (i >= lowest)
			sorted.push (i);
	});

	sorted.sort (function (a, b) {
		return (a - b);
	});

	return sorted;
};

MibNode.prototype.findChildImmediatelyBefore = function (index) {
	var sortedChildrenKeys = Object.keys(this.children).sort(function (a, b) {
		return (a - b);
	});

	if ( sortedChildrenKeys.length === 0 ) {
		return null;
	}

	for ( var i = 0; i < sortedChildrenKeys.length; i++ ) {
		if ( index < sortedChildrenKeys[i] ) {
			if ( i === 0 ) {
				return null;
			} else {
				return this.children[sortedChildrenKeys[i - 1]];
			}
		}
	}
	return this.children[sortedChildrenKeys[sortedChildrenKeys.length - 1]];
};

MibNode.prototype.isDescendant = function (address) {
	return MibNode.oidIsDescended(this.address, address);
};

MibNode.prototype.isAncestor = function (address) {
	return MibNode.oidIsDescended (address, this.address);
};

MibNode.prototype.getAncestorProvider = function () {
	if ( this.provider ) {
		return this;
	} else if ( ! this.parent ) {
		return null;
	} else {
		return this.parent.getAncestorProvider ();
	}
};

MibNode.prototype.getTableColumnFromInstanceNode = function () {
	if ( this.parent && this.parent.provider ) {
		return this.address[this.address.length - 1];
	} else if ( ! this.parent ) {
		return null;
	} else {
		return this.parent.getTableColumnFromInstanceNode ();
	}
};

MibNode.prototype.getConstraintsFromProvider = function () {
	var providerNode = this.getAncestorProvider ();
	if ( ! providerNode ) {
		return null;
	}
	var provider = providerNode.provider;
	if ( provider.type == MibProviderType.Scalar ) {
		return provider.constraints;
	} else if ( provider.type == MibProviderType.Table ) {
		var columnNumber = this.getTableColumnFromInstanceNode ();
		if ( ! columnNumber ) {
			return null;
		}
		var columnDefinition = provider.tableColumns.filter (column => column.number == columnNumber)[0];
		return columnDefinition ? columnDefinition.constraints : null;
	} else {
		return null;
	}
};

MibNode.prototype.setValue = function (typeFromSet, valueFromSet) {
	const constraints = this.getConstraintsFromProvider ();
	try {
		const castValue = ObjectTypeUtil.castSetValue (typeFromSet, valueFromSet, constraints);
		this.value = castValue;
		return true;
	} catch (error) {
		console.error ("Error setting value: " + error.message);
		return false;
	}

};

MibNode.prototype.getInstanceNodeForTableRow = function () {
	var childCount = Object.keys (this.children).length;
	if ( childCount == 0 ) {
		if ( this.value != null ) {
			return this;
		} else {
			return null;
		}
	} else if ( childCount == 1 ) {
		return this.children[0].getInstanceNodeForTableRow();
	} else if ( childCount > 1 ) {
		return null;
	}
};

MibNode.prototype.getInstanceNodeForTableRowIndex = function (index) {
	var childCount = Object.keys (this.children).length;
	var remainingIndex;

	if ( childCount == 0 ) {
		if ( this.value != null ) {
			return this;
		} else {
			// not found
			return null;
		}
	} else {
		if ( index.length == 0 ) {
			return this.getInstanceNodeForTableRow();
		} else {
			var nextChildIndexPart = index[0];
			if ( nextChildIndexPart == null ) {
				return null;
			}
			remainingIndex = index.slice(1);
			if ( this.children[nextChildIndexPart] ) {
				return this.children[nextChildIndexPart].getInstanceNodeForTableRowIndex(remainingIndex);
			} else {
				return null;
			}
		}
	}
};

MibNode.prototype.getInstanceNodesForColumn = function () {
	var columnNode = this;
	var instanceNode = this;
	var instanceNodes = [];

	while (instanceNode && ( instanceNode == columnNode || columnNode.isAncestor (instanceNode.address) ) ) {
		instanceNode = instanceNode.getNextInstanceNode ();
		if ( instanceNode && columnNode.isAncestor (instanceNode.address) ) {
			instanceNodes.push (instanceNode);
		}
	}
	return instanceNodes;
};

MibNode.prototype.getNextInstanceNode = function () {
	var siblingIndex;
	var childrenAddresses;

	var node = this;
	// If we start on a leaf node, we need next (right) sibling or upwards traversal first
	if ( ! node.children || Object.keys (node.children).length === 0 ) {
		while ( node ) {
			siblingIndex = node.address.slice(-1)[0];
			node = node.parent;
			if ( ! node ) {
				// End of MIB
				return null;
			} else {
				// Move to next sibling if we are not last child
				childrenAddresses = Object.keys (node.children).sort ( (a, b) => a - b);
				var siblingPosition = childrenAddresses.indexOf(siblingIndex.toString());
				if ( siblingPosition + 1 < childrenAddresses.length ) {
					node = node.children[childrenAddresses[siblingPosition + 1]];
					break;
				}
			}
		}
	}
	while ( node ) {
		// Return if at leaf
		if ( ! node.children || Object.keys (node.children).length === 0 ) {
			return node;
		}
		// Descend to first child if not at leaf
		childrenAddresses = Object.keys (node.children).sort ( (a, b) => a - b);
		node = node.children[childrenAddresses[0]];
		if ( ! node ) {
			// unexpected
			return null;
		}
	}
};

MibNode.prototype.delete = function () {
	if ( Object.keys (this.children) > 0 ) {
		throw new Error ("Cannot delete non-leaf MIB node");
	}
	var addressLastPart = this.address.slice(-1)[0];
	delete this.parent.children[addressLastPart];
	this.parent = null;
};

MibNode.prototype.pruneUpwards = function () {
	if ( ! this.parent ) {
		return;
	}
	if ( Object.keys (this.children).length == 0 ) {
		var lastAddressPart = this.address.splice(-1)[0].toString();
		delete this.parent.children[lastAddressPart];
		this.parent.pruneUpwards();
		this.parent = null;
	}
};

MibNode.prototype.dump = function (options) {
	var valueString;
	if ( ( ! options.leavesOnly || options.showProviders ) && this.provider ) {
		console.log (this.oid + " [" + MibProviderType[this.provider.type] + ": " + this.provider.name + "]");
	} else if ( ( ! options.leavesOnly ) || Object.keys (this.children).length == 0 ) {
		if ( this.value != null ) {
			valueString = " = ";
			valueString += options.showTypes ? ObjectType[this.valueType] + ": " : "";
			valueString += options.showValues ? this.value : "";
		} else {
			valueString = "";
		}
		console.log (this.oid + valueString);
	}
	for ( var node of Object.keys (this.children).sort ((a, b) => a - b)) {
		this.children[node].dump (options);
	}
};

MibNode.oidIsDescended = function (oid, ancestor) {
	var ancestorAddress = Mib.convertOidToAddress(ancestor);
	var address = Mib.convertOidToAddress(oid);
	var isAncestor = true;

	if (address.length <= ancestorAddress.length) {
		return false;
	}

	ancestorAddress.forEach (function (o, i) {
		if (address[i] !== ancestorAddress[i]) {
			isAncestor = false;
		}
	});

	return isAncestor;
};

var Mib = function (options) {
	var providersByOid;
	this.root = new MibNode ([], null);
	this.providerNodes = {};
	this.options = options;

	// this.providers will be modified throughout this code.
	// Keep this.providersByOid in sync with it
	providersByOid = this.providersByOid = {};
	this.providers = new Proxy({}, {
		set: function (target, key, value) {
			target[key] = value;
			providersByOid[value.oid] = value;
		},

		deleteProperty: function (target, key) {
			delete providersByOid[target[key].oid];
			delete target[key];
		}
	});
};

Mib.prototype.addNodesForOid = function (oidString) {
	var address = Mib.convertOidToAddress (oidString);
	return this.addNodesForAddress (address);
};

Mib.prototype.addNodesForAddress = function (address) {
	var node;
	var i;

	node = this.root;

	for (i = 0; i < address.length; i++) {
		if ( ! node.children.hasOwnProperty (address[i]) ) {
			node.children[address[i]] = new MibNode (address.slice(0, i + 1), node);
		}
		node = node.children[address[i]];
	}

	return node;
};

Mib.prototype.lookup = function (oid) {
	var address;

	address = Mib.convertOidToAddress (oid);
	return this.lookupAddress(address);
};

Mib.prototype.lookupAddress = function (address) {
	var i;
	var node;

	node = this.root;
	for (i = 0; i < address.length; i++) {
		if ( ! node.children.hasOwnProperty (address[i])) {
			return null;
		}
		node = node.children[address[i]];
	}

	return node;
};

Mib.prototype.getTreeNode = function (oid) {
	var address = Mib.convertOidToAddress (oid);
	var node;

	node = this.lookupAddress (address);
	// OID already on tree
	if ( node ) {
		return node;
	}

	while ( address.length > 0 ) {
		var last = address.pop ();
		var parent = this.lookupAddress (address);
		if ( parent ) {
			node = parent.findChildImmediatelyBefore (last);
			if ( !node )
				return parent;
			while ( true ) {
				// Find the last descendant
				var childrenAddresses = Object.keys (node.children).sort ( (a, b) => a - b);
				if ( childrenAddresses.length == 0 )
					return node;
				node = node.children[childrenAddresses[childrenAddresses.length - 1]];
			}
		}
	}
	return this.root;

};

Mib.prototype.getProviderNodeForInstance = function (instanceNode) {
	if ( instanceNode.provider ) {
		// throw new ReferenceError ("Instance node has provider which should never happen");
		return null;
	}
	return instanceNode.getAncestorProvider ();
};

Mib.prototype.addProviderToNode = function (provider) {
	const node = this.addNodesForOid (provider.oid);
	node.provider = provider;
	this.providerNodes[provider.name] = node;
	return node;
};

Mib.prototype.getColumnForColumnNumberFromTableProvider = function (provider, columnNumber) {
	const column = provider.tableColumns.find (column => column.number == columnNumber );
	return column;
};

Mib.prototype.getColumnForIndexEntryFromTableProvider = function (provider, indexEntry) {
	let column = null;
	if ( indexEntry.columnName ) {
		column = provider.tableColumns.filter (column => column.name == indexEntry.columnName )[0];
	} else if ( indexEntry.columnNumber !== undefined && indexEntry.columnNumber !== null  ) {
		column = provider.tableColumns.filter (column => column.number == indexEntry.columnNumber )[0];
	}
	return column;
};

Mib.prototype.populateIndexEntryFromColumn = function (localProvider, indexEntry, i) {
	var column = null;
	var tableProviders;
	if ( ! indexEntry.columnName && ! indexEntry.columnNumber ) {
		throw new Error ("Index entry " + i + ": does not have either a columnName or columnNumber");
	}
	if ( indexEntry.foreign ) {
		// Explicit foreign table is first to search
		column = this.getColumnForIndexEntryFromTableProvider (this.providers[indexEntry.foreign], indexEntry);
	} else {
		// If foreign table isn't given, search the local table next
		column = this.getColumnForIndexEntryFromTableProvider (localProvider, indexEntry);
		if ( ! column ) {
			// as a last resort, try to find the column in a foreign table
			tableProviders = Object.values(this.providers).
					filter ( prov => prov.type == MibProviderType.Table );
			for ( var provider of tableProviders ) {
				column = this.getColumnForIndexEntryFromTableProvider (provider, indexEntry);
				if ( column ) {
					indexEntry.foreign = provider.name;
					break;
				}
			}
		}
	}
	if ( ! column ) {
		throw new Error ("Could not find column for index entry with column " + indexEntry.columnName);
	}
	if ( indexEntry.columnName && indexEntry.columnName != column.name ) {
		throw new Error ("Index entry " + i + ": Calculated column name " + column.name +
				"does not match supplied column name " + indexEntry.columnName);
	}
	if ( indexEntry.columnNumber && indexEntry.columnNumber != column.number ) {
		throw new Error ("Index entry " + i + ": Calculated column number " + column.number +
				" does not match supplied column number " + indexEntry.columnNumber);
	}
	if ( ! indexEntry.columnName ) {
		indexEntry.columnName = column.name;
	}
	if ( ! indexEntry.columnNumber ) {
		indexEntry.columnNumber = column.number;
	}
	indexEntry.type = column.type;

};

Mib.prototype.registerProvider = function (provider) {
	this.providers[provider.name] = provider;
	if ( provider.type == MibProviderType.Scalar ) {
		if ( this.options?.addScalarDefaultsOnRegistration && provider.defVal ) {
			let scalarValue;
			// If the scalar has an enumeration, set the value to the enumeration number derived from the defVal name
			if ( provider.constraints?.enumeration ) {
				scalarValue = ObjectTypeUtil.getEnumerationNumberFromName (provider.constraints.enumeration, provider.defVal);
			} else {
				// Remove quotes from strings and resolve numeric strings to integers
				scalarValue = JSON.parse(provider.defVal);
			}
			this.setScalarValue (provider.name, scalarValue);
		}
	} else if ( provider.type == MibProviderType.Table ) {
		if ( provider.tableAugments ) {
			if ( provider.tableAugments == provider.name ) {
				throw new Error ("Table " + provider.name + " cannot augment itself");
			}
			var augmentProvider = this.providers[provider.tableAugments];
			if ( ! augmentProvider ) {
				throw new Error ("Cannot find base table " + provider.tableAugments + " to augment");
			}
			provider.tableIndex = JSON.parse(JSON.stringify(augmentProvider.tableIndex));
			provider.tableIndex.map (index => index.foreign = augmentProvider.name);
		} else {
			if ( ! provider.tableIndex ) {
				provider.tableIndex = [1]; // default to first column index
			}
			for ( var i = 0 ; i < provider.tableIndex.length ; i++ ) {
				var indexEntry = provider.tableIndex[i];
				if ( typeof indexEntry == 'number' ) {
					provider.tableIndex[i] = {
						columnNumber: indexEntry
					};
				} else if ( typeof indexEntry == 'string' ) {
					provider.tableIndex[i] = {
						columnName: indexEntry
					};
				}
				indexEntry = provider.tableIndex[i];
				this.populateIndexEntryFromColumn (provider, indexEntry, i);
			}
		}
	}
};

Mib.prototype.setScalarDefaultValue = function (name, value) {
	let provider = this.getProvider(name);
	provider.defVal = value;
};

Mib.prototype.setTableRowDefaultValues = function (name, values) {
	let provider = this.getProvider(name);
	let tc = provider.tableColumns;

	// We must be given an array of exactly the right number of columns
	if (values.length != tc.length) {
		throw new Error(`Incorrect values length: got ${values.length}; expected ${tc.length}`);
	}

	// Add defVal to each table column.
	tc.forEach((entry, i) => {
		if (typeof values[i] != "undefined") {
			entry.defVal = values[i];
		}
	});
};

Mib.prototype.setScalarRanges = function (name, ranges ) {
	let provider = this.getProvider(name);
	provider.constraints = { ranges };
};

Mib.prototype.setTableColumnRanges = function(name, column, ranges ) {
	let provider = this.getProvider(name);
	let tc = provider.tableColumns;
	tc[column].constraints = { ranges };
};

Mib.prototype.setScalarSizes = function (name, sizes ) {
	let provider = this.getProvider(name);
	provider.constraints = { sizes };
};

Mib.prototype.setTableColumnSizes = function(name, column, sizes ) {
	let provider = this.getProvider(name);
	let tc = provider.tableColumns;
	tc[column].constraints = { sizes };
};

Mib.prototype.registerProviders = function (providers) {
	for ( var provider of providers ) {
		this.registerProvider (provider);
	}
};

Mib.prototype.unregisterProvider = function (name) {
	var providerNode = this.providerNodes[name];
	if ( providerNode ) {
		var providerNodeParent = providerNode.parent;
		providerNode.delete();
		providerNodeParent.pruneUpwards();
		delete this.providerNodes[name];
	}
	delete this.providers[name];
};

Mib.prototype.getProvider = function (name) {
	return this.providers[name];
};

Mib.prototype.getProviders = function () {
	return this.providers;
};

Mib.prototype.dumpProviders = function () {
	var extraInfo;
	for ( var provider of Object.values(this.providers) ) {
		extraInfo = provider.type == MibProviderType.Scalar ? ObjectType[provider.scalarType] : "Columns = " + provider.tableColumns.length;
		console.log(MibProviderType[provider.type] + ": " + provider.name + " (" + provider.oid + "): " + extraInfo);
	}
};

Mib.prototype.getScalarValue = function (scalarName) {
	var providerNode = this.providerNodes[scalarName];
	if ( ! providerNode || ! providerNode.provider || providerNode.provider.type != MibProviderType.Scalar ) {
		throw new ReferenceError ("Failed to get node for registered MIB provider " + scalarName);
	}
	var instanceAddress = providerNode.address.concat ([0]);
	if ( ! this.lookup (instanceAddress) ) {
		throw new Error ("Failed created instance node for registered MIB provider " + scalarName);
	}
	var instanceNode = this.lookup (instanceAddress);
	return instanceNode.value;
};

Mib.prototype.setScalarValue = function (scalarName, newValue) {
	var providerNode;
	var instanceNode;
	var provider;

	if ( ! this.providers[scalarName] ) {
		throw new ReferenceError ("Provider " + scalarName + " not registered with this MIB");
	}

	providerNode = this.providerNodes[scalarName];
	if ( ! providerNode ) {
		providerNode = this.addProviderToNode (this.providers[scalarName]);
	}
	provider = providerNode.provider;
	if ( ! providerNode || ! provider || provider.type != MibProviderType.Scalar ) {
		throw new ReferenceError ("Could not find MIB node for registered provider " + scalarName);
	}
	var instanceAddress = providerNode.address.concat ([0]);
	instanceNode = this.lookup (instanceAddress);
	if ( ! instanceNode ) {
		this.addNodesForAddress (instanceAddress);
		instanceNode = this.lookup (instanceAddress);
		instanceNode.valueType = provider.scalarType;
	}
	const isValidValue = ObjectTypeUtil.isValid(instanceNode.valueType, newValue, provider.constraints);
	if ( ! isValidValue ) {
		throw new TypeError(`Invalid value for ${scalarName} of type ${instanceNode.valueType}: ${newValue}`);
	}
	instanceNode.value = newValue;
};

Mib.prototype.getProviderNodeForTable = function (table) {
	var providerNode;
	var provider;

	providerNode = this.providerNodes[table];
	if ( ! providerNode ) {
		throw new ReferenceError ("No MIB provider registered for " + table);
	}
	provider = providerNode.provider;
	if ( ! providerNode ) {
		throw new ReferenceError ("No MIB provider definition for registered provider " + table);
	}
	if ( provider.type != MibProviderType.Table ) {
		throw new TypeError ("Registered MIB provider " + table +
			" is not of the correct type (is type " + MibProviderType[provider.type] + ")");
	}
	return providerNode;
};

Mib.prototype.getOidAddressFromValue = function (value, indexPart) {
	var oidComponents;
	switch ( indexPart.type ) {
		case ObjectType.OID:
			oidComponents = value.split (".");
			break;
		case ObjectType.OctetString:
			if ( value instanceof Buffer ) {
				// Buffer
				oidComponents = Array.prototype.slice.call (value);
			} else {
				// string
				oidComponents = [...value].map (c => c.charCodeAt());
			}
			break;
		case ObjectType.IpAddress:
			return value.split (".");
		default:
			return [value];
	}
	if ( ! indexPart.implied && ! indexPart.length ) {
		oidComponents.unshift (oidComponents.length);
	}
	return oidComponents;
};

/* What is this empty function here for?
Mib.prototype.getValueFromOidAddress = function (oid, indexPart) {

};
*/

Mib.prototype.getTableRowInstanceFromRow = function (provider, row) {
	var rowIndex = [];
	var foreignColumnParts;
	var localColumnParts;
	var localColumnPosition;
	var oidArrayForValue;

	// foreign columns are first in row
	foreignColumnParts = provider.tableIndex.filter ( indexPart => indexPart.foreign );
	for ( var i = 0; i < foreignColumnParts.length ; i++ ) {
		//rowIndex.push (row[i]);
		oidArrayForValue = this.getOidAddressFromValue (row[i], foreignColumnParts[i]);
		rowIndex = rowIndex.concat (oidArrayForValue);
	}
	// then local columns
	localColumnParts = provider.tableIndex.filter ( indexPart => ! indexPart.foreign );
	for ( var localColumnPart of localColumnParts ) {
		localColumnPosition = provider.tableColumns.findIndex (column => column.number == localColumnPart.columnNumber);
		oidArrayForValue = this.getOidAddressFromValue (row[foreignColumnParts.length + localColumnPosition], localColumnPart);
		rowIndex = rowIndex.concat (oidArrayForValue);
	}
	return rowIndex;
};

Mib.getRowIndexFromOid = function (oid, index) {
	var addressRemaining = oid.split (".");
	var length = 0;
	var values = [];
	var value;
	for ( var indexPart of index ) {
		switch ( indexPart.type ) {
			case ObjectType.OID:
				if ( indexPart.implied ) {
					length = addressRemaining.length;
				} else {
					length = addressRemaining.shift ();
				}
				value = addressRemaining.splice (0, length);
				values.push (value.join ("."));
				break;
			case ObjectType.IpAddress:
				length = 4;
				value = addressRemaining.splice (0, length);
				values.push (value.join ("."));
				break;
			case ObjectType.OctetString:
				if ( indexPart.implied ) {
					length = addressRemaining.length;
				} else {
					length = addressRemaining.shift ();
				}
				value = addressRemaining.splice (0, length);
				value = value.map (c => String.fromCharCode(c)).join ("");
				values.push (value);
				break;
			default:
				values.push (parseInt (addressRemaining.shift ()) );
		}
	}
	return values;
};

Mib.prototype.getTableRowInstanceFromRowIndex = function (provider, rowIndex) {
	var rowIndexOid = [];
	var indexPart;
	var keyPart;
	for ( var i = 0; i < provider.tableIndex.length ; i++ ) {
		indexPart = provider.tableIndex[i];
		keyPart = rowIndex[i];
		rowIndexOid = rowIndexOid.concat (this.getOidAddressFromValue (keyPart, indexPart));
	}
	return rowIndexOid;
};

Mib.prototype.validateTableRow = function (table, row) {
	const provider = this.providers[table];
	const tableIndex = provider.tableIndex;
	const foreignIndexOffset = tableIndex.filter ( indexPart => indexPart.foreign ).length;
	for ( let i = 0; i < provider.tableColumns.length ; i++ ) {
		const providerColumn = provider.tableColumns[i];
		const isColumnIndex = tableIndex.some ( indexPart => indexPart.columnNumber == providerColumn.number );
		if ( ! isColumnIndex || ! (providerColumn.maxAccess === MaxAccess['not-accessible'] || providerColumn.maxAccess === MaxAccess['accessible-for-notify']) ) {
			const rowValueIndex = foreignIndexOffset + i;
			const isValidValue = ObjectTypeUtil.isValid(providerColumn.type, row[rowValueIndex], providerColumn.constraints);
			if ( ! isValidValue ) {
				throw new TypeError(`Invalid value for ${table} column ${providerColumn.name} (index ${rowValueIndex}): ${row[rowValueIndex]} (in row [${row}])`);
			}
		}
	}
};

Mib.prototype.addTableRow = function (table, row) {
	var providerNode;
	var provider;
	var instance = [];
	var instanceAddress;
	var instanceNode;
	var rowValueOffset;

	if ( ! this.providers[table] ) {
		throw new ReferenceError ("Provider " + table + " not registered with this MIB");
	}
	this.validateTableRow (table, row);
	if ( ! this.providerNodes[table] ) {
		this.addProviderToNode (this.providers[table]);
	}
	providerNode = this.getProviderNodeForTable (table);
	provider = providerNode.provider;
	rowValueOffset = provider.tableIndex.filter ( indexPart => indexPart.foreign ).length;
	instance = this.getTableRowInstanceFromRow (provider, row);
	for ( var i = 0; i < provider.tableColumns.length ; i++ ) {
		var column = provider.tableColumns[i];
		var isColumnIndex = provider.tableIndex.some ( indexPart => indexPart.columnNumber == column.number );
		// prevent not-accessible and accessible-for-notify index entries from being added as columns in the row
		if ( ! isColumnIndex || ! (column.maxAccess === MaxAccess['not-accessible'] || column.maxAccess === MaxAccess['accessible-for-notify']) ) {
			instanceAddress = providerNode.address.concat (column.number).concat (instance);
			this.addNodesForAddress (instanceAddress);
			instanceNode = this.lookup (instanceAddress);
			instanceNode.valueType = column.type;
			instanceNode.value = row[rowValueOffset + i];
		}
	}
};

Mib.prototype.getTableColumnDefinitions = function (table) {
	const provider = this.providers[table];
	return provider.tableColumns;
};

Mib.prototype.getTableColumnCells = function (table, columnNumber, includeInstances) {
	var provider = this.providers[table];
	var providerIndex = provider.tableIndex;
	var providerNode = this.getProviderNodeForTable (table);
	var columnNode = providerNode.children[columnNumber];
	if ( ! columnNode ) {
		return null;
	}
	var instanceNodes = columnNode.getInstanceNodesForColumn ();
	var instanceOid;
	var indexValues = [];
	var columnValues = [];

	for ( var instanceNode of instanceNodes ) {
		instanceOid = Mib.getSubOidFromBaseOid (instanceNode.oid, columnNode.oid);
		indexValues.push (Mib.getRowIndexFromOid (instanceOid, providerIndex));
		columnValues.push (instanceNode.value);
	}
	if ( includeInstances ) {
		return [ indexValues, columnValues ];
	} else {
		return columnValues;
	}
};

Mib.prototype.getTableRowCells = function (table, rowIndex) {
	var provider;
	var providerNode;
	var columnNode;
	var instanceAddress;
	var instanceNode;
	var row = [];
	var rowFound = false;

	provider = this.providers[table];
	providerNode = this.getProviderNodeForTable (table);
	instanceAddress = this.getTableRowInstanceFromRowIndex (provider, rowIndex);
	for ( var columnNumber of Object.keys (providerNode.children) ) {
		columnNode = providerNode.children[columnNumber];
		if ( columnNode ) {
			instanceNode = columnNode.getInstanceNodeForTableRowIndex (instanceAddress);
			if ( instanceNode ) {
				row.push (instanceNode.value);
				rowFound = true;
			} else {
				row.push (null);
			}
		} else {
			row.push (null);
		}
	}
	if ( rowFound ) {
		return row;
	} else {
		return null;
	}
};

Mib.prototype.getTableCells = function (table, byRows, includeInstances) {
	var providerNode;
	var column;
	var data = [];

	providerNode = this.getProviderNodeForTable (table);
	for ( var columnNumber of Object.keys (providerNode.children) ) {
		column = this.getTableColumnCells (table, columnNumber, includeInstances);
		if ( includeInstances ) {
			data.push (...column);
			includeInstances = false;
		} else {
			data.push (column);
		}
	}

	if ( byRows ) {
		return Object.keys (data[0]).map (function (c) {
			return data.map (function (r) { return r[c]; });
		});
	} else {
		return data;
	}

};

Mib.prototype.getTableSingleCell = function (table, columnNumber, rowIndex) {
	var provider;
	var providerNode;
	var instanceAddress;
	var columnNode;
	var instanceNode;

	provider = this.providers[table];
	providerNode = this.getProviderNodeForTable (table);
	instanceAddress = this.getTableRowInstanceFromRowIndex (provider, rowIndex);
	columnNode = providerNode.children[columnNumber];
	instanceNode = columnNode.getInstanceNodeForTableRowIndex (instanceAddress);
	return instanceNode.value;
};

Mib.prototype.setTableSingleCell = function (table, columnNumber, rowIndex, value) {
	const provider = this.providers[table];
	const providerNode = this.getProviderNodeForTable (table);
	const instanceAddress = this.getTableRowInstanceFromRowIndex (provider, rowIndex);
	const columnNode = providerNode.children[columnNumber];
	const instanceNode = columnNode.getInstanceNodeForTableRowIndex (instanceAddress);
	const providerColumn = this.getColumnForColumnNumberFromTableProvider (provider, columnNumber);
	const isValidValue = ObjectTypeUtil.isValid(instanceNode.valueType, value, providerColumn?.constraints);
	if ( ! isValidValue ) {
		throw new TypeError(`Invalid value for ${table} column ${columnNumber} of type ${instanceNode.valueType}: ${value}`);
	}
	instanceNode.value = value;
};

Mib.prototype.deleteTableRow = function (table, rowIndex) {
	var provider;
	var providerNode;
	var instanceAddress;
	var columnNode;
	var instanceNode;
	var instanceParentNode;

	provider = this.providers[table];
	providerNode = this.getProviderNodeForTable (table);
	instanceAddress = this.getTableRowInstanceFromRowIndex (provider, rowIndex);
	for ( var columnNumber of Object.keys (providerNode.children) ) {
		columnNode = providerNode.children[columnNumber];
		instanceNode = columnNode.getInstanceNodeForTableRowIndex (instanceAddress);
		if ( instanceNode ) {
			instanceParentNode = instanceNode.parent;
			instanceNode.delete();
			instanceParentNode.pruneUpwards();
		} else {
			throw new ReferenceError ("Cannot find row for index " + rowIndex + " at registered provider " + table);
		}
	}
	if ( Object.keys (this.providerNodes[table].children).length === 0 ) {
		delete this.providerNodes[table];
	}
	return true;
};

Mib.prototype.getAncestorProviderFromOid = function (oid) {
	const address = Mib.convertOidToAddress (oid);
	for ( let i = address.length - 1 ; i >= 0 ; i-- ) {
		const oidToCheck = address.slice(0, i).join('.');
		const provider = this.providersByOid[oidToCheck];
		if ( provider ) {
			return provider;
		}
	}
	return null;
};

Mib.prototype.dump = function (options) {
	if ( ! options ) {
		options = {};
	}
	var completedOptions = {
		leavesOnly: options.leavesOnly === undefined ? true : options.leavesOnly,
		showProviders: options.showProviders === undefined ? true : options.showProviders,
		showValues: options.showValues === undefined ? true : options.showValues,
		showTypes: options.showTypes === undefined ? true : options.showTypes
	};
	this.root.dump (completedOptions);
};

Mib.convertOidToAddress = function (oid) {
	var address;
	var oidArray;
	var i;

	if (typeof (oid) === 'object' && Array.isArray(oid)) {
		address = oid;
	} else if (typeof (oid) === 'string') {
		address = oid.split('.');
	} else {
		throw new TypeError('oid (string or array) is required');
	}

	if (address.length < 1)
		throw new RangeError('object identifier is too short');

	oidArray = [];
	for (i = 0; i < address.length; i++) {
		var n;

		if (address[i] === '')
			continue;

		if (address[i] === true || address[i] === false) {
			throw new TypeError('object identifier component ' +
				address[i] + ' is malformed');
		}

		n = Number(address[i]);

		if (isNaN(n)) {
			throw new TypeError('object identifier component ' +
				address[i] + ' is malformed');
		}
		if (n % 1 !== 0) {
			throw new TypeError('object identifier component ' +
				address[i] + ' is not an integer');
		}
		if (i === 0 && n > 2) {
			throw new RangeError('object identifier does not ' +
				'begin with 0, 1, or 2');
		}
		if (i === 1 && n > 39) {
			throw new RangeError('object identifier second ' +
				'component ' + n + ' exceeds encoding limit of 39');
		}
		if (n < 0) {
			throw new RangeError('object identifier component ' +
				address[i] + ' is negative');
		}
		if (n > MAX_SIGNED_INT32) {
			throw new RangeError('object identifier component ' +
				address[i] + ' is too large');
		}
		oidArray.push(n);
	}

	return oidArray;

};

Mib.getSubOidFromBaseOid = function (oid, base) {
	return oid.substring (base.length + 1);
};

Mib.create = function (options) {
	return new Mib (options);
};

var MibRequest = function (requestDefinition) {
	this.operation = requestDefinition.operation;
	this.address = Mib.convertOidToAddress (requestDefinition.oid);
	this.oid = this.address.join ('.');
	this.providerNode = requestDefinition.providerNode;
	this.provider = this.providerNode ? this.providerNode.provider : null;
	this.instanceNode = requestDefinition.instanceNode;
};

MibRequest.prototype.isScalar = function () {
	return this.providerNode && this.providerNode.provider &&
		this.providerNode.provider.type == MibProviderType.Scalar;
};

MibRequest.prototype.isTabular = function () {
	return this.providerNode && this.providerNode.provider &&
		this.providerNode.provider.type == MibProviderType.Table;
};

var Agent = function (options, callback, mib) {
	DEBUG |= options.debug;
	this.listener = new Listener (options, this);
	this.engine = new Engine ({
		engineID: options.engineID
	});
	this.authorizer = new Authorizer (options);
	this.callback = callback || function () {};
	const mibOptions = mib?.options || options?.mibOptions || {};
	this.mib = mib || new Mib (mibOptions);
	this.context = "";
	this.forwarder = new Forwarder (this.listener, this.callback);
};

Agent.prototype.getMib = function () {
	return this.mib;
};

Agent.prototype.setMib = function (mib) {
	this.mib = mib;
};

Agent.prototype.getAuthorizer = function () {
	return this.authorizer;
};

Agent.prototype.registerProvider = function (provider) {
	this.mib.registerProvider (provider);
};

Agent.prototype.registerProviders = function (providers) {
	this.mib.registerProviders (providers);
};

Agent.prototype.unregisterProvider = function (name) {
	this.mib.unregisterProvider (name);
};

Agent.prototype.getProvider = function (name) {
	return this.mib.getProvider (name);
};

Agent.prototype.getProviders = function () {
	return this.mib.getProviders ();
};

Agent.prototype.scalarReadCreateHandlerInternal = function (createRequest) {
	let provider = createRequest.provider;
	// If there's a default value specified...
	if ( provider && typeof provider.defVal != "undefined" ) {
		// ... then use it
		return provider.defVal;
	}

	// We don't have enough information to auto-create the scalar
	return undefined;
};

Agent.prototype.tableRowStatusHandlerInternal = function (createRequest) {
	let provider = createRequest.provider;
	let action = createRequest.action;
	let row = createRequest.row;
	let values = [];
	let missingDefVal = false;
	let rowIndexValues = Array.isArray( row ) ? row.slice(0) : [ row ];
	const tc = provider.tableColumns;

	tc.forEach(
		(columnInfo) => {
			let entries;

			// Index columns get successive values from the rowIndexValues array.
			// RowStatus columns get either "active" or "notInService" values.
			// Every other column requires a defVal.
			entries = provider.tableIndex.filter( entry => columnInfo.number === entry.columnNumber );
			if (entries.length > 0 ) {
				// It's an index column. Use the next index value
				values.push(rowIndexValues.shift());
			} else if ( columnInfo.rowStatus ) {
				// It's the RowStatus column. Retain the action value for now; replaced later
				values.push( RowStatus[action] );
			} else if ( "defVal" in columnInfo ) {
				// Neither index nor RowStatus column, so use the default value
				values.push( columnInfo.defVal );
			} else {
				// Default value was required but not found
				console.log("No defVal defined for column:", columnInfo);
				missingDefVal = true;
				values.push( undefined ); // just for debugging; never gets returned
			}
		}
	);

	// If a default value was missing, we can't auto-create the table row.
	// Otherwise, we're good to go: give 'em the column values.
	return missingDefVal ? undefined : values;
};

Agent.prototype.onMsg = function (socket, buffer, rinfo) {

	let message;

	try {
		message = Listener.processIncoming (buffer, this.authorizer, this.callback);
	} catch (error) {
		this.callback (new ProcessingError ("Failure to process incoming message", error, rinfo, buffer));
		return;
	}

	if ( ! message ) {
		return;
	}

	// SNMPv3 discovery
	if ( message.version == Version3 && message.pdu.type == PduType.GetRequest &&
			! message.hasAuthoritativeEngineID() && message.isReportable () ) {
		let reportMessage = message.createReportResponseMessage (this.engine, this.context);
		this.listener.send (reportMessage, rinfo, socket);
		return;
	}

	// Request processing
	debug (message.pdu);
	if ( message.pdu.contextName && message.pdu.contextName != "" ) {
		this.onProxyRequest (socket, message, rinfo);
	} else if ( message.pdu.type == PduType.GetRequest ) {
		this.getRequest (socket, message, rinfo);
	} else if ( message.pdu.type == PduType.SetRequest ) {
		this.setRequest (socket, message, rinfo);
	} else if ( message.pdu.type == PduType.GetNextRequest ) {
		this.getNextRequest (socket, message, rinfo);
	} else if ( message.pdu.type == PduType.GetBulkRequest ) {
		this.getBulkRequest (socket, message, rinfo);
	} else {
		this.callback (new RequestInvalidError ("Unexpected PDU type " +
			message.pdu.type + " (" + PduType[message.pdu.type] + ")"));
	}
};

Agent.prototype.tryCreateInstance = function (varbind, requestType) {
	var row;
	var column;
	var value;
	var subOid;
	var subAddr;
	var address;
	var fullAddress;
	var rowStatusColumn;
	var provider;
	var providersByOid = this.mib.providersByOid;
	var oid = varbind.oid;
	var createRequest;

	// Look for the provider.
	fullAddress = Mib.convertOidToAddress (oid);
	for ( address = fullAddress.slice(0) ; address.length > 0; address.pop() ) {
		subOid = address.join("."); // create an oid from the current address

		// Does this oid have a provider?
		provider = providersByOid[subOid];
		if (provider) {
			// Yup. Figure out what to do with it.
			// console.log(`FOUND MATCH TO ${oid}:\n`, providersByOid[subOid]);

			//
			// Scalar
			//
			if ( provider.type === MibProviderType.Scalar ) {

				// Does this provider support "read-create"?
				if ( provider.maxAccess != MaxAccess["read-create"] ) {
					// Nope. Nothing we can do to help 'em.
					return undefined;
				}

				// See if the provider says not to auto-create this scalar
				if ( provider.createHandler === null ) {
					return undefined;
				}

				// Call the provider-provided handler if available, or the default one if not
				createRequest = {
					provider: provider
				};
				value = ( provider.createHandler || this.scalarReadCreateHandlerInternal ) ( createRequest );
				if ( typeof value == "undefined" ) {
					// Handler said do not create instance
					return undefined;
				}

				// Ensure the value is of the correct type, and save it
				value = ObjectTypeUtil.castSetValue ( provider.scalarType, value );
				this.mib.setScalarValue ( provider.name, value );

				// Now there should be an instanceNode available.
				return {
					instanceNode: this.mib.lookup (oid),
					providerType: MibProviderType.Scalar
				};
			}

			//
			// Table
			//

			// This is where we would support "read-create" of table
			// columns. RFC2578 section 7.1.12.1, however, implies
			// that rows should be created only via use of the
			// RowStatus column. We'll therefore avoid creating rows
			// based solely on any other column's "read-create"
			// max-access value.

			//
			// RowStatus setter (actions)
			//
			subOid = Mib.getSubOidFromBaseOid (oid, provider.oid);
			subAddr = subOid.split(".");
			column = parseInt(subAddr.shift(), 10);
			row = Mib.getRowIndexFromOid(subAddr.join("."), provider.tableIndex);
			rowStatusColumn = provider.tableColumns.reduce( (acc, current) => current.rowStatus ? current.number : acc, null );

			if ( requestType === PduType.SetRequest &&
					typeof rowStatusColumn == "number" &&
					column === rowStatusColumn ) {

				if ( (varbind.value === RowStatus["createAndGo"] || varbind.value === RowStatus["createAndWait"]) &&
						provider.createHandler !== null ) {

					// The create handler will return an array
					// containing all table column values for the
					// table row to be added.
					createRequest = {
						provider: provider,
						action: RowStatus[varbind.value],
						row: row
					};
					value = ( provider.createHandler || this.tableRowStatusHandlerInternal )( createRequest );
					if ( typeof value == "undefined") {
						// Handler said do not create instance
						return undefined;
					}

					if (! Array.isArray( value ) ) {
						throw new Error("createHandler must return an array or undefined; got", value);
					}

					if ( value.length != provider.tableColumns.length ) {
						throw new Error("createHandler's returned array must contain a value for for each column" );
					}

					// Map each column's value to the appropriate type
					value = value.map( (v, i) => ObjectTypeUtil.castSetValue ( provider.tableColumns[i].type, v ) );

					// Add the table row
					this.mib.addTableRow ( provider.name, value );

					// Now there should be an instanceNode available.
					return {
						instanceNode: this.mib.lookup (oid),
						providerType: MibProviderType.Table,
						action: RowStatus[varbind.value],
						rowIndex: row,
						row: value
					};

				}
			}

			return undefined;
		}
	}

//	console.log(`NO MATCH TO ${oid}`);
	return undefined;
};

Agent.prototype.isAllowed = function (pduType, provider, instanceNode) {
	var column;
	var maxAccess;
	var columnEntry;

	if (provider.type === MibProviderType.Scalar) {
		// It's a scalar. We'll use the provider's maxAccess
		maxAccess = provider.maxAccess;
	} else {
		// It's a table column. Use that column's maxAccess.
		column = instanceNode.getTableColumnFromInstanceNode();

		// In the typical case, we could use (column - 1) to index
		// into tableColumns to get to the correct entry. There is no
		// guarantee, however, that column numbers in the OID are
		// necessarily consecutive; theoretically some could be
		// missing. We'll therefore play it safe and search for the
		// specified column entry.

		columnEntry = provider.tableColumns.find(entry => entry.number === column);
		maxAccess = columnEntry ? columnEntry.maxAccess || MaxAccess['not-accessible'] : MaxAccess['not-accessible'];
	}

	switch ( PduType[pduType] ) {
		case "SetRequest":
			// SetRequest requires at least read-write access
			return maxAccess >= MaxAccess["read-write"];

		case "GetRequest":
		case "GetNextRequest":
		case "GetBulkRequest":
			// GetRequests require at least read-only access
			return maxAccess >= MaxAccess["read-only"];

		default:
			// Disallow other pdu types
			return false;
	}
};

Agent.prototype.request = function (socket, requestMessage, rinfo) {
	var me = this;
	var varbindsCompleted = 0;
	var requestPdu = requestMessage.pdu;
	var varbindsLength = requestPdu.varbinds.length;
	var responsePdu = requestPdu.getResponsePduForRequest ();
	var mibRequests = [];
	var handlers = [];
	var createResult = [];
	var oldValues = [];
	var securityName = requestMessage.version == Version3 ? requestMessage.user.name : requestMessage.community;

	for ( let i = 0; i < requestPdu.varbinds.length; i++ ) {
		let instanceNode = this.mib.lookup (requestPdu.varbinds[i].oid);
		let providerNode;
		let rowStatusColumn;
		let getIcsHandler;

		// If we didn't find an instance node, see if we can
		// automatically create it, either because it has
		// "read-create" MAX-ACCESS, or because it's a RowStatus SET
		// indicating create.
		if ( ! instanceNode ) {
			createResult[i] = this.tryCreateInstance(requestPdu.varbinds[i], requestPdu.type);
			if ( createResult[i] ) {
				instanceNode = createResult[i].instanceNode;
			}
		}

		// workaround re-write of OIDs less than 4 digits due to asn1-ber length limitation
		if ( requestPdu.varbinds[i].oid.split('.').length < 4 ) {
			requestPdu.varbinds[i].oid = "1.3.6.1";
		}

		if ( ! instanceNode ) {
			mibRequests[i] = new MibRequest ({
				operation: requestPdu.type,
				oid: requestPdu.varbinds[i].oid
			});
			const ancestorProvider = this.mib.getAncestorProviderFromOid(requestPdu.varbinds[i].oid);
			if ( ancestorProvider ) {
				handlers[i] = function getNsiHandler (mibRequestForNsi) {
					mibRequestForNsi.done ({
						errorStatus: ErrorStatus.NoError,
						type: ObjectType.NoSuchInstance,
						value: null
					});
				};
			} else {
				handlers[i] = function getNsoHandler (mibRequestForNso) {
					mibRequestForNso.done ({
						errorStatus: ErrorStatus.NoError,
						type: ObjectType.NoSuchObject,
						value: null
					});
				};
			}
		} else {
			providerNode = this.mib.getProviderNodeForInstance (instanceNode);
			if ( ! providerNode || instanceNode.value === undefined ) {
				mibRequests[i] = new MibRequest ({
					operation: requestPdu.type,
					oid: requestPdu.varbinds[i].oid
				});
				handlers[i] = function getNsiHandler (mibRequestForNsi) {
					mibRequestForNsi.done ({
						errorStatus: ErrorStatus.NoError,
						type: ObjectType.NoSuchInstance,
						value: null
					});
				};
			} else if ( ! this.isAllowed(requestPdu.type, providerNode.provider, instanceNode ) ) {
				// requested access not allowed (by MAX-ACCESS)
				mibRequests[i] = new MibRequest ({
					operation: requestPdu.type,
					oid: requestPdu.varbinds[i].oid
				});
				handlers[i] = function getRanaHandler (mibRequestForRana) {
					mibRequestForRana.done ({
						errorStatus: ErrorStatus.NoAccess,
						type: ObjectType.Null,
						value: null
					});
				};
			} else if ( this.authorizer.getAccessControlModelType () == AccessControlModelType.Simple &&
					! this.authorizer.getAccessControlModel ().isAccessAllowed (requestMessage.version, securityName, requestMessage.pdu.type) ) {
				// Access control check
				mibRequests[i] = new MibRequest ({
					operation: requestPdu.type,
					oid: requestPdu.varbinds[i].oid
				});
				handlers[i] = function getAccessDeniedHandler (mibRequestForAccessDenied) {
					mibRequestForAccessDenied.done ({
						errorStatus: ErrorStatus.NoAccess,
						type: ObjectType.Null,
						value: null
					});
				};
			} else if ( requestPdu.type === PduType.SetRequest &&
					providerNode.provider.type == MibProviderType.Table &&
					typeof (rowStatusColumn = providerNode.provider.tableColumns.reduce(
								(acc, current) => current.rowStatus ? current.number : acc, null )) == "number" &&
					instanceNode.getTableColumnFromInstanceNode() === rowStatusColumn) {

				getIcsHandler = function (mibRequestForIcs) {
					mibRequestForIcs.done ({
						errorStatus: ErrorStatus.InconsistentValue,
						type: ObjectType.Null,
						value: null
					});
				};

				requestPdu.varbinds[i].requestValue = ObjectTypeUtil.castSetValue (requestPdu.varbinds[i].type, requestPdu.varbinds[i].value);
				switch ( requestPdu.varbinds[i].value ) {
					case RowStatus["active"]:
					case RowStatus["notInService"]:
						// Setting either of these states, when the
						// row already exists, is fine
						break;

					case RowStatus["destroy"]:
						// This case is handled later
						break;

					case RowStatus["createAndGo"]:
						// Valid if this was a new row creation, but now set to active
						if ( instanceNode.value === RowStatus["createAndGo"] ) {
							requestPdu.varbinds[i].value = RowStatus["active"];
						} else {
							// Row already existed
							mibRequests[i] = new MibRequest ({
								operation: requestPdu.type,
								oid: requestPdu.varbinds[i].oid
							});
							handlers[i] = getIcsHandler;
						}
						break;

					case RowStatus["createAndWait"]:
						// Valid if this was a new row creation, but now set to notInService
						if ( instanceNode.value === RowStatus["createAndWait"] ) {
							requestPdu.varbinds[i].value = RowStatus["notInService"];
						} else {
							// Row already existed
							mibRequests[i] = new MibRequest ({
								operation: requestPdu.type,
								oid: requestPdu.varbinds[i].oid
							});
							handlers[i] = getIcsHandler;
						}
						break;

					case RowStatus["notReady"]:
					default:
						// It's not ever legal to set the RowStatus to
						// any value but the six that are defined, and
						// it's not legal to change the state to
						// "notReady".
						//
						// The row already exists, as determined by
						// the fact that we have an instanceNode, so
						// we can not apply a create action to the
						// RowStatus column, as dictated RFC-2579.
						// (See the summary state table on Page 8
						// (inconsistent value)
						mibRequests[i] = new MibRequest ({
							operation: requestPdu.type,
							oid: requestPdu.varbinds[i].oid
						});
						handlers[i] = getIcsHandler;
						break;
				}
			}

			if ( requestPdu.type === PduType.SetRequest && ! createResult[i] ) {
				oldValues[i] = instanceNode.value;
			}

			if ( ! handlers[i] ) {
				mibRequests[i] = new MibRequest ({
					operation: requestPdu.type,
					providerNode: providerNode,
					instanceNode: instanceNode,
					oid: requestPdu.varbinds[i].oid
				});

				if ( requestPdu.type == PduType.SetRequest ) {
					mibRequests[i].setType = requestPdu.varbinds[i].type;
					mibRequests[i].setValue = requestPdu.varbinds[i].requestValue || requestPdu.varbinds[i].value;
				}
				handlers[i] = providerNode.provider.handler;
			}
		}

		(function (savedIndex) {
			let responseVarbind;
			mibRequests[savedIndex].done = function (error) {
				let rowIndex = null;
				let row = null;
				let deleted = false;
				let column = -1;
				responseVarbind = {
					oid: mibRequests[savedIndex].oid
				};
				if ( error ) {
					if ( (typeof responsePdu.errorStatus == "undefined" || responsePdu.errorStatus == ErrorStatus.NoError) && error.errorStatus != ErrorStatus.NoError ) {
						responsePdu.errorStatus = error.errorStatus;
						responsePdu.errorIndex = savedIndex + 1;
					}
					responseVarbind.type = error.type || ObjectType.Null;
					responseVarbind.value = error.value || null;
					//responseVarbind.errorStatus: error.errorStatus
					if ( error.errorStatus != ErrorStatus.NoError ) {
						responseVarbind.errorStatus = error.errorStatus;
					}
				} else {
					let provider = providerNode ? providerNode.provider : null;
					let providerName = provider ? provider.name : null;
					let subOid;
					let subAddr;
					if ( providerNode && providerNode.provider && providerNode.provider.type == MibProviderType.Table ) {
						column = instanceNode.getTableColumnFromInstanceNode();
						subOid = Mib.getSubOidFromBaseOid (instanceNode.oid, provider.oid);
						subAddr = subOid.split(".");
						subAddr.shift(); // shift off the column number, leaving the row index values
						rowIndex = Mib.getRowIndexFromOid( subAddr.join("."), provider.tableIndex );
						row = me.mib.getTableRowCells ( providerName, rowIndex );
					}
					if ( requestPdu.type == PduType.SetRequest ) {
						// Is this a RowStatus column with a value of 6 (delete)?
						let rowStatusColumn = provider.type == MibProviderType.Table
							? provider.tableColumns.reduce( (acc, current) => current.rowStatus ? current.number : acc, null )
							: null;
						if ( requestPdu.varbinds[savedIndex].value === RowStatus["destroy"] &&
							typeof rowStatusColumn == "number" &&
							column === rowStatusColumn ) {

							// Yup. Do the deletion.
							me.mib.deleteTableRow ( providerName, rowIndex );
							deleted = true;

							// This is going to return the prior state of the RowStatus column,
							// i.e., either "active" or "notInService". That feels wrong, but there
							// is no value we can set it to to indicate just-deleted. One would
							// think we could set it to "notReady", but that is explicitly defined
							// in RFC-2579 as "the conceptual row exists in the agent", which is
							// no longer the case now that we've deleted the row. We're not allowed
							// to ever return "destroy" as a status, so that doesn't give us an
							// option either.

						} else {
							// No special handling required. Just save the new value.
							const setResult = mibRequests[savedIndex].instanceNode.setValue (
								requestPdu.varbinds[savedIndex].type,
								requestPdu.varbinds[savedIndex].value
							);
							if ( ! setResult ) {
								if ( typeof responsePdu.errorStatus == "undefined" || responsePdu.errorStatus == ErrorStatus.NoError ) {
									responsePdu.errorStatus = ErrorStatus.WrongValue;
									responsePdu.errorIndex = savedIndex + 1;
								}
								responseVarbind.errorStatus = ErrorStatus.WrongValue;
							}
						}
					}
					if ( ( requestPdu.type == PduType.GetNextRequest || requestPdu.type == PduType.GetBulkRequest ) &&
							requestPdu.varbinds[savedIndex].type == ObjectType.EndOfMibView ) {
						responseVarbind.type = ObjectType.EndOfMibView;
					} else {
						responseVarbind.type = mibRequests[savedIndex].instanceNode.valueType;
					}
					responseVarbind.value = mibRequests[savedIndex].instanceNode.value;
					if ( responseVarbind.value === undefined || responseVarbind.value === null ) {
						responseVarbind.type = ObjectType.NoSuchInstance;
					}
				}
				if ( providerNode && providerNode.provider && providerNode.provider.name ) {
					responseVarbind.providerName = providerNode.provider.name;
				}
				if ( requestPdu.type == PduType.GetNextRequest || requestPdu.type == PduType.GetNextRequest ) {
					responseVarbind.previousOid = requestPdu.varbinds[savedIndex].previousOid;
				}
				if ( requestPdu.type == PduType.SetRequest ) {
					if ( oldValues[savedIndex] !== undefined ) {
						responseVarbind.oldValue = oldValues[savedIndex];
					}
					responseVarbind.requestType = requestPdu.varbinds[savedIndex].type;
					if ( requestPdu.varbinds[savedIndex].requestValue ) {
						responseVarbind.requestValue = ObjectTypeUtil.castSetValue (requestPdu.varbinds[savedIndex].type, requestPdu.varbinds[savedIndex].requestValue);
					} else {
						responseVarbind.requestValue = ObjectTypeUtil.castSetValue (requestPdu.varbinds[savedIndex].type, requestPdu.varbinds[savedIndex].value);
					}
				}
				if ( createResult[savedIndex] ) {
					responseVarbind.autoCreated = true;
				} else if ( deleted ) {
					responseVarbind.deleted = true;
				}
				if ( providerNode && providerNode.provider.type == MibProviderType.Table ) {
					responseVarbind.column = column;
					responseVarbind.columnPosition = providerNode.provider.tableColumns.findIndex(tc => tc.number == column);
					responseVarbind.rowIndex = rowIndex;
					if ( ! deleted && rowIndex ) {
						row = me.mib.getTableRowCells ( providerNode.provider.name, rowIndex );
					}
					responseVarbind.row = row;
				}
				me.setSingleVarbind (responsePdu, savedIndex, responseVarbind);
				if ( ++varbindsCompleted == varbindsLength) {
					me.sendResponse.call (me, socket, rinfo, requestMessage, responsePdu);
				}
			};
		})(i);
		if ( handlers[i] ) {
			handlers[i] (mibRequests[i]);
		} else {
			mibRequests[i].done ();
		}
	}
};

Agent.prototype.getRequest = function (socket, requestMessage, rinfo) {
	this.request (socket, requestMessage, rinfo);
};

Agent.prototype.setRequest = function (socket, requestMessage, rinfo) {
	this.request (socket, requestMessage, rinfo);
};

Agent.prototype.addGetNextVarbind = function (targetVarbinds, startOid) {
	var startNode;
	var getNextNode;

	try {
		startNode = this.mib.lookup (startOid);
	// eslint-disable-next-line no-unused-vars
	} catch ( error ) {
		startOid = '1.3.6.1';
		startNode = this.mib.lookup (startOid);
	}

	if ( ! startNode ) {
		// Off-tree start specified
		startNode = this.mib.getTreeNode (startOid);
	}
	getNextNode = startNode.getNextInstanceNode();
	if ( ! getNextNode ) {
		// End of MIB
		targetVarbinds.push ({
			previousOid: startOid,
			oid: startOid,
			type: ObjectType.EndOfMibView,
			value: null
		});
	} else {
		// Normal response
		targetVarbinds.push ({
			previousOid: startOid,
			oid: getNextNode.oid,
			type: getNextNode.valueType,
			value: getNextNode.value
		});
	}

	return getNextNode;
};

Agent.prototype.getNextRequest = function (socket, requestMessage, rinfo) {
	var requestPdu = requestMessage.pdu;
	var varbindsLength = requestPdu.varbinds.length;
	var getNextVarbinds = [];

	for (var i = 0 ; i < varbindsLength ; i++ ) {
		this.addGetNextVarbind (getNextVarbinds, requestPdu.varbinds[i].oid);
	}

	requestMessage.pdu.varbinds = getNextVarbinds;
	this.request (socket, requestMessage, rinfo);
};

Agent.prototype.getBulkRequest = function (socket, requestMessage, rinfo) {
	var requestPdu = requestMessage.pdu;
	var requestVarbinds = requestPdu.varbinds;
	var getBulkVarbinds = [];
	var startOid = [];
	var getNextNode;
	var endOfMib = false;

	for (var n = 0 ; n < Math.min (requestPdu.nonRepeaters, requestVarbinds.length) ; n++ ) {
		this.addGetNextVarbind (getBulkVarbinds, requestVarbinds[n].oid);
	}

	if ( requestPdu.nonRepeaters < requestVarbinds.length ) {

		for (var v = requestPdu.nonRepeaters ; v < requestVarbinds.length ; v++ ) {
			startOid.push (requestVarbinds[v].oid);
		}

		while ( getBulkVarbinds.length < requestPdu.maxRepetitions && ! endOfMib ) {
			for (var w = requestPdu.nonRepeaters ; w < requestVarbinds.length ; w++ ) {
				if (getBulkVarbinds.length < requestPdu.maxRepetitions ) {
					getNextNode = this.addGetNextVarbind (getBulkVarbinds, startOid[w - requestPdu.nonRepeaters]);
					if ( getNextNode ) {
						startOid[w - requestPdu.nonRepeaters] = getNextNode.oid;
						if ( getNextNode.type == ObjectType.EndOfMibView ) {
							endOfMib = true;
						}
					}
				}
			}
		}
	}

	requestMessage.pdu.varbinds = getBulkVarbinds;
	this.request (socket, requestMessage, rinfo);
};

Agent.prototype.setSingleVarbind = function (responsePdu, index, responseVarbind) {
	responsePdu.varbinds[index] = responseVarbind;
};

Agent.prototype.sendResponse = function (socket, rinfo, requestMessage, responsePdu) {
	var responseMessage = requestMessage.createResponseForRequest (responsePdu);
	this.listener.send (responseMessage, rinfo, socket);
	this.callback (null, Listener.formatCallbackData (responseMessage.pdu, rinfo) );
};

Agent.prototype.onProxyRequest = function (socket, message, rinfo) {
	var contextName = message.pdu.contextName;
	var proxy;
	var proxiedPduId;
	var proxiedUser;

	if ( message.version != Version3 ) {
		this.callback (new RequestFailedError ("Only SNMP version 3 contexts are supported"));
		return;
	}
	proxy = this.forwarder.getProxy (contextName);
	if ( ! proxy ) {
		this.callback (new RequestFailedError ("No proxy found for message received with context " + contextName));
		return;
	}
	if ( ! proxy.session.msgSecurityParameters ) {
		// Discovery required - but chaining not implemented from here yet
		proxy.session.sendV3Discovery (null, null, this.callback, {});
	} else {
		message.msgSecurityParameters = proxy.session.msgSecurityParameters;
		message.setAuthentication ( ! (proxy.user.level == SecurityLevel.noAuthNoPriv));
		message.setPrivacy (proxy.user.level == SecurityLevel.authPriv);
		proxiedUser = message.user;
		message.user = proxy.user;
		message.buffer = null;
		message.pdu.contextEngineID = proxy.session.msgSecurityParameters.msgAuthoritativeEngineID;
		message.pdu.contextName = "";
		proxiedPduId = message.pdu.id;
		message.pdu.id = _generateId ();
		var req = new Req (proxy.session, message, null, this.callback, {}, true);
		req.port = proxy.port;
		req.proxiedRinfo = rinfo;
		req.proxiedPduId = proxiedPduId;
		req.proxiedUser = proxiedUser;
		req.proxiedEngine = this.engine;
		req.proxiedSocket = socket;
		proxy.session.send (req);
	}
};

Agent.prototype.getForwarder = function () {
	return this.forwarder;
};

Agent.prototype.close = function (callback) {
	this.listener.close (callback);
};

Agent.create = function (options, callback, mib) {
	var agent = new Agent (options, callback, mib);
	agent.listener.startListening ();
	return agent;
};

var Forwarder = function (listener, callback) {
	this.proxies = {};
	this.listener = listener;
	this.callback = callback;
};

Forwarder.prototype.addProxy = function (proxy) {
	var options = {
		version: Version3,
		port: proxy.port,
		transport: proxy.transport
	};
	proxy.session = Session.createV3 (proxy.target, proxy.user, options);
	proxy.session.proxy = proxy;
	proxy.session.proxy.listener = this.listener;
	this.proxies[proxy.context] = proxy;
	proxy.session.sendV3Discovery (null, null, this.callback);
};

Forwarder.prototype.deleteProxy = function (proxyName) {
	var proxy = this.proxies[proxyName];

	if ( proxy && proxy.session ) {
		proxy.session.close ();
	}
	delete this.proxies[proxyName];
};

Forwarder.prototype.getProxy = function (proxyName) {
	return this.proxies[proxyName];
};

Forwarder.prototype.getProxies = function () {
	return this.proxies;
};

Forwarder.prototype.dumpProxies = function () {
	var dump = {};
	for ( var proxy of Object.values (this.proxies) ) {
		dump[proxy.context] = {
			context: proxy.context,
			target: proxy.target,
			user: proxy.user,
			port: proxy.port
		};
	}
	console.log (JSON.stringify (dump, null, 2));
};

var AgentXPdu = function () {
};

AgentXPdu.prototype.toBuffer = function () {
	var buffer = new smartbuffer.SmartBuffer();
	this.writeHeader (buffer);
	switch ( this.pduType ) {
		case AgentXPduType.Open:
			buffer.writeUInt32BE (this.timeout);
			AgentXPdu.writeOid (buffer, this.oid);
			AgentXPdu.writeOctetString (buffer, this.descr);
			break;
		case AgentXPduType.Close:
			buffer.writeUInt8 (5);  // reasonShutdown == 5
			buffer.writeUInt8 (0);  // 3 x reserved bytes
			buffer.writeUInt8 (0);
			buffer.writeUInt8 (0);
			break;
		case AgentXPduType.Register:
			buffer.writeUInt8 (this.timeout);
			buffer.writeUInt8 (this.priority);
			buffer.writeUInt8 (this.rangeSubid);
			buffer.writeUInt8 (0);
			AgentXPdu.writeOid (buffer, this.oid);
			break;
		case AgentXPduType.Unregister:
			buffer.writeUInt8 (0);  // reserved
			buffer.writeUInt8 (this.priority);
			buffer.writeUInt8 (this.rangeSubid);
			buffer.writeUInt8 (0);  // reserved
			AgentXPdu.writeOid (buffer, this.oid);
			break;
		case AgentXPduType.AddAgentCaps:
			AgentXPdu.writeOid (buffer, this.oid);
			AgentXPdu.writeOctetString (buffer, this.descr);
			break;
		case AgentXPduType.RemoveAgentCaps:
			AgentXPdu.writeOid (buffer, this.oid);
			break;
		case AgentXPduType.Notify:
			AgentXPdu.writeVarbinds (buffer, this.varbinds);
			break;
		case AgentXPduType.Ping:
			break;
		case AgentXPduType.Response:
			buffer.writeUInt32BE (this.sysUpTime);
			buffer.writeUInt16BE (this.error);
			buffer.writeUInt16BE (this.index);
			AgentXPdu.writeVarbinds (buffer, this.varbinds);
			break;
		default:
			// unknown PDU type - should never happen as we control these
	}
	buffer.writeUInt32BE (buffer.length - 20, 16);
	return buffer.toBuffer ();
};

AgentXPdu.prototype.writeHeader = function (buffer) {
	this.flags = this.flags | 0x10;  // set NETWORK_BYTE_ORDER

	buffer.writeUInt8 (1);  // h.version = 1
	buffer.writeUInt8 (this.pduType);
	buffer.writeUInt8 (this.flags);
	buffer.writeUInt8 (0);  // reserved byte
	buffer.writeUInt32BE (this.sessionID);
	buffer.writeUInt32BE (this.transactionID);
	buffer.writeUInt32BE (this.packetID);
	buffer.writeUInt32BE (0);
	return buffer;
};

AgentXPdu.prototype.readHeader = function (buffer) {
	this.version = buffer.readUInt8 ();
	this.pduType = buffer.readUInt8 ();
	this.flags = buffer.readUInt8 ();
	buffer.readUInt8 ();   // reserved byte
	this.sessionID = buffer.readUInt32BE ();
	this.transactionID = buffer.readUInt32BE ();
	this.packetID = buffer.readUInt32BE ();
	this.payloadLength = buffer.readUInt32BE ();
};

AgentXPdu.prototype.getResponsePduForRequest = function () {
	const responsePdu = AgentXPdu.createFromVariables({
		pduType: AgentXPduType.Response,
		sessionID: this.sessionID,
		transactionID: this.transactionID,
		packetID: this.packetID,
		sysUpTime: 0,
		error: 0,
		index: 0
	});
	return responsePdu;
};

AgentXPdu.createFromVariables = function (vars) {
	var pdu = new AgentXPdu ();
	pdu.flags = vars.flags ? vars.flags | 0x10 : 0x10;  // set NETWORK_BYTE_ORDER to big endian
	pdu.pduType = vars.pduType || AgentXPduType.Open;
	pdu.sessionID = vars.sessionID || 0;
	pdu.transactionID = vars.transactionID || 0;
	pdu.packetID = vars.packetID || ++AgentXPdu.packetID;
	switch ( pdu.pduType ) {
		case AgentXPduType.Open:
			pdu.timeout = vars.timeout || 0;
			pdu.oid = vars.oid || null;
			pdu.descr = vars.descr || null;
			break;
		case AgentXPduType.Close:
			break;
		case AgentXPduType.Register:
			pdu.timeout = vars.timeout || 0;
			pdu.oid = vars.oid || null;
			pdu.priority = vars.priority || 127;
			pdu.rangeSubid = vars.rangeSubid || 0;
			break;
		case AgentXPduType.Unregister:
			pdu.oid = vars.oid || null;
			pdu.priority = vars.priority || 127;
			pdu.rangeSubid = vars.rangeSubid || 0;
			break;
		case AgentXPduType.AddAgentCaps:
			pdu.oid = vars.oid;
			pdu.descr = vars.descr;
			break;
		case AgentXPduType.RemoveAgentCaps:
			pdu.oid = vars.oid;
			break;
		case AgentXPduType.Notify:
			pdu.varbinds = vars.varbinds;
			break;
		case AgentXPduType.Ping:
			break;
		case AgentXPduType.Response:
			pdu.sysUpTime = vars.sysUpTime || 0;
			pdu.error = vars.error || 0;
			pdu.index = vars.index || 0;
			pdu.varbinds = vars.varbinds || null;
			break;
		default:
			// unsupported PDU type - should never happen as we control these
			throw new RequestInvalidError ("Unknown PDU type '" + pdu.pduType
					+ "' in created PDU");

	}

	return pdu;
};

AgentXPdu.createFromBuffer = function (socketBuffer) {
	var pdu = new AgentXPdu ();

	var buffer = smartbuffer.SmartBuffer.fromBuffer (socketBuffer);
	pdu.readHeader (buffer);

	switch ( pdu.pduType ) {
		case AgentXPduType.Response:
			pdu.sysUpTime = buffer.readUInt32BE ();
			pdu.error = buffer.readUInt16BE ();
			pdu.index = buffer.readUInt16BE ();
			break;
		case AgentXPduType.Get:
		case AgentXPduType.GetNext:
			pdu.searchRangeList = AgentXPdu.readSearchRangeList (buffer, pdu.payloadLength);
			break;
		case AgentXPduType.GetBulk:
			pdu.nonRepeaters = buffer.readUInt16BE ();
			pdu.maxRepetitions = buffer.readUInt16BE ();
			pdu.searchRangeList = AgentXPdu.readSearchRangeList (buffer, pdu.payloadLength - 4);
			break;
		case AgentXPduType.TestSet:
			pdu.varbinds = AgentXPdu.readVarbinds (buffer, pdu.payloadLength);
			break;
		case AgentXPduType.CommitSet:
		case AgentXPduType.UndoSet:
		case AgentXPduType.CleanupSet:
			break;
		default:
			// Unknown PDU type - shouldn't happen as master agents shouldn't send administrative PDUs
			throw new RequestInvalidError ("Unknown PDU type '" + pdu.pduType
					+ "' in request");
	}
	return pdu;
};

AgentXPdu.writeOid = function (buffer, oid, include = 0) {
	var prefix;
	if ( oid ) {
		var address = oid.split ('.').map ( Number );
		if ( address.length >= 5 && address.slice (0, 4).join('.') == '1.3.6.1' ) {
			prefix = address[4];
			address = address.slice(5);
		} else {
			prefix = 0;
		}
		buffer.writeUInt8 (address.length);
		buffer.writeUInt8 (prefix);
		buffer.writeUInt8 (include);
		buffer.writeUInt8 (0);  // reserved
		for ( let addressPart of address ) {
			buffer.writeUInt32BE (addressPart);
		}
	} else {
		buffer.writeUInt32BE (0);  // row of zeros for null OID
	}
};

AgentXPdu.writeOctetString = function (buffer, octetString) {
	buffer.writeUInt32BE (octetString.length);
	buffer.writeString (octetString);
	var paddingOctets = ( 4 - octetString.length % 4 ) % 4;
	for ( let i = 0; i < paddingOctets ; i++ ) {
		buffer.writeUInt8 (0);
	}
};

AgentXPdu.writeVarBind = function (buffer, varbind) {
	buffer.writeUInt16BE (varbind.type);
	buffer.writeUInt16BE (0); // reserved
	AgentXPdu.writeOid (buffer, varbind.oid);

	if (varbind.type && varbind.oid) {

		switch (varbind.type) {
			case ObjectType.Integer: // also Integer32 (signed 32-bit)
				buffer.writeInt32BE (varbind.value);
				break;
			case ObjectType.Counter: // also Counter32
			case ObjectType.Gauge: // also Gauge32 & Unsigned32
			case ObjectType.TimeTicks:
				buffer.writeUInt32BE (varbind.value);
				break;
			case ObjectType.OctetString:
			case ObjectType.Opaque:
				AgentXPdu.writeOctetString (buffer, varbind.value);
				break;
			case ObjectType.OID:
				AgentXPdu.writeOid (buffer, varbind.value);
				break;
			case ObjectType.IpAddress:
				var bytes = varbind.value.split (".");
				if (bytes.length != 4)
					throw new RequestInvalidError ("Invalid IP address '"
							+ varbind.value + "'");
				buffer.writeOctetString (buffer, Buffer.from (bytes));
				break;
			case ObjectType.Counter64:
				buffer.writeUint64 (varbind.value);
				break;
			case ObjectType.Null:
			case ObjectType.EndOfMibView:
			case ObjectType.NoSuchObject:
			case ObjectType.NoSuchInstance:
				break;
			default:
				// Unknown data type - should never happen as the above covers all types in RFC 2741 Section 5.4
				throw new RequestInvalidError ("Unknown type '" + varbind.type
						+ "' in request");
		}
	}
};

AgentXPdu.writeVarbinds = function (buffer, varbinds) {
	if ( varbinds ) {
		for ( var i = 0; i < varbinds.length ; i++ ) {
			var varbind = varbinds[i];
			AgentXPdu.writeVarBind(buffer, varbind);
		}
	}
};

AgentXPdu.readOid = function (buffer) {
	var subidLength = buffer.readUInt8 ();
	var prefix = buffer.readUInt8 ();
	var include = buffer.readUInt8 ();
	buffer.readUInt8 ();  // reserved

	// Null OID check
	if ( subidLength == 0 && prefix == 0 && include == 0) {
		return null;
	}
	var address = [];
	if ( prefix == 0 ) {
		address = [];
	} else {
		address = [1, 3, 6, 1, prefix];
	}
	for ( let i = 0; i < subidLength; i++ ) {
		address.push (buffer.readUInt32BE ());
	}
	var oid = address.join ('.');
	return oid;
};

AgentXPdu.readSearchRange = function (buffer) {
	return {
		start: AgentXPdu.readOid (buffer),
		end: AgentXPdu.readOid (buffer)
	};
};

AgentXPdu.readSearchRangeList = function (buffer, payloadLength) {
	var bytesLeft = payloadLength;
	var bufferPosition = (buffer.readOffset + 1);
	var searchRangeList = [];
	while (bytesLeft > 0) {
		searchRangeList.push (AgentXPdu.readSearchRange (buffer));
		bytesLeft -= (buffer.readOffset + 1) - bufferPosition;
		bufferPosition = buffer.readOffset + 1;
	}
	return searchRangeList;
};

AgentXPdu.readOctetString = function (buffer) {
	var octetStringLength = buffer.readUInt32BE ();
	var paddingOctets = ( 4 - octetStringLength % 4 ) % 4;
	var octetString = buffer.readString (octetStringLength);
	buffer.readString (paddingOctets);
	return octetString;
};

AgentXPdu.readVarbind = function (buffer) {
	var vtype = buffer.readUInt16BE ();
	buffer.readUInt16BE ();  // reserved
	var oid = AgentXPdu.readOid (buffer);
	var value;

	switch (vtype) {
		case ObjectType.Integer:
		case ObjectType.Counter:
		case ObjectType.Gauge:
		case ObjectType.TimeTicks:
			value = buffer.readUInt32BE ();
			break;
		case ObjectType.OctetString:
		case ObjectType.IpAddress:
		case ObjectType.Opaque:
			value = AgentXPdu.readOctetString (buffer);
			break;
		case ObjectType.OID:
			value = AgentXPdu.readOid (buffer);
			break;
		case ObjectType.Counter64:
			value = readUint64 (buffer);
			break;
		case ObjectType.Null:
		case ObjectType.NoSuchObject:
		case ObjectType.NoSuchInstance:
		case ObjectType.EndOfMibView:
			value = null;
			break;
		default:
			// Unknown data type - should never happen as the above covers all types in RFC 2741 Section 5.4
			throw new RequestInvalidError ("Unknown type '" + vtype
				+ "' in varbind");
	}

	return {
		type: vtype,
		oid: oid,
		value: value
	};
};

AgentXPdu.readVarbinds = function (buffer, payloadLength) {
	var bytesLeft = payloadLength;
	var bufferPosition = (buffer.readOffset + 1);
	var varbindList = [];
	while (bytesLeft > 0) {
		varbindList.push (AgentXPdu.readVarbind (buffer));
		bytesLeft -= (buffer.readOffset + 1) - bufferPosition;
		bufferPosition = buffer.readOffset + 1;
	}
	return varbindList;
};

AgentXPdu.packetID = 1;

var Subagent = function (options) {
	DEBUG = options.debug;
	this.mib = options?.mib ?? new Mib (options?.mibOptions);
	this.master = options.master || 'localhost';
	this.masterPort = options.masterPort || 705;
	this.timeout = options.timeout || 0;
	this.descr = options.description || "Node net-snmp AgentX sub-agent";
	this.sessionID = 0;
	this.transactionID = 0;
	this.packetID = _generateId();
	this.requestPdus = {};
	this.setTransactions = {};
};

util.inherits (Subagent, events.EventEmitter);

Subagent.prototype.onClose = function () {
	this.emit ("close");
};

Subagent.prototype.onError = function (error) {
	this.emit ("error", error);
};

Subagent.prototype.getMib = function () {
	return this.mib;
};

Subagent.prototype.connectSocket = function () {
	var me = this;
	this.socket = new net.Socket ();
	this.socket.connect (this.masterPort, this.master, function () {
		debug ("Connected to '" + me.master + "' on port " + me.masterPort);
	});

	this.socket.on ("data", me.onMsg.bind (me));
	this.socket.on ("error", me.onError.bind (me));
	this.socket.on ("close", me.onClose.bind (me));
};

Subagent.prototype.open = function (callback) {
	var pdu = AgentXPdu.createFromVariables ({
		pduType: AgentXPduType.Open,
		timeout: this.timeout,
		oid: this.oid,
		descr: this.descr
	});
	this.sendPdu (pdu, callback);
};

Subagent.prototype.close = function (callback) {
	var pdu = AgentXPdu.createFromVariables ({
		pduType: AgentXPduType.Close,
		sessionID: this.sessionID
	});
	this.sendPdu (pdu, callback);
};

Subagent.prototype.registerProvider = function (provider, callback) {
	var pdu = AgentXPdu.createFromVariables ({
		pduType: AgentXPduType.Register,
		sessionID: this.sessionID,
		rangeSubid: 0,
		timeout: 5,
		priority: 127,
		oid: provider.oid
	});
	this.mib.registerProvider (provider);
	this.sendPdu (pdu, callback);
};

Subagent.prototype.unregisterProvider = function (name, callback) {
	var provider = this.getProvider (name);
	var pdu = AgentXPdu.createFromVariables ({
		pduType: AgentXPduType.Unregister,
		sessionID: this.sessionID,
		rangeSubid: 0,
		priority: 127,
		oid: provider.oid
	});
	this.mib.unregisterProvider (name);
	this.sendPdu (pdu, callback);
};

Subagent.prototype.registerProviders = function (providers, callback) {
	for (var provider of providers) {
		this.registerProvider (provider, callback);
	}
};

Subagent.prototype.getProvider = function (name) {
	return this.mib.getProvider (name);
};

Subagent.prototype.getProviders = function () {
	return this.mib.getProviders ();
};

Subagent.prototype.addAgentCaps = function (oid, descr, callback) {
	var pdu = AgentXPdu.createFromVariables ({
		pduType: AgentXPduType.AddAgentCaps,
		sessionID: this.sessionID,
		oid: oid,
		descr: descr
	});
	this.sendPdu (pdu, callback);
};

Subagent.prototype.removeAgentCaps = function (oid, callback) {
	var pdu = AgentXPdu.createFromVariables ({
		pduType: AgentXPduType.RemoveAgentCaps,
		sessionID: this.sessionID,
		oid: oid
	});
	this.sendPdu (pdu, callback);
};

Subagent.prototype.notify = function (typeOrOid, varbinds, callback) {
	varbinds = varbinds || [];

	if (typeof typeOrOid != "string") {
		typeOrOid = "1.3.6.1.6.3.1.1.5." + (typeOrOid + 1);
	}

	var pduVarbinds = [
		{
			oid: "1.3.6.1.2.1.1.3.0",
			type: ObjectType.TimeTicks,
			value: Math.floor (process.uptime () * 100)
		},
		{
			oid: "1.3.6.1.6.3.1.1.4.1.0",
			type: ObjectType.OID,
			value: typeOrOid
		}
	];

	pduVarbinds = pduVarbinds.concat (varbinds);

	var pdu = AgentXPdu.createFromVariables ({
		pduType: AgentXPduType.Notify,
		sessionID: this.sessionID,
		varbinds: pduVarbinds
	});
	this.sendPdu (pdu, callback);
};

Subagent.prototype.ping = function (callback) {
	var pdu = AgentXPdu.createFromVariables ({
		pduType: AgentXPduType.Ping,
		sessionID: this.sessionID
	});
	this.sendPdu (pdu, callback);
};

Subagent.prototype.sendPdu = function (pdu, callback) {
	debug ("Sending AgentX " + AgentXPduType[pdu.pduType] + " PDU");
	debug (pdu);
	var buffer = pdu.toBuffer ();
	this.socket.write (buffer);
	if ( pdu.pduType != AgentXPduType.Response && ! this.requestPdus[pdu.packetID] ) {
		pdu.callback = callback;
		this.requestPdus[pdu.packetID] = pdu;
	}

	// Possible timeout / retry mechanism?
	// var me = this;
	// pdu.timer = setTimeout (function () {
	// 	if (pdu.retries-- > 0) {
	// 		this.sendPdu (pdu);
	// 	} else {
	// 		delete me.requestPdus[pdu.packetID];
	// 		me.callback (new RequestTimedOutError (
	// 				"Request timed out"));
	// 	}
	// }, this.timeout);

};

Subagent.prototype.onMsg = function (buffer, rinfo) {
	var pdu = AgentXPdu.createFromBuffer (buffer);

	debug ("Received AgentX " + AgentXPduType[pdu.pduType] + " PDU");
	debug (pdu);

	switch (pdu.pduType) {
		case AgentXPduType.Response:
			this.response (pdu);
			break;
		case AgentXPduType.Get:
			this.getRequest (pdu);
			break;
		case AgentXPduType.GetNext:
			this.getNextRequest (pdu);
			break;
		case AgentXPduType.GetBulk:
			this.getBulkRequest (pdu);
			break;
		case AgentXPduType.TestSet:
			this.testSet (pdu);
			break;
		case AgentXPduType.CommitSet:
			this.commitSet (pdu);
			break;
		case AgentXPduType.UndoSet:
			this.undoSet (pdu);
			break;
		case AgentXPduType.CleanupSet:
			this.cleanupSet (pdu);
			break;
		default:
			// Unknown PDU type - shouldn't happen as master agents shouldn't send administrative PDUs
			throw new RequestInvalidError ("Unknown PDU type '" + pdu.pduType
					+ "' in request");
	}
};

Subagent.prototype.response = function (pdu) {
	var requestPdu = this.requestPdus[pdu.packetID];
	if (requestPdu) {
		delete this.requestPdus[pdu.packetID];
		// clearTimeout (pdu.timer);
		// delete pdu.timer;
		switch (requestPdu.pduType) {
			case AgentXPduType.Open:
				this.sessionID = pdu.sessionID;
				break;
			case AgentXPduType.Close:
				this.socket.end();
				break;
			case AgentXPduType.Register:
			case AgentXPduType.Unregister:
			case AgentXPduType.AddAgentCaps:
			case AgentXPduType.RemoveAgentCaps:
			case AgentXPduType.Notify:
			case AgentXPduType.Ping:
				break;
			default:
				// Response PDU for request type not handled
				throw new ResponseInvalidError ("Response PDU for type '" + requestPdu.pduType + "' not handled",
						ResponseInvalidCode.EResponseNotHandled);
		}
		if (requestPdu.callback) {
			requestPdu.callback(null, pdu);
		}
	} else {
		// unexpected Response PDU - has no matching request
		throw new ResponseInvalidError ("Unexpected Response PDU with packetID " + pdu.packetID,
				ResponseInvalidCode.EUnexpectedResponse);
	}
};

Subagent.prototype.request = function (pdu, requestVarbinds) {
	const me = this;
	const varbindsLength = requestVarbinds.length;
	const responseVarbinds = [];
	const responsePdu = pdu.getResponsePduForRequest ();
	let varbindsCompleted = 0;

	for ( let i = 0; i < varbindsLength; i++ ) {
		const requestVarbind = requestVarbinds[i];
		var instanceNode = this.mib.lookup (requestVarbind.oid);
		var providerNode;
		var mibRequest;
		var handler;
		var responseVarbindType;

		if ( ! instanceNode ) {
			mibRequest = new MibRequest ({
				operation: pdu.pduType,
				oid: requestVarbind.oid
			});
			handler = function getNsoHandler (mibRequestForNso) {
				mibRequestForNso.done ({
					errorStatus: ErrorStatus.NoError,
					errorIndex: 0,
					type: ObjectType.NoSuchObject,
					value: null
				});
			};
		} else {
			providerNode = this.mib.getProviderNodeForInstance (instanceNode);
			if ( ! providerNode ) {
				mibRequest = new MibRequest ({
					operation: pdu.pduType,
					oid: requestVarbind.oid
				});
				handler = function getNsiHandler (mibRequestForNsi) {
					mibRequestForNsi.done ({
						errorStatus: ErrorStatus.NoError,
						errorIndex: 0,
						type: ObjectType.NoSuchInstance,
						value: null
					});
				};
			} else {
				mibRequest = new MibRequest ({
					operation: pdu.pduType,
					providerNode: providerNode,
					instanceNode: instanceNode,
					oid: requestVarbind.oid
				});
				if ( pdu.pduType == AgentXPduType.TestSet ) {
					mibRequest.setType = requestVarbind.type;
					mibRequest.setValue = requestVarbind.value;
				}
				handler = providerNode.provider.handler;
			}
		}

		(function (savedIndex) {
			mibRequest.done = function (error) {
				let responseVarbind;
				if ( error ) {
					responseVarbind = {
						oid: mibRequest.oid,
						type: error.type || ObjectType.Null,
						value: error.value || null
					};
					if ( (typeof responsePdu.errorStatus == "undefined" || responsePdu.errorStatus == ErrorStatus.NoError) && error.errorStatus != ErrorStatus.NoError ) {
						responsePdu.error = error.errorStatus;
						responsePdu.index = savedIndex + 1;
					}
					if ( error.errorStatus != ErrorStatus.NoError ) {
						responseVarbind.errorStatus = error.errorStatus;
					}
				} else {
					if ( pdu.pduType == AgentXPduType.TestSet ) {
						// more tests?
					} else if ( pdu.pduType == AgentXPduType.CommitSet ) {
						me.setTransactions[pdu.transactionID].originalValue = mibRequest.instanceNode.value;
						mibRequest.instanceNode.value = requestVarbind.value;
					} else if ( pdu.pduType == AgentXPduType.UndoSet ) {
						mibRequest.instanceNode.value = me.setTransactions[pdu.transactionID].originalValue;
					}
					if ( ( pdu.pduType == AgentXPduType.GetNext || pdu.pduType == AgentXPduType.GetBulk ) &&
							requestVarbind.type == ObjectType.EndOfMibView ) {
						responseVarbindType = ObjectType.EndOfMibView;
					} else {
						responseVarbindType = mibRequest.instanceNode.valueType;
					}
					responseVarbind = {
						oid: mibRequest.oid,
						type: responseVarbindType,
						value: mibRequest.instanceNode.value
					};
				}
				responseVarbinds[savedIndex] = responseVarbind;
				if ( ++varbindsCompleted == varbindsLength) {
					if ( pdu.pduType == AgentXPduType.TestSet || pdu.pduType == AgentXPduType.CommitSet
							|| pdu.pduType == AgentXPduType.UndoSet) {
						me.sendResponse.call (me, responsePdu);
					} else {
						me.sendResponse.call (me, responsePdu, responseVarbinds);
					}
				}
			};
		})(i);
		if ( handler ) {
			handler (mibRequest);
		} else {
			mibRequest.done ();
		}
	}
};

Subagent.prototype.addGetNextVarbind = function (targetVarbinds, startOid) {
	var startNode;
	var getNextNode;

	try {
		startNode = this.mib.lookup (startOid);
	// eslint-disable-next-line no-unused-vars
	} catch ( error ) {
		startOid = '1.3.6.1';
		startNode = this.mib.lookup (startOid);
	}

	if ( ! startNode ) {
		// Off-tree start specified
		startNode = this.mib.getTreeNode (startOid);
	}
	getNextNode = startNode.getNextInstanceNode();
	if ( ! getNextNode ) {
		// End of MIB
		targetVarbinds.push ({
			oid: startOid,
			type: ObjectType.EndOfMibView,
			value: null
		});
	} else {
		// Normal response
		targetVarbinds.push ({
			oid: getNextNode.oid,
			type: getNextNode.valueType,
			value: getNextNode.value
		});
	}

	return getNextNode;
};

Subagent.prototype.getRequest = function (pdu) {
	var requestVarbinds = [];

	for ( var i = 0; i < pdu.searchRangeList.length; i++ ) {
		requestVarbinds.push ({
			oid: pdu.searchRangeList[i].start,
			value: null,
			type: null
		});
	}
	this.request (pdu, requestVarbinds);
};

Subagent.prototype.getNextRequest = function (pdu) {
	var getNextVarbinds = [];

	for (var i = 0 ; i < pdu.searchRangeList.length ; i++ ) {
		this.addGetNextVarbind (getNextVarbinds, pdu.searchRangeList[i].start);
	}

	this.request (pdu, getNextVarbinds);
};

Subagent.prototype.getBulkRequest = function (pdu) {
	var getBulkVarbinds = [];
	var startOid = [];
	var getNextNode;
	var endOfMib = false;

	for (var n = 0 ; n < pdu.nonRepeaters ; n++ ) {
		this.addGetNextVarbind (getBulkVarbinds, pdu.searchRangeList[n].start);
	}

	for (var v = pdu.nonRepeaters ; v < pdu.searchRangeList.length ; v++ ) {
		startOid.push (pdu.searchRangeList[v].oid);
	}

	while ( getBulkVarbinds.length < pdu.maxRepetitions && ! endOfMib ) {
		for (var w = pdu.nonRepeaters ; w < pdu.searchRangeList.length ; w++ ) {
			if (getBulkVarbinds.length < pdu.maxRepetitions ) {
				getNextNode = this.addGetNextVarbind (getBulkVarbinds, startOid[w - pdu.nonRepeaters]);
				if ( getNextNode ) {
					startOid[w - pdu.nonRepeaters] = getNextNode.oid;
					if ( getNextNode.type == ObjectType.EndOfMibView ) {
						endOfMib = true;
					}
				}
			}
		}
	}

	this.request (pdu, getBulkVarbinds);
};

Subagent.prototype.sendResponse = function (responsePdu, varbinds) {
	if ( varbinds ) {
		responsePdu.varbinds = varbinds;
	}
	this.sendPdu (responsePdu, null);
};

Subagent.prototype.testSet = function (setPdu) {
	this.setTransactions[setPdu.transactionID] = setPdu;
	this.request (setPdu, setPdu.varbinds);
};

Subagent.prototype.commitSet = function (setPdu) {
	if ( this.setTransactions[setPdu.transactionID] ) {
		this.request (setPdu, this.setTransactions[setPdu.transactionID].varbinds);
	} else {
		throw new RequestInvalidError ("Unexpected CommitSet PDU with transactionID " + setPdu.transactionID);
	}
};

Subagent.prototype.undoSet = function (setPdu) {
	if ( this.setTransactions[setPdu.transactionID] ) {
		this.request (setPdu, this.setTransactions[setPdu.transactionID].varbinds);
	} else {
		throw new RequestInvalidError ("Unexpected UndoSet PDU with transactionID " + setPdu.transactionID);
	}
};

Subagent.prototype.cleanupSet = function (setPdu) {
	if ( this.setTransactions[setPdu.transactionID] ) {
		delete this.setTransactions[setPdu.transactionID];
	} else {
		throw new RequestInvalidError ("Unexpected CleanupSet PDU with transactionID " + setPdu.transactionID);
	}
};

Subagent.create = function (options) {
	var subagent = new Subagent (options);
	subagent.connectSocket ();
	return subagent;
};


/*****************************************************************************
 ** Exports
 **/

exports.Session = Session;

exports.createSession = Session.create;
exports.createV3Session = Session.createV3;

exports.createReceiver = Receiver.create;
exports.createAgent = Agent.create;
exports.createModuleStore = ModuleStore.create;
exports.createSubagent = Subagent.create;
exports.createMib = Mib.create;

exports.isVarbindError = isVarbindError;
exports.varbindError = varbindError;

exports.Version1 = Version1;
exports.Version2c = Version2c;
exports.Version3 = Version3;
exports.Version = Version;

exports.ErrorStatus = ErrorStatus;
exports.TrapType = TrapType;
exports.ObjectType = ObjectType;
exports.PduType = PduType;
exports.AgentXPduType = AgentXPduType;
exports.MibProviderType = MibProviderType;
exports.SecurityLevel = SecurityLevel;
exports.AuthProtocols = AuthProtocols;
exports.PrivProtocols = PrivProtocols;
exports.AccessControlModelType = AccessControlModelType;
exports.AccessLevel = AccessLevel;
exports.MaxAccess = MaxAccess;
exports.RowStatus = RowStatus;
exports.OidFormat = OidFormat;

exports.ResponseInvalidCode = ResponseInvalidCode;
exports.ResponseInvalidError = ResponseInvalidError;
exports.RequestInvalidError = RequestInvalidError;
exports.RequestFailedError = RequestFailedError;
exports.RequestTimedOutError = RequestTimedOutError;

/**
 ** Added for testing
 **/
exports.ObjectParser = {
	readInt32: readInt32,
	readUint32: readUint32,
	readVarbindValue: readVarbindValue
};
exports.ObjectTypeUtil = ObjectTypeUtil;
exports.Authentication = Authentication;
exports.Encryption = Encryption;
