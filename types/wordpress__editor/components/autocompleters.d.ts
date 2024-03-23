import { EditorInserterItem } from "@wordpress/block-editor";
import { User } from "@wordpress/core-data";
import { WPCompleter } from "@wordpress/components/build-types/autocomplete/types";

export const blockAutocompleter: WPCompleter<EditorInserterItem>;
export const userAutocompleter: WPCompleter<User>;
