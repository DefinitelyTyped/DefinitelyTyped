import * as React from "react";
import {
    Anim,
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    ComponentPlayground,
    Deck,
    Fill,
    GoToAction,
    Heading,
    Image,
    Layout,
    Link,
    List,
    ListItem,
    Markdown,
    Notes,
    Quote,
    Slide,
    SlideSet,
    Table,
    TableBody,
    TableHeader,
    TableHeaderItem,
    TableItem,
    TableRow,
    Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
    city: "a-url",
    logo: "another-url"
};

preloader(images);

const theme = createTheme(
    {
        primary: "white",
        secondary: "#1F2022",
        tertiary: "#03A9FC",
        quartenary: "#CECECE"
    },
    {
        primary: "Montserrat",
        secondary: "Helvetica"
    }
);

export class SpectacleTest extends React.Component {
    public render() {
        return (
            <Deck
                transition={["zoom", "slide"]}
                theme={theme}
                transitionDuration={500}
            >
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
                        <Text bold caps textColor="tertiary">
                            View on Github
                        </Text>
                    </Link>
                    <Text textSize="1.5em" margin="20px 0px 0px" bold>
                        Hit Your Right Arrow To Begin!
                    </Text>
                </Slide>
                <Slide
                    id="wait-what"
                    transition={["slide"]}
                    bgColor="black"
                    notes="You can even put notes on your slide. How awesome is that?"
                >
                    <Heading
                        size={2}
                        caps
                        fit
                        textColor="primary"
                        textFont="primary"
                    >
                        Wait what?
                    </Heading>
                </Slide>
                <Slide
                    transitionIn={["zoom", "fade"]}
                    transitionOut={["slide", "fade"]}
                    bgDarken={0.75}
                >
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
                <Slide
                    transitionIn={["zoom", "fade"]}
                    transitionOut={["slide", "fade"]}
                    bgColor="primary"
                    notes="<ul><li>talk about that</li><li>and that</li></ul>"
                >
                    <CodePane
                        lang="jsx"
                        source={""}
                        style={{ margin: "20px auto" }}
                    />
                </Slide>
                <Slide>
                    <ComponentPlayground theme="dark" />
                    <Notes>This is a component playground</Notes>
                </Slide>
                <Slide transition={["zoom", "fade"]} bgColor="primary">
                    <Heading caps fit>
                        Flexible Layouts
                    </Heading>
                    <Layout>
                        <Fill>
                            <Heading
                                size={4}
                                caps
                                textColor="secondary"
                                bgColor="white"
                                margin={10}
                            >
                                Left
                            </Heading>
                        </Fill>
                        <Fill>
                            <Heading
                                size={4}
                                caps
                                textColor="secondary"
                                bgColor="white"
                                margin={10}
                            >
                                Right
                            </Heading>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide
                    transition={["spin", "zoom"]}
                    bgColor="tertiary"
                    controlColor="primary"
                    progressColor="primary"
                >
                    <Heading caps fit size={1} textColor="primary">
                        Inline Markdown
                    </Heading>
                    <Markdown>
                        {`
  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
  * Add some \`inline code\` to your sldes!
            `}
                    </Markdown>
                </Slide>
                <Slide transition={["slide"]}>
                    <Anim
                        onAnim={(forwards, animIndex) => {
                            /* eslint-disable */
                            console.log("forwards ", forwards);
                            console.log("animIndex ", animIndex);
                            /* eslint-enable */
                        }}
                        fromStyle={{
                            opacity: 0,
                            transform:
                                "translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)"
                        }}
                        toStyle={[
                            {
                                opacity: 1,
                                transform:
                                    "translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)"
                            },
                            {
                                opacity: 1,
                                transform:
                                    "translate3d(0px, 0px, 0px) scale(1.6) rotate(-15deg)"
                            },
                            {
                                opacity: 1,
                                transform:
                                    "translate3d(0px, 0px, 0px)  scale(0.8) rotate(0deg)"
                            }
                        ]}
                        easing={"bounceOut"}
                        transitionDuration={500}
                    >
                        <React.Fragment>
                            <Heading size={6} caps fit textColor="secondary">
                                Flexible
                                <br />
                                animations
                            </Heading>
                        </React.Fragment>
                    </Anim>
                </Slide>
                <Slide>
                    <Heading size={2} textColor="secondary" margin="0.25em">
                        Mix it up!
                    </Heading>
                    <Heading size={6} textColor="tertiary">
                        You can even jump to different slides with a standard
                        button or custom component!
                    </Heading>
                    <GoToAction margin="1em" slide={8}>
                        Jump to Slide 8
                    </GoToAction>
                    <GoToAction
                        render={goToSlide => (
                            <select
                                defaultValue=""
                                style={{
                                    background: "#000",
                                    color: "#fff",
                                    fontSize: "1.1em"
                                }}
                                onChange={({ target }) =>
                                    goToSlide(target.value)
                                }
                            >
                                <option value="" disabled>
                                    Custom Slide Picker
                                </option>
                                <option value="wait-what">
                                    Wait What!? Slide
                                </option>
                                <option value={3}>Slide 3</option>
                            </select>
                        )}
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="black">
                    <BlockQuote>
                        <Quote>Wonderfully formatted quotes</Quote>
                        <Cite>Ken Wheeler</Cite>
                    </BlockQuote>
                </Slide>
                <Slide transition={["slide"]} bgColor="black">
                    <BlockQuote>
                        <Quote>Wonderfully formatted quotes</Quote>
                        <Cite>Ken Wheeler</Cite>
                    </BlockQuote>
                </Slide>
                <SlideSet>
                    <Slide
                        transition={["fade"]}
                        bgColor="secondary"
                        textColor="primary"
                    >
                        <List>
                            <Appear>
                                <ListItem>
                                    Inline style based theme system
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Autofit text</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Flexbox layout system</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>PDF export</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>And...</ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={1} caps fit textColor="tertiary">
                            You can even share styles with SlideSet
                        </Heading>
                    </Slide>
                </SlideSet>
                <Slide
                    transition={["slide"]}
                    bgColor="primary"
                    notes="Hard to find cities without any pizza"
                >
                    <Heading
                        size={4}
                        caps
                        textColor="secondary"
                        bgColor="white"
                        margin={10}
                    >
                        Pizza Toppings
                    </Heading>
                    <Layout>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderItem />
                                    <TableHeaderItem>2011</TableHeaderItem>
                                    <TableHeaderItem>2013</TableHeaderItem>
                                    <TableHeaderItem>2015</TableHeaderItem>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableItem>None</TableItem>
                                    <TableItem>61.8%</TableItem>
                                    <TableItem>39.6%</TableItem>
                                    <TableItem>35.0%</TableItem>
                                </TableRow>
                                <TableRow>
                                    <TableItem>Pineapple</TableItem>
                                    <TableItem>28.3%</TableItem>
                                    <TableItem>54.5%</TableItem>
                                    <TableItem>61.5%</TableItem>
                                </TableRow>
                                <TableRow>
                                    <TableItem>Pepperoni</TableItem>
                                    <TableItem />
                                    <TableItem>50.2%</TableItem>
                                    <TableItem>77.2%</TableItem>
                                </TableRow>
                                <TableRow>
                                    <TableItem>Olives</TableItem>
                                    <TableItem />
                                    <TableItem>24.9%</TableItem>
                                    <TableItem>55.9%</TableItem>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Layout>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="tertiary">
                    <Heading
                        size={1}
                        caps
                        fit
                        lineHeight={1.5}
                        textColor="primary"
                    >
                        Made with love in Seattle by
                    </Heading>
                    <Link href="http://www.formidable.com">
                        <Image width="100%" src={images.logo} />
                    </Link>
                </Slide>
            </Deck>
        );
    }
}
