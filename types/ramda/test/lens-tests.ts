import * as R from 'ramda';

() => {
  const headLens = R.lens(
    function get(arr: number[]) {
      return arr[0];
    },
    function set(val: number, arr: number[]) {
      return [val].concat(arr.slice(1));
    },
  );
  headLens([10, 20, 30, 40]); // => 10
  headLens.set('mu', [10, 20, 30, 40]); // => ['mu', 20, 30, 40]

  const phraseLens = R.lens(
    function get(obj: any) {
      return obj.phrase;
    },
    function set(val: string, obj: any) {
      const out = R.clone(obj);
      out.phrase = val;
      return out;
    },
  );
  const obj1 = { phrase: 'Absolute filth . . . and I LOVED it!' };
  const obj2 = { phrase: "What's all this, then?" };
  phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
  phraseLens(obj2); // => "What's all this, then?"
  phraseLens.set('Ooh Betty', obj1); // => { phrase: 'Ooh Betty'}
};
