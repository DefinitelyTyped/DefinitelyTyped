// Type definitions for transform-coordinates 1.0
// Project: https://github.com/derhuerst/transform-coordinates
// Definitions by: Daniel Earwicker <https://github.com/danielearwicker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Converter } from "proj4";

declare function transformation(from: string, to: string): Converter;

export = transformation;
