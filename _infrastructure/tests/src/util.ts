/// <reference path="../_ref.d.ts" />

module DT {
	'use strict';

	var fs = require('fs');
	var Lazy: LazyJS.LazyStatic = require('lazy.js');
	var Promise: typeof Promise = require('bluebird');

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

	export function fileExists(target: string): Promise<boolean> {
		return new Promise((resolve, reject) => {
			fs.exists(target, (bool: boolean) => {
				resolve(bool);
			});
		});
	}

	export function readFile(target: string): Promise<string> {
		return new Promise((resolve, reject) => {
			fs.readFile(target, 'utf-8', (err, contents: string) => {
				if (err) {
					reject(err);
				} else {
					resolve(contents);
				}
			});
		});
	}
}
