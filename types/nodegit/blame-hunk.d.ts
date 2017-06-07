import { Oid } from './oid';
import { Signature } from './Signature';

export class BlameHunk {
    linesInHunk: number;
    finalCommitId: Oid;
    finalStartLineNumber: number;
    finalSignature: Signature;
    origCommitId: Oid;
    origPath: string;
    origStartLineNumber: number;
    origSignature: Signature;
}
