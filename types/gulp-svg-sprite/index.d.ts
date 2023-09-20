// Type definitions for gulp-svg-sprite 1.2.9
// Project: https://github.com/jkphl/gulp-svg-sprite
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

/// <reference types="node" />

import spriter = require("svg-sprite");

declare namespace svgSprite {
    interface SvgSprite {
        (options?: spriter.Config): NodeJS.ReadWriteStream;
    }
}

declare var svgSprite: svgSprite.SvgSprite;

export = svgSprite;
