

// https://github.com/takuyaa/doublearray/blob/master/README.md
var words = [
    { k: 'a', v: 1 },
    { k: 'abc', v: 2 },
    { k: '奈良', v: 3 },
    { k: '奈良先端', v: 4 },
    { k: '奈良先端科学技術大学院大学', v: 5 }
];

var trie = doublearray.builder().build(words);

var trie = doublearray
    .builder()
    .append('a', 1)
    .append('abc', 2)
    .append('奈良', 3)
    .append('奈良先端', 4)
    .append('奈良先端科学技術大学院大学', 5)
    .build();

trie.contain('a');

trie.lookup('abc');

trie.commonPrefixSearch('奈良先端科学技術大学院大学');

var base_buffer: Int32Array = trie.bc.getBaseBuffer();
var check_buffer: Int32Array = trie.bc.getCheckBuffer();

var loaded_trie = doublearray.load(base_buffer, check_buffer);