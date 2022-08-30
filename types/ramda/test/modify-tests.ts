import * as R from 'ramda';

() => {
    const person = { name: 'James', age: 20, pets: ['dog', 'cat'] };
    R.modify('age', R.add(1), person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
};

() => {
    const person = { name: 'James', age: 20, pets: ['dog', 'cat'] };
    R.modify('pets', R.append('turtle'))(person); // => {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
};

() => {
    const arr = [1, 2, 3];
    R.modify(0, R.add(2), arr); // => [3, 2, 3]
};
