import * as util from './index';
import * as mocha from 'mocha';
import * as chai from 'chai';

interface ParseParam {
    dbval: util.AttributeValue,
    val: any
}

describe('Key funcionality', ()=>{

    let params:ParseParam [] = [
        {dbval: {S: "String"}, val:"String"},
        {dbval: {N: "100"}, val:100},
        {dbval: {BOOL: true}, val: true}
    ]

    params.forEach((param:ParseParam) => {
    it('parses ' + param.dbval + ' into "' + param.val + '"', (done:MochaDone)=>{
        let parsed = util.parse(param.dbval)
        chai.expect(parsed).to.deep.eq(param.val)
    } )})
    
    params.forEach((param:ParseParam) => {
    it('stringifies ' + param.val + ' into "' + param.dbval + '"', (done:MochaDone)=>{
        let parsed = util.stringify(param.val)
        chai.expect(parsed).to.deep.eq(param.dbval)
    } )
})
})