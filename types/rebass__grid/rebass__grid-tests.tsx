import * as React from "react";
import { Flex, Box } from "@rebass/grid";
import { css } from "styled-components";
import * as Emotion from "@rebass/grid/emotion";

const Layout = () => (
    <Flex m={4}>
        <Box px={3} py={2} />
    </Flex>
);

const cssTest = <Flex css='background: transparent;'><Box css={css`${{color: 'inherit'}}`}/></Flex>;

const EmotionLayout = () => (
    <Emotion.Flex m={4}>
        <Emotion.Box px={3} py={2} />
    </Emotion.Flex>
);

const emotionCssTest = <Emotion.Flex css='background: transparent;'><Emotion.Box css={css`${{color: 'inherit'}}`}/></Emotion.Flex>;
