import { DomHandler, DomHandlerOptions, Node, DomElement } from "domhandler";

const handler = new DomHandler((error: Error, dom: DomElement[]) => {
    if (error)
    	console.error('There has been an error...');
    else
        console.log(dom);
});
handler.ontext = (data: string) => { console.log(data); };
handler.onreset = () => { console.log('We have a reset.'); };
handler.onerror = (error: Error) => { console.error(error); };
handler.onopentag = (name: string, attribs: { [s: string]: string }) => { console.log(name, attribs); };

const dho: DomHandlerOptions = { normalizeWhitespace: true, withDomLvl1: true, withEndIndices: true, withStartIndices: true };
