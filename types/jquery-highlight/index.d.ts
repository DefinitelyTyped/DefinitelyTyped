// Type definitions for jquery-highlight 3.5
// Project: https://github.com/knownasilya/jquery-highlight
// Definitions by: Mustafa Salaheldin <https://github.com/mustafasalahuldin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface UnhighlightSelectOption {
    /**
    * The highlights to remove based on CSS class, defaults to 'highlight'.
    */
   className?: string | undefined;
   /**
    * The highlights to remove based on HTML element, defaults to 'span'.
    */   
   element?: string | undefined;
}

interface HighlightOptions {
   /**
    * The CSS class of a highlighted element, defaults to 'highlight'.
    */
   className ?: string | undefined;

   /**
    * The element that wraps the highlighted word, defaults to 'span'.
    */
   element?: string | undefined;

   /**
    * If the search should be case sensitive, defaults to false.
    */
   caseSensitive?: boolean | undefined;

   /**
    *  If we want to highlight partial sections of a word, e.g. 'ca' from 'cat', defaults to false.
    */
   wordsOnly ?: boolean | undefined;

   /**
    * If wordsOnly is set to true, this is used to determine these boundaries, defaults to \\b (word boundary).
    */
   wordsBoundary?: string | undefined;

   /**
    * If wordsOnly is set to true, this is used to determine prefix word boundaries, defaults to the value of wordsBoundary.
    */
   wordsBoundaryStart?: string | undefined;
   
   /**
    * If wordsOnly is set to true, this is used to determine suffix word boundaries, defaults to the value of wordsBoundary.
    */
   wordsBoundaryEnd?: string | undefined;
}

interface JQuery {
   highlight(words?: string | string[], options?: HighlightOptions, callback?: Function): JQuery;

   unhighlight(options?: UnhighlightSelectOption): JQuery;
}
