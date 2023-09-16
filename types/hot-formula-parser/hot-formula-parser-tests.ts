import {
    columnIndexToLabel,
    columnLabelToIndex,
    error,
    extractLabel,
    Parser,
    rowIndexToLabel,
    rowLabelToIndex,
    toLabel,
} from "hot-formula-parser/index.mjs";

import p = require("hot-formula-parser");

// $ExpectType Parser
const parser = new Parser();

// $ExpectType { result: string | number | boolean | null; error: FormulaErrorId | null; }
parser.parse("SUM(1, 2)");

// $ExpectType Parser
parser.setFunction("YIELD_5", _ => 5);

// $ExpectType (params: unknown) => unknown
parser.getFunction("YIELD_5");

// $ExpectType Parser
parser.setVariable("FOO", 42);

// $ExpectType unknown
parser.getVariable("FOO");

// $ExpectType [Coordinate, Coordinate]
extractLabel("A1");

// $ExpectType string
toLabel({ index: 0, isAbsolute: false }, { index: 1 });

// $ExpectType string
columnIndexToLabel(1);

// $ExpectType number
columnLabelToIndex("AA");

// $ExpectType string
rowIndexToLabel(1);

// $ExpectType number
rowLabelToIndex("2");

// $ExpectType FormulaErrorId | null
error("#DIV/0!");

// $ExpectType FormulaErrorId | null
error("DIV/0");

// $ExpectType Parser
const cjsParser = new p.Parser();

// $ExpectType { result: string | number | boolean | null; error: FormulaErrorId | null; }
cjsParser.parse("SUM(1, 2)");

// $ExpectType Parser
cjsParser.setFunction("YIELD_5", _ => 5);

// $ExpectType (params: unknown) => unknown
cjsParser.getFunction("YIELD_5");

// $ExpectType Parser
cjsParser.setVariable("FOO", 42);

// $ExpectType unknown
cjsParser.getVariable("FOO");

// $ExpectType [Coordinate, Coordinate]
p.extractLabel("A1");

// $ExpectType string
p.toLabel({ index: 0, isAbsolute: false }, { index: 1 });

// $ExpectType string
p.columnIndexToLabel(1);

// $ExpectType number
p.columnLabelToIndex("AA");

// $ExpectType string
p.rowIndexToLabel(1);

// $ExpectType number
p.rowLabelToIndex("2");

// $ExpectType FormulaErrorId | null
p.error("#DIV/0!");

// $ExpectType FormulaErrorId | null
p.error("DIV/0");
