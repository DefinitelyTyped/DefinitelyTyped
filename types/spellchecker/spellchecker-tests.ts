import * as Spellchecker from 'spellchecker';

const additionalDictionary = ['Xynoronmalade'];

// add words to the dictionary
additionalDictionary.forEach(word => Spellchecker.add(word));

let testWord = 'kat';
let testCorpus = 'The queeck brown fox jumped over the lazy dog, from Xynoronmalade';
let testCorpusAsync = 'The queeck brown fox jumped over the lazy dog, from Xynoronmalade';

// check and correct a single word
if (Spellchecker.isMisspelled(testWord)) {
  const corrections = Spellchecker.getCorrectionsForMisspelling(testWord);
  if (corrections.length > 0) {
    testWord = corrections[0];
  }
}

// check and correct words in a body of text
const misspellings = Spellchecker.checkSpelling(testCorpus);
misspellings.forEach(location => {
  const misspelled = testCorpus.slice(location.start, location.end);
  const corrections = Spellchecker.getCorrectionsForMisspelling(misspelled);
  if (corrections.length > 0) {
    testCorpus = testCorpus.replace(misspelled, corrections[0]);
  }
});

// check for corrections asynchronously
const asyncSpellCheck = async () => {
  // check and correct words in a body of text
  const misspellings = await Spellchecker.checkSpellingAsync(testCorpusAsync);
  misspellings.forEach(location => {
    const misspelled = testCorpusAsync.slice(location.start, location.end);
    const corrections = Spellchecker.getCorrectionsForMisspelling(misspelled);
    if (corrections.length > 0) {
      testCorpusAsync = testCorpusAsync.replace(misspelled, corrections[0]);
    }
  });
};
