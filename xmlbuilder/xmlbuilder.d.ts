declare class XMLDocType {
    clone(): XMLDocType;
    element(name, value): XMLDocType;
    attList(elementName, attributeName, attributeType, defaultValueType, defaultValue): XMLDocType;
    entity(name, value): XMLDocType;
    pEntity(name, value): XMLDocType;
    notation(name, value): XMLDocType;
    cdata(value): XMLDocType;
    comment(value): XMLDocType;
    instruction(target, value): XMLDocType;
    root(): XMLDocType;
    document(): any;
    toString(options, level): string;

    ele(name, value): XMLDocType;
    att(elementName, attributeName, attributeType, defaultValueType, defaultValue): XMLDocType;
    ent(name, value): XMLDocType;
    pent(name, value): XMLDocType;
    not(name, value): XMLDocType;
    dat(value): XMLDocType;
    com(value): XMLDocType;
    ins(target, value): XMLDocType;
    up(): XMLDocType;
    doc(): any;
}

declare class XMLNode {
    element(name, attributes, text): XMLNode;
    ele(name, attributes, text): XMLNode;
    insertBefore(name, attributes, text): XMLNode;
    insertAfter(name, attributes, text): XMLNode;
    remove(): XMLNode;
    node(name, attributes, text): XMLNode;
    text(value): XMLNode;
    cdata(value): XMLNode;
    comment(value): XMLNode;
    raw(value): XMLNode;
    declaration(version, encoding, standalone): XMLNode;
    doctype(pubID, sysID): XMLDocType;
    up(): XMLNode;
    root(): XMLNode;
    document(): any;
    end(options): string;
    prev(): XMLNode;
    next(): XMLNode;
    nod(name, attributes, text): XMLNode;
    txt(value): XMLNode;
    dat(value): XMLNode;
    com(value): XMLNode;
    doc(value): XMLNode;
    dec(version, encoding, standalone): XMLNode;
    dtd(pubID, sysID): XMLDocType;
    e(name, attributes, text): XMLNode;
    n(name, attributes, text): XMLNode;
    t(value): XMLNode;
    d(value): XMLNode;
    c(value): XMLNode;
    r(value): XMLNode;
    u(value): XMLNode;
}

declare class XMLElement extends XMLNode {
    clone(): XMLElement;
    attribute(name: string, value: any): XMLElement;
    att(name: string, value: any): XMLElement;
    removeAttribute(name: string): XMLElement;
    instruction(target, value): XMLElement;
    ins(target, value): XMLElement;
    a(name, value): XMLElement;
    i(target, value): XMLElement;
    toString(options?, level?): string;
}

interface XMLBuilderStatic {
    create(name: string, xmldec?: Object, doctype?: string, options?: Object): XMLElement;
}

declare module 'xmlbuilder' {
    export = XMLBuilderStatic;
}
