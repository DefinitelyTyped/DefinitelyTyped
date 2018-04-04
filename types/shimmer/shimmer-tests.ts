import * as shimmer from 'shimmer';

const fish = {
  name: 'shimmer',
  age: 1,
  getMotto: () => 'safer monkeypatching for Node.js'
};

const turtle = {
  name: 'node',
  age: 9
};

shimmer.wrap(fish, 'name', (originalName) => {
  return originalName + originalName;
});

shimmer.massWrap([fish, turtle], ['age'], (originalAge) => {
  return Math.pow(originalAge, 2);
});

shimmer.unwrap(fish, 'name');

shimmer.massUnwrap([fish, turtle], ['age']);
