import * as htmlparser from "htmlparser2";

const rawHtml = "Xyz <script language= javascript>var foo = '<<bar>>';< /  script><!--<!-- Waah! -- -->";
const handler = new htmlparser.DomHandler((error: Error, dom: htmlparser.DomElement[]) => {
    if (error)
    	console.error('There has been an error...');
    else
        console.log(dom);
});
const parser = new htmlparser.Parser(handler);
parser.write(rawHtml);
parser.end();
