import * as React from 'react';
import CloseOnEscape from 'react-close-on-escape';

const onEscapeCallback = () => {};

// $ExpectError
const missingRequired = <CloseOnEscape />;

// $ExpectError
const invalidExample = <CloseOnEscape onEscape={true} />;

const validExample = <CloseOnEscape onEscape={onEscapeCallback} />;
