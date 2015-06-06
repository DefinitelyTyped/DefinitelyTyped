/// <reference path="collections.d.ts" />

// there are various instances in these tests when the <any> type
// is provided, this is to prevent the compiler from complaining
// when I violate the type enforcement posed by the various
// collection types.

var book: Book = {};

function testBook(): void {
    // books can store any type and are index by number
    book[0] = 'a';
    book[1] = 1;
    book[2] = true;
    
    // also, hopefully in the future, Dictionarys will error with these expressions as well
    // However, TypeScript currently does not enforce key types for arrays
    
    // books should not use any index type, but number
    var newBook: Book = <any>{'0': 'a', '1': 1, 2: true}; // should have thrown compiler error
    var a: string = newBook[<any>'0']; // should have thrown compiler error
    newBook[<any>'2'] = 2; // should have thrown compiler error
    
    // books should be used with type checking because of this
    if (typeof book[0] == 'string') {
      var b_str: string = book[0];
    } else if (typeof dictionary[0] == 'number') {
      var b_num: number = book[0];
    }
}

testBook();


var dictionary: Dictionary = {};

function testDictionary(): void {
    // dictionarys can store any type and are indexed by string
    dictionary['b'] = 'b';
    dictionary['1'] = 1;
    dictionary['true'] = true;
    
    // also, hopefully in the future, Dictionarys will error with these expressions as well
    // However, TypeScript currently does not enforce key types for arrays

    // dictionarys should not use any index type, but string
    var newDictionary: Dictionary = <any>{0: 'a', 'b': 'b'}; // should have thrown compiler error
    var a: string = newDictionary[<any>0]; // should have thrown compiler error
    newDictionary[<any>1] = '1'; // should have thrown compiler error
  
    // dictionarys should be used with type checking because of this
    if (typeof dictionary['b'] == 'string') {
      var b_str: string = dictionary['b'];
    } else if (typeof dictionary['b'] == 'number') {
      var b_num: number = dictionary['b'];
    }
    
    // but we can also just take the value if we don't care about the type
    var one: any = dictionary['1'];
}

testDictionary();


var table: Table<string> = {};

function testTable(): void {
    // a table is indexed by number
    table[0] = 'a combination of words';
    
    // it should not be indexed with any other value, but it can
    // in the current build of TypeScript
    var newTable: Table<string> = <any>{0: '0', '1': '1'}; // should have thrown compiler
                                                                    // error
    var zero: string = newTable[<any>'1']; // should have thrown compiler error
    newTable[<any>'2'] = '2'; // should have thrown compile error
    
    // a table will return its respective value
    var word: string = table[0];
    
    // assigning any other type will throw a compiler error
    table[2] = <any>2; // would have thrown compiler error
    // expecting any other type will throw a compiler error
    var two: number = <any>table[2]; // would have thrown compiler error
}

testTable();


var thesaurus: Thesaurus<string> = {};

function testThesaurus(): void {
    // a thesaurus is indexed by string
    thesaurus['word'] = 'a combination of varters';
    
    // it should not be indexed with any other value, but it can
    // in the current build of TypeScript
    var newThesaurus: Thesaurus<string> = <any>{0: '0', '1': '1'}; // should have thrown compiler
                                                                    // error
    var zero: string = newThesaurus[<any>0]; // should have thrown compiler error
    newThesaurus[<any>1] = '1'; // should have thrown compile error
    
    // a thesaurus will return its respective value
    var word: string = thesaurus['word'];
    
    // assigning any other type will throw a compiler error
    thesaurus['two'] = <any>2; // would have thrown compiler error
    // expecting any other type will throw a compiler error
    var two: number = <any>thesaurus['two']; // would have thrown compiler error
}