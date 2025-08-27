import {
    countTags,
    filterByEffectiveTags,
    findEffectiveTestTags,
    findEffectiveTestTagsIn,
    formatTestList,
    getTestNames,
    setEffectiveTags,
    setParentSuite,
    Structure,
    Suite,
    visitEachNode,
    visitEachTest,
} from "find-test-names";

declare const structure: Structure;
declare const suite: Suite;

getTestNames("specSourceCode"); // $ExpectType Results
getTestNames("specSourceCode", false); // $ExpectType Results
const result = getTestNames("specSourceCode", true); // $ExpectType ResultsWithStructure
setEffectiveTags(result.structure);
visitEachTest(structure, test => {}); // $ExpectType void
countTags(structure); // $ExpectType Record<string, number>
visitEachNode(structure, test => {}, suite); // $ExpectType void
setParentSuite(structure); // $ExpectType void

formatTestList(structure); // $ExpectType string
formatTestList(structure, 4); // $ExpectType string

// $ExpectType Test[]
const filtered = filterByEffectiveTags(result.structure, ["@one"]);

const source = `
    describe('parent', {tags: '@user'}, () => {
      describe('child', {tags: '@auth'}, () => {
        it('works a', {tags: '@one'}, () => {})
        it('works b', () => {})
      })
    })
    it('sits at the top', {tags: '@root'}, () => {})
    it.skip('has no tags')
  `;
findEffectiveTestTags(source); // $ExpectType Record<string, Tags>

findEffectiveTestTagsIn("specFilename"); // $ExpectType Record<string, Tags>

structure[0].requiredTags; // $ExpectType string[] | undefined
