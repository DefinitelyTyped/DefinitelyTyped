import * as Tagger from 'wink-pos-tagger';
import * as Tokenizer from 'wink-tokenizer';

const myTagger = new Tagger();
const myTokenizer = new Tokenizer();

// examples taken from official API: https://winkjs.org/wink-pos-tagger/
// There will not be any effect:
myTagger.defineConfig({ lemma: false });
// -> { lemma: true, normal: true }

myTagger.tag(myTokenizer.tokenize('I ate the entire pizza as I was feeling hungry.'));

const rawTokens = ['I', 'ate', 'the', 'entire', 'pizza', 'as', 'I', 'was', 'feeling', 'hungry', '.'];
// Tag the raw tokens.
myTagger.tagRawTokens(rawTokens);

myTagger.tagSentence('A bear just crossed the road.');
myTagger.tagSentence('I will bear all the expenses.');
myTagger.updateLexicon({ Obama: ['NNP'] });
