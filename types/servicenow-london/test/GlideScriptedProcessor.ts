(function() {
    //Do whatever processing you need and redirect to the homepage
    g_processor.redirect('/navpage.do');
})();
(function() {
    var map = { key1: 'value1', key2: 'value2' };
    g_processor.writeJSON(map);
})();
(function() {
    var name = g_request.getParameter('name');
    g_processor.writeOutput('text/plain', 'Hello ' + name);
})();
(function() {
    var name = g_request.getParameter('name');
    g_processor.writeOutput('Hello ' + name);
})();
