// Type definitions for multer
// Project: https://github.com/expressjs/multer
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../mongoose/mongoose.d.ts" />

declare module "mongoose-mock" {
    import mongoose = require('mongoose');

    var mock: mongoose.Mongoose;
    export = mock;
}