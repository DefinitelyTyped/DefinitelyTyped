import Attribute from './Attribute';
import Transformer from './Transformer';
import Tag = require('./Tag');

export default class Taglib {
  id: string;
  /** @deprecated */
  path: string;
  filePath: string;
  dirname: string;
  tags: { [name: string]: Tag };
  attributes: { [key: string]: Attribute };
  attributeGroups: { [name: string]: Attribute };
  patternAttributes: Attribute[];
  textTransformers: Transformer[];
  transformers: Transformer[];
  inputFilesLookup: any;
  imports: any;
  importsLookup: any;

  constructor(filePath: string);

  addAttribute(attribute: Attribute): void;

  getAttribute(name: string): Attribute | undefined;

  addTag(tag: Tag): void;

  addTransformer(transformer: Transformer): void;

  addTextTransformer(transformer: Transformer): void;

  addImport(path: string): void;

  forEachTag(callback: (tag: Tag) => void, thisObj?: any): void;

  toJSON(): any;
}
