import 'jquery.flot';
import 'jquery.flot.gauge';
import TimeSeries from 'grafana/app/core/time_series2';
import { MetricsPanelCtrl } from 'grafana/app/plugins/sdk';

export class SingleStatCtrl extends MetricsPanelCtrl {
    private $location;
    private linkSrv;
    static templateUrl: string;
    series: any[];
    data: any;
    fontSizes: any[];
    unitFormats: any[];
    invalidGaugeRange: boolean;
    panel: any;
    events: any;
    valueNameOptions: any[];
    panelDefaults: {
        links: any[];
        datasource: any;
        maxDataPoints: number;
        interval: any;
        targets: any[];
        cacheTimeout: any;
        format: string;
        prefix: string;
        postfix: string;
        nullText: any;
        valueMaps: Array<{
            value: string;
            op: string;
            text: string;
        }>;
        mappingTypes: Array<{
            name: string;
            value: number;
        }>;
        rangeMaps: Array<{
            from: string;
            to: string;
            text: string;
        }>;
        mappingType: number;
        nullPointMode: string;
        valueName: string;
        prefixFontSize: string;
        valueFontSize: string;
        postfixFontSize: string;
        thresholds: string;
        colorBackground: boolean;
        colorValue: boolean;
        colors: string[];
        sparkline: {
            show: boolean;
            full: boolean;
            lineColor: string;
            fillColor: string;
        };
        gauge: {
            show: boolean;
            minValue: number;
            maxValue: number;
            thresholdMarkers: boolean;
            thresholdLabels: boolean;
        };
    };
    /** @ngInject */
    constructor($scope: any, $injector: any, $location: any, linkSrv: any);
    onInitEditMode(): void;
    setUnitFormat(subItem: any): void;
    onDataError(err: any): void;
    onDataReceived(dataList: any): void;
    seriesHandler(seriesData: any): TimeSeries;
    setColoring(options: any): void;
    invertColorOrder(): void;
    getDecimalsForValue(value: any): any;
    setValues(data: any): void;
    removeValueMap(map: any): void;
    addValueMap(): void;
    removeRangeMap(rangeMap: any): void;
    addRangeMap(): void;
    link(scope: any, elem: any, attrs: any, ctrl: any): void;
}

export function getColorForValue(data: any, value: any): any;
export { SingleStatCtrl as PanelCtrl };
