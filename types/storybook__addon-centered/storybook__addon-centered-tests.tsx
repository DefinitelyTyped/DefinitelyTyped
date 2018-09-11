import * as React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";

storiesOf("Centered", module)
    .addDecorator(centered)
    .add("Hello", () => <div>Hello</div>);
