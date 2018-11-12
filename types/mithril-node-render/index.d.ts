// Type definitions for mithril-node-render 2.3
// Project: https://github.com/StephanHoyer/mithril-node-render
// Definitions by: Muthu Kumar <https://github.com/MKRhere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Vnode } from 'mithril';
import * as mithril from 'mithril';

interface IEscapeHtml {
	(S: string, replaceDoubleQuote?: boolean): string;
}

interface IOptions {
	escapeAttributeValue ?: IEscapeHtml,
	escapeString ?: IEscapeHtml,
	strict ?: boolean
}

declare function render(view: Vnode) : Promise<string>;
declare function render (view: Vnode, options?: IOptions) : Promise<string>;
declare function render <Attr>(view: Vnode, attr?: Attr, options?: IOptions) : Promise<string>;

declare function escapeHtml (S: string, replaceDoubleQuote?: boolean): string;

export default render;
export { escapeHtml };
