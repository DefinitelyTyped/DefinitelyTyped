// Type definitions for google-translate-api 2.3
// Project: https://github.com/matheuss/google-translate-api#readme
// Definitions by: maple3142 <https://github.com/maple3142>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface TranslateOption {
	from?: string;
	to?: string;
	raw?: boolean;
}
interface TranslateResult {
	text: string;
	from: {
		language: {
			didYouMean: boolean;
			iso: string;
		}
		text: {
			autoCorrected: boolean;
			value: string;
			didYouMean: boolean;
		}
	};
	raw: string;
}
declare function translate(text: string, options?: TranslateOption): Promise<TranslateResult>;
export = translate;
