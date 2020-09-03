import * as JXON from 'jxon';

// test data
const defaultConfig = {
    valueKey: 'keyValue',
    attrPrefix: '_',
    parseValues: true,
};

// tests
JXON.config(defaultConfig);

JXON.stringToJs('xmlString');

JXON.jsToString(defaultConfig);
JXON.jsToString(defaultConfig, '1', 'true', defaultConfig);
JXON.stringify(defaultConfig);
JXON.stringify(defaultConfig, '1', 'true', defaultConfig);

JXON.stringToXml('');

JXON.jsToXml({}, '', '', {});
JXON.unbuild({}, '', '', {});

JXON.each({}, arg => arg, '');
