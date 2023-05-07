import * as React from 'react';
import {
    DarkMode,
    DrawerContent,
    LightMode,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    TonicProvider,
    theme,
    useColorMode,
    useColorStyle,
} from '@tonic-ui/react';

const customTheme = { ...theme, box: { color: 'grey' } };

const Container = (): JSX.Element => {
    const [colorMode, setColorMode] = useColorMode();
    setColorMode('light');
    useColorStyle({ colorMode });

    return (
        <TonicProvider colorMode={{ defaultValue: 'light', value: 'dark' }} theme={customTheme} useCSSBaseline={true}>
            <DarkMode>
                <Modal autoFocus={true} size="md">
                    <ModalContent>
                        <ModalHeader
                            // Generic prop
                            css={{
                                ':not(:first-of-type)': {
                                    ':before': {
                                        content: '',
                                        paddingRight: '1x',
                                    },
                                },
                            }}
                            background="red"
                            display="flex"
                            flex={1}
                            paddingX={4}
                            style={{ padding: 4, background: 'red' }}
                        />
                        {/* Responsive properties */}
                        <ModalBody paddingY={{ sm: 4, md: 4 }} padding={{ sm: 1, lg: '4rem' }} />
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

const [_, setColorMode] = useColorMode();
// @ts-expect-error
setColorMode('blue');
