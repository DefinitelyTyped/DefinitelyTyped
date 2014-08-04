// Type definitions for needle 0.7.8
// Project: https://github.com/tomas/needle
// Definitions by: San Chen <https://github.com/bigsan>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface INeedle {
	head(url: string): IReadableStream;
	head(url: string, callback?: Function): IReadableStream;
	head(url: string, options?: any, callback?: Function): IReadableStream;

}

declare module "needle" {
	var needle: INeedle;
    export = needle;
}
