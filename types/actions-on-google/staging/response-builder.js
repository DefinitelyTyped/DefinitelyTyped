/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A collection of response builders.
 */

'use strict';

const Debug = require('debug');
const debug = Debug('actions-on-google:debug');
const warn = Debug('actions-on-google:warn');
const error = Debug('actions-on-google:error');

const LIST_ITEM_LIMIT = 30;
const CAROUSEL_ITEM_LIMIT = 10;

/**
 * Simple Response type.
 * @typedef {Object} SimpleResponse
 * @property {string} speech - Speech to be spoken to user. SSML allowed.
 * @property {string} displayText - Optional text to be shown to user
 */

/**
 * Suggestions to show with response.
 * @typedef {Object} Suggestion
 * @property {string} title - Text of the suggestion.
 */

/**
 * Link Out Suggestion. Used in rich response as a suggestion chip which, when
 * selected, links out to external URL.
 * @typedef {Object} LinkOutSuggestion
 * @property {string} title - Text shown on the suggestion chip.
 * @property {string} url - String URL to open.
 */

/**
 * Image type shown on visual elements.
 * @typedef {Object} Image
 * @property {string} url - Image source URL.
 * @property {string} accessibilityText - Text to replace for image for
 *     accessibility.
 * @property {number} width - Width of the image.
 * @property {number} height - Height of the image.
 */

/**
 * Basic Card Button. Shown below basic cards. Open a URL when selected.
 * @typedef {Object} Button
 * @property {string} title - Text shown on the button.
 * @property {Object} openUrlAction - Action to take when selected.
 * @property {string} openUrlAction.url - String URL to open.
 */

/**
 * Option item. Used in actions.intent.OPTION intent.
 * @typedef {Object} OptionItem
 * @property {OptionInfo} optionInfo - Option item identifier information.
 * @property {string} title - Name of the item.
 * @property {string} description - Optional text describing the item.
 * @property {Image} image - Square image to show for this item.
 */

/**
 * Option info. Provides unique identifier for a given OptionItem.
 * @typedef {Object} OptionInfo
 * @property {string} key - Unique string ID for this option.
 * @property {Array<string>} synonyms - Synonyms that can be used by the user
 *     to indicate this option if they do not use the key.
 */

/**
 * Class for initializing and constructing Rich Responses with chainable interface.
 */
const RichResponse = class {
  /**
   * Constructor for RichResponse. Accepts optional RichResponse to clone.
   *
   * @param {RichResponse=} richResponse Optional RichResponse to clone.
   */
  constructor (richResponse) {
    /**
     * Ordered list of either SimpleResponse objects or BasicCard objects.
     * First item must be SimpleResponse. There can be at most one card.
     * @type {Array<SimpleResponse|BasicCard>}
     */
    this.items = [];

    /**
     * Ordered list of text suggestions to display. Optional.
     * @type {Array<Suggestion>}
     */
    this.suggestions = [];

    /**
     * Link Out Suggestion chip for this rich response. Optional.
     * @type {LinkOutSuggestion}
     */
    this.linkOutSuggestion = undefined;

    if (richResponse) {
      if (richResponse.items) {
        this.items = richResponse.items;
        for (let item of this.items) {
          if (item.basicCard) {
            item.basicCard = new BasicCard(item.basicCard);
          }
        }
      }
      if (richResponse.suggestions) {
        this.suggestions = richResponse.suggestions;
      }
      if (richResponse.linkOutSuggestion) {
        this.linkOutSuggestion = richResponse.linkOutSuggestion;
      }
    }
  }

  /**
   * Adds a SimpleResponse to list of items.
   *
   * @param {string|SimpleResponse} simpleResponse Simple response to present to
   *     user. If just a string, display text will not be set.
   * @return {RichResponse} Returns current constructed RichResponse.
   */
  addSimpleResponse (simpleResponse) {
    if (!simpleResponse) {
      error('Invalid simpleResponse');
      return this;
    }
    // Validate if RichResponse already contains two SimpleResponse objects
    let simpleResponseCount = 0;
    for (let item of this.items) {
      if (item.simpleResponse) {
        simpleResponseCount++;
      }
      if (simpleResponseCount >= 2) {
        error('Cannot include >2 SimpleResponses in RichResponse');
        return this;
      }
    }
    const simpleResponseObj = {
      simpleResponse: this.buildSimpleResponseHelper_(simpleResponse)
    };
    // Check first if needs to replace BasicCard at beginning of items list
    if (this.items.length > 0 && (this.items[0].basicCard ||
      this.items[0].structuredResponse)) {
      this.items.unshift(simpleResponseObj);
    } else {
      this.items.push(simpleResponseObj);
    }
    return this;
  }

  /**
   * Adds a BasicCard to list of items.
   *
   * @param {BasicCard} basicCard Basic card to include in response.
   * @return {RichResponse} Returns current constructed RichResponse.
   */
  addBasicCard (basicCard) {
    if (!basicCard) {
      error('Invalid basicCard');
      return this;
    }
    // Validate if basic card is already present
    for (let item of this.items) {
      if (item.basicCard) {
        error('Cannot include >1 BasicCard in RichResponse');
        return this;
      }
    }
    this.items.push({
      basicCard: basicCard
    });
    return this;
  }

  /**
   * Adds a single suggestion or list of suggestions to list of items.
   *
   * @param {string|Array<string>} suggestions Either a single string suggestion
   *     or list of suggestions to add.
   * @return {RichResponse} Returns current constructed RichResponse.
   */
  addSuggestions (suggestions) {
    if (!suggestions) {
      error('Invalid suggestions');
      return this;
    }
    if (Array.isArray(suggestions)) {
      for (let suggestion of suggestions) {
        if (this.isValidSuggestionText(suggestion)) {
          this.suggestions.push({title: suggestion});
        } else {
          warn('Suggestion text can\'t be longer than 25 characters: ' + suggestion +
            '. This suggestion won\'t be added to the list.');
        }
      }
    } else {
      if (this.isValidSuggestionText(suggestions)) {
        this.suggestions.push({title: suggestions});
      } else {
        warn('Suggestion text can\'t be longer than 25 characters: ' + suggestions +
            '. This suggestion won\'t be added to the list.');
      }
    }
    return this;
  }

  /**
   * Returns true if the given suggestion text is valid to be added to the suggestion list. A valid
   * text string is not longer than 25 characters.
   *
   * @param {string} suggestionText Text to validate as suggestion.
   * @return {boolean} True if the text is valid, false otherwise.s
   */
  isValidSuggestionText (suggestionText) {
    return suggestionText && suggestionText.length && suggestionText.length <= 25;
  }

  /**
   * Sets the suggestion link for this rich response.
   *
   * @param {string} destinationName Name of the link out destination.
   * @param {string} suggestionUrl - String URL to open when suggestion is used.
   * @return {RichResponse} Returns current constructed RichResponse.
   */
  addSuggestionLink (destinationName, suggestionUrl) {
    if (!destinationName) {
      error('destinationName cannot be empty');
      return this;
    }
    if (!suggestionUrl) {
      error('suggestionUrl cannot be empty');
      return this;
    }
    this.linkOutSuggestion = {
      destinationName: destinationName,
      url: suggestionUrl
    };
    return this;
  }

  /**
   * Adds an order update to this response. Use after a successful transaction
   * decision to confirm the order.
   *
   * @param {OrderUpdate} orderUpdate OrderUpdate object to add.
   * @return {RichResponse} Returns current constructed RichResponse.
   */
  addOrderUpdate (orderUpdate) {
    if (!orderUpdate) {
      error('Invalid orderUpdate');
      return this;
    }
    // Validate if RichResponse already contains StructuredResponse object
    for (let item of this.items) {
      if (item.structuredResponse) {
        debug('Cannot include >1 StructuredResponses in RichResponse');
        return this;
      }
    }
    this.items.push({
      structuredResponse: {
        orderUpdate: orderUpdate
      }
    });
    return this;
  }

  /**
   * Helper to build SimpleResponse from speech and display text.
   *
   * @param {string|SimpleResponse} response String to speak, or SimpleResponse.
   *     SSML allowed.
   * @param {string} response.speech If using SimpleResponse, speech to be spoken
   *     to user.
   * @param {string=} response.displayText If using SimpleResponse, text to be shown
   *     to user.
   * @return {Object} Appropriate SimpleResponse object.
   * @private
   */
  buildSimpleResponseHelper_ (response) {
    if (!response) {
      error('Invalid response');
      return null;
    }
    debug('buildSimpleResponseHelper_: response=%s', JSON.stringify(response));
    let simpleResponseObj = {};
    if (typeof response === 'string') {
      simpleResponseObj = isSsml(response)
        ? { ssml: response } : { textToSpeech: response };
    } else if (response.speech) {
      simpleResponseObj = isSsml(response.speech)
        ? { ssml: response.speech } : { textToSpeech: response.speech };
      simpleResponseObj.displayText = response.displayText;
    } else {
      error('SimpleResponse requires a speech parameter.');
      return null;
    }
    return simpleResponseObj;
  }
};

/**
 * Class for initializing and constructing Basic Cards with chainable interface.
 */
const BasicCard = class {
  /**
   * Constructor for BasicCard. Accepts optional BasicCard to clone.
   *
   * @param {BasicCard=} basicCard Optional BasicCard to clone.
   */
  constructor (basicCard) {
    /**
     * Title of the card. Optional.
     * @type {string}
     */
    this.title = undefined;

    /**
     * Body text to show on the card. Required, unless image is present.
     * @type {string}
     */
    this.formattedText = '';

    /**
     * Subtitle of the card. Optional.
     * @type {string}
     */
    this.subtitle = undefined;

    /**
     * Image to show on the card. Optional.
     * @type {Image}
     */
    this.image = undefined;

    /**
     * Ordered list of buttons to show below card. Optional.
     * @type {Array<Button>}
     */
    this.buttons = [];

    if (basicCard) {
      if (basicCard.formattedText) {
        this.formattedText = basicCard.formattedText;
      }
      if (basicCard.buttons) {
        this.buttons = basicCard.buttons;
      }
      if (basicCard.title) {
        this.title = basicCard.title;
      }
      if (basicCard.subtitle) {
        this.subtitle = basicCard.subtitle;
      }
      if (basicCard.image) {
        this.image = basicCard.image;
      }
    }
  }

  /**
   * Sets the title for this Basic Card.
   *
   * @param {string} title Title to show on card.
   * @return {BasicCard} Returns current constructed BasicCard.
   */
  setTitle (title) {
    if (!title) {
      error('title cannot be empty');
      return this;
    }
    this.title = title;
    return this;
  }

  /**
   * Sets the subtitle for this Basic Card.
   *
   * @param {string} subtitle Subtitle to show on card.
   * @return {BasicCard} Returns current constructed BasicCard.
   */
  setSubtitle (subtitle) {
    if (!subtitle) {
      error('subtitle cannot be empty');
      return this;
    }
    this.subtitle = subtitle;
    return this;
  }

  /**
   * Sets the body text for this Basic Card.
   *
   * @param {string} bodyText Body text to show on card.
   * @return {BasicCard} Returns current constructed BasicCard.
   */
  setBodyText (bodyText) {
    if (!bodyText) {
      error('bodyText cannot be empty');
      return this;
    }
    this.formattedText = bodyText;
    return this;
  }

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
  setImage (url, accessibilityText, width, height) {
    if (!url) {
      error('url cannot be empty');
      return this;
    }
    if (!accessibilityText) {
      error('accessibilityText cannot be empty');
      return this;
    }
    this.image = { url: url, accessibilityText: accessibilityText };
    if (width) {
      this.image.width = width;
    }
    if (height) {
      this.image.height = height;
    }
    return this;
  }

  /**
   * Adds a button below card.
   *
   * @param {string} text Text to show on button.
   * @param {string} url URL to open when button is selected.
   * @return {BasicCard} Returns current constructed BasicCard.
   */
  addButton (text, url) {
    if (!text) {
      error('text cannot be empty');
      return this;
    }
    if (!url) {
      error('url cannot be empty');
      return this;
    }
    this.buttons.push({
      title: text,
      openUrlAction: {
        url: url
      }
    });
    return this;
  }
};

/**
 * Class for initializing and constructing Lists with chainable interface.
 */
const List = class {
  /**
   * Constructor for List. Accepts optional List to clone, string title, or
   * list of items to copy.
   *
   * @param {(List|string|Array<OptionItem>)=} list Either a list to clone, a title
   *     to set for a new List, or an array of OptionItem to initialize a new
   *     list.
   */
  constructor (list) {
    /**
     * Title of the list. Optional.
     * @type {string}
     */
    this.title = undefined;

    /**
     * List of 2-20 items to show in this list. Required.
     * @type {Array<OptionItems>}
     */
    this.items = [];

    if (list) {
      if (typeof list === 'string') {
        this.title = list;
      } else if (Array.isArray(list)) {
        for (let item of list) {
          this.items.push(new OptionItem(item));
        }
      } else if (typeof list === 'object') {
        if (list.title) {
          this.title = list.title;
        }
        if (list.items) {
          for (let item of list.items) {
            this.items.push(new OptionItem(item));
          }
        }
      }
    }
  }

  /**
   * Sets the title for this List.
   *
   * @param {string} title Title to show on list.
   * @return {List} Returns current constructed List.
   */
  setTitle (title) {
    if (!title) {
      error('title cannot be empty');
      return this;
    }
    this.title = title;
    return this;
  }

  /**
   * Adds a single item or list of items to the list.
   *
   * @param {OptionItem|Array<OptionItem>} optionItems OptionItems to add.
   * @return {List} Returns current constructed List.
   */
  addItems (optionItems) {
    if (!optionItems) {
      error('optionItems cannot be null');
      return this;
    }
    if (Array.isArray(optionItems)) {
      for (let item of optionItems) {
        this.items.push(item);
      }
    } else {
      this.items.push(optionItems);
    }
    if (this.items.length > LIST_ITEM_LIMIT) {
      this.items = this.items.slice(0, LIST_ITEM_LIMIT);
      error('List can have no more than ' + LIST_ITEM_LIMIT +
        ' items');
    }
    return this;
  }
};

/**
 * Class for initializing and constructing Carousel with chainable interface.
 */
const Carousel = class {
  /**
   * Constructor for Carousel. Accepts optional Carousel to clone or list of
   * items to copy.
   *
   * @param {(Carousel|Array<OptionItem>)=} carousel Either a carousel to clone
   *     or an array of OptionItem to initialize a new carousel
   */
  constructor (carousel) {
    /**
     * List of 2-20 items to show in this carousel. Required.
     * @type {Array<OptionItems>}
     */
    this.items = [];

    if (carousel) {
      if (Array.isArray(carousel)) {
        for (let item of carousel) {
          this.items.push(new OptionItem(item));
        }
      } else if (typeof carousel === 'object') {
        if (carousel.items) {
          for (let item of carousel.items) {
            this.items.push(new OptionItem(item));
          }
        }
      }
    }
  }

  /**
   * Adds a single item or list of items to the carousel.
   *
   * @param {OptionItem|Array<OptionItem>} optionItems OptionItems to add.
   * @return {Carousel} Returns current constructed Carousel.
   */
  addItems (optionItems) {
    if (!optionItems) {
      error('optionItems cannot be null');
      return this;
    }
    if (Array.isArray(optionItems)) {
      for (let item of optionItems) {
        this.items.push(item);
      }
    } else {
      this.items.push(optionItems);
    }
    if (this.items.length > CAROUSEL_ITEM_LIMIT) {
      this.items = this.items.slice(0, CAROUSEL_ITEM_LIMIT);
      error('Carousel can have no more than ' + CAROUSEL_ITEM_LIMIT +
        ' items');
    }
    return this;
  }
};

/**
 * Class for initializing and constructing Option Items with chainable interface.
 */
const OptionItem = class {
  /**
   * Constructor for OptionItem. Accepts optional OptionItem to clone.
   *
   * @param {OptionItem=} optionItem Optional OptionItem to clone.
   */
  constructor (optionItem) {
    /**
     * Option info of the option item. Required.
     * @type {OptionInfo}
     */
    this.optionInfo = {
      key: '',
      synonyms: []
    };

    /**
     * Title of the option item. Required.
     * @type {string}
     */
    this.title = '';

    /**
     * Description text of the item. Optional.
     * @type {string}
     */
    this.description = undefined;

    /**
     * Image to show on item. Optional.
     * @type {Image}
     */
    this.image = undefined;

    if (optionItem) {
      if (optionItem.optionInfo) {
        if (optionItem.optionInfo.key) {
          this.optionInfo.key = optionItem.optionInfo.key;
        }
        if (optionItem.optionInfo.synonyms) {
          this.optionInfo.synonyms = optionItem.optionInfo.synonyms;
        }
      }
      if (optionItem.title) {
        this.title = optionItem.title;
      }
      if (optionItem.description) {
        this.description = optionItem.description;
      }
      if (optionItem.image) {
        this.image = optionItem.image;
      }
    }
  }

  /**
   * Sets the title for this Option Item.
   *
   * @param {string} title Title to show on item.
   * @return {OptionItem} Returns current constructed OptionItem.
   */
  setTitle (title) {
    if (!title) {
      error('title cannot be empty');
      return this;
    }
    this.title = title;
    return this;
  }

  /**
   * Sets the description for this Option Item.
   *
   * @param {string} description Description to show on item.
   * @return {OptionItem} Returns current constructed OptionItem.
   */
  setDescription (description) {
    if (!description) {
      error('descriptions cannot be empty');
      return this;
    }
    this.description = description;
    return this;
  }

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
  setImage (url, accessibilityText, width, height) {
    if (!url) {
      error('url cannot be empty');
      return this;
    }
    if (!accessibilityText) {
      error('accessibilityText cannot be empty');
      return this;
    }
    this.image = { url: url, accessibilityText: accessibilityText };
    if (width) {
      this.image.width = width;
    }
    if (height) {
      this.image.height = height;
    }
    return this;
  }

  /**
   * Sets the key for the OptionInfo of this Option Item. This will be returned
   * as an argument in the resulting actions.intent.OPTION intent.
   *
   * @param {string} key Key to uniquely identify this item.
   * @return {OptionItem} Returns current constructed OptionItem.
   */
  setKey (key) {
    if (!key) {
      error('key cannot be empty');
      return this;
    }
    this.optionInfo.key = key;
    return this;
  }

  /**
   * Adds a single synonym or list of synonyms to item.
   *
   * @param {string|Array<string>} synonyms Either a single string synonyms
   *     or list of synonyms to add.
   * @return {OptionItem} Returns current constructed OptionItem.
   */
  addSynonyms (synonyms) {
    if (!synonyms) {
      error('Invalid synonyms');
      return this;
    }
    if (Array.isArray(synonyms)) {
      for (let synonym of synonyms) {
        this.optionInfo.synonyms.push(synonym);
      }
    } else {
      this.optionInfo.synonyms.push(synonyms);
    }
    return this;
  }
};

/**
 * Check if given text contains SSML.
 *
 * @param {string} text Text to check.
 * @return {boolean} True if text contains SSML, false otherwise.
 */
function isSsml (text) {
  return /^<speak\b[^>]*>([^]*?)<\/speak>$/gi.test(text);
}

module.exports = {
  RichResponse,
  BasicCard,
  List,
  Carousel,
  OptionItem,
  isSsml
};
