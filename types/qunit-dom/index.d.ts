// Type definitions for qunit-dom 0.6
// Project: https://github.com/simplabs/qunit-dom#readme
// Definitions by: Don Denton <https://github.com/happycollision>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="qunit" />

declare namespace QUnitDom {
    interface Options {
        count?: number;
    }

    interface Matchers {
        /**
         * Assert an `HTMLElement` (or multiple) matching the `selector` exists.
         *
         *
         * @param options      Documentation on options is sparse. It at least takes a `count` param, which confirms the number of elements that match your selector in the DOM.
         * @param message
         */
        exists(options?: Options, message?: string): void;

        /**
         * Assert an `HTMLElement` matching the `selector` does not exists.
         *
         *
         * @param message
         */
        doesNotExist(message?: string): void;

        /**
         * Assert that the `HTMLElement` or an `HTMLElement` matching the
         * `selector` is currently checked.
         *
         *
         * @param message
         */
        isChecked(message?: string): void;

        /**
         * Assert that the `HTMLElement` or an `HTMLElement` matching the
         * `selector` is currently unchecked.
         *
         *
         * @param message
         */
        isNotChecked(message?: string): void;

        /**
         * Assert that the `HTMLElement` or an `HTMLElement` matching the
         * `selector` is currently focused.
         *
         *
         * @param message
         */
        isFocused(message?: string): void;

        /**
         * Assert that the `HTMLElement` or an `HTMLElement` matching the
         * `selector` is not currently focused.
         *
         *
         * @param message
         */
        isNotFocused(message?: string): void;

        /**
         * Assert that the `HTMLElement` or an `HTMLElement` matching the
         * `selector` is currently required.
         *
         *
         * @param message
         */
        isRequired(message?: string): void;

        /**
         * Assert that the `HTMLElement` or an `HTMLElement` matching the
         * `selector` is currently not required.
         *
         *
         * @param message
         */
        isNotRequired(message?: string): void;

        /**
         * Assert that the `HTMLElement` or an `HTMLElement` matching the
         * `selector` is visible.Visibility is determined with the hueristic
         * used in [jQuery's :visible pseudo-selector](https://github.com/jquery/jquery/blob/2d4f53416e5f74fa98e0c1d66b6f3c285a12f0ce/src/css/hiddenVisibleSelectors.js#L12),
         * specifically:
         *
         * - is the element's offsetWidth non-zero
         * - is the element's offsetHeight non-zero
         * - is the length of an element's DOMRect objects found via getClientRects() non-zero
         *
         * Additionally, visibility in this case means that the element is visible on the page,
         * but not necessarily in the viewport.
         *
         *
         * @param message
         */
        isVisible(message?: string): void;

        /**
         * Assert that the `HTMLElement` or an `HTMLElement` matching the
         * `selector` is not visible.Visibility is determined with the hueristic
         * used in [jQuery's :visible pseudo-selector](https://github.com/jquery/jquery/blob/2d4f53416e5f74fa98e0c1d66b6f3c285a12f0ce/src/css/hiddenVisibleSelectors.js#L12),
         * specifically:
         *
         * - is the element's offsetWidth non-zero
         * - is the element's offsetHeight non-zero
         * - is the length of an element's DOMRect objects found via getClientRects() non-zero
         *
         * Additionally, visibility in this case means that the element is visible on the page,
         * but not necessarily in the viewport.
         *
         *
         * @param message
         */
        isNotVisible(message?: string): void;

        /**
         * Assert that the `HTMLElement` has an attribute with the provided `name`
         * and optionally checks if the attribute `value` matches the provided text
         * or regular expression.
         *
         *
         * @param name
         * @param value
         * @param message
         */
        hasAttribute(name: string, value: string | RegExp | object, message?: string): void;

        /**
         * Assert that the `HTMLElement` or an `HTMLElement` matching the
         * `selector` is disabled.
         *
         *
         * @param message
         */
        isDisabled(message?: string): void;

        /**
         * Assert that the `HTMLElement` or an `HTMLElement` matching the
         * `selector` is not disabled.
         *
         *
         * @param message
         */
        isNotDisabled(message?: string): void;

        /**
         * Assert that the `HTMLElement` has no attribute with the provided `name`.
         *
         * @alias hasNoAttribute
         * @alias lacksAttribute
         *
         * @param name
         * @param message
         */
        doesNotHaveAttribute(name: string, message?: string): void;
        hasNoAttribute: Matchers['doesNotHaveAttribute'];
        lacksAttribute: Matchers['doesNotHaveAttribute'];

        /**
         * Assert that the `HTMLElement` has the `expected` CSS class using
         * [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).
         *
         *
         * @param expected
         * @param message
         */
        hasClass(expected: string, message?: string): void;

        /**
         * Assert that the `HTMLElement` does not have the `expected` CSS class using
         * [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).
         *
         * @alias hasNoClass
         * @alias lacksClass
         *
         * @param expected
         * @param message
         */
        doesNotHaveClass(expected: string, message?: string): void;
        hasNoClass: Matchers['doesNotHaveClass'];
        lacksClass: Matchers['doesNotHaveClass'];

        /**
         * Assert that the text of the `HTMLElement` or an `HTMLElement`
         * matching the `selector` matches the `expected` text, using the
         * [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
         * attribute and stripping / collapsing whitespace.
         *
         * `expected` can also be a regular expression.
         *
         * @alias matchesText
         *
         * @param expected
         * @param message
         */
        hasText(expected: string | RegExp, message?: string): void;
        matchesText: Matchers['hasText'];

        /**
         * Assert that the `textContent` property of an `HTMLElement` is not empty.
         *
         *
         * @param message
         */
        hasAnyText(message?: string): void;

        /**
         * Assert that the text of the `HTMLElement` or an `HTMLElement`
         * matching the `selector` contains the given `text`, using the
         * [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
         * attribute.
         *
         * @alias containsText
         * @alias hasTextContaining
         *
         * @param text
         * @param message
         */
        includesText(text: string, message?: string): void;
        containsText: Matchers['includesText'];
        hasTextContaining: Matchers['includesText'];

        /**
         * Assert that the text of the `HTMLElement` or an `HTMLElement`
         * matching the `selector` does not include the given `text`, using the
         * [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
         * attribute.
         *
         * @alias doesNotContainText
         * @alias doesNotHaveTextContaining
         *
         * @param text
         * @param message
         */
        doesNotIncludeText(text: string, message?: string): void;
        doesNotContainText: Matchers['doesNotIncludeText'];
        doesNotHaveTextContaining: Matchers['doesNotIncludeText'];

        /**
         * Assert that the `value` property of an `HTMLInputElement` matches
         * the `expected` text or regular expression.
         *
         * If no `expected` value is provided, the assertion will fail if the
         * `value` is an empty string.
         *
         *
         * @param expected
         * @param message
         */
        hasValue(expected: string | RegExp | object, message?: string): void;

        /**
         * Assert that the `value` property of an `HTMLInputElement` is not empty.
         *
         *
         * @param message
         */
        hasAnyValue(message?: string): void;

        /**
         * Assert that the `value` property of an `HTMLInputElement` is empty.
         *
         * @alias lacksValue
         *
         * @param message
         */
        hasNoValue(message?: string): void;
        lacksValue: Matchers['hasNoValue'];
    }
}

// Extend QUnit's interface for Assert
interface Assert {
    dom(selector?: string): QUnitDom.Matchers;
}
