import * as lunr from 'lunr';

function basic_test() {
    const index = lunr(function() {
        this.field("title");
        this.field("body");
        this.ref("id");
        this.add({
            id: 1,
            title: "Foo",
            body: "Foo foo foo!"
        });
        this.add({
            id: 2,
            title: "Bar",
            body: "Bar bar bar!"
        });
    });

    index.search("foo");
}

function pipeline_test() {
    const index = lunr(function() {
        this.pipeline.add(function(token, tokenIndex, tokens) {
            // text processing in here
            return token;
        });

        this.pipeline.after(lunr.stopWordFilter, function(token, tokenIndex, tokens) {
            // text processing in here
            return token;
        });
    });
}
