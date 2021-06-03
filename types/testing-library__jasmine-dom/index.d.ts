// Type definitions for Jasmine DOM 1.0
// Project: https://github.com/testing-library/jasmine-dom
// Definitions by: Brian Alexis Michel <https://github.com/brrianalexis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference types="jasmine" />

declare namespace jasmine {
    interface Matchers<T> {
        /**
         * @description
         * 🇬🇧
         * It accepts an `input` of type `checkbox` or `radio` and elements with a `role` of `radio` with a
         * valid `aria-checked` attribute of "true" or "false".
         *
         * 🇪🇸
         * Toma un `input` de tipo `checkbox` o `radio` y elementos con `role` de `radio` con un
         * atributo `aria-checked` de "true" o "false" válido.
         */
        toBeChecked(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if an element is disabled from the user's perspective.
         *
         * Matches if the element is a form control and the `disabled` attribute is specified
         * on this element or the element is a descendant of a `form` element with a `disabled` attribute.
         *
         * 🇪🇸
         * Chequea si un elemento está desactivado desde la perspectiva del usuario.
         *
         * Matchea si el elemento es un form control y tiene especificado el atributo `disabled` o
         * el elemento es descendiente de un elemento `form` con el atributo `disabled`.
         */
        toBeDisabled(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if an element has content.
         *
         * 🇪🇸
         * Chequea si un elemento tiene contenido.
         */
        toBeEmptyDOMElement(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if an element is enabled from the user's perspective.
         *
         * 🇪🇸
         * Chequea si un elemento está activado desde la perspectiva del usuario.
         */
        toBeEnabled(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if an element is present in the document.
         *
         * 🇪🇸
         * Chequea si un elemento está presente en el document.
         */
        toBeInTheDocument(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if a form element, or the entire `form`, is invalid.
         *
         * An `input`, `select`, `textarea` or `form` element is invalid if it has an `aria-invalid`
         * attribute with no value or a value of "true", or if the result of `checkValidity()` is false.
         *
         * 🇪🇸
         * Chequea si un elemento de form, o el `form` entero, son inválidos.
         *
         * Un elemento `input`, `select`, `textarea` o `form` es inválido si tiene un atributo
         * `aria-invalid` sin valor o con un valor "true", o si el resultado de `checkValidity()` es false.
         */
        toBeInvalid(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if a form element, or the entire `form`, is valid.
         *
         * An `input`, `select`, `textarea` or `form` element is invalid if it has an `aria-invalid`
         * attribute with no value or a value of "true", or if the result of `checkValidity()` is false.
         *
         * 🇪🇸
         * Chequea si un elemento de form, o el `form` entero, son válidos.
         *
         * Un elemento `input`, `select`, `textarea` o `form` es inválido si tiene un atributo
         * `aria-invalid` sin valor o con un valor "true", o si el resultado de `checkValidity()` es false.
         */
        toBeValid(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if a given element is partially checked.
         *
         * It accepts an `input` of type `checkbox` and elements with a `role` of `checkbox` with
         * an `aria-checked="mixed"` attribute, or `input` of type `checkbox` with `indeterminate` set to true.
         *
         * 🇪🇸
         * Chequea si un elemento está parcialmente checked.
         *
         * Toma un `input` de tipo `checkbox` y elementos con un `role` de `checkbox` con un atributo
         * `aria-checked="mixed"`, o `input` de tipo `checkbox` con `indeterminate` true.
         */
        toBePartiallyChecked(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if a form element is required.
         *
         * An element is required if it has a `required` or `aria-required="true"` attribute.
         *
         * 🇪🇸
         * Chequea si un elemento de form es required.
         *
         * Un elemento es required si tiene un atributo `required` o `aria-required="true"`.
         */
        toBeRequired(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if an element is visible to the user.
         *
         * An element is visible if **all** the following conditions are met:
         * * it does not have its css `display` property set to `none`.
         * * it does not have its css `visibility` property set to either `hidden` or `collapse`.
         * * it does not have its css property `opacity` set to `0`.
         * * its parent element is also visible (and so on up to the top of the DOM tree).
         * * it does not have the `hidden` attribute.
         * * if `<details />` has the `open` attribute.
         *
         * 🇪🇸
         * Chequea si un elemento es visible para el usuario.
         *
         * Un elemento es visible si **todas** las siguientes condiciones se cumplen:
         * * no tiene su propiedad de css `display` seteada en `none`.
         * * no tiene su propiedad de css `visibility` seteada en `hidden` o `collapse`.
         * * no tiene su propiedad de css `opacity` seteada en `0`.
         * * su elemento padre también es visible (y así hacia arriba en el árbol del DOM).
         * * si `<details />` tiene el atributo `open`.
         */
        toBeVisible(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if an element contains another element as a descendant.
         *
         * 🇪🇸
         * Chequea si un elemento contiene a otro como descendiente.
         */
        toContainElement(element: Element | null): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if an element has a certain attribute.
         *
         * 🇪🇸
         * Chequea si un elemento tiene cierto atributo.
         */
        toHaveAttribute(attribute: string, value?: unknown): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if an element has certain classes within its `class` attribute.
         *
         * At least one class must be provided, unless you are asserting that an element doesn't have any classes.
         *
         * 🇪🇸
         * Chequea si un elemento tiene ciertas clases dentro de su attributo `class`.
         *
         * Debe recibir al menos una clase, a menos que se esté afirmando que un elemento no tiene clases.
         */
        toHaveClassName(...classNames: string[]): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks the accessible description of an element.
         * An element gets its description via the `aria-describedby` attribute. Set this to the `id` of one or
         * more elements. These elements may be nested inside, be outside, or siblings of the passed in element.
         *
         * Whitespace is normalized. Using multiple ids will join the referenced elements' text content separated by a space.
         *
         * When a `string` argument is passed through, it will perform a whole case-sensitive match to the description text.
         *
         * To perform a `case-insensitive` match, you can use a `RegExp` with the `/i` modifier at the end of it.
         *
         * To perform a `partial` match, you can pass a `RegExp`.
         *
         * 🇪🇸
         * Chequea la descripción accesible de un elemento.
         * Un elemento recibe su descripción a partir del atributo `aria-describedby`. Setealo al `id` de uno o más elementos.
         * Estos elementos pueden estar anidados, afuera, o hermanos el elemento recibido.
         *
         * Los espacios en blanco son normalizados. Usar multiples ids va a unir con un espacio el contenido textual de los elementos referenciados.
         *
         * Cuando se recibe un argumento de tipo `string`, se va a realizar un match case-sensitive sobre el texto de descripción.
         *
         * Para realizar un match `case-insensitive`, puedes usar una `RegExp` con el modificador `/i` al final de la misma.
         *
         * Para realizar un match `parcial`, puedes usar una `RegExp`.
         */
        toHaveDescription(text?: string | RegExp): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if a given form element has the specified displayed value (the one the end user will see).
         *
         * Accepts `input`, `select` and `textarea` elements with the exception of `input` types `checkbox` and `radio`,
         * which can be matched using `toBeChecked` or `toHaveFormValues` instead.
         *
         * 🇪🇸
         * Chequea si un elemento de form dado tiene el valor de display especificado (el que el usuario final va a ver).
         *
         * Toma elementos `input`, `select` y `textarea`; excepto de `input` de tipo `checkbox` y `radio`,
         * los cuales pueden ser matcheados usando `toBeChecked` o `toHaveFormValues`.
         */
        toHaveDisplayValue(value: string | RegExp | Array<string | RegExp>): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if an element has focus.
         *
         * 🇪🇸
         * Chequea si un elemento tiene focus.
         */
        toHaveFocus(): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if a `form` or `fieldset` contains form controls for each given name, and having the specified values.
         *
         * Can only be used with `form` or `fieldset` elements.
         *
         * 🇪🇸
         * Chequea si un `form` o `fieldset` contiene form controls para cada nombre pasado con los valores especificados.
         *
         * Solo puede ser usado con elementos `form` o `fieldset`.
         */
        toHaveFormValues(expectedValues: Record<string, unknown>): boolean;
        /**
         * @description
         * 🇬🇧
         * Check if an element has specific `CSS` properties with specific values applied.
         *
         * Only matches if the element has **all** of the expected properties applied.
         *
         * 🇪🇸
         * Chequea si un elemento tiene propiedades específicas de `CSS` con valores específicos aplicados.
         *
         * Solo matchea si el elemento tiene **todas** las propiedades esperadas aplicadas.
         */
        toHaveStyle(css: string | Record<string, unknown>): boolean;
        /**
         * @description
         * 🇬🇧
         * Check if the given element has certain text content.
         *
         * When a `string` argument is passed through, it will perform a `partial case-sensitive` match to the element content.
         *
         * To perform a `case-insensitive` match, you can use a `RegExp` with the `/i` modifier.
         *
         * To match the whole content, you can use a `RegExp`.
         *
         * 🇪🇸
         * Chequea si un elemento tiene cierto text content.
         *
         * Cuando se pasa un argumento de tipo `string`, va a realizar un match `parcial case-sensitive` sobre el contenido del elemento.
         *
         * Para realizar un match `case-insensitive`, puedes usar una `RegExp` con el modificador `/i` al final de la misma.
         *
         * Para matchear todo el contenido, puedes usar una `RegExp`.
         */
        toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): boolean;
        /**
         * @description
         * 🇬🇧
         * Checks if the given element has the specified value.
         *
         * Accepts `input`, `select`, and `textarea` elements with the exception of `input` types `checkbox` and `radiobox`,
         * which can be matched only using `toBeChecked` or `toHaveFormValues`.
         *
         * 🇪🇸
         * Chequea si el elemento dado tiene el valor especificado.
         *
         * Toma elementos `input`, `select` y `textarea`; excepto `input` de tipo `checkbox` o `radiobox`, los cuales pueden
         * matchearse únicamente usando `toBeChecked` o `toHaveFormValues`.
         */
        toHaveValue(value?: string | string[] | number | null): boolean;
    }
}
