/// <reference path="../_ref.d.ts" />

module DT {
	'use-strict';

	var referenceTagExp = /<reference[ \t]*path=["']?([\w\.\/_-]*)["']?[ \t]*\/>/g;

	export function endsWith(str: string, suffix: string) {
		return str.indexOf(suffix, str.length - suffix.length) !== -1;
	}

	export function extractReferenceTags(source: string): string[] {
		var ret: string[] = [];
		var match: RegExpExecArray;

		if (!referenceTagExp.global) {
			throw new Error('referenceTagExp RegExp must have global flag');
		}
		referenceTagExp.lastIndex = 0;

		while ((match = referenceTagExp.exec(source))) {
			if (match.length > 0 && match[1].length > 0) {
				ret.push(match[1]);
			}
		}
		return ret;
	}
}
