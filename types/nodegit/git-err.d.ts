export class Giterr {
    static errClear(): void;
    static errDetach(cpy: NodeGit.Error): number;
    static errLast(): Error;
    static errSetOom(): void;
    static errSetString(error_class: number, string: string): void;
}
