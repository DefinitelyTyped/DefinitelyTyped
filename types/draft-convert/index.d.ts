// Type definitions for draft-convert v2.1.5
// Project: https://github.com/HubSpot/draft-convert
// Definitions by: Agustin Valeriani <https://github.com/avaleriani/>
//                 Munif Tanjim <https://github.com/MunifTanjim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

// Based on: https://github.com/HubSpot/draft-convert/issues/107#issuecomment-488581709 by <https://github.com/sbusch>
declare module 'draft-convert' {
  import {
    ContentBlock,
    ContentState,
    DraftBlockType,
    DraftInlineStyleType,
    Entity,
    RawDraftEntity
  } from 'draft-js';
  import { ReactNode } from 'react';

  interface IConvertToHTMLConfig {
    // Inline styles:
    styleToHTML?: <T extends DraftInlineStyleType>(style: T) => Tag | void;

    // Block styles:
    blockToHTML?: (block: ContentBlock) => Tag;

    // Entity styling:
    entityToHTML?: (entity: RawDraftEntity, originalText: string) => Tag;
  }

  type EntityKey = string;

  interface IConvertFromHTMLConfig {
    // Inline styles:
    htmlToStyle?: (nodeName: string, node: HTMLElement) => DraftInlineStyleType;

    // Block styles:
    htmlToBlock?: (
      nodeName: string,
      node: HTMLElement
    ) => DraftBlockType | { type: DraftBlockType; data: object } | false;

    // Html entities
    htmlToEntity?: (
      nodeName: string,
      node: HTMLElement,
      createEntity: (type: string, mutability: string, data: object) => EntityKey,
      getEntity: (key: EntityKey) => Entity,
      mergeEntityData: (key: string, data: object) => void,
      replaceEntityData: (key: string, data: object) => void
    ) => void;

    // Text entities
    textToEntity?: (
      text: string,
      createEntity: (type: string, mutability: string, data: object) => EntityKey,
      getEntity: (key: EntityKey) => Entity,
      mergeEntityData: (key: string, data: object) => void,
      replaceEntityData: (key: string, data: object) => void
    ) => Array<{ entity: EntityKey; offset: number; length: number; result?: string }>;
  }

  type ContentStateConverter = (contentState: ContentState) => string;
  type htmlConverter = (html: string) => ContentState;

  type Tag =
    | ReactNode
    | { start: string; end: string; empty?: string }
    | { element: ReactNode; empty?: ReactNode };

  export function convertToHTML(config: IConvertToHTMLConfig): ContentStateConverter;
  export function convertFromHTML(config: IConvertFromHTMLConfig): htmlConverter;
}
