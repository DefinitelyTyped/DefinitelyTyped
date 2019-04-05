import * as React from "react";
import {
    themeGet,
    space,
    width,
    fontSize,
    color,
    fontFamily,
    display,
    SpaceProps,
    WidthProps,
    ColorProps,
    TextColorProps,
    DisplayProps,
    FontSizeProps,
    FontFamilyProps,
    textAlign,
    TextAlignProps,
    background,
    BackgroundProps,
    maxWidth,
    MaxWidthProps,
    lineHeight,
    LineHeightProps,
    FontWeightProps,
    fontWeight,
    letterSpacing,
    LetterSpacingProps,
    minWidth,
    MinWidthProps,
    HeightProps,
    height,
    MaxHeightProps,
    maxHeight,
    minHeight,
    MinHeightProps,
    size,
    SizeProps,
    RatioProps,
    ratio,
    alignItems,
    AlignItemsProps,
    AlignContentProps,
    alignContent,
    justifyContent,
    JustifyContentProps,
    justifyItems,
    JustifyItemsProps,
    FlexWrapProps,
    flexWrap,
    flexBasis,
    FlexBasisProps,
    borderColor,
    BorderColorProps,
    flexDirection,
    FlexDirectionProps,
    flex,
    FlexProps,
    justifySelf,
    JustifySelfProps,
    alignSelf,
    AlignSelfProps,
    borders,
    BordersProps,
    borderRadius,
    BorderRadiusProps,
    position,
    PositionProps,
    zIndex,
    ZIndexProps,
    top,
    bottom,
    left,
    right,
    TopProps,
    BottomProps,
    LeftProps,
    RightProps,
    boxShadow,
    BoxShadowProps,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    BackgroundImageProps,
    BackgroundPositionProps,
    BackgroundRepeatProps,
    BackgroundSizeProps,
    GridGapProps,
    GridRowGapProps,
    GridColumnGapProps,
    GridRowProps,
    GridColumnProps,
    gridGap,
    gridRowGap,
    gridColumnGap,
    gridRow,
    gridColumn,
    GridAutoFlowProps,
    GridAutoColumnsProps,
    GridAutoRowsProps,
    GridTemplatesRowsProps,
    GridTemplatesColumnsProps,
    gridAutoFlow,
    gridAutoRows,
    gridAutoColumns,
    gridTemplateColumns,
    gridTemplateRows,
    bgColor,
    BgColorProps,
    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    BorderProps,
    textStyle,
    colorStyle,
    buttonStyle,
    variant,
    mixed,
    ColorStyleProps,
    TextStyleProps,
    VariantArgs,
    ButtonStyleProps,
    MixedProps,
    VerticalAlignProps,
    verticalAlign,
    px,
    createMediaQuery,
    styles
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
    extends SpaceProps,
        WidthProps,
        FontSizeProps,
        ColorProps,
        DisplayProps,
        BackgroundProps,
        BgColorProps,
        MaxWidthProps,
        MinWidthProps,
        HeightProps,
        MaxHeightProps,
        MinHeightProps,
        SizeProps,
        RatioProps,
        BorderColorProps,
        FlexProps,
        JustifySelfProps,
        AlignSelfProps,
        BorderProps,
        BordersProps,
        BorderRadiusProps,
        PositionProps,
        ZIndexProps,
        TopProps,
        BottomProps,
        LeftProps,
        RightProps,
        BoxShadowProps,
        BackgroundImageProps,
        BackgroundPositionProps,
        BackgroundRepeatProps,
        BackgroundSizeProps,
        ColorStyleProps,
        TextStyleProps,
        MixedProps,
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
  ${ratio}
  ${borderColor}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${border}
  ${borders}
  ${borderTop}
  ${borderRight}
  ${borderBottom}
  ${borderLeft}
  ${borderRadius}
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
  ${bgColor}
  ${backgroundImage}
  ${textStyle}
  ${colorStyle}
  ${mixed}
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
        GridTemplatesRowsProps,
        GridTemplatesColumnsProps {}
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
        // ratio (height: 0 & paddingBottom)
        <Box ratio={3 / 4} />
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

        <TestButton variant="primary" m={2} color="tomato" />
    </div>
);
