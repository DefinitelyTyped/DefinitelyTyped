import { Error } from './error';

export class Giterr {
    static errClear(): void;
    static errLast(): Error;
    static errSetOom(): void;
    static errSetString(errorClass: number, string: string): void;
}
