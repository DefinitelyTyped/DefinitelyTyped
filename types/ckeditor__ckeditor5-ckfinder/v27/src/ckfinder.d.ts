import { Plugin } from "@ckeditor/ckeditor5-core";
import Link from "@ckeditor/ckeditor5-link/src/link";
import CKFinderEditing from "./ckfinderediting";
import CKFinderUI from "./ckfinderui";

export default class CKFinder extends Plugin {
    static pluginName: "CKFinder";
    static requires: ["Image", typeof Link, "CKFinderUploadAdapter", typeof CKFinderEditing, typeof CKFinderUI];
}

export interface CKFinderConfig {
    openerMethod?: "modal" | "popup" | undefined;
    uploadUrl: string;
    options?: {
        language?: string | undefined;
        languages?: Record<string, number> | undefined;
        listViewIconSize?: number | undefined;
        loaderOverlaySwatch?: boolean | string | undefined;
        onInit?(instance: CKFinder): void;
        pass?: string | undefined;
        plugins?: string | string[] | undefined;
        primaryPanelWidth?: string | undefined;
        readOnly?: boolean | undefined;
        readOnlyExclude?: string | undefined;
        rememberLastFolder?: boolean | undefined;
        removeModules?: string | undefined;
        resizeImages?: boolean | string[] | undefined;
        resourceType?: string | undefined;
        secondaryPanelWidth?: string | undefined;
        skin?: string | undefined;
        startupFolderExpanded?: boolean | undefined;
        startupPath?: string | undefined;
        swatch?: string | undefined;
        tabIndex?: number | undefined;
        themeCSS?: string | undefined;
        thumbnailClasses?: Record<number | string, string> | undefined;
        thumbnailDefaultSize?: number | undefined;
        thumbnailDelay?: number | undefined;
        thumbnailMaxSize?: number | undefined;
        thumbnailMinSize?: number | undefined;
        thumbnailSizeStep?: number | undefined;
        uiModeThreshold?: number | undefined;
        width?: string | number | undefined;
    } | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CKFinder: CKFinder;
    }
}
