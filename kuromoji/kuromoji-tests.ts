/// <reference path="kuromoji.d.ts" />

// From https://github.com/takuyaa/kuromoji.js/blob/master/README.md#usage
kuromoji.builder({ dicPath: "/url/to/dictionary/dir/" }).build(function (err, tokenizer) {
    var path = tokenizer.tokenize("すもももももももものうち");
    var num_tmp: number;
    var str_tmp: string;
    path.forEach((token)=>{
        num_tmp = token.word_id;
        str_tmp = token.word_type;
        num_tmp = token.word_position;
        str_tmp = token.surface_form;
        str_tmp = token.pos;
        str_tmp = token.pos_detail_1;
        str_tmp = token.pos_detail_2;
        str_tmp = token.pos_detail_3;
        str_tmp = token.conjugated_type;
        str_tmp = token.conjugated_form;
        str_tmp = token.basic_form;
        str_tmp = token.reading;
        str_tmp = token.pronunciation;
    });
});

// From https://github.com/takuyaa/kuromoji.js/blob/master/test/resource/minimum-dic/minimum.csv
var minimum_dict = [
    "すもも,1285,1285,7546,名詞,一般,*,*,*,*,すもも,スモモ,スモモ",
    "もも,1285,1285,7219,名詞,一般,*,*,*,*,もも,モモ,モモ"
].join('\n');

var builder = kuromoji.dictionaryBuilder();
builder = builder.addTokenInfoDictionary(minimum_dict);
var dict = builder.build();