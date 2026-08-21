import { JSX } from "react";

declare namespace HeadingLevelDropdown {
    type HeadingLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;
    interface Props {
        options?: HeadingLevel[] | (readonly HeadingLevel[]) | undefined;
        value?: HeadingLevel | undefined;
        onChange?: (value?: HeadingLevel | undefined) => void;
    }
}
declare const HeadingLevelDropdown: {
    (props: HeadingLevelDropdown.Props): JSX.Element;
};

export default HeadingLevelDropdown;
