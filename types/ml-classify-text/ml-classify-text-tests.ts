import { Classifier, Cocabulary as Vocabulary, Model, default as ClassifierButDefault } from "ml-classify-text";

// default test
ClassifierButDefault; // $ExpectType typeof Classifier

// classifier tests
const classifier = new Classifier({ nGramMin: 1337 });
classifier.model = {};
classifier.model; // $ExpectType Model
classifier.train("test data", "test label");
const predictions = classifier.predict("test data");
classifier.splitWords("test data"); // $ExpectType string[]
const tokens = classifier.tokenize("test data"); // $ExpectType Record<string, number>
const vector = classifier.vectorize(tokens); // $ExpectType Record<number, number>
classifier.cosineSimilarity(vector, vector); // $ExpectType number

// model tests
const model = new Model({ nGramMin: 1337 });
model.nGramMin = 123;
model.nGramMax = 123;
model.vocabulary = ["test", "data"];
model.vocabulary; // $ExpectType Vocabulary
model.data = {};
model.data; // $ExpectType Record<string, Record<string, number>>
model.serialize(); // $ExpectType ModelOptions

// vocabulary tests
const vocabulary = new Vocabulary(["test", "data"]);
vocabulary.size; // $ExpectType number
vocabulary.terms = ["new", "test", "data"];
vocabulary.terms; // $ExpectType Set<string>
vocabulary.add("more data!");
vocabulary.remove("test");
vocabulary.has("test"); // $ExpectType boolean
vocabulary.indexOf("test"); // $ExpectType number

// prediction tests
const prediction = predictions[0];
prediction.label = "test label 2";
prediction.label; // $ExpectType string
prediction.confidence = 0.5;
prediction.confidence; // $ExpectType number
