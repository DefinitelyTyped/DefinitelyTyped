import { EditorInserterItem } from "@wordpress/block-editor";
import { Autocomplete } from "@wordpress/components";
import { User } from "@wordpress/core-data";

export const blockAutocompleter: Autocomplete.Completer<EditorInserterItem>;
export const userAutocompleter: Autocomplete.Completer<User>;
