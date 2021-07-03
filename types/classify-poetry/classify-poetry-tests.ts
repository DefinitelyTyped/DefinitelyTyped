import {
    all,
    classifyPoetry,
    abc,
    couplet,
    haiku,
    limerick,
    quatrain,
    sonnet,
    tanka,
    terzaRima,
} from 'classify-poetry';

const sampleText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolor quae.';

abc(sampleText); // $ExpectType boolean
couplet(sampleText); // $ExpectType boolean
haiku(sampleText); // $ExpectType boolean
limerick(sampleText); // $ExpectType boolean
quatrain(sampleText); // $ExpectType boolean
sonnet(sampleText); // $ExpectType boolean
tanka(sampleText); // $ExpectType boolean
terzaRima(sampleText); // $ExpectType boolean
classifyPoetry(sampleText); // $ExpectType string[]

function rewriteClassifyPoetry(str: string) {
    return all
        .filter(type => {
            type; // $ExpectType ClassifierFunction
            return type(str);
        })
        .map(type => type.name);
}
