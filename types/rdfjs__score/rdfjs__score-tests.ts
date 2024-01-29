import Environment from "@rdfjs/environment/Environment";
import {
    combine,
    concat,
    count,
    distinct,
    exists,
    fallback,
    fixed,
    language,
    pageRank,
    pathDepth,
    Pointers,
    prioritized,
    product,
    scale,
    Score,
    ScoreCb,
    sort,
    sortObjects,
    sum,
    type,
} from "@rdfjs/score";
import Factory from "@rdfjs/score/Factory";
import { DatasetCore, Term } from "@rdfjs/types";
import { GraphPointer, MultiPointer } from "clownface";

const score: ScoreCb = <any> {};
const clownfacePointer: MultiPointer = <any> {};
const ptrs: Pointers = clownfacePointer;

function test_combine() {
    // $ExpectType Score[]
    combine([score, score])(ptrs);

    // $ExpectType Score[]
    combine.prioritized([score, score])(ptrs);
}

function test_concat() {
    // $ExpectType Score[]
    concat([score, score])(ptrs);
}

function test_count() {
    // $ExpectType Score[]
    const countSubjects = count()(ptrs);

    // $ExpectType Score[]
    const countAllBut = count({ subject: false, graph: true, object: true, predicate: true })(ptrs);
}

function test_distinct() {
    const scores: Score[] = <any> {};

    // $ExpectType Score[]
    distinct(scores);
}

function test_exists() {
    const subject: Term = <any> {};
    const predicate: Term = <any> {};
    const object: Term = <any> {};
    const graph: Term = <any> {};

    // @ts-expect-error
    exists({})(ptrs);

    // $ExpectType Score[]
    exists({ subject })(ptrs);

    // $ExpectType Score[]
    exists({ predicate })(ptrs);

    // $ExpectType Score[]
    exists({ object })(ptrs);

    // $ExpectType Score[]
    exists({ graph })(ptrs);

    // $ExpectType Score[]
    exists({ subject, predicate, object, graph })(ptrs);
}

function test_fallback() {
    // $ExpectType Score[]
    fallback([score, score])(ptrs);
}

function test_fixed() {
    const term: Term = <any> {};

    // $ExpectType Score[]
    fixed(term)(ptrs);
}

function test_language() {
    // $ExpectType Score[]
    language(["en", "de", "*"])(ptrs);
}

function test_pageRank() {
    // $ExpectType Score[]
    pageRank()(ptrs);

    // $ExpectType Score[]
    pageRank({ alpha: 0.8 })(ptrs);

    // $ExpectType Score[]
    pageRank({ epsilon: 0.8 })(ptrs);

    // $ExpectType Score[]
    pageRank({ alpha: 0.8, epsilon: 0.8 })(ptrs);
}

function test_pathDepth() {
    // $ExpectType Score[]
    pathDepth()(ptrs);
}

function test_prioritized() {
    // $ExpectType Score[]
    prioritized([score, score])(ptrs);
}

function test_product() {
    // $ExpectType Score[]
    product([score, score])(ptrs);
}

function test_scale() {
    // $ExpectType Score[]
    scale({ score, factor: 10 })(ptrs);
}

function test_sort() {
    const scores: Score[] = <any> {};

    // $ExpectType Score[]
    sort(scores);
}

interface SortedObj {
    deep: { term: Term };
}

function test_sortObjects() {
    const dataset: DatasetCore = <any> {};
    const objects: GraphPointer[] = <any> {};

    // $ExpectType { term: Term; }[]
    sortObjects({
        dataset,
        objects,
        score,
    });

    const customObjects: SortedObj[] = <any> {};
    // $ExpectType SortedObj[]
    sortObjects({
        dataset,
        objects: customObjects,
        score,
        termCallback: obj => obj.deep.term,
    });
}

function test_sum() {
    // $ExpectType Score[]
    sum([score, score])(ptrs);
}

function test_type() {
    const typeTerm: Term = <any> {};

    // $ExpectType Score[]
    type(typeTerm)(ptrs);
}

function test_Factory() {
    // $ExpectType ScoreFactory
    const constructed = new Factory();

    const fromEnv = new Environment([Factory]);
    const {
        combine,
        concat,
        count,
        distinct,
        exists,
        fallback,
        fixed,
        language,
        pageRank,
        pathDepth,
        prioritized,
        product,
        scale,
        sort,
        sortObjects,
        sum,
        type,
    } = fromEnv.score;
}
