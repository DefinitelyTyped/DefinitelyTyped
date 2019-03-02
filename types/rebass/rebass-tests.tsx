import * as React from "react";
import styled from "styled-components";
import { Box, Flex, Text, Heading, Button, Link, Image, Card } from "rebass";

const CustomComponent: React.FunctionComponent = ({ children }) => {
    return <div>{children}</div>;
};

const ExtendedBox = styled(Box)`
    color: red;
`;

ExtendedBox.defaultProps = {
    p: 3
};

() => (
    <Box width={1} css={{ height: "100vh" }} py={[1, 2, 3]} ml="1em">
        <Flex width={1} alignItems="center" justifyContent="center">
            <Heading fontSize={5} fontWeight="bold">
                Hi, I'm a heading.
            </Heading>
            <Text as="p" fontSize={3} lineHeight="1em" letterSpacing="1rem">
                Hi, I'm text.
            </Text>
            <Card
                fontSize={6}
                width={[1, 1, 1 / 2]}
                p={5}
                my={5}
                bg="#f6f6ff"
                borderRadius={8}
                boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
            >
                Card
            </Card>
            <Image
                width={[1, 1, 1 / 2]}
                src="https://source.unsplash.com/random/1280x720"
                borderRadius="1em"
            />
            <Link href="https://rebassjs.org" title="Rebass" target="_blank">
                Link
            </Link>
            <Button bg="magenta" border="1em" borderRadius="1em">
                Button
            </Button>
            <Box as={CustomComponent} bg="red">
                CustomComponent
            </Box>
            <ExtendedBox m={2}>ExtendedBox</ExtendedBox>
        </Flex>
    </Box>
);
