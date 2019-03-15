/**
 * Created by staticfunction on 8/4/14.
 */
import * as htmlparser from 'htmlparser2';
import { DomHandler, DomElement } from 'domhandler';

const dh = new DomHandler((err: Error, dom: DomElement[]) => {
    if(err) {
        throw err;
    }
    console.log(dom);
});
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
