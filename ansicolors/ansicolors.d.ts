declare module "ansicolors" {
	var colors: {[index: string]: (s: string) => string;};
	export = colors;	
}
