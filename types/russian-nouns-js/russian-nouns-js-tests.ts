// <editor-fold defaultstate="collapsed" desc="Assertion functions">
let anAssertionFailed: boolean = false;

function assertEquals(a: any, b: any, msg?: string) {
    if (anAssertionFailed) {
        return;
    }

    if (a !== b) {
        console.log(`Assertion error: ${a} !== ${b}`);

        if (msg) {
            console.log(msg);
        }

        console.log("Runtime check failed!");
        anAssertionFailed = true;
    }
}

function assertEqualsSingleValue(array: string[], value: string) {
    if (anAssertionFailed) {
        return;
    }

    assertEquals(array.length, 1, `len([${array}]) !== 1`);
    assertEquals(array[0], value);
}

function assertAllCases(
    results: Array<string[]>,
    values: Array<string[] | string>,
) {
    if (anAssertionFailed) {
        return;
    }

    assertEquals(results.length, 7);
    assertEquals(values.length, 7);

    for (let i = 0; i < 7; i++) {
        const result = results[i];
        const value = values[i];

        if (typeof value === "string") {
            assertEqualsSingleValue(result, value);
        } else if (value instanceof Array) {
            assertEquals(result.length, value.length, "Incorrect length.");
            for (let j = 0; j < value.length; j++) {
                assertEquals(result[j], value[j]);
            }
        } else {
            console.log(`${value} is neither an array nor a string.`);
            console.log("Runtime check failed!");
            anAssertionFailed = true;
        }
    }
}

function report(msg: string) {
    if (anAssertionFailed) {
        return;
    }

    console.log(msg);
}
// </editor-fold>

import {
    Case,
    CASES,
    createLemma,
    createLemmaOrNull,
    Engine,
    Gender,
    Lemma,
    LocativeForm,
    LocativeFormAttribute,
} from "russian-nouns-js";

const rne = new Engine();

let result: string[];

result = rne.decline({ text: "имя", gender: Gender.NEUTER }, Case.GENITIVE);
assertEqualsSingleValue(result, "имени");

result = rne.decline({ text: "имя", gender: Gender.NEUTER }, Case.INSTRUMENTAL);
assertEqualsSingleValue(result, "именем");

let coat: Lemma = createLemma({
    text: "пальто",
    gender: Gender.NEUTER,
    indeclinable: true,
});

result = rne.decline(coat, Case.GENITIVE);
assertEqualsSingleValue(result, "пальто");

assertEquals(coat.getDeclension(), -1);

let mountain: Lemma = createLemma({
    text: "гора",
    gender: Gender.FEMININE,
});

let results: string[][] = CASES.map(function(c: Case) {
    return rne.decline(mountain, c);
});

assertAllCases(results, ["гора", "горы", "горе", "гору", ["горой", "горою"], "горе", "горе"]);

result = rne.pluralize(mountain);
assertEqualsSingleValue(result, "горы");
const pluralMountain: string = result[0];

results = CASES.map(function(c: Case) {
    return rne.decline(mountain, c, pluralMountain);
});

assertAllCases(results, ["горы", "гор", "горам", "горы", "горами", "горах", "горах"]);

assertEquals(mountain.getDeclension(), 2);
assertEquals(mountain.getSchoolDeclension(), 1);

let mountainGender: Gender | undefined = mountain.getGender();
assertEquals(mountainGender, Gender.FEMININE);

assertEquals(null, createLemmaOrNull({ text: "абвгд" }));

(() => {
    let x: Lemma | null = createLemmaOrNull({
        text: "гора",
        gender: Gender.FEMININE,
    });

    assertEquals(x != null, true);

    if (x != null) {
        assertEquals(x.text(), "гора");
    }
})();

report("  Main functions (8) ............... OK");

let cringe: Lemma = createLemma({
    text: "кринж",
    gender: Gender.MASCULINE,
});

result = rne.decline(cringe, Case.INSTRUMENTAL);
assertEqualsSingleValue(result, "кринжем");

rne.sd.put(cringe, "SEESESE-EEEEEE");
result = rne.decline(cringe, Case.INSTRUMENTAL);
assertEqualsSingleValue(result, "кринжом");

assertEquals(rne.sd.hasStressedEndingSingular(cringe, Case.INSTRUMENTAL).length, 1);
assertEquals(rne.sd.hasStressedEndingSingular(cringe, Case.INSTRUMENTAL)[0], true);

rne.sd.put(cringe, "SEESbSE-EEEEEE");
result = rne.decline(cringe, Case.INSTRUMENTAL);
assertEquals(result.length, 2);
assertEquals(result[0], "кринжем");
assertEquals(result[1], "кринжом");

rne.sd.put(cringe, "SEESsSE-EEEEEE");
result = rne.decline(cringe, Case.INSTRUMENTAL);
assertEquals(result.length, 2);
assertEquals(result[0], "кринжем");
assertEquals(result[1], "кринжом");

rne.sd.put(cringe, "SEESeSE-EEEEEE");
result = rne.decline(cringe, Case.INSTRUMENTAL);
assertEquals(result.length, 2);
assertEquals(result[0], "кринжом");
assertEquals(result[1], "кринжем");

assertEquals(rne.sd.hasStressedEndingSingular(cringe, Case.INSTRUMENTAL).length, 2);
assertEquals(rne.sd.hasStressedEndingSingular(cringe, Case.INSTRUMENTAL)[0], true);
assertEquals(rne.sd.hasStressedEndingSingular(cringe, Case.INSTRUMENTAL)[1], false);

report("  StressDictionary (9) ............. OK");

let row: Lemma = createLemma({
    text: "ряд",
    gender: Gender.MASCULINE,
});

results = CASES.map(function(c: Case) {
    return rne.decline(row, c);
});

assertAllCases(results, ["ряд", "ряда", "ряду", "ряд", "рядом", "ряде", "ряду"]);

let rowLocativeForms: LocativeForm[] = rne.getLocativeForms(row);

assertEquals(rowLocativeForms.length, 1, "locative forms count");
assertEquals(rowLocativeForms[0].preposition, "в", "lf.preposition");
assertEquals(rowLocativeForms[0].attributes > 0, true, "lf.semantics > 0");
assertEquals(rowLocativeForms[0].word, "ряду", "lf.word");

assertEquals(
    rowLocativeForms[0].attributes,
    LocativeFormAttribute.STRUCTURE,
    "lf.semantics",
);

report("  LocativeForm (10) ................ OK");
