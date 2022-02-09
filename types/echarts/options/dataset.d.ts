declare namespace echarts {
    namespace EChartOption {
        /**
         * Dataset component is published since ECharts 4.
         * Dataset brings convenience in data management separated with styles and enables data reuse by different series.
         * More importantly, is enables data encoding from data to visual, which brings convenience in some scenarios.
         *
         * @see https://echarts.apache.org/en/option.html#dataset
         */
        interface Dataset {
            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option or API.
             */
            id?: string | undefined;
            /**
             * Source data. Generally speaking, a source data describe a table, where these format below can be applied:
             * 2d array, where dimension names can be provided in the first row/column, or do not provide, only data.
             *
             * @see https://echarts.apache.org/en/option.html#dataset.source
             */
            source?: any[] | object | undefined;
            /**
             * dimensions can be used to define dimension info for series.data or dataset.source.
             * Notice: if dataset is used, we can provide dimension names in the first column/row of dataset.source,
             * and not need to specify dimensions here. But if dimensions is specified here,
             * echarts will not retrieve dimension names from the first row/column of dataset.source any more.
             *
             * @see https://echarts.apache.org/en/option.html#dataset.dimensions
             */
            dimensions?: string[] | Dataset.DimensionObject[] | undefined;
        }

        namespace Dataset {
            /**
             * @see https://echarts.apache.org/en/option.html#dataset.dimensions
             */
            interface DimensionObject {
                name?: string | undefined;
                type?: 'number' | 'float' | 'int' | 'ordinal' | 'time' | undefined;
                displayName?: string | undefined;
            }
        }
    }
}
