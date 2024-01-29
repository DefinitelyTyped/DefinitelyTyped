import {
    Box,
    Button,
    DarkMode,
    DrawerContent,
    LightMode,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    theme,
    Toast,
    TonicProvider,
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
import { useCallback, useRef, useState } from "react";

const customTheme = { ...theme, box: { color: "grey" } };

const Container = (): React.JSX.Element => {
    const [colorMode, setColorMode] = useColorMode();
    const refUnknown = useRef<unknown>();
    const refAny = useRef<any>();
    setColorMode("light");
    useColorStyle({ colorMode });
    const portal = usePortalManager();
    portal.remove("fds");
    portal((close) => <div onClick={close} />, { appendToParentPortal: true });

    return (
        <TonicProvider colorMode={{ defaultValue: "light", value: "dark" }} theme={customTheme} useCSSBaseline={true}>
            <DarkMode>
                <Modal ref={refUnknown} autoFocus={true} size="md">
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
        _nthOfType: "none",
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
    const ref = useRef();
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
