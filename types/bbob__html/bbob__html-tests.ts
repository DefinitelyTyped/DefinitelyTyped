import { ProcessOptions } from "@bbob/core";
import toHTML, { HTMLOptions } from "@bbob/html";

const process = (input: string, params?: HTMLOptions) => toHTML(input, [], params);
const input = "[url=https://ru.wikipedia.org]Text[/url]";

// $AssertType string
process(input);

// $AssertType string
process(input, { stripTags: true });
