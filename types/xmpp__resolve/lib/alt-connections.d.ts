import { ResolvedTxtRecord } from './dns';
import { ResolvedEndpoint } from './http';

export function compare(
    a: ResolvedEndpoint | ResolvedTxtRecord,
    b: ResolvedEndpoint | ResolvedTxtRecord,
): -1 | 0 | 1;
