import * as React from "react";
import { WithContext as ReactTags, TagItem } from "react-tag-input";

export interface IState {
    tags: TagItem[];
    suggestions: string[];
}

export class Tags extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        let tags: TagItem[] = [];
        let tag: TagItem = {
            id: 0,
            text: "Test"
        };
        tags.push(tag);

        let suggestions = ["test", "testar"];
        this.state = {        
            tags: tags,
            suggestions: suggestions
        }
    }
    //Not complete
    handleDelete(i: number) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({ tags: tags });
    }

    handleAddition(tag: string) {
        let tags = this.state.tags;
        let tagItem: TagItem = {
            id: tags.length,
            text: tag
        };
        tags.push(tagItem);
        this.setState({ tags: tags });
    }
    //Not complete
    handleDrag(tag: TagItem, currPos: number, newPos: number) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    }

    render() {
        return (
                <div>
                    <ReactTags tags={this.state.tags}
                    suggestions={this.state.suggestions}
                        handleDelete={(i: number) => this.handleDelete(i)}
                        handleAddition={(tag: string) => this.handleAddition(tag)}
                        handleDrag={(tag: TagItem, currPos: number, newPos: number) => this.handleDrag(tag, currPos, newPos)} />
                </div>
        );
    }
}
