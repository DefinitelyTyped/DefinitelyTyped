import * as React from "react";
import {
    alignContent,
    AlignContentProps,
    alignItems,
    AlignItemsProps,
    alignSelf,
    AlignSelfProps,
    background,
    backgroundColor,
    BackgroundColorProps,
    backgroundImage,
    BackgroundImageProps,
    backgroundPosition,
    BackgroundPositionProps,
    BackgroundProps,
    backgroundRepeat,
    BackgroundRepeatProps,
    backgroundSize,
    BackgroundSizeProps,
    border,
    borderBottom,
    borderColor,
    BorderColorProps,
    borderLeft,
    BorderProps,
    borderRadius,
    BorderRadiusProps,
    borderRight,
    borders,
    BordersProps,
    borderTop,
    bottom,
    BottomProps,
    boxShadow,
    BoxShadowProps,
    buttonStyle,
    ButtonStyleProps,
    color,
    ColorProps,
    colorStyle,
    ColorStyleProps,
    compose,
    display,
    DisplayProps,
    flex,
    flexBasis,
    FlexBasisProps,
    flexDirection,
    FlexDirectionProps,
    FlexProps,
    flexWrap,
    FlexWrapProps,
    fontFamily,
    FontFamilyProps,
    fontSize,
    FontSizeProps,
    fontWeight,
    FontWeightProps,
    get,
    gridAutoColumns,
    GridAutoColumnsProps,
    gridAutoFlow,
    GridAutoFlowProps,
    gridAutoRows,
    GridAutoRowsProps,
    gridColumn,
    gridColumnGap,
    GridColumnGapProps,
    GridColumnProps,
    gridGap,
    GridGapProps,
    gridRow,
    gridRowGap,
    GridRowGapProps,
    GridRowProps,
    gridTemplateColumns,
    GridTemplateColumnsProps,
    gridTemplateRows,
    GridTemplateRowsProps,
    height,
    HeightProps,
    is,
    justifyContent,
    JustifyContentProps,
    justifyItems,
    JustifyItemsProps,
    justifySelf,
    JustifySelfProps,
    left,
    LeftProps,
    letterSpacing,
    LetterSpacingProps,
    lineHeight,
    LineHeightProps,
    mapProps,
    margin,
    marginBottom,
    marginLeft,
    MarginProps,
    marginRight,
    marginTop,
    maxHeight,
    MaxHeightProps,
    maxWidth,
    MaxWidthProps,
    minHeight,
    MinHeightProps,
    minWidth,
    MinWidthProps,
    padding,
    PaddingProps,
    position,
    PositionProps,
    right,
    RightProps,
    size,
    SizeProps,
    space,
    SpaceProps,
    style,
    textAlign,
    TextAlignProps,
    TextColorProps,
    textStyle,
    TextStyleProps,
    top,
    TopProps,
    variant,
    VariantArgs,
    verticalAlign,
    VerticalAlignProps,
    width,
    WidthProps,
    zIndex,
    ZIndexProps,
    px,
    createMediaQuery,
    styles,
    themeGet,
    Theme,
} from "styled-system";

// tslint:disable-next-line:strict-export-declare-modifiers
declare const styled: (...props: any[]) => React.ComponentType;

const breakpoints = [480, 960];

const breakpointsPx = breakpoints.map(px);

const mediaQueries = breakpoints.map(createMediaQuery);

const boxStyle = variant({
    prop: 'boxStyle',
    key: 'box',
});

interface BoxProps
    extends AlignSelfProps,
        BackgroundColorProps,
        BackgroundImageProps,
        BackgroundPositionProps,
        BackgroundProps,
        BackgroundRepeatProps,
        BackgroundSizeProps,
        BorderColorProps,
        BorderProps,
        BordersProps,
        BottomProps,
        BoxShadowProps,
        ColorProps,
        ColorStyleProps,
        DisplayProps,
        FlexProps,
        FontSizeProps,
        HeightProps,
        JustifySelfProps,
        LeftProps,
        MaxHeightProps,
        MaxWidthProps,
        MinHeightProps,
        MinWidthProps,
        PositionProps,
        RightProps,
        SizeProps,
        SpaceProps,
        TextStyleProps,
        TopProps,
        WidthProps,
        ZIndexProps,
        VerticalAlignProps {
            boxStyle?: string;
        }
const Box: React.ComponentType<BoxProps> = styled`
  border-radius: ${themeGet("radii.small", "4px")};
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${display}
  ${background}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${size}
  ${borderColor}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${borders}
  ${position}
  ${zIndex}
  ${top}
  ${bottom}
  ${left}
  ${right}
  ${boxShadow}
  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${backgroundSize}
  ${alignContent}
  ${alignItems}
  ${backgroundColor}
  ${backgroundImage}
  ${textStyle}
  ${colorStyle}
  ${verticalAlign}
`;

Box.defaultProps = {
    boxStyle: 'normal',
};

interface TextProps
    extends FontSizeProps,
        FontFamilyProps,
        TextAlignProps,
        LineHeightProps,
        FontWeightProps,
        LetterSpacingProps {}
const Text: React.ComponentType<TextProps> = styled`
    ${fontSize};
    ${fontFamily};
    ${textAlign};
    ${lineHeight};
    ${fontWeight};
    ${letterSpacing};
`;

interface FlexComponentProps
    extends AlignItemsProps,
        AlignContentProps,
        JustifyContentProps,
        FlexWrapProps,
        FlexBasisProps,
        FlexDirectionProps,
        JustifyItemsProps {}
const Flex: React.ComponentType<FlexComponentProps> = styled`
    ${alignItems};
    ${alignContent};
    ${justifyContent};
    ${flexWrap};
    ${flexBasis};
    ${flexDirection};
    ${justifyItems};
`;

interface GridComponentProps
    extends GridGapProps,
        GridRowGapProps,
        GridColumnGapProps,
        GridRowProps,
        GridColumnProps,
        GridAutoFlowProps,
        GridAutoColumnsProps,
        GridAutoRowsProps,
        GridTemplateRowsProps,
        GridTemplateColumnsProps {}
const Grid: React.ComponentType<GridComponentProps> = styled`
    ${gridGap};
    ${gridRowGap};
    ${gridColumnGap};
    ${gridRow};
    ${gridColumn};
    ${gridAutoFlow};
    ${gridAutoRows};
    ${gridAutoColumns};
    ${gridTemplateRows};
    ${gridTemplateColumns};
`;

interface ButtonProps
    extends SpaceProps,
        ButtonStyleProps,
        TextColorProps {}

const TestButton: React.ComponentType<ButtonProps> = styled`
    ${buttonStyle}
    ${space}
    ${styles.textColor}
`;

interface SpacerProps
    extends MarginProps,
        PaddingProps {}

const Spacer: React.ComponentType<SpacerProps> = styled`
    ${margin};
    ${padding};
`;

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
        <Box p={{ sm: 1, md: 2, lg: 3 }} />
        // examples (margin prop) // sets margin value of `theme.space[2]`
        <Box m={2} />
        // sets margin value of `-1 * theme.space[2]`
        <Box m={-2} />
        // sets a margin value of `16px` since it's greater than
        `theme.space.length`
        <Box m={16} />
        // sets margin `'auto'`
        <Box m="auto" />
        // sets margin `8px` on all viewports and `16px` from the smallest
        breakpoint and up
        <Box m={[1, 2]} />
        <Box m={{ sm: 1, md: 2 }} />
        // examples // width `50%`
        <Box width={1 / 2} />
        // width `256px`
        <Box width={256} />
        // width `'2em'`
        <Box width="2em" />
        // width `100%` on all viewports and `50%` from the smallest breakpoint
        and up
        <Box width={[1, 1 / 2]} />
        <Box width={{ sm: 1, md: 1 / 2 }} />
        // examples // font-size of `theme.fontSizes[3]`
        <Text fontSize={3} />
        // font-size `32px`
        <Text fontSize={32} />
        // font-size `'2em'`
        <Text fontSize="2em" />
        // font-size `10px` on all viewports and `12px` from the smallest
        breakpoint and up
        <Text fontSize={[10, 12]} />
        <Text fontSize={{ sm: 10, md: 12 }} />
        // examples // picks the value defined in `theme.colors['blue']`
        <Box color="blue" />
        // picks up a nested color value using dot notation //
        `theme.colors['gray'][0]`
        <Box color="gray.0" />
        // raw CSS color value
        <Box color="#f00" />
        // fontFamily
        <Text fontFamily="mono" />
        // textAlign (responsive)
        <Text textAlign="center" />
        <Text textAlign={["center", "left"]} />
        <Text textAlign={{ sm: "center", md: "left" }} />
        // lineHeight
        <Text lineHeight="1.25" />
        // fontWeight
        <Text fontWeight="bold" />
        // letterSpacing
        <Text letterSpacing="0.1em" />
        // display (responsive)
        <Box display="inline-block" />
        <Box display={["block", "inline-block"]} />
        <Box display={{ sm: "block", md: "inline-block" }} />
        // maxWidth (responsive)
        <Box maxWidth={1024} />
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
        <Flex alignItems={["center"]} />
        <Flex alignItems={{ sm: "center" }} />
        // alignContent (responsive)
        <Flex alignContent="center" />
        <Flex alignContent={["center"]} />
        <Flex alignContent={{ sm: "center" }} />
        // justifyContent (responsive)
        <Flex justifyContent="center" />
        <Flex justifyContent={["center"]} />
        <Flex justifyContent={{ sm: "center" }} />
        // flexWrap (responsive)
        <Flex flexWrap="wrap" />
        <Flex flexWrap={["wrap"]} />
        <Flex flexWrap={{ sm: "wrap" }} />
        // flexBasis (responsive)
        <Flex flexBasis="auto" />
        // flexDirection (responsive)
        <Flex flexDirection="column" />
        <Flex flexDirection={["column"]} />
        <Flex flexDirection={{ sm: "column" }} />
        // justifyItems
        <Flex justifyItems="baseline" />
        <Flex justifyItems={["baseline", "center"]} />
        <Flex justifyItems={{ sm: "baseline", md: "center" }} />
        // gridGap
        <Grid gridGap="1px" />
        <Grid gridGap={["1", "2"]} />
        <Grid gridGap={{ sm: "1", md: "2" }} />
        // gridRowGap
        <Grid gridRowGap="1px" />
        <Grid gridRowGap={["1", "2"]} />
        <Grid gridRowGap={{ sm: "1", md: "2" }} />
        // gridColumnGap
        <Grid gridColumnGap="1px" />
        <Grid gridColumnGap={["1", "2"]} />
        <Grid gridColumnGap={{ sm: "1", md: "2" }} />
        // gridRow
        <Grid gridRow="auto" />
        <Grid gridRow={["auto"]} />
        <Grid gridRow={{ sm: "auto" }} />
        // gridColumn
        <Grid gridColumn="auto" />
        <Grid gridColumn={["auto"]} />
        <Grid gridColumn={{ sm: "auto" }} />
        // gridAutoFlow
        <Grid gridAutoFlow="auto" />
        <Grid gridAutoFlow={["auto", "1fr"]} />
        <Grid gridAutoFlow={{ sm: "auto", md: "1fr" }} />
        // gridAutoRows
        <Grid gridAutoRows="auto" />
        <Grid gridAutoRows={["auto", "1fr"]} />
        <Grid gridAutoRows={{ sm: "auto", md: "1fr" }} />
        // gridAutoColumns
        <Grid gridAutoColumns="auto" />
        <Grid gridAutoColumns={["auto", "1fr"]} />
        <Grid gridAutoColumns={{ sm: "auto", md: "1fr" }} />
        // gridTemplateRows
        <Grid gridTemplateRows="auto" />
        <Grid gridTemplateRows={["auto", "1fr"]} />
        <Grid gridTemplateRows={{ sm: "auto", md: "1fr" }} />
        // gridTemplateColumns
        <Grid gridTemplateColumns="auto" />
        <Grid gridTemplateColumns={["auto", "1fr"]} />
        <Grid gridTemplateColumns={{ sm: "auto", md: "1fr" }} />
        // flex (responsive)
        <Box flex="1 1 auto" />
        <Box flex={["1 1 auto"]} />
        <Box flex={{ sm: "1 1 auto" }} />
        // justifySelf (responsive)
        <Box justifySelf="center" />
        <Box justifySelf={["center"]} />
        <Box justifySelf={{ sm: "center" }} />
        // alignSelf (responsive)
        <Box alignSelf="center" />
        <Box alignSelf={["center"]} />
        <Box alignSelf={{ sm: "center" }} />
        <Box border="1px solid" />
        <Box borderTop="1px solid" />
        <Box borderRight="1px solid" />
        <Box borderBottom="1px solid" />
        <Box borderLeft="1px solid" />
        // borderColor
        <Box borderColor="blue" />
        // borderRadius
        <Box borderRadius={4} />
        // position (responsive)
        <Box position="absolute" />
        <Box position={["absolute"]} />
        <Box position={{ sm: "absolute" }} />
        // zIndex
        <Box zIndex={2} />
        // top, right, bottom, left (responsive)
        <Box top="0" right="0" bottom="0" left="0" />
        <Box top={["0"]} right={["0"]} bottom={["0"]} left={["0"]} />
        <Box
            top={{ sm: "0" }}
            right={{ sm: "0" }}
            bottom={{ sm: "0" }}
            left={{ sm: "0" }}
        />
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
        // borders (responsive)
        <Box border={["1px solid red", "2px solid red"]} />
        <Box borderTop={["1px solid red", "2px solid red"]} />
        <Box borderRight={["1px solid red", "2px solid red"]} />
        <Box borderBottom={["1px solid red", "2px solid red"]} />
        <Box borderLeft={["1px solid red", "2px solid red"]} />

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
    </div>
);

// Test the `Theme` validates as per the Theme Spec:
// https://styled-system.com/theme-specification
// https://system-ui.com/theme/
export const themeA: Theme = {
    borders: ['1px solid red', '2px solid red'],
    borderStyles: {
        primary: {
            border: '3px solid red'
        },
        disabled: {
            border: '1px solid gray'
        },
    },
    borderWidths: [0, 1, 3],
    buttons: {
        primary: {
            color: 'blue'
        },
        danger: {
            color: 'red'
        }
    },
    breakpoints: ['40em', '52em', '64em'],
    colors: {
        black: 'hsl(0, 0%, 0%)',
        blacks: [
          'hsla(0, 0%, 0%, .9)',
          'hsla(0, 0%, 0%, .1)',
        ]
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
    heights: [0, '50vh', '100vh'],
    letterSpacings: [-1, 1, 3],
    lineHeights: [1, 1.25, 2],
    maxHeights: ['50vh', '100vh'],
    maxWidths: ['50%', '100%'],
    minHeights: ['50vh', '100vh'],
    minWidths: ['50%', '100%'],
    opacity: [0, 0.25, 0.5, 0.75],
    radii: [0, 3, 9],
    shadows: ['1 1 3px -1 gray', '1 2 6px -1 gray'],
    sizes: [0, '33%', '50%', '100%'],
    space: [12, 14, 16],
    textStyles: {
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
        }
    },
    zIndices: [-1, 0, 1, 9999]
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

// Test that the mapProps definition is correct.
// https://github.com/styled-system/styled-system/blob/master/src/index.js#L149
const margins = mapProps(props => ({
    ...props,
    mt: is(props.my) ? props.my : props.mt,
    mb: is(props.my) ? props.my : props.mb,
    ml: is(props.mx) ? props.mx : props.ml,
    mr: is(props.mx) ? props.mx : props.mr,
}))(
    compose(
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight
    )
  );

// Test that the style definition is correct.
// https://github.com/styled-system/styled-system/blob/master/src/index.js#L62
const customFontSize = style({
    prop: 'fontSize',
    cssProperty: 'fontSize',
    alias: 'fs',
    key: 'fontSizes',
    transformValue: (n, scale) => px(get(scale, n)),
    scale: [8, 16, 32]
});

const centerWithGenerics = style<boolean>({
    prop: 'center',
    cssProperty: 'justify-content',
    transformValue: shouldCenter => shouldCenter ? 'center' : 'flex-start'
});

const buttonSizes = {
    sm: '8px',
    md: '12px',
    lg: '24px',
};

const buttonSizeWithGeneric = style<keyof typeof buttonSizes, typeof buttonSizes>({
    prop: 'size',
    cssProperty: 'font-size',
    transformValue: (size, sizes) => sizes && sizes[size]
});

// All Style Functions contain `propTypes`
export const alignContentPropTypes = alignContent.propTypes;
export const alignItemsPropTypes = alignItems.propTypes;
export const alignSelfPropTypes = alignSelf.propTypes;
export const backgroundPropTypes = background.propTypes;
export const backgroundColorPropTypes = backgroundColor.propTypes;
export const backgroundImagePropTypes = backgroundImage.propTypes;
export const backgroundPositionPropTypes = backgroundPosition.propTypes;
export const backgroundRepeatPropTypes = backgroundRepeat.propTypes;
export const backgroundSizePropTypes = backgroundSize.propTypes;
export const borderPropTypes = border.propTypes;
export const borderBottomPropTypes = borderBottom.propTypes;
export const borderColorPropTypes = borderColor.propTypes;
export const borderLeftPropTypes = borderLeft.propTypes;
export const borderRadiusPropTypes = borderRadius.propTypes;
export const borderRightPropTypes = borderRight.propTypes;
export const bordersPropTypes = borders.propTypes;
export const borderTopPropTypes = borderTop.propTypes;
export const bottomPropTypes = bottom.propTypes;
export const boxShadowPropTypes = boxShadow.propTypes;
export const buttonStylePropTypes = buttonStyle.propTypes;
export const colorPropTypes = color.propTypes;
export const colorStylePropTypes = colorStyle.propTypes;
export const displayPropTypes = display.propTypes;
export const flexPropTypes = flex.propTypes;
export const flexBasisPropTypes = flexBasis.propTypes;
export const flexDirectionPropTypes = flexDirection.propTypes;
export const flexWrapPropTypes = flexWrap.propTypes;
export const fontFamilyPropTypes = fontFamily.propTypes;
export const fontSizePropTypes = fontSize.propTypes;
export const fontWeightPropTypes = fontWeight.propTypes;
export const gridAutoColumnsPropTypes = gridAutoColumns.propTypes;
export const gridAutoFlowPropTypes = gridAutoFlow.propTypes;
export const gridAutoRowsPropTypes = gridAutoRows.propTypes;
export const gridColumnPropTypes = gridColumn.propTypes;
export const gridColumnGapPropTypes = gridColumnGap.propTypes;
export const gridGapPropTypes = gridGap.propTypes;
export const gridRowPropTypes = gridRow.propTypes;
export const gridRowGapPropTypes = gridRowGap.propTypes;
export const gridTemplateColumnsPropTypes = gridTemplateColumns.propTypes;
export const gridTemplateRowsPropTypes = gridTemplateRows.propTypes;
export const heightPropTypes = height.propTypes;
export const justifyContentPropTypes = justifyContent.propTypes;
export const justifyItemsPropTypes = justifyItems.propTypes;
export const justifySelfPropTypes = justifySelf.propTypes;
export const leftPropTypes = left.propTypes;
export const letterSpacingPropTypes = letterSpacing.propTypes;
export const lineHeightPropTypes = lineHeight.propTypes;
export const marginPropTypes = margin.propTypes;
export const maxHeightPropTypes = maxHeight.propTypes;
export const maxWidthPropTypes = maxWidth.propTypes;
export const minHeightPropTypes = minHeight.propTypes;
export const minWidthPropTypes = minWidth.propTypes;
export const paddingPropTypes = padding.propTypes;
export const positionPropTypes = position.propTypes;
export const rightPropTypes = right.propTypes;
export const sizePropTypes = size.propTypes;
export const spacePropTypes = space.propTypes;
export const textAlignPropTypes = textAlign.propTypes;
export const textStylePropTypes = textStyle.propTypes;
export const topPropTypes = top.propTypes;
export const verticalAlignPropTypes = verticalAlign.propTypes;
export const widthPropTypes = width.propTypes;
export const zIndexPropTypes = zIndex.propTypes;
