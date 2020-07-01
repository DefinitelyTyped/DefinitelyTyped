import BayesClassifier = require('bayes-classifier');

const classifier = new BayesClassifier();

const positiveDocuments = [
    `I love tacos.`,
    `Dude, that burrito was epic!`,
    `Holy cow, these nachos are so good and tasty.`,
    `I am drooling over the awesome bean and cheese quesadillas.`,
];

const negativeDocuments = [
    `Gross, worst taco ever.`,
    `The buritos gave me horrible diarrhea.`,
    `I'm going to puke if I eat another bad nacho.`,
    `I'd rather die than eat those nasty enchiladas.`,
];

classifier.addDocuments(positiveDocuments, `positive`);
classifier.addDocuments(negativeDocuments, `negative`);

classifier.train();

classifier.classify(`I heard the mexican restaurant is great!`); // "positive"
classifier.classify(`I don't want to eat there again.`); // "negative"
classifier.classify(`The torta is epicly bad.`); // "negative"
classifier.classify(`The torta is tasty.`); // "positive"

classifier.getClassifications(`Burritos are the meaning of life.`);
/*
 [ { label: 'positive', value: 0.22222222222222224 },
   { label: 'negative', value: 0.11111111111111112 } ]
*/
