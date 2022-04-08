declare module "meteor/modern-browsers" {
    export function setMinimumBrowserVersions(
        versions: Record<string, number | number[]>,
        source: string
    ): void;
}
