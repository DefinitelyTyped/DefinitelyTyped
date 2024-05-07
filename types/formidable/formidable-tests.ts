import formidable = require("formidable");
import {
    defaultOptions,
    enabledPlugins,
    File,
    Formidable,
    formidable as formidableAlias,
    IncomingForm,
    MultipartParser,
    Options,
    Part,
    PersistentFile,
    plugins,
    VolatileFile,
} from "formidable";
import * as http from "http";

// arrange
const options: Options = {
    allowEmptyFiles: true,
    enabledPlugins: [],
    encoding: "utf-8",
    fileWriteStreamHandler: undefined,
    hashAlgorithm: false,
    keepExtensions: false,
    maxFields: 1000,
    maxFieldsSize: 20 * 1024 * 1024,
    maxFiles: Infinity,
    maxFileSize: 200 * 1024 * 1024,
    maxTotalFileSize: 200 * 1024 * 1024,
    minFileSize: 1,
    multiples: false,
    uploadDir: "/dir",
    createDirsFromUploads: false,
    filter: (part) => {
        // $ExpectType Part
        part;
        return true;
    },
};

const file: File = {
    hashAlgorithm: false,
    hash: "hash",
    mtime: new Date(),
    originalFilename: "name",
    newFilename: "newfilename",
    filepath: "path",
    size: 20,
    mimetype: "json",
    toJSON: () => ({
        newFilename: file.newFilename,
        length: 10,
        mimetype: file.mimetype,
        mtime: file.mtime!,
        originalFilename: file.originalFilename,
        filepath: file.filepath,
        size: file.size,
    }),
    toString: () => `File: ${file.originalFilename}`,
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

options.fileWriteStreamHandler; // $ExpectType ((file?: VolatileFile | undefined) => Writable) | undefined

// $ExpectType EnabledPlugins
enabledPlugins;

// $ExpectType EnabledPlugins
plugins;

// $ExpectType VolatileFile
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
})
    .on("fileBegin", (formname, file) => {
        // $ExpectType string
        formname;
        // $ExpectType File
        file;

        form.emit("data", { name: "fileBegin", formname, value: file });
    })
    .on("file", (formname, file) => {
        // $ExpectType string
        formname;
        // $ExpectType File
        file;

        form.emit("data", { name: "file", formname, value: file });
    })
    .on("progress", (bytesReceived, bytesExpected) => {
        // $ExpectType number
        bytesReceived;
        // $ExpectType number
        bytesExpected;
    })
    .on("field", (name, value) => {
        // $ExpectType string
        name;
        // $ExpectType string
        value;
    })
    .on("error", err => {
        // $ExpectType any
        err;
    })
    .on("aborted", () => {})
    .once("end", () => {})
    .once("error", err => {
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

    form._handlePart(part);
};

http.createServer(async req => {
    // $ExpectType IncomingMessage
    req;

    form.parse(req, (err, fields, files) => { // testing with callback
        // $ExpectType any
        err;
        // $ExpectType Fields<string>
        fields;
        // $ExpectType Files<string>
        files;
    });

    form.parse<"name" | "age", "avatar" | "document">(req, (err, fields, files) => { // testing with callback and type arguments
        // $ExpectType any
        err;
        // $ExpectType Fields<"name" | "age">
        fields;
        // $ExpectType Files<"avatar" | "document"> || Files<"document" | "avatar">
        files;
    });

    form.parse(req); // testing without callback

    const [fields, files] = await form.parse(req); // testing with promise
    // $ExpectType Fields<string>
    fields;
    // $ExpectType Files<string>
    files;

    const [newFields, newFiles] = await form.parse<"name" | "age", "avatar" | "document">(req); // testing with promise and type arguments
    // $ExpectType Fields<"name" | "age">
    newFields;
    // $ExpectType Files<"avatar" | "document"> || Files<"document" | "avatar">
    newFiles;
});

// $ExpectType IncomingForm
new IncomingForm();

// $ExpectType IncomingForm
formidable();
