import { jarowinkler, levenshtein, ngram, pearson, jaccard, tanimoto } from 'wuzzy';

declare const aString: string;
declare const aStringArr: string[];
declare const bString: string;
declare const bStringArr: string[];

jarowinkler(aString, bString, 0.5);
jarowinkler(aString, bStringArr);
jarowinkler(aStringArr, bString, 0.5);
jarowinkler(aStringArr, bStringArr);
// $ExpectError
jarowinkler();
// $ExpectError
jarowinkler([1, 2, 3], bStringArr);

levenshtein(aString, bString, { d: 1, i: 0.5, s: 1 });
levenshtein(aString, bStringArr);
levenshtein(aStringArr, bString, { d: 1, i: 0.5, s: 1 });
levenshtein(aStringArr, bStringArr);
// $ExpectError
levenshtein();
// $ExpectError
levenshtein(aString, bString, { d: 1, i: 0.5 });
// $ExpectError
levenshtein([1, 2, 3], bStringArr);

ngram(aString, bString, 0.5);
ngram(aString, bStringArr);
ngram(aStringArr, bString, 0.5);
ngram(aStringArr, bStringArr);
// $ExpectError
ngram();
// $ExpectError
ngram([1, 2, 3], bStringArr);

pearson({ a: 2.5, b: 1 }, { o: 3.5, e: 6.0 });
// $ExpectError
pearson();
// $ExpectError
pearson({ a: '2.5', b: '1' }, { o: '3.5', e: '6.0' });
// $ExpectError
pearson(aString, bString);
// $ExpectError
pearson(aStringArr, bStringArr);

jaccard(aString, bString);
jaccard(aString, bStringArr);
jaccard(aStringArr, bString);
jaccard(aStringArr, bStringArr);
// $ExpectError
jaccard();
// $ExpectError
jaccard([1, 2, 3], bStringArr);
