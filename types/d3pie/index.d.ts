declare namespace d3pie {
    interface ID3PieChart {
        redraw(): void;
        openSegment(index: number): void;
        closeSegment(index: void): void;
        getOpenSegment(): any;
        updateProp(propKey: string, value: any): void;
        destroy(): void;
    }

    interface ID3PieStyleOptions {
        color?: string | undefined;
        fontSize?: number | undefined;
        font?: string | undefined;
    }

    interface ID3PieTextOptions extends ID3PieStyleOptions {
        text?: string | undefined;
    }

    interface ID3PieLabelsOptions {
        format?:
            | "label"
            | "value"
            | "percentage"
            | "label-value1"
            | "label-value2"
            | "label-percentage1"
            | "label-percentage2"
            | undefined;
        hideWhenLessThanPercentage?: number | undefined;
    }

    interface ID3PieOptions {
        header?: {
            title?: ID3PieTextOptions | undefined;
            subtitle?: ID3PieTextOptions | undefined;
            location?: "top-center" | "top-left" | "pie-center" | undefined;
            titleSubtitlePadding?: number | undefined;
        } | undefined;
        footer?: { location?: "left" | undefined } & ID3PieTextOptions | undefined;
        size?: {
            canvasHeight?: number | undefined;
            canvasWidth?: number | undefined;
            pieOuterRadius?: string | number | undefined;
            pieInnerRadius?: string | number | undefined;
        } | undefined;
        data: {
            sortOrder?: "none" | "random" | "value-asc" | "value-desc" | "label-asc" | "label-desc" | undefined;
            smallSegmentGrouping?: {
                enabled?: boolean | undefined;
                value?: number | undefined;
                valueType?: "percentage" | "value" | undefined;
                label?: string | undefined;
                color?: string | undefined;
            } | undefined;
            content: {
                label: string;
                value: number;
                color?: string | undefined;
            }[];
        };
        labels?: {
            outer?: { pieDistance?: number | undefined } & ID3PieLabelsOptions | undefined;
            inner?: ID3PieLabelsOptions | undefined;
            mainLabel?: ID3PieStyleOptions | undefined;
            percentage?: { decimalPlaces?: number | undefined } & ID3PieStyleOptions | undefined;
            value?: ID3PieStyleOptions | undefined;
            lines?: {
                enabled?: boolean | undefined;
                style?: "curved" | "straight" | undefined;
                color?: string | undefined;
            } | undefined;
            truncation?: {
                enabled?: boolean | undefined;
                truncateLength?: number | undefined;
            } | undefined;
            formatter?:
                | ((context: {
                    section: "outer" | "inner";
                    value: number;
                    label: string;
                }) => string)
                | undefined;
        } | undefined;
        effects?: {
            load?: {
                effect?: "none" | "default" | undefined;
                speed?: number | undefined;
            } | undefined;
            pullOutSegmentOnClick?: {
                effect?: "none" | "linear" | "bounce" | "elastic" | "back" | undefined;
                speed?: number | undefined;
                size?: number | undefined;
            } | undefined;
            highlightSegmentOnMouseover?: boolean | undefined;
            highlightLuminosity?: number | undefined;
        } | undefined;
        tooltips?: {
            enabled?: boolean | undefined;
            type?: "placeholder" | "caption" | undefined;
            string?: string | undefined;
            placeholderParser?:
                | ((
                    index: number,
                    data: { label?: string | undefined; percentage?: number | undefined; value?: number | undefined },
                ) => void)
                | undefined;
            styles?: {
                fadeInSpeed?: number | undefined;
                backgroundColor?: string | undefined;
                backgroundOpacity?: number | undefined;
                color?: string | undefined;
                borderRadius?: number | undefined;
                font?: string | undefined;
                fontSize?: number | undefined;
                padding?: number | undefined;
            } | undefined;
        } | undefined;
        misc?: {
            colors?: {
                background?: string | undefined;
                segments?: string[] | undefined;
                segmentStroke?: string | undefined;
            } | undefined;
            gradient?: {
                enabled?: boolean | undefined;
                percentage?: number | undefined;
                color?: string | undefined;
            } | undefined;
            canvasPadding?: {
                top?: number | undefined;
                right?: number | undefined;
                bottom?: number | undefined;
                left?: number | undefined;
            } | undefined;
            pieCenterOffset?: {
                x?: number | undefined;
                y?: number | undefined;
            } | undefined;
            cssPrefix?: string | undefined;
        } | undefined;
        callbacks?: {
            onload?: Function | undefined;
            onMouseoverSegment?: Function | undefined;
            onMouseoutSegment?: Function | undefined;
            onClickSegment?: Function | undefined;
        } | undefined;
    }

    interface ID3PieClass {
        new(id: string | HTMLElement, options: ID3PieOptions): ID3PieChart;
    }
}

declare const d3pie: d3pie.ID3PieClass;
