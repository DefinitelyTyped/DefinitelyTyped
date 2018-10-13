import * as React from "react";
import { Text } from "react-native";
import { NativeRouter, Link } from "react-router-native";
import { Navigation, Card } from "react-router-navigation";

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
