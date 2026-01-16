import grapoi = require("grapoi");
import { DataFactory } from "@rdfjs/types";

import dataFactory from '@rdfjs/data-model'
import datasetFactory from '@rdfjs/dataset'
const rdf: DataFactory = dataFactory;

// Test factory function with basic options
const dataset = datasetFactory.dataset()
const ptr1 = grapoi({ dataset });

// Test with factory
const ptr2 = grapoi({
    dataset,
    factory: dataFactory,
    term: rdf.namedNode("https://example.org/subject")
});

// Test with string term
const ptr3 = grapoi({
    dataset,
    term: "https://example.org/subject"
});

// Test with multiple terms
const ptr4 = grapoi({
    dataset,
    terms: [
        rdf.namedNode("https://example.org/subject1"),
        rdf.namedNode("https://example.org/subject2")
    ]
});

// Test traversal methods
const predicate = rdf.namedNode("https://example.org/predicate");
const object = rdf.namedNode("https://example.org/object");

const outPtr = ptr1.out([predicate]);
const inPtr = ptr1.in([predicate]);
const filteredPtr = ptr1.hasOut([predicate], [object]);

// Test getter properties
const term = ptr1.term;
const terms = ptr1.terms;
const value = ptr1.value;
const values = ptr1.values;
const datasetGet = ptr1.dataset;
const datasets = ptr1.datasets;

// Test add methods
ptr1.addOut([predicate], [object]);
ptr1.addIn([predicate], [rdf.namedNode("https://example.org/subject")]);
ptr1.addList([predicate], [object]);

// Test delete methods
ptr1.deleteOut([predicate], [object]);
ptr1.deleteIn([predicate]);
ptr1.deleteList([predicate]);

// Test utility methods
const distinctPtr = ptr1.distinct();
const trimmedPtr = ptr1.trim();
const nodePtr = ptr1.node([rdf.namedNode("https://example.org/other")]);

// Test iteration
for (const p of ptr1) {
    const t = p.term;
}

// Test map and filter
const mapped = ptr1.map(p => p.value);
const filtered = ptr1.filter(p => p.term !== undefined);

// Test list operations
const isList = ptr1.isList();
if (isList) {
    const list = ptr1.list();
    if (list) {
        for (const item of list) {
            const itemTerm = item.term;
        }
    }
}

// Test quads
const quads = ptr1.quads();

// Test score methods
const scored = ptr1.score(p => 1);
const best = ptr1.best(p => 1);

// Test base and rebase
const based = ptr1.base(rdf.namedNode("https://example.org/base/"));
const rebased = ptr1.rebase(rdf.namedNode("https://example.org/newbase/"));
const replaced = ptr1.replace(rdf.namedNode("https://example.org/replacement"));

// Test with callbacks
ptr1.addOut([predicate], [object], (p) => {
    p.addOut([predicate], [rdf.literal("nested")]);
});
