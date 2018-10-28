// Type definitions for docCookies
// Project: https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
// Definitions by: Jon Egerton <https://github.com/jonegerton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



docCookies.setItem("test0", "Hello world!");
docCookies.setItem("test1", "Unicode test: \u00E0\u00E8\u00EC\u00F2\u00F9", Infinity);
docCookies.setItem("test2", "Hello world!", new Date(2020, 5, 12));
docCookies.setItem("test3", "Hello world!", new Date(2027, 2, 3), "/blog");
docCookies.setItem("test4", "Hello world!", "Sun, 06 Nov 2022 21:43:15 GMT");
docCookies.setItem("test5", "Hello world!", "Tue, 06 Dec 2022 13:11:07 GMT", "/home");
docCookies.setItem("test6", "Hello world!", 150);
docCookies.setItem("test7", "Hello world!", 245, "/content");
docCookies.setItem("test8", "Hello world!", null, null, "example.com");
docCookies.setItem("test9", "Hello world!", null, null, null, true);
 
alert(docCookies.keys().join("\n"));
alert(docCookies.getItem("test1"));
alert(docCookies.getItem("test5"));
docCookies.removeItem("test1");
docCookies.removeItem("test5", "/home");
alert(docCookies.getItem("test1"));
alert(docCookies.getItem("test5"));
alert(docCookies.getItem("unexistingCookie"));
//alert(docCookies.getItem());