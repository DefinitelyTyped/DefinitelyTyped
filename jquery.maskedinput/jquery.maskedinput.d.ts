/// <reference path="../jquery/jquery.d.ts" />

interface Caret {
	begin: number;
	end: number;
}

interface JQuery {
	caret(): Caret;
	caret(begin: number, end?: number);

	mask(format: string): JQuery;
	unmask(): JQuery;
}

interface JQueryMaskedInputOptions {
	definitions: {
		[entry: string]: string;
	};
}

interface JQueryStatic {
	mask: JQueryMaskedInputOptions;
}
