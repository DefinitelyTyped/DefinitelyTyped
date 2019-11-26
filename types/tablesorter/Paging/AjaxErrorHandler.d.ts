import "jquery";
import { TablesorterConfigurationStore } from "../System/TablesorterConfigurationStore";

/**
 * Provides the functionality to handle errors caused by `ajax`.
 */
export interface AjaxErrorHandler<TElement = HTMLElement> {
    /**
     * Handles errors caused by an ajax-request.
     *
     * @param config
     * The configuration of the `tablesorter`.
     *
     * @param request
     * The request which caused an error.
     *
     * @param ajaxSettings
     * The settings for the request.
     *
     * @param thrownError
     * The error which occurred.
     *
     * @return
     * The error-message to display in the table-head.
     */
    (config: TablesorterConfigurationStore<TElement>, request: JQuery.jqXHR, ajaxSettings: JQuery.AjaxSettings, thrownError: string): string;
}
