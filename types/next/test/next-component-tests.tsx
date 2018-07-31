import * as React from "react";
import { NextStatelessComponent, NextContext } from "next";

interface NextComponentProps {
    example: string;
}

class ClassNext extends React.Component<NextComponentProps> {
    static async getInitialProps(ctx: NextContext) {
        const { example } = ctx.query;
        return { example };
    }

    render() {
        return (
            <div>I'm a class component! {this.props.example}</div>
        );
    }
}

const StatelessNext: NextStatelessComponent<NextComponentProps> = ({ example }) => (
    <div>I'm a stateless component! {example}</div>
);

StatelessNext.getInitialProps = async ({ query }: NextContext) => {
    const { example } = query;
    return { example: example as string };
};
