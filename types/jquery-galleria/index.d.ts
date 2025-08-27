declare namespace GalleriaJS {
    interface GalleriaOptions {
        dataSource: GalleriaEntry[];
        autoplay?: boolean | undefined;
        lightbox?: boolean | undefined;
    }

    interface GalleriaEntry {
        image?: string | undefined;
        thumbnail?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
    }

    interface GalleriaFactory {
        run(): GalleriaFactory;
        run(selector: String): GalleriaFactory;
        run(selector: String, options: GalleriaOptions): GalleriaFactory;

        loadTheme(url: String): GalleriaFactory;
        configure(options: GalleriaOptions): GalleriaFactory;

        ready(method: () => any): void;

        refreshImage(): GalleriaFactory;
        resize(): GalleriaFactory;
        load(data: GalleriaEntry[]): GalleriaFactory;
        setOptions(options: GalleriaOptions): GalleriaFactory;
    }
}

declare var Galleria: GalleriaJS.GalleriaFactory;
