import ner, { type Entity, type Token, type NERConfig, type NER } from 'wink-ner';

// Create instance using the factory function
const myNER: NER = ner();

// Basic configuration
const config: NERConfig = {
    tagsToIgnore: ['PUNCT'],
    valuesToIgnore: ['the', 'a'],
    ignoreDiacritics: true
};

myNER.defineConfig(config);

// Basic entity learning and recognition
const sampleEntities: Entity[] = [
    { text: 'Central Library', entityType: 'place' },
    { text: 'John Smith', entityType: 'person', uid: 'js001' },
    { text: 'Green Tea', entityType: 'product', value: 'tea' }
];

// Learn entities
myNER.learn(sampleEntities);

// Sample tokens for recognition
const sampleTokens: Token[] = [
    { value: 'John', tag: 'NOUN' },
    { value: 'Smith', tag: 'NOUN' },
    { value: 'visited', tag: 'VERB' },
    { value: 'Central', tag: 'NOUN' },
    { value: 'Library', tag: 'NOUN' }
];

// Recognition example
const recognized = myNER.recognize(sampleTokens);
const predicted = myNER.predict(sampleTokens);

// Export/Import functionality
const exported = myNER.exportJSON();
myNER.reset();
myNER.importJSON(exported);