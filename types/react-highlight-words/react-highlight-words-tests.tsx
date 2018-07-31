import * as React from "react";
import Highlighter from "react-highlight-words";

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
                    findChunks={() => {}}
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
