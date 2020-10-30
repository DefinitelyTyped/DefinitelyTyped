import {
    ActionBar,
    Avatar,
    Breadcrumb,
    BusyIndicator,
    Button,
    ButtonGroup,
    Calendar,
    ComboboxInput,
    Counter,
    DatePicker,
    Dialog,
    Checkbox,
    FormFieldset,
    FormGroup,
    FormInput,
    FormItem,
    FormLabel,
    FormLegend,
    FormRadioGroup,
    FormRadioItem,
    FormSelect,
    FormSet,
    FormTextarea,
    Icon,
    Image,
    InfoLabel,
    InlineHelp,
    InputGroup,
    LayoutGrid,
    LayoutPanel,
    Link,
    List,
    LocalizationEditor,
    Menu,
    MessageStrip,
    MultiInput,
    ObjectStatus,
    Pagination,
    Popover,
    SearchInput,
    Select,
    Shellbar,
    SideNav,
    StepInput,
    Switch,
    Tab,
    TabGroup,
    Table,
    Tile,
    Time,
    TimePicker,
    Title,
    Token,
    TreeView,
} from "fundamental-react";
import * as React from "react";

const counter = <Counter>101</Counter>;

const actionBars = (
    <div>
        <ActionBar
            actions={(
                <Popover
                    body={
                        <Menu>
                            <Menu.List>
                                <Menu.Item url='#'>Option 1</Menu.Item>
                                <Menu.Item url='#'>Option 2</Menu.Item>
                                <Menu.Item url='#'>Option 3</Menu.Item>
                                <Menu.Item url='#'>Option 4</Menu.Item>
                            </Menu.List>
                        </Menu>
                    }
                    control={<Button glyph='vertical-grip' option='transparent' />}
                    placement='bottom-end' />
            )}
            description={'Action Bar Description'}
            title={'Page Title'}
        />
        <ActionBar
            actions={(
                <>
                    <Button>Button</Button>
                    <Button option='emphasized'>Button</Button>
                </>
            )}
            description={'Action Bar Description'}
            title={'Page Title'}
        />
        <ActionBar
            actions={(
                <>
                    <Button>Button</Button>
                    <Button option='emphasized'>Button</Button>
                </>
            )}
            description={'Action Bar Description'}
            onBackClick={() => null}
            title={'Page Title'}
        />
    </div>
);

const avatar = (
    <Avatar color={1} tile={false} />
);

const breadcrumb = (
    <Breadcrumb>
        <Breadcrumb.Item name="Link Text" url="#" />
        <Breadcrumb.Item name="Link Text" url="#" />
        <Breadcrumb.Item name="Link Text" url="#" />
    </Breadcrumb>
);

const busyIndicator = (
    <BusyIndicator show/>
);

const buttons = (
    <div>
        <Button onClick={function w() {}} option="emphasized">
            Emphasized Button
        </Button>
        <Button onClick={function w() {}}>Regular Button</Button>
        <Button onClick={function w() {}} option="transparent">
            Light Button
        </Button>
        <Button>Action Button</Button>
        <Button type="standard">Standard Button</Button>
        <Button type="positive">Positive Button</Button>
        <Button type="medium">Medium Button</Button>
        <Button type="negative">Negative Button</Button>
        <Button glyph="cart" option="emphasized">
            Add to Cart
        </Button>
        <Button glyph="cart">Add to Cart</Button>
        <Button glyph="filter" option="transparent">
            Add to Cart
        </Button>
        <Button glyph="accept" option="emphasized" type="positive">
            Approve
        </Button>
        <Button glyph="decline" option="emphasized" type="negative">
            Reject
        </Button>
        <Button glyph="alert" option="emphasized" type="medium">
            Review
        </Button>
        <br />
        <br />
        <br />
        <Button glyph="cart" option="emphasized" />
        <Button glyph="cart" />
        <Button glyph="filter" option="transparent" />
        <Button glyph="accept" option="emphasized" type="positive" />
        <Button glyph="decline" option="emphasized" type="negative" />
        <Button glyph="alert" option="emphasized" type="medium" />
        <Button>Default</Button>
        <Button compact>Compact</Button>
        <Button option="emphasized">Normal State</Button>
        <Button option="emphasized" selected>
            Selected State
        </Button>
        <Button disabled option="emphasized">
            Disabled State
        </Button>
        <br />
        <br />
        <Button>Normal State</Button>
        <Button selected>Selected State</Button>
        <Button disabled>Disabled State</Button>
        <br />
        <br />
        <Button option="transparent">Normal State</Button>
        <Button option="transparent" selected>
            Selected State
        </Button>
        <Button disabled option="transparent">
            Disabled State
        </Button>
        <br />
        <br />
        <Button type="standard">Normal State</Button>
        <Button selected type="standard">
            Selected State
        </Button>
        <Button disabled type="standard">
            Disabled State
        </Button>
        <br />
        <br />
        <Button type="positive">Normal State</Button>
        <Button selected type="positive">
            Selected State
        </Button>
        <Button disabled type="positive">
            Disabled State
        </Button>
        <br />
        <br />
        <Button type="medium">Normal State</Button>
        <Button selected type="medium">
            Selected State
        </Button>
        <Button disabled type="medium">
            Disabled State
        </Button>
        <br />
        <br />
        <Button type="negative">Normal State</Button>
        <Button selected type="negative">
            Selected State
        </Button>
        <Button disabled type="negative">
            Disabled State
        </Button>
    </div>
);

const buttonGroups = (
    <div>
        <ButtonGroup>
            <Button glyph="survey" />
            <Button glyph="pie-chart" selected />
            <Button glyph="pool" />
        </ButtonGroup>

        <ButtonGroup>
            <Button compact>Left</Button>
            <Button compact selected>
                Middle
            </Button>
            <Button compact>Right</Button>
        </ButtonGroup>
    </div>
);

const calendars = (
    <div>
        <Calendar />
        <Calendar
            disableBeforeDate={new Date("2018-08-02T22:00:00.000Z")}
            disableWeekends
        />
        <Calendar
            blockedDates={[
                new Date("2018-01-31T23:00:00.000Z"),
                new Date("2018-04-02T22:00:00.000Z")
            ]}
            disableWeekday={["Monday", "Tuesday"]}
        />
        <Calendar enableRangeSelection />
    </div>
);

const comboboxInput = (
    <ComboboxInput
        list=''
        menu={
            <Menu>
                <Menu.List>
                    <Menu.Item url="/">Pear</Menu.Item>
                    <Menu.Item url="/">Strawberry</Menu.Item>
                    <Menu.Item url="/">Raspberry</Menu.Item>
                    <Menu.Item isLink url="/">
                        + New Item
                    </Menu.Item>
                </Menu.List>
            </Menu>
        }
        placeholder="Select Fruit"
    />
);

const contextualMenus = (
    <div>
        <Popover
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url="/">Option 1</Menu.Item>
                        <Menu.Item url="/">Option 2</Menu.Item>
                        <Menu.Item url="/">Option 3</Menu.Item>
                        <Menu.Item url="/">Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
            control={<Button glyph="vertical-grip" option="transparent" />}
            noArrow
        />
        <Popover
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url="/">Option 1</Menu.Item>
                        <Menu.Item url="/">Option 2</Menu.Item>
                        <Menu.Item url="/">Option 3</Menu.Item>
                        <Menu.Item url="/">Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
            control={<Button>More</Button>}
            noArrow
        />
        <Popover
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url="/">Option 1</Menu.Item>
                        <Menu.Item url="/">Option 2</Menu.Item>
                        <Menu.Item url="/">Option 3</Menu.Item>
                        <Menu.Item url="/">Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
            control={<Button option="transparent">More</Button>}
            noArrow
        />
    </div>
);

const datePickers = (
    <div>
        <DatePicker
            disableBeforeDate={new Date("2018-12-23T23:00:00.000Z")}
            disableWeekends
        />
        <DatePicker
            blockedDates={[
                new Date("2018-11-30T23:00:00.000Z"),
                new Date("2018-12-22T23:00:00.000Z")
            ]}
            compact
            disableWeekday={["Monday", "Tuesday"]}
        />
        <DatePicker disableFutureDates enableRangeSelection />
        <DatePicker compact disablePastDates enableRangeSelection />
    </div>
);

const dialogs = (
    <div>
        <button className="fd-button" onClick={function w() {}}>
            Show Information Modal
        </button>
        <Dialog actions={[]} onClose={function w() {}} title="Product Added">
            <div>
                <b>The new product have been added to your catalog.</b>
                <br />
                <br />
                Automatic Product ID:
                <b>PD-3465334</b>
                <br />
                <br />
                Expiration date:
                <b>13/03/2018</b>
                <br />
                <br />
            </div>
        </Dialog>
        <Dialog
            actions={[
                <>
                    <Button onClick={function w() {}} type="standard">
                        No Way
                    </Button>
                    <Button onClick={function w() {}}>Sure</Button>
                </>
            ]}
            onClose={function w() {}}
            title="Delete"
        >
            <div>
                Do you want to delete item
                <b>X</b>?
            </div>
        </Dialog>
        <Dialog
            actions={[
                <>
                    <Button onClick={function w() {}} type="standard">
                        Cancel
                    </Button>
                    <Button onClick={function w() {}}>Invite</Button>
                </>
            ]}
            onClose={function w() {}}
            title="Invite user"
        >
            <div className="fd-form__group">
                <div className="fd-form__item">
                    <label className="fd-form__label is-required">Email</label>
                    <input
                        className="fd-form__control"
                        onChange={function w() {}}
                        type="text"
                        value=""
                    />
                </div>
            </div>
        </Dialog>
    </div>
);

const forms = (
    <div>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="input-1">Default Input</FormLabel>
                <FormInput
                    id="input-1"
                    placeholder="Field placeholder text"
                    type="text"
                />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="input-2" required>
                    Required Input
                </FormLabel>
                <FormInput
                    id="input-2"
                    placeholder="Field placeholder text"
                    type="text"
                />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="input-3" required>
                    Password
                </FormLabel>
                <FormInput
                    id="input-3"
                    placeholder="Field placeholder text"
                    type="password"
                />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="textarea-1" required>
                    Text area
                </FormLabel>
                <FormTextarea
                    defaultValue=" Pellentesque metus lacus commodo eget justo ut rutrum varius nunc."
                    id="textarea-1"
                />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="input-4">
                    Input with inline help
                    <span className="fd-inline-help fd-has-float-right">
                        <span className="fd-inline-help__content fd-inline-help__content--bottom-right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </span>
                    </span>
                </FormLabel>
                <FormInput id="input-4" type="text" />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="input-5">Input with Help Message</FormLabel>
                <FormInput id="input-5" type="text" />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="OatmD552">Normal Input</FormLabel>
                <FormInput
                    id="OatmD552"
                    placeholder="Field placeholder text"
                    type="text"
                />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="OatmD553">Valid Input</FormLabel>
                <FormInput
                    id="OatmD553"
                    placeholder="Field placeholder text"
                    state="valid"
                    type="text"
                />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="OatmD554">Invalid Input</FormLabel>
                <FormInput
                    id="OatmD554"
                    placeholder="Field placeholder text"
                    state="invalid"
                    type="text"
                />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="OatmD555">Warning Input</FormLabel>
                <FormInput
                    id="OatmD555"
                    placeholder="Field placeholder text"
                    state="warning"
                    type="text"
                />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="OatmD557">Disabled Input</FormLabel>
                <FormInput
                    disabled
                    id="OatmD557"
                    placeholder="Field placeholder text"
                    type="text"
                />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="OatmD558">Readonly Input</FormLabel>
                <FormInput
                    id="OatmD558"
                    placeholder="Field placeholder text"
                    readOnly
                    type="text"
                />
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="select-1">Default Select</FormLabel>
                <FormSelect id="select-1">
                    <option value="1">
                        Duis malesuada odio volutpat elementum
                    </option>
                    <option value="2">Suspendisse ante ligula</option>
                    <option value="3">
                        Sed bibendum sapien at posuere interdum
                    </option>
                </FormSelect>
            </FormItem>
        </FormSet>
        <FormSet>
            <FormItem>
                <FormLabel htmlFor="select-1">Default Select</FormLabel>
                <FormSelect disabled id="select-1">
                    <option value="1">
                        Duis malesuada odio volutpat elementum
                    </option>
                    <option value="2">Suspendisse ante ligula</option>
                    <option value="3">
                        Sed bibendum sapien at posuere interdum
                    </option>
                </FormSelect>
            </FormItem>
        </FormSet>
        <FormFieldset>
            <FormLegend>Radio buttons</FormLegend>
            <FormRadioGroup>
                <FormRadioItem id="radio-1">Option 1</FormRadioItem>
                <FormRadioItem id="radio-2">Option 2</FormRadioItem>
                <FormRadioItem defaultChecked id="radio-3">
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
        </FormFieldset>
        <FormFieldset>
            <FormLegend>Radio buttons disabled</FormLegend>
            <FormRadioGroup>
                <FormRadioItem defaultChecked disabled id="radio-4">
                    Option 1
                </FormRadioItem>
                <FormRadioItem disabled id="radio-5">
                    Option 2
                </FormRadioItem>
                <FormRadioItem disabled id="radio-6">
                    Option 3
                </FormRadioItem>
            </FormRadioGroup>
        </FormFieldset>
        <FormFieldset>
            <FormLegend>Inline Radio buttons</FormLegend>
            <FormRadioGroup inline>
                <FormRadioItem id="radio-7">Option 1</FormRadioItem>
                <FormRadioItem defaultChecked id="radio-8">
                    Option 2
                </FormRadioItem>
                <FormRadioItem id="radio-9">Option 3</FormRadioItem>
            </FormRadioGroup>
        </FormFieldset>
        <FormFieldset>
            <FormLegend>Checkboxes</FormLegend>
            <FormItem isCheck>
                <FormInput
                    id="checkbox-1"
                    name="checkbox-name-1"
                    type="checkbox"
                    value=""
                />
                <FormLabel htmlFor="checkbox-1">Option One</FormLabel>
            </FormItem>
            <FormItem isCheck>
                <FormInput
                    id="checkbox-2"
                    name="checkbox-name-2"
                    type="checkbox"
                    value=""
                />
                <FormLabel htmlFor="checkbox-2">Option Two</FormLabel>
            </FormItem>
            <FormItem isCheck>
                <FormInput
                    id="checkbox-3"
                    name="checkbox-name-3"
                    type="checkbox"
                    value=""
                />
                <FormLabel htmlFor="checkbox-3">Option Three</FormLabel>
            </FormItem>
        </FormFieldset>
        <FormFieldset>
            <FormLegend>Inline Checkbox buttons</FormLegend>
            <FormItem isCheck isInline>
                <FormLabel htmlFor="checkbox-4">
                    <FormInput
                        id="checkbox-4"
                        name="checkbox-name-4"
                        type="checkbox"
                        value=""
                    />
                    Option One
                </FormLabel>
            </FormItem>
            <FormItem isCheck isInline>
                <FormLabel htmlFor="checkbox-5">
                    <FormInput
                        id="checkbox-5"
                        name="checkbox-name-5"
                        type="checkbox"
                        value=""
                    />
                    Option Two
                </FormLabel>
            </FormItem>
            <FormItem isCheck isInline>
                <FormLabel htmlFor="checkbox-6">
                    <Checkbox
                        id="checkbox-6"
                        name="checkbox-name-6"
                        type="checkbox"
                        value=""
                    />
                    Option Three
                </FormLabel>
            </FormItem>
        </FormFieldset>
    </div>
);

const icons = (
    <div>
        <Icon glyph="cart" size="s" />
        <Icon glyph="cart" />
        <Icon glyph="cart" size="m" />
        <Icon glyph="cart" size="l" />
        <Icon glyph="cart" size="xl" />
    </div>
);

const images = (
    <div>
        <Image photo="https://placeimg.com/400/400/nature" size="s" />
        <Image photo="https://placeimg.com/400/400/nature" size="m" />
        <Image photo="https://placeimg.com/400/400/nature" size="l" />
        <Image
            photo="https://placeimg.com/400/400/nature"
            size="s"
            type="circle"
        />
        <Image
            photo="https://placeimg.com/400/400/nature"
            size="m"
            type="circle"
        />
        <Image
            photo="https://placeimg.com/400/400/nature"
            size="l"
            type="circle"
        />
    </div>
);

const infoLabels = (
    <div>
        <InfoLabel>Default</InfoLabel>
        <InfoLabel glyph='key'>Icon</InfoLabel>
        <InfoLabel glyph='upload-to-cloud' />
        <InfoLabel numeric>1</InfoLabel>
        <InfoLabel numeric>10000</InfoLabel>
        <InfoLabel color={1}>Default</InfoLabel>
        <InfoLabel color={2}>Default</InfoLabel>
        <InfoLabel color={3}>Default</InfoLabel>
        <InfoLabel color={4}>Default</InfoLabel>
        <InfoLabel color={5}>Default</InfoLabel>
        <InfoLabel color={6}>Default</InfoLabel>
        <InfoLabel color={7}>Default</InfoLabel>
        <InfoLabel color={8}>Default</InfoLabel>
        <InfoLabel color={9}>Default</InfoLabel>
        <InfoLabel color={10}>Default</InfoLabel>
    </div>
);

const inlineHelp = (
    <div>
        Bottom Right (Default)
        <InlineHelp
            placement="bottom-right"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing."
        />
    </div>
);

const formGroup = <FormGroup />;

const inputGroup = (
    <div>
        <FormGroup>
            <FormLabel>Left Aligned Text Addon</FormLabel>
            <FormItem>
                <InputGroup
                    addon="$"
                    addonPos="before"
                    inputValue="1234567890"
                />
            </FormItem>
        </FormGroup>
        <br />
        <FormGroup>
            <FormLabel>Right Aligned Text Addon</FormLabel>
            <FormItem>
                <InputGroup addon="€" inputValue="1234567890" />
            </FormItem>
        </FormGroup>
        <br />
        <p>Compact mode</p>
        <FormGroup>
            <FormLabel>Left Aligned Text Addon</FormLabel>
            <FormItem>
                <InputGroup
                    addon="$"
                    addonPos="before"
                    compact
                    inputValue="1234567890"
                />
            </FormItem>
        </FormGroup>
        <br />
        <FormGroup>
            <FormLabel>Right Aligned Text Addon</FormLabel>
            <FormItem>
                <InputGroup addon="€" compact inputValue="1234567890" />
            </FormItem>
        </FormGroup>
        <FormGroup>
            <FormLabel>Right Aligned Text Addon</FormLabel>
            <FormItem>
                <InputGroup inputType="number" inputValue={100} />
            </FormItem>
        </FormGroup>
        <br />
        <p>Compact mode</p>
        <FormGroup>
            <FormLabel>Right Aligned Text Addon</FormLabel>
            <FormItem>
                <InputGroup compact inputType="number" inputValue={100} />
            </FormItem>
        </FormGroup>
        <FormGroup>
            <FormLabel>Search Input</FormLabel>
            <FormItem>
                <InputGroup inputPlaceholder="Search Term" inputType="search" />
            </FormItem>
        </FormGroup>
        <br />
        <p>Compact mode</p>
        <FormGroup>
            <FormLabel>Search Input</FormLabel>
            <FormItem>
                <InputGroup
                    compact
                    inputPlaceholder="Search Term"
                    inputType="search"
                />
            </FormItem>
        </FormGroup>
        <br />
        <br />
        <FormGroup>
            <FormLabel>Input with icon on the left</FormLabel>
            <FormItem>
                <InputGroup
                    addonPos="before"
                    glyph="globe"
                    inputValue="1234567890"
                />
            </FormItem>
        </FormGroup>
        <br />
        <p>Compact mode</p>
        <FormGroup>
            <FormLabel>Input with icon on the left</FormLabel>
            <FormItem>
                <InputGroup
                    addonPos="before"
                    compact
                    glyph="globe"
                    inputValue="1234567890"
                />
            </FormItem>
        </FormGroup>
        <br />
        <br />
        <FormGroup>
            <FormLabel>Input with icon on the right</FormLabel>
            <FormItem>
                <InputGroup glyph="hide" inputValue="1234567890" />
            </FormItem>
        </FormGroup>
        <br />
        <p>Compact mode</p>
        <FormGroup>
            <FormLabel>Input with icon on the right</FormLabel>
            <FormItem>
                <InputGroup compact glyph="hide" inputValue="1234567890" />
            </FormItem>
        </FormGroup>
        <FormGroup>
            <FormLabel>Input with text action</FormLabel>
            <FormItem>
                <InputGroup actions inputValue="1234567890">
                    <Button option="transparent">Button</Button>
                </InputGroup>
            </FormItem>
        </FormGroup>
        <br />
        <p>Compact mode</p>
        <FormGroup>
            <FormLabel>Input with text action</FormLabel>
            <FormItem>
                <InputGroup actions compact inputValue="1234567890">
                    <Button option="transparent">Button</Button>
                </InputGroup>
            </FormItem>
        </FormGroup>
        <br />
        <br />
        <FormGroup>
            <FormLabel>Input with icon text action</FormLabel>
            <FormItem>
                <InputGroup actions>
                    <Button glyph="navigation-down-arrow" option="transparent" />
                </InputGroup>
            </FormItem>
        </FormGroup>
        <br />
        <p>Compact mode</p>
        <FormGroup>
            <FormLabel>Input with icon text action</FormLabel>
            <FormItem>
                <InputGroup actions compact>
                    <Button glyph="navigation-down-arrow" option="transparent" />
                </InputGroup>
            </FormItem>
        </FormGroup>
    </div>
);

const links = (
    <div>
        <Link href='#'>Default Link</Link>
        <Link disabled href='#'>Disabled Link</Link>
    </div>
);

const lists = (
    <div>
        <List compact noBorder>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Text>List Item 1</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 2</List.Text>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Item>
                <List.Text>List Item 3</List.Text>
                <List.Text secondary>secondary</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 4</List.Text>
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    </div>
);

const localizationEditors = (
    <div>
        <LocalizationEditor
            control={{
                label: "Localization Editor Label",
                language: "EN*",
                placeholder: "Enter Label"
            }}
            menu={[
                {
                    language: "ES",
                    placeholder: "Enter Label"
                },
                {
                    language: "CH",
                    placeholder: "Enter Label"
                },
                {
                    language: "PL",
                    placeholder: "Enter Label"
                }
            ]}
        />
        <br />
        <LocalizationEditor
            compact
            control={{
                label: "Localization Editor Compact Mode",
                language: "EN*",
                placeholder: "Enter Label"
            }}
            menu={[
                {
                    language: "ES",
                    placeholder: "Enter Label"
                },
                {
                    language: "CH",
                    placeholder: "Enter Label"
                },
                {
                    language: "PL",
                    placeholder: "Enter Label"
                }
            ]}
        />
        <LocalizationEditor
            control={{
                label: "Localization Editor Label",
                language: "EN*",
                placeholder: "Enter Label"
            }}
            menu={[
                {
                    language: "ES",
                    placeholder: "Enter Label"
                },
                {
                    language: "CH",
                    placeholder: "Enter Label"
                },
                {
                    language: "PL",
                    placeholder: "Enter Label"
                }
            ]}
            textarea
        />
    </div>
);

const menus = (
    <div>
        <Menu>
            <Menu.List>
                <Menu.Item url="/">Option 1</Menu.Item>
                <Menu.Item url="/">Option 2</Menu.Item>
                <Menu.Item url="/">Option 3</Menu.Item>
                <Menu.Item url="/">Option 4</Menu.Item>
            </Menu.List>
        </Menu>
        <Menu>
            <Menu.List>
                <Menu.Item>
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
            </Menu.List>
            <Menu.Group title="Group Header">
                <Menu.List>
                    <Menu.Item>
                        <Menu.Item url="/">Option 1</Menu.Item>
                    </Menu.Item>
                    <Menu.Item>
                        <Menu.Item url="/">Option 1</Menu.Item>
                    </Menu.Item>
                    <Menu.Item>
                        <Menu.Item url="/">Option 1</Menu.Item>
                    </Menu.Item>
                </Menu.List>
            </Menu.Group>
        </Menu>
        <Menu>
            <Menu.List>
                <Menu.Item>
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
            </Menu.List>
        </Menu>
        <Menu addonBefore>
            <Menu.List>
                <Menu.Item>
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
                <Menu.Item addon="accept">
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Item url="/">Option 1</Menu.Item>
                </Menu.Item>
            </Menu.List>
        </Menu>
    </div>
);

const messageStrips = (
    <div>
        <MessageStrip
            dismissible
            link='#'
            linkText='link'>
            Default MessageStrip
        </MessageStrip>
        <MessageStrip
            dismissible
            link='#'
            linkText='Learn More'
            type='error'>
            Error Message.
        </MessageStrip>
        <MessageStrip noGlyph>
            Error Message with no icon
        </MessageStrip>
    </div>
);

const multiInputs = (
    <div>
        <MultiInput
            data={[
                "Apple",
                "Apricot",
                "Acai",
                "African Moringa",
                "Bearberry",
                "Bilberry",
                "Blood orange",
                "Barbadine",
                "Barbados cherry",
                "Balsam Apple",
                "Chokeberry",
                "Cranberry",
                "Cupuacu"
            ]}
            onTagsUpdate={function w() {}}
            placeHolder="Select a Fruit"
        />
        <MultiInput
            compact
            data={[
                "Apple",
                "Apricot",
                "Acai",
                "African Moringa",
                "Bearberry",
                "Bilberry",
                "Blood orange",
                "Barbadine",
                "Barbados cherry",
                "Balsam Apple",
                "Chokeberry",
                "Cranberry",
                "Cupuacu"
            ]}
            onTagsUpdate={function w() {}}
            placeHolder="Select a Fruit"
        />
    </div>
);

const objectStatus = (
    <ObjectStatus indication={1} size={'l'}/>
);

const paginations = (
    <div>
        <Pagination itemsTotal={101} onClick={function w() {}} />
        <Pagination
            initialPage={11}
            itemsTotal={101}
            onClick={function w() {}}
        />
        <Pagination
            itemsPerPage={25}
            itemsTotal={101}
            onClick={function w() {}}
        />
        <Pagination
            displayTotal={false}
            itemsTotal={101}
            onClick={function w() {}}
        />
        <Pagination
            itemsTotal={101}
            onClick={function w() {}}
            totalText="Dalmations"
        />
    </div>
);

const layoutPanel = (
    <LayoutPanel>
        <LayoutPanel.Header>
            LayoutPanel Head
        </LayoutPanel.Header>
        <LayoutPanel.Body>
            LayoutPanel Body
        </LayoutPanel.Body>
    </LayoutPanel>
);

const popovers = (
    <div>
        <div>
            <div className="fd-container">
                <div className="fd-col--shift-3 fd-col--2 fd-has-text-align-center">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-up-arrow"
                                option="transparent"
                            />
                        }
                        placement="top-start"
                    />
                </div>
                <div className="fd-col--2 fd-has-text-align-center">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-up-arrow"
                                option="transparent"
                            />
                        }
                        placement="top"
                    />
                </div>
                <div className="fd-col--2 fd-has-text-align-center">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-up-arrow"
                                option="transparent"
                            />
                        }
                        placement="top-end"
                    />
                </div>
            </div>
            <div className="fd-container">
                <div className="fd-col--shift-2 fd-col--2">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-left-arrow"
                                option="transparent"
                            />
                        }
                        placement="left-start"
                    />
                </div>
                <div className="fd-col--shift-4 fd-col--2 fd-has-text-align-right">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-right-arrow"
                                option="transparent"
                            />
                        }
                        placement="right-start"
                    />
                </div>
            </div>
            <div className="fd-container">
                <div className="fd-col--shift-2 fd-col--2">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-left-arrow"
                                option="transparent"
                            />
                        }
                        placement="left"
                    />
                </div>
                <div className="fd-col--shift-4 fd-col--2 fd-has-text-align-right">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-right-arrow"
                                option="transparent"
                            />
                        }
                        placement="right"
                    />
                </div>
            </div>
            <div className="fd-container">
                <div className="fd-col--shift-2 fd-col--2">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-left-arrow"
                                option="transparent"
                            />
                        }
                        placement="left-end"
                    />
                </div>
                <div className="fd-col--shift-4 fd-col--2 fd-has-text-align-right">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-right-arrow"
                                option="transparent"
                            />
                        }
                        placement="right-end"
                    />
                </div>
            </div>
            <div className="fd-container">
                <div className="fd-col--shift-3 fd-col--2 fd-has-text-align-center">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-down-arrow"
                                option="transparent"
                            />
                        }
                        placement="bottom-start"
                    />
                </div>
                <div className="fd-col--2 fd-has-text-align-center">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-down-arrow"
                                option="transparent"
                            />
                        }
                        placement="bottom"
                    />
                </div>
                <div className="fd-col--2 fd-has-text-align-center">
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url="/">Option 1</Menu.Item>
                                    <Menu.Item url="/">Option 2</Menu.Item>
                                    <Menu.Item url="/">Option 3</Menu.Item>
                                    <Menu.Item url="/">Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={
                            <Button
                                glyph="navigation-down-arrow"
                                option="transparent"
                            />
                        }
                        placement="bottom-end"
                    />
                </div>
            </div>
        </div>
        <div className="fd-doc__margin--popover">
            <Popover
                body={
                    <Menu>
                        <Menu.List>
                            <Menu.Item url="/">Option 1</Menu.Item>
                            <Menu.Item url="/">Option 2</Menu.Item>
                            <Menu.Item url="/">Option 3</Menu.Item>
                            <Menu.Item url="/">Option 4</Menu.Item>
                        </Menu.List>
                    </Menu>
                }
                control={<Icon glyph="cart" size="xl" />}
                noArrow
                placement="left"
            />
            <Popover
                body={
                    <Menu>
                        <Menu.List>
                            <Menu.Item url="/">Option 1</Menu.Item>
                            <Menu.Item url="/">Option 2</Menu.Item>
                            <Menu.Item url="/">Option 3</Menu.Item>
                            <Menu.Item url="/">Option 4</Menu.Item>
                        </Menu.List>
                    </Menu>
                }
                control={
                    <Image
                        photo="https://placeimg.com/400/400/nature"
                        size="m"
                        type="circle"
                    />
                }
                noArrow
                placement="top"
            />
            <Popover
                body={
                    <Menu>
                        <Menu.List>
                            <Menu.Item url="/">Option 1</Menu.Item>
                            <Menu.Item url="/">Option 2</Menu.Item>
                            <Menu.Item url="/">Option 3</Menu.Item>
                            <Menu.Item url="/">Option 4</Menu.Item>
                        </Menu.List>
                    </Menu>
                }
                control={<Icon glyph="menu2" size="xl" />}
                noArrow
                placement="bottom"
            />
            <Popover
                body={
                    <Menu>
                        <Menu.List>
                            <Menu.Item url="/">Option 1</Menu.Item>
                            <Menu.Item url="/">Option 2</Menu.Item>
                            <Menu.Item url="/">Option 3</Menu.Item>
                            <Menu.Item url="/">Option 4</Menu.Item>
                        </Menu.List>
                    </Menu>
                }
                control={<Icon glyph="menu2" size="xl" />}
                noArrow
                placement="right"
            />
        </div>
        <div>
            <Button onClick={function w() {}}>Show Modal</Button>
            <Dialog
                actions={[]}
                bodyProps={{
                    style: {
                        height: "200px",
                        overflowY: "auto",
                        textAlign: "center",
                        width: "400px"
                    }
                }}
                onClose={function w() {}}
                title="Overflow Example"
            >
                <p>
                    Click the icon to show the popover and then scroll within
                    the modal body...
                </p>
                <br />
                <br />
                <Popover
                    body={
                        <Menu>
                            <Menu.List>
                                <Menu.Item url="/">Option 1</Menu.Item>
                                <Menu.Item url="/">Option 2</Menu.Item>
                                <Menu.Item url="/">Option 3</Menu.Item>
                                <Menu.Item url="/">Option 4</Menu.Item>
                            </Menu.List>
                        </Menu>
                    }
                    control={<Icon glyph="menu2" size="xl" />}
                    placement="bottom"
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Dialog>
        </div>
    </div>
);

const searchInputs = (
    <div>
        <SearchInput
            onEnter={function w() {}}
            placeholder="Enter a fruit"
            searchList={[
                {
                    callback: function w() {},
                    text: "apple"
                },
                {
                    callback: function w() {},
                    text: "apricot"
                },
                {
                    callback: function w() {},
                    text: "banana"
                },
                {
                    callback: function w() {},
                    text: "blueberry"
                },
                {
                    callback: function w() {},
                    text: "blackberry"
                },
                {
                    callback: function w() {},
                    text: "calabash"
                },
                {
                    callback: function w() {},
                    text: "clementines"
                },
                {
                    callback: function w() {},
                    text: "kiwi"
                },
                {
                    callback: function w() {},
                    text: "orange"
                }
            ]}
        />
        <br />
        <SearchInput
            noSearchBtn
            onChange={function w() {}}
            placeholder="Enter a fruit"
        />
        <br />
        <SearchInput
            compact
            onEnter={function w() {}}
            placeholder="Enter a fruit"
            searchList={[
                {
                    callback: function w() {},
                    text: "apple"
                },
                {
                    callback: function w() {},
                    text: "apricot"
                },
                {
                    callback: function w() {},
                    text: "banana"
                },
                {
                    callback: function w() {},
                    text: "blueberry"
                },
                {
                    callback: function w() {},
                    text: "blackberry"
                },
                {
                    callback: function w() {},
                    text: "calabash"
                },
                {
                    callback: function w() {},
                    text: "clementines"
                },
                {
                    callback: function w() {},
                    text: "kiwi"
                },
                {
                    callback: function w() {},
                    text: "orange"
                }
            ]}
        />
    </div>
);

const selects = (
    <div>
        <Select placeholder='Select' options={[
            {text: "List Item 1", key: "1"},
            {text: "List Item 2", key: "2"}
        ]} selectedKey={"2"}>
        </Select>

        <Select compact validationState={{state: 'warning', text: 'Validated'}}>
        </Select>
    </div>
);

const shellbars = (
    <div>
        <Shellbar
            logo={
                <img
                    alt="SAP"
                    src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png"
                />
            }
            productTitle="Corporate Portal"
            profile={{
                colorAccent: 8,
                initials: "JS",
                userName: "John Snow"
            }}
            profileMenu={[
                {
                    callback: function w() {},
                    glyph: "action-settings",
                    name: "Settings",
                    size: "s"
                },
                {
                    callback: function w() {},
                    glyph: "log",
                    name: "Sign Out",
                    size: "s"
                }
            ]}
        />
        <Shellbar
            backAction={function w() {}}
            logo={
                <img
                    alt="SAP"
                    src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png"
                />
            }
            productTitle="Corporate Portal"
            profile={{
                colorAccent: 8,
                initials: "JS",
                userName: "John Snow"
            }}
            profileMenu={[
                {
                    callback: function w() {},
                    glyph: "action-settings",
                    name: "Settings",
                    size: "s"
                },
                {
                    callback: function w() {},
                    glyph: "log",
                    name: "Sign Out",
                    size: "s"
                }
            ]}
        />
        <Shellbar
            logoSAP
            notifications={{
                callback: function w() {},
                label: "Notifications",
                notificationCount: 2
            }}
            productMenu={[
                {
                    callback: function w() {},
                    name: "Application A"
                },
                {
                    callback: function w() {},
                    name: "Application B"
                },
                {
                    callback: function w() {},
                    name: "Application C"
                },
                {
                    callback: function w() {},
                    name: "Application D"
                }
            ]}
            productTitle="Corporate Portal"
            profile={{
                image:
                    "/fundamental-react/static/media/headshot-male.10d4e22e.jpg",
                userName: "John Snow"
            }}
            profileMenu={[
                {
                    callback: function w() {},
                    glyph: "action-settings",
                    name: "Settings",
                    size: "s"
                },
                {
                    callback: function w() {},
                    glyph: "log",
                    name: "Sign Out",
                    size: "s"
                }
            ]}
            searchInput={{
                callback: function w() {},
                label: "Search",
                onSearch: function w() {},
                placeholder: "Enter a fruit"
            }}
            subtitle="Subtitle"
        />
        <Shellbar
            actions={[
                {
                    callback: function w() {},
                    glyph: "settings",
                    label: "Settings",
                    menu: (
                        <Menu>
                            <Menu.List>
                                <Menu.Item url="/">Option 1</Menu.Item>
                                <Menu.Item url="/">Option 2</Menu.Item>
                                <Menu.Item url="/">Option 3</Menu.Item>
                            </Menu.List>
                        </Menu>
                    ),
                    notificationCount: 5
                }
            ]}
            copilot
            logoSAP
            notifications={{
                callback: function w() {},
                label: "Notifications",
                noNotificationsBody: (
                    <Menu>
                        <Menu.List>
                            <Menu.Item>There are no notifications</Menu.Item>
                        </Menu.List>
                    </Menu>
                ),
                notificationCount: 2,
                notificationsBody: (
                    <Menu>
                        <Menu.List>
                            <Menu.Item url="/">Notification 1</Menu.Item>
                            <Menu.Item url="/">Notification 2</Menu.Item>
                            <Menu.Item url="/">Notification 3</Menu.Item>
                        </Menu.List>
                    </Menu>
                )
            }}
            productMenu={[
                {
                    callback: function w() {},
                    name: "Application A"
                },
                {
                    callback: function w() {},
                    name: "Application B"
                },
                {
                    callback: function w() {},
                    name: "Application C"
                },
                {
                    callback: function w() {},
                    name: "Application D"
                }
            ]}
            productSwitch={{
                label: "Product Switcher"
            }}
            productSwitchList={[
                {
                    callback: function w() {},
                    glyph: "home",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "Fiori Home"
                },
                {
                    callback: function w() {},
                    glyph: "cloud",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "S/4 HANA Cloud"
                },
                {
                    callback: function w() {},
                    glyph: "business-objects-experience",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "Analytics Cloud"
                },
                {
                    callback: function w() {},
                    glyph: "activate",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "Ariba"
                },
                {
                    callback: function w() {},
                    glyph: "message-success",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "SuccessFactors"
                },
                {
                    callback: function w() {},
                    glyph: "retail-store",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "Commerce Cloud"
                },
                {
                    callback: function w() {},
                    glyph: "customer-view",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "Gigya"
                },
                {
                    callback: function w() {},
                    glyph: "globe",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "Callidus Cloud"
                },
                {
                    callback: function w() {},
                    glyph: "work-history",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "Fieldglass"
                },
                {
                    callback: function w() {},
                    glyph: "area-chart",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "Concur"
                },
                {
                    callback: function w() {},
                    glyph: "customer-view",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "Cloud for Customer"
                },
                {
                    callback: function w() {},
                    glyph: "customer",
                    image:
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    title: "Cloud Portal"
                }
            ]}
            productTitle="Corporate Portal"
            profile={{
                image:
                    "/fundamental-react/static/media/headshot-male.10d4e22e.jpg",
                userName: "John Snow"
            }}
            profileMenu={[
                {
                    callback: function w() {},
                    glyph: "action-settings",
                    name: "Settings",
                    size: "s"
                },
                {
                    callback: function w() {},
                    glyph: "log",
                    name: "Sign Out",
                    size: "s"
                }
            ]}
            searchInput={{
                callback: function w() {},
                label: "Search",
                onSearch: function w() {},
                placeholder: "Enter a fruit",
                searchList: [
                    {
                        callback: function w() {},
                        text: "apple"
                    },
                    {
                        callback: function w() {},
                        text: "apricot"
                    },
                    {
                        callback: function w() {},
                        text: "acai"
                    },
                    {
                        callback: function w() {},
                        text: "banana"
                    },
                    {
                        callback: function w() {},
                        text: "berry"
                    },
                    {
                        callback: function w() {},
                        text: "blueberry"
                    },
                    {
                        callback: function w() {},
                        text: "blackberry"
                    },
                    {
                        callback: function w() {},
                        text: "cranberry"
                    },
                    {
                        callback: function w() {},
                        text: "conkerberry"
                    },
                    {
                        callback: function w() {},
                        text: "calabash"
                    },
                    {
                        callback: function w() {},
                        text: "clementines"
                    },
                    {
                        callback: function w() {},
                        text: "kiwi"
                    },
                    {
                        callback: function w() {},
                        text: "orange"
                    }
                ]
            }}
            subtitle="Subtitle"
        />
    </div>
);

const sideNavs = (
    <div>
        <SideNav selectedId="item-2">
            <SideNav.List>
                <SideNav.ListItem id="item-1" name="Link Item" url="#" />
                <SideNav.ListItem id="item-2" name="Link Item" url="#" />
                <SideNav.ListItem id="item-3" name="Link Item" url="#" />
                <SideNav.ListItem id="item-4" name="Link Item" url="#" />
                <SideNav.ListItem id="item-5" name="Link Item" url="#" />
            </SideNav.List>
        </SideNav>
        <SideNav selectedId="item_2">
            <SideNav.List title="Group Title">
                <SideNav.ListItem id="item_1" name="Link Item" url="#" />
                <SideNav.ListItem id="item_2">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
                <SideNav.ListItem id="item_3">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
                <SideNav.ListItem id="item_4">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
                <SideNav.ListItem id="item_5">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
            </SideNav.List>
            <SideNav.List title="Group Title">
                <SideNav.ListItem id="item_6">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
                <SideNav.ListItem id="item_7">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
                <SideNav.ListItem id="item_8">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
                <SideNav.ListItem id="item_9">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
                <SideNav.ListItem id="item_10">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
            </SideNav.List>
        </SideNav>
        <SideNav selectedId="item-2">
            <SideNav.List>
                <SideNav.ListItem id="item-1" name="Link Item 1" url="#" />
                <SideNav.ListItem id="item-2" name="Link Item 2" url="#">
                    <SideNav.List>
                        <SideNav.ListItem
                            id="subitem_21"
                            name="Item 1"
                            url="#"
                        />
                        <SideNav.ListItem
                            id="subitem_22"
                            name="Item 2"
                            url="#"
                        />
                        <SideNav.ListItem
                            id="subitem_23"
                            name="Item 3"
                            url="#"
                        />
                        <SideNav.ListItem
                            id="subitem_24"
                            name="Item 4"
                            url="#"
                        />
                    </SideNav.List>
                </SideNav.ListItem>
                <SideNav.ListItem id="item_3" name="Link Item 3" url="#" />
                <SideNav.ListItem id="item_4" name="Link Item 4" url="#">
                    <SideNav.List>
                        <SideNav.ListItem
                            id="subitem_41"
                            name="Item 1"
                            url="#"
                        />
                        <SideNav.ListItem
                            id="subitem_42"
                            name="Item 2"
                            url="#"
                        />
                        <SideNav.ListItem
                            id="subitem_43"
                            name="Item 3"
                            url="#"
                        />
                        <SideNav.ListItem
                            id="subitem_44"
                            name="Item 4"
                            url="#"
                        />
                    </SideNav.List>
                </SideNav.ListItem>
                <SideNav.ListItem id="item_5" name="Link Item 5" url="#" />
            </SideNav.List>
        </SideNav>
        <SideNav selectedId="item-2">
            <SideNav.List>
                <SideNav.ListItem glyph="home" id="item-1">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
                <SideNav.ListItem glyph="home" id="item-2">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
                <SideNav.ListItem glyph="home" id="item-3">
                    <a href="#">Link Item</a>
                </SideNav.ListItem>
                <SideNav.ListItem
                    glyph="home"
                    id="item-4"
                    name="Link Item"
                    url="#"
                />
                <SideNav.ListItem
                    glyph="home"
                    id="item-5"
                    name="Link Item"
                    url="#"
                />
            </SideNav.List>
        </SideNav>
        <SideNav selectedId="item-2">
            <SideNav.List>
                <SideNav.ListItem glyph="home" id="item-1" url="#" />
                <SideNav.ListItem glyph="home" id="item-2" url="#" />
                <SideNav.ListItem glyph="home" id="item-3" url="#" />
                <SideNav.ListItem glyph="home" id="item-4" url="#" />
                <SideNav.ListItem glyph="home" id="item-5" url="#" />
            </SideNav.List>
        </SideNav>
    </div>
);

const stepInputs = (
    <div>
        <StepInput disabled value={10} />
        <StepInput readOnly value={10} />
        <StepInput
            placeholder='Error'
            validationState={{
                state: 'error',
                text: 'Test validation state'
            }} />
    </div>
);

const tables = (
    <div>
        <Table
            headers={[
                "Column Header 1",
                "Column Header 2",
                "Column Header 3",
                "Column Header 4"
            ]}
            tableData={[
                {
                    rowData: ["Data 1", "Data 2", "Data 3", "Data 4"]
                },
                {
                    rowData: ["Data 5", "Data 6", "Data 7", "Data 8"]
                }
            ]}
        />
        <Table
            headers={[
                <input type="checkbox" />,
                "Avatar",
                "email",
                "First Name",
                "Last Name",
                "Date",
                " "
            ]}
            tableData={[
                {
                    rowData: [
                        <input type="checkbox" />,
                        <Image
                            photo="https://robohash.org/green?size=50x50"
                            size="m"
                        />,
                        <a className="fd-has-font-weight-semi" href="#">
                            user.name@email.com
                        </a>,
                        "First Name",
                        "Last Name",
                        "01/26/17",
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url="/">Option 1</Menu.Item>
                                        <Menu.Item url="/">Option 2</Menu.Item>
                                        <Menu.Item url="/">Option 3</Menu.Item>
                                        <Menu.Item url="/">Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={
                                <Button glyph="vertical-grip" option="transparent" />
                            }
                            placement="bottom-end"
                        />
                    ]
                },
                {
                    rowData: [
                        <input type="checkbox" />,
                        <Image
                            photo="https://robohash.org/brown?size=50x50"
                            size="m"
                        />,
                        <a className="fd-has-font-weight-semi" href="#">
                            florence.garcia@qwerty.io
                        </a>,
                        "First Name",
                        "Last Name",
                        "07/29/18",
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url="/">Option 1</Menu.Item>
                                        <Menu.Item url="/">Option 2</Menu.Item>
                                        <Menu.Item url="/">Option 3</Menu.Item>
                                        <Menu.Item url="/">Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={
                                <Button glyph="vertical-grip" option="transparent" />
                            }
                            placement="bottom-end"
                        />
                    ]
                },
                {
                    rowData: [
                        <input type="checkbox" />,
                        <Image
                            photo="https://robohash.org/Q27.png?set=set1&size=50x50"
                            size="m"
                        />,
                        <a className="fd-has-font-weight-semi" href="#">
                            mark.helper@qwerty.io
                        </a>,
                        "First Name",
                        "Last Name",
                        "05/26/18",
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url="/">Option 1</Menu.Item>
                                        <Menu.Item url="/">Option 2</Menu.Item>
                                        <Menu.Item url="/">Option 3</Menu.Item>
                                        <Menu.Item url="/">Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={
                                <Button glyph="vertical-grip" option="transparent" />
                            }
                            placement="bottom-end"
                        />
                    ]
                },
                {
                    rowData: [
                        <input type="checkbox" />,
                        <Image
                            photo="https://robohash.org/water?&size=50x50"
                            size="m"
                        />,
                        <a className="fd-has-font-weight-semi" href="#">
                            user.name@email.com
                        </a>,
                        "First Name",
                        "Last Name",
                        "01/26/14",
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url="/">Option 1</Menu.Item>
                                        <Menu.Item url="/">Option 2</Menu.Item>
                                        <Menu.Item url="/">Option 3</Menu.Item>
                                        <Menu.Item url="/">Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={
                                <Button glyph="vertical-grip" option="transparent" />
                            }
                            placement="bottom-end"
                        />
                    ]
                }
            ]}
        />
    </div>
);

const tabs = (
    <div>
        <TabGroup>
            <Tab id="1" title="Tab 1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tab>
            <Tab id="2" title="Tab 2">
                Numquam libero id corporis odit animi voluptat, Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Possimus quia
                tempore eligendi tempora repellat officia rerum laudantium,
                veritatis officiis asperiores ipsum nam, distinctio, dolor
                provident culpa voluptatibus esse deserunt animi?
            </Tab>
            <Tab disabled id="3" title="Tab 3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tab>
            <Tab glyph="cart" id="4">
                Please review your shopping chart.
            </Tab>
        </TabGroup>
    </div>
);

const tiles = (
    <div>
        <Tile>
            <Tile.Content title="Tile Title">
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
        <Tile>
            <Tile.Media>
                <Image photo="https://placeimg.com/400/400/nature" size="m" />
            </Tile.Media>
            <Tile.Content title="Tile Title" />
        </Tile>
        <br />
        <Tile role="button">
            <Tile.Media>
                <Image
                    photo="https://placeimg.com/400/400/nature"
                    size="l"
                    type="circle"
                />
            </Tile.Media>
            <Tile.Content title="Tile Title">
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
        <br />
        <Tile role="button">
            <Tile.Content title="Tile Title">
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
        <Tile>
            <Tile.Content title="Tile Title" />
            <Tile.Actions>
                <Popover
                    body={
                        <Menu>
                            <Menu.List>
                                <Menu.Item url="/">Option 1</Menu.Item>
                                <Menu.Item url="/">Option 2</Menu.Item>
                                <Menu.Item url="/">Option 3</Menu.Item>
                                <Menu.Item url="/">Option 4</Menu.Item>
                            </Menu.List>
                        </Menu>
                    }
                    control={<Button glyph="vertical-grip" option="transparent" />}
                    placement="bottom-end"
                />
            </Tile.Actions>
        </Tile>
        <Tile product role="button">
            <Tile.Media image="https://techne.yaas.io/images/product-thumbnail-wide.png" />
            <Tile.Content title="Tile Title">
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
        <br />
        <Tile product disabled>
            <Tile.Media image="https://techne.yaas.io/images/product-thumbnail-wide.png" />
            <Tile.Content title="Tile Title">
                <p>Tile Description</p>
            </Tile.Content>
        </Tile>
        <LayoutGrid cols={4}>
            <Tile colorAccent={7} rowSpan={2}>
                <Tile.Content title="Tile Title">
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
            <Tile>
                <Tile.Media>
                    <Image
                        photo="https://placeimg.com/400/400/nature"
                        size="l"
                        type="circle"
                    />
                </Tile.Media>
                <Tile.Content title="Tile Title">
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
            <Tile>
                <Tile.Content title="Tile Title">
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
            <Tile role="button">
                <Tile.Content title="Tile Title" />
            </Tile>
            <Tile>
                <Tile.Content title="Tile Title">
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
            <Tile colorAccent={4} columnSpan={2}>
                <Tile.Content title="Tile Title">
                    <p>Tile Description</p>
                </Tile.Content>
            </Tile>
        </LayoutGrid>
    </div>
);

const times = (
    <div>
        <Time />
        <Time format12Hours />
        <Time spinners={false} />
        <Time showSecond={false} />
        <Time disabled />
    </div>
);
const timePickers = (
    <div>
        <TimePicker />
        <TimePicker format12Hours />
        <TimePicker showSecond={false} />
        <TimePicker disabled />
    </div>
);

const title = (
    <div>
        <Title level={1}>Fundamental React Title 1</Title>
        <Title level={2}>Fundamental React Title 2</Title>
        <Title level={3}>Fundamental React Title 3</Title>
        <Title level={4}>Fundamental React Title 4</Title>
        <Title level={5}>Fundamental React Title 5</Title>
        <Title level={6}>Fundamental React Title 6</Title>
    </div>
);

const switches = (
    <div>
        <Switch>
            switch
        </Switch>
    </div>
);

const tokens = (
    <div>
        <Token onClick={function w() {}}>Bibendum</Token>
        <Token onClick={function w() {}}>Lorem</Token>
        <Token onClick={function w() {}}>Dolor</Token>
        <Token onClick={function w() {}}>Filter</Token>
    </div>
);

const treeViews = (
    <div>
        <TreeView>
            <TreeView.Tree>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 1</TreeView.Col>
                    </TreeView.Row>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 2</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 2</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 3</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                            </TreeView.Row>
                            <TreeView.Branch>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col>
                                            Grandchild 1
                                        </TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col>
                                            Grandchild 2
                                        </TreeView.Col>
                                    </TreeView.Row>
                                </TreeView.Item>
                            </TreeView.Branch>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
            </TreeView.Tree>
        </TreeView>
        <TreeView>
            <TreeView.Head>
                <TreeView.Col>Column Header 1</TreeView.Col>
                <TreeView.Col>Column Header 2</TreeView.Col>
                <TreeView.Col>Column Header 3</TreeView.Col>
                <TreeView.Col>Column Header 4</TreeView.Col>
            </TreeView.Head>
            <TreeView.Tree>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 1</TreeView.Col>
                        <TreeView.Col>Data Col 2</TreeView.Col>
                        <TreeView.Col>Data Col 3</TreeView.Col>
                        <TreeView.Col>Data Col 4</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                                <TreeView.Col>Data Col 2</TreeView.Col>
                                <TreeView.Col>Data Col 3</TreeView.Col>
                                <TreeView.Col>Data Col 4</TreeView.Col>
                            </TreeView.Row>
                            <TreeView.Branch>
                                <TreeView.Item>
                                    <TreeView.Row>
                                        <TreeView.Col>
                                            Grandchild 1
                                        </TreeView.Col>
                                        <TreeView.Col>Data Col 2</TreeView.Col>
                                        <TreeView.Col>Data Col 3</TreeView.Col>
                                        <TreeView.Col>Data Col 4</TreeView.Col>
                                    </TreeView.Row>
                                    <TreeView.Branch>
                                        <TreeView.Item>
                                            <TreeView.Row>
                                                <TreeView.Col>
                                                    Great Grandchild 1
                                                </TreeView.Col>
                                                <TreeView.Col>
                                                    Data Col 2
                                                </TreeView.Col>
                                                <TreeView.Col>
                                                    Data Col 3
                                                </TreeView.Col>
                                                <TreeView.Col>
                                                    Data Col 4
                                                </TreeView.Col>
                                            </TreeView.Row>
                                        </TreeView.Item>
                                    </TreeView.Branch>
                                </TreeView.Item>
                            </TreeView.Branch>
                        </TreeView.Item>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 2</TreeView.Col>
                                <TreeView.Col>Data Col 2</TreeView.Col>
                                <TreeView.Col>Data Col 3</TreeView.Col>
                                <TreeView.Col>Data Col 4</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 2</TreeView.Col>
                        <TreeView.Col>Data Col 2</TreeView.Col>
                        <TreeView.Col>Data Col 3</TreeView.Col>
                        <TreeView.Col>Data Col 4</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                                <TreeView.Col>Data Col 2</TreeView.Col>
                                <TreeView.Col>Data Col 3</TreeView.Col>
                                <TreeView.Col>Data Col 4</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 2</TreeView.Col>
                                <TreeView.Col>Data Col 2</TreeView.Col>
                                <TreeView.Col>Data Col 3</TreeView.Col>
                                <TreeView.Col>Data Col 4</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 3</TreeView.Col>
                        <TreeView.Col>Data Col 2</TreeView.Col>
                        <TreeView.Col>Data Col 3</TreeView.Col>
                        <TreeView.Col>Data Col 4</TreeView.Col>
                    </TreeView.Row>
                </TreeView.Item>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 4</TreeView.Col>
                        <TreeView.Col>Data Col 2</TreeView.Col>
                        <TreeView.Col>Data Col 3</TreeView.Col>
                        <TreeView.Col>Data Col 4</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col>Child 1</TreeView.Col>
                                <TreeView.Col>Data Col 2</TreeView.Col>
                                <TreeView.Col>Data Col 3</TreeView.Col>
                                <TreeView.Col>Data Col 4</TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
            </TreeView.Tree>
        </TreeView>
        <TreeView>
            <TreeView.Head>
                <TreeView.Col>Column Header 1</TreeView.Col>
                <TreeView.Col>Column Header 2</TreeView.Col>
                <TreeView.Col>Column Header 3</TreeView.Col>
                <TreeView.Col>Column Header 4</TreeView.Col>
            </TreeView.Head>
            <TreeView.Tree>
                <TreeView.Item>
                    <TreeView.Row>
                        <TreeView.Col>Row 1</TreeView.Col>
                    </TreeView.Row>
                    <TreeView.Branch>
                        <TreeView.Item>
                            <TreeView.Row>
                                <TreeView.Col />
                                <TreeView.Col>
                                    <a href="http://www.google.com">Google</a>
                                </TreeView.Col>
                                <TreeView.Col>
                                    <a href="http://www.bing.com">Bing</a>
                                </TreeView.Col>
                                <TreeView.Col>
                                    <a href="http://www.yahoo.com">Yahoo</a>
                                </TreeView.Col>
                            </TreeView.Row>
                        </TreeView.Item>
                    </TreeView.Branch>
                </TreeView.Item>
            </TreeView.Tree>
        </TreeView>
    </div>
);
