// Type definitions for Workgrid Toolbar 1.0
// Definitions by: J Guardino <https://github.com/jguardino-workgrid>

export interface WorkgridToolbarOptions {
    // Required
    companyCode: string;
    spaceId: string;
    clientId: string;
    tenantId: string;
    authorizerUrl: string;
    // Optional
    confirmUser?: boolean | false;
    debug?: boolean | false,
    htmlDisplay?: string | 'block';
    responsive?: boolean | true;
    responsiveBreakpoints?: Array<Array<number>> | [[0, 0], [775, 50], [992, 100]]
    responsiveCssProperty?: string | null;
    responsiveElement?: Object | null;
    responsiveElementId?: string | null;
    version?: string | 'v2';
}

export function showWorkgridToolbar(options: WorkgridToolbarOptions): void;
