import { Edge, EdgeKind, Fact, FactName, JSONEdge, JSONFact, OrdinalEdge, VName } from 'kythe';

function makeOrdinal(edgeKind: EdgeKind, ordinal: number): OrdinalEdge {
    const edge = `${edgeKind}.${ordinal}`;
    return <OrdinalEdge> edge;
}

const vname: VName = {
    signature: 'sig#0',
    corpus: 'types',
    root: '',
    path: 'tests',
    language: 'typescript',
};

const fact: Fact = {
    source: vname,
    label: 'fact',
    value: 'complete',
};

const edge: Edge = {
    source: vname,
    target: vname,
    kind: 'edge',
    label: 'fact',
};

const jsonFact: JSONFact = {
    source: vname,
    fact_name: FactName.NODE_KIND,
    fact_value: 'testvalue',
};

const jsonEdge: JSONEdge = {
    source: vname,
    target: vname,
    edge_kind: EdgeKind.ALIASES,
    fact_name: '/',
};

const jsonOrdinalEdge: JSONEdge = {
    source: vname,
    target: vname,
    edge_kind: makeOrdinal(EdgeKind.ALIASES, 0),
    fact_name: '/',
};

// $ExpectError
const incompleteVName: VName = {
    signature: 'sig#0',
    root: '',
    language: 'typescript',
};

const incompleteFact: Fact = {
    source: vname,
    label: 'incomplete',
    kind: 'notEdge', // $ExpectError
};

const incompleteEdge: Edge = {
    source: vname,
    target: vname,
    value: 'notFact', // $ExpectError
};

const incompleteJsonFact: JSONFact = {
    source: vname,
    fact_name: 'notFact', // $ExpectError
    fact_value: 'testvalue',
};

const incompleteJsonEdge: JSONEdge = {
    source: vname,
    target: vname,
    edge_kind: 'asdasd', // $ExpectError
    fact_name: 'nonEmpty', // $ExpectError
};
