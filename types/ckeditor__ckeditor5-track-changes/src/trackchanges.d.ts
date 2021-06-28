import BaseSuggestionThreadView from './ui/view/basesuggestionthreadview';
import { Plugin } from '@ckeditor/ckeditor5-core';
import Suggestion from './suggestion';

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
        data?: Record<string, unknown> | null;
        attributes?: Record<string, unknown>;
        originalSuggestionId?: string | null;
    }): Promise<unknown>;
    getSuggestion(id: string): Promise<SuggestionData>;
    updateSuggestion(
        id: string,
        suggestionData?: {
            hasComments?: boolean;
            state?: 'open' | 'accepted' | 'rejected';
            attributes?: Record<string, unknown>;
        },
    ): Promise<unknown>;
}

export default class TrackChanges extends Plugin {
    adapter: TrackChangesAdapter;

    addSuggestion(suggestionData: SuggestionData): Suggestion;
    getSuggestion(id: string): Suggestion;
    getSuggestions(options?: { skipNotAttached?: boolean; toJSON?: boolean }): Suggestion[];
}
