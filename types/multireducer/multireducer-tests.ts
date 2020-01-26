import multireducer from 'multireducer';

// Declaring shims removes assert dependency. These tests are never executed, only typechecked, so this is fine.
declare function deepEqual<T>(actual: T, expected: T): void;

const initialState = { a: 1, b: 2, c: 3 };

const first = (state = initialState, action = {}) => {
  return { ...state, a: 10 };
};

const second = (state = initialState, action = {}) => {
  return { ...state, b: 20 };
};

const third = (state = initialState, action = {}) => {
  return { ...state, c: 30 };
};

const reducers = multireducer({ first, second, third })(undefined, {});

const expectedResult = {
  first: { a: 10, b: 2, c: 3 },
  second: { a: 1, b: 20, c: 3 },
  third: { a: 1, b: 2, c: 30 }
};

deepEqual(reducers, expectedResult);
