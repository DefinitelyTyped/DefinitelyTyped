// Type definitions for mongoose-mock 0.4.0
// Project: https://github.com/JohanObrink/mongoose-mock
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../mongoose/mongoose.d.ts" />

declare module "mongoose-mock" {
    import mongoose = require('mongoose');

    var mock: mongoose.Mongoose;
    export = mock;
}