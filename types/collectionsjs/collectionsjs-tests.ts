import Collection from 'collectionsjs';

const collectable = [
    { name: 'Arya Stark', age: 9 },
    { name: 'Bran Stark', age: 7 },
    { name: 'Jon Snow', age: 14 }
];

const collection = new Collection(collectable);

const item = { 6: 7 };

collection.add(item);
collection.all();
collection.average('age');
collection.chunk(2).all();
collection.collect(collectable);

const characters = [
    { name: 'Ned Stark', age: 40},
    { name: 'Catelyn Stark', age: 35}
];

const array = ['a', 'b', 'c'];

collection.concat(characters);
collection.contains(stark => stark.name === 'John Snow');
collection.count();
collection.each(t => t = 3);
collection.filter(stark => stark.age === 14);
collection.find('bran');
collection.first(item => item.age > 7);
collection.flatten(true);
collection.get(2);
collection.has({ name: 'Bran Stark', age: 7 });
collection.join();
collection.keys();
collection.last();
collection.map(stark => stark.name);
collection.pluck('name');
collection.push({name: 'Robb Stark', age: 17});
collection.reduce((previous, current) => previous + current, 0);
collection.reject(stark => stark.age < 14);
collection.remove({name: 'Robb Stark', age: 17});
collection.skip(2);
collection.slice(1, 3);
collection.sort();
collection.sortBy('name');
collection.stringify();
collection.sum('age');
collection.take(2);
collection.macro('addToMembers', (collection, n) => collection.map((collectionItem: any) => collectionItem + n));
collection.unique(s => s.grade);
collection.values();
collection.where('age', 14);
collection.where(stark => stark.age === 14);
collection.zip(array);
