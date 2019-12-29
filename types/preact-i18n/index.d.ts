// Type definitions for preact-i18n 1.2
// Project: https://github.com/synacor/preact-i18n
// Definitions by: Lukas Tetzlaff <https://github.com/ltetzlaff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { h, Component, VNode, ComponentChild, ComponentChildren } from "preact";

export class TextComponent extends Component<{
    id: string
    fields?: {}
    plural?: number
}> {
    render(): TextComponent;
}

export class IntlProvider extends Component<{
    scope?: any
    mark?: boolean
    definition?: {}
}> {
    render(): IntlProvider;
}
export class Text extends TextComponent {}
export class MarkupText extends TextComponent {}
export class Localizer extends Component<{ children: ComponentChildren }> {
    render(): Localizer;
}

// tslint:disable-next-line:no-unnecessary-generics
export function withText<Props, Context = any>(mapping: {}): (Child: ComponentChild) => new (props?: Props, context?: Context) => any;

export default function intl(
    Child: Component,
    options?: { scope?: any; definition?: {} }
): VNode;
