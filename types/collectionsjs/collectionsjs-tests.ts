import Collection from 'collectionsjs';

const collectable = [
    { name: 'Arya Stark', age: 9 },
    { name: 'Bran Stark', age: 7 },
    { name: 'Jon Snow', age: 14 }
];

const characters = [
    { name: 'Ned Stark', age: 40},
    { name: 'Catelyn Stark', age: 35}
];

const item = { 6: 7 };

const array = ['a', 'b', 'c'];

const collection = new Collection(collectable); // $ExpectType Collection

collection.add(item); // $ExpectType Collection
collection.all(); // $ExpectType Collection
collection.average('age'); // $ExpectType number
collection.chunk(2).all(); // $ExpectType Collection
collection.collect(collectable); // $ExpectType Collection
collection.concat(characters); // $ExpectType Collection
collection.contains(stark => stark.name === 'John Snow'); // $ExpectType boolean
collection.count(); // $ExpectType number
collection.each(t => t = 3); // $ExpectType Collection
collection.filter(stark => stark.age === 14); // $ExpectType Collection
collection.find('bran'); // $ExpectType number
collection.first(item => item.age > 7); // $ExpectType any
collection.flatten(true); // $ExpectType Collection
collection.get(2); // $ExpectType any
collection.has({ name: 'Bran Stark', age: 7 }); // $ExpectType boolean
collection.join(); // $ExpectType string
collection.keys(); // $ExpectType Collection
collection.last(); // $ExpectType any
collection.map(stark => stark.name); // $ExpectType Collection
collection.pluck('name'); // $ExpectType Collection
collection.push({name: 'Robb Stark', age: 17}); // $ExpectType Collection
collection.reduce((previous, current) => previous + current, 0); // $ExpectType any
collection.reject(stark => stark.age < 14); // $ExpectType Collection
collection.remove({name: 'Robb Stark', age: 17}); // $ExpectType boolean
collection.reverse(); // $ExpectType Collection
collection.skip(2); // $ExpectType Collection
collection.slice(1, 3); // $ExpectType Collection
collection.sort(); // $ExpectType Collection
collection.sortBy('name'); // $ExpectType Collection
collection.stringify(); // $ExpectType string
collection.sum('age'); // $ExpectType any
collection.take(2); // $ExpectType Collection
collection.macro('addToMembers', (collection, n) => collection.map((collectionItem: any) => collectionItem + n)); // $ExpectType any
collection.unique(s => s.grade); // $ExpectType Collection
collection.values(); // $ExpectType Collection
collection.where('age', 14); // $ExpectType Collection
collection.where(stark => stark.age === 14); // $ExpectType Collection
collection.zip(array); // $ExpectType Collection
