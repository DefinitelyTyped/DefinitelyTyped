export = LabelFieldAggregator;
declare function LabelFieldAggregator(label: string): void;
declare class LabelFieldAggregator {
    constructor(label: string);
    label: string;
    supportsCalculatedFields: boolean;
    type: string;
}
