// Test map
var sourceItems: KnockoutObservableArray<number> = ko.observableArray([1, 2, 3, 4, 5]);
var squares: KnockoutObservableArray<number> = sourceItems.map(function (x) { return x * x; });
var squaresAsStrings: KnockoutObservableArray<string> = sourceItems.map(function (x) { return (x * x).toString(); });

sourceItems.push(6);
// 'squares' has automatically updated and now contains [1, 4, 9, 16, 25, 36]
// 'squaresAsStrings' has automatically updated and now contains ['1', '4', '9', '16', '25', '36']

sourceItems.reverse();
// 'squares' now contains [36, 25, 16, 9, 4, 1]
// 'squaresAsStrings' now contains ['36', '25', '16', '9', '4', '1']

// Test Filtering

var evenSquares: KnockoutObservableArray<number> = squares.filter(function (x) { return x % 2 === 0; });
// evenSquares is now an observable containing [36, 16, 4]

sourceItems.push(9);
// This has no effect on evenSquares, because 9*9=81 is odd

sourceItems.push(10);
// evenSquares now contains [36, 16, 4, 100]

var sortedEvenSquares: KnockoutObservableArray<number> = evenSquares.sortBy(function (evenSquare, descending) {
    return descending(evenSquare);
});
// sortedEvenSquares now contains [100, 36, 16, 4]

class Person {
    public name: KnockoutObservable<string>;
    public yearOfBirth: KnockoutObservable<number>;

    constructor(name: string, yearOfBirth: number) {
        this.name = ko.observable(name);
        this.yearOfBirth = ko.observable(yearOfBirth);
    }
}

var persons: KnockoutObservableArray<Person> = ko.observableArray([
    new Person("Marilyn Monroe", 1926),
    new Person("Abraham Lincoln", 1809),
    new Person("Mother Teresa", 1910),
    new Person("John F. Kennedy", 1917),
    new Person("Martin Luther King", 1929),
    new Person("Nelson Mandela", 1918),
    new Person("Winston Churchill", 1874),
    new Person("Bill Gates", 1955),
    new Person("Muhammad Ali", 1942),
    new Person("Mahatma Gandhi", 1869),
    new Person("Queen Elizabeth II", 1926)
]);

// Persons sorted by name
var sortedByName: KnockoutObservableArray<Person> = persons.sortBy(function (person) {
    return person.name();
});

// sortedByName now contains
// [
//     new Person("Abraham Lincoln", 1809),
//     new Person("Bill Gates", 1955),
//     new Person("John F. Kennedy", 1917),
//     new Person("Mahatma Gandhi", 1869),
//     new Person("Marilyn Monroe", 1926),
//     new Person("Martin Luther King", 1929),
//     new Person("Mother Teresa", 1910),
//     new Person("Muhammad Ali", 1942)
//     new Person("Nelson Mandela", 1918),
//     new Person("Queen Elizabeth II", 1926),
//     new Person("Winston Churchill", 1874),
// ]

// Persons sorted by year of birth descending and then by name
var sortedByYearOfBirthAndThenName: KnockoutObservableArray<Person> = persons.sortBy(function (person, descending) {
    return [descending(person.yearOfBirth()), person.name()];
});

// sortedByYearOfBirthAndThenName now contains
// [
//     new Person("Abraham Lincoln", 1809),
//     new Person("Mahatma Gandhi", 1869),
//     new Person("Winston Churchill", 1874),
//     new Person("Mother Teresa", 1910),
//     new Person("John F. Kennedy", 1917),
//     new Person("Nelson Mandela", 1918),
//     new Person("Martin Luther King", 1929),
//     new Person("Bill Gates", 1955),
//     new Person("Marilyn Monroe", 1926),
//     new Person("Queen Elizabeth II", 1926),
//     new Person("Muhammad Ali", 1942)
// ]

var squareIndex: KnockoutObservable<{ [index: string]: number[] }> = squares.indexBy(function (square) {
    return square % 2 === 0 ? 'even' : 'odd';
});

// squareIndex now contains
// { even: [36, 16, 4], odd: [25, 9, 1] }

// Persons indexed by year of birth
var personsIndexedByYearBirth: KnockoutObservable<{ [index: number]: Person[] }> = persons.indexBy(function (person) {
    return person.yearOfBirth();
});

// personsIndexedByYearBirth now contains
// {
//     1809: [new Person("Abraham Lincoln", 1809)],
//     1869: [new Person("Mahatma Gandhi", 1869)],
//     1874: [new Person("Winston Churchill", 1874)],
//     1910: [new Person("Mother Teresa", 1910)],
//     1917: [new Person("John F. Kennedy", 1917)],
//     1918: [new Person("Nelson Mandela", 1918)],
//     1929: [new Person("Martin Luther King", 1929)],
//     1955: [new Person("Bill Gates", 1955)],
//     1926: [new Person("Marilyn Monroe", 1926),
//            new Person("Queen Elizabeth II", 1926)],
//     1942: [new Person("Muhammad Ali", 1942)]
// }

// Persons indexed uniquely by name.
// Notice unique indexes requires items to map to distint keys;
// otherwise an exception is thrown.
var personsIndexedByName: KnockoutObservable<{ [name: string]: Person }> = persons.uniqueIndexBy(function (person) {
    return person.name();
});

// personsIndexedByName now contains
// {
//     "Abraham Lincoln": new Person("Abraham Lincoln", 1809),
//     "Mahatma Gandhi": new Person("Mahatma Gandhi", 1869),
//     "Winston Churchill": new Person("Winston Churchill", 1874),
//     "Mother Teresa": new Person("Mother Teresa", 1910),
//     "John F. Kennedy": new Person("John F. Kennedy", 1917),
//     "Nelson Mandela": new Person("Nelson Mandela", 1918),
//     "Martin Luther King": new Person("Martin Luther King", 1929),
//     "Bill Gates": new Person("Bill Gates", 1955),
//     "Marilyn Monroe": new Person("Marilyn Monroe", 1926),
//     "Queen Elizabeth II": new Person("Queen Elizabeth II", 1926),
//     "Muhammad Ali": new Person("Muhammad Ali", 1942)
// }

var texts: KnockoutObservableArray<string> = ko.observableArray(['foo', 'bar', 'baz', 'qux', 'quux']);
// Index texts by
var indexedTexts: KnockoutObservable<{ [suffixOrPrefix: string]: string[] }> = texts.indexBy(function (text) {
    var firstLetter = text[0];
    var lastLetter = text[text.length - 1];
    return [firstLetter, lastLetter];
});

// indexedTexts now contains
// {
//     f: ['foo'],
//     b: ['bar', 'baz'],
//     q: ['qux', 'quux'],
//     o: ['foo'],
//     r: ['bar'],
//     z: ['baz'],
//     x: ['qux', 'quux']
// }


(() => {
	var sourceItems: KnockoutObservableArray<number> = ko.observableArray([1, 2, 3, 4, 5]);
	var asString: KnockoutObservableArray<string>;

	asString = sourceItems.map((x: number) => x.toString());

	asString = sourceItems.map<string>({
		mapping: (x: number) => x.toString(),
	});

	asString = sourceItems.map<string>({
		mapping: (x: number) => x.toString(),
		disposeItem: (x: string) => console.log('disposing map to', x),
	});

	asString = sourceItems.map<string>({
		mappingWithDisposeCallback: (x: number) => ({
			mappedValue: x.toString(),
			dispose: () => console.log('disposing map from', x),
		}),
	});

	asString = sourceItems.map(x => x.toString());

	asString = sourceItems.map({
		mapping: x => x.toString(),
	});

	asString = sourceItems.map<string>({
		mapping: x => x.toString(),
		disposeItem: x => console.log('disposing map to', x),
	});

	asString = sourceItems.map({
		mappingWithDisposeCallback: x => ({
			mappedValue: x.toString(),
			dispose: () => console.log('disposing map from', x),
		}),
	});

});
