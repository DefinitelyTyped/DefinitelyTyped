import { Oid } from './oid';
import { Signature } from './signature';

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
