declare namespace OO.ui {
    type ApexTheme = Theme;

    interface ApexThemeConstructor {
        new(): ApexTheme;
        prototype: ApexTheme;
        super: ThemeConstructor;
        /** @deprecated Use `super` instead */
        parent: ThemeConstructor;
        static: {};
    }

    const ApexTheme: ApexThemeConstructor;
}
