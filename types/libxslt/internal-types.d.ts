import * as xmljs from 'libxmljs';
import { Stylesheet } from './index';

export type OutputFormat = 'document' | 'string';

export type ApplyResult = string | xmljs.Document;
export type ApplyCallback = (err: Error, result: ApplyResult) => void;
export type ApplyStringCallback = (err: Error, result: string) => void;
export type ApplyDocumentCallback = (err: Error, result: xmljs.Document) => void;

export type ParseCallback = (err: Error, stylesheet: Stylesheet) => void;
