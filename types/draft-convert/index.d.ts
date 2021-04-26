// Type definitions for draft-convert v2.1.10
// Project: https://github.com/HubSpot/draft-convert
// Definitions by: Agustin Valeriani <https://github.com/avaleriani/>
//                 Munif Tanjim <https://github.com/MunifTanjim>
//                 Vadim Chistokhvalov <https://github.com/vadim-ch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

// Based on: https://github.com/HubSpot/draft-convert/issues/107#issuecomment-488581709 by <https://github.com/sbusch>

declare module "draft-convert" {
    import {
        DraftEntityMutability,
        RawDraftContentBlock,
        ContentState,
        DraftBlockType,
        DraftInlineStyleType,
        Entity,
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
        E extends RawDraftEntity = RawDraftEntity
    > {
        // Inline styles:
        styleToHTML?: (style: S) => Tag | void;

        // Block styles:
        blockToHTML?: (block: RawDraftContentBlockWithCustomType<B>) => Tag;

        // Entity styling:
        entityToHTML?: (entity: E, originalText: string) => Tag;
    }

    type EntityKey = string;

    interface IConvertFromHTMLConfig<
        S extends {
            [name: string]: unknown;
        } = DOMStringMap,
        B extends DraftBlockType = DraftBlockType,
        E extends RawDraftEntity = RawDraftEntity
    > {
        // Inline styles:
        htmlToStyle?: (nodeName: string, node: ExtendedHTMLElement<S>, currentStyle: Set<string>) => Set<string>;

        // Block styles:
        htmlToBlock?: (
            nodeName: string,
            node: ExtendedHTMLElement<S>,
        ) => B | { type: B; data: object } | false | undefined;

        // Html entities
        htmlToEntity?: (
            nodeName: string,
            node: ExtendedHTMLElement<S>,
            createEntity: (type: E["type"], mutability: DraftEntityMutability, data: E["data"]) => EntityKey,
            getEntity: (key: EntityKey) => Entity,
            mergeEntityData: (key: string, data: object) => void,
            replaceEntityData: (key: string, data: object) => void,
        ) => EntityKey | undefined;

        // Text entities
        textToEntity?: (
            text: string,
            createEntity: (type: E["type"], mutability: DraftEntityMutability, data: E["data"]) => EntityKey,
            getEntity: (key: EntityKey) => Entity,
            mergeEntityData: (key: string, data: object) => void,
            replaceEntityData: (key: string, data: object) => void,
        ) => Array<{
            entity: EntityKey;
            offset: number;
            length: number;
            result?: string;
        }>;
    }

    type ContentStateConverter = (contentState: ContentState) => string;
    type htmlConverter = (html: string) => ContentState;

    type Tag = ReactNode | { start: string; end: string; empty?: string } | { element: ReactNode; empty?: ReactNode };

    export function convertToHTML<
        S = DraftInlineStyleType,
        B extends DraftBlockType = DraftBlockType,
        E extends RawDraftEntity = RawDraftEntity
    >(config: IConvertToHTMLConfig<S, B, E>): ContentStateConverter;
    export function convertFromHTML<
        S extends {
            [name: string]: unknown;
        } = DOMStringMap,
        B extends DraftBlockType = DraftBlockType,
        E extends RawDraftEntity = RawDraftEntity
    >(config: IConvertFromHTMLConfig<S, B, E>): htmlConverter;
}
