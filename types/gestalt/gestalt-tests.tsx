import {
    ActivationCard,
    Avatar,
    AvatarGroup,
    AvatarPair,
    Badge,
    Box,
    BoxProps,
    Button,
    ButtonGroup,
    Callout,
    Card,
    Checkbox,
    Collage,
    ColorSchemeProvider,
    Column,
    ComboBox,
    CompositeZIndex,
    Container,
    Datapoint,
    Divider,
    Dropdown,
    Fieldset,
    FixedZIndex,
    Flex,
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
    NumberField,
    OnLinkNavigationProvider,
    PageHeader,
    Pog,
    Popover,
    Pulsar,
    RadioButton,
    RadioGroup,
    Row,
    ScrollBoundaryContainer,
    SearchField,
    SegmentedControl,
    SelectList,
    Sheet,
    SideNavigation,
    SlimBanner,
    Spinner,
    Stack,
    Status,
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
        href: 'foo',
        label: 'foo',
        accessibilityLabel: 'foo',
        onClick: ({ event }) => {
            event.stopPropagation();
        },
        rel: 'nofollow',
        target: 'blank',
    }}
/>;
<Avatar name="Nicolas" />;
<AvatarGroup accessibilityLabel="test-example" collaborators={[{ name: 'nicolas' }]} />;
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

<Box aria-colspan={1} />;
// @ts-expect-error
<Box aria-colspan="foo" />;

<Box
    onDrag={event => {
        event.movementX;
    }}
/>;

<Box
    onDrag={event => {
        // @ts-expect-error
        event.__nonExistentProperty__;
    }}
/>;
// Test Box accepts Ref.
() => {
    const ref = React.useRef<HTMLDivElement>(null);
    return <Box ref={ref} />;
};
// Test BoxProps can be forwarded to Box.
(props: BoxProps) => <Box {...props} />;

<Button text="" />;
<ButtonGroup>
    <Button text={'Click me'} />
    <Button text={'Click me'} />
</ButtonGroup>;
<Card />;
<ComboBox
    accessibilityClearButtonLabel="combobox"
    id="combobox"
    label="combobox"
    noResultText="combobox"
    options={[{ label: 'combobox', value: 'combobox' }]}
    onChange={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: Event = args.event.nativeEvent;
        const value: string = args.value;
    }}
    onBlur={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: FocusEvent | Event = args.event.nativeEvent;
        const value: string = args.value;
    }}
    onFocus={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: FocusEvent = args.event.nativeEvent;
        const value: string = args.value;
    }}
/>;
<Callout
    type="info"
    iconAccessibilityLabel="Info icon"
    title="Your business account was successfully created!"
    message="Get a badge, show up in more shopping experiences and more. Apply to the Verified Merchant Program—it’s free!"
    primaryAction={{ accessibilityLabel: 'primary-callout', href: 'https://pinterest.com', label: 'Get started' }}
    secondaryAction={{ accessibilityLabel: 'secondary-callout', href: 'https://pinterest.com', label: 'Learn more' }}
    dismissButton={{
        accessibilityLabel: 'Dismiss banner',
        onDismiss: () => {},
    }}
/>;
<Checkbox id={'1'} onChange={() => {}} />;
<Collage columns={1} height={1} renderImage={({ height, index, width }) => null} width={1} />;
<ColorSchemeProvider colorScheme="dark" id="docsExample">
    <Box />
</ColorSchemeProvider>;
<Column span={1} />;
<Container />;
<ScrollBoundaryContainer />;
<ScrollBoundaryContainer height={1} overflow="scroll" />;
<Divider />;
<Dropdown id="dropdown-example" onDismiss={() => {}}>
    <Dropdown.Section label="View options">
        <Dropdown.Item
            option={{ value: 'item 1', label: 'Custom link 1' }}
            onSelect={({ item }) => {}}
            selected={undefined}
        >
            <Text>Dropdown</Text>
        </Dropdown.Item>
        <Dropdown.Link href="#" option={{ value: 'item 2', label: 'Url Link' }}></Dropdown.Link>
    </Dropdown.Section>
</Dropdown>;
<Fieldset legend="Fieldset Example">
    <RadioButton id="id1" value="" onChange={() => {}} />;
    <RadioButton id="id2" value="" onChange={() => {}} />;
    <RadioButton id="id3" value="" onChange={() => {}} />;
</Fieldset>;

<Flex>
    <Flex.Item>
        <Text>Flex</Text>
    </Flex.Item>
</Flex>;
<Heading />;
<Heading color="inverse" />;
<Icon accessibilityLabel="icon" />;
<IconButton
    accessibilityLabel="icon"
    tooltip={{
        text: 'foo',
        idealDirection: 'down',
    }}
/>;
<Image alt="image" color="#ffff" naturalHeight={1} naturalWidth={1} src="http" />;
<Label htmlFor="id" />;
<Layer>
    <div />
</Layer>;
<Letterbox contentAspectRatio={1} height={1} width={1} />;
<Link href="#" />;
<Link href="#" externalLinkIcon={{ color: 'light', size: '100' }} />;
<Mask />;
<Masonry Item={MasonryComponent} items={[{}]} />;
<Modal accessibilityModalLabel="modal" onDismiss={() => {}} heading={<Text>Header</Text>} subHeading="header" />;
<Module id="foo" icon="add" iconAccessibilityLabel="hello" title="world" type="info" />;
<Module id="foo" icon="add" iconAccessibilityLabel="hello" title="world" type="info">
    <Flex />
</Module>;
<Module id="foo">
    <Module.Expandable
        id="ModuleExample1"
        accessibilityExpandLabel="Expand the module"
        accessibilityCollapseLabel="Collapse the module"
        items={[
            {
                title: 'Title',
                summary: ['summary1', 'summary2', 'summary3'],
                children: <Text size="100">Children1</Text>,
                iconButton: <IconButton accessibilityLabel="test" />,
            },
        ]}
        expandedIndex={1}
        onExpandedChange={index => {}}
    ></Module.Expandable>
</Module>;
<NumberField
    id="number"
    step={1}
    onChange={args => {
        const nativeEvent: Event = args.event.nativeEvent;
        const value: number | undefined = args.value;
    }}
    onBlur={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: FocusEvent = args.event.nativeEvent;
        const value: number | undefined = args.value;
    }}
    onFocus={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: FocusEvent = args.event.nativeEvent;
        const value: number | undefined = args.value;
    }}
    onKeyDown={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: KeyboardEvent = args.event.nativeEvent;
        const value: number | undefined = args.value;
    }}
/>;
<OnLinkNavigationProvider
    onNavigation={() => {
        return undefined;
    }}
/>;
<PageHeader title="Home" />;
<PageHeader
    title="Posts"
    primaryAction={{
        component: <Button color="red" size="lg" text="Create" />,
        dropdownItems: [<Dropdown.Item onSelect={() => undefined} option={{ value: 'create', label: 'Create' }} />],
    }}
/>;
<Pog />;
<Popover onDismiss={() => {}} anchor={React.useRef<HTMLAnchorElement>().current} />;

<Pulsar />;
<RadioButton id="id" value="" onChange={() => {}} />;
<RadioGroup id="foo" legend="foo" direction="column">
    <RadioButton id="id3" value="" onChange={() => {}} />;
</RadioGroup>;
<Row gap={1}>
    <div />
</Row>;
<SearchField
    accessibilityLabel="Demo Search Field"
    id="searchField"
    onChange={args => {
        const currentTarget: HTMLInputElement = args.syntheticEvent.currentTarget;
        const nativeEvent: Event = args.syntheticEvent.nativeEvent;
        const value: string = args.value;
    }}
    onKeyDown={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: KeyboardEvent = args.event.nativeEvent;
        const value: string = args.value;
    }}
/>;
<SegmentedControl items={[]} selectedItemIndex={1} onChange={() => {}} />;

<SelectList id="city" onChange={({ value }) => value}>
    <SelectList.Option label="Hi" value="hi" />
</SelectList>;
<SelectList
    helperText="Note that the family members aren't secondary!"
    id="selectlistexample15"
    label="Choose your favorite secondary character"
    onChange={() => {}}
    placeholder="Select a character"
    size="lg"
>
    <SelectList.Group disabled={true} label="Family">
        {['Bart', 'Lisa', 'Homer', 'Marge', 'Maggie'].map(name => (
            <SelectList.Option key={name} label={name} value={name} />
        ))}
    </SelectList.Group>
    <SelectList.Group label="Neighbors">
        {['Ned', 'Maude', 'Rod', 'Todd'].map(name => (
            <SelectList.Option key={name} label={name} value={name} />
        ))}
    </SelectList.Group>
    <SelectList.Group label="Cartoons">
        {['Itchy', 'Scratchy', 'Poochie'].map(name => (
            <SelectList.Option key={name} label={name} value={name} />
        ))}
    </SelectList.Group>
</SelectList>;
<Sheet
    accessibilityDismissButtonLabel="Dismiss"
    accessibilitySheetLabel="Example sheet to demonstrate different sizes"
    onDismiss={() => {}}
    footer={<Heading>Footer</Heading>}
>
    {({ onDismissStart }) => (
        <Heading>
            Content <button onClick={onDismissStart} />
        </Heading>
    )}
</Sheet>;
<SideNavigation accessibilityLabel="Nested items example">
    <SideNavigation.TopItem
        href="#"
        onClick={({ event }) => event.preventDefault()}
        label="Reporting"
        icon="ads-stats"
    />
    <SideNavigation.TopItem
        href="#"
        onClick={({ event }) => event.preventDefault()}
        label="Conversions"
        icon="replace"
    />
    <SideNavigation.Section label="Audiences">
        <SideNavigation.TopItem
            href="#"
            onClick={({ event }) => event.preventDefault()}
            label="Thanksgiving"
            icon="people"
        />
        <SideNavigation.Group label="Christmas" icon="people">
            <SideNavigation.NestedItem
                href="#"
                onClick={({ event }) => event.preventDefault()}
                label="Luxury Christmas"
            />
            <SideNavigation.NestedGroup label="Classic Christmas">
                <SideNavigation.NestedItem
                    href="#"
                    onClick={({ event }) => event.preventDefault()}
                    label="West Coast"
                />
                <SideNavigation.NestedItem
                    href="#"
                    onClick={({ event }) => event.preventDefault()}
                    label="East Coast"
                />
            </SideNavigation.NestedGroup>
            <SideNavigation.NestedGroup label="Alternative Christmas">
                <SideNavigation.NestedItem
                    href="#"
                    onClick={({ event }) => event.preventDefault()}
                    label="West Coast"
                />
                <SideNavigation.NestedItem
                    href="#"
                    onClick={({ event }) => event.preventDefault()}
                    label="East Coast"
                />
            </SideNavigation.NestedGroup>
        </SideNavigation.Group>
        <SideNavigation.Group label="Halloween" icon="people" display="static">
            <SideNavigation.NestedItem href="#" onClick={({ event }) => event.preventDefault()} label="East Coast" />
            <SideNavigation.NestedItem href="#" onClick={({ event }) => event.preventDefault()} label="West Coast" />
        </SideNavigation.Group>
    </SideNavigation.Section>
</SideNavigation>;
<SlimBanner
    type="errorBare"
    iconAccessibilityLabel="Info"
    message="There are issues with your account."
    helperLink={{
        text: 'Go to account',
        accessibilityLabel: 'Go to your account',
        href: 'http://www.pinterest.com',
        onClick: () => {},
        target: 'blank',
    }}
/>;
<Spinner show={true} accessibilityLabel="Example spinner" />;
<Stack alignItems="center" gap={2}>
    <div />
    <div />
    <div />
</Stack>;
<Status type="problem" />;
<Sticky top={0}>
    <div>Hello World</div>
</Sticky>;
<Switch id="id" onChange={() => {}} />;
<Table accessibilityLabel="max height test" maxHeight={1} />;
<Table accessibilityLabel="max height test 2" maxHeight="75vh" />;
<Table accessibilityLabel="complex table">
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
<Text color="inverse" />;
<TextArea
    id="id"
    onChange={args => {
        const currentTarget: HTMLTextAreaElement = args.event.currentTarget;
        const nativeEvent: Event = args.event.nativeEvent;
        const value: string = args.value;
    }}
    onBlur={args => {
        const currentTarget: HTMLTextAreaElement = args.event.currentTarget;
        const nativeEvent: FocusEvent = args.event.nativeEvent;
        const value: string = args.value;
    }}
    onFocus={args => {
        const currentTarget: HTMLTextAreaElement = args.event.currentTarget;
        const nativeEvent: FocusEvent = args.event.nativeEvent;
        const value: string = args.value;
    }}
    onKeyDown={args => {
        const currentTarget: HTMLTextAreaElement = args.event.currentTarget;
        const nativeEvent: KeyboardEvent = args.event.nativeEvent;
        const value: string = args.value;
    }}
/>;
<TextField
    id="email"
    tags={[<Tag text="Foo" />, <Tag text="Bar" />]}
    onChange={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: Event = args.event.nativeEvent;
        const value: string = args.value;
    }}
    onBlur={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: FocusEvent = args.event.nativeEvent;
        const value: string = args.value;
    }}
    onFocus={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: FocusEvent = args.event.nativeEvent;
        const value: string = args.value;
    }}
    onKeyDown={args => {
        const currentTarget: HTMLInputElement = args.event.currentTarget;
        const nativeEvent: KeyboardEvent = args.event.nativeEvent;
        const value: string = args.value;
    }}
/>;

<Toast variant="error" text={<>Oops! Something went wrong. Please try again later.</>} />;
<Tooltip text="tooltip">
    <div />
</Tooltip>;
<Upsell
    message="Hello world"
    imageData={{
        component: <Icon icon="pinterest" accessibilityLabel="Pin" color="dark" size={32} />,
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
        component: <Icon icon="pinterest" accessibilityLabel="Pin" color="dark" size={32} />,
    }}
>
    <Upsell.Form
        onSubmit={({ event }) => {
            event.preventDefault();
        }}
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

<Datapoint
    title="Test Value"
    value="100"
    trend={{ accessibilityLabel: 'Trending up', value: 50 }}
    trendSentiment="good"
/>;
