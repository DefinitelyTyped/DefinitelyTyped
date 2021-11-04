import { Variable } from 'rdf-js';
import { PropType } from './_PropType';

interface VariableExt extends Variable {
  toCanonical(): string;
  toJSON(): {
    value: PropType<Variable, 'value'>;
    termType: PropType<Variable, 'termType'>;
  };
}

// tslint:disable-next-line:no-unnecessary-class
declare class VariableExt {
    constructor(name: string);
}

export = VariableExt;
