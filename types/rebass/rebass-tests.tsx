import * as React from 'react';
import styled, { css } from 'styled-components';
import { Box, Flex, Text, Heading, Button, Link, Image, Card, BoxProps } from 'rebass';
import { Box as StyledBox } from 'rebass/styled-components';
import 'styled-components/macro';

const CustomComponent: React.FunctionComponent = ({ children }) => {
    return <div>{children}</div>;
};

const ExtendedBox = styled(Box)`
    color: red;
`;

ExtendedBox.defaultProps = {
    p: 3,
};

const RefForwardingBox = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
    <ExtendedBox ref={ref} {...props} />
));

const boxCss = css`
    background: purple;
    color: white;
`;

const CssBox = () => <Box css={boxCss} />;

const VariantBox = () => <Box tx="specialBoxes" />;

export default () => (
    <Box width={1} css={{ height: '100vh' }} py={[1, 2, 3]} ml="1em" display="block">
        <Flex width={1} alignItems="center" justifyContent="center">
            <Heading fontSize={5} fontWeight="bold">
                Hi, I'm a heading.
            </Heading>
            <Text as="p" fontSize={3} lineHeight="1em" letterSpacing="1rem">
                Hi, I'm text.
            </Text>
            <Card
                sx={{
                    borderRadius: 8,
                    boxShadow: '0 2px 16px rgba(0, 0, 0, 0.25)',
                    bg: '#f6f6ff',
                }}
                fontSize={6}
                width={[1, 1, 1 / 2]}
                p={5}
                my={5}
            >
                Card
            </Card>
            <Image
                width={[1, 1, 1 / 2]}
                src="https://source.unsplash.com/random/1280x720"
                sx={{
                    borderRadius: '1em',
                }}
            />
            <Link href="https://rebassjs.org" title="Rebass" target="_blank">
                Link
            </Link>
            <Button
                sx={{
                    bg: 'magenta',
                    border: '1em',
                    borderRadius: '1em',
                }}
            >
                Button
            </Button>
            <Box as={CustomComponent} bg="red">
                CustomComponent
            </Box>
            <ExtendedBox m={2}>ExtendedBox</ExtendedBox>
            <Box
                css={`
                    color: red;
                `}
            >
                String css prop
            </Box>
            <Button
                sx={theme => ({
                    bg: 'magenta',
                    border: '1em',
                    borderRadius: '1em',
                })}
            >
                Button
            </Button>
            <CssBox />

            <VariantBox />
        </Flex>
        <StyledBox width={1} css={{ height: '100vh' }} py={[1, 2, 3]} ml="1em" display="block">
            Styled Box
        </StyledBox>
    </Box>
);
