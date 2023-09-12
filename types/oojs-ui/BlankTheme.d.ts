declare namespace OO.ui {
    type BlankTheme = Theme;

    interface BlankThemeConstructor {
        new(): BlankTheme;
        prototype: BlankTheme;
        super: ThemeConstructor;
        /** @deprecated Use `super` instead */
        parent: ThemeConstructor;
        static: {};
    }

    const BlankTheme: BlankThemeConstructor;
}
