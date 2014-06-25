// Type definitions for node-xml2js
// Project: https://github.com/Leonidas-from-XIV/node-xml2js
// Definitions by: Michel Salib <https://github.com/michelsalib>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'xml2js' {

    export = xml2js;

    module xml2js {
	    function parseString(xml:string, callback: (err: any, result:any) => void): void;
	    function parseString(xml:string, options: Options, callback: (err: any, result:any) => void): void;

		interface Options {
			attrkey?: string;
			charkey?: string;
			explicitCharkey?: boolean;
	    	trim?: boolean;
	    	normalizeTags?: boolean;
	    	normalize?: boolean;
	    	explicitRoot?: boolean;
	    	emptyTag?: any;
	    	explicitArray?: boolean;
	    	ignoreAttrs?: boolean;
	    	mergeAttrs?: boolean;
	    	validator?: Function;
	    	xmlns?: boolean;
	    	explicitChildren?: boolean;
	    	charsAsChildren?: boolean;
	    	async?: boolean;
	    	strict?: boolean;
	    	attrNameProcessors?: (name: string) => string;
	    	tagNameProcessors?: (name: string) => string;
	    }
    }
}
