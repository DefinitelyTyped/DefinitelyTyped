import gulpTar from "gulp-tar";

gulpTar("file.tar"); // $ExpectType ReadableStream & WritableStream

// Options from archiver.ArchiverOptions
gulpTar("file.tar", { statConcurrency: 4 }).on("end", () => {});
