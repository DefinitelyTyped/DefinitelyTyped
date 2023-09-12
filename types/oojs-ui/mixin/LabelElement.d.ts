declare namespace OO.ui.mixin {
    /**
     * LabelElement is often mixed into other classes to generate a label, which helps identify the
     * function of an interface element.
     * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Icons,_Indicators,_and_Labels#Labels)
     * for more information.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.LabelElement
     */
    interface LabelElement extends LabelElement.Props, LabelElement.Prototype {}

    namespace LabelElement {
        interface EventMap {
            labelChange: [];
        }

        interface ConfigOptions {
            /**
             * The label element created by the class. If this configuration is omitted, the label
             * element will use a generated `<span>`.
             */
            $label?: JQuery;

            /**
             * The label text. The label can be specified as a plaintext string, a jQuery selection
             * of elements, or a function that will produce a string in the future.
             * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Icons,_Indicators,_and_Labels#Labels)
             * for examples.
             */
            label?: Deferrable<string> | JQuery | HtmlSnippet;

            /**
             * Whether the label should be visually hidden (but still accessible to screen-readers).
             */
            invisibleLabel?: boolean;
        }

        interface Static {
            /**
             * The label text. The label can be specified as a plaintext string, a function that will
             * produce a string (will be resolved on construction time), or `null` for no label.
             * The static value will be overridden if a label is specified with the {@link ConfigOptions.label label}
             * config option.
             */
            label: Deferrable<string> | null;

            /**
             * Highlight the first occurrence of the query in the given text
             *
             * @param text Text
             * @param query Query to find
             * @param compare Optional string comparator, e.g. Intl.Collator().compare
             * @param combineMarks Pull combining marks into highlighted text
             * @return Text with the first match of the query sub-string wrapped in highlighted span
             */
            highlightQuery(
                text: string,
                query: string,
                compare?: (x: string, y: string) => number,
                combineMarks?: boolean,
            ): JQuery;
        }

        interface Props {
            $label: JQuery;
        }

        interface Prototype {
            /**
             * Replace the wrapper element (an empty `<span>` by default) with another one (e.g. an
             * `<a href="…">`), without touching the label's content. This is the same as using the
             * "{@link ConfigOptions.$label $label}" config on construction time.
             *
             * If an element is already set, it will be cleaned up before setting up the new element.
             *
             * @param $label Element to use as label
             */
            setLabelElement($label: JQuery): void;

            /**
             * Set the 'id' attribute of the label element.
             *
             * @param id
             * @return The element, for chaining
             */
            setLabelId(id: string): this;

            /**
             * Replace both the visible content of the label (same as {@link setLabelContent}) as
             * well as the value returned by {@link getLabel}, without touching the label's wrapper
             * element. This is the same as using the "{@link ConfigOptions.label label}" config on
             * construction time.
             *
             * An empty string will result in the label being hidden. A string containing only
             * whitespace will be converted to a single `&nbsp;`.
             *
             * To change the wrapper element, use {@link setLabelElement} or the "{@link ConfigOptions.$label $label}"
             * config.
             *
             * @param label Label nodes; text; a function that
             *  returns nodes or text; or null for no label
             * @return The element, for chaining
             */
            setLabel(label: Deferrable<string> | JQuery | HtmlSnippet | null): this;

            /**
             * Set whether the label should be visually hidden (but still accessible to screen-readers).
             *
             * @param invisibleLabel
             * @return The element, for chaining
             */
            setInvisibleLabel(invisibleLabel: boolean): this;

            /**
             * Set the label as plain text with a highlighted query
             *
             * @param text Text label to set
             * @param query Substring of text to highlight
             * @param compare Optional string comparator, e.g. Intl.Collator().compare
             * @param combineMarks Pull combining marks into highlighted text
             * @return The element, for chaining
             */
            setHighlightedQuery(
                text: string,
                query: string,
                compare?: (x: string, y: string) => number,
                combineMarks?: boolean,
            ): this;

            /**
             * Get the label's value as provided via {@link setLabel} or the "{@link ConfigOptions.label label}"
             * config.
             * Note this is not necessarily the same as the label's visible content when {@link setLabelContent}
             * was used.
             *
             * @return Label nodes; text; or null for no label
             */
            getLabel(): JQuery | string | null;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): LabelElement;
            prototype: Prototype;
            static: Static;
        }
    }

    const LabelElement: LabelElement.Constructor;
}
