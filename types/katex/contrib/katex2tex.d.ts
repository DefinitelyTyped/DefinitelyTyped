/**
 * Set these to how you want inline and display math to be delimited.
 */
export interface CopyDelimiters {
    inline: ['$', '$'] | ['(', ')'];
    display: ['$$', '$$'] | ['[', ']'];
}

/**
 * Replace .katex elements with their TeX source (<annotation> element).
 * Modifies fragment in-place.  Useful for writing your own 'copy' handler,
 * as in https://github.com/KaTeX/KaTeX/blob/master/contrib/copy-tex/copy-tex.js.
 * @param fragment Selected fragment of the DOM.
 * @param copyDelimiters Delimiters for inline and display math.
 */
export default function katexReplaceWithTex(
    fragment: DocumentFragment,
    copyDelimiters?: CopyDelimiters,
): DocumentFragment;
