// Type definitions for @testing-library/jest-dom 5.9
// Project: https://github.com/testing-library/jest-dom
// Definitions by: Ernesto García <https://github.com/gnapse>
//                 John Gozde <https://github.com/jgoz>
//                 Seth Macpherson <https://github.com/smacpherson64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference types="jest" />

declare namespace jest {
    interface Matchers<R, T> {
        /**
         * @deprecated
         * since v1.9.0
         * @description
         * Assert whether a value is a DOM element, or not. Contrary to what its name implies, this matcher only checks
         * that you passed to it a valid DOM element.
         *
         * It does not have a clear definition of what "the DOM" is. Therefore, it does not check whether that element
         * is contained anywhere.
         * @see
         * [testing-library/jest-dom#toBeInTheDom](https:github.com/testing-library/jest-dom#toBeInTheDom)
         */
        toBeInTheDOM(container?: HTMLElement | SVGElement): R;
        /**
         * @description
         * Assert whether an element is present in the document or not.
         * @example
         * <svg data-testid="svg-element"></svg>
         *
         * expect(queryByTestId('svg-element')).toBeInTheDocument()
         * expect(queryByTestId('does-not-exist')).not.toBeInTheDocument()
         * @see
         * [testing-library/jest-dom#tobeinthedocument](https:github.com/testing-library/jest-dom#tobeinthedocument)
         */
        toBeInTheDocument(): R;
        /**
         * @description
         * This allows you to check if an element is currently visible to the user.
         *
         * An element is visible if **all** the following conditions are met:
         * * it does not have its css property display set to none
         * * it does not have its css property visibility set to either hidden or collapse
         * * it does not have its css property opacity set to 0
         * * its parent element is also visible (and so on up to the top of the DOM tree)
         * * it does not have the hidden attribute
         * * if `<details />` it has the open attribute
         * @example
         * <div
         *   data-testid="zero-opacity"
         *   style="opacity: 0"
         * >
         *   Zero Opacity
         * </div>
         *
         * <div data-testid="visible">Visible Example</div>
         *
         * expect(getByTestId('zero-opacity')).not.toBeVisible()
         * expect(getByTestId('visible')).toBeVisible()
         * @see
         * [testing-library/jest-dom#tobevisible](https:github.com/testing-library/jest-dom#tobevisible)
         */
        toBeVisible(): R;
        /**
         * @deprecated
         * since v5.9.0
         * @description
         * Assert whether an element has content or not.
         * @example
         * <span data-testid="not-empty">
         *   <span data-testid="empty"></span>
         * </span>
         *
         * expect(getByTestId('empty')).toBeEmpty()
         * expect(getByTestId('not-empty')).not.toBeEmpty()
         * @see
         * [testing-library/jest-dom#tobeempty](https:github.com/testing-library/jest-dom#tobeempty)
         */
        toBeEmpty(): R;
        /**
         * @description
         * Assert whether an element has content or not.
         * @example
         * <span data-testid="not-empty">
         *   <span data-testid="empty"></span>
         * </span>
         *
         * expect(getByTestId('empty')).toBeEmptyDOMElement()
         * expect(getByTestId('not-empty')).not.toBeEmptyDOMElement()
         * @see
         * [testing-library/jest-dom#tobeemptydomelement](https:github.com/testing-library/jest-dom#tobeemptydomelement)
         */
        toBeEmptyDOMElement(): R;
        /**
         * @description
         * Allows you to check whether an element is disabled from the user's perspective.
         *
         * Matches if the element is a form control and the `disabled` attribute is specified on this element or the
         * element is a descendant of a form element with a `disabled` attribute.
         * @example
         * <button
         *   data-testid="button"
         *   type="submit"
         *   disabled
         * >
         *   submit
         * </button>
         *
         * expect(getByTestId('button')).toBeDisabled()
         * @see
         * [testing-library/jest-dom#tobedisabled](https:github.com/testing-library/jest-dom#tobedisabled)
         */
        toBeDisabled(): R;
        /**
         * @description
         * Allows you to check whether an element is not disabled from the user's perspective.
         *
         * Works like `not.toBeDisabled()`.
         *
         * Use this matcher to avoid double negation in your tests.
         * @example
         * <button
         *   data-testid="button"
         *   type="submit"
         * >
         *   submit
         * </button>
         *
         * expect(getByTestId('button')).toBeEnabled()
         * @see
         * [testing-library/jest-dom#tobeenabled](https:github.com/testing-library/jest-dom#tobeenabled)
         */
        toBeEnabled(): R;
        /**
         * @description
         * Check if a form element, or the entire `form`, is currently invalid.
         *
         * An `input`, `select`, `textarea`, or `form` element is invalid if it has an `aria-invalid` attribute with no
         * value or a value of "true", or if the result of `checkValidity()` is false.
         * @example
         * <input data-testid="no-aria-invalid" />
         *
         * <form data-testid="invalid-form">
         *   <input required />
         * </form>
         *
         * expect(getByTestId('no-aria-invalid')).not.toBeInvalid()
         * expect(getByTestId('invalid-form')).toBeInvalid()
         * @see
         * [testing-library/jest-dom#tobeinvalid](https:github.com/testing-library/jest-dom#tobeinvalid)
         */
        toBeInvalid(): R;
        /**
         * @description
         * This allows you to check if a form element is currently required.
         *
         * An element is required if it is having a `required` or `aria-required="true"` attribute.
         * @example
         * <input data-testid="required-input" required />
         * <div
         *   data-testid="supported-role"
         *   role="tree"
         *   required />
         *
         * expect(getByTestId('required-input')).toBeRequired()
         * expect(getByTestId('supported-role')).not.toBeRequired()
         * @see
         * [testing-library/jest-dom#toberequired](https:github.com/testing-library/jest-dom#toberequired)
         */
        toBeRequired(): R;
        /**
         * @description
         * Allows you to check if a form element is currently required.
         *
         * An `input`, `select`, `textarea`, or `form` element is invalid if it has an `aria-invalid` attribute with no
         * value or a value of "false", or if the result of `checkValidity()` is true.
         * @example
         * <input data-testid="aria-invalid" aria-invalid />
         *
         * <form data-testid="valid-form">
         *   <input />
         * </form>
         *
         * expect(getByTestId('no-aria-invalid')).not.toBeValid()
         * expect(getByTestId('invalid-form')).toBeInvalid()
         * @see
         * [testing-library/jest-dom#tobevalid](https:github.com/testing-library/jest-dom#tobevalid)
         */
        toBeValid(): R;
        /**
         * @description
         * Allows you to assert whether an element contains another element as a descendant or not.
         * @example
         * <span data-testid="ancestor">
         *   <span data-testid="descendant"></span>
         * </span>
         *
         * const ancestor = getByTestId('ancestor')
         * const descendant = getByTestId('descendant')
         * const nonExistantElement = getByTestId('does-not-exist')
         * expect(ancestor).toContainElement(descendant)
         * expect(descendant).not.toContainElement(ancestor)
         * expect(ancestor).not.toContainElement(nonExistantElement)
         * @see
         * [testing-library/jest-dom#tocontainelement](https:github.com/testing-library/jest-dom#tocontainelement)
         */
        toContainElement(element: HTMLElement | SVGElement | null): R;
        /**
         * @description
         * Assert whether a string representing a HTML element is contained in another element.
         * @example
         * <span data-testid="parent">
         *   <span data-testid="child"></span>
         * </span>
         *
         * const parent = getByTestId('parent')
         * expect(parent).toContainerHTML(<span data-testid="child"></span>)
         * @see
         * [testing-library/jest-dom#tocontainhtml](https:github.com/testing-library/jest-dom#tocontainhtml)
         */
        toContainHTML(htmlText: string): R;
        /**
         * @description
         * Allows you to check if a given element has an attribute or not.
         *
         * You can also optionally check that the attribute has a specific expected value or partial match using
         * [expect.stringContaining](https://jestjs.io/docs/en/expect.html#expectnotstringcontainingstring) or
         * [expect.stringMatching](https://jestjs.io/docs/en/expect.html#expectstringmatchingstring-regexp).
         * @example
         * <button
         *   data-testid="ok-button"
         *   type="submit"
         *   disabled
         * >
         *   ok
         * </button>
         *
         * expect(button).toHaveAttribute('disabled')
         * expect(button).toHaveAttribute('type', 'submit')
         * expect(button).not.toHaveAttribute('type', 'button')
         * @see
         * [testing-library/jest-dom#tohaveattribute](https:github.com/testing-library/jest-dom#tohaveattribute)
         */
        toHaveAttribute(attr: string, value?: unknown): R;
        /**
         * @description
         * Check whether the given element has certain classes within its `class` attribute.
         *
         * You must provide at least one class, unless you are asserting that an element does not have any classes.
         * @example
         * <button
         *   data-testid="delete-button"
         *   class="btn xs btn-danger"
         * >
         *   delete item
         * </button>
         *
         * <div data-testid="no-classes">no classes</div>
         *
         * const deleteButton = getByTestId('delete-button')
         * const noClasses = getByTestId('no-classes')
         * expect(deleteButton).toHaveClass('btn')
         * expect(deleteButton).toHaveClass('btn-danger xs')
         * expect(noClasses).not.toHaveClass()
         * @see
         * [testing-library/jest-dom#tohaveclass](https:github.com/testing-library/jest-dom#tohaveclass)
         */
        toHaveClass(...classNames: string[]): R;
        /**
         * @description
         * This allows you to check whether the given form element has the specified displayed value (the one the
         * end user will see). It accepts <input>, <select> and <textarea> elements with the exception of <input type="checkbox">
         * and <input type="radio">, which can be meaningfully matched only using toBeChecked or toHaveFormValues.
         * @example
         * <label for="input-example">First name</label>
         * <input type="text" id="input-example" value="Luca" />
         *
         * <label for="textarea-example">Description</label>
         * <textarea id="textarea-example">An example description here.</textarea>
         *
         * <label for="single-select-example">Fruit</label>
         * <select id="single-select-example">
         *   <option value="">Select a fruit...</option>
         *   <option value="banana">Banana</option>
         *   <option value="ananas">Ananas</option>
         *   <option value="avocado">Avocado</option>
         * </select>
         *
         * <label for="mutiple-select-example">Fruits</label>
         * <select id="multiple-select-example" multiple>
         *   <option value="">Select a fruit...</option>
         *   <option value="banana" selected>Banana</option>
         *   <option value="ananas">Ananas</option>
         *   <option value="avocado" selected>Avocado</option>
         * </select>
         *
         * const input = screen.getByLabelText('First name')
         * const textarea = screen.getByLabelText('Description')
         * const selectSingle = screen.getByLabelText('Fruit')
         * const selectMultiple = screen.getByLabelText('Fruits')
         *
         * expect(input).toHaveDisplayValue('Luca')
         * expect(textarea).toHaveDisplayValue('An example description here.')
         * expect(selectSingle).toHaveDisplayValue('Select a fruit...')
         * expect(selectMultiple).toHaveDisplayValue(['Banana', 'Avocado'])
         *
         * @see
         * [testing-library/jest-dom#tohavedisplayvalue](https:github.com/testing-library/jest-dom#tohavedisplayvalue)
         */
        toHaveDisplayValue(value: string | RegExp | Array<string | RegExp>): R;
        /**
         * @description
         * Assert whether an element has focus or not.
         * @example
         * <div>
         *   <input type="text" data-testid="element-to-focus" />
         * </div>
         *
         * const input = getByTestId('element-to-focus')
         * input.focus()
         * expect(input).toHaveFocus()
         * input.blur()
         * expect(input).not.toHaveFocus()
         * @see
         * [testing-library/jest-dom#tohavefocus](https:github.com/testing-library/jest-dom#tohavefocus)
         */
        toHaveFocus(): R;
        /**
         * @description
         * Check if a form or fieldset contains form controls for each given name, and having the specified value.
         *
         * Can only be invoked on a form or fieldset element.
         * @example
         * <form data-testid="login-form">
         *   <input type="text" name="username" value="jane.doe" />
         *   <input type="password" name="password" value="123" />
         *   <input type="checkbox" name="rememberMe" checked />
         *   <button type="submit">Sign in</button>
         * </form>
         *
         * expect(getByTestId('login-form')).toHaveFormValues({
         *   username: 'jane.doe',
         *   rememberMe: true,
         * })
         * @see
         * [testing-library/jest-dom#tohaveformvalues](https:github.com/testing-library/jest-dom#tohaveformvalues)
         */
        toHaveFormValues(expectedValues: Record<string, unknown>): R;
        /**
         * @description
         * Check if an element has specific css properties with specific values applied.
         *
         * Only matches if the element has *all* the expected properties applied, not just some of them.
         * @example
         * <button
         *   data-test-id="submit-button"
         *   style="background-color: green; display: none"
         * >
         *   submit
         * </button>
         *
         * const button = getByTestId('submit-button')
         * expect(button).toHaveStyle('background-color: green')
         * expect(button).toHaveStyle({
         *   background-color: 'green',
         *   display: none
         * })
         * @see
         * [testing-library/jest-dom#tohavestyle](https:github.com/testing-library/jest-dom#tohavestyle)
         */
        toHaveStyle(css: string | Record<string, unknown>): R;
        /**
         * @description
         * Check whether the given element has a text content or not.
         *
         * When a string argument is passed through, it will perform a partial case-sensitive match to the element
         * content.
         *
         * To perform a case-insensitive match, you can use a RegExp with the `/i` modifier.
         *
         * If you want to match the whole content, you can use a RegExp to do it.
         * @example
         * <span data-testid="text-content">Text Content</span>
         *
         * const element = getByTestId('text-content')
         * expect(element).toHaveTextContent('Content')
         * // to match the whole content
         * expect(element).toHaveTextContent(/^Text Content$/)
         * // to use case-insentive match
         * expect(element).toHaveTextContent(/content$/i)
         * expect(element).not.toHaveTextContent('content')
         * @see
         * [testing-library/jest-dom#tohavetextcontent](https:github.com/testing-library/jest-dom#tohavetextcontent)
         */
        toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
        /**
         * @description
         * Check whether the given form element has the specified value.
         *
         * Accepts `<input>`, `<select>`, and `<textarea>` elements with the exception of `<input type="checkbox">` and
         * `<input type="radiobox">`, which can be matched only using
         * [toBeChecked](https:github.com/testing-library/jest-dom#tobechecked) or
         * [toHaveFormValues](https:github.com/testing-library/jest-dom#tohaveformvalues).
         * @example
         * <input
         *   type="number"
         *   value="5"
         *   data-testid="input-number" />
         *
         * const numberInput = getByTestId('input-number')
         * expect(numberInput).toHaveValue(5)
         * @see
         * [testing-library/jest-dom#tohavevalue](https:github.com/testing-library/jest-dom#tohavevalue)
         */
        toHaveValue(value?: string | string[] | number | null): R;
        /**
         * @description
         * Assert whether the given element is checked.
         *
         * It accepts an `input` of type `checkbox` or `radio` and elements with a `role` of `radio` with a valid
         * `aria-checked` attribute of "true" or "false".
         * @example
         * <input
         *   type="checkbox"
         *   checked
         *   data-testid="input-checkbox" />
         * <input
         *   type="radio"
         *   value="foo"
         *   data-testid="input-radio" />
         *
         * const inputCheckbox = getByTestId('input-checkbox')
         * const inputRadio = getByTestId('input-radio')
         * expect(inputCheckbox).toBeChecked()
         * expect(inputRadio).not.toBeChecked()
         * @see
         * [testing-library/jest-dom#tobechecked](https:github.com/testing-library/jest-dom#tobechecked)
         */
        toBeChecked(): R;
        /**
         * @description
         * Check the accessible description for an element.
         * This allows you to check whether the given element has a description or not.
         *
         * An element gets its description via the
         * [`aria-describedby` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
         * Set this to the `id` of one or more other elements. These elements may be nested
         * inside, be outside, or a sibling of the passed in element.
         *
         * Whitespace is normalized. Using multiple ids will
         * [join the referenced elements’ text content separated by a space](https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description).
         *
         * When a `string` argument is passed through, it will perform a whole
         * case-sensitive match to the description text.
         *
         * To perform a case-insensitive match, you can use a `RegExp` with the `/i`
         * modifier.
         *
         * To perform a partial match, you can pass a `RegExp` or use
         * `expect.stringContaining("partial string")`.
         *
         * @example
         * <button aria-label="Close" aria-describedby="description-close">
         *   X
         * </button>
         * <div id="description-close">
         *   Closing will discard any changes
         * </div>
         *
         * <button>Delete</button>
         *
         * const closeButton = getByRole('button', {name: 'Close'})
         *
         * expect(closeButton).toHaveDescription('Closing will discard any changes')
         * expect(closeButton).toHaveDescription(/will discard/) // to partially match
         * expect(closeButton).toHaveDescription(expect.stringContaining('will discard')) // to partially match
         * expect(closeButton).toHaveDescription(/^closing/i) // to use case-insensitive match
         * expect(closeButton).not.toHaveDescription('Other description')
         *
         * const deleteButton = getByRole('button', {name: 'Delete'})
         * expect(deleteButton).not.toHaveDescription()
         * expect(deleteButton).toHaveDescription('') // Missing or empty description always becomes a blank string
         * @see
         * [testing-library/jest-dom#tohavedescription](https:github.com/testing-library/jest-dom#tohavedescription)
         */
        toHaveDescription(text?: string | RegExp | ReturnType<typeof expect.stringContaining>): R;
        /**
         * @description
         * This allows you to check whether the given element is partially checked.
         * It accepts an input of type checkbox and elements with a role of checkbox
         * with a aria-checked="mixed", or input of type checkbox with indeterminate
         * set to true
         *
         * @example
         * <input type="checkbox" aria-checked="mixed" data-testid="aria-checkbox-mixed" />
         * <input type="checkbox" checked data-testid="input-checkbox-checked" />
         * <input type="checkbox" data-testid="input-checkbox-unchecked" />
         * <div role="checkbox" aria-checked="true" data-testid="aria-checkbox-checked" />
         * <div
         *   role="checkbox"
         *   aria-checked="false"
         *   data-testid="aria-checkbox-unchecked"
         * />
         * <input type="checkbox" data-testid="input-checkbox-indeterminate" />
         *
         * const ariaCheckboxMixed = getByTestId('aria-checkbox-mixed')
         * const inputCheckboxChecked = getByTestId('input-checkbox-checked')
         * const inputCheckboxUnchecked = getByTestId('input-checkbox-unchecked')
         * const ariaCheckboxChecked = getByTestId('aria-checkbox-checked')
         * const ariaCheckboxUnchecked = getByTestId('aria-checkbox-unchecked')
         * const inputCheckboxIndeterminate = getByTestId('input-checkbox-indeterminate')
         *
         * expect(ariaCheckboxMixed).toBePartiallyChecked()
         * expect(inputCheckboxChecked).not.toBePartiallyChecked()
         * expect(inputCheckboxUnchecked).not.toBePartiallyChecked()
         * expect(ariaCheckboxChecked).not.toBePartiallyChecked()
         * expect(ariaCheckboxUnchecked).not.toBePartiallyChecked()
         *
         * inputCheckboxIndeterminate.indeterminate = true
         * expect(inputCheckboxIndeterminate).toBePartiallyChecked()
         * @see
         * [testing-library/jest-dom#tobepartiallychecked](https:github.com/testing-library/jest-dom#tobepartiallychecked)
         */
        toBePartiallyChecked(): R;
    }
}
