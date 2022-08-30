// Type definitions for @tailwindcss/typography 0.5
// Project: https://github.com/tailwindlabs/tailwindcss-typography
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import plugin = require('tailwindcss/plugin');

/**
 * A plugin that provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don't control, like HTML rendered from Markdown, or pulled from a CMS.
 *
 * @see https://tailwindcss.com/docs/typography-plugin
 */
declare const typography: ReturnType<typeof plugin['withOptions']>;

export = typography;
