import { NullOption, PeriodType, DateRangeType, FilterType } from './enums';
import { Worksheet } from './sheet';
import { Field } from './workbook';

type FilterOptions = {
  isExcludeMode: boolean;
}

type RangeFilterOptions = {
  min: number | Date;
  max: number | Date;
  nullOption: NullOption;
}

type RelativeDateFilterOptions = {
  anchorDate: Date;
  periodType: PeriodType;
  rangeType: DateRangeType;
  rangeN: number;
}

// ! HeirarchicalFilterOptions is specified as a dependency
// ! in the docs but is not defined
type HierarchicalFilterOptions = any;

export class Filter {
  // properties
  getWorksheet(): Worksheet;
  getFilterType(): FilterType;
  getFieldName(): string;
  // methods
  getAppliedWorksheetsAsync(): Promise<string[]>;
  getFieldAsync(): Promise<Field>;
  setAppliedWorksheetsAsync(applyToWorksheets: string[]): Promise<string[]>;
}

export class CategoricalFilter extends Filter {
  // properties
  getIsExcludeMode(): boolean;
  getAppliedValues(): DataValue[];
  getIsAllSelected(): boolean;
}

export class QuantitativeFilter extends Filter {
  getDomainMin(): DataValue;
  getDomainMax(): DataValue;
  getMin(): DataValue;
  getMax(): DataValue;
  getIncludeNullValues(): boolean;
}

export class RelativeDateFilter extends Filter {
  getPeriod(): PeriodType;
  getRange(): DateRangeType;
  getRangeN(): number;
}

type DataValue = {
  value: string | number | boolean | Date;
  formattedValue: string;
}