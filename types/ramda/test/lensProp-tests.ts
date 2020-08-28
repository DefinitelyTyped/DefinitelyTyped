import * as R from 'ramda';

() => {
  const phraseLens = R.lensProp('phrase');
  const obj1 = { phrase: 'Absolute filth . . . and I LOVED it!' };
  const obj2 = { phrase: "What's all this, then?" };
  phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
  phraseLens(obj2); // => "What's all this, then?"
  phraseLens.set('Ooh Betty', obj1); // => { phrase: 'Ooh Betty'}
};
