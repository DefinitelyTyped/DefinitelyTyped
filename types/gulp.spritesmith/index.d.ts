/// <reference types="node" />
import { Readable, Transform } from "stream";

interface Sprite {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    total_width: number;
    total_height: number;
    image: string;
    escaped_image: string;
    source_image: string;
    offset_x: number;
    offset_y: number;
    px: {
        x: string;
        y: string;
        width: string;
        height: string;
        total_width: string;
        total_height: string;
        offset_x: string;
        offset_y: string;
    };
}

interface Spritesheet {
    width: number;
    total_height: number;
    image: string;
    escaped_image: string;
    px: {
        width: string;
        height: string;
    };
}

interface SpritesheetInfo {
    name: string;
}

interface SpritesmithData {
    sprites: Sprite[];
    spritesheet: Spritesheet;
    spritesheet_info: SpritesheetInfo;
}

interface SpritesmithRetinaData extends SpritesmithData {
    retina_sprites: Sprite[];
    retina_spritesheet: Spritesheet;
    retina_spritesheet_info: SpritesheetInfo;
    retina_groups: Array<{
        name: string;
        index: number;
        normal: Sprite;
        retina: Sprite;
    }>;
    retina_groups_info: SpritesheetInfo;
    options: any;
}

interface GulpSpriteSmithOptions {
    imgName: string;
    cssName: string;
    imgPath?: string;
    padding?: number;
    algorithm?: "top-down" | "left-right" | "diagonal" | "alt-diagonal" | "binary-tree" | string;
    algorithmOpts?: {
        sort?: boolean;
    };
    engine?: string;
    engineOpts?: any;
    imgOpts?: any;
    cssFormat?: string;
    cssTemplate?: string | ((data: SpritesmithData) => string);
    cssHandlebarsHelpers?: Record<string, (...args: any[]) => any>;
    cssVarMap?: (sprite: Sprite) => void;
    cssSpritesheetName?: string;
    cssOpts?: any;
}

interface GulpSpriteSmithRetinaOptions extends Omit<GulpSpriteSmithOptions, "cssTemplate"> {
    retinaSrcFilter: string | string[];
    retinaImgName: string;
    retinaImgPath?: string;
    retinaImgOpts?: any;
    cssRetinaSpritesheetName?: string;
    cssRetinaGroupsName?: string;
    // override
    cssTemplate?: string | ((data: SpritesmithRetinaData) => string);
}

interface GulpSpriteSmithResult extends Transform {
    img: Readable;
    css: Readable;
}

declare function gulpSpritesmith(options: GulpSpriteSmithRetinaOptions): GulpSpriteSmithResult;
// Union type might be better, but in this case it lead to a lot of errors
// tslint:disable-next-line unified-signatures
declare function gulpSpritesmith(options: GulpSpriteSmithOptions): GulpSpriteSmithResult;

export = gulpSpritesmith;
