// Type definitions for non-npm package workgrid-toolbar 1.0.3
// Project: https://github.com/jguardino-workgrid/workgrid-toolbar
// Definitions by: J Guardino <https://github.com/jguardino-workgrid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

import { HTMLElement } from '../fast-html-parser';

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
    deferDisplay?: boolean | false;
    htmlDisplay?: string | 'block';
    listener?: Function | null;
    responsive?: boolean | true;
    responsiveBreakpoints?: number[][]  | [[0, 0], [775, 50], [992, 100]];
    responsiveCssProperty?: string | null;
    responsiveElement?: HTMLElement | null;
    responsiveElementId?: string | null;
    toolbarId?: string | null;
    version?: string | 'v2';
}

export function showWorkgridToolbar(options: WorkgridToolbarOptions): void;
