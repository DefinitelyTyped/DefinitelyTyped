/** @jsx jsx */
import { Flex, jsx, css, InitializeColorMode, ColorMode, Styled, SxStyleProp, Theme, useThemeUI } from 'theme-ui';

export const Component = () => {
    const { theme, colorMode, setColorMode } = useThemeUI();

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
                <h1 sx={{ color: theme ? (theme.colors ? theme.colors.primary : '') : '' }}>
                    Current color mode: {colorMode}
                </h1>
                <Flex sx={{ backgroundColor: 'pink' }} />
                <button onClick={() => setColorMode('another-theme')}>Change Mode</button>
            </div>
            <div sx={{ label: 'my-label', div: { label: 'blah' } }}>
                <h1>Label test</h1>
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
    initialColorModeName: 'light',
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

// prettier-ignore
const incompleteThemeColorModes: Theme = { colors: { modes: { papaya: { // $ExpectError
                text: '#433',
            },
            dark: {
                text: '#fff',
                background: '#000',
                primary: '#0cf',
                secondary: '#09c',
                muted: '#111',
            },
        },
        text: '#000',
        background: '#fff',
        primary: '#07c',
        secondary: '#05a',
        muted: '#f6f6f6f',
    },
    initialColorModeName: 'light',
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

const themeWithValidVariants: Theme = {
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
    },
    grids: { main: { color: 'primary' } },
    buttons: { primary: { color: 'primary' } },
    text: { heading: { color: 'primary' } },
    links: { nav: { color: 'primary' } },
    images: { avatar: { color: 'primary' } },
    cards: { primary: { color: 'primary' } },
    layout: { container: { color: 'primary' } },
    forms: { label: { color: 'primary' } },
    badges: { primary: { color: 'primary' } },
    alerts: { primary: { color: 'primary' } },
    messages: { primary: { color: 'primary' } },
};

// prettier-ignore
const themeWithInvalidVariants: Theme = { layouts: { // $ExpectError
        container: {
            color: 'primary',
        },
    },
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
    },
};

const themeWithValidOptions: Theme = {
    useCustomProperties: true,
    useBodyStyles: true,
    initialColorModeName: 'default',
    useColorSchemeMediaQuery: false,
    useBorderBox: true,
    useLocalStorage: true,
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
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

function cssUtility() {
    const styleObject = {
        fontSize: [1, 2, 3],
        color: 'primary',
    };

    const theme = {
        fontSizes: [10, 12, 14],
        colors: {
            background: 'white',
            text: 'black',
            primary: 'red',
        },
    };

    css(styleObject)(theme);
}

{
    const colorMode: ColorMode = {} as any;

    // test: text and background are required

    colorMode.text = '';
    colorMode.background = '';

    // test: arbitrary keys can hold colors or color scales

    const seriousPink = colorMode.seriousPink;
    if (typeof seriousPink !== 'string' && Array.isArray(seriousPink)) {
        const [light, medium, dark]: string[] = seriousPink;
    }

    // test: interoperable base colors don't contain nested scales

    const baseColors: Array<string | undefined> = [colorMode.primary, colorMode.secondary, colorMode.muted, colorMode.highlight, colorMode.accent];
}
