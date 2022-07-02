import { ConvenientHunk } from './convenient-hunk';
import { DiffDelta } from './diff-delta';

export class ApplyOptions {
    deltaCb?: ((delta: DiffDelta, payload: any) => number) | undefined;
    hunkCb?: ((hunk: ConvenientHunk, payload: any) => number) | undefined;
    version?: number | undefined;
}
