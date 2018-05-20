import { Emitter } from 'grafana/app/core/core';

export class DashboardRow {
    private model;
    panels: any;
    title: any;
    showTitle: any;
    titleSize: any;
    events: Emitter;
    span: number;
    height: number;
    collapse: boolean;
    defaults: {
        title: string;
        panels: any[];
        showTitle: boolean;
        titleSize: string;
        height: number;
        isNew: boolean;
        repeat: any;
        repeatRowId: any;
        repeatIteration: any;
        collapse: boolean;
    };
    constructor(model: any);
    getSaveModel(): any;
    updateRowSpan(): void;
    panelSpanChanged(alwaysSendEvent?: any): void;
    addPanel(panel: any): void;
    removePanel(panel: any, ask?: any): void;
    movePanel(fromIndex: any, toIndex: any): void;
    destroy(): void;
    copyPropertiesFromRowSource(source: any): void;
    toggleCollapse(): void;
}
