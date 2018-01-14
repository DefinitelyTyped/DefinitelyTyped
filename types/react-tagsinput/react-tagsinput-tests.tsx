import * as React from 'react';
import * as TagsInput from 'react-tagsinput';

interface StateI {
    tags: string[];
}

class Example extends React.Component<{}, StateI> {
    constructor(props: {}) {
        super(props);
        this.state = {tags: []};
    }

    handleChange(tags: string[]) {
        this.setState({tags});
    }

    render() {
        return (
            <TagsInput value={this.state.tags} onChange={this.handleChange} />
        );
    }
}
