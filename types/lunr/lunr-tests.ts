import * as lunr from 'lunr';

function basic_test() {
    const index = lunr(function() {
        this.field("title");
        this.field("body");
        this.field("content", {
            boost: 2,
            extractor: (doc: object) => "oof"
        });
        this.ref("id");
        this.add({
            id: 1,
            title: "Foo",
            body: "Foo foo foo!"
        },
        {
            boost: 2
        });
        this.add({
            id: 2,
            title: "Bar",
            body: "Bar bar bar!"
        });
    });

    index.search("foo");

    index.query(q => {
        q.term(
            lunr.tokenizer('search terms'),
            {
                wildcard: lunr.Query.wildcard.TRAILING,
                presence: lunr.Query.presence.REQUIRED
            }
        );
    });
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
