"use strict";

import fileType = require("file-type")

fileType(new Buffer([0xFF, 0xD8, 0xFF]))
