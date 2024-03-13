import * as React from "react";
import * as ReactNative from "react-native";

export interface ElevatedViewProperties extends ReactNative.ViewProps {
    elevation?: number | undefined;
}

export default class ElevatedView extends React.Component<ElevatedViewProperties> {}
