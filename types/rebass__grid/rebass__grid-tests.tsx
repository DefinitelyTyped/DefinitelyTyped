import * as React from "react";
import { Flex, Box } from "@rebass/grid";
import * as Emotion from "@rebass/grid/emotion";

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
        // examples // picks the value defined in `theme.colors['blue']`
        <Box color="blue" />
        // picks up a nested color value using dot notation //
        `theme.colors['gray'][0]`
        <Box color="gray.0" />
        // raw CSS color value
        <Box color="#f00" />
        // alignItems (responsive)
        <Flex alignItems="center" />
        <Flex alignItems={["center"]} />
        <Flex alignItems={{ sm: "center" }} />
        // justifyContent (responsive)
        <Flex justifyContent="center" />
        <Flex justifyContent={["center"]} />
        <Flex justifyContent={{ sm: "center" }} />
        // flexWrap (responsive)
        <Flex flexWrap="wrap" />
        <Flex flexWrap={["wrap"]} />
        <Flex flexWrap={{ sm: "wrap" }} />
        // flexDirection (responsive)
        <Flex flexDirection="column" />
        <Flex flexDirection={["column"]} />
        <Flex flexDirection={{ sm: "column" }} />
        // flex (responsive)
        <Box flex="1 1 auto" />
        <Box flex={["1 1 auto"]} />
        <Box flex={{ sm: "1 1 auto" }} />
        // alignSelf (responsive)
        <Box alignSelf="center" />
        <Box alignSelf={["center"]} />
        <Box alignSelf={{ sm: "center" }} />
        // as
        <Box as="span" />
        <Box as={Layout} />
    </div>
);

const Layout = () => (
    <Flex m={4}>
        <Box px={3} py={2} />
    </Flex>
);

const EmotionLayout = () => (
    <Emotion.Flex m={4}>
        <Emotion.Box px={3} py={2} />
    </Emotion.Flex>
);
