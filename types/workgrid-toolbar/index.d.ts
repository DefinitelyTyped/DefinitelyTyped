// Type definitions for non-npm package workgrid-toolbar 1.3
// Project: https://github.com/jguardino-workgrid/workgrid-toolbar
// Definitions by: J Guardino <https://github.com/jguardino-workgrid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface WorkgridToolbarOptions {
    // Required
    companyCode: string;
    spaceId: string;
    clientId: string;
    tenantId: string;
    authorizerUrl: string;
    // Optional
    confirmUser?: boolean;
    debug?: boolean;
    deferDisplay?: boolean;
    htmlDisplay?: string | null;
    listener?: (event: string) => void | null;
    preventPageHide?: boolean;
    toolbarId?: string | null;
    version?: string | null;
    cssRules?: string[];
    msIdToken?: string | null;
}

export function showWorkgridToolbar(options: WorkgridToolbarOptions): void;
