import * as classificator from 'classificator';

// $ExpectType NaiveBayes
classificator();
// $ExpectType NaiveBayes
classificator({ alpha: 1 });
// $ExpectType NaiveBayes
classificator({ tokenizer: (text: string) => text.split(' ') });

// @ts-expect-error
classificator.fromJson(100);

// $ExpectType NaiveBayes
const classifier = classificator();
// $ExpectType NaiveBayes
classifier.learn('text', 'category');
// $ExpectType NaiveBayes
classifier.unlearn('text', 'category');
// $ExpectType string
classifier.toJson();

classifier.learn('text!', 'category!');
// $ExpectType ClassificationResults
const results = classifier.categorize('text');
// $ExpectType string
results.predictedCategory;
// $ExpectType string
results.likelihoods[0].category;
// $ExpectType number
results.likelihoods[0].proba;
