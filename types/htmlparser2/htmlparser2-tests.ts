/**
 * Created by staticfunction on 8/4/14.
 */
import htmlparser = require('htmlparser2');

const options: htmlparser.DomHandlerOptions = { withEndIndices: false, withDomLvl1: true }
const dh = new htmlparser.DomHandler((err: Error, dom: htmlparser.DomElement[]) => {
    if(err) {
        throw err;
    }

    // Use DomUtils to get name of first element in dom
    console.log(htmlparser.DomUtils.getName(dom[0]));
}, options);
dh.onopentag = (name:string, attribs:{[s:string]:string}) => {
    if(name === "script" && attribs['type'] === "text/javascript"){
        console.log("JS! Hooray!");
    }
};
dh.ontext = (text: string) => {
    console.log("-->", text);
};
dh.onclosetag = () => {
    console.log("That's it?!");
};

var parser = new htmlparser.Parser(dh);

parser.write("Xyz <script type='text/javascript'>var foo = '<<bar>>';</script>");
parser.end();
