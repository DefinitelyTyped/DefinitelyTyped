import * as shimmer from 'shimmer';

const isWrapped: boolean = [].forEach.__wrapped || false;

shimmer.wrap(Array.prototype, 'forEach', (forEach) => {
    return (...args: any[]) => {
      forEach(...args);
    };
});

shimmer.unwrap(Array.prototype, 'forEach');

shimmer.massWrap([Map.prototype, Set.prototype], ['clear', 'forEach'], (fn) => {
    return (...args: any[]) => {
      const result = fn(...args);
      if (result) {
        throw new Error();
      }
      return result;
    };
});

shimmer.massUnwrap([Map.prototype, Set.prototype], ['clear', 'forEach']);
