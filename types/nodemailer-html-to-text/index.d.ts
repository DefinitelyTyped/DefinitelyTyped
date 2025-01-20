import Mail = require("nodemailer/lib/mailer");
import HtmlToText = require("html-to-text");

/**
 * Takes options for the html-to-text converter and returns a nodemailer plugin function
 */
export function htmlToText(options?: HtmlToText.HtmlToTextOptions): Mail.PluginFunction;
