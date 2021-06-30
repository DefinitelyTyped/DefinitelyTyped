// Type definitions for win-version-info 3.1
// Project: https://github.com/vweevers/win-version-info
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface VersionInfo {
    FileVersion?: string;
    LegalCopyright?: string;
    CompanyName?: string;
    FileDescription?: string;
    ProductVersion?: string;
    InternalName?: string;
    LegalTrademarks?: string;
    OriginalFilename?: string;
    ProductName?: string;
    BuildID?: string;
}

declare function winVersionInfo(file: string): VersionInfo;

export = winVersionInfo;
