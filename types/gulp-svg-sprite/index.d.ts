/// <reference types="node" />

import spriter = require("svg-sprite");

declare namespace svgSprite {
    interface SvgSprite {
        (options?: spriter.Config): NodeJS.ReadWriteStream;
    }
}

declare var svgSprite: svgSprite.SvgSprite;

export = svgSprite;
