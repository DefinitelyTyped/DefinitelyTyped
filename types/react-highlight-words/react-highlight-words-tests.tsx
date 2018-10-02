import * as React from "react";
import Highlighter, { FindChunks } from "react-highlight-words";

const findChunks = ({
    searchWords,
    textToHighlight
}: FindChunks) => [];

class HighlighterTest extends React.Component {
    render() {
        return (
            <div>
                <Highlighter
                    searchWords={["el", "or"]}
                    textToHighlight="Hello World"
                />
                <Highlighter
                    activeClassName="activeClassName"
                    activeIndex="activeIndex"
                    activeStyle={{ color: "red" }}
                    autoEscape={true}
                    className="className"
                    caseSensitive={true}
                    findChunks={findChunks}
                    highlightClassName="highlightClassName"
                    highlightStyle={{ color: "red" }}
                    highlightTag="span"
                    sanitize={(text: string) => text}
                    searchWords={["el", "or"]}
                    textToHighlight="Hello World"
                    unhighlightClassName="unhighlightClassName"
                    unhighlightStyle={{ color: "red" }}
                />
            </div>
        );
    }
}
