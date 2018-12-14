

import fromnow = require('fromnow');

function dateOnly() {
    fromnow('2015-12-31');
}

function dateObjectOnly() {
    fromnow(new Date());
}

function max() {
    fromnow('2015-12-31', {
        max: 12
    });
}

function suffix() {
    fromnow('2015-12-31', {
        suffix: true
    });
}

function and() {
    fromnow('2015-12-31', {
        and: true
    });
}

function zero() {
    fromnow('2015-12-31', {
        zero: true
    });
}
