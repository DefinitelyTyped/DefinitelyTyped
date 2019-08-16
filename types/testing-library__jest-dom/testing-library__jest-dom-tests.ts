import 'jest';
import '@testing-library/jest-dom';

declare const expect: jest.Expect;

const element = document.createElement('div');
expect(element).toBeInTheDOM();
expect(element).toBeInTheDocument();
expect(element).toBeVisible();
expect(element).toBeEmpty();
expect(element).toBeDisabled();
expect(element).toBeEnabled();
expect(element).toBeInvalid();
expect(element).toBeRequired();
expect(element).toBeValid();
expect(element).toContainElement(null);
expect(element).toContainHTML('<div>Test</div>');
expect(element).toHaveAttribute('id');
expect(element).toHaveClass('is-active');
expect(element).toHaveFocus();
expect(element).toHaveFormValues({ name: 'Name' });
expect(element).toHaveStyle('span { font-weight: bold; }');
expect(element).toHaveStyle('span { font-weight: bold; }');
expect(element).toHaveTextContent('Example');
expect(element).toHaveValue('Test');
