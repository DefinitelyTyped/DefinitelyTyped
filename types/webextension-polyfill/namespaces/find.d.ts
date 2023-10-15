//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.find
 *
 * Use the <code>browser.find</code> API to interact with the browser's <code>Find</code> interface.
 * Permissions: "find"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
export namespace Find {
    interface RangeData {
        /**
         * The index of the frame containing the match. 0 corresponds to the parent window. Note that the order of objects in the
         * rangeData array will sequentially line up with the order of frame indexes: for example,
         * framePos for the first sequence of rangeData objects will be 0, framePos for the next sequence will be 1, and so on.
         */
        framePos: number;

        /**
         * The ordinal position of the text node in which the match started.
         */
        startTextNodePos: number;

        /**
         * The ordinal position of the text node in which the match ended.
         */
        endTextNodePos: number;

        /**
         * The ordinal string position of the start of the matched word within start text node.
         * If match word include in single text node, Extension can get match word between startOffset and endOffset string index
         * in the single text node.
         */
        startOffset: number;

        /**
         * The ordinal string position of the end of the matched word within end text node.
         */
        endOffset: number;
    }

    interface Rectangle {
        /**
         * Pixels from the top.
         */
        top: number;

        /**
         * Pixels from the left.
         */
        left: number;

        /**
         * Pixels from the bottom.
         */
        bottom: number;

        /**
         * Pixels from the right.
         */
        right: number;
    }

    interface RectsAndTexts {
        /**
         * Rectangles relative to the top-left of the viewport.
         */
        rectList: Rectangle[];

        /**
         * an array of strings, corresponding to the rectList array. The entry at textList[i]
         * contains the part of the match bounded by the rectangle at rectList[i].
         */
        textList: string[];
    }

    interface RectData {
        /**
         * The index of the frame containing the match. 0 corresponds to the parent window. Note that the order of objects in the
         * rangeData array will sequentially line up with the order of frame indexes: for example,
         * framePos for the first sequence of rangeData objects will be 0, framePos for the next sequence will be 1, and so on.
         */
        rectsAndTexts: RectsAndTexts;

        /**
         * The complete text of the match.
         */
        text: string;
    }

    interface FindResult {
        /**
         * The number of results found.
         */
        count: number;

        /**
         * If includeRangeData was given in the options parameter, then this property will be included.
         * It is provided as an array of RangeData objects, one for each match. Each RangeData object describes where in the DOM
         * tree the match was found. This would enable, for example, an extension to get the text surrounding each match,
         * so as to display context for the matches. The items correspond to the items given in rectData, so rangeData[i]
         * describes the same match as rectData[i].
         * Optional.
         */
        rangeData?: RangeData[];

        /**
         * If includeRectData was given in the options parameter, then this property will be included.
         * It is an array of RectData objects. It contains client rectangles for all the text matched in the search,
         * relative to the top-left of the viewport. Extensions can use this to provide custom highlighting of the results.
         * Optional.
         */
        rectData?: RectData[];
    }

    /**
     * Search parameters.
     */
    interface FindParamsType {
        /**
         * Tab to query. Defaults to the active tab.
         * Optional.
         */
        tabId?: number;

        /**
         * Find only ranges with case sensitive match.
         * Optional.
         */
        caseSensitive?: boolean;

        /**
         * Find only ranges with diacritic sensitive match.
         * Optional.
         */
        matchDiacritics?: boolean;

        /**
         * Find only ranges that match entire word.
         * Optional.
         */
        entireWord?: boolean;

        /**
         * Return rectangle data which describes visual position of search results.
         * Optional.
         */
        includeRectData?: boolean;

        /**
         * Return range data which provides range data in a serializable form.
         * Optional.
         */
        includeRangeData?: boolean;
    }

    /**
     * highlightResults parameters
     */
    interface HighlightResultsParamsType {
        /**
         * Found range to be highlighted. Default highlights all ranges.
         * Optional.
         */
        rangeIndex?: number;

        /**
         * Tab to highlight. Defaults to the active tab.
         * Optional.
         */
        tabId?: number;

        /**
         * Don't scroll to highlighted item.
         * Optional.
         */
        noScroll?: boolean;
    }

    interface Static {
        /**
         * Search for text in document and store found ranges in array, in document order.
         *
         * @param queryphrase The string to search for.
         * @param params Optional. Search parameters.
         */
        find(queryphrase: string, params?: FindParamsType): Promise<FindResult>;

        /**
         * Highlight a range
         *
         * @param params Optional. highlightResults parameters
         */
        highlightResults(params?: HighlightResultsParamsType): Promise<void>;

        /**
         * Remove all highlighting from previous searches.
         *
         * @param tabId Optional. Tab to highlight. Defaults to the active tab.
         */
        removeHighlighting(tabId?: number): Promise<void>;
    }
}
