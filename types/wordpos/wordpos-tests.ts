import WordPOS from 'wordpos';

WordPOS; // $ExpectType typeof WordPOS

WordPOS.prototype.WNdb; // $ExpectType WordnetDatabase

WordPOS.prototype.stopwords; // $ExpectType string[]

new WordPOS({}); // $ExpectType WordPOS
new WordPOS({dictPath: "", profile: false, stopwords: false }); // $ExpectType WordPOS

const wordpos = new WordPOS(); // $ExpectType WordPOS

wordpos.getAdjectives("text"); // $ExpectType Promise<string[]>
wordpos.getAdjectives("text", (result: string[]) => null); // $ExpectType Promise<string[]>

wordpos.getAdverbs("text"); // $ExpectType Promise<string[]>
wordpos.getAdverbs("text", (result: string[]) => null); // $ExpectType Promise<string[]>

wordpos.getNouns("text"); // $ExpectType Promise<string[]>
wordpos.getNouns("text", (result: string[]) => null); // $ExpectType Promise<string[]>

wordpos.getVerbs("text"); // $ExpectType Promise<string[]>
wordpos.getVerbs("text", (result: string[]) => null); // $ExpectType Promise<string[]>

wordpos.getPOS("text"); // $ExpectType Promise<POSResult>
wordpos.getPOS("text", (result) => result /* $ExpectType POSResult */); // $ExpectType Promise<POSResult>

wordpos.isAdjective("text"); // $ExpectType Promise<boolean>
wordpos.isAdjective("text", (result: boolean, word: string) => null); // $ExpectType Promise<boolean>

wordpos.isAdverb("text"); // $ExpectType Promise<boolean>
wordpos.isAdverb("text", (result: boolean, word: string) => null); // $ExpectType Promise<boolean>

wordpos.isNoun("text"); // $ExpectType Promise<boolean>
wordpos.isNoun("text", (result: boolean, word: string) => null); // $ExpectType Promise<boolean>

wordpos.isVerb("text"); // $ExpectType Promise<boolean>
wordpos.isVerb("text", (result: boolean, word: string) => null); // $ExpectType Promise<boolean>

wordpos.lookup("text"); // $ExpectType Promise<WordDef[]>
wordpos.lookup("text", (result, word: string) => result /* $ExpectType WordDef[] */); // $ExpectType Promise<WordDef[]>

wordpos.lookupAdjective("text"); // $ExpectType Promise<WordDef[]>
wordpos.lookupAdjective("text", (result, word: string) => result /* $ExpectType WordDef[] */); // $ExpectType Promise<WordDef[]>

wordpos.lookupAdverb("text"); // $ExpectType Promise<WordDef[]>
wordpos.lookupAdverb("text", (result, word: string) => result /* $ExpectType WordDef[] */); // $ExpectType Promise<WordDef[]>

wordpos.lookupNoun("text"); // $ExpectType Promise<WordDef[]>
wordpos.lookupNoun("text", (result, word: string) => result /* $ExpectType WordDef[] */); // $ExpectType Promise<WordDef[]>

wordpos.lookupVerb("text"); // $ExpectType Promise<WordDef[]>
wordpos.lookupVerb("text", (result, word: string) => result /* $ExpectType WordDef[] */); // $ExpectType Promise<WordDef[]>

wordpos.parse("text"); // $ExpectType string[]
wordpos.parse(["text"]); // $ExpectType string[]

wordpos.rand((word: string[]) => null); // $ExpectType Promise<string[]>
wordpos.rand({}); // $ExpectType Promise<string[]>
wordpos.rand({count: 0, startsWith: "zzz"}); // $ExpectType Promise<string[]>
wordpos.rand({count: 0, startsWith: "zzz"}, (word: string[]) => null); // $ExpectType Promise<string[]>

wordpos.randAdjective((word: string[]) => null); // $ExpectType Promise<string[]>
wordpos.randAdjective({}); // $ExpectType Promise<string[]>
wordpos.randAdjective({count: 0, startsWith: "zzz"}); // $ExpectType Promise<string[]>
wordpos.randAdjective({count: 0, startsWith: "zzz"}, (word: string[]) => null); // $ExpectType Promise<string[]>

wordpos.randAdverb((word: string[]) => null); // $ExpectType Promise<string[]>
wordpos.randAdverb({}); // $ExpectType Promise<string[]>
wordpos.randAdverb({count: 0, startsWith: "zzz"}); // $ExpectType Promise<string[]>
wordpos.randAdverb({count: 0, startsWith: "zzz"}, (word: string[]) => null); // $ExpectType Promise<string[]>

wordpos.randNoun((word: string[]) => null); // $ExpectType Promise<string[]>
wordpos.randNoun({}); // $ExpectType Promise<string[]>
wordpos.randNoun({count: 0, startsWith: "zzz"}); // $ExpectType Promise<string[]>
wordpos.randNoun({count: 0, startsWith: "zzz"}, (word: string[]) => null); // $ExpectType Promise<string[]>

wordpos.randVerb((word: string[]) => null); // $ExpectType Promise<string[]>
wordpos.randVerb({}); // $ExpectType Promise<string[]>
wordpos.randVerb({count: 0, startsWith: "zzz"}); // $ExpectType Promise<string[]>
wordpos.randVerb({count: 0, startsWith: "zzz"}, (word: string[]) => null); // $ExpectType Promise<string[]>

wordpos.seek(1000, "text"); // $ExpectType Promise<WordDef[]>
wordpos.seek(1000, "text", (err: Error | null, result) => result /* $ExpectType WordDef */) ; // $ExpectType Promise<WordDef[]>
