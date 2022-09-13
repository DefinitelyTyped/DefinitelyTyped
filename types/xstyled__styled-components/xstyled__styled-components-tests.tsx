import * as React from 'react';
import styled, {
    Box,
    css,
    useBreakpoint,
    useBreakpoints,
    useDown,
    useUp,
    useViewportWidth,
    useColorMode,
    ColorModeProvider,
    getColorModeInitScriptElement,
    getColorModeInitScriptTag
} from '@xstyled/styled-components';

interface WithFoo {
    foo: boolean;
}

const WithRequiredProp = styled.div<WithFoo>`
    ${({ foo }) => css`
        display: ${foo ? 'block' : 'none'};
    `}
`;

const WithOptionalProp = styled.div<Partial<WithFoo>>`
    ${({ foo }) => css`
        display: ${foo ? 'block' : 'none'};
    `}
`;

const StyledDiv = styled.div``;
const StyledDivBox = styled.divBox``;

const sum = (a: number) => a * a;
// @ts-expect-error
sum('b');

const Main = () => {
    const breakpoints = useBreakpoints();

    const breakpoint = useBreakpoint();

    // @ts-expect-error
    breakpoint = 'abc';

    let width = useViewportWidth();

    // @ts-expect-error
    width = false;

    let isUp = useUp('md');

    // @ts-expect-error
    isUp = useUp(1);

    // @ts-expect-error
    isUp = '';

    let isDown = useDown('md');

    // @ts-expect-error
    isDown = useDown(1);

    // @ts-expect-error
    isDown = '';

    const [colorMode, setColorMode] = useColorMode();

    setColorMode(colorMode);

    // @ts-expect-error
    setColorMode(123);

    return (
        <Box
            as="main"
            // @ts-expect-error
            minWidth={breakpoints.thin}
            maxWidth={breakpoints.md}
            width={width}
            mt={isUp ? 2 : 0}
            mb={isDown ? 2 : 0}
        >
            We are on {breakpoint}

            <WithRequiredProp foo={true} />
            <WithRequiredProp foo={false} />
            {/* @ts-expect-error */}
            <WithRequiredProp />
            <WithOptionalProp />
            {/* @ts-expect-error */}
            <StyledDiv mt={2} />
            <StyledDivBox mt={2} />
        </Box>
    );
};

const ColorMode = () => {
    return (
        <>
            <ColorModeProvider target={document.body} targetSelector="#small-react-app">
                {getColorModeInitScriptElement()}
                {getColorModeInitScriptElement({ target: 'document.body' })}
                {/* @ts-expect-error */}
                {getColorModeInitScriptElement({})}
            </ColorModeProvider>

            // expect ColorMode ProviderProps to be optional
            <ColorModeProvider>
            </ColorModeProvider>
        </>
    );
};

let colorModeScriptTag = getColorModeInitScriptTag();
colorModeScriptTag = getColorModeInitScriptTag({ target: 'document.getElementById("small-react-app")' });
// @ts-expect-error
colorModeScriptTag = getColorModeInitScriptTag({});

// @ts-expect-error
colorModeScriptTag = 111;
