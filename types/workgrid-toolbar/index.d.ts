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
    confirmUser?: boolean | undefined;
    debug?: boolean | undefined;
    deferDisplay?: boolean | undefined;
    htmlDisplay?: string | null | undefined;
    listener?: ((event: string) => void | null) | undefined;
    preventPageHide?: boolean | undefined;
    toolbarId?: string | null | undefined;
    version?: string | null | undefined;
    cssRules?: string[] | undefined;
    msIdToken?: string | null | undefined;
}

export function showWorkgridToolbar(options: WorkgridToolbarOptions): void;
