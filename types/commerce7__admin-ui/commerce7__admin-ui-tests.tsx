import {
    Alert,
    Avatar,
    Breadcrumbs,
    Button,
    ButtonMenu,
    Card,
    CardLink,
    Checkbox,
    Columns,
    Commerce7AdminUI,
    ContextMenu,
    DataDisplay,
    DatePicker,
    DisplayIcon,
    Heading,
    Icon,
    InfoCard,
    Input,
    Legend,
    LineBreak,
    LinkButton,
    Modal,
    Nav,
    NoRecords,
    Picture,
    PieChart,
    ProgressBar,
    Radio,
    RadioGroup,
    Region,
    Select,
    SelectButton,
    Spinner,
    Stepper,
    SubMenu,
    Switch,
    Table,
    Tabs,
    Tag,
    Text,
    Textarea,
    VividIcon,
} from "@commerce7/admin-ui";
import * as React from "react";

const { Breadcrumb } = Breadcrumbs;
const { Column } = Columns;
const { InfoCardGrid } = InfoCard;
const { ModalBody, ModalFooter } = Modal;
const { ButtonMenuItem } = ButtonMenu;
const { ContextMenuItem, ContextMenuMoreActions } = ContextMenu;
const { SubNav, NavLink, SubNavLink } = Nav;
const { Step } = Stepper;
const { SubMenuItem } = SubMenu;
const { Tab, TabBody } = Tabs;
const { Thead, Tbody, Th, Td, Tr, Tfoot } = Table;

// Test components are the first sample code from https://admin-ui-docs.commerce7.com
export function TestComponent() {
    const [visible, setVisible] = React.useState(false);
    const openModal = () => {
        setVisible(true);
    };
    const closeModal = () => {
        setVisible(false);
    };

    const [currentPath, setPath] = React.useState("/dashboard");

    const path = currentPath.split("/")[1];
    const heading = path.charAt(0).toUpperCase() + path.slice(1);

    const [checked, setChecked] = React.useState(false);

    const [date, setDate] = React.useState<any>();

    const [radioChecked, setRadioChecked] = React.useState("");

    const [selectValue, setSelectValue] = React.useState("");

    const [switched, setSwitched] = React.useState(false);

    const [textAreaValue, setTextAreaValue] = React.useState("");

    return (
        <Commerce7AdminUI>
            <Alert>This is an alert</Alert>

            <Avatar label="JH" />

            <Breadcrumbs>
                <Breadcrumb href="https://commerce7.com">Settings</Breadcrumb>
                <Breadcrumb href="https://commerce7.com">Departments</Breadcrumb>
                <Breadcrumb>Edit</Breadcrumb>
            </Breadcrumbs>

            <Card className="example-class__wine-joke--lame">
                <Heading>
                    John Smith
                </Heading>
                <Text>
                    "What did the grape say when the elephant stood on it? Nothing, it just let out a little wine."
                </Text>
            </Card>

            <Columns>
                <Column span={6}>
                    <Input label="Product Title" />
                </Column>
                <Column span={6}>
                    <Input label="SKU" />
                </Column>
            </Columns>

            <InfoCardGrid>
                <InfoCard icon="calendar" label="Order Submitted" title="Apr 12, 2022" subtitle="12:01 am" />
                <InfoCard icon="warning" label="Payment Status" title="Payment has not been captured" variant="error" />
                <InfoCard icon="dolly" label="Fulfillment" title="Not Fulfilled" variant="warning" />
                <InfoCard icon="truck" label="Status" title="Shipped" variant="info" />
                <InfoCard icon="coin" label="Payment" title="Received" variant="success" />
            </InfoCardGrid>

            <LineBreak />

            <Button onClick={openModal}>Open Modal</Button>
            <Modal title="Confirm" onClose={closeModal} visible={visible}>
                <ModalBody>Are you sure you want to proceed?</ModalBody>
                <ModalFooter>
                    <Button onClick={closeModal} variant="secondary">
                        Close
                    </Button>
                    <Button onClick={closeModal}>Continue</Button>
                </ModalFooter>
            </Modal>

            <NoRecords />

            <Picture src="https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg" alt="Wine" />
            <Picture src="https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg" alt="Wine" height={300} />
            <Picture src="https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg" alt="Wine" height={200} />

            <ProgressBar progress={50} />

            <Region borderBottom>
                <Heading>Region with border below</Heading>
            </Region>
            <Region>
                <Heading>Another region</Heading>
            </Region>

            <Spinner />

            <Tag variant="default">Default</Tag>
            <Tag variant="info">Info</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="error">Error</Tag>
            <Tag variant="success">Success</Tag>

            <Button>Button</Button>

            <ButtonMenu>
                <ButtonMenuItem icon="export">
                    Export
                </ButtonMenuItem>
                <ButtonMenuItem icon="trash">
                    Delete
                </ButtonMenuItem>
            </ButtonMenu>

            <ContextMenu>
                <ContextMenuItem icon="export">
                    Export
                </ContextMenuItem>
            </ContextMenu>

            <ContextMenu>
                <ContextMenuItem icon="export">
                    Export
                </ContextMenuItem>
                <ContextMenuMoreActions>
                    <ContextMenuItem icon="trash">
                        Delete
                    </ContextMenuItem>
                </ContextMenuMoreActions>
            </ContextMenu>

            <LinkButton href="https://commerce7.com">Button</LinkButton>

            <SelectButton>Basic</SelectButton>
            <SelectButton loading>Loading</SelectButton>
            <SelectButton disabled>Can&apos;t touch this</SelectButton>

            <CardLink icon="setting" label="General Settings" href="https://commerce7.com">
                View and manage general settings
            </CardLink>
            <CardLink icon="user" label="Staff" href="https://commerce7.com">
                View and manage staff
            </CardLink>

            <Nav>
                <NavLink
                    onClick={() => setPath("/dashboard")}
                    className={currentPath === "/dashboard" ? "active" : ""}
                    icon="dashboard"
                >
                    Dashboard
                </NavLink>
                <NavLink
                    onClick={() => setPath("/crm")}
                    className={currentPath === "/crm" ? "active" : ""}
                    icon="customer"
                >
                    CRM
                </NavLink>
                <NavLink
                    onClick={() => setPath("/store")}
                    className={currentPath === "/store" ? "active" : ""}
                    icon="store"
                >
                    Store
                </NavLink>
                <NavLink
                    onClick={() => setPath("/club")}
                    className={currentPath === "/club" ? "active" : ""}
                    icon="club"
                >
                    Club
                </NavLink>
            </Nav>

            <Nav>
                <NavLink
                    onClick={() => setPath("/dashboard")}
                    className={currentPath === "/dashboard" ? "active" : ""}
                    icon="dashboard"
                >
                    Dashboard
                </NavLink>
                <NavLink
                    onClick={() => setPath("/store/order")}
                    className={currentPath.includes("/store") ? "randomClassName" : ""}
                    activeClassName="randomClassName"
                    icon="store"
                >
                    Store
                </NavLink>
                <SubNav isOpen={currentPath.includes("/store")}>
                    <SubNavLink
                        onClick={() => setPath("/store/order")}
                        className={currentPath === "/store/order" ? "active" : ""}
                    >
                        Order
                    </SubNavLink>
                    <SubNavLink
                        onClick={() => setPath("/store/carts")}
                        className={currentPath === "/store/carts" ? "active" : ""}
                    >
                        Carts
                    </SubNavLink>
                    <SubNavLink
                        onClick={() => setPath("/store/products")}
                        className={currentPath === "/store/products" ? "active" : ""}
                    >
                        Products
                    </SubNavLink>
                    <SubNavLink
                        onClick={() => setPath("/store/inventory")}
                        className={currentPath === "/store/inventory" ? "active" : ""}
                    >
                        Inventory
                    </SubNavLink>
                </SubNav>
                <NavLink
                    onClick={() => setPath("/club/membership")}
                    className={currentPath.includes("/club") ? "active" : ""}
                    icon="club"
                >
                    Club
                </NavLink>
                <SubNav isOpen={currentPath.includes("/club")}>
                    <SubNavLink
                        onClick={() => setPath("/club/membership")}
                        className={currentPath === "/club/membership" ? "active" : ""}
                    >
                        Memberships
                    </SubNavLink>
                    <SubNavLink
                        onClick={() => setPath("/club/subscription")}
                        className={currentPath === "/club/subscription" ? "active" : ""}
                    >
                        Subscriptions
                    </SubNavLink>
                    <SubNavLink
                        onClick={() => setPath("/club/package")}
                        className={currentPath === "/club/package" ? "active" : ""}
                    >
                        Packages
                    </SubNavLink>
                </SubNav>
            </Nav>

            <Stepper>
                <Step
                    step={1}
                    description="Configure"
                    onClick={() => setPath("/configure")}
                    className={currentPath === "/configure" ? "active" : ""}
                    icon="setting"
                />
                <Step
                    step={2}
                    description="Items"
                    onClick={() => setPath("/items")}
                    className={currentPath === "/items" ? "active" : ""}
                    icon="wine"
                />
                <Step
                    step={3}
                    description="Members"
                    onClick={() => setPath("/members")}
                    className={currentPath === "/members" ? "active" : ""}
                    icon="user"
                />
                <Step
                    step={4}
                    description="Inventory"
                    onClick={() => setPath("/inventory")}
                    className={currentPath === "/inventory" ? "active" : ""}
                    icon="inventory"
                />
            </Stepper>

            <SubMenu borderBottom>
                <SubMenuItem
                    onClick={() => setPath("/customer")}
                    className={currentPath === "/customer" ? "active" : ""}
                >
                    Customer
                </SubMenuItem>
                <SubMenuItem onClick={() => setPath("/order")} className={currentPath === "/order" ? "active" : ""}>
                    Order
                </SubMenuItem>
                <SubMenuItem
                    onClick={() => setPath("/reservation")}
                    className={currentPath === "/reservation" ? "active" : ""}
                >
                    Reservation
                </SubMenuItem>
            </SubMenu>

            <Tabs>
                <Tab onClick={() => setPath("/summary")} className={currentPath === "/summary" ? "active" : ""}>
                    Summary
                </Tab>
                <Tab onClick={() => setPath("/customers")} className={currentPath === "/customers" ? "active" : ""}>
                    Customers
                </Tab>
                <Tab
                    onClick={() => setPath("/products")}
                    className={currentPath === "/products" ? "bananas" : ""}
                    activeClassName="bananas"
                >
                    Products
                </Tab>
            </Tabs>
            <TabBody>
                <Heading>{heading}</Heading>
            </TabBody>

            <Checkbox label="Subscribe" id="subscribe" checked={checked} onChange={() => setChecked(!checked)} />;

            <DataDisplay label="First Name">Jim Smith</DataDisplay>

            <DatePicker label="Date" id="date" value={date} onChange={(e) => setDate(e)} />

            <RadioGroup label="Account Type">
                <Radio
                    label="Pro"
                    id="pro"
                    value="pro"
                    checked={radioChecked === "pro"}
                    onChange={(e) => setRadioChecked(e.target.value)}
                />
                <Radio
                    label="Basic"
                    id="basic"
                    value="basic"
                    checked={radioChecked === "basic"}
                    onChange={(e) => setRadioChecked(e.target.value)}
                />
            </RadioGroup>

            <Select
                label="Favourite Wine"
                id="favourite-wine"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                options={[{
                    label: "Red",
                    value: "red",
                }, {
                    label: "White",
                    value: "white",
                }]}
            />

            <Switch
                id="notifications"
                label="Send me notifications"
                checked={switched}
                onChange={() => setSwitched(!switched)}
            />

            <Textarea
                label="Comments"
                id="comments"
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
            />

            <DisplayIcon icon="cart" />

            <Icon icon="cart" />

            <VividIcon icon="cart" color="blue" />

            <Heading level={1}>
                Heading 1
            </Heading>
            <Heading>
                Heading 2
            </Heading>
            <Heading level={3}>
                Heading 3
            </Heading>
            <Heading level={4}>
                Heading 4
            </Heading>

            <Text>Wine</Text>
            <br />
            <Text secondary>Secondary text</Text>
            <br />
            <Text italic small>
                Italic small Wine
            </Text>
            <Text error block>
                Error, not enough wine.
            </Text>
            <Text strong>Strong</Text>
            <br />
            <Text uppercase>Limited Offer</Text>
            <br />
            <Text strikeThrough>$24.99</Text>

            <Legend
                data={[
                    {
                        color: "#42ACF0",
                        title: "Guest",
                    },
                    {
                        color: "#DF5F5F",
                        title: "First-time",
                    },
                    {
                        color: "#BF9D36",
                        title: "Repeat",
                    },
                    {
                        color: "#239C82",
                        title: "Club Member",
                    },
                ]}
            />

            <PieChart
                colors={[
                    "#42ACF0",
                    "#DF5F5F",
                    "#BF9D36",
                ]}
                data={[
                    {
                        name: "Group A",
                        value: 400,
                    },
                    {
                        name: "Group B",
                        value: 288,
                    },
                    {
                        name: "Group C",
                        value: 100,
                    },
                ]}
            />

            <Table>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Age</Th>
                        <Th>Gender</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Jim Smith</Td>
                        <Td>22</Td>
                        <Td>Male</Td>
                    </Tr>
                    <Tr>
                        <Td>Jess Smith</Td>
                        <Td>40</Td>
                        <Td>Female</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Td>Summary</Td>
                        <Td>data</Td>
                        <Td>data</Td>
                    </Tr>
                </Tfoot>
            </Table>
        </Commerce7AdminUI>
    );
}
