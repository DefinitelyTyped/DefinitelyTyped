declare function licensee(
    configuration: licensee.Configuration,
    path: string,
    callback: (error: Error | null, results?: licensee.Result[]) => void,
): void;

declare namespace licensee {
    interface LicensesConfiguration {
        spdx?: string[] | undefined;
        blueOak?: string | undefined;
        osi?: boolean | undefined;
    }

    interface IgnoreScope {
        scope: string;
    }

    interface IgnorePrefix {
        prefix: string;
    }

    interface IgnoreAuthor {
        author: string;
    }

    type IgnoreRule = IgnoreScope | IgnorePrefix | IgnoreAuthor;

    interface Configuration {
        licenses: LicensesConfiguration;
        packages?: Record<string, string> | undefined;
        corrections?: boolean | undefined;
        ignore?: IgnoreRule[] | undefined;
        productionOnly?: boolean | undefined;
        filterPackages?: ((dependencies: any[]) => any[]) | undefined;
    }

    interface Result {
        name: string;
        version: string;
        license: string;
        author: any;
        contributors: any;
        repository: any;
        homepage: string;
        parent: any;
        path: string;
        approved: boolean;
        corrected?: "manual" | "automatic" | undefined;
        ignored?: boolean | undefined;
        package?: boolean | undefined;
        duplicates?: Result[] | undefined;
    }
}

export = licensee;
