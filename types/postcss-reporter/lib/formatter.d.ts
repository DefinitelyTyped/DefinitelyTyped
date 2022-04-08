import { ResultMessage } from 'postcss';
import { DefaultOptions } from '../index';

declare function formatter(options?: DefaultOptions): (input?: { messages: ResultMessage[]; source: string }) => string;
export = formatter;
