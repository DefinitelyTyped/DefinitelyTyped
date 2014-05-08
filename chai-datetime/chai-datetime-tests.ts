/// <reference path="../chai/chai.d.ts" />
/// <reference path="../chai/chai-assert.d.ts" />
/// <reference path="chai-datetime.d.ts" />

var expect = chai.expect;

function test_equalTime(){
    var date: Date = new Date(2014, 1, 1);
    expect(date).to.be.equalTime(date);
    date.should.be.equalTime(date);
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
    expect(date).to.beforeDate(date);
    date.should.beforeDate(date);
    assert.beforeDate(date, date);
}

function test_afterDate(){
    var date: Date = new Date(2014, 1, 1);
    expect(date).to.afterDate(date);
    date.should.afterDate(date);
    assert.afterDate(date, date);
}