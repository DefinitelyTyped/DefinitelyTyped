/// <reference types="node" />

import * as muxml from "muxml";
import { Transform } from "stream";

declare function gulpMuxml(opts: muxml.Options): Transform;

export = gulpMuxml;
