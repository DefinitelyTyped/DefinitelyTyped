
import chai = require('chai');
import chaiDateTime = require('chai-datetime');

chai.use(chaiDateTime);
const expect = chai.expect;
const assert = chai.assert;

function test_equalTime(){
    const date: Date = new Date(2014, 1, 1);
    expect(date).to.equalTime(date);
    date.should.equalTime(date);
    assert.equalTime(date, date);
}

function test_beforeTime(){
    const date: Date = new Date(2014, 1, 1);
    expect(date).to.be.beforeTime(date);
    date.should.be.beforeTime(date);
    assert.beforeTime(date, date);
}

function test_afterTime(){
    const date: Date = new Date(2014, 1, 1);
    expect(date).to.be.afterTime(date);
    date.should.be.afterTime(date);
    assert.afterTime(date, date);
}

function test_closeToTime1(){
    const date: Date = new Date(2014, 1, 1);
    const closeTime: Date = new Date(2014, 1, 1, 0, 0, 30);
    expect(date).to.be.closeToTime(closeTime, 40);
    expect(date).not.to.be.closeToTime(closeTime, 20);
}

function test_closeToTime2(){
    const date: Date = new Date(2014, 1, 1, 6, 0);
    const closeDate: Date = new Date(2014, 1, 1, 6, 1);
    expect(date).to.be.closeToTime(closeDate, 120);
    date.should.be.closeToTime(closeDate, 120);
    assert.closeToTime(date, closeDate, 120);
}

function test_withinTime(){
    const date: Date = new Date(2014, 7, 1);
    const fromDate: Date = new Date(2014, 1, 1);
    const toDate: Date = new Date(2015, 1, 1);
    expect(date).to.be.withinTime(fromDate, toDate);
    date.should.be.withinTime(fromDate, toDate);
    assert.withinTime(date, fromDate, toDate);
}

function test_equalDate(){
    const date: Date = new Date(2014, 1, 1);
    expect(date).to.equalDate(date);
    date.should.equalDate(date);
    assert.equalDate(date, date);
}

function test_beforeDate(){
    const date: Date = new Date(2014, 1, 1);
    expect(date).to.be.beforeDate(date);
    date.should.be.beforeDate(date);
    assert.beforeDate(date, date);
}

function test_afterDate(){
    const date: Date = new Date(2014, 1, 1);
    expect(date).to.be.afterDate(date);
    date.should.be.afterDate(date);
    assert.afterDate(date, date);
}

function test_withinDate(){
    const date: Date = new Date(2014, 7, 1);
    const fromDate: Date = new Date(2014, 1, 1);
    const toDate: Date = new Date(2015, 1, 1);
    expect(date).to.be.withinDate(fromDate, toDate);
    date.should.be.withinDate(fromDate, toDate);
    assert.withinDate(date, fromDate, toDate);
}

function test_beforeOrEqualDate(){
    const date1: Date = new Date(2014, 1, 1);
    const date2: Date = new Date(2014, 1, 2);

    expect(date1).to.be.beforeOrEqualDate(date1);
    date1.should.be.beforeOrEqualDate(date1);
    assert.beforeOrEqualDate(date1, date1);

    expect(date1).to.be.beforeOrEqualDate(date2);
    date1.should.be.beforeOrEqualDate(date2);
    assert.beforeOrEqualDate(date1, date2);
}

function test_afterOrEqualDate(){
    const date1: Date = new Date(2014, 1, 2);
    const date2: Date = new Date(2014, 1, 1);

    expect(date1).to.be.afterOrEqualDate(date1);
    date1.should.be.afterOrEqualDate(date1);
    assert.afterOrEqualDate(date1, date1);

    expect(date1).to.be.afterOrEqualDate(date2);
    date1.should.be.afterOrEqualDate(date2);
    assert.afterOrEqualDate(date1, date2);
}

function test_beforeOrEqualTime(){
    const date1: Date = new Date(2014, 1, 1, 0, 0, 30);
    const date2: Date = new Date(2014, 1, 1, 0, 2, 30);

    expect(date1).to.be.beforeOrEqualTime(date1);
    date1.should.be.beforeOrEqualTime(date1);
    assert.beforeOrEqualTime(date1, date1);

    expect(date1).to.be.beforeOrEqualTime(date2);
    date1.should.be.beforeOrEqualTime(date2);
    assert.beforeOrEqualTime(date1, date2);
}

function test_afterOrEqualTime(){
    const date1: Date = new Date(2014, 1, 1, 0, 2, 30);
    const date2: Date = new Date(2014, 1, 1, 0, 0, 30);

    expect(date1).to.be.afterOrEqualTime(date1);
    date1.should.be.afterOrEqualTime(date1);
    assert.afterOrEqualTime(date1, date1);

    expect(date1).to.be.afterOrEqualTime(date2);
    date1.should.be.afterOrEqualTime(date2);
    assert.afterOrEqualTime(date1, date2);
}
