import * as React from 'react';
import {
    compose,
    system,
    get,
    background,
    BackgroundProps,
    border,
    BorderProps,
    borders,
    BordersProps,
    buttonStyle,
    ButtonStyleProps,
    color,
    ColorProps,
    colorStyle,
    ColorStyleProps,
    display,
    margin,
    MarginProps,
    padding,
    PaddingProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    style,
    variant,
    styles,
    Theme,
    layout,
    LayoutProps,
    typography,
    TypographyProps,
    flexbox,
    FlexboxProps,
    grid,
    GridProps,
    shadow,
    ShadowProps,
} from 'styled-system';

declare const styled: (...props: any[]) => React.ComponentType;

const boxStyle = variant({
    prop: 'boxStyle',
    key: 'box',
});

interface BoxProps
    extends SpaceProps,
        LayoutProps,
        FlexboxProps,
        PositionProps,
        BackgroundProps,
        BorderProps,
        BordersProps,
        ShadowProps,
        TypographyProps,
        ColorStyleProps,
        ColorProps {
    boxStyle?: string;
}

const boxStyles = compose(
    space,
    layout,
    typography,
    flexbox,
    border,
    background,
    color,
    display,
    background,
    borders,
    position,
    shadow,
    colorStyle,
    boxStyle,
);

const Box: React.ComponentType<BoxProps> = styled(boxStyles);

Box.defaultProps = {
    boxStyle: 'normal',
};

const Text: React.ComponentType<TypographyProps> = styled(typography);
const Flex: React.ComponentType<FlexboxProps> = styled(flexbox);
const Grid: React.ComponentType<GridProps> = styled(grid);

interface ButtonProps extends SpaceProps, ButtonStyleProps, ColorProps {}

const testButtonStyles = compose(
    buttonStyle,
    space,
    styles.textColor,
);
const TestButton: React.ComponentType<ButtonProps> = styled(testButtonStyles);

interface SpacerProps extends MarginProps, PaddingProps {}

const Spacer: React.ComponentType<SpacerProps> = styled(
    compose(
        margin,
        padding,
    ),
);

const test = () => (
    <div>
        // width: 50%
        <Box width={1 / 2} />
        // font-size: 20px (theme.fontSizes[4])
        <Box fontSize={4} />
        // margin: 16px (theme.space[2])
        <Box m={2} />
        // padding: 32px (theme.space[3])
        <Box p={3} />
        // color
        <Box color="tomato" />
        // color: #333 (theme.colors.gray[0])
        <Box color="grays.0" />
        // background color
        <Box bg="tomato" />
        // opacity
        <Box opacity={0.5} />
        // responsive width
        <Box width={[1, 1 / 2, 1 / 4]} />
        <Box width={{ sm: 1, md: 1 / 2, lg: 1 / 4 }} />
        // responsive font-size
        <Box fontSize={[2, 3, 4]} />
        <Box fontSize={{ sm: 2, md: 3, lg: 4 }} />
        // responsive margin
        <Box m={[1, 2, 3]} />
        <Box ml={[1, 2, 3]} />
        <Box mr={[1, 2, 3]} />
        <Box mt={[1, 2, 3]} />
        <Box mb={[1, 2, 3]} />
        <Box mx={[1, 2, 3]} />
        <Box my={[1, 2, 3]} />
        <Box margin={[1, 2, 3]} />
        <Box marginLeft={[1, 2, 3]} />
        <Box marginRight={[1, 2, 3]} />
        <Box marginTop={[1, 2, 3]} />
        <Box marginBottom={[1, 2, 3]} />
        <Box marginX={[1, 2, 3]} />
        <Box marginY={[1, 2, 3]} />
        // responsive padding
        <Box p={[1, 2, 3]} />
        <Box pl={[1, 2, 3]} />
        <Box pr={[1, 2, 3]} />
        <Box pt={[1, 2, 3]} />
        <Box pb={[1, 2, 3]} />
        <Box px={[1, 2, 3]} />
        <Box py={[1, 2, 3]} />
        <Box padding={[1, 2, 3]} />
        <Box paddingLeft={[1, 2, 3]} />
        <Box paddingRight={[1, 2, 3]} />
        <Box paddingTop={[1, 2, 3]} />
        <Box paddingBottom={[1, 2, 3]} />
        <Box paddingX={[1, 2, 3]} />
        <Box paddingY={[1, 2, 3]} />
        <Box p={{ sm: 1, md: 2, lg: 3 }} />
        // examples (margin prop) // sets margin value of `theme.space[2]`
        <Box m={2} />
        // sets margin value of `-1 * theme.space[2]`
        <Box m={-2} />
        // sets a margin value of `16px` since it's greater than `theme.space.length`
        <Box m={16} />
        // sets margin `'auto'`
        <Box m="auto" />
        // sets margin `8px` on all viewports and `16px` from the smallest breakpoint and up
        <Box m={[1, 2]} />
        <Box m={{ sm: 1, md: 2 }} />
        // examples // width `50%`
        <Box width={1 / 2} />
        // width `256px`
        <Box width={256} />
        // width `'2em'`
        <Box width="2em" />
        // width `100%` on all viewports and `50%` from the smallest breakpoint and up
        <Box width={[1, 1 / 2]} />
        <Box width={{ sm: 1, md: 1 / 2 }} />
        <Box boxShadow="1px 1px 1px black" />
        <Box boxShadow={{ sm: '1px 1px 1px black', md: '2px 2px 2px black' }} />
        <Box textShadow="1px 1px 1px black" />
        <Box textShadow={{ sm: '1px 1px 1px black', md: '2px 2px 2px black' }} />
        // examples // font-size of `theme.fontSizes[3]`
        <Text fontSize={3} />
        // font-size `32px`
        <Text fontSize={32} />
        // font-size `'2em'`
        <Text fontSize="2em" />
        // font-size `10px` on all viewports and `12px` from the smallest breakpoint and up
        <Text fontSize={[10, 12]} />
        <Text fontSize={{ sm: 10, md: 12 }} />
        // examples // picks the value defined in `theme.colors['blue']`
        <Box color="blue" />
        // picks up a nested color value using dot notation // `theme.colors['gray'][0]`
        <Box color="gray.0" />
        // raw CSS color value
        <Box color="#00f" />
        // fontFamily
        <Text fontFamily="mono" />
        // textAlign (responsive)
        <Text textAlign="center" />
        <Text textAlign={['center', 'left']} />
        <Text textAlign={{ sm: 'center', md: 'left' }} />
        // lineHeight
        <Text lineHeight="1.25" />
        // fontWeight
        <Text fontWeight="bold" />
        // letterSpacing
        <Text letterSpacing="0.1em" />
        // display (responsive)
        <Box display="inline-block" />
        <Box display={['block', 'inline-block']} />
        <Box display={{ sm: 'block', md: 'inline-block' }} />
        // maxWidth (responsive)
        <Box maxWidth={1024} />
        <Box maxWidth={null} />
        <Box maxWidth={[768, null, null, 1024]} />
        <Box maxWidth={{ sm: 768, lg: 1024 }} />
        // minWidth (responsive)
        <Box minWidth={128} />
        <Box minWidth={[96, 128]} />
        <Box minWidth={{ sm: 96, lg: 128 }} />
        // height (responsive)
        <Box height={64} />
        <Box height={[48, 64]} />
        <Box height={{ sm: 48, md: 64 }} />
        // maxHeight (responsive)
        <Box maxHeight={512} />
        <Box maxHeight={[384, 512]} />
        <Box maxHeight={{ sm: 384, md: 512 }} />
        // minHeight (responsive)
        <Box minHeight={512} />
        <Box minHeight={[384, 512]} />
        <Box minHeight={{ sm: 384, md: 512 }} />
        // size (responsive, width & height)
        <Box size={32} />
        <Box size={[32, 48]} />
        <Box size={{ sm: 32, md: 48 }} />
        // alignItems (responsive)
        <Flex alignItems="center" />
        <Flex alignItems={['center']} />
        <Flex alignItems={{ sm: 'center' }} />
        // alignContent (responsive)
        <Flex alignContent="center" />
        <Flex alignContent={['center']} />
        <Flex alignContent={{ sm: 'center' }} />
        // justifyContent (responsive)
        <Flex justifyContent="center" />
        <Flex justifyContent={['center']} />
        <Flex justifyContent={{ sm: 'center' }} />
        // flexWrap (responsive)
        <Flex flexWrap="wrap" />
        <Flex flexWrap={['wrap']} />
        <Flex flexWrap={{ sm: 'wrap' }} />
        // flexShrink
        <Flex flexShrink={0} />
        // flexGrow
        <Flex flexGrow={0} />
        // flexBasis
        <Flex flexBasis="auto" />
        // flexDirection (responsive)
        <Flex flexDirection="column" />
        <Flex flexDirection={['column']} />
        <Flex flexDirection={{ sm: 'column' }} />
        // justifyItems
        <Flex justifyItems="baseline" />
        <Flex justifyItems={['baseline', 'center']} />
        <Flex justifyItems={{ sm: 'baseline', md: 'center' }} />
        // gridGap
        <Grid gridGap="1px" />
        <Grid gridGap={['1', '2']} />
        <Grid gridGap={{ sm: '1', md: '2' }} />
        // gridRowGap
        <Grid gridRowGap="1px" />
        <Grid gridRowGap={['1', '2']} />
        <Grid gridRowGap={{ sm: '1', md: '2' }} />
        // gridColumnGap
        <Grid gridColumnGap="1px" />
        <Grid gridColumnGap={['1', '2']} />
        <Grid gridColumnGap={{ sm: '1', md: '2' }} />
        // gridRow
        <Grid gridRow="auto" />
        <Grid gridRow={['auto']} />
        <Grid gridRow={{ sm: 'auto' }} />
        // gridColumn
        <Grid gridColumn="auto" />
        <Grid gridColumn={['auto']} />
        <Grid gridColumn={{ sm: 'auto' }} />
        // gridAutoFlow
        <Grid gridAutoFlow="auto" />
        <Grid gridAutoFlow={['auto', '1fr']} />
        <Grid gridAutoFlow={{ sm: 'auto', md: '1fr' }} />
        // gridAutoRows
        <Grid gridAutoRows="auto" />
        <Grid gridAutoRows={['auto', '1fr']} />
        <Grid gridAutoRows={{ sm: 'auto', md: '1fr' }} />
        // gridAutoColumns
        <Grid gridAutoColumns="auto" />
        <Grid gridAutoColumns={['auto', '1fr']} />
        <Grid gridAutoColumns={{ sm: 'auto', md: '1fr' }} />
        // gridTemplateRows
        <Grid gridTemplateRows="auto" />
        <Grid gridTemplateRows={['auto', '1fr']} />
        <Grid gridTemplateRows={{ sm: 'auto', md: '1fr' }} />
        // gridTemplateColumns
        <Grid gridTemplateColumns="auto" />
        <Grid gridTemplateColumns={['auto', '1fr']} />
        <Grid gridTemplateColumns={{ sm: 'auto', md: '1fr' }} />
        // gridTemplateAreas
        <Grid gridTemplateAreas="a a a" />
        <Grid gridTemplateAreas={['a a a', 'b b b']} />
        <Grid gridTemplateAreas={{ sm: 'a a a', md: 'b b b' }} />
        // flex (responsive)
        <Box flex="1 1 auto" />
        <Box flex={['1 1 auto']} />
        <Box flex={{ sm: '1 1 auto' }} />
        // justifySelf (responsive)
        <Box justifySelf="center" />
        <Box justifySelf={['center']} />
        <Box justifySelf={{ sm: 'center' }} />
        // alignSelf (responsive)
        <Box alignSelf="center" />
        <Box alignSelf={['center']} />
        <Box alignSelf={{ sm: 'center' }} />
        <Box border="1px solid" />
        <Box border={{ sm: '1px solid' }} />
        <Box borderWidth={15} />
        <Box borderWidth="10px" />
        <Box borderWidth={{ sm: 15 }} />
        <Box borderColor="blue" />
        <Box borderColor={{ sm: 'blue' }} />
        <Box borderRadius={4} />
        <Box borderRadius="1rem" />
        <Box borderRadius={{ sm: 4 }} />
        <Box borderTopLeftRadius={4} />
        <Box borderTopLeftRadius={4} />
        <Box borderTopRightRadius={{ sm: 5, md: '10px' }} />
        <Box borderBottomLeftRadius="250px 100px" />
        <Box borderBottomRightRadius="50%" />
        <Box borderTop="1px solid" />
        <Box borderTopStyle="dashed" />
        <Box borderTopWidth="10rem" />
        <Box borderTopColor="transparent" />
        <Box borderRight="1px solid" />
        <Box borderRightStyle={{ sm: 'none' }} />
        <Box borderRightWidth={{ sm: 5, md: 10 }} />
        <Box borderRightColor={{ sm: 'blue', md: 'green' }} />
        <Box borderBottom="1px solid" />
        <Box borderBottomStyle="solid" />
        <Box borderBottomWidth={3} />
        <Box borderBottomColor="#09c" />
        <Box borderLeft="1px solid" />
        <Box borderLeftStyle="inset" />
        <Box borderLeftWidth="10px" />
        <Box borderLeftColor="rgba(0,0,0,0.25)" />
        // position (responsive)
        <Box position="absolute" />
        <Box position={['absolute']} />
        <Box position={{ sm: 'absolute' }} />
        // zIndex
        <Box zIndex={2} />
        // top, right, bottom, left (responsive)
        <Box top="0" right="0" bottom="0" left="0" />
        <Box top={['0']} right={['0']} bottom={['0']} left={['0']} />
        <Box top={{ sm: '0' }} right={{ sm: '0' }} bottom={{ sm: '0' }} left={{ sm: '0' }} />
        // boxShadow
        <Box boxShadow={1} />
        // backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat
        <Box
            backgroundImage="kitten.png"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="repeat-x"
        />
        // verticalAlign
        <Box verticalAlign="middle" />
        // borders
        <Box border="1px solid red" />
        <Box borderTop="1px solid red" />
        <Box borderRight="1px solid red" />
        <Box borderBottom="1px solid red" />
        <Box borderLeft="1px solid red" />
        <Box borderX="1px solid red" />
        <Box borderY="1px solid red" />
        // borders (responsive)
        <Box border={['1px solid red', '2px solid red']} />
        <Box borderTop={['1px solid red', '2px solid red']} />
        <Box borderRight={['1px solid red', '2px solid red']} />
        <Box borderBottom={['1px solid red', '2px solid red']} />
        <Box borderLeft={['1px solid red', '2px solid red']} />
        <Box borderX={['1px solid red', '2px solid red']} />
        <Box borderY={['1px solid red', '2px solid red']} />
        <TestButton variant="primary" m={2} color="tomato" />
        <Spacer m={[1, 2, 3]} p={[1, 2, 3]} />
        <Spacer ml={[1, 2, 3]} pl={[1, 2, 3]} />
        <Spacer mr={[1, 2, 3]} pr={[1, 2, 3]} />
        <Spacer mt={[1, 2, 3]} pt={[1, 2, 3]} />
        <Spacer mb={[1, 2, 3]} pb={[1, 2, 3]} />
        <Spacer mx={[1, 2, 3]} px={[1, 2, 3]} />
        <Spacer my={[1, 2, 3]} py={[1, 2, 3]} />
        <Spacer margin={[1, 2, 3]} padding={[1, 2, 3]} />
        <Spacer marginLeft={[1, 2, 3]} paddingLeft={[1, 2, 3]} />
        <Spacer marginRight={[1, 2, 3]} paddingRight={[1, 2, 3]} />
        <Spacer marginTop={[1, 2, 3]} paddingTop={[1, 2, 3]} />
        <Spacer marginBottom={[1, 2, 3]} paddingBottom={[1, 2, 3]} />
        <Spacer marginX={[1, 2, 3]} paddingX={[1, 2, 3]} />
        <Spacer marginY={[1, 2, 3]} paddingY={[1, 2, 3]} />
        // overflow
        <Box overflow="hidden" />
        <Box overflowX="auto" />
        <Box overflowY="scroll" />
    </div>
);

// Test the `Theme` validates as per the Theme Spec:
// https://styled-system.com/theme-specification
// https://system-ui.com/theme/
export const themeA: Theme = {
    borders: ['1px solid red', '2px solid red'],
    borderStyles: {
        primary: {
            border: '3px solid red',
        },
        disabled: {
            border: '1px solid gray',
        },
    },
    borderWidths: [0, 1, 3],
    buttons: {
        primary: {
            color: 'blue',
        },
        danger: {
            color: 'red',
        },
    },
    breakpoints: ['40em', '52em', '64em'],
    colors: {
        black: 'hsl(0, 0%, 0%)',
        blacks: ['hsla(0, 0%, 0%, .9)', 'hsla(0, 0%, 0%, .1)'],
    },
    colorStyles: {
        warning: {
            color: 'black',
            backgroundColor: 'orange',
        },
    },
    fonts: {
        normal: 'apple-system, BlinkMacSystemFont, sans-serif',
        mono: 'Consolas, Courier, monospace',
    },
    fontWeights: [100, 400, 700],
    fontSizes: [12, 14, 16],
    letterSpacings: [-1, 1, 3],
    lineHeights: [1, 1.25, 2],
    radii: [0, 3, 9],
    shadows: ['1 1 3px -1 gray', '1 2 6px -1 gray'],
    sizes: [0, '33%', '50%', '100%'],
    space: [12, 14, 16],
    textStyles: {
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
        },
    },
    zIndices: [-1, 0, 1, 9999],
};

// Some properties can be formatted differently
export const themeB: Theme = {
    space: ['12px', '14px', '16px'],
    fontSizes: ['12px', '14px', '16px'],
    lineHeights: ['14px', '14.5px', '16.5px'],
};

export const themeC: Theme = {
    space: {
        small: 12,
        medium: '14px',
    },
    fontSizes: {
        small: 12,
        medium: '14px',
    },
};

// Test that the style definition is correct.
// https://github.com/styled-system/styled-system/blob/master/packages/styled-system/src/index.js#L108
const customFontSize = style({
    prop: 'fontSize',
    cssProperty: 'fontSize',
    alias: 'fs',
    key: 'fontSizes',
    transformValue: (n, scale) => `${get(scale, n)}px`,
    scale: [8, 16, 32],
});

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
    customFontSize,
    customFontSize,
);

const centerWithGenerics = style<boolean>({
    prop: 'center',
    cssProperty: 'justify-content',
    transformValue: shouldCenter => (shouldCenter ? 'center' : 'flex-start'),
});

const buttonSizes = {
    sm: '8px',
    md: '12px',
    lg: '24px',
};

const buttonSizeWithGeneric = style<keyof typeof buttonSizes, typeof buttonSizes>({
    prop: 'size',
    cssProperty: 'font-size',
    transformValue: (size, sizes) => sizes && sizes[size],
});

// Test that we can read `propNames` from `styleFn`
const spacePropNames = space.propNames;
