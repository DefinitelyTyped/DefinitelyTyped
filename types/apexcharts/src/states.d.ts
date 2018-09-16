export type States = {
    normal: Hover;
    hover: Hover;
    active: Active;
};

type Active = {
    allowMultipleDataPointsSelection: boolean;
    filter: Filter;
};

type Filter = {
    type: string;
    value: number;
};

type Hover = {
    filter: Filter;
};
