/**
 * A collection of response builders.
 */

import { OrderUpdate } from './transactions';

/**
 * List of possible options to display the image in a BasicCard.
 * When the aspect ratio of an image is not the same as the surface,
 * this attribute changes how the image is displayed in the card.
 */
export enum ImageDisplays {
    /**
     * Pads the gaps between the image and image frame with a blurred copy of the
     * same image.
     */
    DEFAULT,
    /**
     * Fill the gap between the image and image container with white bars.
     */
    WHITE,
    /**
     * Image is scaled such that the image width matches the container width. This may crop the top
     * and bottom of the image if the scaled image height is greater than the container height. This
     * is similar to "Zoom Mode" on a widescreen TV when playing a 4:3 video.
     */
    CROPPED
}

/**
 * Values related to supporting media.
 */
export namespace MediaValues {
    /**
     * Type of the media within a MediaResponse.
     */
    enum Type {
        /**
         * Unspecified.
         */
        MEDIA_TYPE_UNSPECIFIED,
        /**
         * Audio stream.
         */
        AUDIO
    }

    /**
     * List of media control status' returned.
     */
    enum Status {
        /**
         * Unspecified.
         */
        UNSPECIFIED,
        /**
         * Finished.
         */
        FINISHED
    }

    /**
     * List of possible item types.
     */
    enum ImageType {
        /**
         * Icon.
         */
        ICON,
        /**
         * Large image.
         */
        LARGE
    }
}

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
 * Option info. Provides unique identifier for a given OptionItem.
 */
export interface OptionInfo {
    /** Unique string ID for this option. */
    key: string;
    /** Synonyms that can be used by the user to indicate this option if they do not use the key. */
    synonyms: string[];
}

export interface StructuredResponse {
    orderUpdate: OrderUpdate;
}

export interface ItemBasicCard {
    basicCard: BasicCard;
}

export interface ItemSimpleResponse {
    simpleResponse: SimpleResponse;
}

export interface ItemStructuredResponse {
    structuredResponse: StructuredResponse;
}

export type RichResponseItem = ItemBasicCard | ItemSimpleResponse | ItemStructuredResponse;

/**
 * Class for initializing and constructing Rich Responses with chainable interface.
 */
export class RichResponse {
    /**
     * Constructor for RichResponse. Accepts optional RichResponse to clone.
     *
     * @param richResponse Optional RichResponse to clone.
     */
    constructor(richResponse?: RichResponse);

    /**
     * Ordered list of either SimpleResponse objects or BasicCard objects.
     * First item must be SimpleResponse. There can be at most one card.
     */
    items: RichResponseItem[];

    /**
     * Ordered list of text suggestions to display. Optional.
     */
    suggestions: Suggestion[];

    /**
     * Link Out Suggestion chip for this rich response. Optional.
     */
    linkOutSuggestion?: LinkOutSuggestion;

    /**
     * Adds a SimpleResponse to list of items.
     *
     * @param simpleResponse Simple response to present to
     *     user. If just a string, display text will not be set.
     * @return Returns current constructed RichResponse.
     */
    addSimpleResponse(simpleResponse: string | SimpleResponse): RichResponse;

    /**
     * Adds a BasicCard to list of items.
     *
     * @param basicCard Basic card to include in response.
     * @return Returns current constructed RichResponse.
     */
    addBasicCard(basicCard: BasicCard): RichResponse;

    /**
     * Adds media to this response.
     *
     * @param mediaResponse MediaResponse to include in response.
     * @return Returns current constructed RichResponse.
     */
    addMediaResponse(mediaResponse: MediaResponse): RichResponse;

    /**
     * Adds a Browse Carousel to list of items.
     *
     * @param browseCarousel Browse Carousel to present to user
     * @return Returns current constructed RichResponse.
     */
    addBrowseCarousel(browseCarousel: string | BrowseCarousel): RichResponse;

    /**
     * Adds a single suggestion or list of suggestions to list of items.
     *
     * @param suggestions Either a single string suggestion
     *     or list of suggestions to add.
     * @return Returns current constructed RichResponse.
     */
    addSuggestions(suggestions: string | string[]): RichResponse;

    /**
     * Returns true if the given suggestion text is valid to be added to the suggestion list. A valid
     * text string is not longer than 25 characters.
     * @param suggestionText Text to validate as suggestion.
     * @return True if the text is valid, false otherwise.s
     */
    isValidSuggestionText(suggestionText: string): boolean;

    /**
     * Sets the suggestion link for this rich response. The destination site must be verified
     * (https://developers.google.com/actions/console/brand-verification).
     *
     * @param destinationName Name of the link out destination.
     * @param suggestionUrl - String URL to open when suggestion is used.
     * @return Returns current constructed RichResponse.
     */
    addSuggestionLink(destinationName: string, suggestionUrl: string): RichResponse;

    /**
     * Adds an order update to this response. Use after a successful transaction
     * decision to confirm the order.
     *
     * @param orderUpdate OrderUpdate object to add.
     * @return Returns current constructed RichResponse.
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
     * @param basicCard Optional BasicCard to clone.
     */
    constructor(basicCard?: BasicCard);

    /**
     * Title of the card. Optional.
     */
    title?: string;

    /**
     * Body text to show on the card. Required, unless image is present.
     */
    formattedText: string;

    /**
     * Subtitle of the card. Optional.
     */
    subtitle?: string;

    /**
     * Image to show on the card. Optional.
     */
    image?: Image;

    /**
     * Ordered list of buttons to show below card. Optional.
     */
    buttons: Button[];

    /**
     * Sets the title for this Basic Card.
     *
     * @param title Title to show on card.
     * @return Returns current constructed BasicCard.
     */
    setTitle(title: string): BasicCard;

    /**
     * Sets the subtitle for this Basic Card.
     *
     * @param subtitle Subtitle to show on card.
     * @return Returns current constructed BasicCard.
     */
    setSubtitle(subtitle: string): BasicCard;

    /**
     * Sets the body text for this Basic Card.
     *
     * @param bodyText Body text to show on card.
     * @return Returns current constructed BasicCard.
     */
    setBodyText(bodyText: string): BasicCard;

    /**
     * Sets the image for this Basic Card.
     *
     * @param url Image source URL.
     * @param accessibilityText Text to replace for image for
     *     accessibility.
     * @param width Width of the image.
     * @param height Height of the image.
     * @return Returns current constructed BasicCard.
     */
    setImage(url: string, accessibilityText: string, width?: number, height?: number): BasicCard;

    /**
     * Sets the display options for the image in this Basic Card.
     * Use one of the image display constants. If none is chosen,
     * ImageDisplays.DEFAULT will be enforced.
     *
     * @param option The option for displaying the image.
     * @return Returns current constructed BasicCard.
     */
    setImageDisplay(option: ImageDisplays): BasicCard;

    /**
     * Adds a button below card.
     *
     * @param text Text to show on button.
     * @param url URL to open when button is selected.
     * @return Returns current constructed BasicCard.
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
     * @param list Either a list to clone, a title
     *     to set for a new List, or an array of OptionItem to initialize a new
     *     list.
     */
    constructor(list?: List | string | OptionItem[]);

    /**
     * Title of the list. Optional.
     */
    title?: string;

    /**
     * List of 2-20 items to show in this list. Required.
     */
    items: OptionItem[];

    /**
     * Sets the title for this List.
     *
     * @param title Title to show on list.
     * @return Returns current constructed List.
     */
    setTitle(title: string): List;

    /**
     * Adds a single item or list of items to the list.
     *
     * @param optionItems OptionItems to add.
     * @return Returns current constructed List.
     */
    addItems(optionItems: OptionItem | OptionItem[]): List;
}

/**
 * Class for initializing and constructing BrowseCarousel with chainable interface.
 */
export class BrowseCarousel {
    /**
     * Constructor for BrowseCarousel. Accepts optional BrowseCarousel to
     * clone or list of items to copy.
     *
     * @param carousel Either a carousel to clone
     *     or an array of BrowseItem to initialize a new carousel
     */
    constructor(carousel?: BrowseCarousel | BrowseItem[]);

    /**
     * List of 2-20 items to show in this carousel. Required.
     */
    items: BrowseItem[];

     /**
      * Adds a single item or list of items to the carousel.
      *
      * @param browseItems BrowseItems to add.
      * @return Returns current constructed BrowseCarousel.
      */
    addItems(browseItems: BrowseItem | BrowseItem[]): BrowseCarousel;

    /**
     * Sets the display options for the images in this carousel.
     * Use one of the image display constants. If none is chosen,
     * ImageDisplays.DEFAULT will be enforced.
     *
     * @param option The option for displaying the image.
     * @return Returns current constructed BrowseCarousel.
     */
    setImageDisplay(option: ImageDisplays): BrowseCarousel;
}

/**
 * Class for initializing and constructing Carousel with chainable interface.
 */
export class Carousel {
    /**
     * Constructor for Carousel. Accepts optional Carousel to clone or list of
     * items to copy.
     *
     * @param carousel Either a carousel to clone
     *     or an array of OptionItem to initialize a new carousel
     */
    constructor(carousel?: Carousel | OptionItem[]);

    /**
     * List of 2-20 items to show in this carousel. Required.
     */
    items: OptionItem[];

    /**
     * Adds a single item or list of items to the carousel.
     *
     * @param optionItems OptionItems to add.
     * @return Returns current constructed Carousel.
     */
    addItems(optionItems: OptionItem | OptionItem[]): Carousel;

    /**
     * Sets the display options for the images in this carousel.
     * Use one of the image display constants. If none is chosen,
     * ImageDisplays.DEFAULT will be enforced.
     *
     * @param option The option for displaying the image.
     * @return Returns current constructed Carousel.
     */
    setImageDisplay(option: ImageDisplays): Carousel;
}

/**
 * Class for initializing and constructing Option Items with chainable interface.
 */
export class BrowseItem {
    /**
     * Constructor for BrowseItem. Accepts a title and URL for the Browse Item
     * card.
     *
     * @param title The title of the Browse Item card.
     * @param url The URL of the link opened by clicking the  Browse Item card.
     */
    constructor(title?: string, url?: string);

    /**
     * Title of the browse item. Required.
     */
    title: string;

    /**
     * Description text of the item. Optional.
     */
    description?: string;

    /**
     * Footer text of the item. Optional.
     */
    footer?: string;

    /**
     * Image to show on item. Optional.
     */
    image?: Image;

    /**
     * Url to that clicking the card opens. Optional.
     */
    openUrlAction?: object;

    /**
     * @return Returns the possible valid values for URL type hints
     */
    urlTypeHints(): object;

    /**
     * Sets the title for this Browse Item.
     *
     * @param title Title to show on item.
     * @return Returns current constructed BrowseItem.
     */
    setTitle(title: string): BrowseItem;

    /**
     * Sets the description for this Browse Item.
     *
     * @param description Description to show on item.
     * @return Returns current constructed BrowseItem.
     */
    setDescription(description: string): BrowseItem;

    /**
     * Sets the footer for this Browse Item.
     *
     * @param footerText text to show on item.
     * @return Returns current constructed BrowseItem.
     */
    setFooter(footerText: string): BrowseItem;

    /**
     * Sets the image for this Browse Item.
     *
     * @param url Image source URL.
     * @param accessibilityText Text to replace for image for accessibility.
     * @param width Width of the image.
     * @param height Height of the image.
     * @return Returns current constructed BrowseItem.
     */
    setImage(url: string, accessibilityText: string, width?: number, height?: number): BrowseItem;

    /**
     * Sets the Open URL action - which includes the url and possibly the typeHint
     *
     * @param url Image source URL.
     * @param urlTypeHint One of the typeHints enumerated by this.urlTypeHints()
     * @return Returns the current constructed BrowseItem
     */
    setOpenUrlAction(url: string, urlTypeHint?: string): BrowseItem;

    /**
     * Sets the URL target of the BrowseItem card
     *
     * @param url Image source URL.
     * @return Returns the current constructed BrowseItem
     */
    setUrl(url: string): BrowseItem;

    /**
     * Sets the URL type hint for the BrowseItem card
     *
     * @param urlTypeHint One of the typeHints enumerated by this.urlTypeHints()
     * @return Returns the current constructed BrowseItem
     */
    setUrlTypeHint(urlTypeHint: string): BrowseItem;
}

/**
 * Class for initializing and constructing Option Items with chainable interface.
 */
export class OptionItem {
    /**
     * Constructor for OptionItem. Accepts optional OptionItem to clone.
     *
     * @param optionItem Optional OptionItem to clone.
     */
    constructor(optionItem?: OptionItem);

    /**
     * Option info of the option item. Required.
     */
    optionInfo: OptionInfo;

    /**
     * Title of the option item. Required.
     */
    title: string;

    /**
     * Description text of the item. Optional.
     */
    description?: string;

    /**
     * Image to show on item. Optional.
     */
    image?: Image;

    /**
     * Sets the title for this Option Item.
     *
     * @param title Title to show on item.
     * @return Returns current constructed OptionItem.
     */
    setTitle(title: string): OptionItem;

    /**
     * Sets the description for this Option Item.
     *
     * @param description Description to show on item.
     * @return Returns current constructed OptionItem.
     */
    setDescription(description: string): OptionItem;

    /**
     * Sets the image for this Option Item.
     *
     * @param url Image source URL.
     * @param accessibilityText Text to replace for image for
     *     accessibility.
     * @param width Width of the image.
     * @param height Height of the image.
     * @return Returns current constructed OptionItem.
     */
    setImage(url: string, accessibilityText: string, width?: number, height?: number): OptionItem;

    /**
     * Sets the key for the OptionInfo of this Option Item. This will be returned
     * as an argument in the resulting actions.intent.OPTION intent.
     *
     * @param key Key to uniquely identify this item.
     * @return Returns current constructed OptionItem.
     */
    setKey(key: string): OptionItem;

    /**
     * Adds a single synonym or list of synonyms to item.
     *
     * @param synonyms Either a single string synonyms
     *     or list of synonyms to add.
     * @return Returns current constructed OptionItem.
     */
    addSynonyms(synonyms: string | string[]): OptionItem;
}

/**
 * Class for initializing and constructing MediaResponse with chainable interface.
 */
export class MediaResponse {
    /**
     * Constructor for MediaResponse.
     * @param mediaType Type of the media which defaults to MediaValues.Type.AUDIO
     */
    constructor(mediaType: MediaValues.Type);

    /**
     * Array of MediaObject held in the MediaResponse.
     */
    mediaObjects: MediaObject[];

    /**
     * Type of the media within this MediaResponse
     */
    mediaType: MediaValues.Type;

    /**
     * Adds a single media file or list of media files to the cart.
     *
     * @param items Single or Array of MediaObject to add.
     * @return Returns current constructed MediaResponse.
     */
    addMediaObjects(items: MediaObject | MediaObject[]): MediaResponse;
}

/**
 * Class for initializing and constructing MediaObject with chainable interface.
 */
export class MediaObject {
    /**
     * Constructor for MediaObject.
     *
     * @param name Name of the MediaObject.
     * @param contentUrl URL of the MediaObject.
     */
    constructor(name: string, contentUrl: string);

    /**
     * Name of the MediaObject.
     */
    name: string;

    /**
     * MediaObject URL.
     */
    contentUrl: string;

    /**
     * Description of the MediaObject.
     */
    description?: string;

    /**
     * Large image.
     */
    largeImage?: Image;

    /**
     * Icon image.
     */
    icon?: Image;

    /**
     * Set the description of the item.
     *
     * @param description Description of the item.
     * @return Returns current constructed MediaObject.
     */
    setDescription(description: string): MediaObject;

    /**
     * Sets the image for this item.
     *
     * @param url Image source URL.
     * @param type Type of image (LARGE or ICON).
     * @return Returns current constructed MediaObject.
     */
    setImage(url: string, type: MediaValues.ImageType): MediaObject;
}

/**
 * Check if given text contains SSML.
 * @param text Text to check.
 * @return True if text contains SSML, false otherwise.
 */
export function isSsml(text: string): boolean;

/**
 * Check if given text contains SSML, allowing for whitespace padding.
 * @param text Text to check.
 * @return True if text contains possibly whitespace padded SSML, false otherwise.
 */
export function isPaddedSsml(text: string): boolean;
