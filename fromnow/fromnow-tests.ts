/// <reference path="fromnow.d.ts" />

import fromnow = require( 'fromnow' );

function dateOnly() {
    fromnow( '2015-12-31' );
}

function maxChunks() {
    fromnow( '2015-12-31', {
        maxChunks: 12
    });
}

function useAgo() {
    fromnow( '2015-12-31', {
        useAgo: true
    });
}

function useAnd() {
    fromnow( '2015-12-31', {
        useAnd: true
    });
}