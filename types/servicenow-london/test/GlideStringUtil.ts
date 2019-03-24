(function() {
    var filename = '../../../../../../etc/passwd';
    var cleanFilename = GlideStringUtil.dotToUnderBar(filename);
    gs.info(cleanFilename);
    // __/__/__/__/__/__/etc/passwd
})();
(function() {
    var mystring = "let's escape some quotes";
    var escapeQuote = GlideStringUtil.escapeAllQuotes(mystring);
    gs.info(escapeQuote);
    // lets escape some quotes
})();
(function() {
    var mystring = '<test> string \n to escape';
    var escapedString = GlideStringUtil.escapeForHomePage(mystring);
    gs.info(escapedString);
    // %3ctest%3e string \n to escape
})();
(function() {
    var mydata = '"<>&';
    mydata = GlideStringUtil.escapeHTML(mydata);
    gs.info(mydata);
    // &quot;&lt;&gt;&amp;
})();
(function() {
    var mystring = 'test \x09 non \x00 printable \x07 chars';
    var escapedString = GlideStringUtil.escapeNonPrintable(mystring);
    gs.info(escapedString);
    // test \t non \u0000 printable \u0007 chars
})();
(function() {
    var myquery = 'test^Test';
    var escapedQuery = GlideStringUtil.escapeQueryTermSeparator(myquery);
    gs.info(escapedQuery);
    // test^^Test
})();
(function() {
    var mystring = "let's try escapeTicks";
    var escaped = GlideStringUtil.escapeTicks(mystring);
    gs.info(escaped);
    // let\'s try escapeTicks
})();
(function() {
    var mydata = '&';
    var htmlvalue = GlideStringUtil.getHTMLValue(mydata);
    gs.info(htmlvalue);
    // &amp;
})();
(function() {
    var mystring = '123 test 456 String 789 cleaning';
    var onlyNumeric = GlideStringUtil.getNumeric(mystring);
    gs.info(onlyNumeric);
    // 123456789
})();
(function() {
    // (adding a "*" to corrupt the base64 format)
    var base64 = 'GethdTYehdtshetB*';
    var isValid = GlideStringUtil.isBase64(base64);
    gs.info(isValid);
    // false
})();
(function() {
    var sysID = '62826bf03710200044e0bfc8bcbe5df1';
    var isElig = GlideStringUtil.isEligibleSysID(sysID);
    gs.info(isElig);
    // true
})();
(function() {
    var mystring = 'new line break \n, this is after the break';
    var replaceNewLine = GlideStringUtil.newLinesToBreaks(mystring);
    gs.info(replaceNewLine);
    // new line break <br/>, this is after the break
})();
(function() {
    var mystring = 'test with \n (new line) and \t (tabulation)';
    var normalizedString = GlideStringUtil.normalizeWhitespace(mystring);
    gs.info(normalizedString);
    // test with (new line) and (tabulation)
})();
(function() {
    var mydata = '&quot;&lt;&gt;&amp;';
    var unescaped = GlideStringUtil.unescapeHTML(mydata);
    gs.info(unescaped);
    // "<>&
})();
