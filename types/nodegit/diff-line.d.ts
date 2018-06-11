export class DiffLine {
    /**
     * The relevant line
     *
     *
     */
    content(): string;
    /**
     * The non utf8 translated text
     *
     *
     */
    rawContent(): string;
    origin(): number;
    oldLineno(): number;
    newLineno(): number;
    numLines(): number;
    contentLen(): number;
    contentOffset(): number;
}
