//<editor-fold defaultstate="collapsed" desc="Assertion functions">
function assertEquals(a: any, b: any, msg?: string) {
    if (a !== b) {
        console.log(`Assertion error: ${a} !== ${b}`);

        if (msg) {
            console.log(msg);
        }

        process.exit(1);
    }
}

function assertEqualsSingleValue(array: string[], value: string) {
    assertEquals(array.length, 1, `len([${array}]) !== 1`);
    assertEquals(array[0], value);
}

function assertAllCases(
    results: Array<string[]>,
    values: Array<string[] | string>
) {
    assertEquals(results.length, 7);
    assertEquals(values.length, 7);

    for (let i = 0; i < 7; i++) {
        const result = results[i];
        const value = values[i];

        if (typeof value === 'string') {
            assertEqualsSingleValue(result, value);
        } else if (value instanceof Array) {
            assertEquals(result.length, value.length, "Incorrect length.");
            for (let j = 0; j < value.length; j++) {
                assertEquals(result[j], value[j]);
            }
        } else {
            console.log(`${value} is neither an array nor a string.`);
            process.exit(1);
        }
    }
}
//</editor-fold>



// import { Engine, Case, Gender, Lemma, createLemma, createLemmaOrNull } from 'russian-nouns-js'
import { Engine, Case, Gender, createLemma } from 'russian-nouns-js'
// import { CASES, getDeclension, getSchoolDeclension, LocativeForm } from 'russian-nouns-js'
import { CASES, getDeclension, getSchoolDeclension } from 'russian-nouns-js'


const rne = new Engine();



let result: string[];

result = rne.decline({ text: 'имя', gender: Gender.NEUTER }, Case.GENITIVE);
assertEqualsSingleValue(result, "имени");

result = rne.decline({ text: 'имя', gender: Gender.NEUTER }, Case.INSTRUMENTAL);
assertEqualsSingleValue(result, "именем");


// TODO
//let coat: Lemma = createLemma({
let coat: any = createLemma({
    text: 'пальто',
    gender: Gender.NEUTER,
    indeclinable: true
});

result = rne.decline(coat, Case.GENITIVE);
assertEqualsSingleValue(result, "пальто");

assertEquals(getDeclension(coat), -1);


// TODO
// let mountain: Lemma = RussianNouns.createLemma({
let mountain: any = createLemma({
    text: 'гора',
    gender: Gender.FEMININE
});

let results: string[][] = CASES.map(c => {
    return rne.decline(mountain, c);
});

assertAllCases(results, ['гора', 'горы', 'горе', 'гору', ['горой', 'горою'], 'горе', 'горе']);

result = rne.pluralize(mountain);
assertEqualsSingleValue(result, "горы");
const pluralMountain: string = result[0];

results = CASES.map(c => {
    return rne.decline(mountain, c, pluralMountain);
});

assertAllCases(results, ['горы', 'гор', 'горам', 'горы', 'горами', 'горах', 'горах']);

assertEquals(getDeclension(mountain), 2);
assertEquals(getSchoolDeclension(mountain), 1);

console.log('  Main functions (8) ............... OK');



// TODO
// let cringe: Lemma = createLemma({
let cringe: any = createLemma({
    text: 'кринж',
    gender: Gender.MASCULINE
});

result = rne.decline(cringe, Case.INSTRUMENTAL);
assertEqualsSingleValue(result, "кринжем");

rne.sd.put(cringe, 'SEESESE-EEEEEE');
result = rne.decline(cringe, Case.INSTRUMENTAL);
assertEqualsSingleValue(result, "кринжом");

rne.sd.put(cringe, 'SEESbSE-EEEEEE');
result = rne.decline(cringe, Case.INSTRUMENTAL);
assertEquals(result.length, 2);
assertEquals(result[0], "кринжем");
assertEquals(result[1], "кринжом");

rne.sd.put(cringe, 'SEESsSE-EEEEEE');
result = rne.decline(cringe, Case.INSTRUMENTAL);
assertEquals(result.length, 2);
assertEquals(result[0], "кринжем");
assertEquals(result[1], "кринжом");

rne.sd.put(cringe, 'SEESeSE-EEEEEE');
result = rne.decline(cringe, Case.INSTRUMENTAL);
assertEquals(result.length, 2);
assertEquals(result[0], "кринжом");
assertEquals(result[1], "кринжем");

console.log('  StressDictionary (9) ............. OK');



// TODO
// let row: Lemma = createLemma({
let row: any = createLemma({
    text: 'ряд',
    gender: Gender.MASCULINE
});

results = CASES.map(c => {
    return rne.decline(row, c);
});

assertAllCases(results, ['ряд', 'ряда', 'ряду', 'ряд', 'рядом', 'ряде', 'ряду']);

// TODO
/*
let rowLocativeForms: LocativeForm[] = rne.getLocativeForms(row);

assertEquals(rowLocativeForms.length, 1, 'locative forms count');
assertEquals(rowLocativeForms[0].preposition, 'в', 'lf.preposition');
assertEquals(rowLocativeForms.word, 'ряду', 'lf.word');

console.log('  LocativeForm (10) ................ OK');
*/



// TODO
// assertEquals(null, createLemmaOrNull({}));

(() => {
    //let x: Lemma = createLemmaOrNull({
    //    text: 'гора',
    //    gender: Gender.FEMININE
    //});
    //
    //assertEquals(x != null, true);
    //assertEquals(x.text(), 'гора');
})();

