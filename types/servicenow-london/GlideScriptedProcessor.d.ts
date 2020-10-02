/* tslint:disable:unified-signatures */

/**
 * ServiceNow processors are equivalent to Java servlets.
 *
 * Processors provide a customizable URL endpoint that can execute arbitrary server-side JavaScript
 * code and produce output such as TEXT, JSON, or HTML. The `GlideScriptedProcessor` APIs are used
 * in processor scripts to access the the processor (servlet) capabilities. There are no
 * constructors for the `GlideScriptedProcessor` APIs. The methods are called using the global
 * variable `g_processor`.
 *
 * A useful global variable, `g_target`, is available in processor scripts. It contains the table
 * name extracted from the URL.
 *
 * The URL to a processor has the format:
 * `https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value>`
 * where the path endpoint and parameter endpoint are defined on the processor form.
 */
interface GlideScriptedProcessor {
    /**
     * Redirects to the specified URL.
     *
     * @param url the destination URL
     * @example
     *
     * //Do whatever processing you need and redirect to the homepage
     * g_processor.redirect("/navpage.do")
     */
    redirect(url: string): void;

    /**
     * Encodes an object as a JSON string and writes it to the current URL.
     *
     * @param o The object to encode to a JSON string.
     * @example
     *
     * var map = {"key1":"value1","key2":"value2"};
     * g_processor.writeJSON(map);
     */
    writeJSON(o: object): void;

    /**
     * Writes the specified string to the current URL in the specified character-encoding.
     *
     * @param contentType Sets the content type of the response sent to the client, if the response
     * has not been committed, and may include a character-encoding specification.
     * @param s The string to write.
     * @example
     *
     * var name = g_request.getParameter("name");
     * g_processor.writeOutput("text/plain", "Hello " + name);
     */
    writeOutput(contentType: string, s: string): void;

    /**
     * Writes the specified string to the current URL.
     *
     * @param s The string to write.
     * @example
     *
     * var name = g_request.getParameter("name");
     * g_processor.writeOutput("Hello " + name);
     */
    writeOutput(s: string): void;
}
