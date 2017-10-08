/* tslint:disable:no-unnecessary-qualifier */
declare namespace Atom {
	namespace Services {
		/** Type definitions for autocomplete+ 2 */
		namespace Autocomplete {
			/** Objects that appear as parameters to callbacks. */
			namespace Events {
				/** The parameters passed into getSuggestions by Autocomplete+. */
				interface SuggestionsRequested {
					/** The current TextEditor. */
					editor: Atom.TextEditor;

					/** The position of the cursor. */
					bufferPosition: Atom.Point;

					/** The scope descriptor for the current cursor position. */
					scopeDescriptor: Atom.ScopeDescriptor;

					/** The prefix for the word immediately preceding the current cursor position. */
					prefix: string;

					/** Whether the autocomplete request was initiated by the user. */
					activatedManually: boolean;
				}

				/** The parameters passed into onDidInsertSuggestion by Autocomplete+. */
				interface SuggestionInserted {
					editor: Atom.TextEditor;
					triggerPosition: Atom.Point;
					suggestion: TextSuggestion|SnippetSuggestion;
				}
			}

			/** An autocompletion suggestion for the user.
			 *  Primary data type for the Atom Autocomplete+ service.
			 */
			interface Suggestion {
				/** A string that will show in the UI for this suggestion.
				 *  When not set, snippet || text is displayed.
				 */
				displayText?: string;

				/** The text immediately preceding the cursor, which will be replaced by the text.
				 *  If not provided, the prefix passed into getSuggestions will be used.
				 */
				replacementPrefix?: string;

				/** The suggestion type. It will be converted into an icon shown against the suggestion. */
				type?: string;

				/** This is shown before the suggestion. Useful for return values. */
				leftLabel?: string;

				/** Use this instead of leftLabel if you want to use html for the left label. */
				leftLabelHTML?: string;

				/** An indicator (e.g. function, variable) denoting the "kind" of suggestion this represents. */
				rightLabel?: string;

				/** Use this instead of rightLabel if you want to use html for the right label. */
				rightLabelHTML?: string;

				/** Class name for the suggestion in the suggestion list. Allows you to style your suggestion
				 *  via CSS, if desired.
				 */
				className?: string;

				/** If you want complete control over the icon shown against the suggestion. e.g. iconHTML:
				 *  <i class="icon-move-right"></i>
				 */
				iconHTML?: string;

				/** A doc-string summary or short description of the suggestion. When specified, it will be
				 *  displayed at the bottom of the suggestions list.
				 */
				description?: string;

				/** A url to the documentation or more information about this suggestion. When specified,
				 *  a More.. link will be displayed in the description area.
				 */
				descriptionMoreURL?: string;
			}

			interface TextSuggestion extends Suggestion {
				/** The text which will be inserted into the editor, in place of the prefix. */
				text: string;
			}

			interface SnippetSuggestion extends Suggestion {
				/** A snippet string. This will allow users to tab through function arguments or other
				 *  options.
				 */
				snippet: string;
			}

			type Suggestions = Array<TextSuggestion|SnippetSuggestion>;

			interface Provider {
				/** Defines the scope selector(s) (can be comma-separated) for which your provider
				 *  should receive suggestion requests.
				 */
				selector: string;

				/** Is called when a suggestion request has been dispatched by autocomplete+ to your
				 *  provider. Return an array of suggestions (if any) in the order you would like them
				 *  displayed to the user. Returning a Promise of an array of suggestions is also
				 *  supported.
				 */
				getSuggestions(params: Events.SuggestionsRequested): Suggestions|Promise<Suggestions>;

				/** Defines the scope selector(s) (can be comma-separated) for which your provider
				 *  should not be used.
				 */
				disableForSelector?: string;

				/** A number to indicate its priority to be included in a suggestions request.
				 *  The default provider has an inclusion priority of 0. Higher priority providers
				 *  can suppress lower priority providers with excludeLowerPriority.
				 */
				inclusionPriority?: number;

				/** Will not use lower priority providers when this provider is used. */
				excludeLowerPriority?: boolean;

				/** A number to determine the sort order of suggestions. The default provider has
				 *  an suggestion priority of 1.
				 */
				suggestionPriority?: number;

				/** Function that is called when a suggestion from your provider was inserted
				 *  into the buffer.
				 */
				onDidInsertSuggestion?(params: Events.SuggestionInserted): void;

				/** Will be called if your provider is being destroyed by autocomplete+ */
				dispose?(): void;
			}
		}

		/** Type definitions for status-bar 1.8 */
		namespace StatusBar {
			/** Objects that appear as parameters to functions. */
			namespace Options {
				interface AddTile {
					/** A DOM element, a jQuery object, or a model object for which a view provider
					 *  has been registered in the the view registry.
					 */
					item: object;

					/** Determines the placement of the tile within the status bar. Lower priority
					 *  will result in closer placement to the anchor.
					 */
					priority: number;
				}
			}

			interface Tile {
				/** Retrieve the priority that was assigned to the Tile when it was created. */
				getPriority(): number;

				/** Retrieve the Tile's item. */
				getItem(): object;

				/** Remove the Tile from the status bar. */
				destroy(): void;
			}

			interface StatusBar {
				/** Add a tile to the left side of the status bar. Lower priority tiles are placed
				 *  further to the left.
				 */
				addLeftTile(options: Options.AddTile): Tile;

				/** Add a tile to the right side of the status bar. Lower priority tiles are placed
				 *  further to the right.
				 */
				addRightTile(options: Options.AddTile): Tile;

				/** Retrieve all of the tiles on the left side of the status bar. */
				getLeftTiles(): Tile[];

				/** Retrieve all of the tiles on the right side of the status bar. */
				getRightTiles(): Tile[];
			}

			type Consumer = (statusBar: StatusBar) => void;
		}
	}
}
/* tslint:enable:no-unnecessary-qualifier */
