import { htmlSafe, isHTMLSafe } from "@ember/template";
import { SafeString } from "@ember/template/-private/handlebars";

const handlebarsSafeString: SafeString = htmlSafe("lorem ipsum...");
htmlSafe("lorem ipsum..."); // $ExpectType SafeString
// @ts-expect-error
const regularString: string = htmlSafe("lorem ipsum...");

function isSafeTest(a: string | SafeString) {
    if (isHTMLSafe(a)) {
        a = a.toString();
    }

    a.toLowerCase();
}
