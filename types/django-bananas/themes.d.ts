import { Theme } from "@mui/material";

export function applyThemeDefaults(theme: Theme): Theme;
export function createBananasTheme(theme: Theme): Theme;
export function extendTheme(theme: Theme, overrides: any): Theme;

declare const themes: {
    light: Theme;
    dark: Theme;
    darth: Theme;
    default: Theme;
};
export default themes;
