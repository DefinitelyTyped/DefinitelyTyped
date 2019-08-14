import { createLoader } from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";

let engine = createEngine('test-key');

createLoader(engine);

engine = createEngine('test-key', (key, value) => {
    if (typeof value === 'string') {
        return 'foo';
    }
    return value;
}, (key, value) => {
    if (key === 'foo') {
        return 'bar';
    }
    return value;
});

createLoader(engine);
