import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

function matchTest() {
    let matches = match('some text', 'te'); // $ExpectType number[] | number[][]
    matches = match('some sweet text', 's s'); // $ExpectType number[] | number[][]
}

function parseTest() {
    const parts = parse('Pretty cool text', [[7, 9], [12, 13]]); // $ExpectType { text: string; highlight: boolean; }[]
}
