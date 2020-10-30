import * as libxslt from 'libxslt';
import * as libxmljs from 'libxmljs';

const document: libxmljs.Document = libxslt.libxmljs.parseXmlString('<xml></xml>');

let stylesheet: libxslt.Stylesheet;

stylesheet = libxslt.parse('<xslt></xslt>');

stylesheet = libxslt.parse(document);

libxslt.parse('<xslt></xslt>', (err, result) => {
    if (err == null) {
        stylesheet = result;
    }
});

libxslt.parse(document, (err, result) => {
    if (err == null) {
        stylesheet = result;
    }
});

libxslt.parseFile('/path/to/file', (err, result) => {
    if (err == null) {
        stylesheet = result;
    }
});

const applyOptions: libxslt.ApplyOptions = {
    outputFormat: 'document',
    noWrapParams: true
};

let transformedString: string;

let transformedDocument: libxmljs.Document;

transformedString = stylesheet.apply('<xml></xml>');

transformedString = stylesheet.apply('<xml></xml>', {});

let applyResult = stylesheet.apply('<xml></xml>', {}, applyOptions);

if (typeof applyResult === 'string') {
    transformedString = applyResult;
} else {
    transformedDocument = applyResult;
}

stylesheet.apply('<xml></xml>', {}, applyOptions, (err, result) => {
    if (err != null) {
        return;
    }

    if (typeof result === 'string') {
        transformedString = result;
    } else {
        transformedDocument = result;
    }
});

transformedDocument = stylesheet.apply(document);

transformedDocument = stylesheet.apply(document, {});

applyResult = stylesheet.apply(document, {}, applyOptions);

if (typeof applyResult === 'string') {
    transformedString = applyResult;
} else {
    transformedDocument = applyResult;
}

stylesheet.apply(document, {}, applyOptions, (err, result) => {
    if (err != null) {
        return;
    }

    if (typeof result === 'string') {
        transformedString = result;
    } else {
        transformedDocument = result;
    }
});

stylesheet.applyToFile('/path/to/file', {}, applyOptions, (err, result) => {
    if (err == null) {
        transformedString = result;
    }
});

stylesheet.applyToFile('/path/to/file', (err, result) => {
    if (err == null) {
        transformedString = result;
    }
});
