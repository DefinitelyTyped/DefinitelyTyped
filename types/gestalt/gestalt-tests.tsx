import {
    ActivationCard,
    Avatar,
    AvatarPair,
    Badge,
    Box,
    Button,
    ButtonGroup,
    Callout,
    Card,
    Checkbox,
    Collage,
    Column,
    Container,
    Divider,
    Flyout,
    GroupAvatar,
    Heading,
    Icon,
    IconButton,
    Image,
    Label,
    Layer,
    Letterbox,
    Link,
    Mask,
    Masonry,
    Modal,
    Module,
    Pog,
    Provider,
    Pulsar,
    RadioButton,
    Row,
    SearchField,
    SegmentedControl,
    SelectList,
    Sheet,
    Spinner,
    Stack,
    Sticky,
    Switch,
    Table,
    Tabs,
    TapArea,
    Text,
    TextArea,
    TextField,
    Toast,
    Tooltip,
    Typeahead,
    Video,
    FixedZIndex,
    CompositeZIndex,
} from 'gestalt';
import * as React from 'react';

const MasonryComponent = ({}) => {
    return <div>Masonry</div>;
};
<ActivationCard
    status="notStarted"
    statusMessage="Not started"
    title="Claim your website"
    message="Grow distribution and track Pins linked to your website"
/>;
<Avatar name="Nicolas" />;
<AvatarPair
    size="md"
    collaborators={[
        {
            name: 'Keerthi',
            src: 'https://i.ibb.co/ZfCZrY8/keerthi.jpg',
        },
        {
            name: 'Shanice',
            src: 'https://i.ibb.co/7tGKGvb/shanice.jpg',
        },
    ]}
/>;
<Badge text="Nicolas" />;
<Box ref={React.createRef<HTMLDivElement>()} />;
<Button ref={React.createRef<HTMLAnchorElement>()} text={'Click me'} />;
<ButtonGroup>
    <Button text={'Click me'} />
    <Button text={'Click me'} />
</ButtonGroup>;
<Card />;
<Callout
    type="info"
    iconAccessibilityLabel="Info icon"
    title="Your business account was successfully created!"
    message="Get a badge, show up in more shopping experiences and more. Apply to the Verified Merchant Program—it’s free!"
    primaryLink={{ href: 'https://pinterest.com', label: 'Get started' }}
    secondaryLink={{ href: 'https://pinterest.com', label: 'Learn more' }}
    dismissButton={{
        accessibilityLabel: 'Dismiss banner',
        onDismiss: () => {},
    }}
/>;
<Checkbox id={'1'} onChange={() => {}} />;
<Collage columns={1} height={1} renderImage={({ height, index, width }) => () => {}} width={1} />;
<Column span={1} />;
<Container />;
<Divider />;
<Flyout onDismiss={() => {}} anchor={React.useRef<HTMLAnchorElement>().current!} />;
<Heading />;
<Icon accessibilityLabel="icon" />;
<IconButton accessibilityLabel="icon" />;
<Image alt="image" color="#ffff" naturalHeight={1} naturalWidth={1} src="http" />;
<Label htmlFor="id" />;
<Layer>
    <div />
</Layer>;
<Letterbox contentAspectRatio={1} height={1} width={1} />;
<Link href="#" />;
<Mask />;
<Masonry comp={MasonryComponent} items={[{}]} />;
<Modal accessibilityModalLabel="modal" onDismiss={() => {}} />;
<Module.Expandable
    id="ModuleExample1"
    accessibilityExpandLabel="Expand the module"
    accessibilityCollapseLabel="Collapse the module"
    items={[
        {
            title: 'Title',
            summary: ['summary1', 'summary2', 'summary3'],
            children: <Text size="md">Children1</Text>,
        },
    ]}
></Module.Expandable>;
<Pog />;
<Provider colorScheme={'light'} id="docsExample" />;
<Pulsar />;
<RadioButton id="id" onChange={() => {}} />;
<Row gap={1}>
    <div />
</Row>;
<SearchField accessibilityLabel="Demo Search Field" id="searchField" onChange={({ value }) => value} />;
<SegmentedControl items={[]} selectedItemIndex={1} onChange={() => {}} />;
<SelectList id="city" onChange={({ value }) => value} options={[]} />;
<Sheet
    accessibilityDismissButtonLabel="Dismiss"
    accessibilitySheetLabel="Example sheet to demonstrate different sizes"
    onDismiss={() => {}}
    footer={<Heading>Footer</Heading>}
>
    {({ onDismissStart }) => <Heading>Content {onDismissStart}</Heading>}
</Sheet>;
<Stack alignItems="center" gap={2}>
    <div />
    <div />
    <div />
</Stack>;
<Spinner show={true} accessibilityLabel="Example spinner" />;
<Sticky top={0}>
    <div>Hello World</div>
</Sticky>;
<Switch id="id" onChange={() => {}} />;
<Table>
    <Table.Header>
        <Table.Row>
            <Table.SortableHeaderCell onSortChange={() => {}} sortOrder={'asc'} status={'active'}>
                <Text weight="bold">Name</Text>
            </Table.SortableHeaderCell>
            <Table.HeaderCell>
                <Text weight="bold">House</Text>
            </Table.HeaderCell>
            <Table.HeaderCell>
                <Text weight="bold">Birthday</Text>
            </Table.HeaderCell>
        </Table.Row>
    </Table.Header>
    <Table.Body>
        <Table.Row>
            <Table.Cell>
                <Text>Hermione Granger</Text>
            </Table.Cell>
            <Table.Cell>
                <Text>Gryffindor</Text>
            </Table.Cell>
            <Table.Cell>
                <Text>September 19, 1979</Text>
            </Table.Cell>
        </Table.Row>
        <Table.RowExpandable
            accessibilityExpandLabel="Expand"
            accessibilityCollapseLabel="Collapse"
            id="row1"
            onExpand={() => {}}
            expandedContents={
                <Box maxWidth={236} padding={2} column={12}>
                    <Card image={<Avatar name="luna avatar" src="https://i.ibb.co/QY9qR7h/luna.png" />}>
                        <Text align="center" weight="bold">
                            <Link href="https://pinterest.com">
                                <Box paddingX={3} paddingY={2}>
                                    Luna's Info
                                </Box>
                            </Link>
                        </Text>
                        <Text>Row expanded</Text>
                    </Card>
                </Box>
            }
        >
            <Table.Cell>
                <Text>Luna Lovegood</Text>
            </Table.Cell>
            <Table.Cell>
                <Text>Ravenclaw</Text>
            </Table.Cell>
            <Table.Cell>
                <Text>June 25, 1993</Text>
            </Table.Cell>
        </Table.RowExpandable>
    </Table.Body>
    <Table.Footer>The end</Table.Footer>
</Table>;
<TapArea mouseCursor="zoomIn" onTap={() => {}} rounding={2}>
    Hello
</TapArea>;
<Tabs
    tabs={[
        {
            text: 'Boards',
            href: '#',
        },
        {
            text: 'Pins',
            href: '#',
        },
        {
            text: 'Topics',
            href: '#',
        },
    ]}
    activeTabIndex={1}
    onChange={() => {}}
/>;
<Text />;
<TextArea id="id" onChange={() => {}} />;
<TextField id="email" onChange={({ value }) => value} />;
<GroupAvatar collaborators={[{ name: 'nicolas' }]} />;
<Toast color="red" text={<>Oops! Something went wrong. Please try again later.</>} />;
<Tooltip text="tooltip">
    <div />
</Tooltip>;
<Typeahead
    label="Typeahead Example 1"
    id="Typeahead-example"
    noResultText="No Results"
    options={[{ value: 'Hello', label: 'World' }]}
    placeholder="Select a Label"
/>;
<Video
    aspectRatio={853 / 480}
    captions=""
    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
    src="http://media.w3.org/2010/05/bunny/movie.mp4"
/>;
<Icon accessibilityLabel={'sup'} icon={'add'} dangerouslySetSvgPath={{ __path: 'something' }} />;
<IconButton accessibilityLabel={'something'} icon={'add-pin'} />;

new FixedZIndex(1);
new CompositeZIndex([new FixedZIndex(1), new CompositeZIndex([new FixedZIndex(1)])]);
