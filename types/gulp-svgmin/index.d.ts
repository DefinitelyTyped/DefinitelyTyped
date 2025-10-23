/// <reference types="node"/>

import SVGO = require("svgo");
import { Transform } from "stream";
import * as File from "vinyl";

export = GulpSvgmin;

declare function GulpSvgmin(cb: (file: File) => SVGO.Options): Transform;
declare function GulpSvgmin(options?: SVGO.Options): Transform;
