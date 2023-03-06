import IterateObject = require("iterate-object");

// Array of numbers
IterateObject([1, 2, 3, 4, 5, 6, 7], (value, i) => {
  `v[${i}] = ${value}`;
});

// Array of strings
IterateObject(["Alice", "Bob", "Carol", "Dave"], (value, i, arr) => {
  const next = arr[i + 1] ? ` Next: ${arr[i + 1]}` : "";
  `Current: ${value}${next}`;
});

// Heterogeneous array
IterateObject(["Alice", 1, "Carol", 2], (value, i, arr) => {
  const next = arr[i + 1] ? ` Next: ${arr[i + 1]}` : "";
  `Current: ${value}${next}`;
});

// Array with two arguments
IterateObject(["Alice", 1, "Carol", 2], (value, i) => {
  `${value} is at index ${i}`;
});

// Array with one argument
IterateObject(["Alice", 1, "Carol", 2], (value) => {
  value;
});

// Object with one argument
IterateObject(
  {
    name: "Bob",
    age: 42,
  },
  (value) => {
    value;
  }
);

// Object with two arguments
IterateObject(
  {
    name: "Bob",
    age: 42,
  },
  (value, name) => {
    `${name} = ${value}`;
  }
);

// Object with three arguments
IterateObject(
  {
    name: "Bob",
    age: 42,
  },
  (value, name, obj) => {
    `${name} = ${value} in ${obj}`;
  }
);
