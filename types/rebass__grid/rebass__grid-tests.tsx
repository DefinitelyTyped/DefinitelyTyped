import * as React from "react";
import { Flex, Box } from "@rebass/grid";
import { css } from "styled-components";

const Layout = () => (
    <Flex m={4}>
        <Box px={3} py={2} />
    </Flex>
);

const cssTest = <Flex css='background: transparent;'><Box css={css`${{color: 'inherit'}}`}/></Flex>;
