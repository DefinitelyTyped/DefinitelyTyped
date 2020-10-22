import { Stats } from 'webpack';

/**
 * Extracts and prettifies warning and error messages from webpack
 * [stats](https://github.com/webpack/docs/wiki/node.js-api#stats) object.
 */
declare function formatWebpackMessages(json: Stats.ToJsonOutput): {
    errors: string[];
    warnings: string[];
};

export = formatWebpackMessages;
