import {
    Avatar,
    Badge,
    Box,
    Button,
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
    Pog,
    Pulsar,
    RadioButton,
    SearchField,
    SegmentedControl,
    SelectList,
    Spinner,
    Sticky,
    Switch,
    Tabs,
    Text,
    TextArea,
    TextField,
    Toast,
    Tooltip,
    Touchable,
    Video,
} from 'gestalt';
import * as React from 'react';

const MasonryComponent = ({}) => {
    return <div>Masonry</div>;
};

<Avatar name="Nicolas" />;
<Badge text="Nicolas" />;
<Box />;
<Button text={'Click me'} />;
<Card />;
<Checkbox id={'1'} onChange={() => {}} />;
<Collage columns={1} height={1} renderImage={({ height, index, width }) => () => {}} width={1} />;
<Column span={1} />;
<Container />;
<Divider />;
<Flyout onDismiss={() => {}} anchor={React.useRef().current} />;
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
<Pog />;
<Pulsar />;
<RadioButton id="id" onChange={() => {}} />;
<SearchField accessibilityLabel="Demo Search Field" id="searchField" onChange={({ value }) => value} />;
<SegmentedControl items={[]} selectedItemIndex={1} onChange={() => {}} />;
<SelectList id="city" onChange={({ value }) => value} options={[]} />;
<Spinner show={true} accessibilityLabel="Example spinner" />;
<Sticky dangerouslySetZIndex={ { __zIndex: 1 } } />;
<Switch id="id" onChange={() => {}} />;
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
<Toast />;
<Tooltip text="tooltip">
    <div />
</Tooltip>;
<Touchable onTouch={() => {}} />;
<Video aspectRatio={1} captions="string" src="http" />;
<Icon accessibilityLabel={'sup'} icon={'add'} dangerouslySetSvgPath={{ __path: 'something' }} />;
<IconButton accessibilityLabel={'something'} icon={'add-pin'} />;
