// Type definitions for remark-oembed 1.2
// Project: https://github.com/sergioramos/remark-oembed#readme
// Definitions by: Karoline <https://github.com/Boothwhack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from "unified";

interface RemarkOEmbedSettings {
    syncWidget?: boolean;
    asyncImg?: boolean;
    jsx?: boolean;
}

declare const remarkOEmbed: Plugin<RemarkOEmbedSettings[]>;
export = remarkOEmbed;
