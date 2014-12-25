/// <reference path="kuromoji.d.ts" />

kuromoji.builder({ dicPath: "/url/to/dictionary/dir/" }).build(function (err, tokenizer) {
    var path = tokenizer.tokenize("すもももももももものうち");
    path.forEach((token)=>{
        console.log(token.word_id);
        console.log(token.surface_form);
    });
});