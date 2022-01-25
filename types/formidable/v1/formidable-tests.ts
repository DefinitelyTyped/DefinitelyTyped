import formidable = require("formidable");
import {
    defaultOptions,
    plugins,
    File,
    formidable as formidableAlias,
    Formidable,
    IncomingForm,
    MultipartParser,
    Options,
    PersistentFile,
    VolatileFile,
} from "formidable";
import * as http from "http";

// arrange
const options: Options = {
    allowEmptyFiles: true,
    enabledPlugins: [],
    encoding: "utf-8",
    fileWriteStreamHandler: undefined,
    hash: false,
    keepExtensions: false,
    maxFields: 1000,
    maxFieldsSize: 20 * 1024 * 1024,
    maxFileSize: 200 * 1024 * 1024,
    minFileSize: 1,
    multiples: false,
    uploadDir: "/dir",
};

const file: File = {
    hash: "sha1",
    lastModifiedDate: new Date(),
    name: "name",
    path: "path",
    size: 20,
    type: "json",
    toJSON: () => ({
        filename: file.name!,
        length: 10,
        mime: "string",
        mtime: file.lastModifiedDate!,
        name: file.name,
        path: file.path,
        size: file.size,
        type: file.type,
    }),
    toString: () => `File: ${file.name}`,
};

// act/assert
formidable(options); // $ExpectType IncomingForm

formidableAlias(options); // $ExpectType IncomingForm

new IncomingForm(options); // $ExpectType IncomingForm

new Formidable(options); // $ExpectType IncomingForm

// $ExpectType DefaultOptions
Formidable.DEFAULT_OPTIONS;

// $ExpectType DefaultOptions
defaultOptions;
defaultOptions.enabledPlugins; // $ExpectType EnabledPlugins

// $ExpectType EnabledPlugins
plugins;

// $ExpectType PersistentFile
new VolatileFile(file);

// $ExpectType PersistentFile
new PersistentFile(file);

// $ExpectType PersistentFile
new File(file);

MultipartParser.stateToString;

MultipartParser.STATES;

const form = new Formidable(options);
form.on("data", data => {
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

form.on("fileBegin", (formname, file) => {
    // $ExpectType string
    formname;
    // $ExpectType File
    file;

    form.emit("data", { name: "fileBegin", formname, value: file });
});
form.on("file", (formname, file) => {
    // $ExpectType string
    formname;
    // $ExpectType File
    file;

    form.emit("data", { name: "file", formname, value: file });
});

form.on("progress", (bytesReceived, bytesExpected) => {
    // $ExpectType number
    bytesReceived;
    // $ExpectType number
    bytesExpected;
});

form.on("field", (name, value) => {
    // $ExpectType string
    name;
    // $ExpectType string
    value;
});

form.on("error", err => {
    // $ExpectType any
    err;
});

form.on("aborted", () => {});

form.once("end", () => {});
form.once("error", err => {
    // $ExpectType any
    err;
});

form.use((self, options) => {
    // $ExpectType IncomingForm
    self;
    // $ExpectType Partial<Options>
    options;
});

form.onPart = part => {
    // $ExpectType Part
    part;

    part.on("data", buffer => {
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

// $ExpectType IncomingForm
new IncomingForm();

// $ExpectType IncomingForm
formidable();
