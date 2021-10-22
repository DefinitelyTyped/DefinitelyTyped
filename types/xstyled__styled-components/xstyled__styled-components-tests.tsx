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
// $ExpectError
sum('b');

const Main = () => {
    const breakpoints = useBreakpoints();

    const breakpoint = useBreakpoint();

    // $ExpectError
    breakpoint = 'abc';

    let width = useViewportWidth();

    // $ExpectError
    width = false;

    let isUp = useUp('md');

    // $ExpectError
    isUp = useUp(1);

    // $ExpectError
    isUp = '';

    let isDown = useDown('md');

    // $ExpectError
    isDown = useDown(1);

    // $ExpectError
    isDown = '';

    const [colorMode, setColorMode] = useColorMode();

    setColorMode(colorMode);

    // $ExpectError
    setColorMode(123);

    return (
        <Box
            as="main"
            // $ExpectError
            minWidth={breakpoints.thin}
            maxWidth={breakpoints.md}
            width={width}
            mt={isUp ? 2 : 0}
            mb={isDown ? 2 : 0}
        >
            We are on {breakpoint}

            <WithRequiredProp foo={true} />
            <WithRequiredProp foo={false} />
            // $ExpectError
            <WithRequiredProp />
            <WithOptionalProp />
            // $ExpectError
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
                // $ExpectError
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
// $ExpectError
colorModeScriptTag = getColorModeInitScriptTag({});

// $ExpectError
colorModeScriptTag = 111;
