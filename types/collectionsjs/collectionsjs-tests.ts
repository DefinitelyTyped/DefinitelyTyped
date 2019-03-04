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

const item = { name: 'Sansa Stark', age: 13 };

const array = [
    { name: 'Robert Baratheon', age: 40 },
    { name: 'Joffrey Baratheon', age: 13 }
];

const collection = new Collection(collectable); // $ExpectType Collection<{ name: string; age: number; }>

collection.add(item); // $ExpectType Collection<{ name: string; age: number; }>
collection.all(); // $ExpectType Collection<{ name: string; age: number; }>
collection.average('age'); // $ExpectType number
collection.chunk(2).all(); // $ExpectType Collection<{ name: string; age: number; }>
collection.collect(collectable); // $ExpectType Collection<{ name: string; age: number; }>
collection.concat(characters); // $ExpectType Collection<{ name: string; age: number; }>
collection.contains(stark => stark.name === 'John Snow'); // $ExpectType boolean
collection.count(); // $ExpectType number
collection.each(stark => stark.age = 3); // $ExpectType Collection<{ name: string; age: number; }>
collection.filter(stark => stark.age === 14); // $ExpectType Collection<{ name: string; age: number; }>
collection.find('bran'); // $ExpectType number
collection.first(item => item.age > 7); // $ExpectType { name: string; age: number; }
collection.flatten(true); // $ExpectType Collection<{ name: string; age: number; }>
collection.get(2); // $ExpectType { name: string; age: number; }
collection.has({ name: 'Bran Stark', age: 7 }); // $ExpectType boolean
collection.join(); // $ExpectType string
collection.keys(); // $ExpectType Collection<{ name: string; age: number; }>
collection.last(); // $ExpectType { name: string; age: number; }
collection.map(stark => stark.name); // $ExpectType Collection<{ name: string; age: number; }>
collection.pluck('name'); // $ExpectType Collection<{ name: string; age: number; }>
collection.push({name: 'Robb Stark', age: 17}); // $ExpectType Collection<{ name: string; age: number; }>
collection.reduce((previous, current) => previous.age + current.age, 0); // $ExpectType any
collection.reject(stark => stark.age < 14); // $ExpectType Collection<{ name: string; age: number; }>
collection.remove({name: 'Robb Stark', age: 17}); // $ExpectType boolean
collection.reverse(); // $ExpectType Collection<{ name: string; age: number; }>
collection.skip(2); // $ExpectType Collection<{ name: string; age: number; }>
collection.slice(1, 3); // $ExpectType Collection<{ name: string; age: number; }>
collection.sort(); // $ExpectType Collection<{ name: string; age: number; }>
collection.sortBy('name'); // $ExpectType Collection<{ name: string; age: number; }>
collection.stringify(); // $ExpectType string
collection.sum('age'); // $ExpectType any
collection.take(2); // $ExpectType Collection<{ name: string; age: number; }>
collection.macro('addToMembers', (collection, n) => collection.map((collectionItem: any) => collectionItem + n)); // $ExpectType any
collection.unique(stark => stark.age); // $ExpectType Collection<{ name: string; age: number; }>
collection.values(); // $ExpectType Collection<{ name: string; age: number; }>
collection.where('age', 14); // $ExpectType Collection<{ name: string; age: number; }>
collection.where(stark => stark.age === 14); // $ExpectType Collection<{ name: string; age: number; }>
collection.zip(array); // $ExpectType Collection<{ name: string; age: number; }>
