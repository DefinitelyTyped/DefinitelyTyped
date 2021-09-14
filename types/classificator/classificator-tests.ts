// Type definitions for classificator 0.3
// Project: https://github.com/Wozacosta/classificator
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Definitions by: Nixinova <https://github.com/Nixinova>

import * as classificator from 'classificator';

// $ExpectType classificator.NaiveBayes
classificator();
// $ExpectType classificator.NaiveBayes
classificator({ alpha: 1 });
// $ExpectType classificator.NaiveBayes
classificator({ tokenizer: (text: string) => text.split(' ') });

// $ExpectError
classificator.fromJson(['array']);

// $ExpectType classificator.NaiveBayes
const classifier = classificator();
// $ExpectType classificator.NaiveBayes
classifier.learn('text', 'category');
// $ExpectType classificator.NaiveBayes
classifier.unlearn('text', 'category');
// $ExpectType string
classifier.toJson();

classifier.learn('text!', 'category!');
// $ExpectType classificator.ClassificationResults
const results = classifier.categorize('text');
// $ExpectType string
results.predictedCategory;
// $ExpectType string
results.likelihoods[0].category;
// $ExpectType number
results.likelihoods[0].proba;
