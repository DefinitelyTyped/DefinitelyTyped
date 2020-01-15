import gulpJsonValidator = require("gulp-json-validator");

gulpJsonValidator(); // $ExpectType ReadWriteStream
gulpJsonValidator({}); // $ExpectType ReadWriteStream
gulpJsonValidator({ allowDuplicatedKeys: true }); // $ExpectType ReadWriteStream
gulpJsonValidator({ allowDuplicatedKeys: false }); // $ExpectType ReadWriteStream
