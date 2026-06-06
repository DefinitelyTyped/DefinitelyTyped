declare namespace OO.ui {
    type WikimediaUITheme = Theme;

    interface WikimediaUIThemeConstructor {
        new(): WikimediaUITheme;
        prototype: WikimediaUITheme;
        super: ThemeConstructor;
        /** @deprecated Use `super` instead */
        parent: ThemeConstructor;
        static: {};
    }

    const WikimediaUITheme: WikimediaUIThemeConstructor;
}
