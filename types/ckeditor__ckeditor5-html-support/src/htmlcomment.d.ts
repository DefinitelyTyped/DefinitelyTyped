import { Plugin } from '@ckeditor/ckeditor5-core';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import Range from '@ckeditor/ckeditor5-engine/src/model/range';
/**
 * The HTML comment feature. It preserves the HTML comments (`<!-- -->`) in the editor data.
 *
 * For a detailed overview, check the {@glink features/general-html-support#html-comments HTML comment feature documentation}.
 */
export default class HtmlComment extends Plugin {
    static readonly pluginName: 'HtmlComment';
    init(): void;

    /**
     * Creates an HTML comment on the specified position and returns its ID.
     *
     * *Note*: If two comments are created at the same position, the second comment will be inserted before the first one.
     */
    createHtmlComment(position: Position, content: string): string;

    /**
     * Removes an HTML comment with the given comment ID.
     *
     * It does nothing and returns `false` if the comment with the given ID does not exist.
     * Otherwise it removes the comment and returns `true`.
     *
     * Note that a comment can be removed also by removing the content around the comment.
     */
    removeHtmlComment(commentID: string): boolean;

    /**
     * Gets the HTML comment data for the comment with a given ID.
     *
     * Returns `null` if the comment does not exist.
     */
    getHtmlCommentData(commentID: string): HtmlCommentData | null;

    /**
     * Gets all HTML comments in the given range.
     *
     * By default it includes comments at the range boundaries.
     */
    getHtmlCommentsInRange(range: Range, options?: { skipBoundaries?: boolean }): string[];
}

/**
 * An interface for the HTML comments data.
 *
 * It consists of the {@link module:engine/model/position~Position `position`} and `content`.
 */
export interface HtmlCommentData {
    position: Position;
    content: string;
}
