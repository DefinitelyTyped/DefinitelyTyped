export interface ThemeColors {
    primary: string;
    onPrimary: string;
    surface: string;
    onSurface: string;
    error: string;
    onError: string;
    background: string;
    link: string;
    secondary: string | null;
    onSecondary: string | null;
}
declare let name: string;
declare let legalName: string;
declare let siteUrl: string;
declare let systemName: string;
declare let logoUrl: number | string;
declare let logoTitle: string;
declare let footerLogoUrl: (number | string) | null;
declare let footerLogoTitle: string;
declare let mainMenuLogoUrl: string;
declare let appBarLogoUrl: string;
declare let faviconUrl: string;
declare let colors: ThemeColors;
export {};
