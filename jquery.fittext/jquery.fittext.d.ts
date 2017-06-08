// Type definitions for jquery-pjax
// Project: https://github.com/davatron5000/FitText.js
// Definitions by: Alexander Makarov <https://github.com/samdark>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="jquery.d.ts" />

interface JQuery {
    /**
     * Resizes text to fit container
     *
     * @param kompressor multiplier to apply to resized text size
     * @param options
     * @return Returns the jQuery object
     */
    fitText(kompressor?: number, options?): JQuery;
}