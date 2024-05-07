import { generate, generateFromObj } from "@bramus/pagination-sequence";

// $ExpectType (string | number)[]
const generateSequence1 = generate(1, 25);
// $ExpectType (string | number)[]
const generateSequence2 = generate(1, 25, 2, 2, "...");

// $ExpectType (string | number)[]
const generateFromObjSequence = generateFromObj();

// $ExpectType (string | number)[]
const generateFromObjSequence2 = generateFromObj({
    curPage: 2,
    numPages: 30,
});

// $ExpectType (string | number)[]
const generateFromObjSequence3 = generateFromObj({
    curPage: 1,
    numPages: 25,
    numPagesAtEdges: 1,
    numPagesAroundCurrent: 2,
    glue: "...",
});
