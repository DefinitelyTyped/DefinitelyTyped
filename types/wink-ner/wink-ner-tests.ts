import * as NER from 'wink-ner';

// Create instance
const ner = new NER();

// Basic configuration
ner.defineConfig({
    tagsToIgnore: ['PUNCT'],
    valuesToIgnore: ['the', 'a'],
    ignoreDiacritics: true
});

// Basic entity learning and recognition
const sampleEntities: NER.Entity[] = [
    { text: 'Central Library', entityType: 'place' },
    { text: 'John Smith', entityType: 'person', uid: 'js001' },
    { text: 'Green Tea', entityType: 'product', value: 'tea' }
];

// Learn entities
ner.learn(sampleEntities);

// Sample tokens for recognition
const sampleTokens: NER.Token[] = [
    { value: 'John', tag: 'NOUN' },
    { value: 'Smith', tag: 'NOUN' },
    { value: 'visited', tag: 'VERB' },
    { value: 'Central', tag: 'NOUN' },
    { value: 'Library', tag: 'NOUN' }
];

// Recognition example
const recognized = ner.recognize(sampleTokens);
// -> [
//     { value: 'John', tag: 'NOUN', entityType: 'person', uid: 'js001' },
//     { value: 'Smith', tag: 'NOUN', entityType: 'person', uid: 'js001' },
//     { value: 'visited', tag: 'VERB' },
//     { value: 'Central', tag: 'NOUN', entityType: 'place' },
//     { value: 'Library', tag: 'NOUN', entityType: 'place' }
// ]

// Predict (alias for recognize)
const predicted = ner.predict(sampleTokens);
// Same output as recognize()

// Export/Import functionality
const exported = ner.exportJSON();
// Reset the NER instance
ner.reset();
// Import the previously exported data
ner.importJSON(exported);

// Learning multiple variations of entities
const moreEntities: NER.Entity[] = [
    // Place variations
    { text: 'City Park', entityType: 'place', value: 'park' },
    { text: 'Central Park', entityType: 'place', value: 'park' },
    { text: 'Park', entityType: 'place', value: 'park' },
    
    // Location examples
    { text: 'Main Street', entityType: 'location', uid: 'ms001' },
    { text: 'Main St', entityType: 'location', uid: 'ms001', value: 'main street' },
    
    // Product examples with normalization
    { text: 'Orange Juice', entityType: 'product' },
    { text: 'Fresh Orange Juice', entityType: 'product', value: 'orange juice' }
];

// Learn additional entities
ner.learn(moreEntities);

// Test with complex text
const complexTokens: NER.Token[] = [
    { value: 'City', tag: 'NOUN' },
    { value: 'Park', tag: 'NOUN' },
    { value: 'is', tag: 'VERB' },
    { value: 'near', tag: 'PREP' },
    { value: 'Main', tag: 'NOUN' },
    { value: 'Street', tag: 'NOUN' }
];

const complexRecognized = ner.recognize(complexTokens);
// -> [
//     { value: 'City', tag: 'NOUN', entityType: 'place', value: 'park' },
//     { value: 'Park', tag: 'NOUN', entityType: 'place', value: 'park' },
//     { value: 'is', tag: 'VERB' },
//     { value: 'near', tag: 'PREP' },
//     { value: 'Main', tag: 'NOUN', entityType: 'location', uid: 'ms001' },
//     { value: 'Street', tag: 'NOUN', entityType: 'location', uid: 'ms001' }
// ]