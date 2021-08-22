import css, { CssFunctionReturnType, Theme } from '@styled-system/css';

const theme = {
    colors: {
        primary: 'tomato',
        secondary: 'cyan',
    },
    fontSizes: [12, 14, 16, 24, 36],
    fonts: {
        monospace: 'Menlo, monospace',
    },
    lineHeights: {
        body: 1.5,
    },
    fontWeights: {
        bold: 600,
    },
    zIndicies: {
        base: 100,
    },
};

export const themeWithVariants: Theme = {
    breakpoints: [500, 1000, 1500],
    colors: {
        primary: 'tomato',
        secondary: 'cyan',
    },
    fontSizes: [12, 14, 16, 24, 36],
    fonts: {
        monospace: 'Menlo, monospace',
    },
    lineHeights: {
        body: 1.5,
    },
    fontWeights: {
        bold: 600,
    },
    // The following is commented out because in doesn't adhere to the Theme type, but
    // this wasn't detected until TypeScript 3.8. Either the example or the Theme type
    // needs to be changed.
    // buttons: {
    //     primary: {
    //         display: 'block',
    //         p: 3,
    //         fontWeight: 'bold',
    //         color: 'white',
    //         bg: 'primary',
    //         borderRadius: 2,
    //     },
    // },
    // text: {
    //     caps: {
    //         fontSize: [1, 2],
    //         letterSpacing: '0.1em',
    //         textTransform: 'uppercase',
    //     },
    //     title: {
    //         fontSize: [3, 4],
    //         letterSpacing: ['-0.01em', '-0.02em'],
    //     },
    // },
};

// returns a function
css();

// returns an object
css()();

// returns styles
css({
    fontSize: 32,
    color: 'blue',
    borderRadius: 4,
})();

// returns system props styles
css({
    fontSize: [32, 48],
    color: 'blue',
    borderRadius: 4,
})({ theme });

// omits null values in responsive styles
css({
    color: 'primary',
    fontSize: [2, null, 4],
})({ theme });

// returns nested system props styles
css({
    fontSize: 32,
    color: 'blue',
    borderRadius: 4,
    ':hover': {
        color: 'hotpink',
    },
});

// returns nested responsive styles
css({
    color: 'primary',
    h1: {
        py: [3, 4],
    },
})({ theme });

// handles function as argument
css(() => ({
    color: 'hotpink',
}));

// handles all core styled system props
const style = css({
    m: 0,
    mb: 2,
    mx: 'auto',
    p: 3,
    py: 4,
    fontSize: 3,
    fontWeight: 'bold',
    color: 'primary',
    bg: ['secondary', 'transparent'],
    fontFamily: 'monospace',
    lineHeight: 'body',
    letterSpacing: '0.1em',
    boxShadow: 1,
});
style({ theme });

// handles numbers, string, arrays
css({
    zIndex: 5,
    width: [500, 1000],
    height: '50vh',
});

// handles variants
css({
    variant: 'text.title',
});

// handles using string values
css({
    fontWeight: 'regular',
    bg: 'secondary',
});

// handles multiple pseudo selectors
css({
    bg: 'primary',

    ':hover': {
        bg: 'secondary',
    },

    ':disabled': {
        color: 'gray',
        bg: 'white',
        cursor: 'auto',
    },
});

// works with functional arguments
css((t: typeof theme) => ({
    color: t.colors.primary,
}))(theme);

type TestTheme = typeof theme;
// supports functional values
css({
    color: (t: TestTheme) => t.colors.primary,
})(theme);

// supports functional selectors
css({
    header: (t: TestTheme) => ({
        color: t.colors.primary,
    }),
})(theme);

// returns variants from theme
css({
    variant: 'buttons.primary',
})(theme);

// returns nested variants
css({
    variant: 'buttons.primary',
    header: {
        variant: 'buttons.primary',
        h1: {
            variant: 'buttons.primary',
        },
    },
})(theme);

// handles variants with responsive values
css({
    variant: 'text.caps',
})(theme);

// handles responsive variants
css({
    variant: 'text.title',
})(theme);

// handles negative margins from scale
css({
    mt: -3,
    mx: -4,
})(theme);

// handles negative top, left, bottom, and right from scale
css({
    top: -1,
    right: -4,
    bottom: -3,
    left: -2,
})(theme);

// skip breakpoints
css({
    width: ['100%', null, '50%'],
})(theme);

// padding shorthand does not collide with nested p selector
css({
    p: {
        fontSize: 32,
        color: 'tomato',
        p: 2,
    },
    padding: 32,
})(theme);

// ignores array values longer than breakpoints
css({
    width: [32, 64, 128, 256, 512],
})({
    breakpoints: ['32em', '40em'],
});

// handles theme string values for zIndex
css({
    zIndex: 'base',
})(theme);

// ignores null
css(null);

css({
    label: 'foo',
    button: {
        label: 'bar',
        color: 'blue',
    },
    '> *': {
        label: 'baz',
    },
});

// handles vendor-prefixed css properties
css({
    WebkitTouchCallout: 'none'
});

const result: CssFunctionReturnType = css({});
