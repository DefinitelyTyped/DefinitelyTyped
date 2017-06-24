
import chai = require('chai');
import chaiDateTime = require('chai-datetime');

chai.use(chaiDateTime);
var expect = chai.expect;
var assert = chai.assert;

function test_equalTime(){
    var date: Date = new Date(2014, 1, 1);
    expect(date).to.equalTime(date);
    date.should.equalTime(date);
    assert.equalTime(date, date);
}

function test_beforeTime(){
    var date: Date = new Date(2014, 1, 1);
    expect(date).to.be.beforeTime(date);
    date.should.be.beforeTime(date);
    assert.beforeTime(date, date);
}

function test_afterTime(){
    var date: Date = new Date(2014, 1, 1);
    expect(date).to.be.afterTime(date);
    date.should.be.afterTime(date);
    assert.afterTime(date, date);
}

function test_equalDate(){
    var date: Date = new Date(2014, 1, 1);
    expect(date).to.equalDate(date);
    date.should.equalDate(date);
    assert.equalDate(date, date);
}

function test_beforeDate(){
    var date: Date = new Date(2014, 1, 1);
    expect(date).to.be.beforeDate(date);
    date.should.be.beforeDate(date);
    assert.beforeDate(date, date);
}

function test_afterDate(){
    var date: Date = new Date(2014, 1, 1);
    expect(date).to.be.afterDate(date);
    date.should.be.afterDate(date);
    assert.afterDate(date, date);
}
