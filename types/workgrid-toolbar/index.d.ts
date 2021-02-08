// Type definitions for non-npm package workgrid-toolbar 1.1
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
    responsive?: {
        disabled?: boolean;
        page?: {
            diaabled?: boolean;
            breakpoints?: number[][];
            target?: {
                ids?: string[];
                elements?: HTMLElement[];
                cssProperty?: string;
                cssUnit?: string;
            };
        };
        toolbar?: {
            disabled?: boolean | true;
            breakpoints?: number[][];
            target?: {
                id?: string;
                cssProperty?: string;
                cssUnit?: string;
            };
        };
    };
}

export function showWorkgridToolbar(options: WorkgridToolbarOptions): void;
