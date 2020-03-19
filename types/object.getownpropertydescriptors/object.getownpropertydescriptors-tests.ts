import getOwnPropertyDescriptors = require('object.getownpropertydescriptors');

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(value: T): T;

interface Language {
	language: string;
	description?: string;
}

interface LanguageDescriptorMap {
	language: TypedPropertyDescriptor<string>;
	description?: TypedPropertyDescriptor<string | undefined>;
}

declare let lang: Language;

// $ExpectType LanguageDescriptorMap & PropertyDescriptorMap
const langDesc = expectType<LanguageDescriptorMap & PropertyDescriptorMap>(getOwnPropertyDescriptors(lang));

langDesc.language; // $ExpectType TypedPropertyDescriptor<string>
langDesc.description; // $ExpectType TypedPropertyDescriptor<string | undefined> | undefined
langDesc.foo; // $ExpectType PropertyDescriptor

// $ExpectType <T>(o: T) => { -readonly [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & { [property: string]: PropertyDescriptor; }
let implementation = getOwnPropertyDescriptors.getPolyfill();
implementation = getOwnPropertyDescriptors.shim();
implementation = getOwnPropertyDescriptors.implementation;

import polyfillImpl = require('object.getownpropertydescriptors/implementation');
implementation = polyfillImpl;

import getPolyfill = require('object.getownpropertydescriptors/polyfill');
implementation = getPolyfill();

import shimGetOwnPropertyDescriptors = require('object.getownpropertydescriptors/shim');
implementation = shimGetOwnPropertyDescriptors();
