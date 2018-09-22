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
        this.pipeline.add((token, tokenIndex, tokens) => {
            // text processing in here
            return token;
        });

        this.pipeline.after(lunr.stopWordFilter, (token, tokenIndex, tokens) => {
            // text processing in here
            return token;
        });
    });
}

function pipeline_function_test() {
    const stemmer: lunr.PipelineFunction = lunr.stemmer;
    const stopWordFilter: lunr.PipelineFunction = lunr.stopWordFilter;
    const trimmer: lunr.PipelineFunction = lunr.trimmer;
}
