import { Error } from './error';

export class Giterr {
    static errClear(): void;
    static errDetach(cpy: Error): number;
    static errLast(): Error;
    static errSetOom(): void;
    static errSetString(error_class: number, string: string): void;
}
