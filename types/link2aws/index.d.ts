export class ARN {
    constructor(text: string);
    get string(): string;
    get console(): string;
    get qualifiers(): string[];
    get pathLast(): string;
    get consoleLink(): string;
}
