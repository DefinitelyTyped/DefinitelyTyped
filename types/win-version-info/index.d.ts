// Type definitions for win-version-info 3.1
// Project: https://github.com/vweevers/win-version-info
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
