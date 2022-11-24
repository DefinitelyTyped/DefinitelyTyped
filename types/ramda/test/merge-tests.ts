import * as R from 'ramda';

() => {
    R.merge({ name: 'fred', age: 10 }, { age: 40 });
    // => { 'name': 'fred', 'age': 40 }
};

() => {
    R.merge(R.__, { x: 0 })({ x: 5, y: 2 }); // {x: 0, y: 2}
    R.merge(R.__)({ x: 0 }, { x: 5, y: 2 }); // {x: 0, y: 2}
};
