import Sentiment = require('sentiment');

const sentiment = new Sentiment();

const options: Sentiment.AnalysisOptions = {
    extras: {
        cats: 5,
        amazing: 2,
    },
};
// $ExpectType AnalysisResult
sentiment.analyze('Cats are totally amazing!', options);

const frLanguage: Sentiment.LanguageModule = {
    labels: { stupide: -2 },
    scoringStrategy: {
        apply: (tokens: string[], cursor: number, tokenScore: number) => {
            if (cursor > 0) {
                const prevtoken = tokens[cursor - 1];
                if (prevtoken === 'pas') {
                    tokenScore = -tokenScore;
                }
            }
            return tokenScore;
        },
    },
};
// $ExpectType void
sentiment.registerLanguage('fr', frLanguage);
// $ExpectType AnalysisResult
sentiment.analyze("Le chat n'est pas stupide", { language: 'fr' });
