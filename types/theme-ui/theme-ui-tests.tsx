/** @jsx jsx */
import { Flex, jsx, InitializeColorMode, ColorMode, Styled, SxStyleProp, Theme } from 'theme-ui';

export const Component = () => {
    return (
        <>
            <InitializeColorMode />
            <ColorMode />
            <Styled.a href="https://awesome.com">Awesome</Styled.a>
            <Styled
                as="article"
                sx={{
                    ':hover': {
                        backgroundColor: 'red',
                    },
                }}
            >
                Works
            </Styled>
            <div sx={{ bg: 'red' }}>
                <Flex sx={{ backgroundColor: 'pink' }} />
            </div>
        </>
    );
};

const Success = () => (
    <>
        <div
            sx={{
                'body > div': {
                    ':hover': {
                        color: 'red',
                    },
                },
            }}
        />
        <div
            sx={{
                '@media only screen and (max-width: 600px)': {
                    'body > div': {
                        ':hover': {
                            color: 'red',
                        },
                    },
                },
            }}
        />
    </>
);

const workingThemeColorModes: Theme = {
    initialColorMode: 'light',
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        secondary: '#05a',
        muted: '#f6f6f6f',
        modes: {
            dark: {
                text: '#fff',
                background: '#000',
                primary: '#0cf',
                secondary: '#09c',
                muted: '#111',
            },
            papaya: {
                text: '#433',
                background: 'papayawhip',
            },
        },
    },
};

const incompleteThemeColorModes: Theme = {
    initialColorMode: 'light',
    // $ExpectError
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        secondary: '#05a',
        muted: '#f6f6f6f',
        modes: {
            dark: {
                text: '#fff',
                background: '#000',
                primary: '#0cf',
                secondary: '#09c',
                muted: '#111',
            },
            papaya: {
                text: '#433',
            },
        },
    },
};

const themeWithStyles: Theme = {
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
    },
    styles: {
        h1: {
            fontSize: 32,
            color: 'primary',
            mt: 4,
            mb: 2,
        },
    },
};

function SpreadingAndMergingInSxProp() {
    const buttonStyles: SxStyleProp = {
        font: 'inherit',
        color: 'primary',
        background: 'papayawhip',
        border: 'none',
        boxShadow: () => `0 0 4px black`,
        ':hover': {
            background: 'yellow',
            width: ['80%', '40%', '20%'],
        },
        height: '2rem',
        width: ['100%', '50%', '25%'],
    };

    return (
        <button type="button" sx={{ ...buttonStyles, background: 'red' }}>
            click me
        </button>
    );
}
