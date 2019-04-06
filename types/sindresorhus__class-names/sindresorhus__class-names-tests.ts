import classNames = require('@sindresorhus/class-names');

// $ExpectType string
classNames('unicorn', 'rainbow');
// $ExpectType string
classNames({ awesome: true, foo: false }, 'unicorn', { rainbow: false });
// $ExpectType string
classNames('unicorn', null, undefined, 0, 1, { foo: null });

const buttonType = 'main';
// $ExpectType string
classNames({ [`button-${buttonType}`]: true });

const props = {
    type: 'success',
    small: true,
    block: undefined,
};

// $ExpectType string
classNames('button', {
    [`button-${props.type}`]: props.type,
    'button-block': props.block,
    'button-small': props.small,
});
