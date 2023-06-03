import {
    Parser,
    columnIndexToLabel,
    columnLabelToIndex,
    extractLabel,
    rowIndexToLabel,
    rowLabelToIndex,
    toLabel,
} from 'hot-formula-parser';

// $ExpectType Parser
const parser = new Parser();

// $ExpectType { result: string | number | boolean | null; error: FormulaError | null; }
parser.parse('SUM(1, 2)');

// $ExpectType [Coordinate, Coordinate]
extractLabel('A1');

// $ExpectType string
toLabel({ index: 0, isAbsolute: false }, { index: 1 });

// $ExpectType string
columnIndexToLabel(1);

// $ExpectType number
columnLabelToIndex('AA');

// $ExpectType string
rowIndexToLabel(1);

// $ExpectType number
rowLabelToIndex('2');
