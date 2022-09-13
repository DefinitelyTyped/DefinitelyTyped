/* tslint:disable:unified-signatures */

declare namespace sn_ws {
    /**
     * The RESTMessageV2 API allows you to send outbound REST messages using JavaScript.
     * Use the RESTResponseV2 API to manage the response returned by the REST provider.
     *
     * You can use this API in scoped applications, or within the global scope.
     */
    class RESTMessageV2 {
        /**
         * Instantiates an empty RESTMessageV2 object.
         *
         * When using an object instantiated this way, you must manually specify an HTTP method an
         * endpoint.
         * @example
         *
         * var sm = new sn_ws.RESTMessageV2();
         */
        constructor();

        /**
         * Instantiates a RESTMessageV2 object using information from a REST message record.
         *
         * You must have a REST message record defined before you can use this constructor.
         *
         * In the following example, replace `REST_message_record` with the name of the REST message
         * record from your instance.
         *
         * @param name The name of the REST message record.
         * @param methodName The name of the HTTP method to use, such as GET or PUT.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         */
        constructor(name: string, methodName: RestHTTPMethods);

        /**
         * Send the REST message to the endpoint.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @returns The response returned by the REST provider.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * // Might throw exception if http connection timed out or some issue with sending request
         * // itself because of encryption/decryption of password.
         * var response = sm.execute();
         */
        execute(): RESTResponseV2;

        /**
         * Send the REST message to the endpoint asynchronously. The instance does not wait for a
         * response from the web service provider when making asynchronous calls.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @returns The response returned by the REST provider.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * // Might throw exception if http connection timed out or some issue with sending request
         * // itself because of encryption/decryption of password.
         * var response = sm.executeAsync();
         * // In seconds. Wait at most 60 seconds to get response from ECC Queue/Mid Server
         * // Might throw exception timing out waiting for response in ECC queue.
         * response.waitForResponse(60);
         */
        executeAsync(): RESTResponseV2;

        /**
         * Get the URL of the endpoint for the REST message.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @returns The URL of the REST web service provider.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * var endpoint = sm.getEndpoint();
         */
        getEndpoint(): string;

        /**
         * Get the content of the REST message body.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @returns The REST message body.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * var body = sm.getRequestBody();
         */
        getRequestBody(): string;

        /**
         * Get the value for an HTTP header specified in the REST message.
         *
         * By default, this method cannot return the value for a header set automatically by the system.
         * To grant this method access to all headers, set the property glide.http.log_debug to true.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @param headerName The request header you want to get the value for.
         * @returns The value of the specified header.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * var header = sm.getRequestHeader("Accept");
         */
        getRequestHeader(headerName: string): string;

        /**
         * Get HTTP headers that were set by the REST client and the associated values.
         *
         * This method does not return headers set automatically by the system. To configure this
         * method to return all headers, set the property glide.http.log_debug to true.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @returns An Object that maps the name of each header to the associated value.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * var headers = sm.getRequestHeaders();
         */
        getRequestHeaders(): object;

        /**
         * Configures the REST message to save the returned response body as an attachment record.
         *
         * When you use this function with a REST message that is sent through a MID server, the MID
         * server user must have any roles required to read and write attachment records, as well as
         * any roles required to read and write records on the table specified in the tableName
         * parameter.
         *
         * The response body does not need to be a binary file to be saved as an attachment. Response
         * bodies using text formats, such as JSON or XML can also be saved. If the instance fails
         * to save the attachment, call getErrorMessage() on the related RESTResponseV2 object
         * for error details.
         *
         * @param tableName Specify the table that contains the record you want to attach the saved file
         * to.
         * @param recordSysId Specify the sys_id of the record you want to attach the saved file to.
         * @param fileName Specify the file name to give to the saved file.
         * @example
         *
         * (function sampleRESTMessageV2() {
         *    try {
         *       var request = new sn_ws.RESTMessageV2();
         *       request.setHttpMethod('get');
         *
         *       var attachment_sys_id = '<attachment_record_sys_id>',
         *           tablename = 'incident',
         *           recordSysId = '<incident_sys_id>',
         *           response,
         *           httpResponseStatus,
         *           filename = '<filename>';
         *
         *       // endpoint - ServiceNow REST Attachment API
         *       request.setEndpoint('https://<instance_name>.service-now.com/api/now/attachment/' +
         *       attachment_sys_id + '/file');
         *       request.setBasicAuth('<username>', '<password>');
         *
         *       // RESTMessageV2 - saveResponseBodyAsAttachment(String tableName, String recordSysId,
         *       // String fileName)
         *       request.saveResponseBodyAsAttachment(tablename, recordSysId, filename);
         *
         *       response = request.execute();
         *       httpResponseStatus = response.getStatusCode();
         *
         *       gs.print(" http response status_code:  " + httpResponseStatus);
         *   }
         *   catch (ex) {
         *       var message = ex.getMessage();
         *       gs.print(message);
         *   }
         * })();
         */
        saveResponseBodyAsAttachment(
            tableName: string,
            recordSysId: string,
            fileName: string
        ): void;

        /**
         * Configure the REST message to save the returned response body as an encrypted
         * attachment record.
         *
         * When you use this function with a REST message that is sent through a MID server, the MID
         * server user must have any roles required to read and write attachment records, as well as any
         * roles required to read and write records on the table specified in the `tableName` parameter.
         *
         * The response body does not need to be a binary file to be saved as an attachment. Response
         * bodies using text formats, such as JSON or XML can also be saved. If the instance fails to
         * save the attachment, call `getErrorMessage()` on the related RESTResponseV2 object for error
         * details.
         *
         * @param tableName Specify the table that contains the record you want to attach the saved file
         * to.
         * @param recordSysId Specify the sys_id of the record you want to attach the saved file to.
         * @param fileName Specify the file name to give to the saved file.
         * @param encryptContext Specify the sys_id of an encryption context. The saved file is
         * encrypted using this context.
         */

        saveResponseBodyAsAttachment(
            tableName: string,
            recordSysId: string,
            fileName: string,
            encryptContext: string
        ): void;

        /**
         * Set the credentials for the REST message using an existing basic auth or OAuth 2.0 profile.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @param type The type of authentication profile to use. Valid values are 'basic' to use basic
         * authentication, or 'oauth2' to use OAuth 2.0.
         * @param profileId The sys_id of an authentication profile record. When using basic auth,
         * specify the sys_id of a Basic Auth Configuration [sys_auth_profile_basic] record. When using
         * OAuth 2.0, specify the sys_id of a OAuth Entity Profile [oauth_entity_profile] record.
         * @example
         *
         * var requestBody;
         * var responseBody;
         * var status;
         * var sm;
         * try {
         *     // Might throw exception if message doesn't exist or not visible due to scope.
         *     sm = new sn_ws.RESTMessageV2("<REST_message_record>", "get");
         *
         *     // set auth profile to an OAuth 2.0 profile record.
         *     sm.setAuthenticationProfile('oauth2', '1234adsf123212131123qasdsf');
         *
         *     sm.setStringParameter("symbol", "NOW");
         *     sm.setStringParameterNoEscape("xml_data", "<data>test</data>");
         *
         *     // In milliseconds. Wait at most 10 seconds for response from http request.
         *     sm.setHttpTimeout(10000);
         *     // Might throw exception if http connection timed out or some issue
         *     // with sending request itself because of encryption/decryption of password.
         *     response = sm.execute();
         *     responseBody = response.haveError() ? response.getErrorMessage() : response.getBody();
         *     status = response.getStatusCode();
         * } catch (ex) {
         *     responseBody = ex.getMessage();
         *     status = '500';
         * } finally {
         *     requestBody = sm ? sm.getRequestBody() : null;
         * }
         */
        setAuthenticationProfile(type: string, profileId: string): void;

        /**
         * Sets basic authentication headers for the REST message.
         *
         * Setting security values using this method overrides basic authentication values defined for
         * the REST message record.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @param userName The username you want to use to authenticate the REST message.
         * @param userPass The password for the specified user.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * sm.setBasicAuth("username","password");
         */
        setBasicAuth(userName: string, userPass: string): void;

        /**
         * Associate outbound requests and the resulting response record in the ECC queue. This method
         * only applies to REST messages sent through a MID Server.
         *
         * The correlator provided populates the Agent correlator field on the ECC queue record for the
         * response. Provide a unique correlator for each outbound request to associate the correct
         * results in the ECC queue with the request when designing asynchronous automation through a
         * MID Server.
         *
         * In the following example, replace REST_message_record with the name of the REST message record
         * from your instance.
         *
         * @param correlator A unique identifier
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * sm.setEccCorrelator("unique_identifier");
         */
        setEccCorrelator(correlator: string): void;

        /**
         * Override a value from the database by writing to the REST message payload. This method only
         * applies to REST messages sent through a MID Server.
         *
         * Use this method when a value from the REST message in the database is invalid, such as when
         * the endpoint URL is longer than the maximum REST endpoint field length. You can set only the
         * endpoint URL using this method by passing source as the name parameter.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @param name The name of the parameter, such as source.
         * @param value The value to assign to the specified parameter.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * sm.setEccParameter("source","http://very.long.endpoint.url");
         */
        setEccParameter(name: string, value: string): void;

        /**
         * Set the endpoint for the REST message.
         *
         * By default, the REST message uses the endpoint specified in the REST message record. Use this
         * method to override this default. You must call this method when using the RESTMessageV2 -
         *
         * RESTMessageV2() constructor with no parameters.
         *
         * @param endpoint The URL of the REST provider you want to interface with.
         * @example
         *
         * var sm = new sn_ws.RESTMessageV2();
         * sm.setEndpoint("http://web.service.endpoint");
         */
        setEndpoint(endpoint: string): void;

        /**
         * The HTTP method this REST message performs, such as GET or PUT.
         *
         * You must set an HTTP method when using the RESTMessageV2 - RESTMessageV2() constructor with
         * no parameters.
         * @param method The HTTP method to perform.
         * @example
         *
         * var sm = new sn_ws.RESTMessageV2();
         * sm.setHttpMethod("post");
         */
        setHttpMethod(method: RestHTTPMethods): void;

        /**
         * Set the amount of time the REST message waits for a response from the web service provider
         * before the request times out.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @param timeoutMs The amount of time, in milliseconds, before the call to the REST provider
         * times out.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * sm.setHttpTimeout(6000);
         */
        setHttpTimeout(timeoutMs: number): void;

        /**
         * Set the log level for this message and the corresponding response.
         *
         * Setting a log level using the RESTMessageV2 API overrides the log level configured on the
         * REST message record. This log level may not apply if the endpoint domain is blacklisted, or
         * if the property glide.outbound_http_log.override is true. To view outbound web service logs,
         * navigate to System Logs > Outbound HTTP Requests.
         *
         * @param level The log level. Valid values are basic, elevated, and all.
         * @example
         *
         * var rm = new sn_ws.RESTMessageV2();
         * rm.setLogLevel('all');
         */
        setLogLevel(level: 'basic' | 'elevated' | 'all'): void;

        /**
         * Configure the REST message to communicate through a MID Server.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @param midServer The name of the MID Server to use. Your instance must have an active MID
         * Server with the specified name.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * sm.setMIDServer("mid_server_name");
         */
        setMIDServer(midServer: string): void;

        /**
         * Set the mutual authentication protocol profile for the REST message.
         *
         * Setting a protocol profile using this method overrides the protocol profile selected for the
         * REST message record.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @param profileName The Name of the protocol profile to use for mutual authentication.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * sm.setMutualAuth("mutual_auth_profile_name");
         */
        setMutualAuth(profileName: string): void;

        /**
         * Append a parameter to the end of the request URL with the form name=value.
         *
         * For example, the code setQueryParameter("sysparm_query",
         * "active=true^ORDERBYnumber^ORDERBYDESCcategory"); appends the text
         *
         * sysparm_query=active=true^ORDERBYnumber^ORDERBYDESCcategory to the request URL.
         *
         * @param name The name of the URL parameter to pass.
         * @param value The value to assign the URL parameter.
         * @example
         *
         * var sm = new sn_ws.RESTMessageV2();
         * // Set up message, including endpoint and authentication
         * sm.setQueryParameter("sysparm_query","active=true^ORDERBYnumber^ORDERBYDESCcategory");
         */
        setQueryParameter(name: string, value: string): void;

        /**
         * Set the body content to send to the web service provider when using PUT or POST HTTP methods.
         *
         * When you set the body content using this method, variables in the body are not substituted
         * for parameters from the REST message function record. You must explicitly define all values
         * within the REST message body.
         *
         * @param body The request body to send.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("Update user","post");
         * var body = "<Message body content>";
         * sm.setRequestBody(body);
         */
        setRequestBody(body: string): void;

        /**
         * Sets the request body using an existing attachment record.
         *
         * When you use this function with a REST message that is sent through a MID server, the MID
         * server user must have any roles required to read attachment records.
         *
         * @param attachmentSysId The sys_id of the Attachment [sys_attachment] record you want to send
         * in this REST message.
         * @example
         *
         * (function sampleRESTMessageV2() {
         *     try {
         *         var request = new sn_ws.RESTMessageV2();
         *         request.setHttpMethod('post');
         *         request.setEndpoint('<web service endpoint URL>');
         *         request.setRequestBodyFromAttachment('<attachment sys_id>');
         *
         *         var response = request.execute();
         *         var httpResponseStatus = response.getStatusCode();
         *
         *         gs.print("http response status_code: " + httpResponseStatus);
         *     }
         *     catch (ex) {
         *         var message = ex.getMessage();
         *         gs.print(message);
         *     }
         * })();
         */
        setRequestBodyFromAttachment(attachmentSysId: string): void;

        /**
         * Set the body content of a PUT or POST message using a binary stream.
         *
         * You can use this method to send binary files such as images or archives using REST messages.
         * If the request is not a PUT or POST request, the request body is ignored.
         *
         * @param stream The binary data to send, such as an attachment or a stream from a 3rd-party
         * service.
         */
        setRequestBodyFromStream(stream: object): void;

        /**
         * Set an HTTP header in the REST message to the specified value.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @param name The name of the header.
         * @param value The value to assign to the specified header.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * sm.setRequestHeader("Accept","Application/json");
         */
        setRequestHeader(name: string, value: string): void;

        /**
         * Override the default requestor profile for the REST message in order to retrieve an OAuth
         * access token associated with a different requestor.
         *
         * This method applies only to REST messages configured to use OAuth 2.0 authentication. This
         * method is optional and is unnecessary in most configurations.
         *
         * @param requestorContext
         * @param requestorId
         */
        setRequestorProfile(requestorContext: string, requestorId: string): void;

        /**
         * Set a REST message function variable with the specified name from the REST message record
         * to the specified value.
         *
         * XML reserved characters in the value are converted to the equivalent escaped characters. Use
         * setStringParameterNoEscape to set a variable without escaping XML reserved characters.
         *
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @param name The name of the REST message variable. This parameter must be defined in the
         * REST message record before you can assign a value to it.
         * @param value The value to assign the variable.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * sm.setStringParameter("s","NOW");
         */
        setStringParameter(name: string, value: string): void;

        /**
         * Set a REST message function variable with the specified name from the REST message record to
         * the specified value.
         *
         * This method is equivalent to setStringParameter but does not escape XML reserved characters.
         * In the following example, replace REST_message_record with the name of the REST message
         * record from your instance.
         *
         * @param name The name of the REST message variable. This parameter must be defined in the
         * REST message record before you can assign a value to it.
         * @param value The value to assign the variable.
         * @example
         *
         * // Might throw exception if message doesn't exist or not visible due to scope.
         * var sm = new sn_ws.RESTMessageV2("<REST_message_record>","get");
         * sm.setStringParameterNoEscape("s","NOW");
         */
        setStringParameterNoEscape(name: string, value: string): void;
    }

    type RestHTTPMethods =
        | 'get'
        | 'post'
        | 'delete'
        | 'patch'
        | 'put'
        | 'head'
        | 'delete'
        | 'options';
}
