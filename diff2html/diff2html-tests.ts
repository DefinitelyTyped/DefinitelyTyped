
import Diff2Html = require('diff2html');

let d2h = Diff2Html.Diff2Html;

class Diff2HtmlOptionsImpl implements Diff2Html.Options {
    constructor (public inputFormat: string) {
    }
}

let strInput =
        'diff --git a/sample b/sample\n' +
        'index 0000001..0ddf2ba\n' +
        '--- a/sample\n' +
        '+++ b/sample\n' +
        '@@ -1 +1 @@\n' +
        '-test\n' +
        '+test1r\n';

let strConfiguration = new Diff2HtmlOptionsImpl('diff');
let diffInput = d2h.getJsonFromDiff(strInput, strConfiguration);

let diffConfiguration = new Diff2HtmlOptionsImpl('json');
let htmlString = d2h.getPrettyHtml(diffInput, diffConfiguration);
console.log(htmlString);
