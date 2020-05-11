import * as React from "react";
import * as ReactDOM from "react-dom";

import {
	Button,
	Menu,
	MenuItem,
	Wrapper,
	closeMenu,
	openMenu
} from "react-aria-menubutton";

const menuItemWords = ["foo", "bar", "baz"];

class MyMenuButton extends React.Component {
	render() {
		const menuItems = menuItemWords.map((word, i) => {
			return (
				<li key={i}>
					<MenuItem className="MyMenuButton-menuItem">
						{word}
					</MenuItem>
				</li>
			);
		});

		return (
			<Wrapper
				className="MyMenuButton"
				onSelection={(value, event) => console.log(value, event)}
			>
				<Button className="MyMenuButton-button">click me</Button>
				<Menu className="MyMenuButton-menu">
					<ul>
						{menuItems}
					</ul>
				</Menu>
			</Wrapper>
		);
	}
}

ReactDOM.render(<MyMenuButton />, document.body);

const words = [
	"pectinate",
	"borborygmus",
	"anisodactylous",
	"barbar",
	"pilcrow",
	"destroy"
];

interface DemoOneState {
	selected: string;
	noMenu: boolean;
}

class DemoOne extends React.Component<{}, DemoOneState> {
	state = { selected: "", noMenu: false };

	handleSelection(value: string) {
		if (value === "destroy") {
			this.setState({ noMenu: true });
		} else {
			this.setState({ selected: value });
		}
	}

	render() {
		const { selected, noMenu } = this.state;

		if (noMenu) {
			return (
				<div>
					[You decided to "destroy this menu," so the menu has been destroyed,
					according to your wishes. Refresh the page to see it again.]
				</div>
			);
		}

		const menuItemElements = words.map((word, i) => {
			let itemClass = "AriaMenuButton-menuItem";
			if (selected === word) {
				itemClass += " is-selected";
			}
			const display = word === "destroy" ? "destroy this menu" : word;
			return (
				<li className="AriaMenuButton-menuItemWrapper" key={i}>
					<MenuItem className={itemClass} value={word} text={word}>
						{display}
					</MenuItem>
				</li>
			);
		});

		return (
			<div>
				<Wrapper
					className="AriaMenuButton"
					onSelection={this.handleSelection.bind(this)}
				>
					<Button className="AriaMenuButton-trigger">Select a word</Button>
					<Menu>
						<ul className="AriaMenuButton-menu">
							{menuItemElements}
						</ul>
					</Menu>
				</Wrapper>
				<span style={{ marginLeft: "1em" }}>
					Your last selection was: <strong>{selected}</strong>
				</span>
			</div>
		);
	}
}

ReactDOM.render(<DemoOne />, document.getElementById("demo-one"));

closeMenu("");
closeMenu("", { focusButton: true });

openMenu("");
openMenu("", { focusMenu: true });

class ObjectMenuItem extends React.Component {
	render() {
		const itemValue = { name: "Test name", label: "Only item to select" };
		return (
			<Wrapper onSelection={(value) => console.log(value.name)}>
				<li>
					<MenuItem value={itemValue} >{itemValue.label}</MenuItem>
				</li>
			</Wrapper>
		);
	}
}

ReactDOM.render(<ObjectMenuItem />, document.body);

class MenuWithRenderProp extends React.Component {
	render() {
		return (
			<Menu>
				{({ isOpen }) => (
					<ul>
						<li><MenuItem>Foo</MenuItem></li>
					</ul>
				)}
			</Menu>
		);
	}
}
