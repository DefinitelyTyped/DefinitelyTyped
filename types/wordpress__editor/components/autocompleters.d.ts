import { EditorInserterItem } from "@wordpress/block-editor";
import { WPCompleter } from "@wordpress/components/build-types/autocomplete/types";
import { User } from "@wordpress/core-data";

export const blockAutocompleter: WPCompleter<EditorInserterItem>;
export const userAutocompleter: WPCompleter<User>;
