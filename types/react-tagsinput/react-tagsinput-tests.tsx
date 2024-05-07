import * as React from "react";
import TagsInput = require("react-tagsinput");

interface StateI {
    tags: string[];
}

class Example extends React.Component<{}, StateI> {
    state = { tags: [] };

    handleChange(tags: string[]) {
        this.setState({ tags });
    }

    render() {
        return <TagsInput value={this.state.tags} onChange={this.handleChange} />;
    }
}

class ValidationExample extends React.Component<{}, StateI> {
    state = { tags: [] };

    handleChange(tags: string[]) {
        this.setState({ tags });
    }

    render() {
        return (
            <TagsInput
                value={this.state.tags}
                onChange={this.handleChange}
                validate={(tag) => tag.length > 0}
            />
        );
    }
}
