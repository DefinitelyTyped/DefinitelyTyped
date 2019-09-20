import Taglib from '../taglib-loader/Taglib';
import Tag = require('../taglib-loader/Tag');
import Attribute from '../taglib-loader/Attribute';
import Transformer from '../taglib-loader/Transformer';

export interface Element {
  tagName: string;
}

export default class TaglibLookup {
  merged: {
    attributeGroups: any;
  };
  taglibsById: { [id: string]: Taglib };

  constructor();

  hasTaglib(taglib: Taglib): boolean;

  addTaglib(taglib: Taglib): void;

  getTagsSorted(): Tag[];

  forEachTag(callback: (tag: Tag) => void | boolean): void;

  forEachAttribute(tagName: string, callback: (attrDef: Attribute, tag: Tag) => void): void;

  getTag(element: string | Element): Tag | undefined;

  getAttribute(element: string | Element, attr: string | { name: string }): Attribute | undefined;

  forEachTemplateTransformer(callback: (trans: Transformer) => any, thisObj?: any): void;

  forEachNodeTransformer(node: any, callback: (trans: Transformer) => any, thisObj?: any): void;

  forEachTagTransformer(element: string | Element, callback: (trans: Transformer) => any, thisObj?: any): void;

  forEachTextTransformer(callback: (trans: Transformer) => any, thisObj?: any): void;

  getInputFiles(): string[];
}
