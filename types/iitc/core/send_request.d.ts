export {};

declare global {
    /**
     * posts AJAX request to Ingress API.
     * @param action last part of the actual URL, the rpc/dashboard. is added automatically
     * @param data  JSON data to post. method will be derived automatically from action, but may
     *              be overridden. Expects to be given Hash. Strings are not supported.
     * @param successCallback method to call on success. See jQuery API docs for available arguments: http://api.jquery.com/jQuery.ajax/
     * @param errorCallback see above. Additionally it is logged if the request failed.
     */
    function postAjax(
        action: string,
        data: any,
        successCallback: (data: any, textStatus: string, jqXHR: JQuery.jqXHR) => void,
        errorCallback: (jqXHR: JQuery.jqXHR, textStatus: string, errorThrown: string) => void,
    ): any;

    function outOfDateUserPrompt(): void;
}
