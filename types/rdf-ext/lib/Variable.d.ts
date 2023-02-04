import { Variable } from 'rdf-js';
import { PropType } from './_PropType';

export interface VariableExt extends Variable {
  toCanonical(): string;
  toJSON(): {
    value: PropType<Variable, 'value'>;
    termType: PropType<Variable, 'termType'>;
  };
}

// tslint:disable-next-line:no-unnecessary-class
export class VariableExt {
    constructor(name: string);
}

export default VariableExt;
