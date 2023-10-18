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
