import * as util from 'awspilot__dynamodb-util';

interface ParseParam {
    dbval: util.AttributeValue;
    val: any;
}

const util_tests = {
'Key funcionality': () => {
    const params: ParseParam [] = [
        {dbval: {S: "String"}, val: "String"},
        {dbval: {N: "100"}, val: 100},
        {dbval: {BOOL: true}, val: true}
    ];

    params.forEach((param: ParseParam) => {
        function TestParse(param: ParseParam) {
            const parsed = util.parse(param.dbval);
        }
        TestParse(param);
    });

    params.forEach((param: ParseParam) => {
        function TestStringify(param: ParseParam) {
            const parsed = util.stringify(param.val);
        }
        TestStringify(param);
    });
}
};
