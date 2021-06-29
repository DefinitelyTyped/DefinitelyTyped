import { AlignmentConfig } from '@ckeditor/ckeditor5-alignment/src/alignment';
import { AutosaveConfig } from '@ckeditor/ckeditor5-autosave/src/autosave';
import { CKFinderConfig } from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import { CloudServicesConfig } from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import { CodeBlockConfig } from '@ckeditor/ckeditor5-code-block/src/codeblock';
import { ExportPdfConfig } from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
import { ExportWordConfig } from '@ckeditor/ckeditor5-export-word/src/exportword';
import { FontBackgroundColorConfig } from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import { FontColorConfig } from '@ckeditor/ckeditor5-font/src/fontcolor';
import { FontFamilyConfig } from '@ckeditor/ckeditor5-font/src/fontfamily';
import { FontSizeConfig } from '@ckeditor/ckeditor5-font/src/fontsize';
import { HeadingConfig } from '@ckeditor/ckeditor5-heading/src/heading';
import { TitleConfig } from '@ckeditor/ckeditor5-heading/src/title';
import { HighlightConfig } from '@ckeditor/ckeditor5-highlight/src/highlight';
import { ImageConfig } from '@ckeditor/ckeditor5-image/src/image';
import { IndentBlockConfig } from '@ckeditor/ckeditor5-indent/src/indentblock';
import { TextPartLanguageOption } from '@ckeditor/ckeditor5-language/src/textpartlanguage';
import { LinkConfig } from '@ckeditor/ckeditor5-link/src/link';
import { MediaEmbedConfig } from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import { PaginationConfig } from '@ckeditor/ckeditor5-pagination/src/pagination';
import { RealTimeCollaborationConfig } from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativeediting';
import { RestrictedEditingModeConfig } from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode';
import { TableConfig } from '@ckeditor/ckeditor5-table/src/table';
import { TrackChangesConfig } from '@ckeditor/ckeditor5-track-changes/src/trackchanges';
import { TypingConfig } from '@ckeditor/ckeditor5-typing/src/typing';
import { SimpleUploadConfig } from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import { WordCountConfig } from '@ckeditor/ckeditor5-word-count/src/wordcount';
import ContextPlugin from '../contextplugin';
import Plugin, { PluginInterface } from '../plugin';

// TODO: import {CommentsConfig} from "@ckeditor/ckeditor5-comments/src/comments";
type CommentsConfig = any;
// TODO: import {MentionConfig} from "@ckeditor/ckeditor5-mention/src/mention";
type MentionConfig = any;
// TODO: import {SidebarConfig} from "@ckeditor/ckeditor5-comments/src/annotations/sidebar";
type SidebarConfig = any;

export interface EditorConfig {
    alignment?: AlignmentConfig;
    autosave?: AutosaveConfig;
    balloonToolbar?: string[] | { items: string[]; shouldNotGroupWhenFull?: boolean };
    blockToolbar?: string[] | { items: string[]; shouldNotGroupWhenFull?: boolean };
    ckfinder?: CKFinderConfig;
    cloudServices?: CloudServicesConfig;
    codeBlock?: CodeBlockConfig;
    collaboration?: RealTimeCollaborationConfig;
    comments?: CommentsConfig;
    exportPdf?: ExportPdfConfig;
    exportWord?: ExportWordConfig;
    extraPlugins?: Array<typeof Plugin>;
    fontBackgroundColor?: FontBackgroundColorConfig;
    fontColor?: FontColorConfig;
    fontFamily?: FontFamilyConfig;
    fontSize?: FontSizeConfig;
    heading?: HeadingConfig;
    highlight?: HighlightConfig;
    image?: ImageConfig;
    indentBlock?: IndentBlockConfig;
    initialData?: string;
    language?: string | LanguageConfig;
    licenseKey?: string;
    link?: LinkConfig;
    mediaEmbed?: MediaEmbedConfig;
    mention?: MentionConfig;
    pagination?: PaginationConfig;
    placeholder?: string;
    plugins?: Array<string | PluginInterface>;
    removePlugins?: Array<string | typeof Plugin | typeof ContextPlugin>;
    restrictedEditing?: RestrictedEditingModeConfig;
    sidebar?: SidebarConfig;
    simpleUpload?: SimpleUploadConfig;
    table?: TableConfig;
    title?: TitleConfig;
    toolbar?:
        | string[]
        | { items?: string[]; viewportTopOffset?: number; shouldNotGroupWhenFull?: boolean; removeItems?: string[] };
    trackChanges?: TrackChangesConfig;
    typing?: TypingConfig;
    wordCount?: WordCountConfig;
}

export interface LanguageConfig {
    content: string;
    textPartLanguage: TextPartLanguageOption[];
    ui: string;
}

export {};
