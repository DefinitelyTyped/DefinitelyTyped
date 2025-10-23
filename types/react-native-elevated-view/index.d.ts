import React = require("react");
import ReactNative = require("react-native");

export interface ElevatedViewProperties extends ReactNative.ViewProps {
    elevation?: number | undefined;
}

export default class ElevatedView extends React.Component<ElevatedViewProperties> {}
