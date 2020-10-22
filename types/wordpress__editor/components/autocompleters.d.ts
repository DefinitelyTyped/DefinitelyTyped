import { Schema } from '@wordpress/api-fetch';
import { EditorInserterItem } from '@wordpress/block-editor';
import { Autocomplete } from '@wordpress/components';

export const blockAutocompleter: Autocomplete.Completer<EditorInserterItem>;
export const userAutocompleter: Autocomplete.Completer<Schema.User>;
