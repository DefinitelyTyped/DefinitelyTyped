import { DiffLine } from './diff-line';

export class ConvenientHunk {
    /**
     * Diff header string that represents the context of this hunk
     * of the diff. Something like `@@ -169,14 +167,12 @@ ...`
     */
    header(): string;
    /**
     * The length of the header
     */
    headerLen(): number;
    /**
     * The lines in this hunk
     */
    lines(): Promise<DiffLine[]>;
    /**
     * The number of new lines in the hunk
     */
    newLines(): number;
    /**
     * The starting offset of the first new line in the file
     */
    newStart(): number;
    /**
     * The number of old lines in the hunk
     */
    oldLines(): number;
    /**
     * The starting offset of the first old line in the file
     */
    oldStart(): number;
    /**
     * Number of lines in this hunk
     */
    size(): number;
}
