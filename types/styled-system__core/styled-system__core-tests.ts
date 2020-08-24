import { compose, system, get } from '@styled-system/core';

// Test that the system definition is correct.
// https://github.com/styled-system/styled-system/blob/master/packages/core/src/index.js#L131
const customFontStyles = system({
    fontWeight: {
        property: 'fontWeight',
        properties: ['fontWeight'],
        scale: 'fontWeights',
        defaultScale: [200, 400, 600],
        transform: (n, scale) => get(scale, n),
    },
    letterSpacing: true,
});

const CustomFontGroup = compose(
    customFontStyles,
    customFontStyles
);
