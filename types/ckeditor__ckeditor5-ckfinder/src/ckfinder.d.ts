import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import { Plugin } from '@ckeditor/ckeditor5-core';
import Link from '@ckeditor/ckeditor5-link/src/link';
import CKFinderEditing from './ckfinderediting';
import CKFinderUI from './ckfinderui';

export default class CKFinder extends Plugin {
    static pluginName: 'CKFinder';
    static requires: [typeof Link, typeof CKFinderUploadAdapter, typeof CKFinderEditing, typeof CKFinderUI];
}

export interface CKFinderConfig {
    openerMethod?: 'modal' | 'popup';
    uploadUrl: string;
    options?:
        | {
              language?: string;
              languages?: Record<string, number>;
              listViewIconSize?: number;
              loaderOverlaySwatch?: boolean | string;
              onInit?(instance: CKFinder): void;
              pass?: string;
              plugins?: string | string[];
              primaryPanelWidth?: string;
              readOnly?: boolean;
              readOnlyExclude?: string;
              rememberLastFolder?: boolean;
              removeModules?: string;
              resizeImages?: boolean | string[];
              resourceType?: string;
              secondaryPanelWidth?: string;
              skin?: string;
              startupFolderExpanded?: boolean;
              startupPath?: string;
              swatch?: string;
              tabIndex?: number;
              themeCSS?: string;
              thumbnailClasses?: Record<number | string, string>;
              thumbnailDefaultSize?: number;
              thumbnailDelay?: number;
              thumbnailMaxSize?: number;
              thumbnailMinSize?: number;
              thumbnailSizeStep?: number;
              uiModeThreshold?: number;
              width?: string | number;
          }
       ;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CKFinder: CKFinder;
    }
}
