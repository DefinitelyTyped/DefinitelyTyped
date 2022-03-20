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
import { MentionConfig } from '@ckeditor/ckeditor5-mention/src/mention';
import { MinimapConfig } from '@ckeditor/ckeditor5-minimap/src/minimap';
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
// TODO: import {SidebarConfig} from "@ckeditor/ckeditor5-comments/src/annotations/sidebar";
type SidebarConfig = any;

export interface EditorConfig {
    alignment?: AlignmentConfig | undefined;
    autosave?: AutosaveConfig | undefined;
    balloonToolbar?: string[] | { items: string[]; shouldNotGroupWhenFull?: boolean | undefined } | undefined;
    blockToolbar?: string[] | { items: string[]; shouldNotGroupWhenFull?: boolean | undefined } | undefined;
    ckfinder?: CKFinderConfig | undefined;
    cloudServices?: CloudServicesConfig | undefined;
    codeBlock?: CodeBlockConfig | undefined;
    collaboration?: RealTimeCollaborationConfig | undefined;
    comments?: CommentsConfig | undefined;
    exportPdf?: ExportPdfConfig | undefined;
    exportWord?: ExportWordConfig | undefined;
    extraPlugins?: Array<typeof Plugin> | undefined;
    fontBackgroundColor?: FontBackgroundColorConfig | undefined;
    fontColor?: FontColorConfig | undefined;
    fontFamily?: FontFamilyConfig | undefined;
    fontSize?: FontSizeConfig | undefined;
    heading?: HeadingConfig | undefined;
    highlight?: HighlightConfig | undefined;
    image?: ImageConfig | undefined;
    indentBlock?: IndentBlockConfig | undefined;
    initialData?: string | undefined;
    language?: string | LanguageConfig | undefined;
    licenseKey?: string | undefined;
    link?: LinkConfig | undefined;
    mediaEmbed?: MediaEmbedConfig | undefined;
    mention?: MentionConfig | undefined;
    minimap?: MinimapConfig | undefined;
    pagination?: PaginationConfig | undefined;
    placeholder?: string | undefined;
    plugins?: Array<string | PluginInterface> | undefined;
    removePlugins?: Array<string | typeof Plugin | typeof ContextPlugin> | undefined;
    restrictedEditing?: RestrictedEditingModeConfig | undefined;
    sidebar?: SidebarConfig | undefined;
    simpleUpload?: SimpleUploadConfig | undefined;
    table?: TableConfig | undefined;
    title?: TitleConfig | undefined;
    toolbar?:
        | string[]
        | {
              items?: string[] | undefined;
              shouldNotGroupWhenFull?: boolean | undefined;
              removeItems?: string[] | undefined;
          }
        | undefined;
    trackChanges?: TrackChangesConfig | undefined;
    typing?: TypingConfig | undefined;
    ui?:
        | {
              viewportTopOffset?: {
                  top: number;
                  right: number;
                  bottom: number;
                  left: number;
              };
          }
        | undefined;
    wordCount?: WordCountConfig | undefined;
}

export interface LanguageConfig {
    content: string;
    textPartLanguage: TextPartLanguageOption[];
    ui: string;
}

export {};
