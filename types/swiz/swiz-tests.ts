
import swiz = require('swiz');

var chain: swiz.IChain;
var sw: swiz.Swiz;
var value: any;
var valueArr: any[];
var str: string;
var strArr: string[];
var exp: RegExp;
var num: number;
var bool: boolean;
var callback: Function;

var defs: swiz.struct.IObj[];
var opts: swiz.ISwizOptions;
var field: swiz.struct.IField;
var ser: swiz.ISerializable;
var fieldArr: swiz.struct.IField[];

var opts: swiz.ISwizOptions = {
    stripNulls: bool,
    stripSerializerType: bool,
    for: str
};

var obj: swiz.struct.IObj = {
    name: str,
    options: objOpts,
    singular: str,
    plural: str,
    fields: fieldArr
};

var field: swiz.struct.IField = {
    name: str,
    options: fieldOpts,
    src: str,
    singular: str,
    plural: str,
    desc: str,
    val: chain,
    attribute: bool,
    enumerated: bool,
    ignorePublic: bool,
    filterFrom: strArr,
    coerceTo: value
};

var objOpts: swiz.struct.IObjOptions = {
    singular: str,
    plural: str,
    fields: fieldArr
};

var fieldOpts: swiz.struct.IFieldOptions = {
    src: str,
    singular: str,
    plural: str,
    desc: str,
    val: chain,
    attribute: bool,
    enumerated: value,
    ignorePublic: bool,
    filterFrom: strArr,
    coerceTo: str
};

var valid: swiz.IValidator;
str = valid.name;
valid.func(value, value, callback);
str = valid.help;

sw = new swiz.Swiz(defs, opts);
sw.buildObject(value,  (err: any, result: any) => {

});
value = sw.buildObjectSync(value);
str = sw.serializeJson(value);
str = sw.serializeXml(value);
value = sw.deserializeXml(str);
sw.serialize(swiz.SERIALIZATION.SERIALIZATION_JSON, num, ser, (err: any, str: string) => {

});
sw.serializeForPagination(swiz.SERIALIZATION.SERIALIZATION_JSON, valueArr, value, (err: any, str: string) => {

});
sw.deserialize(swiz.SERIALIZATION.SERIALIZATION_JSON, num, str, (err: any, result: any) => {

});
field = sw.getFieldDefinition(str, str);

// some of the chain API
chain = swiz.chain();

num = chain.getValidatorPos(str);
num = chain.hasValidator(str);

valid = chain.getValidatorAtPos(num);
chain = chain.isUnique();
chain = chain.toUnique();
chain = chain.notIPBlacklisted();
chain = chain.isCIDR();
chain = chain.isEmail();
chain = chain.isUrl();
chain = chain.isAddressPair();
chain = chain.isIP();
chain = chain.isIPv4();
chain = chain.isIPv6();
chain = chain.isHostnameOrIp();
chain = chain.isAllowedFQDNOrIP();
chain = chain.isAllowedFQDNOrIP(strArr);
chain = chain.isHostname();
chain = chain.isAlpha();
chain = chain.isAlphanumeric();
chain = chain.isNumeric();
chain = chain.isInt();
chain = chain.isLowercase();
chain = chain.isUppercase();
chain = chain.isDecimal();
chain = chain.isFloat();
chain = chain.notNull();
chain = chain.isNull();
chain = chain.notEmpty();
chain = chain.equals(value);
chain = chain.contains(value);
chain = chain.notContains(value);
chain = chain.notIn(valueArr);
chain = chain.notIn(valueArr, bool);
chain = chain.regex(exp);
chain = chain.regex(str);
chain = chain.regex(str, str);
chain = chain.is(str);
chain = chain.is(str, str);
chain = chain.notRegex(exp);
chain = chain.notRegex(str);
chain = chain.notRegex(str, str);
chain = chain.not(str, str);
chain = chain.len(num);
chain = chain.len(num, num);
chain = chain.numItems(num, num);
chain = chain.toFloat();
chain = chain.toInt();
chain = chain.toBoolean();
chain = chain.toBooleanStrict();
chain = chain.entityDecode();
chain = chain.entityEncode();
chain = chain.trim();
chain = chain.trim(str);
chain = chain.trim();
chain = chain.trim(str);
chain = chain.ltrim();
chain = chain.ltrim(str);
chain = chain.rtrim(str);
chain = chain.ifNull(str);
chain = chain.xss();
chain = chain.xss(bool);
chain = chain.enumerated(value);
chain = chain.inArray(valueArr);
chain = chain.isString();
chain = chain.isBoolean();
chain = chain.range(value, value);
chain = chain.optional();
chain = chain.isPort();
chain = chain.isV1UUID();
chain = chain.immutable();
chain = chain.updateRequired();
chain = chain.isArray(chain);
chain = chain.isHash(chain, chain);
chain = chain.rename(str);
chain = chain.custom(str);
