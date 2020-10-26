/// <reference types="node"/>

import path = require('path');
import Transformer = require('webidl2js');

const idlDir = path.resolve(__dirname, '../src');
const libDir = path.resolve(__dirname, '../lib');

const transformer = new Transformer({
    implSuffix: '-impl',

    processCEReactions(code) {
        this; // $ExpectType ProcessorContext
        this.addImport; // $ExpectType (specifier: string, property?: string | undefined) => string

        code; // $ExpectType string
        return code;
    },

    processHTMLConstructor(code) {
        this; // $ExpectType ProcessorContext
        this.addImport; // $ExpectType (specifier: string, property?: string | undefined) => string

        code; // $ExpectType string
        return code;
    },

    processReflect(idl, implName) {
        this; // $ExpectType ProcessorContext
        this.addImport; // $ExpectType (specifier: string, property?: string | undefined) => string

        idl; // $ExpectType AttributeMemberType
        implName; // $ExpectType string

        const reflectAttr = idl.extAttrs.find(attr => attr.name === 'Reflect');
        const attrName: string =
            (reflectAttr && reflectAttr.rhs && JSON.parse(reflectAttr.rhs.value as string)) || idl.name.toLowerCase();

        return {
            get: `${implName}.getAttributeNS(null, "${attrName}")`,
            set: `${implName}.setAttributeNS(null, "${attrName}", V)`,
        };
    },

    suppressErrors: false,
});

transformer.addSource(idlDir, libDir);
transformer.generate(libDir).catch(err => {
    console.error(err);
    process.exit(1);
});
