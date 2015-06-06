/// <reference path="collection.d.ts" />

// there are various instances in these tests when the <any> type
// is provided, this is to prevent the compiler from complaining
// when I violate the type enforcement posed by the various
// collection types.

var assortment: Assortment = {}

function testAssortment() {
    // assortments can be indexed by either number or string
    assortment[0] = 0;
    assortment['1'] = 1;
    
    // assortments can store any type
    assortment['a'] = 'a';
    assortment['true'] = true;
}

testAssortment();


var collection: Collection<number> = {};

function testCollection() {
    // collections can be indexed by either number or string
    collection[0] = 0;
    collection['1'] = 1;
    
    // a collection can always be expected to provide back its type
    var zero: number = collection[0];
    var one: number = collection[1];
    
    // collections should not store values that aren't of their type
    collection['b'] = <any>'b'; // would have thrown compiler error
    
    // collections also should not return values that aren't their type
    var b: string = <any>collection['b']; // would have thrown compiler error
}

testCollection();


var dictionary: Dictionary = {};

function testDictionary() {
    // dictionarys can store any type and are indexed by string
    dictionary['b'] = 'b';
    dictionary['1'] = 1;
    dictionary['true'] = true;
    
    // also, hopefully in the future, Dictionarys will error with these expressions as well
    // However, TypeScript currently does not enforce key types for arrays

    // dictionarys should not use any index value, but string
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


var thesaurus: Thesaurus<string> = {};

function testThesaurus() {
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