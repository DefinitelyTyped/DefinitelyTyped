import { DynamsoftEnums as Dynamsoft } from "./Dynamsoft.Enum";
import { WebTwainViewer } from "./WebTwain.Viewer";
import { BarcodeReader } from "./Addon.BarcodeReader";
import { OCR } from "./Addon.OCR";
import { OCRPro } from "./Addon.OCRPro";
import { PDF } from "./Addon.PDF";
import { Webcam } from "./Addon.Webcam";
import { Camera } from "./Addon.Camera";

export interface WebTwain extends WebTwainViewer {
    /**
     * Addons to WebTwain instances.
     */
    Addon: Addon;
    /**
     * [Deprecation] This API is no longer needed.
     */
    AllowMultiSelect: boolean;
    /**
     * [Deprecation] This API is no longer needed.
     */
    AllowPluginAuthentication: boolean;
    /**
     * [Deprecation] This API is no longer needed.
     */
    AsyncMode: boolean;
    /**
     * [Deprecation] This API is no longer needed.
     */
    BorderStyle: Dynamsoft.EnumDWT_BorderStyle | number;
    /**
     * Return whether a WebTwain instance is ready to use.
     */
    readonly bReady: boolean;
    /**
     * [Deprecation] This API is no longer needed.
     */
    BrokerProcessType: number;
    /**
     * [Deprecation] This API is no longer needed.
     */
    EnableInteractiveZoom: boolean;
}
export interface Addon {
    BarcodeReader: BarcodeReader;
    OCR: OCR;
    OCRPro: OCRPro;
    PDF: PDF;
    Webcam: Webcam;
    Camera: Camera;
}
