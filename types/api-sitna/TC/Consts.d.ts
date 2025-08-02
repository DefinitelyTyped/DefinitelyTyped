declare namespace Consts {
    const OLNS: string;
    const PROJ4JSOBJ: string;
    const GEOGRAPHIC: string;
    const UTM: string;
    const OLD_BROWSER_ALERT: string;
    const CLUSTER_ANIMATION_DURATION: number;
    const ZOOM_ANIMATION_DURATION: number;
    const URL_MAX_LENGTH: number;
    const METER_PRECISION: number;
    const DEGREE_PRECISION: number;
    const EXTENT_TOLERANCE: number;
    const SRSDOWNLOAD_GEOJSON_KML: string;

    const url: {
        SPLIT_REGEX: RegExp;
        EPSG: string;
        ERROR_LOGGER: string;
    };

    const classes: { [key: string]: string };
    const msgType: { INFO: string; WARNING: string; ERROR: string };
    const msgErrorMode: { TOAST: string; CONSOLE: string; EMAIL: string };
    const event: { [key: string]: string };
    const layer: { [key: string]: string };
    const text: { API_ERROR: string; APP_ERROR: string };
    const layerType: { [key: string]: string };
    const geom: { [key: string]: string };
    const dataType: { [key: string]: string };
    const searchType: { [key: string]: string };
    const mapSearchType: { [key: string]: string };
    const comparison: { [key: string]: string };
    const logicalOperator: { [key: string]: string };
    const WMTSEncoding: { KVP: string; RESTFUL: string };
    const mimeType: { [key: string]: string };
    const format: { [key: string]: string };
    const WFSErrors: { [key: string]: string };
    const visibility: { NOT_VISIBLE: number; NOT_VISIBLE_AT_RESOLUTION: number; HAS_VISIBLE: number; VISIBLE: number };
    const view: { DEFAULT: number; THREED: number; PRINTING: number };
    const units: { DEGREES: string; METERS: string };
    const MARKER: string;
    const infoContainer: { POPUP: string; RESULTS_PANEL: string };
    const DownloadError: { MIMETYPE_NOT_SUPORTED: string };
}

export default Consts;
