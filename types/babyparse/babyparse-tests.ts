
import * as Baby from "babyparse";

var RECORD_SEP = String.fromCharCode(30);
var UNIT_SEP = String.fromCharCode(31);

interface ParserTestExpectedResult {
    data: any[];
    errors: any[];
}

interface ParserTestCompareResult {
    data: ParserTestPassFail;
    errors: ParserTestPassFail;
}

interface ParserTestPassFail {
    passed: boolean;
}

interface ParserTest {
    description: string;
    input: string;
    expected: ParserTestExpectedResult;
    notes?: string;
    config?: BabyParse.ParseConfig;
}
// Tests for the core parser using new Baby.Parser().parse() (CSV to JSON)
var CORE_PARSER_TESTS: ParserTest[] = [
    {
        description: "One row",
        input: 'A,b,c',
        expected: {
            data: [['A', 'b', 'c']],
            errors: []
        }
    },
    {
        description: "Two rows",
        input: 'A,b,c\nd,E,f',
        expected: {
            data: [['A', 'b', 'c'], ['d', 'E', 'f']],
            errors: []
        }
    },
    {
        description: "Three rows",
        input: 'A,b,c\nd,E,f\nG,h,i',
        expected: {
            data: [['A', 'b', 'c'], ['d', 'E', 'f'], ['G', 'h', 'i']],
            errors: []
        }
    },
    {
        description: "Whitespace at edges of unquoted field",
        input: 'a,  b ,c',
        notes: "Extra whitespace should graciously be preserved",
        expected: {
            data: [['a', '  b ', 'c']],
            errors: []
        }
    },
    {
        description: "Quoted field",
        input: 'A,"B",C',
        expected: {
            data: [['A', 'B', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field with extra whitespace on edges",
        input: 'A," B  ",C',
        expected: {
            data: [['A', ' B  ', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field with delimiter",
        input: 'A,"B,B",C',
        expected: {
            data: [['A', 'B,B', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field with line break",
        input: 'A,"B\nB",C',
        expected: {
            data: [['A', 'B\nB', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted fields with line breaks",
        input: 'A,"B\nB","C\nC\nC"',
        expected: {
            data: [['A', 'B\nB', 'C\nC\nC']],
            errors: []
        }
    },
    {
        description: "Quoted fields at end of row with delimiter and line break",
        input: 'a,b,"c,c\nc"\nd,e,f',
        expected: {
            data: [['a', 'b', 'c,c\nc'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Quoted field with escaped quotes",
        input: 'A,"B""B""B",C',
        expected: {
            data: [['A', 'B"B"B', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field with escaped quotes at boundaries",
        input: 'A,"""B""",C',
        expected: {
            data: [['A', '"B"', 'C']],
            errors: []
        }
    },
    {
        description: "Unquoted field with quotes at end of field",
        notes: "The quotes character is misplaced, but shouldn't generate an error or break the parser",
        input: 'A,B",C',
        expected: {
            data: [['A', 'B"', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field with quotes around delimiter",
        input: 'A,""",""",C',
        notes: "For a boundary to exist immediately before the quotes, we must not already be in quotes",
        expected: {
            data: [['A', '","', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field with quotes on right side of delimiter",
        input: 'A,",""",C',
        notes: "Similar to the test above but with quotes only after the comma",
        expected: {
            data: [['A', ',"', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field with quotes on left side of delimiter",
        input: 'A,""",",C',
        notes: "Similar to the test above but with quotes only before the comma",
        expected: {
            data: [['A', '",', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field with 5 quotes in a row and a delimiter in there, too",
        input: '"1","cnonce="""",nc=""""","2"',
        notes: "Actual input reported in issue #121",
        expected: {
            data: [['1', 'cnonce="",nc=""', '2']],
            errors: []
        }
    },
    {
        description: "Quoted field with whitespace around quotes",
        input: 'A, "B" ,C',
        notes: "The quotes must be immediately adjacent to the delimiter to indicate a quoted field",
        expected: {
            data: [['A', ' "B" ', 'C']],
            errors: []
        }
    },
    {
        description: "Misplaced quotes in data, not as opening quotes",
        input: 'A,B "B",C',
        notes: "The input is technically malformed, but this syntax should not cause an error",
        expected: {
            data: [['A', 'B "B"', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field has no closing quote",
        input: 'a,"b,c\nd,e,f',
        expected: {
            data: [['a', 'b,c\nd,e,f']],
            errors: [{
                "type": "Quotes",
                "code": "MissingQuotes",
                "message": "Quoted field unterminated",
                "row": 0,
                "index": 3
            }]
        }
    },
    {
        description: "Line starts with quoted field",
        input: 'a,b,c\n"d",e,f',
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Line ends with quoted field",
        input: 'a,b,c\nd,e,f\n"g","h","i"\n"j","k","l"',
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l']],
            errors: []
        }
    },
    {
        description: "Quoted field at end of row (but not at EOF) has quotes",
        input: 'a,b,"c""c"""\nd,e,f',
        expected: {
            data: [['a', 'b', 'c"c"'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Multiple consecutive empty fields",
        input: 'a,b,,,c,d\n,,e,,,f',
        expected: {
            data: [['a', 'b', '', '', 'c', 'd'], ['', '', 'e', '', '', 'f']],
            errors: []
        }
    },
    {
        description: "Empty input string",
        input: '',
        expected: {
            data: [],
            errors: []
        }
    },
    {
        description: "Input is just the delimiter (2 empty fields)",
        input: ',',
        expected: {
            data: [['', '']],
            errors: []
        }
    },
    {
        description: "Input is just empty fields",
        input: ',,\n,,,',
        expected: {
            data: [['', '', ''], ['', '', '', '']],
            errors: []
        }
    },
    {
        description: "Input is just a string (a single field)",
        input: 'Abc def',
        expected: {
            data: [['Abc def']],
            errors: []
        }
    },
    {
        description: "Commented line at beginning",
        input: '# Comment!\na,b,c',
        config: { comments: true },
        expected: {
            data: [['a', 'b', 'c']],
            errors: []
        }
    },
    {
        description: "Commented line in middle",
        input: 'a,b,c\n# Comment\nd,e,f',
        config: { comments: true },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Commented line at end",
        input: 'a,true,false\n# Comment',
        config: { comments: true },
        expected: {
            data: [['a', 'true', 'false']],
            errors: []
        }
    },
    {
        description: "Two comment lines consecutively",
        input: 'a,b,c\n#comment1\n#comment2\nd,e,f',
        config: { comments: true },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Two comment lines consecutively at end of file",
        input: 'a,b,c\n#comment1\n#comment2',
        config: { comments: true },
        expected: {
            data: [['a', 'b', 'c']],
            errors: []
        }
    },
    {
        description: "Three comment lines consecutively at beginning of file",
        input: '#comment1\n#comment2\n#comment3\na,b,c',
        config: { comments: true },
        expected: {
            data: [['a', 'b', 'c']],
            errors: []
        }
    },
    {
        description: "Entire file is comment lines",
        input: '#comment1\n#comment2\n#comment3',
        config: { comments: true },
        expected: {
            data: [],
            errors: []
        }
    },
    // {
    //     description: "Comment with non-default character",
    //     input: 'a,b,c\n!Comment goes here\nd,e,f',
    //     config: { comments: '!' },
    //     expected: {
    //         data: [['a', 'b', 'c'], ['d', 'e', 'f']],
    //         errors: []
    //     }
    // },
    // {
    //     description: "Bad comments value specified",
    //     notes: "Should silently disable comment parsing",
    //     input: 'a,b,c\n5comment\nd,e,f',
    //     config: { comments: 5 },
    //     expected: {
    //         data: [['a', 'b', 'c'], ['5comment'], ['d', 'e', 'f']],
    //         errors: []
    //     }
    // },
    // {
    //     description: "Multi-character comment string",
    //     input: 'a,b,c\n=N(Comment)\nd,e,f',
    //     config: { comments: "=N(" },
    //     expected: {
    //         data: [['a', 'b', 'c'], ['d', 'e', 'f']],
    //         errors: []
    //     }
    // },
    {
        description: "Input with only a commented line",
        input: '#commented line',
        config: { comments: true, delimiter: ',' },
        expected: {
            data: [],
            errors: []
        }
    },
    {
        description: "Input with only a commented line and blank line after",
        input: '#commented line\n',
        config: { comments: true, delimiter: ',' },
        expected: {
            data: [['']],
            errors: []
        }
    },
    {
        description: "Input with only a commented line, without comments enabled",
        input: '#commented line',
        config: { delimiter: ',' },
        expected: {
            data: [['#commented line']],
            errors: []
        }
    },
    {
        description: "Input without comments with line starting with whitespace",
        input: 'a\n b\nc',
        config: { delimiter: ',' },
        notes: "\" \" == false, but \" \" !== false, so === comparison is required",
        expected: {
            data: [['a'], [' b'], ['c']],
            errors: []
        }
    },
    {
        description: "Multiple rows, one column (no delimiter found)",
        input: 'a\nb\nc\nd\ne',
        expected: {
            data: [['a'], ['b'], ['c'], ['d'], ['e']],
            errors: []
        }
    },
    {
        description: "One column input with empty fields",
        input: 'a\nb\n\n\nc\nd\ne\n',
        expected: {
            data: [['a'], ['b'], [''], [''], ['c'], ['d'], ['e'], ['']],
            errors: []
        }
    },
    {
        description: "Fast mode, basic",
        input: 'a,b,c\nd,e,f',
        config: { fastMode: true },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    // {
    //     description: "Fast mode with comments",
    //     input: '// Commented line\na,b,c',
    //     config: { fastMode: true, comments: "//" },
    //     expected: {
    //         data: [['a', 'b', 'c']],
    //         errors: []
    //     }
    // },
    {
        description: "Fast mode with preview",
        input: 'a,b,c\nd,e,f\nh,j,i\n',
        config: { fastMode: true, preview: 2 },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Fast mode with blank line at end",
        input: 'a,b,c\n',
        config: { fastMode: true },
        expected: {
            data: [['a', 'b', 'c'], ['']],
            errors: []
        }
    }
];


// Tests for Baby.parse() function -- high-level wrapped parser (CSV to JSON)
var PARSE_TESTS: ParserTest[] = [
    {
        description: "Two rows, just \\r",
        input: 'A,b,c\rd,E,f',
        expected: {
            data: [['A', 'b', 'c'], ['d', 'E', 'f']],
            errors: []
        }
    },
    {
        description: "Two rows, \\r\\n",
        input: 'A,b,c\r\nd,E,f',
        expected: {
            data: [['A', 'b', 'c'], ['d', 'E', 'f']],
            errors: []
        }
    },
    {
        description: "Quoted field with \\r\\n",
        input: 'A,"B\r\nB",C',
        expected: {
            data: [['A', 'B\r\nB', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field with \\r",
        input: 'A,"B\rB",C',
        expected: {
            data: [['A', 'B\rB', 'C']],
            errors: []
        }
    },
    {
        description: "Quoted field with \\n",
        input: 'A,"B\nB",C',
        expected: {
            data: [['A', 'B\nB', 'C']],
            errors: []
        }
    },
    {
        description: "Header row with one row of data",
        input: 'A,B,C\r\na,b,c',
        config: { header: true },
        expected: {
            data: [{ "A": "a", "B": "b", "C": "c" }],
            errors: []
        }
    },
    {
        description: "Header row only",
        input: 'A,B,C',
        config: { header: true },
        expected: {
            data: [],
            errors: []
        }
    },
    {
        description: "Row with too few fields",
        input: 'A,B,C\r\na,b',
        config: { header: true },
        expected: {
            data: [{ "A": "a", "B": "b" }],
            errors: [{
                "type": "FieldMismatch",
                "code": "TooFewFields",
                "message": "Too few fields: expected 3 fields but parsed 2",
                "row": 0
            }]
        }
    },
    {
        description: "Row with too many fields",
        input: 'A,B,C\r\na,b,c,d,e\r\nf,g,h',
        config: { header: true },
        expected: {
            data: [{ "A": "a", "B": "b", "C": "c", "__parsed_extra": ["d", "e"] }, { "A": "f", "B": "g", "C": "h" }],
            errors: [{
                "type": "FieldMismatch",
                "code": "TooManyFields",
                "message": "Too many fields: expected 3 fields but parsed 5",
                "row": 0
            }]
        }
    },
    {
        description: "Row with enough fields but blank field at end",
        input: 'A,B,C\r\na,b,',
        config: { header: true },
        expected: {
            data: [{ "A": "a", "B": "b", "C": "" }],
            errors: []
        }
    },
    {
        description: "Tab delimiter",
        input: 'a\tb\tc\r\nd\te\tf',
        config: { delimiter: "\t" },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Pipe delimiter",
        input: 'a|b|c\r\nd|e|f',
        config: { delimiter: "|" },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "ASCII 30 delimiter",
        input: 'a' + RECORD_SEP + 'b' + RECORD_SEP + 'c\r\nd' + RECORD_SEP + 'e' + RECORD_SEP + 'f',
        config: { delimiter: RECORD_SEP },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "ASCII 31 delimiter",
        input: 'a' + UNIT_SEP + 'b' + UNIT_SEP + 'c\r\nd' + UNIT_SEP + 'e' + UNIT_SEP + 'f',
        config: { delimiter: UNIT_SEP },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Bad delimiter",
        input: 'a,b,c',
        config: { delimiter: "DELIM" },
        notes: "Should silently default to comma",
        expected: {
            data: [['a', 'b', 'c']],
            errors: []
        }
    },
    {
        description: "Dynamic typing converts numeric literals",
        input: '1,2.2,1e3\r\n-4,-4.5,-4e-5\r\n-,5a,5-2',
        config: { dynamicTyping: true },
        expected: {
            data: [[1, 2.2, 1000], [-4, -4.5, -0.00004], ["-", "5a", "5-2"]],
            errors: []
        }
    },
    {
        description: "Dynamic typing converts boolean literals",
        input: 'true,false,T,F,TRUE,False',
        config: { dynamicTyping: true },
        expected: {
            data: [[true, false, "T", "F", "TRUE", "False"]],
            errors: []
        }
    },
    {
        description: "Dynamic typing doesn't convert other types",
        input: 'A,B,C\r\nundefined,null,[\r\nvar,float,if',
        config: { dynamicTyping: true },
        expected: {
            data: [["A", "B", "C"], ["undefined", "null", "["], ["var", "float", "if"]],
            errors: []
        }
    },
    {
        description: "Blank line at beginning",
        input: '\r\na,b,c\r\nd,e,f',
        config: { newline: '\r\n' },
        expected: {
            data: [[''], ['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Blank line in middle",
        input: 'a,b,c\r\n\r\nd,e,f',
        config: { newline: '\r\n' },
        expected: {
            data: [['a', 'b', 'c'], [''], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Blank lines at end",
        input: 'a,b,c\nd,e,f\n\n',
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f'], [''], ['']],
            errors: []
        }
    },
    {
        description: "Blank line in middle with whitespace",
        input: 'a,b,c\r\n \r\nd,e,f',
        expected: {
            data: [['a', 'b', 'c'], [" "], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "First field of a line is empty",
        input: 'a,b,c\r\n,e,f',
        expected: {
            data: [['a', 'b', 'c'], ['', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Last field of a line is empty",
        input: 'a,b,\r\nd,e,f',
        expected: {
            data: [['a', 'b', ''], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Other fields are empty",
        input: 'a,,c\r\n,,',
        expected: {
            data: [['a', '', 'c'], ['', '', '']],
            errors: []
        }
    },
    {
        description: "Empty input string",
        input: '',
        expected: {
            data: [],
            errors: [{
                "type": "Delimiter",
                "code": "UndetectableDelimiter",
                "message": "Unable to auto-detect delimiting character; defaulted to ','"
            }]
        }
    },
    {
        description: "Input is just the delimiter (2 empty fields)",
        input: ',',
        expected: {
            data: [['', '']],
            errors: []
        }
    },
    {
        description: "Input is just a string (a single field)",
        input: 'Abc def',
        expected: {
            data: [['Abc def']],
            errors: [
                {
                    "type": "Delimiter",
                    "code": "UndetectableDelimiter",
                    "message": "Unable to auto-detect delimiting character; defaulted to ','"
                }
            ]
        }
    },
    {
        description: "Preview 0 rows should default to parsing all",
        input: 'a,b,c\r\nd,e,f\r\ng,h,i',
        config: { preview: 0 },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']],
            errors: []
        }
    },
    {
        description: "Preview 1 row",
        input: 'a,b,c\r\nd,e,f\r\ng,h,i',
        config: { preview: 1 },
        expected: {
            data: [['a', 'b', 'c']],
            errors: []
        }
    },
    {
        description: "Preview 2 rows",
        input: 'a,b,c\r\nd,e,f\r\ng,h,i',
        config: { preview: 2 },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Preview all (3) rows",
        input: 'a,b,c\r\nd,e,f\r\ng,h,i',
        config: { preview: 3 },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']],
            errors: []
        }
    },
    {
        description: "Preview more rows than input has",
        input: 'a,b,c\r\nd,e,f\r\ng,h,i',
        config: { preview: 4 },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']],
            errors: []
        }
    },
    {
        description: "Preview should count rows, not lines",
        input: 'a,b,c\r\nd,e,"f\r\nf",g,h,i',
        config: { preview: 2 },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f\r\nf', 'g', 'h', 'i']],
            errors: []
        }
    },
    {
        description: "Preview with header row",
        notes: "Preview is defined to be number of rows of input not including header row",
        input: 'a,b,c\r\nd,e,f\r\ng,h,i\r\nj,k,l',
        config: { header: true, preview: 2 },
        expected: {
            data: [{ "a": "d", "b": "e", "c": "f" }, { "a": "g", "b": "h", "c": "i" }],
            errors: []
        }
    },
    {
        description: "Empty lines",
        input: '\na,b,c\n\nd,e,f\n\n',
        config: { delimiter: ',' },
        expected: {
            data: [[''], ['a', 'b', 'c'], [''], ['d', 'e', 'f'], [''], ['']],
            errors: []
        }
    },
    {
        description: "Skip empty lines",
        input: 'a,b,c\n\nd,e,f',
        config: { skipEmptyLines: true },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Skip empty lines, with newline at end of input",
        input: 'a,b,c\r\n\r\nd,e,f\r\n',
        config: { skipEmptyLines: true },
        expected: {
            data: [['a', 'b', 'c'], ['d', 'e', 'f']],
            errors: []
        }
    },
    {
        description: "Skip empty lines, with empty input",
        input: '',
        config: { skipEmptyLines: true },
        expected: {
            data: [],
            errors: [
                {
                    "type": "Delimiter",
                    "code": "UndetectableDelimiter",
                    "message": "Unable to auto-detect delimiting character; defaulted to ','"
                }
            ]
        }
    },
    {
        description: "Skip empty lines, with first line only whitespace",
        notes: "A line must be absolutely empty to be considered empty",
        input: ' \na,b,c',
        config: { skipEmptyLines: true, delimiter: ',' },
        expected: {
            data: [[" "], ['a', 'b', 'c']],
            errors: []
        }
    }
];

interface UnparserTest {
    description: string;
    input: any;
    expected: string;
    notes?: string;
    config?: BabyParse.UnparseConfig;
}

// Tests for Baby.unparse() function (JSON to CSV)
var UNPARSE_TESTS:UnparserTest[] = [
    {
        description: "A simple row",
        notes: "Comma should be default delimiter",
        input: [['A', 'b', 'c']],
        expected: 'A,b,c'
    },
    {
        description: "Two rows",
        input: [['A', 'b', 'c'], ['d', 'E', 'f']],
        expected: 'A,b,c\r\nd,E,f'
    },
    {
        description: "Data with quotes",
        input: [['a', '"b"', 'c'], ['"d"', 'e', 'f']],
        expected: 'a,"""b""",c\r\n"""d""",e,f'
    },
    {
        description: "Data with newlines",
        input: [['a', 'b\nb', 'c'], ['d', 'e', 'f\r\nf']],
        expected: 'a,"b\nb",c\r\nd,e,"f\r\nf"'
    },
    {
        description: "Array of objects (header row)",
        input: [{ "Col1": "a", "Col2": "b", "Col3": "c" }, { "Col1": "d", "Col2": "e", "Col3": "f" }],
        expected: 'Col1,Col2,Col3\r\na,b,c\r\nd,e,f'
    },
    {
        description: "With header row, missing a field in a row",
        input: [{ "Col1": "a", "Col2": "b", "Col3": "c" }, { "Col1": "d", "Col3": "f" }],
        expected: 'Col1,Col2,Col3\r\na,b,c\r\nd,,f'
    },
    {
        description: "With header row, with extra field in a row",
        notes: "Extra field should be ignored; first object in array dictates header row",
        input: [{ "Col1": "a", "Col2": "b", "Col3": "c" }, { "Col1": "d", "Col2": "e", "Extra": "g", "Col3": "f" }],
        expected: 'Col1,Col2,Col3\r\na,b,c\r\nd,e,f'
    },
    {
        description: "Specifying column names and data separately",
        input: { fields: ["Col1", "Col2", "Col3"], data: [["a", "b", "c"], ["d", "e", "f"]] },
        expected: 'Col1,Col2,Col3\r\na,b,c\r\nd,e,f'
    },
    {
        description: "Specifying column names only (no data)",
        notes: "Baby should add a data property that is an empty array to prevent errors (no copy is made)",
        input: { fields: ["Col1", "Col2", "Col3"] },
        expected: 'Col1,Col2,Col3'
    },
    {
        description: "Specifying data only (no field names), properly",
        notes: "An array of arrays, even if just a single row.<br>Baby should add empty fields property to prevent errors.",
        input: { data: [["a", "b", "c"]] },
        expected: 'a,b,c'
    },
    {
        description: "Custom delimiter (semicolon)",
        input: [['A', 'b', 'c'], ['d', 'e', 'f']],
        config: { delimiter: ';' },
        expected: 'A;b;c\r\nd;e;f'
    },
    {
        description: "Custom delimiter (tab)",
        input: [['Ab', 'cd', 'ef'], ['g', 'h', 'ij']],
        config: { delimiter: '\t' },
        expected: 'Ab\tcd\tef\r\ng\th\tij'
    },
    {
        description: "Custom delimiter (ASCII 30)",
        input: [['a', 'b', 'c'], ['d', 'e', 'f']],
        config: { delimiter: RECORD_SEP },
        expected: 'a' + RECORD_SEP + 'b' + RECORD_SEP + 'c\r\nd' + RECORD_SEP + 'e' + RECORD_SEP + 'f'
    },
    {
        description: "Bad delimiter (\\n)",
        notes: "Should default to comma",
        input: [['a', 'b', 'c'], ['d', 'e', 'f']],
        config: { delimiter: '\n' },
        expected: 'a,b,c\r\nd,e,f'
    },
    {
        description: "Custom line ending (\\r)",
        input: [['a', 'b', 'c'], ['d', 'e', 'f']],
        config: { newline: '\r' },
        expected: 'a,b,c\rd,e,f'
    },
    {
        description: "Custom line ending (\\n)",
        input: [['a', 'b', 'c'], ['d', 'e', 'f']],
        config: { newline: '\n' },
        expected: 'a,b,c\nd,e,f'
    },
    {
        description: "Custom, but strange, line ending ($)",
        input: [['a', 'b', 'c'], ['d', 'e', 'f']],
        config: { newline: '$' },
        expected: 'a,b,c$d,e,f'
    },
    {
        description: "Force quotes around all fields",
        input: [['a', 'b', 'c'], ['d', 'e', 'f']],
        config: { quotes: true },
        expected: '"a","b","c"\r\n"d","e","f"'
    },
    {
        description: "Force quotes around all fields (with header row)",
        input: [{ "Col1": "a", "Col2": "b", "Col3": "c" }, { "Col1": "d", "Col2": "e", "Col3": "f" }],
        config: { quotes: true },
        expected: '"Col1","Col2","Col3"\r\n"a","b","c"\r\n"d","e","f"'
    },
    {
        description: "Force quotes around certain fields only",
        input: [['a', 'b', 'c'], ['d', 'e', 'f']],
        config: { quotes: [true, false, true] },
        expected: '"a",b,"c"\r\n"d",e,"f"'
    },
    {
        description: "Force quotes around certain fields only (with header row)",
        input: [{ "Col1": "a", "Col2": "b", "Col3": "c" }, { "Col1": "d", "Col2": "e", "Col3": "f" }],
        config: { quotes: [true, false, true] },
        expected: '"Col1",Col2,"Col3"\r\n"a",b,"c"\r\n"d",e,"f"'
    },
    {
        description: "Empty input",
        input: [],
        expected: ''
    },
    {
        description: "Mismatched field counts in rows",
        input: [['a', 'b', 'c'], ['d', 'e'], ['f']],
        expected: 'a,b,c\r\nd,e\r\nf'
    },
    {
        description: "JSON null is treated as empty value",
        input: [{ "Col1": "a", "Col2": null, "Col3": "c" }],
        expected: 'Col1,Col2,Col3\r\na,,c'
    }
];

var passCount = 0;
var failCount = 0;
var testCount = 0;


// Next, run tests and render results!
runCoreParserTests();
runParseTests();
runUnparseTests();
console.log('passCount=' + passCount + ', failCount=' + failCount);
    

// Executes all tests in CORE_PARSER_TESTS from test-cases.js
// and renders results in the table.
function runCoreParserTests(): void {
    for (var i = 0; i < CORE_PARSER_TESTS.length; i++) {
        var test = CORE_PARSER_TESTS[i];
        var passed = runTest(test);
        if (passed)
            passCount++;
        else
            failCount++;
    }

    function runTest(test: ParserTest): boolean {
        var babyParser = new Baby.Parser(test.config);
        var actual = babyParser.parse(test.input);
        var results = compare(actual.data, actual.errors, test.expected);
        displayResults(test, actual, results);
        return results.data.passed && results.errors.passed;
    }
}


// Executes all tests in PARSE_TESTS from test-cases.js
// and renders results in the table.
function runParseTests(): void {
    for (var i = 0; i < PARSE_TESTS.length; i++) {
        var test = PARSE_TESTS[i];
        var passed = runTest(test);
        if (passed)
            passCount++;
        else
            failCount++;
    }

    function runTest(test: ParserTest): boolean {
        var actual = Baby.parse(test.input, test.config);
        var results = compare(actual.data, actual.errors, test.expected);
        displayResults(test, actual, results);
        return results.data.passed && results.errors.passed;
    }
}

function displayResults(
    test: ParserTest,
    actual: BabyParse.ParseResult,
    results: ParserTestCompareResult): void {
    var testId = testCount++;

    var testDescription = (test.description || "");

    var tr = testId
        + ',' + testDescription
        + ',' + results.data.passed
        + ',' + results.errors.passed
        // + '\t' + results.data
        // + '\t' + results.errors
        // + '\t' + JSON.stringify(test.config, null, 2)
        // + '\t' + revealChars(test.input)
        // + '\t' + JSON.stringify(test.expected.data, null, 4)
        // + '\terrors: ' + JSON.stringify(test.expected.errors, null, 4)
        // + '\t' + JSON.stringify(actual.data, null, 4)
        // + '\terrors: ' + JSON.stringify(actual.errors, null, 4)
        ;
    console.log(tr);

}


function compare(actualData: any[], actualErrors: any[], expected: ParserTestExpectedResult): ParserTestCompareResult {
    var data = compareData(actualData, expected.data);
    var errors = compareErrors(actualErrors, expected.errors);

    return {
        data: data,
        errors: errors
    };


    function compareData(actual: any[], expected: any[]): ParserTestPassFail {
        var passed = true;

        if (actual.length != expected.length)
            passed = false;
        else {
            // The order is important, so we go through manually before using stringify to check everything else
            for (var row = 0; row < expected.length; row++) {
                if (actual[row].length != expected[row].length) {
                    passed = false;
                    break;
                }

                for (var col = 0; col < expected[row].length; col++) {
                    var expectedVal = expected[row][col];
                    var actualVal = actual[row][col];

                    if (actualVal !== expectedVal) {
                        passed = false;
                        break;
                    }
                }
            }
        }

        if (passed)    // final check will catch any other differences
            passed = JSON.stringify(actual) == JSON.stringify(expected);

        // We pass back an object right now, even though it only contains
        // one value, because we might add details to the test results later
        // (same with compareErrors below)
        return {
            passed: passed
        };
    }


    function compareErrors(actual: any[], expected: any[]): ParserTestPassFail {
        var passed = JSON.stringify(actual) == JSON.stringify(expected);

        return {
            passed: passed
        };
    }
}





// Executes all tests in UNPARSE_TESTS from test-cases.js
// and renders results in the table.
function runUnparseTests() {
    for (var i = 0; i < UNPARSE_TESTS.length; i++) {
        var test = UNPARSE_TESTS[i];
        var passed = runTest(test);
        if (passed)
            passCount++;
        else
            failCount++;
    }

    function runTest(test:UnparserTest) {
        var actual:string;

        try {
            actual = Baby.unparse(test.input, test.config);
        }
        catch (e) {
            if (e instanceof Error) {
                throw e;
            }
            actual = e;
        }

        var testId = testCount++;
        var results = compare(actual, test.expected);

        var testDescription = (test.description || "");

        var tr = testId
            + ',' + testDescription
            + ',' + results.passed
            // + '\t' + JSON.stringify(test.config, null, 2)
            // + '\t' + JSON.stringify(test.input, null, 4)
            // + '\t' + revealChars(test.expected)
            // + '\t' + revealChars(actual)
            ;
        console.log(tr);

        return results.passed;
    }


    function compare(actual:string, expected:string): { passed: boolean } {
        return {
            passed: actual === expected
        };
    }
}

// Reveals some hidden, whitespace, or invisible characters
function revealChars(txt:string) {
    // Make spaces and tabs more obvious when glancing
    //     txt = txt.replace(/( |\t)/ig, '<span class="whitespace-char">$1</span>');
    //     txt = txt.replace(/(\r\n|\n\r|\r|\n)/ig, '<span class="whitespace-char special-char">$1</span>$1');
    // 
    //     // Make UNIT_SEP and RECORD_SEP characters visible
    //     txt = txt.replace(/(\u001e|\u001f)/ig, '<span class="special-char">$1</span>$1');
    // 
    //     // Now make the whitespace and invisible characters
    //     // within the spans actually appear on the page
    //     txt = txt.replace(/">\r\n<\/span>/ig, '">\\r\\n</span>');
    //     txt = txt.replace(/">\n\r<\/span>/ig, '">\\n\\r</span>');
    //     txt = txt.replace(/">\r<\/span>/ig, '">\\r</span>');
    //     txt = txt.replace(/">\n<\/span>/ig, '">\\n</span>');
    //     txt = txt.replace(/">\u001e<\/span>/ig, '">\\u001e</span>');
    //     txt = txt.replace(/">\u001f<\/span>/ig, '">\\u001f</span>');
    // 
    return txt;
}

/**
 * Parsing
 */
var res = Baby.parse("3,3,3");

Baby.parse("3,3,3", {
    delimiter: ';',
    comments: false,

    step: function(results, p) {
        p.abort();
        results.data.length;
    }
});

/**
 * Unparsing
 */
Baby.unparse([{ a: 1, b: 1, c: 1 }]);
Baby.unparse([[1, 2, 3], [4, 5, 6]]);
Baby.unparse({
    fields: ["3"],
    data: []
});



/**
 * Properties
 */
Baby.SCRIPT_PATH;
Baby.LocalChunkSize;

/**
 * Parser
 */
var parser = new Baby.Parser({})
parser.getCharIndex();
parser.abort();
parser.parse("");

/**
 * Parse Files
 */
Baby.parseFiles('example.csv')
Baby.parseFiles('example.csv', {encoding: 'utf-8'})
Baby.parseFiles(['example1.csv', 'example2.txt'])
Baby.parseFiles(['example1.csv', 'example2.txt'], {encoding: 'utf-8'})
