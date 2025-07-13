import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionToggle,
    AccordionToggleIcon,
    Box,
    Button,
    ButtonLink,
    Checkbox,
    CheckboxGroup,
    DarkMode,
    DrawerContent,
    Icon,
    Input,
    LightMode,
    Link,
    Menu,
    MenuItem,
    MenuList,
    MenuToggle,
    MenuToggleIcon,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverTrigger,
    Portal,
    Radio,
    RadioGroup,
    Space,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    theme,
    Toast,
    TonicProps,
    TonicProvider,
    TonicSVGProps,
    Tree,
    TreeItem,
    TreeItemContent,
    TreeItemToggle,
    TreeItemToggleIcon,
    useColorMode,
    useColorStyle,
    usePortalManager,
    useToastManager,
    UseToastRenderFn,
    VisuallyHidden,
} from "@tonic-ui/react";
import { forwardRef, useCallback, useRef, useState } from "react";

const customTheme = { ...theme, box: { color: "grey" } };

const Container = (): React.JSX.Element => {
    const [colorMode, setColorMode] = useColorMode();
    const refUnknown = useRef<unknown>(undefined);
    const refAny = useRef<any>(undefined);
    setColorMode("light");
    const [colorStyle] = useColorStyle({ colorMode });
    const portal = usePortalManager();
    portal.remove("fds");
    portal((close) => <div onClick={close} />, { appendToParentPortal: true });

    return (
        <TonicProvider colorMode={{ defaultValue: "light", value: "dark" }} theme={customTheme} useCSSBaseline={true}>
            <DarkMode>
                <Modal ref={refUnknown} autoFocus={true} size="md" background={colorStyle.background.secondary}>
                    <ModalContent ref={refAny}>
                        <ModalHeader
                            // Generic prop
                            css={{
                                ":not(:first-of-type)": {
                                    ":before": {
                                        content: "",
                                        paddingRight: "1x",
                                    },
                                },
                            }}
                            background="red"
                            display="flex"
                            flex={1}
                            paddingX={4}
                            style={{ padding: 4, background: "red" }}
                            px={0}
                            py={0}
                            p={0}
                            pb={0}
                            pt={0}
                            pl={0}
                            pr={0}
                            mx={0}
                            my={0}
                            m={0}
                            mb={0}
                            mt={0}
                            ml={0}
                            mr={0}
                        />
                        {/* Responsive properties */}
                        <ModalBody paddingY={{ sm: 4, md: 4 }} padding={{ sm: 1, lg: "4rem" }} />
                        <ModalFooter />
                    </ModalContent>
                </Modal>
                <Link href="" target="_blank">
                    <Text>Link</Text>
                </Link>
                <Portal>
                    <ButtonLink
                        href=""
                        target="_blank"
                        onClick={(e) =>
                            e.currentTarget.id}
                    >
                        ButtonLink
                    </ButtonLink>
                </Portal>
                <Checkbox
                    defaultChecked={true}
                    disabled={false}
                    id="id"
                    indeterminate={false}
                    inputRef={refAny}
                    name="id"
                    onBlur={() => {}}
                    onClick={() => {}}
                    onFocus={() => {}}
                    variantColor="blue"
                    htmlFor="id"
                    inputProps={{
                        id: "id",
                    }}
                    value="value"
                    checked={true}
                    size="md"
                    alignItems="self-start"
                    onChange={(e) =>
                        e.target.checked}
                >
                    Check
                </Checkbox>
            </DarkMode>
            <LightMode>
                <DrawerContent TransitionComponent={DrawerContent} />
            </LightMode>
        </TonicProvider>
    );
};

const InferredTests = () => {
    const inferredTypes = {
        _active: "none",
        _checked: "none",
        _selected: "none",
        _disabled: "none",
        _empty: "none",
        _enabled: "none",
        _fullscreen: "none",
        _focus: "none",
        _focusActive: "none",
        _focusHover: "none",
        _focusWithin: { background: "red", flexAlign: "start" },
        _focusSelected: { background: "red", flexAlign: "start" },
        _hover: { background: "red", flexAlign: "start" },
        _indeterminate: { background: "red", flexAlign: "start" },
        _valid: { background: "red", flexAlign: "start" },
        _invalid: { background: "red", flexAlign: "start" },
        _readOnly: { background: "red", flexAlign: "start" },
        _visited: { background: "red", flexAlign: "start" },
        _firstChild: { background: "red", flexAlign: "start" },
        _firstOfType: { background: "red", flexAlign: "start" },
        _notFirstOfType: { background: "red", flexAlign: "start" },
        _lastChild: { background: "red", flexAlign: "start" },
        _lastOfType: { background: "red", flexAlign: "start" },
        _nthOfType: { "1st": { background: "red", flexAlign: "start" } },
        background: { sm: "red", lg: "blue" },
        m: "2x",
    };

    // Check we can handle untyped CSS properties
    return <Box {...inferredTypes} />;
};

const [_, setColorMode] = useColorMode();
// @ts-expect-error
setColorMode("blue");

const PortalApp = () => {
    const portal = usePortalManager();
    const ref = useRef(undefined);
    const openModal = useCallback(() => {
        portal((close) => <div onClick={close} />, { containerRef: ref });
    }, [portal]);

    const id = portal.add(() => <div />, { containerRef: ref });
    portal.remove(id);

    return <Button onClick={openModal}>Open Modal</Button>;
};

const ToastApp = () => {
    const toast = useToastManager();

    toast.setState({
        top: [
            {
                id: "2",
                duration: 3000,
                message: "New toast message",
                onClose: () => toast.close("2"),
                placement: "top",
            },
        ],
        "top-left": [],
        "top-right": [],
        bottom: [],
        "bottom-left": [],
        "bottom-right": [],
    });
    toast.setState((prevState) => ({
        ...prevState,
        top: [
            ...prevState["top"],
            {
                id: "2",
                duration: null,
                message: "New toast message",
                onClose: () => toast.close("2"),
                placement: "top",
            },
        ],
    }));

    const handleClickOpenToast = useCallback(() => {
        const render: UseToastRenderFn = ({ onClose, placement }) => {
            const isTop = placement.includes("top");
            const toastSpacingKey = isTop ? "pb" : "pt";
            const styleProps = {
                [toastSpacingKey]: "2x",
                width: 320,
            };

            return (
                <Box sx={styleProps}>
                    <Toast isClosable onClose={onClose}>
                        <Text>This is a toast notification</Text>
                    </Toast>
                </Box>
            );
        };
        const options = {
            placement: "bottom-right",
            duration: 5000,
        };
        toast(render, options);
    }, [toast]);

    const id = toast.notify("This is a toast notification", { duration: 5000 });
    toast.close(id);
    toast.closeAll({ placements: ["top", "top-left"] });

    toast.findIndex(id);
    toast.update(id);
    toast.placement = "top";

    return <Button onClick={handleClickOpenToast}>Open Toast</Button>;
};

const FormApp = () => {
    const [radioGroupValue, setRadioGroupValue] = useState<string>("");
    const [checkboxGroupValue, setCheckboxGroupValue] = useState<string[]>([]);

    return (
        <>
            <Input value="" onChange={(e) => e.target.value} />
            <Input type="checkbox" value="" onChange={(e) => e.target.checked} checked={true} />
            <RadioGroup variantColor="green" value={radioGroupValue} onChange={value => setRadioGroupValue(value)}>
                <Stack spacing="1x" shouldWrapChildren gap={{ sm: "32" }}>
                    <Radio value="1">First</Radio>
                    <Radio value="2">Second</Radio>
                    <Radio value="3">Third</Radio>
                </Stack>
            </RadioGroup>
            <CheckboxGroup value={checkboxGroupValue} onChange={value => setCheckboxGroupValue(value)}>
                <Stack direction="column" spacing="1x" shouldWrapChildren gap={29} lineHeight={4}>
                    <Checkbox value="apple">Apple</Checkbox>
                    <Checkbox value="orange">Orange</Checkbox>
                    <Checkbox value="papaya">Papaya</Checkbox>
                </Stack>
            </CheckboxGroup>
        </>
    );
};

const SVGApp = () => {
    const SVG = forwardRef((props: TonicSVGProps<SVGSVGElement>, ref) => (
        <Box
            ref={ref}
            as="svg"
            {...(props as any)}
        />
    ));
    const G = forwardRef((props: TonicSVGProps<SVGGElement>, ref) => <Box ref={ref} as="g" {...(props as any)} />);
    const Rect = forwardRef((props: TonicSVGProps<SVGRectElement>, ref) => (
        <Box ref={ref} as="rect" {...(props as any)} />
    ));
    const ForeignObject = forwardRef((props: TonicSVGProps<SVGForeignObjectElement>, ref) => (
        <Box ref={ref} as="foreignObject" {...(props as any)} />
    ));
    const Path = forwardRef((props: TonicSVGProps<SVGPathElement>, ref) => (
        <Box ref={ref} as="path" {...(props as any)} />
    ));
    const Ellipse = forwardRef((props: TonicSVGProps<SVGEllipseElement>, ref) => (
        <Box ref={ref} as="ellipse" {...(props as any)} />
    ));
    const Circle = forwardRef((props: TonicSVGProps<SVGCircleElement>, ref) => (
        <Box ref={ref} as="circle" {...(props as any)} />
    ));

    return (
        <G>
            <Rect
                className="public-access-rect"
                x={1}
                y={2}
                width={3}
                height={4}
                stroke={"gray:50"}
                strokeDasharray="5"
                strokeWidth={1}
                rx="4"
                fill="transparent"
            />

            <ForeignObject
                y={0}
            >
                <Box />
            </ForeignObject>
        </G>
    );
};

const TabsApp = () => {
    const [index, setIndex] = useState("tab1");

    return (
        <Tabs index={index} onChange={(index) => setIndex(index)}>
            <TabList>
                <Tab index="tab1">
                    <VisuallyHidden>Tab 1</VisuallyHidden>
                </Tab>
                <Tab index="tab2">TAB 2</Tab>
            </TabList>
            <TabPanels px="3x" py="2x">
                <TabPanel index="tab1">Tab Panel 1</TabPanel>
                <TabPanel index="tab2">Tab Panel 2</TabPanel>
            </TabPanels>
        </Tabs>
    );
};

const TreeApp = () => {
    return (
        <Tree defaultExpanded={["1"]}>
            <TreeItem
                nodeId="1"
                render={({ isExpandable }) => (
                    <TreeItemContent>
                        {isExpandable && (
                            <TreeItemToggle>
                                <TreeItemToggleIcon />
                            </TreeItemToggle>
                        )}
                        <Text>Node 1</Text>
                    </TreeItemContent>
                )}
            >
                <TreeItem
                    nodeId="1.1"
                    render={() => (
                        <TreeItemContent>
                            <Text>Node 1.1</Text>
                        </TreeItemContent>
                    )}
                />
            </TreeItem>
            <TreeItem
                nodeId="2"
                render={() => (
                    <TreeItemContent>
                        <Text>Node 2</Text>
                    </TreeItemContent>
                )}
            />
        </Tree>
    );
};

const PopoverTest = () => {
    return (
        <Popover
            disabled={false} // Use the `disabled` prop to control whether the popover will be displayed
            trigger="hover"
        >
            <PopoverTrigger shouldWrapChildren>
                <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent
                PopoverArrowComponent={PopoverArrow}
                PopoverArrowProps={{ arrowWidth: 20, arrowHeight: 20, randomProp: 123 }}
                TransitionComponent={Box}
                TransitionProps={{ appear: false, in: false, randomProp: 123 }}
            >
                <Box>Popover Content</Box>
            </PopoverContent>
        </Popover>
    );
};

const AccordionApp = () => {
    return (
        <Accordion>
            {["item1", "item2", "item3"].map((item, index) => (
                <AccordionItem
                    key={item}
                    {...{ onToggle: (ctx) => ctx?.isExpanded }}
                >
                    <AccordionToggle
                        {...{} as TonicProps}
                    >
                        <AccordionToggleIcon>
                            {(_state, { ref, style: styleProps }) => {
                                styleProps.transform = "rotate(-90deg)";
                                return <Icon ref={ref} size="4x" {...styleProps} />;
                            }}
                        </AccordionToggleIcon>
                        <Space width="2x" />
                        <Text>
                            Collapsible Item #{index + 1}
                        </Text>
                    </AccordionToggle>
                    <AccordionContent>
                        Content
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

const MenuApp = () => {
    return (
        <Menu>
            <MenuToggle disabled={true}>
                {({ getMenuToggleProps }) => (
                    <Button {...getMenuToggleProps()}>
                        <MenuToggleIcon />
                    </Button>
                )}
            </MenuToggle>
            <MenuList
                width="max-content"
                PopperComponent={PopoverArrow}
                PopperProps={{ arrowWidth: 20, arrowHeight: 20, randomProp: 123 }}
                TransitionComponent={Box}
                TransitionProps={{ appear: false, in: false, randomProp: 123 }}
            >
                <MenuItem>List item 1</MenuItem>
                <MenuItem>List item 2</MenuItem>
            </MenuList>
        </Menu>
    );
};
