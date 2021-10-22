import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import { Locale } from '@ckeditor/ckeditor5-utils';
import Suggestion from './suggestion';

export default class SuggestionDescriptionFactory {
    constructor(schema: Schema, locale: Locale);
    getDescriptions(suggestions: Suggestion[]): Description[];
    getItemLabel(name: string, quantity: number): string;
    registerDescriptionCallback(callback: (suggestion: Suggestion) => Description): void;
    registerElementLabel(elementName: string, label: (quantity: number) => string): void;
}

export interface Description {
    content: string;
    type: 'insertion' | 'deletion' | 'replace' | 'format';
}
