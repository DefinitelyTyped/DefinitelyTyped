export = CompositeVisualizationDef;
declare function CompositeVisualizationDef(): void;
declare class CompositeVisualizationDef {
    adjustItemHeaders: boolean;
    autoCreateFilters: boolean;
    items: {
        [x: string]: any;
    };
    layout: string[];
    type: string;
}
