import SortedSet = require('collections/sorted-set');

interface Person {
    name: string;
}

let set = new SortedSet<Person>(
    [{name: 'John'}, {name: 'Jack'}, {name: 'Linda'}],
    (a: Person, b: Person) => a.name === b.name,
    (a: Person, b: Person) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
);

let p1: Person | undefined = set.max();
let p2: Person | undefined = set.min();


set.push({name: 'Laurie'}, {name: 'Max'});
set.pop();

set.get({name: 'Laurie'});
set.has({name: 'John'});

let a = 1;
set.forEach((p: Person) => a++);