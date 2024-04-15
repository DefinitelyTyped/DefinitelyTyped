declare namespace ngWYSIWYG {
    interface Toolbar {
        name: string;
        items: string[];
    }

    interface Config {
        sanitize: boolean;
        toolbar?: Toolbar[] | undefined;
    }
}
