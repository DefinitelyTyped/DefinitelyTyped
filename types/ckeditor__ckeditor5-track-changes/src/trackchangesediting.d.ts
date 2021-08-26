import { Command, Plugin } from '@ckeditor/ckeditor5-core';
import { Element, Range } from '@ckeditor/ckeditor5-engine';
import Suggestion from './suggestion';
import { SuggestionData, TrackChangesAdapter } from './trackchanges';

export default class TrackChangesEditing extends Plugin {
    activeMarkers: string[];
    adapter: TrackChangesAdapter;
    addSuggestionData(data: SuggestionData): Suggestion;
    enableCommand(commandName: string, callback?: (executeCommand: Command['execute'], ...args: any[]) => any): void;
    getSuggestion(id: string): Suggestion;
    getSuggestions(options?: { skipNotAttached?: boolean; toJSON?: boolean }): Suggestion[];
    hasSuggestion(id: string): boolean;
    markBlockFormat(
        elementOrRange: Element | Range,
        formatData?: { commandName: string; commandParams: any[]; formatGroupId?: string },
        affectedElements?: Element[],
        subType?: string | null,
        attributes?: Record<string, unknown>,
    ): void;
    markDeletion(range: Range, subType?: string, attributes?: Record<string, unknown>): Suggestion | null;
    markInlineFormat(
        range: Range,
        formatData?: { commandName: string; commandParams?: any[] },
        subType?: string,
        attributes?: Record<string, unknown>,
    ): void;
    markInsertion(range: Range, subType?: string, attributes?: Record<string, unknown>): Suggestion | null;
    markMultiRangeBlockFormat(
        elements: Element[],
        formatData?: { commandName: string; commandParams: any[]; formatGroupId?: string },
        affectedElements?: boolean,
        subType?: string,
        attributes?: Record<string, unknown>,
    ): void;
    markMultiRangeDeletion(ranges: Range[], subType?: string, attributes?: Record<string, unknown>): Suggestion;
    markMultiRangeInsertion(ranges: Range[], subType?: string, attributes?: Record<string, unknown>): Suggestion;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TrackChangesEditing: TrackChangesEditing;
    }
}
