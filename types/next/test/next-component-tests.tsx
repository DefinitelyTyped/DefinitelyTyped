import * as React from "react";
import { NextStatelessComponent } from "next";

interface NextComponentProps {
    example: string;
}

class ClassNext extends React.Component<NextComponentProps> {
    async getInitialProps() {
        return { example: 'example' };
    }

    render() {
        return (
            <div>I'm a stateless component! {this.props.example}</div>
        );
    }
}

const StatelessNext: NextStatelessComponent<NextComponentProps> = ({ example }) => (
    <div>I'm a stateless component! {example}</div>
);

StatelessNext.getInitialProps = async () => {
    return { example: 'example' };
};
