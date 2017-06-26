
import * as React from "react";
import {
    Arrow
  , Avatar
  , Badge
  , Banner
  , Block
  , Blockquote
  , Breadcrumbs
  , Button
  , ButtonCircle
  , ButtonOutline
  , Card
  , CardImage
  , Checkbox
  , Close
  , Container
  , Divider
  , Donut
  , DotIndicator
  , Drawer
  , Dropdown
  , DropdownMenu
  , Embed
  , Fixed
  , Footer
  , Heading
  , HeadingLink
  , InlineForm
  , Input
  , Label
  , LinkBlock
  , Media
  , Menu
  , Message
  , NavItem
  , Overlay
  , PageHeader
  , Panel
  , PanelFooter
  , PanelHeader
  , Pre
  , Progress
  , Radio
  , Rating
  , Section
  , SectionHeader
  , Select
  , SequenceMap
  , SequenceMapStep
  , Slider
  , Space
  , Stat
  , Switch
  , Table
  , Text
  , Textarea
  , Toolbar
  , Tooltip
} from "rebass";

interface IconProps extends React.Props<Icon> {
  fill: string;
  height: string;
  name: string;
  width: string;
}

class Icon extends React.Component<IconProps> {
  render() {
    return <div></div>;
  }
}

class RebassTest extends React.Component {
  render() {
    return <div>
      <Button
        backgroundColor="primary"
        color="white"
        inverted={true}
        rounded={true}
      >
        Arrow
        <Arrow direction="down" />
      </Button>

      <Avatar
        circle={true}
        size={48}
        src="http://lorempixel.com/64/64/cats"
      />

      <div>
        <Heading level={4}>
          Rebass
        </Heading>
        <Space x={1} />
        <Badge
          rounded={true}
          theme="info"
        >
          0.2.0
        </Badge>
        <Space x={2} />
        <Heading level={4}>
          Pill
        </Heading>
        <Space x={1} />
        <Badge
          pill={true}
          rounded={true}
          theme="info"
        >
          Pill
        </Badge>
        <Space x={2} />
        <Heading level={4}>
          Circular
        </Heading>
        <Space x={1} />
        <Badge
          circle={true}
          rounded={true}
          theme="error"
        >
          4
        </Badge>
      </div>

      <Banner
        align="center"
        backgroundImage="https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg"
      >
        <Heading
          level={2}
          size={0}
        >
          Rebass
        </Heading>
      </Banner>

      <Block
        borderLeft={true}
        color="blue"
        px={2}
      >
        <Media img="http://placehold.it/128/08e/fff">
          <Heading
            level={2}
            size={0}
          >
            Block
          </Heading>
          <Text>
            Generic box for containing things
          </Text>
        </Media>
      </Block>

      <Blockquote
        href="http://webtypography.net/3.1.1"
        source="Robert Bringhurst"
      >
        In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years. […] Use the old familiar scale, or use new scales of your own devising, but limit yourself, at first, to a modest set of distinct and related intervals.
      </Blockquote>

      <Breadcrumbs links={[{children: 'Jxnblk', href: '#!'}, {children: 'Rebass', href: '#!'}, {children: 'Breadcrumbs', href: '#!'}]} />

      <div>
        <Button
          backgroundColor="primary"
          color="white"
          inverted={true}
          rounded={true}
        >
          Button
        </Button>
      </div>

      <div>
        <ButtonCircle title="Like">
          <Icon
            fill="currentColor"
            height="1em"
            name="heart"
            width="1em"
          />
        </ButtonCircle>
        <ButtonCircle title="Comment">
          <Icon
            fill="currentColor"
            height="1em"
            name="chat"
            width="1em"
          />
        </ButtonCircle>
        <ButtonCircle title="Repost">
          <Icon
            fill="currentColor"
            height="1em"
            name="repost"
            width="1em"
          />
        </ButtonCircle>
        <ButtonCircle title="Bookmark">
          <Icon
            fill="currentColor"
            height="1em"
            name="bookmark"
            width="1em"
          />
        </ButtonCircle>
        <ButtonCircle title="Tag">
          <Icon
            fill="currentColor"
            height="1em"
            name="tag"
            width="1em"
          />
        </ButtonCircle>
        <Text small={true}>
          Example Icon component from react-geomicons
        </Text>
      </div>

      <div>
        <ButtonOutline
          color="primary"
          inverted={false}
          rounded="left"
        >
          Button
        </ButtonOutline>
        <ButtonOutline
          color="primary"
          inverted={false}
          rounded={false}
          style={{marginLeft: -1}}
        >
          Group
        </ButtonOutline>
        <Button
          backgroundColor="primary"
          color="white"
          inverted={true}
          rounded="right"
          style={{marginLeft: -1}}
        >
          Button
        </Button>
      </div>

      <Card
        rounded={true}
        width={256}
      >
        <CardImage src="http://placehold.it/320/08e/fff" />
        <Heading
          level={2}
          size={3}
        >
          Card
        </Heading>
        <Text>
          Cats like cards too
        </Text>
      </Card>

      <div style={{maxWidth: 192}}>
        <CardImage src="http://placehold.it/320/08e/fff" />
      </div>

      <div>
        <Checkbox
          label="Checkbox"
          name="checkbox_1"
        />
        <Checkbox
          checked={true}
          label="Checkbox"
          name="checkbox_1"
          readOnly={true}
          theme="success"
        />
      </div>

      <Close />

      <Container>
        Container
      </Container>

      <div>
        <Divider />
        <Divider
          ml={0}
          width={128}
        />
      </div>

      <div>
        <Donut
          color="primary"
          size={256}
          strokeWidth={32}
          value={0.5625}
        />
        <Donut
          color="primary"
          size={128}
          strokeWidth={8}
          value={0.5625}
        >
          9/16
        </Donut>
        <Donut
          color="primary"
          size={128}
          strokeWidth={8}
          value={0.625}
        />
        <Donut
          color="primary"
          size={128}
          strokeWidth={8}
          value={0.125}
        />
      </div>

      <div>
        <DotIndicator
          active={0}
          length={3}
          onClick={function noRefCheck() {}}
        />
      </div>

      <Dropdown>
        <Button
          backgroundColor="primary"
          color="white"
          inverted={true}
          rounded={true}
        >
          Dropdown
          <Arrow direction="down" />
        </Button>
        <DropdownMenu
          onDismiss={function noRefCheck() {}}
          open={false}
        >
          <NavItem is="a">
            Hello
          </NavItem>
          <NavItem is="a">
            Hi
          </NavItem>
        </DropdownMenu>
      </Dropdown>

      <Embed ratio={0.5625}>
        <iframe
          allowFullScreen={true}
          src="https://www.youtube.com/embed/KO_3Qgib6RQ"
        />
      </Embed>

      <Footer>
        Footer™ ©2016 Jxnblk
      </Footer>

      <InlineForm
        buttonLabel="Go"
        label="InlineForm"
        name="inline_form"
        onChange={function noRefCheck() {}}
        onClick={function noRefCheck() {}}
      />

      <Input
        label="Input"
        name="input_example"
        placeholder="Placeholder"
        rounded={true}
        type="text"
      />

      <Label>
        Label for form elements
      </Label>

      <LinkBlock
        href="#LinkBlock"
        is="a"
      >
        <Media
          align="center"
          img="http://placehold.it/96/08e/fff"
        >
          <Heading level={3}>
            LinkBlock
          </Heading>
        </Media>
      </LinkBlock>

      <Media
        align="center"
        img="http://placehold.it/128/08e/fff"
      >
        <Heading level={3}>
          Media Object
        </Heading>
        <Text>
          With alignment options
        </Text>
      </Media>

      <Menu rounded={true}>
        <NavItem is="a">
          Menu
        </NavItem>
        <NavItem is="a">
          NavItem
        </NavItem>
        <NavItem is="a">
          NavItem
        </NavItem>
      </Menu>

      <Message
        inverted={true}
        rounded={true}
        theme="success"
      >
        Hello Message!
        <Space
          auto={true}
          x={1}
        />
        <Close />
      </Message>

      <PageHeader
        description="Description about the page"
        heading="Page Header"
      />

      <Panel theme="info">
        <PanelHeader
          inverted={true}
          theme="default"
        >
          Panel
        </PanelHeader>
        <Text>
          Panels are great for visually separating UI, content, or data from the rest of the page.
        </Text>
        <PanelFooter theme="default">
          The footer is a good place for less important information
        </PanelFooter>
      </Panel>

      <Pre>
        this is text
        this is text
        this is text
      </Pre>

      <Progress
        color="primary"
        value={0.25}
      />

      <div>
        <Radio
          checked={true}
          circle={true}
          group="radios"
          label="Radio"
          name="radio_1"
          readOnly={true}
        />
        <Radio
          circle={true}
          group="radios"
          label="Radio"
          name="radio_2"
        />
      </div>

      <Rating
        color="orange"
        value={3.5}
      />

      <Section>
        Section
      </Section>

      <Section>
        <SectionHeader
          description="With linked header"
          heading="Section Header"
        />
        Section
      </Section>

      <Select
        label="Select"
        name="select_example"
        options={[{children: 'Two', value: 2}, {children: 'Four', value: 4}, {children: 'Eight', value: 8}, {children: 'Sixteen', value: 16}, {children: 'Thirty-Two', value: 32}, {children: 'Sixty-Four', value: 64}]}
        rounded={true}
      />

      <SequenceMap
        active={1}
        steps={[{children: 'Sign In', href: '#!'}, {children: 'Shipping Address', href: '#!'}, {children: 'Payment Method', href: '#!'}, {children: 'Place Order', href: '#!'}]}
      />

      <div>
        <Slider
          defaultValue={37.5}
          label="Slider"
          name="slider_1"
        />
        <Slider
          color="blue"
          fill={true}
          label="Slider with color and fill"
          name="slider_2"
          readOnly={true}
          value={62.5}
        />
      </div>

      <div>
        <Button
          backgroundColor="primary"
          color="white"
          inverted={true}
          rounded={true}
        >
          Button
        </Button>
        <Space x={1} />
        <Button
          backgroundColor="primary"
          color="white"
          inverted={true}
          rounded={true}
        >
          With
        </Button>
        <Space x={4} />
        <Button
          backgroundColor="primary"
          color="white"
          inverted={true}
          rounded={true}
        >
          Space
        </Button>
      </div>

      <div>
        <Stat
          label="Memory"
          unit="GB"
          value="512"
        />
        <Stat
          label="PetaFLOPS"
          value="32"
        />
        <Stat
          label="Upload"
          unit="Mbps"
          value="512"
        />
        <Stat
          label="Download"
          unit="Mbps"
          value="1,024"
        />
      </div>

      <Switch checked={false}/>

      <Table
        data={[['Hamburger', 'Beef', 'Onion', 'Bun'], ['Pizza', 'Pork', 'Tomato', 'Crust'], ['Corndog', 'Pork', 'Corn', 'Cornbread'], ['Hot Dog', 'Pork', 'Peppers', 'Bun']]}
        headings={['Name', 'Meat', 'Vegetable', 'Carb']}
      />

      <Toolbar>
        <NavItem is="a">
          Toolbar
        </NavItem>
        <NavItem is="a">
          NavItem
        </NavItem>
        <Space
          auto={true}
          x={1}
        />
        <NavItem is="a">
          NavItem
        </NavItem>
      </Toolbar>

      <Tooltip
        inverted={true}
        rounded={true}
        title="Hello!"
      >
        <Heading level={3}>
          Tooltip
        </Heading>
      </Tooltip>
    </div>;
  }
}

