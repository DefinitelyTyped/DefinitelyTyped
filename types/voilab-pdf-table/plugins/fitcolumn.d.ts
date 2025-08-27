import VoilabPdfTable = require("..");

export = VoilabPdfTablePluginFitColumn;

declare namespace VoilabPdfTablePluginFitColumn {
    interface VoilabPdfTablePluginFitColumnConf<T> {
        column?: keyof T;
        maxWidth?: number;
    }
}

interface VoilabPdfTablePluginFitColumn<T = any> {
    // eslint-disable-next-line @typescript-eslint/no-misused-new
    new<T>(
        conf: VoilabPdfTablePluginFitColumn.VoilabPdfTablePluginFitColumnConf<T>,
    ): VoilabPdfTable.VoilabPdfTablePlugin<T>;
}

declare const VoilabPdfTablePluginFitColumn: VoilabPdfTablePluginFitColumn;
