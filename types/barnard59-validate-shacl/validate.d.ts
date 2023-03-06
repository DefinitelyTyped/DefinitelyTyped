import { DatasetCore } from '@rdfjs/types';
import ValidationReport = require('rdf-validate-shacl/src/validation-report');
import { Context } from 'barnard59-core/lib/Pipeline';
import { Duplex, Readable } from 'stream';

export interface OnViolation {
    context: Context;
    data: DatasetCore;
    report: ValidationReport;
}

interface Options {
    shape: Readable;
    maxErrors?: number;
    onViolation?(arg: OnViolation): boolean;
}

export function shacl(arg: Readable | Options): Promise<Duplex>;
export {};
