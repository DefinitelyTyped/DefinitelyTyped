/**
 * Created by staticfunction on 8/4/14.
 */
import htmlparser = require("htmlparser2");

var parser = new htmlparser.Parser({
    onopentag: (name:string, attribs:{[s:string]:string}) => {
        if(name === "script" && attribs['type'] === "text/javascript"){
            console.log("JS! Hooray!");
        }
    },
    ontext: (text: string) => {
        console.log("-->", text);
    },
    onclosetag: (tagname:string) => {
        if(tagname === "script"){
            console.log("That's it?!");
        }
    }
});

parser.write("Xyz <script type='text/javascript'>var foo = '<<bar>>';</script>");
parser.end();
