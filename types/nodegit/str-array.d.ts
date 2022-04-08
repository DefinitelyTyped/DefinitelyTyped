export class Strarray {
    copy(src: Strarray): number;

    free(): void;
    strings: string[];
    count: number;
}
