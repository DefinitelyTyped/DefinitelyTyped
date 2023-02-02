import * as React from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ModalDropdown from "react-native-modal-dropdown";

const viewStyle: StyleProp<ViewStyle> = { };
const textStyle: StyleProp<TextStyle> = { };

const FunctionComponent: React.FC = () => {
    return null;
};

class ClassComponent extends React.Component {
    render() {
        return null;
    }
}

export const TestBasic: React.FC = () => {
    return (
        <ModalDropdown options={["option 1", "option 2"]}/>
    );
};

export const TestComponents: React.FC<{ useFunctional: boolean }> = ({ useFunctional }) => {
    const Comp = useFunctional ? FunctionComponent : ClassComponent;

    return (
        <ModalDropdown
            renderRowComponent={Comp}
            renderButtonComponent={Comp}
            renderRightComponent={Comp}
            renderSearch={() => <Comp />}
            renderSeparator={(sectionId, index, adjacentRowHighlighted) => <Comp />}
        />
    );
};

export const TestBooleans: React.FC<{ boolValue?: boolean}> = ({ boolValue }) => {
    return (
        <ModalDropdown
            disabled={boolValue}
            multipleSelect={boolValue}
            scrollEnabled={boolValue}
            saveScrollPosition={boolValue}
            accessible={boolValue}
            animated={boolValue}
            isFullWidth={boolValue}
            showsVerticalScrollIndicator={boolValue}
            showSearch={boolValue}
        />
    );
};

export const TestStyles: React.FC = () => {
    return (
        <ModalDropdown
            searchInputStyle={textStyle}
            textStyle={textStyle}
            defaultTextStyle={textStyle}
            dropdownStyle={viewStyle}
            dropdownTextStyle={textStyle}
            dropdownTextHighlightStyle={textStyle}
        />
    );
};
