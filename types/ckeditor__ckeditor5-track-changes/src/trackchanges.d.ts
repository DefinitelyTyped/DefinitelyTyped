import BaseSuggestionThreadView from './ui/view/basesuggestionthreadview';
import { Plugin } from '@ckeditor/ckeditor5-core';
import Suggestion from './suggestion';
import './trackchangesediting';
import './trackchangesui';

export interface SuggestionData {
    attributes: Record<string, unknown>;
    authorId: string;
    createdAt: Date;
    data: Record<string, unknown>;
    hasComments: boolean;
    id: string;
    type: string;
}

export interface TrackChangesConfig {
    SuggestionThreadView: BaseSuggestionThreadView;
    disableComments: boolean;
}

export interface TrackChangesAdapter {
    addSuggestion(suggestionData?: {
        id: string;
        type: string;
        hasComments: boolean;
        data?: Record<string, unknown> | null | undefined;
        attributes?: Record<string, unknown> | undefined;
        originalSuggestionId?: string | null | undefined;
    }): Promise<unknown>;
    getSuggestion(id: string): Promise<SuggestionData>;
    updateSuggestion(
        id: string,
        suggestionData?: {
            hasComments?: boolean | undefined;
            state?: 'open' | 'accepted' | 'rejected' | undefined;
            attributes?: Record<string, unknown> | undefined;
        },
    ): Promise<unknown>;
}

export default class TrackChanges extends Plugin {
    adapter: TrackChangesAdapter;

    addSuggestion(suggestionData: SuggestionData): Suggestion;
    getSuggestion(id: string): Suggestion;
    getSuggestions(options?: { skipNotAttached?: boolean | undefined; toJSON?: boolean | undefined }): Suggestion[];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TrackChanges: TrackChanges;
    }
}
