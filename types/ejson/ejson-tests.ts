import {
    addType as importedAddType,
    clone as importedClone,
    CustomType,
    equals as importedEquals,
    fromJSONValue as importedFromJSONValue,
    isBinary as importedIsBinary,
    newBinary as importedNewBinary,
    parse as importedParse,
    stringify as importedStringify,
    toJSONValue as importedToJSONValue,
} from 'ejson';

function testImportedClone() {
    var obj: Object = {
        a: 'a',
    };
    var retval: Object = importedClone(obj);

    var str: string = 'as';
    var retval2: string = importedClone(str);
}

function testParse() {
    var str: string = '{a:"a"}';
    importedParse(str);
}

function testStringify() {
    var obj: any = { a: 'a' };
    var retval: string = importedStringify(obj);
}

function testStringifyIndent() {
    var obj: any = { a: 'a' };
    var retval: string = importedStringify(obj, { indent: true });
}

function testStringifyCanonical() {
    var obj: any = { a: 'a' };
    var retval: string = importedStringify(obj, { canonical: true });
}

function testStringifyOptions() {
    var obj: any = { a: 'a' };
    var retval: string = importedStringify(obj, { canonical: true, indent: 'hello' });
}

function testToJSONValue() {
    var obj: any = { a: 'a' };
    var retval: string = importedToJSONValue(obj);
}

function testFromJSONValue() {
    var str: string = '{a:"a"}';
    importedFromJSONValue(str);
}

function testIsBinary() {
    var val: any = 'sasda';
    var retval: boolean = importedIsBinary(val);
}

function testNewBinary() {
    var retval: Uint8Array = importedNewBinary(3);
}

function testEquals() {
    var a: any;
    var b: any;
    var retval: boolean = importedEquals(a, b);
}

class MyInt implements CustomType {
    constructor(public value: number) {}

    typeName() {
        return 'MyInt';
    }

    toJSONValue() {
        return this.value.toString();
    }

    static fromJSONValue(jsonValue: unknown) {
        const value = parseInt(jsonValue as string, 10);
        return new MyInt(value);
    }

    clone(): CustomType {
        return new MyInt(this.value);
    }

    equals(other: CustomType): boolean {
        return this.value === (other as MyInt).value;
    }
}

function testAddType() {
    importedAddType('MyInt', MyInt.fromJSONValue);
}
