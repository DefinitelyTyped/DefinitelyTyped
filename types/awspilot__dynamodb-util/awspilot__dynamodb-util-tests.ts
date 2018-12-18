import * as util from './index';

interface ParseParam {
    dbval: util.AttributeValue,
    val: any
}

const util_tests = {
'Key funcionality': ()=>{

    let params:ParseParam [] = [
        {dbval: {S: "String"}, val:"String"},
        {dbval: {N: "100"}, val:100},
        {dbval: {BOOL: true}, val: true}
    ]

    params.forEach((param:ParseParam) => {
        function TestParse (param:ParseParam) {
            let parsed = util.parse(param.dbval)
        }
        TestParse(param)
    })
    
    params.forEach((param:ParseParam) => {
        function TestStringify ( param:ParseParam) {
            let parsed = util.stringify(param.val)
        }
        TestStringify(param)
    })
}
}