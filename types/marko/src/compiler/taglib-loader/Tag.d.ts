import Taglib from './Taglib';
import Attribute from './Attribute';
import Transformer from './Transformer';

declare class Tag {
  name: string;
  dir: string;
  taglibId: string | null;
  taglibPath: string | null;
  attributes: { [name: string]: Attribute };
  attributeGroups: string[];
  transformers: { [path: string]: Transformer };
  patternAttributes: Attribute[];
  renderer: any;
  template: any;
  codeGeneratorModulePath: string | null;
  nodeFactoryPath: string | null;
  nestedVariables: any;
  importedVariables: any;
  bodyFunction: any;
  nestedTags: { [name: string]: Tag } | null;
  isNestedTag: boolean;
  isRepeated: boolean | null;
  parentTagName: string | null;
  openTagOnly: any;
  body: any;
  type: any;
  targetProperty?: string;

  constructor(filePath?: string);

  addAttribute(attr: Attribute): void;

  addImportedVariable(importedVariable: any): void;

  addNestedTag(nestedTag: Tag): void;

  addNestedVariable(nestedVariable: any): void;

  addTransformer(transformer: Transformer): void;

  forEachAttribute(callback: (attr: Attribute) => void, thisObj?: any): void;

  forEachImportedVariable(callback: (importedVariable: any) => void, thisObj?: any): void;

  forEachNestedTag(callback: (nestedTag: Tag) => void, thisObj?: any): void;

  forEachTransformer(callback: (transformer: Transformer) => void, thisObj?: any): void;

  forEachVariable(callback: (nestedVariable: any) => void, thisObj?: any): void;

  getAttribute(attrName: string): Attribute | undefined;

  getNodeFactory(): any;

  hasAttribute(attrName: string): boolean;

  hasNestedTags(): boolean;

  hasTransformers(): boolean;

  setBodyFunction(name: string, params: any): void;

  setBodyProperty(propertyName: string): void;

  setTaglib(taglib: Taglib): void;
}

export = Tag;
