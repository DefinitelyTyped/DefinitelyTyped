/// <reference types="jquery"/>

declare namespace JQueryDeserialize {
    interface DeserializeOptions<TElement> {
        change?(element: Element, value: any): void;
        complete?($elements: JQuery<TElement>): void;
        // the filter param is directly passed into JQuery.filter()
        // but the type declaration intended does not work
        // https://github.com/microsoft/TypeScript/issues/29732
        // filter? : Parameters<JQuery['filter']>[0];
        filter?: unknown;
    }
}

interface JQuery<TElement = HTMLElement> {
    deserialize(
        data: string,
        options?:
            | JQueryDeserialize.DeserializeOptions<TElement>
            | JQueryDeserialize.DeserializeOptions<TElement>["complete"],
    ): this;
}
