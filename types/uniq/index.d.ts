type Compare<T> = (a: T, b: T) => number;

interface Uniq {
    <T>(ip: Array<T>, compare?: Compare<T>, sorted?: boolean): Array<T>;
}

declare var uniq: Uniq;

declare module "uniq" {
    export = uniq;
}
