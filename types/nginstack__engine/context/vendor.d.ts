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
declare const name: string;
declare const legalName: string;
declare const siteUrl: string;
declare const systemName: string;
declare const logoUrl: number | string;
declare const logoTitle: string;
declare const footerLogoUrl: (number | string) | null;
declare const footerLogoTitle: string;
declare const mainMenuLogoUrl: string;
declare const faviconUrl: string;
declare const colors: ThemeColors;
export {};
