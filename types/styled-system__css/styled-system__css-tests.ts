import css, { Theme, TypographyProps, BorderProps } from '@styled-system/css';

export const typography: TypographyProps = {
    fontFamily: 'sans-serif',
    fontSize: [1, 2, 3],
};

export const border: BorderProps = {
    border: [1, 5],
};

const theme: Theme = {
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
};

export const themeWithBreakpoints: Theme = {
    breakpoints: {
        small: '500em',
        medium: '1000em',
        large: '1500em',
    },
};

export const themeWithVariants: Theme<'buttons' | 'text'> = {
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
    buttons: {
        primary: {
            display: 'block',
            p: 3,
            fontWeight: 'bold',
            color: 'white',
            bg: 'primary',
            borderRadius: 2,
        },
    },
    text: {
        caps: {
            fontSize: [1, 2],
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
        },
        title: {
            fontSize: [3, 4],
            letterSpacing: ['-0.01em', '-0.02em'],
        },
    },
};

css();

css()();

css({
    fontSize: 32,
    color: 'blue',
    borderRadius: 4,
});

css({
    fontSize: [32, 48],
    color: 'blue',
    borderRadius: 4,
});

css({
    fontSize: 32,
    color: 'blue',
    borderRadius: 4,
    ':hover': {
        color: 'hotpink',
    },
});

css(() => ({
    color: 'hotpink',
}));

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

css({
    zIndex: 5,
    width: [500, 1000],
    height: '50vh',
});

css({
    variant: 'text.title',
});
