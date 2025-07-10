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

let num: number;
let str: string;
let result: string[];
let results: string[][];

result = rne.decline({ text: "имя", gender: Gender.NEUTER }, Case.GENITIVE);

result = rne.decline({ text: "имя", gender: Gender.NEUTER }, Case.INSTRUMENTAL);

let coat: Lemma = createLemma({
    text: "пальто",
    gender: Gender.NEUTER,
    indeclinable: true,
});

result = rne.decline(coat, Case.GENITIVE);

num = coat.getDeclension();

let mountain: Lemma = createLemma({
    text: "гора",
    gender: Gender.FEMININE,
});

results = CASES.map(function(c: Case) {
    return rne.decline(mountain, c);
});

result = rne.pluralize(mountain);

const pluralMountain: string = result[0];

results = CASES.map(function(c: Case) {
    return rne.decline(mountain, c, pluralMountain);
});

num = mountain.getDeclension();
num = mountain.getSchoolDeclension();

let mountainGender: Gender | undefined = mountain.getGender();

let nothing: Lemma | null = createLemmaOrNull({ text: "абвгд" });

const x: Lemma | null = createLemmaOrNull({
    text: "гора",
    gender: Gender.FEMININE,
});

if (x != null) {
    str = x.text();
}

// ----------------------------------------------------------------------------

const cringe: Lemma = createLemma({
    text: "кринж",
    gender: Gender.MASCULINE,
});

result = rne.decline(cringe, Case.INSTRUMENTAL);

rne.sd.put(cringe, "SEESESE-EEEEEE");
result = rne.decline(cringe, Case.INSTRUMENTAL);

const stressedEndings: boolean[] = rne.sd.hasStressedEndingSingular(cringe, Case.INSTRUMENTAL);

// ----------------------------------------------------------------------------

let row: Lemma = createLemma({
    text: "ряд",
    gender: Gender.MASCULINE,
});

results = CASES.map(function(c: Case) {
    return rne.decline(row, c);
});

let rowLocativeForms: LocativeForm[] = rne.getLocativeForms(row);

str = rowLocativeForms[0].preposition;
str = rowLocativeForms[0].word;
num = rowLocativeForms[0].attributes;
