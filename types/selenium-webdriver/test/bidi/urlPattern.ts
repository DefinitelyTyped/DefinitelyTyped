import { UrlPattern } from "selenium-webdriver/bidi/urlPattern";

let urlPattern: UrlPattern;

urlPattern = new UrlPattern()
    .protocol("https")
    .hostname("example.com")
    .port(8080)
    .pathname("/home")
    .search("?query=123");

// $ExpectType Map<string, string>
urlPattern.asMap();
