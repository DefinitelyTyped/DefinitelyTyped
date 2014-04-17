declare class URITemplate{
	constructor();
	constructor(template: string);
	expand(vals: Object): string;
} 