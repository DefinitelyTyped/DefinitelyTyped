// Type definitions for nodemailer-html-to-text 3.1
// Project: https://github.com/andris9/nodemailer-html-to-text
// Definitions by: Vinícius Fagundes <https://github.com/fagundes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import Mail = require('nodemailer/lib/mailer');
import HtmlToText = require('html-to-text');

/**
 * Takes options for the html-to-text converter and returns a nodemailer plugin function
 */
export function htmlToText(options?: HtmlToText.HtmlToTextOptions): Mail.PluginFunction;
