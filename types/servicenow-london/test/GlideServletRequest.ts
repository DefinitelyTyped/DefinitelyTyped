(function() {
    var contentType = g_request.getContentType();
})();
(function() {
    var headerValue = g_request.getHeader('host');
    // demonightlyus.service-now.com
})();
(function() {
    var headerList = g_request.getHeaderNames();
    // host,connection,cache-control,authorization,accept,user-agent,accept-encoding,
    // accept-language, cookie,x-forwarded-proto,x-forwarded-host,x-forwarded-for
})();
(function() {
    var headerValue = g_request.getHeaders('host');
    // demonightlyus.service-now.com
})();
(function() {
    var name = g_request.getParameter('x_snc_custom_x_snc_name');
})();
(function() {
    var paramList = g_request.getParameterNames();
})();
(function() {
    var daString = g_request.getQueryString();
    g_processor.writeOutput('The query string is: ' + daString);
})();
