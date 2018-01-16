/**
 * Seems like this is meant: https://github.com/amcharts/export
 */
export default class ExportSettings {
    enabled: boolean;
    libs: object;
    menu: object;
    config: any;
    capture(config: any, callback: () => void): any;
    toJPG(config: any, callback: (config: any) => void): any;
}
