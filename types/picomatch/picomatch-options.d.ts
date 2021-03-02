import { Picomatch } from './picomatch-interface';

export interface PicomatchOptions {
    ignore?: string;
    onResult?: (result: Result) => void;
    onIgnore?: (result: Result) => void;
    onMatch?: (result: Result) => void;
    dot?: boolean;
    windows?: boolean;
    contains?: boolean;
    format?: (input: string) => string;
}

interface Result {
    glob: string;
    state: any;
    regex: RegExp;
    posix: boolean;
    input: string;
    output: string;
    match: ReturnType<Picomatch['test']>['match'];
    isMatch: ReturnType<Picomatch['test']>['isMatch'];
}

// Shut off automatic exporting
export {};
