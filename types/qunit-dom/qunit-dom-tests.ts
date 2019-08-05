QUnit.assert.dom('#title').exists();
QUnit.assert.dom('#title').exists();
QUnit.assert.dom('.choice').exists({ count: 4 });
QUnit.assert.dom('.should-not-exist').doesNotExist();
QUnit.assert.dom('input.active').isChecked();
QUnit.assert.dom('input.active').isNotChecked();
QUnit.assert.dom('input.email').isFocused();
QUnit.assert.dom('input[type="password"]').isNotFocused();
QUnit.assert.dom('input[type="text"]').isRequired();
QUnit.assert.dom('input[type="text"]').isNotRequired();
QUnit.assert.dom('.foo').isVisible();
QUnit.assert.dom('.foo').isVisible({ count: 2 });
QUnit.assert.dom('.foo').isNotVisible();
QUnit.assert.dom('input.password-input').hasAttribute('type', 'password');
QUnit.assert.dom('input.password-input').hasAttribute('type');
QUnit.assert.dom('.foo').isDisabled();
QUnit.assert.dom('.foo').isNotDisabled();
QUnit.assert.dom('input.username').doesNotHaveAttribute('disabled');
QUnit.assert.dom('input.username').hasNoAttribute('disabled');
QUnit.assert.dom('input.username').lacksAttribute('disabled');
QUnit.assert.dom('input[type="password"]').hasClass('secret-password-input');
QUnit.assert.dom('input[type="password"]').doesNotHaveClass('username-input');
QUnit.assert.dom('input[type="password"]').hasNoClass('username-input');
QUnit.assert.dom('input[type="password"]').lacksClass('username-input');
QUnit.assert.dom('#title').hasText('Welcome to QUnit');
QUnit.assert.dom('.foo').hasText(/[12]\d{3}/);
QUnit.assert.dom('#title').matchesText('Welcome to QUnit');
QUnit.assert.dom('button.share').hasAnyText();
QUnit.assert.dom('#title').includesText('Welcome');
QUnit.assert.dom('#title').containsText('Welcome');
QUnit.assert.dom('#title').hasTextContaining('Welcome');
QUnit.assert.dom('#title').doesNotIncludeText('Welcome');
QUnit.assert.dom('#title').doesNotContainText('Welcome');
QUnit.assert.dom('#title').doesNotHaveTextContaining('Welcome');
QUnit.assert.dom('input.username').hasValue('HSimpson');
QUnit.assert.dom('input.username').hasValue();
QUnit.assert.dom('input.username').hasAnyValue();
QUnit.assert.dom('input.username').hasNoValue();
QUnit.assert.dom('input.username').lacksValue();
QUnit.assert.dom('p.red').matchesSelector('div.wrapper p:last-child');
QUnit.assert.dom('input').doesNotMatchSelector('input[disabled]');
QUnit.assert.dom('.progress-bar').hasStyle({
    opacity: 1,
    display: 'block',
});
QUnit.assert.dom('.progress-bar').hasPseudoElementStyle(':after', {
    content: '";"',
});

const element = new HTMLElement();
const rootElement = new HTMLElement();
QUnit.assert.dom(element).exists();
QUnit.assert.dom('.foo', element).exists();
QUnit.assert.dom(element, rootElement).exists();
