import * as React from "react";
import {
    Avatar,
    Box,
    Button,
    Card,
    Checkbox,
    Column,
    Container,
    GroupAvatar,
    Icon,
    IconButton
} from "gestalt";

<Avatar name="Nicolas" />;
<Box />;
<Button text={"Click me"} />;
<Card />;
<Checkbox id={"1"} onChange={() => {}} />;
<Column span={1} />;
<Container />;
<GroupAvatar collaborators={[{ name: "nicolas" }]} />;
<Icon
    accessibilityLabel={"sup"}
    icon={"add"}
    dangerouslySetSvgPath={{ __path: "something" }}
/>;
<IconButton accessibilityLabel={"something"} icon={"add-pin"} />;
