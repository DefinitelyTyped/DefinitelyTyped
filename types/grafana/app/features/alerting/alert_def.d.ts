/// 
import { QueryPartDef, QueryPart } from 'app/core/components/query_part/query_part';
declare var _default: {
  alertQueryDef: QueryPartDef;
  getStateDisplayModel: (state: any) => {
    text: string;
    iconClass: string;
    stateClass: string;
  };
  conditionTypes: {
    text: string;
    value: string;
  }[];
  evalFunctions: {
    text: string;
    value: string;
  }[];
  evalOperators: {
    text: string;
    value: string;
  }[];
  noDataModes: {
    text: string;
    value: string;
  }[];
  executionErrorModes: {
    text: string;
    value: string;
  }[];
  reducerTypes: {
    text: string;
    value: string;
  }[];
  createReducerPart: (model: any) => QueryPart;
  joinEvalMatches: (matches: any, seperator: string) => any;
  alertStateSortScore: {
    alerting: number;
    no_data: number;
    pending: number;
    ok: number;
    paused: number;
  };
};
export default _default;
