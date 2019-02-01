declare namespace formatWebpackMessages {
    interface WebpackMessages {
        errors: string[];
        warnings: string[];
    }
}

/**
 * Extracts and prettifies warning and error messages from webpack
 * [stats](https://github.com/webpack/docs/wiki/node.js-api#stats) object.
 */
declare function formatWebpackMessages(
    json: formatWebpackMessages.WebpackMessages,
): formatWebpackMessages.WebpackMessages;

export = formatWebpackMessages;
