import g = require('generic-functions');

var tvShow: Object = {
  seasons: 2,
  show: "Better Call Saul"
};

console.log(g.strcmp("foo", "foo"));  // => true
console.log(g.icstrcmp("BAR", "bar")); // => true
console.log(g.strendswith("file.pdf", "pdf")); // => true
console.log(g.icstrendswith("file.PDF", "pdf")); // => true
console.log(g.endswithdot("file.pdf")); // => ".pdf"
console.log(g.objGetKeyByValue(tvShow, 2)); // => "seasons"
console.log(g.objGetKeyByValue(tvShow, "Better Call Saul")); // => "show"
