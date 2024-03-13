type Compare<T> = (a: T, b: T) => number;

interface Uniq {
    <T>(ip: T[], compare?: Compare<T>, sorted?: boolean): T[];
}

declare var uniq: Uniq;

declare module "uniq" {
    export = uniq;
}
