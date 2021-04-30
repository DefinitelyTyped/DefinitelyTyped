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
    CompositeZIndex,
    Container,
    Divider,
    Dropdown,
    FixedZIndex,
    Flex,
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
    PageHeader,
    Pog,
    Popover,
    Provider,
    Pulsar,
    RadioButton,
    Row,
    ScrollBoundaryContainer,
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
    Tag,
    TapArea,
    Text,
    TextArea,
    TextField,
    Toast,
    Tooltip,
    Typeahead,
    Upsell,
    useFocusVisible,
    useReducedMotion,
    Video,
} from 'gestalt';
import * as React from 'react';

const MasonryComponent = ({}) => {
    return <div>Masonry</div>;
};

const CheckUseFocusVisible = () => {
    const { isFocusVisible } = useFocusVisible();
    return <>{isFocusVisible ? 'is visible' : 'no visible'}</>;
};

const CheckUseReducedMotion = () => {
    const shouldReduceMotion = useReducedMotion();
    return <>{shouldReduceMotion ? 'reduced' : 'not reduced'}</>;
};

<ActivationCard
    status="notStarted"
    statusMessage="Not started"
    title="Claim your website"
    message="Grow distribution and track Pins linked to your website"
    link={{
        href: "foo",
        label: "foo",
        accessibilityLabel: "foo",
        onClick: (({ event }) => { event.stopPropagation(); }),
        rel: "nofollow",
        target: "blank"
    }}
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
<Button text="" />;
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
    primaryAction={{ href: 'https://pinterest.com', label: 'Get started' }}
    secondaryAction={{ href: 'https://pinterest.com', label: 'Learn more' }}
    dismissButton={{
        accessibilityLabel: 'Dismiss banner',
        onDismiss: () => {},
    }}
/>;
<Checkbox id={'1'} onChange={() => {}} />;
<Collage columns={1} height={1} renderImage={({ height, index, width }) => () => {}} width={1} />;
<Column span={1} />;
<Container />;
<ScrollBoundaryContainer />;
<ScrollBoundaryContainer height={1} overflow="scroll" />;
<Divider />;
<Dropdown id="dropdown-example" onDismiss={() => {}}>
    <Dropdown.Section label="View options">
        <Dropdown.Item
            option={{ value: 'item 1', label: 'Custom link 1' }}
            handleSelect={({ item }) => {}}
            selected={undefined}
        >
            <Text>Dropdown</Text>
        </Dropdown.Item>
    </Dropdown.Section>
</Dropdown>;
<Flex />;
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
<Modal accessibilityModalLabel="modal" onDismiss={() => {}} heading={<Text>Header</Text>} subHeading="header" />;
<Module
    id="foo"
    icon="add"
    iconAccessibilityLabel="hello"
    title="world"
    type='info'
/>;
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
    expandedIndex={1}
    onExpandedChange={(index) => {}}
></Module.Expandable>;
<PageHeader title='Home'/>;
<Pog />;
<Popover onDismiss={() => {}} anchor={React.useRef<HTMLAnchorElement>().current!} />;
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
<Table maxHeight={1}/>;
<Table maxHeight="75vh"/>;
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
<Tag disabled text="New" />;
<Text />;
<TextArea id="id" onChange={() => {}} />;
<TextField id="email" onChange={({ value }) => value} tags={[<Tag text="Foo" />, <Tag text="Bar" />]} />;
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
<Upsell
    message="Hello world"
    imageData={{
        component: <Icon icon="pinterest" accessibilityLabel="Pin" color="darkGray" size={32} />,
    }}
/>;
<Upsell
    title="Give $30, get $60 in ads credit"
    message="Earn $60 of ads credit, and give $30 of ads credit to a friend"
    dismissButton={{
      accessibilityLabel: 'Dismiss banner',
      onDismiss: () => {},
    }}
    imageData={{
      component: <Icon icon="pinterest" accessibilityLabel="Pin" color="darkGray" size={32}/>
    }}
  >
    <Upsell.Form
        onSubmit={({ event }) => { event.preventDefault(); }}
        submitButtonText="Submit"
        submitButtonAccessibilityLabel="Submit name for ads credit"
    />
</Upsell>;
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
