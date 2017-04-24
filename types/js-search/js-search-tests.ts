var theGreatGatsby = {
  isbn: '9781597226769',
  title: 'The Great Gatsby',
  author: {
    name: 'F. Scott Fitzgerald'
  },
  tags: ['book', 'inspirational']
};
var theDaVinciCode = {
  isbn: '0307474275',
  title: 'The DaVinci Code',
  author: {
    name: 'Dan Brown'
  },
  tags: ['book', 'mystery']
};
var angelsAndDemons = {
  isbn: '074349346X',
  title: 'Angels & Demons',
  author: {
    name: 'Dan Brown',
  },
  tags: ['book', 'mystery']
};

var search = new JsSearch.Search('isbn');
search.addIndex('title');
search.addIndex(['author', 'name']);
search.addIndex('tags')

search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);

search.search('The');    // [theGreatGatsby, theDaVinciCode]
search.search('scott');  // [theGreatGatsby]
search.search('dan');    // [angelsAndDemons, theDaVinciCode]
search.search('mystery') // [angelsAndDemons, theDaVinciCode]

search.tokenizer = <JsSearch.ITokenizer>{
  tokenize(text /* string */) {
    // Convert text to an Array of strings and return the Array
  }
};


// Function should accept a string param and return a string
var stemmer = function () { return 'foobar' };

search.tokenizer = new JsSearch.StemmingTokenizer(stemmer, new JsSearch.SimpleTokenizer());


search.tokenizer = new JsSearch.StopWordsTokenizer(new JsSearch.SimpleTokenizer());

JsSearch.StopWordsMap.the = false; // Do not treat "the" as a stop word
JsSearch.StopWordsMap.bob = true;  // Treat "bob" as a stop word

search.searchIndex = new JsSearch.UnorderedSearchIndex();
