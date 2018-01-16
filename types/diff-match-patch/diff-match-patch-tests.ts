import * as DiffMatchPatch from 'diff-match-patch';

function testDiffMainEach() {
    const oldValue = "hello world, how are you?";
    const newValue = "hello again world. how have you been?";

    const diffEngine = new DiffMatchPatch.diff_match_patch();
    const diffs = diffEngine.diff_main(oldValue, newValue);
    diffEngine.diff_cleanupSemantic(diffs);

    let changes = "";
    let pattern = "";

    diffs.forEach((diff) => {
        const operation = diff[0]; // Operation (insert, delete, equal)
        const text = diff[1]; // Text of change

        switch (operation) {
            case DiffMatchPatch.DIFF_INSERT:
                pattern += "I";
                break;
            case DiffMatchPatch.DIFF_DELETE:
                pattern += "D";
                break;
            case DiffMatchPatch.DIFF_EQUAL:
                pattern += "E";
                break;
        }

        changes += text;
    });
}

const DIFF_DELETE: number = DiffMatchPatch.DIFF_DELETE;
const DIFF_INSERT: number = DiffMatchPatch.DIFF_INSERT;
const DIFF_EQUAL: number = DiffMatchPatch.DIFF_EQUAL;
const dmp = new DiffMatchPatch.diff_match_patch();

// DIFF TEST FUNCTIONS

function testDiffCommonPrefix() {
    assertEquals(0, dmp.diff_commonPrefix('abc', 'xyz'));
}

function testDiffCommonSuffix() {
    assertEquals(0, dmp.diff_commonSuffix('abc', 'xyz'));
}

function testDiffCommonOverlap() {
    assertEquals(0, dmp.diff_commonOverlap_('', 'abcd'));
}

function testDiffHalfMatch() {
    dmp.Diff_Timeout = 1;

    assertEquals(null, dmp.diff_halfMatch_('1234567890', 'abcdef'));

    assertEquivalent(['12', '90', 'a', 'z', '345678'], dmp.diff_halfMatch_('1234567890', 'a345678z'));

    assertEquivalent(['12123', '123121', 'a', 'z', '1234123451234'], dmp.diff_halfMatch_('121231234123451234123121', 'a1234123451234z'));
}

function testDiffLinesToChars() {
    assertLinesToCharsResultEquals({chars1: '\x01\x02\x01', chars2: '\x02\x01\x02', lineArray: ['', 'alpha\n', 'beta\n']}, dmp.diff_linesToChars_('alpha\nbeta\nalpha\n', 'beta\nalpha\nbeta\n'));
}

function testDiffCharsToLines() {
    const diffs: DiffMatchPatch.Diff[] = [[DIFF_EQUAL, '\x01\x02\x01'], [DIFF_INSERT, '\x02\x01\x02']];
    dmp.diff_charsToLines_(diffs, ['', 'alpha\n', 'beta\n']);
    assertEquivalent([[DIFF_EQUAL, 'alpha\nbeta\nalpha\n'], [DIFF_INSERT, 'beta\nalpha\nbeta\n']], diffs);
}

function testDiffCleanupMerge() {
    const diffs: DiffMatchPatch.Diff[] = [[DIFF_EQUAL, 'a'], [DIFF_DELETE, 'b'], [DIFF_INSERT, 'c']];
    dmp.diff_cleanupMerge(diffs);
    assertEquivalent([[DIFF_EQUAL, 'a'], [DIFF_DELETE, 'b'], [DIFF_INSERT, 'c']], diffs);
}

function testDiffCleanupSemanticLossless() {
    const diffs: DiffMatchPatch.Diff[] = [[DIFF_EQUAL, 'AAA\r\n\r\nBBB'], [DIFF_INSERT, '\r\nDDD\r\n\r\nBBB'], [DIFF_EQUAL, '\r\nEEE']];
    dmp.diff_cleanupSemanticLossless(diffs);
    assertEquivalent([[DIFF_EQUAL, 'AAA\r\n\r\n'], [DIFF_INSERT, 'BBB\r\nDDD\r\n\r\n'], [DIFF_EQUAL, 'BBB\r\nEEE']], diffs);
}

function testDiffCleanupSemantic() {
    const diffs: DiffMatchPatch.Diff[] = [[DIFF_DELETE, 'ab'], [DIFF_INSERT, 'cd'], [DIFF_EQUAL, '12'], [DIFF_DELETE, 'e']];
  dmp.diff_cleanupSemantic(diffs);
    assertEquivalent([[DIFF_DELETE, 'ab'], [DIFF_INSERT, 'cd'], [DIFF_EQUAL, '12'], [DIFF_DELETE, 'e']], diffs);
}

function testDiffCleanupEfficiency() {
    dmp.Diff_EditCost = 4;

    const diffs: DiffMatchPatch.Diff[] = [[DIFF_DELETE, 'ab'], [DIFF_INSERT, '12'], [DIFF_EQUAL, 'wxyz'], [DIFF_DELETE, 'cd'], [DIFF_INSERT, '34']];
    dmp.diff_cleanupEfficiency(diffs);
    assertEquivalent([[DIFF_DELETE, 'ab'], [DIFF_INSERT, '12'], [DIFF_EQUAL, 'wxyz'], [DIFF_DELETE, 'cd'], [DIFF_INSERT, '34']], diffs);
}

function testDiffPrettyHtml() {
    const diffs: DiffMatchPatch.Diff[] = [[DIFF_EQUAL, 'a\n'], [DIFF_DELETE, '<B>b</B>'], [DIFF_INSERT, 'c&d']];
    assertEquals('<span>a&para;<br></span><del style="background:#ffe6e6;">&lt;B&gt;b&lt;/B&gt;</del><ins style="background:#e6ffe6;">c&amp;d</ins>', dmp.diff_prettyHtml(diffs));
}

function testDiffText() {
    const diffs: DiffMatchPatch.Diff[] = [[DIFF_EQUAL, 'jump'], [DIFF_DELETE, 's'], [DIFF_INSERT, 'ed'], [DIFF_EQUAL, ' over '], [DIFF_DELETE, 'the'], [DIFF_INSERT, 'a'], [DIFF_EQUAL, ' lazy']];
    assertEquals('jumps over the lazy', dmp.diff_text1(diffs));

    assertEquals('jumped over a lazy', dmp.diff_text2(diffs));
}

function testDiffDelta() {
    const diffs: DiffMatchPatch.Diff[] =
      [[DIFF_EQUAL, 'jump'], [DIFF_DELETE, 's'], [DIFF_INSERT, 'ed'], [DIFF_EQUAL, ' over '], [DIFF_DELETE, 'the'], [DIFF_INSERT, 'a'], [DIFF_EQUAL, ' lazy'], [DIFF_INSERT, 'old dog']];
    const text1 = dmp.diff_text1(diffs);
    assertEquals('jumps over the lazy', text1);

    const delta = dmp.diff_toDelta(diffs);
    assertEquals('=4\t-1\t+ed\t=6\t-3\t+a\t=5\t+old dog', delta);

    assertEquivalent(diffs, dmp.diff_fromDelta(text1, delta));
}

function testDiffXIndex() {
    assertEquals(5, dmp.diff_xIndex([[DIFF_DELETE, 'a'], [DIFF_INSERT, '1234'], [DIFF_EQUAL, 'xyz']], 2));
}

function testDiffLevenshtein() {
    assertEquals(4, dmp.diff_levenshtein([[DIFF_DELETE, 'abc'], [DIFF_INSERT, '1234'], [DIFF_EQUAL, 'xyz']]));
}

function testDiffBisect() {
    const a = 'cat';
    const b = 'map';
    assertEquivalent([[DIFF_DELETE, 'c'], [DIFF_INSERT, 'm'], [DIFF_EQUAL, 'a'], [DIFF_DELETE, 't'], [DIFF_INSERT, 'p']], dmp.diff_bisect_(a, b, Number.MAX_VALUE));
}

function testDiffMain() {
    assertEquivalent([], dmp.diff_main('', '', false));

    dmp.Diff_Timeout = 0;
    // Simple cases.
    assertEquivalent([[DIFF_DELETE, 'a'], [DIFF_INSERT, 'b']], dmp.diff_main('a', 'b', false));
}

// MATCH TEST FUNCTIONS

function testMatchAlphabet() {
    const expected: {[char: string]: number} = {};
    expected['a'] = 4;
    expected['b'] = 2;
    expected['c'] = 1;
    assertEquivalent(expected, dmp.match_alphabet_('abc'));
}

function testMatchBitap() {
    dmp.Match_Distance = 100;
    dmp.Match_Threshold = 0.5;

    assertEquals(5, dmp.match_bitap_('abcdefghijk', 'fgh', 5));
}

function testMatchMain() {
    assertEquals(0, dmp.match_main('abcdef', 'abcdef', 1000));
}

// PATCH TEST FUNCTIONS

function testPatchObj() {
    // Patch Object.
    const p = new DiffMatchPatch.patch_obj();
    assertEquals(null, p.start1);
    assertEquals(null, p.start2);

    p.start1 = 20;
    p.start2 = 21;
    p.length1 = 18;
    p.length2 = 17;
    p.diffs = [[DIFF_EQUAL, 'jump'], [DIFF_DELETE, 's'], [DIFF_INSERT, 'ed'], [DIFF_EQUAL, ' over '], [DIFF_DELETE, 'the'], [DIFF_INSERT, 'a'], [DIFF_EQUAL, '\nlaz']];
    const strp = p.toString();
    assertEquals('@@ -21,18 +22,17 @@\n jump\n-s\n+ed\n  over \n-the\n+a\n %0Alaz\n', strp);
}

function testPatchFromText() {
    const strp = '@@ -21,18 +22,17 @@\n jump\n-s\n+ed\n  over \n-the\n+a\n %0Alaz\n';
    assertEquals(strp, dmp.patch_fromText(strp)[0].toString());
}

function testPatchToText() {
    const strp = '@@ -21,18 +22,17 @@\n jump\n-s\n+ed\n  over \n-the\n+a\n  laz\n';
    const p = dmp.patch_fromText(strp);
    assertEquals(strp, dmp.patch_toText(p));
}

function testPatchAddContext() {
    dmp.Patch_Margin = 4;
    const p = dmp.patch_fromText('@@ -21,4 +21,10 @@\n-jump\n+somersault\n')[0];
    dmp.patch_addContext_(p, 'The quick brown fox jumps over the lazy dog.');
    assertEquals('@@ -17,12 +17,18 @@\n fox \n-jump\n+somersault\n s ov\n', p.toString());
}

function testPatchMake() {
    const text1 = 'The quick brown fox jumps over the lazy dog.';
    const text2 = 'That quick brown fox jumped over a lazy dog.';
    let expectedPatch = '@@ -1,8 +1,7 @@\n Th\n-at\n+e\n  qui\n@@ -21,17 +21,18 @@\n jump\n-ed\n+s\n  over \n-a\n+the\n  laz\n';
    let patches = dmp.patch_make(text2, text1);
    assertEquals(expectedPatch, dmp.patch_toText(patches));

    // Method 1
    expectedPatch = '@@ -1,11 +1,12 @@\n Th\n-e\n+at\n  quick b\n@@ -22,18 +22,17 @@\n jump\n-s\n+ed\n  over \n-the\n+a\n  laz\n';
    patches = dmp.patch_make(text1, text2);
    assertEquals(expectedPatch, dmp.patch_toText(patches));

    // Method 2
    const diffs = dmp.diff_main(text1, text2, false);
    patches = dmp.patch_make(diffs);
    assertEquals(expectedPatch, dmp.patch_toText(patches));

    // Method 3
    patches = dmp.patch_make(text1, diffs);
    assertEquals(expectedPatch, dmp.patch_toText(patches));

    // Method 4
    patches = dmp.patch_make(text1, text2, diffs);
    assertEquals(expectedPatch, dmp.patch_toText(patches));
}

function testPatchSplitMax() {
    const patches = dmp.patch_make('abcdefghijklmnopqrstuvwxyz01234567890', 'XabXcdXefXghXijXklXmnXopXqrXstXuvXwxXyzX01X23X45X67X89X0');
    dmp.patch_splitMax(patches);
    assertEquals(
        [
            '@@ -1,32 +1,46 @@\n',
            '+X\n ab\n+X\n cd\n+X\n ef\n+X\n gh\n+X\n ij\n+X\n kl\n+X\n mn\n+X\n op\n+X\n qr\n+X\n st\n+X\nuv\n+X\n wx\n+X\n yz\n+X\n 012345\n',
            '@@ -25,13 +39,18 @@',
            '\n zX01\n+X\n 23\n+X\n 45\n+X\n 67\n+X\n 89\n+X\n 0\n'
        ].join(''),
        dmp.patch_toText(patches));
}

function testPatchAddPadding() {
    const patches = dmp.patch_make('', 'test');
    assertEquals('@@ -0,0 +1,4 @@\n+test\n', dmp.patch_toText(patches));
    dmp.patch_addPadding(patches);
    assertEquals('@@ -1,8 +1,12 @@\n %01%02%03%04\n+test\n %01%02%03%04\n', dmp.patch_toText(patches));
}

function testPatchApply() {
    dmp.Match_Distance = 1000;
    dmp.Match_Threshold = 0.5;
    dmp.Patch_DeleteThreshold = 0.5;
    const patches = dmp.patch_make('The quick brown fox jumps over the lazy dog.', 'That quick brown fox jumped over a lazy dog.');
    const results = dmp.patch_apply(patches, 'The quick brown fox jumps over the lazy dog.');
    assertEquivalent(['That quick brown fox jumped over a lazy dog.', [true, true]], results);
}

declare function assertEquals<T>(expected: T, actual: T): void;

declare function assertEquivalent<T>(expected: T[], actual: T[]): void;
declare function assertEquivalent<T extends {}>(expected: T, actual: T): void;

declare function assertLinesToCharsResultEquals(expected: {chars1: string, chars2: string, lineArray: string[]}, actual: {chars1: string, chars2: string, lineArray: string[]}): void;
