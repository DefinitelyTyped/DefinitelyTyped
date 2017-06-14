// Type definitions for gauge 2.7
// Project: https://github.com/iarna/gauge
// Definitions by: Brian J Brennan <https://github.com/brianloveswords>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace Gauge {
    interface Stream { }

    interface WriteStream { }

    interface Theme { }

    type themeGetter = (opts: ThemeOpts) => Theme;

    interface ThemeSet extends themeGetter {
        addTheme(themeName: string, parentThemeOrThemeObj: Theme, newTheme?: Theme | ThemeConfig): void;
        addToAllThemes(theme: Theme): void;
        getDefault(opts: ThemeOpts): Theme;
        getTheme(name: string): Theme;
        getThemeNames(): string[];
        newTheme(parentTheme: Theme, newTheme: ThemeConfig): Theme;
        newThemeSet(): ThemeSet;
        setDefault(opts: ThemeOpts, themeName: string): void;
        setDefault(themeName: string): void;
    }

    class ThemeSetClass {
        addTheme(themeName: string, parentThemeOrThemeObj: Theme, newTheme?: Theme | ThemeConfig): void;
        addToAllThemes(theme: Theme): void;
        getDefault(opts: ThemeOpts): Theme;
        getTheme(name: string): Theme;
        getThemeNames(): string[];
        newTheme(parentTheme: Theme, newTheme: ThemeConfig): Theme;
        newThemeset(): ThemeSet;
        setDefault(opts: ThemeOpts, themeName: string): void;
        setDefault(themeName: string): void;
    }

    interface ThemeConfig {
        [key: string]: any;
        activityIndicatorTheme?: string | string[];
        postProgressbar?: string;
        preProgressbar?: string;
        preSubsection?: string;
        progressBarTheme?: {
            complete?: string;
            remaining?: string;
        };
    }

    interface Template {
        align?: "left" | "right" | "center";
        default?: string;
        kerning?: number;
        length?: number;
        maxLength?: number;
        minLength?: number;
        type: string;
        value?: string;
    }

    class Plumbing {
        constructor(theme: Theme, template: Template, width: number);
        setTheme(theme: Theme): void;
        hide(): string;
        hideCursor(): string;
        setTemplate(template: Template): void;
        setWidth(width: number): void;
        show(status: string): string;
        showCursor(): string;
    }

    interface ThemeOpts {
        hasUnicode?: boolean;
        hasColor?: boolean;
        platform?: string;
    }

    interface StatusObject {
        [key: string]: any;
        completed: number;
        section: string;
        subsection: string;
    }

    interface GaugeConstructorOptions {
        Plumbing?: Plumbing;
        cleanupOnExit?: boolean;
        enabled?: boolean;
        fixedFramerate?: boolean;
        hideCursor?: boolean;
        template?: Template;
        theme?: Theme | ThemeOpts | string;
        themes?: ThemeSet;
        tty?: WriteStream;
        updateInterval?: number;
    }

    class GaugeClass {
        constructor(streamOrOptions?: Stream | GaugeConstructorOptions, options?: GaugeConstructorOptions);
        disable(): void;
        enable(): void;
        hide(callback?: () => void): void;
        isEnabled(): boolean;
        pulse(subsection?: string): void;
        setTemplate(template: Template): void;
        setTheme(theme: Theme | ThemeOpts | string): void;
        setThemeset(themes: ThemeSet): void;
        show(sectionOrStatus?: string | StatusObject, completed?: number): void;
    }
}

declare module "gauge" {
    import GaugeConstructor = Gauge.GaugeClass;
    export = GaugeConstructor;
}

declare module "gauge/themes" {
    import ThemeSetFunction = Gauge.ThemeSet;
    const themes: ThemeSetFunction;
    export = themes;
}

declare module "gauge/theme-set" {
    import ThemeSet = Gauge.ThemeSetClass;
    export = ThemeSet;
}
