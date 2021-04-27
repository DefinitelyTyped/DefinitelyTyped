import Formidable = require('formidable');
import {
    defaultOptions,
    enabledPlugins,
    File,
    formidable,
    IncomingForm,
    MultipartParser,
    Options,
    PersistentFile,
    VolatileFile,
} from 'formidable';
import * as http from 'http';

const options: Options = {
    allowEmptyFiles: true,
    enabledPlugins: [],
    encoding: 'utf-8',
    fileWriteStreamHandler: null,
    hash: false,
    keepExtensions: false,
    maxFields: 1000,
    maxFieldsSize: 20 * 1024 * 1024,
    maxFileSize: 200 * 1024 * 1024,
    minFileSize: 1,
    multiples: false,
    uploadDir: '/dir',
};

const file: File = {
    hash: 'sha1',
    lastModifiedDate: new Date(),
    name: 'name',
    path: 'path',
    size: 20,
    type: 'json',
    toJSON: () => ({
        filename: file.name,
        length: 10,
        mime: 'string',
        mtime: file.lastModifiedDate,
        name: file.name,
        path: file.path,
        size: file.size,
        type: file.type,
    }),
    toString: () => `File: ${file.name}`,
};

// $ExpectType Options
Formidable.DEFAULT_OPTIONS;

// $ExpectType Options
defaultOptions;

// $ExpectType string[]
enabledPlugins;

// $ExpectType PersistentFile
new VolatileFile(file);

// $ExpectType PersistentFile
new PersistentFile(file);

// $ExpectType PersistentFile
new File(file);

MultipartParser.stateToString;

MultipartParser.STATES;

evaluateTypes(new Formidable(options));
evaluateTypes(new Formidable.IncomingForm(options));
evaluateTypes(new IncomingForm(options));
evaluateTypes(formidable(options));
evaluateTypes(Formidable.formidable(options));

function evaluateTypes(form: Formidable) {
    form.on('data', data => {
        // $ExpectType EventData
        data;

        const { name, key, value, buffer, start, end, formname } = data;

        // $ExpectType EventNames
        name;
        // $ExpectType string
        key;
        // $ExpectType string
        value;
        // $ExpectType string
        buffer;
        // $ExpectType string
        start;
        // $ExpectType string
        end;
        // $ExpectType string
        formname;
    });

    form.on('fileBegin', (formname, file) => {
        // $ExpectType string
        formname;
        // $ExpectType File
        file;

        form.emit('data', { name: 'fileBegin', formname, value: file });
    });
    form.on('file', (formname, file) => {
        // $ExpectType string
        formname;
        // $ExpectType File
        file;

        form.emit('data', { name: 'file', formname, value: file });
    });

    form.on('progress', (bytesReceived, bytesExpected) => {
        // $ExpectType number
        bytesReceived;
        // $ExpectType number
        bytesExpected;
    });

    form.on('field', (name, value) => {
        // $ExpectType string
        name;
        // $ExpectType string
        value;
    });

    form.on('error', err => {
        // $ExpectType any
        err;
    });

    form.on('aborted', () => {});

    form.once('end', () => {});
    form.once('error', err => {
        // $ExpectType any
        err;
    });

    form.use((self, options) => {
        // $ExpectType Formidable
        self;
        // $ExpectType Partial<Options>
        options;
    });

    form.onPart = part => {
        // $ExpectType Part
        part;

        part.on('data', buffer => {
            // $ExpectType any
            buffer;
        });

        form.handlePart(part);
    };

    http.createServer(req => {
        // $ExpectType IncomingMessage
        req;

        form.parse(req, (err, fields, files) => {
            // $ExpectType any
            err;
            // $ExpectType Fields
            fields;
            // $ExpectType Files
            files;
        });
    });
}

// $ExpectType Formidable
new Formidable.IncomingForm();

// $ExpectType Formidable
Formidable.formidable();
