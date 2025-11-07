import { ComponentType, ReactNode } from "react";

interface WPLinkControlDefaultValue {
	url?: string,
	title?: string,
	opensInNewTab?: boolean
}

interface WPLinkControlSettingsValue {
	[setting: string]: any
}

declare namespace LinkControl {
	interface Props {
		settings?: Setting[];
		forceIsEditingLink?: boolean;
		value?: Value;
		onChange?: (nextValue?: Value) => void;
		onRemove?: () => void;
		onCancel?: () => void;

		noDirectEntry?: boolean;
		showSuggestions?: boolean;
		showInitialSuggestions?: boolean;
		withCreateSuggestion?: boolean;
		suggestionsQuery?: any;
		noURLSuggestion?: boolean;
		hasTextControl?: boolean;
		createSuggestion?: ((title: string) => Suggestion)|undefined;
		createSuggestionButtonText?: string|((searchTerm: string|undefined) => ReactNode);
		renderControlBottom?: (() => ReactNode);
		handleEntities?: boolean
	}

	interface Setting {
		id: string,
		title: string
	}

	interface Suggestion {
		id: string;
		type: string;
		title: string;
		url: string;
	}

	interface Value extends WPLinkControlDefaultValue, WPLinkControlSettingsValue {}
}
declare const LinkControl: ComponentType<LinkControl.Props>&{DEFAULT_LINK_SETTINGS: LinkControl.Setting[]};

export default LinkControl;
