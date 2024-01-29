import * as React from "react";
import { Text } from "react-native";
import { Card, Navigation } from "react-router-navigation";

interface NodeProps {
    children?: React.ReactNode | undefined;
}

interface LinkProps extends NodeProps {
    to: string;
}

declare function NativeRouter(props: NodeProps): React.ReactElement<NodeProps>;
declare function Link(props: LinkProps): React.ReactElement<LinkProps>;

const App = () => (
    <NativeRouter>
        <Navigation>
            <Card
                exact
                path="/"
                render={() => (
                    <Link to="/hello">
                        <Text>Press it</Text>
                    </Link>
                )}
            />
            <Card path="/hello" render={() => <Text>Hello</Text>} />
        </Navigation>
    </NativeRouter>
);
