/// <reference types="node" />

import muxml = require("muxml");
import { Transform } from "stream";

declare function gulpMuxml(opts: muxml.Options): Transform;

export = gulpMuxml;
