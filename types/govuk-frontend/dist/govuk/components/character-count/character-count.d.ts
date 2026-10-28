import { configOverride, ConfigurableComponent } from "../../common/configuration.js";
import { type TranslationPluralForms } from "../../i18n.js";

/**
 * Character count component
 *
 * Tracks the number of characters or words in the `.govuk-js-character-count`
 * `<textarea>` inside the element. Displays a message with the remaining number
 * of characters/words available, or the number of characters/words in excess.
 *
 * You can configure the message to only appear after a certain percentage
 * of the available characters/words has been entered.
 */
export class CharacterCount extends ConfigurableComponent<CharacterCountConfig, HTMLElement> {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * Character count default config
     *
     * @see {@link CharacterCountConfig}
     * @constant
     */
    static defaults: CharacterCountConfig;

    /**
     * Character count config schema
     *
     * @constant
     * @satisfies {Schema<CharacterCountConfig>}
     */
    static schema: Readonly<{
        properties: {
            i18n: {
                type: "object";
            };
            maxwords: {
                type: "number";
            };
            maxlength: {
                type: "number";
            };
            threshold: {
                type: "number";
            };
            countType: {
                type: "string";
            };
        };
        anyOf: ({
            required: "maxwords"[];
            errorMessage: string;
        } | {
            required: "maxlength"[];
            errorMessage: string;
        })[];
    }>;

    /**
     * @param {Element | null} $root - HTML element to use for character count
     * @param {CharacterCountConfig} [config] - Character count config
     */
    constructor($root: Element | null, config?: CharacterCountConfig);

    segmenter: Intl.Segmenter | null;

    $errorMessage: Element | null;

    /**
     * Character count config override
     *
     * @internal
     * @param {Partial<CharacterCountConfig>} datasetConfig - configuration specified by dataset
     * @returns {Partial<CharacterCountConfig>} - configuration to override by dataset
     */
    [configOverride](datasetConfig: Partial<CharacterCountConfig>): Partial<CharacterCountConfig>;
}

/**
 * Character count config
 */
export interface CharacterCountConfig {
    /**
     * - The maximum number of characters (or words
     * if `countType` is set to `"words"`).
     */
    maxlength?: number | undefined;

    /**
     * @deprecated - Use `maxlength` and
     * `countType: "words"` instead.
     */
    maxwords?: number | undefined;

    /**
     * - The percentage value of the limit at
     * which point the count message is displayed. If this attribute is set, the
     * count message will be hidden by default.
     */
    threshold?: number | undefined;

    /**
     * - The count type
     * (`"characters"`, `"length"` or `"words"`) used to count the text.
     */
    countType?: "length" | "characters" | "words" | undefined;

    /**
     * - Character count translations
     */
    i18n?: CharacterCountTranslations | undefined;
}

/**
 * Messages shown to users as they type. It provides feedback on how many words
 * or characters they have remaining or if they are over the limit. This also
 * includes a message used as an accessible description for the textarea.
 */
export interface CharacterCountTranslations {
    /**
     * - Message displayed
     * when the number of characters is under the configured maximum, `maxlength`.
     * This message is displayed visually and through assistive technologies. The
     * component will replace the `%{count}` placeholder with the number of
     * remaining characters. This is a [pluralised list of
     * messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).
     */
    charactersUnderLimit?: TranslationPluralForms | undefined;

    /**
     * - Message displayed when the number of
     * characters reaches the configured maximum, `maxlength`. This message is
     * displayed visually and through assistive technologies.
     */
    charactersAtLimit?: string | undefined;

    /**
     * - Message displayed
     * when the number of characters is over the configured maximum, `maxlength`.
     * This message is displayed visually and through assistive technologies. The
     * component will replace the `%{count}` placeholder with the number of
     * remaining characters. This is a [pluralised list of
     * messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).
     */
    charactersOverLimit?: TranslationPluralForms | undefined;

    /**
     * - Message displayed when
     * the number of words is under the configured maximum, `maxlength`. This
     * message is displayed visually and through assistive technologies. The
     * component will replace the `%{count}` placeholder with the number of
     * remaining words. This is a [pluralised list of
     * messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).
     */
    wordsUnderLimit?: TranslationPluralForms | undefined;

    /**
     * - Message displayed when the number of
     * words reaches the configured maximum, `maxlength`. This message is
     * displayed visually and through assistive technologies.
     */
    wordsAtLimit?: string | undefined;

    /**
     * - Message displayed when
     * the number of words is over the configured maximum, `maxlength`. This
     * message is displayed visually and through assistive technologies. The
     * component will replace the `%{count}` placeholder with the number of
     * remaining words. This is a [pluralised list of
     * messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).
     */
    wordsOverLimit?: TranslationPluralForms | undefined;

    /**
     * - Message made
     * available to assistive technologies, if none is already present in the
     * HTML, to describe that the component accepts only a limited amount of
     * content. It is visible on the page if `countType` is not supported or
     * JavaScript is unavailable. The component will replace the `%{count}`
     * placeholder with the value of the `maxlength` parameter.
     */
    textareaDescription?: TranslationPluralForms | undefined;
}
