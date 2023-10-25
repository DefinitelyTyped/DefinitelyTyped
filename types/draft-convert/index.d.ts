// Based on: https://github.com/HubSpot/draft-convert/issues/107#issuecomment-488581709 by <https://github.com/sbusch>

declare module "draft-convert" {
    import {
        ContentState,
        DraftBlockType,
        DraftEntityMutability,
        DraftInlineStyleType,
        Entity,
        RawDraftContentBlock,
        RawDraftEntity,
    } from "draft-js";
    import { ReactNode } from "react";

    type RawDraftContentBlockWithCustomType<T> = Omit<RawDraftContentBlock, "type"> & {
        type: T;
    };

    type ExtendedHTMLElement<T> = (HTMLElement | HTMLLinkElement) & T;

    interface IConvertToHTMLConfig<
        S = DraftInlineStyleType,
        B extends DraftBlockType = DraftBlockType,
        E extends RawDraftEntity = RawDraftEntity,
    > {
        // Inline styles:
        styleToHTML?: ((style: S) => Tag | void) | undefined;

        // Block styles:
        blockToHTML?: ((block: RawDraftContentBlockWithCustomType<B>) => Tag) | undefined;

        // Entity styling:
        entityToHTML?: ((entity: E, originalText: string) => Tag) | undefined;
    }

    type EntityKey = string;

    interface IConvertFromHTMLConfig<
        S extends {
            [name: string]: unknown;
        } = DOMStringMap,
        B extends DraftBlockType = DraftBlockType,
        E extends RawDraftEntity = RawDraftEntity,
    > {
        // Inline styles:
        htmlToStyle?:
            | ((nodeName: string, node: ExtendedHTMLElement<S>, currentStyle: Set<string>) => Set<string>)
            | undefined;

        // Block styles:
        htmlToBlock?:
            | ((
                nodeName: string,
                node: ExtendedHTMLElement<S>,
            ) => B | { type: B; data: object } | false | undefined)
            | undefined;

        // Html entities
        htmlToEntity?:
            | ((
                nodeName: string,
                node: ExtendedHTMLElement<S>,
                createEntity: (type: E["type"], mutability: DraftEntityMutability, data: E["data"]) => EntityKey,
                getEntity: (key: EntityKey) => Entity,
                mergeEntityData: (key: string, data: object) => void,
                replaceEntityData: (key: string, data: object) => void,
            ) => EntityKey | undefined)
            | undefined;

        // Text entities
        textToEntity?:
            | ((
                text: string,
                createEntity: (type: E["type"], mutability: DraftEntityMutability, data: E["data"]) => EntityKey,
                getEntity: (key: EntityKey) => Entity,
                mergeEntityData: (key: string, data: object) => void,
                replaceEntityData: (key: string, data: object) => void,
            ) => Array<{
                entity: EntityKey;
                offset: number;
                length: number;
                result?: string | undefined;
            }>)
            | undefined;
    }

    type ContentStateConverter = (contentState: ContentState) => string;
    type HTMLConverter = (html: string) => ContentState;

    type Tag = ReactNode | { start: string; end: string; empty?: string | undefined } | {
        element: ReactNode;
        empty?: ReactNode | undefined;
    };

    export function convertToHTML<
        S = DraftInlineStyleType,
        B extends DraftBlockType = DraftBlockType,
        E extends RawDraftEntity = RawDraftEntity,
    >(config: IConvertToHTMLConfig<S, B, E>): ContentStateConverter;
    export function convertToHTML(contentState: ContentState): string;
    export function convertFromHTML<
        S extends {
            [name: string]: unknown;
        } = DOMStringMap,
        B extends DraftBlockType = DraftBlockType,
        E extends RawDraftEntity = RawDraftEntity,
    >(config: IConvertFromHTMLConfig<S, B, E>): HTMLConverter;
    export function convertFromHTML(html: string): ContentState;
}
