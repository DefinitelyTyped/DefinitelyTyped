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
    <SectionBox
        css={{ background: '#eee' }}
        sx={{ py: [1, 2, 3], paddingBlockStart: '2em' }}
        px={[3, 2, 1]}
        ref={ref => ref}
    >
        <Box
            onPointerEnter={e => e.pointerType}
            sx={{
                ':first-of-type': {
                    bg: 'red',
                },
            }}
        />
        <Flex />
        <Grid width={[128, null, 192]} backgroundColor="#eee" ref={ref => ref}>
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
            ref={ref => ref}
            sx={{
                ':hover': {
                    bg: ['red', 'green', 'blue'],
                },
            }}
        />
        <Link href="#" target="_self" bg="blue" ref={r => r} />
        <Text backgroundColor="red" sx={{ py: 1 }} paddingX={[3, 2, 1]} />
        <Heading contentEditable="true" m="1em" />
        <Image />
        <Card />
        <Label />
        <Input value="Hello" onChange={e => console.log(e.target.value)} />
        <Select defaultValue="Hello">
            <option>Hello</option>
            <option>Hi</option>
            <option>Beep</option>
            <option>Boop</option>
        </Select>
        <Textarea defaultValue="Hello" rows={8} />
        <Label>
            <Radio name="dark-mode" value="true" defaultChecked={true} />
            Dark Mode
        </Label>
        <Label>
            <Radio name="dark-mode" value="false" />
            Light Mode
        </Label>
        <Checkbox mx={[1, 2, 3]} defaultChecked={true} />
        <Slider my={[1, 2, 3]} bg="gray" defaultValue={25} />
        <Field
            label="Email"
            name="email"
            defaultValue=""
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
            mx={[1, 2, 3]}
        />
        <Field
            as="textarea"
            label="Message"
            name="message"
            rows={10}
            placeholder="Say hello"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => console.log(e.target.value)}
            mx={[1, 2, 3]}
        />
        <Field
            as={Textarea}
            label="Complaint"
            name="complaint"
            rows={10}
            placeholder="Complain here"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => console.log(e.target.value)}
            px={[1, 2, 3]}
        />
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
