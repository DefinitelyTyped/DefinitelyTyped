/// <reference path="lunr.d.ts" />

/**
 * Basic test, from http://lunrjs.com/
 */
function basic_test() {
    var index = lunr(function () {
        this.field('title', {boost: 10});
        this.field('body');
        this.ref('id');
    });

    index.add({
        id: 1,
        title: 'Foo',
        body: 'Foo foo foo!'
    });

    index.add({
        id: 2,
        title: 'Bar',
        body: 'Bar bar bar!'
    });

    index.search('foo');
}


/**
 * Pipeline test, from http://lunrjs.com/
 */
function pipeline_test() {
    var index = lunr(function () {
        this.pipeline.add(function (token:string, tokenIndex:number, tokens:string[]):string {
            // text processing in here
            return token;
        });

        this.pipeline.after(lunr.stopWordFilter, function (token:string, tokenIndex:number, tokens:string[]):string {
            // text processing in here
            return token;
        });
    })
}