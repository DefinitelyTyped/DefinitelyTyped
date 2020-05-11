import powerbi = require('powerbi-visuals-tools');

import IVisualPlugin = powerbi.visuals.plugins.IVisualPlugin;
import IVisual = powerbi.extensibility.visual.IVisual;

const visualPlugin: IVisualPlugin = {
    name: 'string',
    create: (options?: powerbi.extensibility.VisualConstructorOptions) => {
        const value: IVisual = {
            update: (options: powerbi.extensibility.VisualUpdateOptions) => {}
        };
        return value;
    },
    class: 'string',
    custom: true,
    apiVersion: "1.11.0",
    displayName: "string"
};

import ISelectionIdBuilder = powerbi.visuals.ISelectionIdBuilder;
import ISelectionId = powerbi.visuals.ISelectionId;

const selectionBuilder: ISelectionIdBuilder = {
    withCategory: (categoryColumn: powerbi.DataViewCategoryColumn, index: number): ISelectionIdBuilder => {
        return selectionBuilder;
    },
    withSeries: (ser: powerbi.DataViewValueColumns, val: powerbi.DataViewValueColumn | powerbi.DataViewValueColumnGroup): ISelectionIdBuilder => {
        return selectionBuilder;
    },
    withMeasure: (measure: string): ISelectionIdBuilder => {
        return selectionBuilder;
    },
    createSelectionId: (): ISelectionId => {
        const selection: ISelectionId = {
            equals: (sel: ISelectionId) => false,
            includes: (sel: ISelectionId, ignoreHL: boolean) => false,
            getKey: () => "string",
            getSelector: () => {
                const selector: powerbi.data.Selector = {
                };
                return selector;
            },
            getSelectorsByColumn: () => {
                const selector: powerbi.data.SelectorsByColumn = {
                };
                return selector;
            },
            hasIdentity: () => false
        };
        return selection;
    }
};

import DataView = powerbi.DataView;
import DataViewMetadata = powerbi.DataViewMetadata;
import DataViewCategorical = powerbi.DataViewCategorical;
import DataViewSingle = powerbi.DataViewSingle;
import DataViewTree = powerbi.DataViewTree;
import DataViewTable = powerbi.DataViewTable;
import DataViewMatrix = powerbi.DataViewMatrix;
import DataViewScriptResultData = powerbi.DataViewScriptResultData;

const dataView: DataView = {
    metadata: {
        columns: [
        ],
        objects: undefined,
        dataReduction: undefined,
        segment: {
        }
    },
    categorical: {
        categories: [
            {
                identity: [
                    {
                        expr: {},
                        key: "string",
                        kind: powerbi.DataRepetitionKind.ScopeIdentity
                    }
                ],
                identityFields: [],
                objects: undefined,
                source: {
                    displayName: "string",
                    format: "string",
                    groupName: "string",
                    objects: undefined,
                    aggregates: {
                        average: true
                    },
                    isMeasure: false,
                    queryName: "string",
                    sort: powerbi.SortDirection.Ascending || powerbi.SortDirection.Descending,
                    index: 0,
                    type: {
                        text: true
                    },
                    sortOrder: 0,
                    kpi: {
                        graphic: "string",
                        normalizedFiveStateKpiRange: false
                    }
                },
                values: []
            }
        ],
        values: undefined
    }
};
