import VoilabPdfTable = require("..");

export = VoilabPdfTablePluginFitColumn;

declare namespace VoilabPdfTablePluginFitColumn {
    interface VoilabPdfTablePluginFitColumnConf<T> {
        column?: keyof T;
        maxWidth?: number;
    }
}

interface VoilabPdfTablePluginFitColumn<T = any> {
    // tslint:disable-next-line:no-misused-new
    new<T>(
        conf: VoilabPdfTablePluginFitColumn.VoilabPdfTablePluginFitColumnConf<T>,
    ): VoilabPdfTable.VoilabPdfTablePlugin<T>;
}

declare const VoilabPdfTablePluginFitColumn: VoilabPdfTablePluginFitColumn;
