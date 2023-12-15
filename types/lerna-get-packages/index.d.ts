interface LernaPackage {
    location: string;
    package: {
        private?: boolean | undefined;
        version: string;
        name: string;
        dependencies: Record<string, string>;
        main?: string | undefined;
        config?: {
            additionalTsTypings?: string[] | undefined;
        } | undefined;
    };
}
declare function lernaGetPackages(path: string): LernaPackage[];
export = lernaGetPackages;
