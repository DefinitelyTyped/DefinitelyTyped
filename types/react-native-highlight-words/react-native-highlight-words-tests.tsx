import * as React from "react";
import Highlighter from "react-native-highlight-words";

const SEARCH_WORDS = ["test"];

export default class ExampleComponent extends React.Component {
    render() {
        return (
            <Highlighter searchWords={SEARCH_WORDS} textToHighlight={"test"} />
        );
    }
}
