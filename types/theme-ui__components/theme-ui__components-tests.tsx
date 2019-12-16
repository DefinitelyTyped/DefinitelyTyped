/** @jsx jsx */
import { jsx } from 'theme-ui';

import {
    Box,
    Flex,
    Grid,
    Button,
    Link,
    Text,
    Heading,
    Image,
    Card,
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
    Slider,
    Field,
    Progress,
    Donut,
    Spinner,
    Avatar,
    Badge,
    Close,
    Alert,
    Divider,
    Embed,
    AspectRatio,
    AspectImage,
    Container,
    NavLink,
    Message,
    IconButton,
    MenuButton,
} from '@theme-ui/components';

const SectionBox = Box.withComponent('section');

const _ = (
    <SectionBox css={{ background: '#eee' }} sx={{ py: [1, 2, 3], paddingBlockStart: '2em' }} px={[3, 2, 1]}>
        <Box
            onPointerEnter={e => e.pointerType}
            sx={{
                ':first-of-type': {
                    bg: 'red',
                },
            }}
        />
        <Flex />
        <Grid width={[128, null, 192]} backgroundColor="#eee">
            <Box bg="primary">Box</Box>
            <Box bg="muted">Box</Box>
            <Box bg="primary">Box</Box>
            <Box bg="muted">Box</Box>
        </Grid>
        <Grid gap={2} columns={[2, null, 4]} color="#111">
            <Box bg="primary">Box</Box>
            <Box bg="muted">Box</Box>
            <Box bg="primary">Box</Box>
            <Box bg="muted">Box</Box>
        </Grid>
        <Button
            sx={{
                ':hover': {
                    bg: ['red', 'green', 'blue'],
                },
            }}
        />
        <Link href="#" target="_self" bg="blue" />
        <Text backgroundColor="red" sx={{ py: 1 }} paddingX={[3, 2, 1]} />
        <Heading contentEditable="true" m="1em" />
        <Image />
        <Card />
        <Label />
        <Input />
        <Select />
        <Textarea />
        <Radio />
        <Checkbox />
        <Slider />
        <Field />
        <Progress />
        <Donut />
        <Spinner />
        <Avatar />
        <Badge />
        <Close />
        <Alert />
        <Divider />
        <Embed />
        <AspectRatio />
        <AspectImage />
        <Container />
        <NavLink />
        <Message />
        <IconButton />
        <MenuButton />
    </SectionBox>
);
