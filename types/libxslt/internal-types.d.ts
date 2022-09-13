import * as xmljs from 'libxmljs';
import { Stylesheet } from './index';

export type ApplyCallback = (err: Error | null, result: string | xmljs.Document) => void;
export type ApplyStringCallback = (err: Error | null, result: string) => void;
export type ApplyDocumentCallback = (err: Error | null, result: xmljs.Document) => void;

export type ParseCallback = (err: Error | null, stylesheet: Stylesheet) => void;
