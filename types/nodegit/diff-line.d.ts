export class DiffLine {
    content(): string;
    origin: number;
    oldLineno: number;
    newLineno: number;
    numLines: number;
    contentLen: number;
    contentOffset: number;
}
