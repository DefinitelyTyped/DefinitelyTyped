import match from "url-match-patterns";

// $ExpectType boolean
match("*://*/", "https://www.example.com");

// $ExpectType (url: string) => boolean
const matches = match("*://*/");

// $ExpectType boolean
matches("https://www.example.com");
