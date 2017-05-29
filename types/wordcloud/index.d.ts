// Type definitions for wordcloud
// Project: https://github.com/timdream/wordcloud2.js
// Definitions by: Joe Skeen <http://github.com/joeskeen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function WordCloud(elements: HTMLElement | HTMLElement[], options: WordCloud.Options): void;

declare namespace WordCloud {
	var isSupported: boolean;
	var miniumFontSize: number;

	interface Options {
		/**
		 * List of words/text to paint on the canvas in a 2-d array, in the form of [word, size],
		 * e.g. [['foo', 12] , ['bar', 6]].
		 */
		list?: Array<ListEntry> | any[];
		/** font to use. */
		fontFamily?: string;
		/** font weight to use, e.g. normal, bold or 600 */
		fontWeight?: string | number;
		/**
		 * color of the text, can be any CSS color, or a callback(word, weight, fontSize, distance, theta)
		 * specifies  different color for each item in the list. You may also specify colors with built-in
		 * keywords: random-dark and random-light.
		 */
		color?: string | ((word: string, weight: string | number, fontSize: number, distance: number, theta: number) => string);
		/**
		 * for DOM clouds, allows the user to define the class of the span elements.Can be a normal class
		 * string, applying the same class to every span or a callback(word, weight, fontSize, distance, theta)
		 * for per-span class definition. In canvas clouds or if equals null, this option has no effect. */
		classes?: string | ((word: string, weight: string | number, fontSize: number, distance: number, theta: number) => string); 
		/** minimum font size to draw on the canvas. */
		minSize?: number;
		/** function to call or number to multiply for size of each word in the list. */
		weightFactor?: number | ((weight: number) => number);
		/** paint the entire canvas with background color and consider it empty before start. */
		clearCanvas?: boolean;
		/** color of the background. */
		backgroundColor?: string;

		/**
		 * size of the grid in pixels for marking the availability of the canvas — the larger the grid size,
		 * the  bigger the gap between words.
		 */
		gridSize?: number;
		/** origin of the “cloud” in [x, y]. */
		origin?: [number, number];
		/** set to true to allow word being draw partly outside of the canvas. Allow word bigger than the size of the canvas to be drawn. */
		drawOutOfBound?: boolean;

		/** visualize the grid by draw squares to mask the drawn areas. */
		drawMask?: boolean;
		/** color of the mask squares. */
		maskColor?: string;
		/** width of the gaps between mask squares. */
		maskGapWidth?: number;

		/** Wait for x milliseconds before start drawn the next item using setTimeout. */
		wait?: number;
		/** If the call with in the loop takes more than x milliseconds (and blocks the browser), abort immediately. */
		abortThreshold?: number;
		/** callback function to call when abort. */
		abort?: Function;

		/** If the word should rotate, the minimum rotation (in rad) the text should rotate. */
		minRotation?: number;
		/**
		 * If the word should rotate, the maximum rotation (in rad) the text should rotate. Set the two value equal
		 * to  keep all text in one angle.
		 */
		maxRotation?: number;

		/** Shuffle the points to draw so the result will be different each time for the same list and settings. */
		shuffle?: boolean;
		/** Probability for the word to rotate. Set the number to 1 to always rotate. */
		rotateRatio?: number;

		/**
		 * The shape of the "cloud" to draw. Can be any polar equation represented as a callback function, or a
		 * keyword present. Available presents are circle (default), cardioid (apple or heart shape curve, the most
		 * known polar equation), diamond (alias of square), triangle-forward, triangle, (alias of triangle-upright,
		 * pentagon, and star.
		 */
		shape?: string | ((theta: number) => number);
		/** degree of "flatness" of the shape wordcloud2.js should draw. */
		ellipticity?: number;

		/**
		 * callback to call when the cursor enters or leaves a region occupied by a word. The callback will take
		 * arugments callback(item, dimension, event), where event is the original mousemove event. This only will work
		 * on HTML5 canvas word clouds.
		 */
		hover?: EventCallback;
		/**
		 * callback to call when the user clicks on a word. The callback will take arugments
		 * callback(item, dimension,  event), where event is the original click event. This only will work on HTML5
		 * canvas word clouds.
		 */
		click?: EventCallback;
	}

	interface Dimension {
		x: number;
		y: number;
		w: number;
		h: number;
	}

	type ListEntry = [string, number];
	type EventCallback = (item: ListEntry, dimension: Dimension, event: MouseEvent) => void;
}
