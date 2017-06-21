/**
 * Spectacle Test Examples
 *
 */

import * as React from 'react';
import {
	Appear,
	BlockQuote,
	Cite,
	Deck,
	Fill,
	Heading,
	Layout,
	Link,
	ListItem,
	List,
	Quote,
	Slide,
	Spectacle,
	Text
} from "spectacle";

export class SpectacleTest extends React.Component {
	callback() {
		alert('Callback: ' + JSON.stringify(arguments));
	}

	public render() {
		return (<Spectacle>
			<Deck transition={["zoom", "slide"]} transitionDuration={500}>
				<Slide transition={["zoom"]} bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="black">
						Spectacle
					</Heading>
					<Heading size={1} fit caps>
						A ReactJS Presentation Library
					</Heading>
					<Heading size={1} fit caps textColor="black">
						Where You Can Write Your Decks In JSX
					</Heading>
					<Link href="https://github.com/FormidableLabs/spectacle">
						<Text bold caps textColor="tertiary">View on Github</Text>
					</Link>
					<Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
				</Slide>
				<Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
					<Heading size={2} caps fit textColor="primary" textFont="primary">
						Wait what?
					</Heading>
				</Slide>
				<Slide transition={["slide"]} bgDarken={0.75}>
					<Appear fid="1">
						<Heading size={1} caps fit textColor="primary">
							Full Width
						</Heading>
					</Appear>
					<Appear fid="2">
						<Heading size={1} caps fit textColor="tertiary">
							Adjustable Darkness
						</Heading>
					</Appear>
					<Appear fid="3">
						<Heading size={1} caps fit textColor="primary">
							Background Imagery
						</Heading>
					</Appear>
				</Slide>
				<Slide transition={["zoom", "fade"]} bgColor="primary">
					<Heading caps fit>Flexible Layouts</Heading>
					<Layout>
						<Fill>
							<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
								Left
							</Heading>
						</Fill>
						<Fill>
							<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
								Right
							</Heading>
						</Fill>
					</Layout>
				</Slide>
				<Slide transition={["slide"]} bgColor="black">
					<BlockQuote>
						<Quote>Wonderfully formatted quotes</Quote>
						<Cite>Ken Wheeler</Cite>
					</BlockQuote>
				</Slide>
				<Slide transition={["slide", "spin"]} bgColor="primary">
					<Heading caps fit size={1} textColor="tertiary">
						Smooth
					</Heading>
					<Heading caps fit size={1} textColor="secondary">
						Combinable Transitions
					</Heading>
				</Slide>
				<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
					<List>
						<Appear><ListItem>Inline style based theme system</ListItem></Appear>
						<Appear><ListItem>Autofit text</ListItem></Appear>
						<Appear><ListItem>Flexbox layout system</ListItem></Appear>
						<Appear><ListItem>React-Router navigation</ListItem></Appear>
						<Appear><ListItem>PDF export</ListItem></Appear>
						<Appear><ListItem>And...</ListItem></Appear>
					</List>
				</Slide>
			</Deck>
		</Spectacle>);
	}
}
