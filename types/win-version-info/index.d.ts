interface VersionInfo {
    FileVersion?: string | undefined;
    LegalCopyright?: string | undefined;
    CompanyName?: string | undefined;
    FileDescription?: string | undefined;
    ProductVersion?: string | undefined;
    InternalName?: string | undefined;
    LegalTrademarks?: string | undefined;
    OriginalFilename?: string | undefined;
    ProductName?: string | undefined;
    BuildID?: string | undefined;
}

declare function winVersionInfo(file: string): VersionInfo;

export = winVersionInfo;
