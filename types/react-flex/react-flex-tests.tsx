import { Flex, Item } from "react-flex";
import * as React from "react";

const ex1: JSX.Element = (
    <Flex row alignItems="center">
        <div>a first div</div>
        <Item flex={1}>flexes to 1</Item>
    </Flex>
);

const ex2: JSX.Element = (
    <Flex alignItems="start">
        <Item flex={2}>
            content here
        </Item>
    </Flex>
);

const ex3: JSX.Element = (
    <Flex alignItems="flex-start">
        <Item flex={"2"}>
            content here
        </Item>
    </Flex>
);

const ex4: JSX.Element = (
    <Flex column wrap={false}>
        <Flex flex={false}>
            Flex also supports the `flex` prop
        </Flex>
        <Flex flex={"flex"}>
            Yup.
        </Flex>
        <Item flex={3} />
        <Item flex={12} />
    </Flex>
);
