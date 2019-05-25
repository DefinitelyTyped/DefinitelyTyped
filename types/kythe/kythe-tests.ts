import { VName, Fact, Edge } from "kythe";

const vname: VName = {
    signature: "sig#0",
    corpus: "types",
    root: "",
    path: "tests",
    language: "typescript",
};

const fact: Fact = {
    source: vname,
    label: "fact",
    value: "complete",
};

const edge: Edge = {
    source: vname,
    target: vname,
    kind: "edge",
    label: "fact",
};

const incompleteVName: VName = { // $ExpectError
    signature: "sig#0",
    root: "",
    language: "typescript"
};

const incompleteFact: Fact = {
    source: vname,
    label: "incomplete",
    kind: "notEdge", // $ExpectError
};

const incompleteEdge: Edge = {
    source: vname,
    target: vname,
    value: "notFact", // $ExpectError
};
