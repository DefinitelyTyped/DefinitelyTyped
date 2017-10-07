/**
 * A collection of response builders.
 */

import { OrderUpdate } from './transactions';

/**
 * Simple Response type.
 */
export interface SimpleResponse {
    /** Speech to be spoken to user. SSML allowed. */
    speech: string;
    /** Optional text to be shown to user */
    displayText?: string;
}

/**
 * Suggestions to show with response.
 */
export interface Suggestion {
    /** Text of the suggestion. */
    title: string;
}

/**
 * Link Out Suggestion. Used in rich response as a suggestion chip which, when
 * selected, links out to external URL.
 */
export interface LinkOutSuggestion {
    /** Text shown on the suggestion chip. */
    title: string;
    /** String URL to open. */
    url: string;
}

/**
 * Image type shown on visual elements.
 */
export interface Image {
    /** Image source URL. */
    url: string;
    /** Text to replace for image for accessibility. */
    accessibilityText: string;
    /** Width of the image. */
    width: number;
    /** Height of the image. */
    height: number;
}

/**
 * Basic Card Button. Shown below basic cards. Open a URL when selected.
 */
export interface Button {
    /** Text shown on the button. */
    title: string;
    /** Action to take when selected. */
    openUrlAction: {
        /** String URL to open. */
        url: string;
    };
}

/**
 * Option item. Used in actions.intent.OPTION intent.
 */
export interface OptionItem {
    /** Option item identifier information. */
    optionInfo: OptionInfo;
    /** Name of the item. */
    title: string;
    /** Optional text describing the item. */
    description: string;
    /** Square image to show for this item. */
    image: Image;
}

/**
 * Option info. Provides unique identifier for a given OptionItem.
 */
export interface OptionInfo {
    /** Unique string ID for this option. */
    key: string;
    /** Synonyms that can be used by the user to indicate this option if they do not use the key. */
    synonyms: string[];
}

/**
 * Class for initializing and constructing Rich Responses with chainable interface.
 */
export class RichResponse {
    /**
     * Constructor for RichResponse. Accepts optional RichResponse to clone.
     *
     * @param {RichResponse} richResponse
     */
    constructor(richResponse: RichResponse);

    /**
     * Adds a SimpleResponse to list of items.
     *
     * @param {string|SimpleResponse} simpleResponse Simple response to present to
     *     user. If just a string, display text will not be set.
     * @return {RichResponse} Returns current constructed RichResponse.
     */
    addSimpleResponse(simpleResponse: string | SimpleResponse): RichResponse;

    /**
     * Adds a BasicCard to list of items.
     *
     * @param {BasicCard} basicCard Basic card to include in response.
     * @return {RichResponse} Returns current constructed RichResponse.
     */
    addBasicCard(basicCard: BasicCard): RichResponse;

    /**
     * Adds a single suggestion or list of suggestions to list of items.
     *
     * @param {string|Array<string>} suggestions Either a single string suggestion
     *     or list of suggestions to add.
     * @return {RichResponse} Returns current constructed RichResponse.
     */
    addSuggestions(suggestions: string | string[]): RichResponse;

    /**
     * Returns true if the given suggestion text is valid to be added to the suggestion list. A valid
     * text string is not longer than 25 characters.
     */
    isValidSuggestionText(suggestionText: string): boolean;

    /**
     * Sets the suggestion link for this rich response.
     *
     * @param {string} destinationName Name of the link out destination.
     * @param {string} suggestionUrl - String URL to open when suggestion is used.
     * @return {RichResponse} Returns current constructed RichResponse.
     */
    addSuggestionLink(destinationName: string, suggestionUrl: string): RichResponse;

    /**
     * Adds an order update to this response. Use after a successful transaction
     * decision to confirm the order.
     *
     * @param {OrderUpdate} orderUpdate
     * @return {RichResponse} Returns current constructed RichResponse.
     */
    addOrderUpdate(orderUpdate: OrderUpdate): RichResponse;
}

/**
 * Class for initializing and constructing Basic Cards with chainable interface.
 */
export class BasicCard {
    /**
     * Constructor for BasicCard. Accepts optional BasicCard to clone.
     *
     * @param {BasicCard} basicCard
     */
    constructor(basicCard: BasicCard);

    /**
     * Sets the title for this Basic Card.
     *
     * @param {string} title Title to show on card.
     * @return {BasicCard} Returns current constructed BasicCard.
     */
    setTitle(title: string): BasicCard;

    /**
     * Sets the subtitle for this Basic Card.
     *
     * @param {string} subtitle Subtitle to show on card.
     * @return {BasicCard} Returns current constructed BasicCard.
     */
    setSubtitle(subtitle: string): BasicCard;

    /**
     * Sets the body text for this Basic Card.
     *
     * @param {string} bodyText Body text to show on card.
     * @return {BasicCard} Returns current constructed BasicCard.
     */
    setBodyText(bodyText: string): BasicCard;

    /**
     * Sets the image for this Basic Card.
     *
     * @param {string} url Image source URL.
     * @param {string} accessibilityText Text to replace for image for
     *     accessibility.
     * @param {number=} width Width of the image.
     * @param {number=} height Height of the image.
     * @return {BasicCard} Returns current constructed BasicCard.
     */
    setImage(url: string, accessibilityText: string, width?: number, height?: number): BasicCard;

    /**
     * Adds a button below card.
     *
     * @param {string} text Text to show on button.
     * @param {string} url URL to open when button is selected.
     * @return {BasicCard} Returns current constructed BasicCard.
     */
    addButton(text: string, url: string): BasicCard;
}

/**
 * Class for initializing and constructing Lists with chainable interface.
 */
export class List {
    /**
     * Constructor for List. Accepts optional List to clone, string title, or
     * list of items to copy.
     *
     * @param {List|string|Array<OptionItem>} list Either a list to clone, a title
     *     to set for a new List, or an array of OptionItem to initialize a new
     *     list.
     */
    constructor(list: List | string | OptionItem[]);

    /**
     * Sets the title for this List.
     *
     * @param {string} title Title to show on list.
     * @return {List} Returns current constructed List.
     */
    setTitle(title: string): List;

    /**
     * Adds a single item or list of items to the list.
     *
     * @param {OptionItem|Array<OptionItem>} optionItems OptionItems to add.
     * @return {List} Returns current constructed List.
     */
    addItems(optionItems: OptionItem | OptionItem[]): List;
}

/**
 * Class for initializing and constructing Carousel with chainable interface.
 */
export class Carousel {
    /**
     * Constructor for Carousel. Accepts optional Carousel to clone or list of
     * items to copy.
     *
     * @param {Carousel|Array<OptionItem>} carousel Either a carousel to clone, a
     *     or an array of OptionItem to initialize a new carousel
     */
    constructor(carousel: Carousel | OptionItem[]);

    /**
     * Adds a single item or list of items to the carousel.
     *
     * @param {OptionItem|Array<OptionItem>} optionItems OptionItems to add.
     * @return {Carousel} Returns current constructed Carousel.
     */
    addItems(optionItems: OptionItem | OptionItem[]): Carousel;
}

/**
 * Class for initializing and constructing Option Items with chainable interface.
 */
export class OptionItem {
    /**
     * Constructor for OptionItem. Accepts optional OptionItem to clone.
     *
     * @param {OptionItem} optionItem
     */
    constructor(optionItem: OptionItem);

    /**
     * Sets the title for this Option Item.
     *
     * @param {string} title Title to show on item.
     * @return {OptionItem} Returns current constructed OptionItem.
     */
    setTitle(title: string): OptionItem;

    /**
     * Sets the description for this Option Item.
     *
     * @param {string} description Description to show on item.
     * @return {OptionItem} Returns current constructed OptionItem.
     */
    setDescription(description: string): OptionItem;

    /**
     * Sets the image for this Option Item.
     *
     * @param {string} url Image source URL.
     * @param {string} accessibilityText Text to replace for image for
     *     accessibility.
     * @param {number=} width Width of the image.
     * @param {number=} height Height of the image.
     * @return {OptionItem} Returns current constructed OptionItem.
     */
    setImage(url: string, accessibilityText: string, width?: number, height?: number): OptionItem;

    /**
     * Sets the key for the OptionInfo of this Option Item. This will be returned
     * as an argument in the resulting actions.intent.OPTION intent.
     *
     * @param {string} key Key to uniquely identify this item.
     * @return {OptionItem} Returns current constructed OptionItem.
     */
    setKey(key: string): OptionItem;

    /**
     * Adds a single synonym or list of synonyms to item.
     *
     * @param {string|Array<string>} synonyms Either a single string synonyms
     *     or list of synonyms to add.
     * @return {OptionItem} Returns current constructed OptionItem.
     */
    addSynonyms(synonyms: string | string[]): OptionItem;
}

export function isSsml(text: string): boolean;
