import * as React from "react";
import HamburgerMenu, {HamburgerMenuProps} from "react-hamburger-menu";

export class ReactHamburgerMenuTest extends React.PureComponent<{}, State> {
    state: State = {isOpen: false};

    render(): JSX.Element {
        const props: HamburgerMenuProps = {
            isOpen: this.state.isOpen,
            menuClicked: this.menuClicked,
            width: 30,
            height: 30,
            strokeWidth: 1,
            rotate: 90,
            borderRadius: 5,
            color: "red",
            animationDuration: 0.5
        };
        return <HamburgerMenu {...props}/>;
    }

    private menuClicked = (): void => this.setState({isOpen: !this.state.isOpen});
}

interface State {
    isOpen: boolean;
}
