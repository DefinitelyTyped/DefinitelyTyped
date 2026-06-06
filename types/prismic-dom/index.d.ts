interface Elements {
    heading1: "heading1";
    heading2: "heading2";
    heading3: "heading3";
    heading4: "heading4";
    heading5: "heading5";
    heading6: "heading6";
    paragraph: "paragraph";
    preformatted: "preformatted";
    strong: "strong";
    em: "em";
    listItem: "list-item";
    oListItem: "o-list-item";
    list: "group-list-item";
    oList: "group-o-list-item";
    image: "image";
    embed: "embed";
    hyperlink: "hyperlink";
    label: "label";
    span: "span";
}

type ElementType = Elements[keyof Elements];

type HTMLSerializer<T> = (
    type: ElementType,
    element: any,
    text: string | null,
    children: T[],
    index: number,
) => T;

interface RichText {
    asHtml(
        richText: any,
        linkResolver?: (doc: any) => string,
        serializer?: HTMLSerializer<string>,
    ): string;
    asText(richText: any, joinString?: string): string;
    Elements: Elements;
}

interface Link {
    url(link: any, linkResolver?: (doc: any) => string): string;
}

export const RichText: RichText;
export const Link: Link;
export const HTMLSerializer: HTMLSerializer<string>;

declare const _default: {
    RichText: RichText;
    Link: Link;
};

export default _default;
