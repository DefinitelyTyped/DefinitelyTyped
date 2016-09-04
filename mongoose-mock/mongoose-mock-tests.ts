/// <reference path="../mongoose/mongoose.d.ts" />
/// <reference path="mongoose-mock.d.ts" />

import mongooseMock = require('mongoose-mock');

// returns a mongoose object
mongooseMock.connect('url');