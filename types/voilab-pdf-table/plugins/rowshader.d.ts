import VoilabPdfTable = require("..");

export = VoilabPdfTablePluginRowShader;

declare namespace VoilabPdfTablePluginRowShader {
    interface VoilabPdfTablePluginRowShaderConf {
        shade1?: string;
        shade2?: string;
        textColor?: string;
        x?: number;
        width?: number;
        offsetHeader?: boolean;
    }
}

interface VoilabPdfTablePluginRowShader {
    // eslint-disable-next-line @typescript-eslint/no-misused-new no-unnecessary-generics
    new<T>(
        conf: VoilabPdfTablePluginRowShader.VoilabPdfTablePluginRowShaderConf,
        // eslint-disable-next-line @typescript-eslint/no-misused-new no-unnecessary-generics
    ): VoilabPdfTable.VoilabPdfTablePlugin<T>;
}

declare const VoilabPdfTablePluginRowShader: VoilabPdfTablePluginRowShader;
