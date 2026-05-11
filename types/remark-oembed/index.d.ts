import { Plugin } from "unified";

interface RemarkOEmbedSettings {
    syncWidget?: boolean;
    asyncImg?: boolean;
    jsx?: boolean;
}

declare const remarkOEmbed: Plugin<RemarkOEmbedSettings[]>;
export = remarkOEmbed;
