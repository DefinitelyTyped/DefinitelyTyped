import _Taglib from './Taglib';
import Tag = require('./Tag');

export class Taglib extends _Taglib {}

export function createTaglib(filePath: string): Taglib;

export function loadTaglibFromProps(taglib: Taglib, taglibProps: any): Taglib;

export function loadTaglibFromFile(filePath: string): Taglib;

export function loadTag(tagProps: any, filePath: string): Tag;

export function clearCache(): void;
