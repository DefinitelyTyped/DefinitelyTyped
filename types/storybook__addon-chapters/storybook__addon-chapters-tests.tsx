/// <reference types="storybook__react" />

import * as React from "react";
import { addDecorator, storiesOf } from "@storybook/react";
import { withChapters } from "@storybook/addon-chapters";

addDecorator(withChapters);

const MyComponent: React.FC<{ num: number }> = props => (
    <span>{props.num}</span>
);

function render(num: number) {
    return () => <MyComponent num={num} />;
}

storiesOf("React App", module)
    .addChapter("Atoms", chapter =>
        chapter
            .add("Atom 1", render(1))
            .add("Atom 2", render(2))
            .addChapter("Molecules", chapter =>
                chapter
                    .addChapter("Organisms", chapter =>
                        chapter
                            .add("Organism 1", render(7))
                            .add("Organism 2", render(8))
                    )
                    .add("Molecule 1", render(1))
                    .add("Molecule 2", render(2))
            )
            .add("Atom 3", render(3))
            .add("Atom 4", render(4))
    )
    .add("new API docs", render(3))
    .add("prev API docs", render(4));
