// Module usage

import {
    toBeDisabled,
    toBeEmpty,
    toBeEnabled,
    toBeInTheDOM,
    toBeInTheDocument,
    toBeInvalid,
    toBeRequired,
    toBeValid,
    toBeVisible,
    toContainElement,
    toContainHTML,
    toHaveAttribute,
    toHaveClass,
    toHaveFocus,
    toHaveFormValues,
    toHaveStyle,
    toHaveTextContent,
    toHaveValue,
    ValidElement,
} from '@testing-library/jest-dom';

const element: ValidElement = document.body;

toBeInTheDOM(element).pass;
toBeInTheDOM(element, document.body).pass;
toBeInTheDocument(element).pass;
toBeVisible(element).pass;
toBeEmpty(element).pass;
toBeDisabled(element).pass;
toBeEnabled(element).pass;
toBeInvalid(element).pass;
toBeRequired(element).pass;
toBeValid(element).pass;
toContainElement(element, document.body).pass;
toContainElement(element, null).pass;
toContainHTML(element, 'body').pass;
toHaveAttribute(element, 'attr').pass;
toHaveAttribute(element, 'attr', true).pass;
toHaveAttribute(element, 'attr', 'yes').pass;
toHaveClass(element).pass;
toHaveClass(element, 'cls1').pass;
toHaveClass(element, 'cls1', 'cls2', 'cls3', 'cls4').pass;
toHaveFocus(element).pass;
toHaveFormValues(element, { foo: 'bar', baz: 1 }).pass;
toHaveStyle(element, 'display: block').pass;
toHaveTextContent(element, 'Text').pass;
toHaveTextContent(element, /Text/).pass;
toHaveTextContent(element, 'Text', { normalizeWhitespace: true }).pass;
toHaveTextContent(element, /Text/, { normalizeWhitespace: true }).pass;
toHaveValue(element).pass;
toHaveValue(element, 'str').pass;
toHaveValue(element, ['str1', 'str2']).pass;
toHaveValue(element, 1).pass;
