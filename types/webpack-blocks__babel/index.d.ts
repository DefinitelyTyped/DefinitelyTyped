import { Block } from "webpack-blocks";

interface babel {
    cacheDirectory?: boolean | undefined;
    plugins?: string[] | undefined;
    presets?: string[] | undefined;
}

declare function babel(options?: babel): Block;

export = babel;
