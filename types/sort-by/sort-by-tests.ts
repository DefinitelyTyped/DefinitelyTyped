import sortBy = require("sort-by");

const arr = [
    {
        name: "foo",
        age: 10,
    },
    {
        name: "bar",
        age: 100,
    },
    {
        name: "baz",
        age: 10,
    },
];

const sorted = arr.sort(sortBy("name"));
// sorted = [{name: 'bar', age: 100}, {name: 'baz', age: 1}, {name: 'foo', age: 10}]

const sorted2 = arr.sort(sortBy("age", "name"));
// sorted2 = [{name: 'baz', age: 1}, {name: 'foo', age: 10}, {name: 'bar', age: 100}]

const sorted3 = arr.sort(sortBy("-age", "name"));
// sorted3 = [{name: 'bar', age: 100}, {name: 'foo', age: 10}, {name: 'baz', age: 1}]

const sorted4 = arr.sort(sortBy("age", "-name"));
// sorted4 = [{name: 'baz', age: 1}, {name: 'foo', age: 10}, {name: 'bar', age: 100}]

const sorted5 = arr.sort(sortBy("-age", "-name"));
// sorted5 = [{name: 'bar', age: 100}, {name: 'foo', age: 10}, {name: 'baz', age: 1}]

const sorted6 = arr.sort(
    sortBy("age", (key, value) => {
        if (key === "age") {
            return value * -1;
        }

        return value;
    }),
);
