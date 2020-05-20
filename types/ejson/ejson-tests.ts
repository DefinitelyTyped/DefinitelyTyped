import {
  clone as importedClone,
  parse as importedParse,
  stringify as importedStringify,
  toJSONValue as importedToJSONValue,
  fromJSONValue as importedFromJSONValue,
  isBinary as importedIsBinary,
  newBinary as importedNewBinary,
  equals as importedEquals
} from "ejson";

function testImportedClone() {
  var obj: Object = {
    a: "a"
  };
  var retval: Object = importedClone(obj);

  var str: string = "as";
  var retval2: string = importedClone(str);
}

function testParse() {
  var str: string = '{a:"a"}';
  importedParse(str);
}

function testStringify() {
  var obj: any = {a:"a"};
  var retval: string = importedStringify(obj);
}

function testToJSONValue() {
  var obj: any = {a:"a"};
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
  var retval: boolean = importedEquals(a,b);
}
