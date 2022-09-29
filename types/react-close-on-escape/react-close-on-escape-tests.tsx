import * as React from 'react';
import CloseOnEscape from 'react-close-on-escape';

const onEscapeCallback = () => {};

// @ts-expect-error
const missingRequired = <CloseOnEscape />;

// @ts-expect-error
const invalidExample = <CloseOnEscape onEscape={true} />;

const validExample = <CloseOnEscape onEscape={onEscapeCallback} />;
