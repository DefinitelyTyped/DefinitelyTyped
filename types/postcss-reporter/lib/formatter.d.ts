import { Message } from 'postcss';
import { DefaultOptions } from '../index';

declare function formatter(options?: DefaultOptions): (input: { messages: Message[]; source: string }) => string;
export = formatter;
