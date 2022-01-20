import {
    countTags,
    formatTestList,
    getTestNames,
    setParentSuite,
    Structure,
    Suite,
    visitEachNode,
    visitEachTest,
} from 'find-test-names';

declare const structure: Structure;
declare const suite: Suite;

getTestNames('specSourceCode'); // $ExpectType Results
getTestNames('specSourceCode', false); // $ExpectType Results
getTestNames('specSourceCode', true); // $ExpectType ResultsWithStructure
visitEachTest(structure, test => {}); // $ExpectType void
countTags(structure); // $ExpectType Record<string, number>
visitEachNode(structure, test => {}, suite); // $ExpectType void
setParentSuite(structure); // $ExpectType void

formatTestList(structure); // $ExpectType string
formatTestList(structure, 4); // $ExpectType string
