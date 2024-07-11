import { ParameterAllowableValuesType, ParameterDataType, PeriodType } from "./enums";
import { DataValue } from "./filtering";

export class Parameter {
    getName(): string;
    getCurrentValue(): DataValue;
    getDataType(): ParameterDataType;
    getAllowableValuesType(): ParameterAllowableValuesType;
    getAllowableValues(): DataValue[];
    getMinValue(): DataValue | undefined | null;
    getMaxValue(): DataValue | undefined | null;
    getStepSize(): number | undefined | null;
    getDateStepPeriod(): PeriodType;
}
