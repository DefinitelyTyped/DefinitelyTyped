// Type definitions for workgrid-toolbar 1.0
// Project: https://github.com/jguardino-workgrid/workgrid-toolbar
// Definitions by: J Guardino <https://github.com/jguardino-workgrid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

export interface WorkgridToolbarOptions {
    // Required
    companyCode: string;
    spaceId: string;
    clientId: string;
    tenantId: string;
    authorizerUrl: string;
    // Optional
    confirmUser?: boolean | false;
    debug?: boolean | false;
    htmlDisplay?: string | 'block';
    responsive?: boolean | true;
    responsiveBreakpoints?: Array<number[]> | [[0, 0], [775, 50], [992, 100]];
    responsiveCssProperty?: string | null;
    responsiveElement?: object | null;
    responsiveElementId?: string | null;
    version?: string | 'v2';
}

export function showWorkgridToolbar(options: WorkgridToolbarOptions): void;
