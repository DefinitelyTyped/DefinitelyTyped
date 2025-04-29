export = Theme;
declare function Theme(): void;
declare class Theme {
    private vendorConfig_;
    getTheme(userKey: number): number;
    getDefaultTheme(): number;
    canChangeTheme(userKey: number): boolean;
    canChangeColorScheme(userKey: number): boolean;
    canChangeContrastLevel(userKey: number): boolean;
    getDensity(userKey?: number): number;
    getColorScheme(userKey?: number): number;
    getContrastLevel(userKey: number): number;
    getThemeSchemes(themeKey: number | DBKey): ThemeSchemes;
    getThemeTones(themeKey: number | DBKey): ThemeTones;
    getThemePreviewData(themeKey: number | DBKey): {
        schemes: ThemeSchemes;
        tones: ThemeTones;
    };
    getColorTokens(
        themeKey: number | DBKey,
        options: {
            contrastLevel?: number;
            colorScheme?: number;
        },
    ): ColorTokens;
    private getSpecializedProperty_;
    private getThemeConfig_;
}
declare namespace Theme {
    export { ColorTokens, ColorTones, ThemeConfig, ThemeSchemes, ThemeTones };
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
interface ColorTokens {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    primaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixed: string;
    onPrimaryFixedVariant: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    secondaryContainerLow: string;
    onSecondaryContainerLow: string;
    secondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixed: string;
    onSecondaryFixedVariant: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    surface: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceVariant: string;
    onSurface: string;
    onSurfaceVariant: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    inverseSurface: string;
    inverseOnSurface: string;
    outline: string;
    outlineVariant: string;
    background: string;
    onBackground: string;
    shadow: string;
    source: string;
    onSource: string;
    sourceContainer: string;
    sourceContainerVariant: string;
    onSourceContainer: string;
}
interface ColorTones {
    onSource: number;
}
interface ThemeSchemes {
    light: ColorTokens;
    lightHigh: ColorTokens;
    lightLow: ColorTokens;
    dark: ColorTokens;
    darkHigh: ColorTokens;
    darkLow: ColorTokens;
}
interface ThemeTones {
    light: ColorTones;
    lightHigh: ColorTones;
    lightLow: ColorTones;
    dark: ColorTones;
    darkHigh: ColorTones;
    darkLow: ColorTones;
}
interface ThemeConfig {
    schemes: ThemeSchemes;
    tones: ThemeTones;
    schemeVariant: number;
    primaryPalette: MaterialPalette;
    secondaryPalette: MaterialPalette;
    neutralPalette: MaterialPalette;
}
