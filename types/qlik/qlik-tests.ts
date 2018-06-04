import * as Qlik from 'qlik';

// Extension API Test
() => {
    const definition: Qlik.Definition = {
        type: 'items',
        component: 'accordion',
        items: {
            dimensions: {
                uses: 'dimensions',
                min: 1,
                ref: "qHyperCubeDef.qDimensions",
                items: {
                    isGrouping: {
                        type: 'boolean',
                        ref: 'qDef.isGrouping',
                        label: 'Is Grouping',
                        defaultValue: false,
                    },
                },
            },
            measures: {
                uses: 'measures',
                ref: "qHyperCubeDef.qMeasures",
                min: 0,
            },
        }
    };

    const initialProperties: Qlik.InitialProperties = {
        qHyperCubeDef: {
            qDimensions: [],
            qMeasures: [],
            qInitialDataFetch: [{
                qWidth: 10,
                qHeight: 100,
            }],
        },
    };

    function paint(this: Qlik.ExtensionContext, $element: JQuery, layout: Qlik.Layout) {
        const dataRow = this.backendApi.getDataRow(0);
        if (dataRow) {
            $element.html(dataRow[0].qText);
        }
    }

    const e: Qlik.Extension = {
        definition,
        initialProperties,
        paint,
    };
};
