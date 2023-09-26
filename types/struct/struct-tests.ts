import cstruct, { Struct } from "struct";

interface Fields {
    dwMagic: number;
    dwType: number;
    dwFrom: number;
    dwTo: number;
    dwArg1: number;
    dwArg2: number;
    dwMsgLen: number;
}

interface UDimensionalArray {
    fooStructArray: Fields[][];
    bazStructArray: Fields[][];
}

interface UArrayCharsntEncoding {
    items: string[];
}

const fooStruct = cstruct<Fields>()
    .word32Ube("dwMagic")
    .word32Ube("dwType")
    .word32Ube("dwFrom")
    .word32Ube("dwTo")
    .word32Ube("dwArg1")
    .word32Ube("dwArg2")
    .word32Ube("dwMsgLen")
    .allocate();

const bazStruct = new Struct<Fields>()
    .word32Ube("dwMagic")
    .word32Ube("dwType")
    .word32Ube("dwFrom")
    .word32Ube("dwTo")
    .word32Ube("dwArg1")
    .word32Ube("dwArg2")
    .word32Ube("dwMsgLen")
    .allocate();

const dimensionalArray = cstruct<UDimensionalArray>()
    .array("fooStructArray", 4, "array", 4, fooStruct)
    .array("bazStructArray", 4, "array", 4, bazStruct)
    .allocate();

const arrayCharsntEncoding = cstruct<UArrayCharsntEncoding>()
    .array("items", 4, "charsnt", 4, "latin1")
    .allocate();
