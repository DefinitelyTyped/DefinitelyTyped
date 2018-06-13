import { parsed, contentLoaded, loaded } from 'document-promises';

let promise: Promise<void>;
promise = parsed;
promise = contentLoaded;
promise = loaded;

parsed.then(() => {
    // Document parsed
});
contentLoaded.then(() => {
    // Document is ready
});
loaded.then(() => {
    // Document loaded
});
