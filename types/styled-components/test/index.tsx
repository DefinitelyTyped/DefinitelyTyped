import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server";

import styled, {
    css,
    createGlobalStyle,
    isStyledComponent,
    keyframes,
    ServerStyleSheet,
    StyleSheetManager,
    ThemeProps,
    ThemeProvider,
    withTheme,
    ThemeConsumer,
    StyledComponent,
    ThemedStyledComponentsModule,
    FlattenSimpleInterpolation,
    SimpleInterpolation,
    FlattenInterpolation
} from "styled-components";
import {} from "styled-components/cssprop";

/**
 * general usage
 */

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Input = styled.input`
    font-size: 1.25em;
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;

    &:hover {
        box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
`;

interface MyTheme {
    primary: string;
}

interface ButtonProps {
    name: string;
    primary?: boolean;
    theme: MyTheme;
}

class MyButton extends React.Component<ButtonProps> {
    render() {
        return <button>Custom button</button>;
    }
}

const TomatoButton = styled(MyButton)`
    color: tomato;
    border-color: tomato;
`;

const CustomizableButton = styled(MyButton)`
    /* Adapt the colors based on primary prop */
    background: ${props => (props.primary ? "palevioletred" : "white")};
    color: ${props => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${props => props.theme.primary};
    border-radius: 3px;
`;

const example = css`
    font-size: 1.5em;
    text-align: center;
    color: ${props => props.theme.primary};
    border-color: ${"red"};
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const showAnimation = css`
    opacity: 1;
    transform: scale(1) translateY(0);
`;

const hideAnimation = css`
    opacity: 0;
    transform: scale(0.95, 0.8) translateY(20px);
`;

const entryAnimation = keyframes`
  from { ${hideAnimation} }
  to { ${showAnimation} }
`;

const animationRule = css`
    ${fadeIn} 1s infinite alternate;
`;

const ComponentWithKeyframe = styled.div`
    animation: ${animationRule};
`;

const theme = {
    main: "mediumseagreen"
};

const ExampleGlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Operator Mono';
      src: url('../fonts/Operator-Mono.ttf');
    }

    body {
        margin: 0;
    }
`;

class Example extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <ExampleGlobalStyle />
                    <Wrapper>
                        <Title>
                            Hello World, this is my first styled component!
                        </Title>

                        <Input placeholder="@mxstbr" type="text" />
                        <TomatoButton name="demo" />
                    </Wrapper>
                </>
            </ThemeProvider>
        );
    }
}

// css which only uses simple interpolations without functions
const cssWithValues1 = css`
    font-size: ${14} ${"pt"};
`;
// css which uses other simple interpolations without functions
const cssWithValues2 = css`
  ${cssWithValues1}
  ${[cssWithValues1, cssWithValues1]}
  font-weight: ${"bold"};
`;

// css which uses function interpolations with common props
const cssWithFunc1 = css`
    font-size: ${props => props.theme.fontSizePt}pt;
`;
const cssWithFunc2 = css`
  ${cssWithFunc1}
  ${props => cssWithFunc1}
  ${[cssWithFunc1, cssWithValues1]}
`;
// such css can be used in styled components
const styledButton = styled.button`
  ${cssWithValues1} ${[cssWithValues1, cssWithValues2]}
  ${cssWithFunc1} ${[cssWithFunc1, cssWithFunc2]}
  ${() => [cssWithFunc1, cssWithFunc2]}
`;

const name = "hey";

const ThemedMyButton = withTheme(MyButton);
<ThemedMyButton name={name} />;

/**
 * nested styles
 */

const Link = styled.a`
    color: red;
`;

const AlternativeLink = styled.a`
    color: blue;
`;

const freeStyles = css`
    background-color: black;
    color: white;
    ${Link} {
        color: blue;
    }
`;

const Article = styled.section`
    color: red;
    ${freeStyles}
    & > ${Link} {
        color: green;
    }
    ${p => (p.theme.useAlternativeLink ? AlternativeLink : Link)} {
        color: black
    }
`;

// A Link instance should be backed by an HTMLAnchorElement
const ComposedLink = () => (
    <Link onClick={(e: React.MouseEvent<HTMLAnchorElement>) => undefined} />
);

/**
 * construction via string tag
 */

// Create a <LinkFromString> react component that renders an <a> which is
// centered, palevioletred and sized at 1.5em
const LinkFromString = styled("a")`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

// A LinkFromString instance should be backed by an HTMLAnchorElement
const MyOtherComponent = () => (
    <LinkFromString
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => undefined}
    />
);

// Create a <LinkFromStringWithProps> react component that renders an <a>
// which takes extra props
interface LinkProps {
    canClick: boolean;
}

const LinkFromStringWithProps = styled("a")`
    font-size: 1.5em;
    text-align: center;
    color: ${(a: LinkProps) => (a.canClick ? "palevioletred" : "gray")};
`;

// A LinkFromStringWithProps instance should be backed by an HTMLAnchorElement
const MyOtherComponentWithProps = () => (
    <LinkFromStringWithProps
        canClick={false}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => undefined}
    />
);

// Create a <LinkFromStringWithPropsAndGenerics> react component that renders an <a>
// which takes extra props passed as a generic type argument
const LinkFromStringWithPropsAndGenerics = styled("a")<LinkProps>`
    font-size: 1.5em;
    text-align: center;
    color: ${a => (a.canClick ? "palevioletred" : "gray")};
`;

// A LinkFromStringWithPropsAndGenerics instance should be backed by an HTMLAnchorElement
const MyOtherComponentWithPropsAndGenerics = () => (
    <LinkFromStringWithPropsAndGenerics
        canClick={false}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => undefined}
    />
);

/**
 * object styles
 */

interface ObjectStyleProps {
    size: string;
}

const functionReturningStyleObject = (props: ObjectStyleProps) => ({
    padding: props.size === "big" ? "10px" : 2
});

const ObjectStylesBox = styled.div`
    ${functionReturningStyleObject} ${{
        backgroundColor: "red",

        // Supports nested objects (pseudo selectors, media queries, etc)
        "@media screen and (min-width: 800px)": {
            backgroundColor: "blue"
        },

        fontSize: 2
    }};
`;
<ObjectStylesBox size="big" />;

/**
 * attrs
 */

const AttrsInput = styled.input.attrs({
    // we can define static props
    type: "password",

    // or we can define dynamic ones
    margin: (props: any) => (props.size as string) || "1em",
    padding: (props: any) => (props.size as string) || "1em"
})`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    /* here we use the dynamically computed props */
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`;

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30042
const AttrsWithOnlyNewProps = styled.h2.attrs({ as: "h1" })`
    color: ${props => (props.as === "h1" ? "red" : "blue")};
    font-size: ${props => (props.as === "h1" ? 2 : 1)};
`;

const AttrsInputExtra = styled(AttrsInput).attrs({ autoComplete: "off" })``;
<AttrsInputExtra />;

/**
 * withConfig
 */

/**
 * shouldForwardProp
 */

// $ExpectError
const WithConfig = styled("div").withConfig()`
    color: red;
`;

styled("div").withConfig({})`
    color: red;
`;

styled("div").withConfig<{ myProp: boolean }>({
    shouldForwardProp: (prop, defaultValidatorFn) => prop === "myProp",
})<{ otherProp: string }>`
    color: red;
    ${p => {
        // $ExpectType boolean
        p.myProp;
        return css``;
    }}
    ${p => {
        // $ExpectType string
        p.otherProp;
        return css``;
    }}
`;

styled("input").withConfig({
    shouldForwardProp: (prop) => prop === "disabled",
})`
    color: red;
`;

styled('div').withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => ['filterThis'].indexOf(prop) !== -1,
})`
    color: red;
`;

styled('div').withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop),
})`
    color: red;
`;

styled("div").withConfig<{ test: boolean }>({
    // $ExpectError
    shouldForwardProp: (prop, defaultValidatorFn) => prop === "invalidProp" && true,
})`
   color: red;
   ${p => p.test && css``}
   ${p => p.invalidProp && css``} // $ExpectError
`;

/**
 * component type
 */

declare const A: React.ComponentClass;
declare const B: React.StatelessComponent;
declare const C: React.ComponentType;

styled(A); // succeeds
styled(B); // succeeds
styled(C); // used to fail; see issue trail linked below

// https://github.com/mui-org/material-ui/pull/8781#issuecomment-349460247
// https://github.com/mui-org/material-ui/issues/9838
// https://github.com/styled-components/styled-components/pull/1420
// https://github.com/Microsoft/TypeScript/issues/21175
// https://github.com/styled-components/styled-components/pull/1427

/**
 * function themes
 */

// Define our button, but with the use of props.theme this time
const ThemedButton = styled.button`
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background: ${props => props.theme.bg};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme2 = {
    fg: "palevioletred",
    bg: "white"
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }: { fg: string; bg: string }) => ({
    fg: bg,
    bg: fg
});

const MyApp = (
    <ThemeProvider theme={theme2}>
        <div>
            <ThemedButton>Default Theme</ThemedButton>

            <ThemeProvider theme={invertTheme}>
                <ThemedButton>Inverted Theme</ThemedButton>
            </ThemeProvider>
        </div>
    </ThemeProvider>
);

/**
 * withTheme HOC
 */

class MyComponent extends React.Component<ThemeProps<{}>> {
    render() {
        const { theme } = this.props;

        console.log("Current theme: ", theme);

        return <h1>Hello</h1>;
    }
}

const ThemedMyComponent = withTheme(MyComponent);

<ThemedMyComponent ref={ref => {
    // $ExpectType MyComponent | null
    ref;
}}/>;
const themedRef = React.createRef<MyComponent>();
<ThemedMyComponent ref={themedRef} />;

interface WithThemeProps {
    theme: {
        color: string;
    };
    text: string;
}

const Component = (props: WithThemeProps) => (
    <div style={{ color: props.theme.color }}>{props.text}</div>
);

const ComponentWithTheme = withTheme(Component);
<ComponentWithTheme text={"hi"} />; // ok
<ComponentWithTheme text={"hi"} theme={{ color: "red" }} />; // ok
<ThemeConsumer>{theme => <Component text="hi" theme={theme} />}</ThemeConsumer>;

/**
 * isStyledComponent utility
 */

const StyledComponent = styled.h1``;

const StatelessComponent = () => <div />;

class ClassComponent extends React.Component {
    render() {
        return <div />;
    }
}

isStyledComponent(StyledComponent);
isStyledComponent(StatelessComponent);
isStyledComponent(ClassComponent);
isStyledComponent("div");

/**
 * server side rendering
 */

const SSRTitle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const sheet = new ServerStyleSheet();
const html = sheet.collectStyles(<SSRTitle>Hello world</SSRTitle>);
const styleHtml = sheet.getStyleTags();
const styleElement = sheet.getStyleElement();
sheet.seal();

const sheet2 = new ServerStyleSheet();
const element = (
    <StyleSheetManager sheet={sheet2.instance} disableCSSOMInjection>
        <SSRTitle>Hello world</SSRTitle>
    </StyleSheetManager>
);

const css2 = sheet2.getStyleElement();

// Wrapping a node stream returned from renderToNodeStream with interleaveWithNodeStream

const sheet3 = new ServerStyleSheet();
const appStream = ReactDOMServer.renderToNodeStream(<Title>Hello world</Title>);
const wrappedCssStream: NodeJS.ReadableStream = sheet3.interleaveWithNodeStream(
    appStream
);

/**
 * StyledComponent.withComponent
 */

const WithComponentH1 = styled.h1`
    color: palevioletred;
    font-size: 1em;
`;

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class Random extends React.Component<any, any> {
    render() {
        const i = getRandomInt(1, 6);

        switch (i) {
            case 1:
                return <h1>Hello World</h1>;
            case 2:
                return <h2>Hello World</h2>;
            case 3:
                return <h3>Hello World</h3>;
            case 4:
                return <h4>Hello World</h4>;
            case 5:
                return <h5>Hello World</h5>;
            case 6:
                return <h6>Hello World</h6>;
            default:
                return null;
        }
    }
}

const WithComponentH2 = WithComponentH1.withComponent("h2");
const WithComponentAbbr = WithComponentH1.withComponent("abbr");

const WithComponentAnchor = WithComponentH1.withComponent("a");
const AnchorContainer = () => (
    <WithComponentAnchor href="https://example.com">
        withComponent Anchor
    </WithComponentAnchor>
);

const WithComponentRandomHeading = WithComponentH1.withComponent(Random);

const WithComponentCompA: React.SFC<{ a: number; className?: string }> = ({
    className
}) => <div className={className} />;
const WithComponentCompB: React.SFC<{ b: number; className?: string }> = ({
    className
}) => <div className={className} />;
const WithComponentStyledA = styled(WithComponentCompA)`
    color: ${(props: { color: string }) => props.color};
`;

const WithComponentFirstStyledA = styled(WithComponentStyledA).attrs({
    a: 1
})``;

const WithComponentFirstStyledB = WithComponentFirstStyledA.withComponent(
    WithComponentCompB
);

const WithComponentFirstStyledANew = styled(WithComponentStyledA).attrs(
    props => ({ a: 1 })
)``;

const test = () => [
    <WithComponentFirstStyledA color={"black"} />,
    <WithComponentFirstStyledB b={2} color={"black"} />,
    <WithComponentFirstStyledANew color={"black"} />
];

const WithComponentRequired = styled((props: { to: string }) => (
    <a href={props.to} />
))``;
// These tests pass in tsservice, but they fail in dtslint. I do not know why.
// <WithComponentRequired href=''/>; // $ExpectError
// <WithComponentRequired to=''/>;

const WithComponentRequired2 = WithComponentRequired.withComponent("a");
// These tests pass in tsservice, but they fail in dtslint. I do not know why.
// <WithComponentRequired2 href=''/>;
// <WithComponentRequired2 to=''/>; // $ExpectError

// 4.0 With Component

const asTest = (
    <>
        <WithComponentH1 as="h2" />
        <WithComponentH1 as={WithComponentH2} />
    </>
);

const ForwardedAsNestedComponent = styled.div``;
const ForwardedAsComponent = styled(ForwardedAsNestedComponent)``;
const forwardedAsTest = (
    <>
        <ForwardedAsComponent forwardedAs="h2" />
        <ForwardedAsComponent forwardedAs={WithComponentH2} />
    </>
);

interface TestContainerProps {
    size: "big" | "small";
    test?: boolean;
}
const TestContainer = ({ size, test }: TestContainerProps) => {
    return null;
};

const StyledTestContainer = styled(TestContainer)`
    background: red;
`;

interface Test2ContainerProps {
    type: "foo" | "bar";
}
class Test2Container extends React.Component<Test2ContainerProps> {
    render() {
        return null;
    }
}

const containerTest = (
    <StyledTestContainer as={Test2Container} type='foo' />
);

// 4.0 refs

const divFnRef = (ref: HTMLDivElement | null) => {
    /* empty */
};
const divRef = React.createRef<HTMLDivElement>();

const StyledDiv = styled.div``;
<StyledDiv ref={divRef} />;
<StyledDiv ref={divFnRef} />;
<StyledDiv ref="string" />; // $ExpectError

const StyledStyledDiv = styled(StyledDiv)``;
<StyledStyledDiv ref={divRef} />;
<StyledStyledDiv ref={divFnRef} />;
<StyledStyledDiv ref="string" />; // $ExpectError

const StyledA = StyledDiv.withComponent("a");
// No longer generating a type error as of Feb. 6th, 2019
// <StyledA ref={divRef} />; // $ExpectError
<StyledA
    ref={ref => {
        // $ExpectType HTMLAnchorElement | null
        ref;
    }}
/>;

async function typedThemes() {
    const theme = {
        color: "green"
    };

    // abuse "await import(...)" to be able to reference the styled-components namespace
    // without actually doing a top level namespace import
    const {
        default: styled,
        css,
        createGlobalStyle,
        ThemeProvider,
        ThemeConsumer
    } = (await import("styled-components")) as any as ThemedStyledComponentsModule<
        typeof theme
    >;

    const ThemedDiv = styled.div`
        background: ${props => {
            // $ExpectType string
            props.theme.color;
            // $ExpectType number | undefined
            props.tabIndex;
            return props.theme.color;
        }};
    `;
    const ThemedDiv2 = styled.div(props => {
        // $ExpectType string
        props.theme.color;
        // $ExpectType number | undefined
        props.tabIndex;

        return {
            background: props.theme.color
        };
    });
    const ThemedDiv3 = styled.div(props => {
        // $ExpectType string
        props.theme.color;
        // $ExpectType number | undefined
        props.tabIndex;

        return css`
            background: ${props.theme.color};
        `;
    });
    const themedCss = css`
        background: ${props => {
            // $ExpectType string
            props.theme.color;
            // $ExpectType "theme"
            type Keys = keyof typeof props;
            return props.theme.color;
        }};
    `;
    //  can't use a FlattenInterpolation as the first argument, would make broken css
    // $ExpectError
    const ThemedDiv4 = styled.div(themedCss);

    const themedCssWithNesting = css(props => ({
        color: props.theme.color,
        [ThemedDiv3]: {
            color: "green"
        }
    }));

    const Global = createGlobalStyle`
        ${themedCssWithNesting}
    `;

    const WithProp = styled.div`
        ${({ ok, theme: { color } }: { ok: boolean; theme: typeof theme }) =>
            ok &&
            css`
                color: ${color};
            `}
    `;

    const WithPropNested = styled.div`
        ${({ ok }: { ok: boolean }) =>
            ok &&
            css`
                color: ${({ theme: { color } }) => color};
            `}
    `;

    return (
        <ThemeProvider theme={theme}>
            <>
                <Global />
                <ThemedDiv />
                <ThemedDiv2 />
                <ThemedDiv3 />
                <ThemeConsumer>
                    {theme => {
                        // $ExpectType string
                        theme.color;
                        return theme.color;
                    }}
                </ThemeConsumer>
                <WithProp ok />
                <WithPropNested ok />
            </>
        </ThemeProvider>
    );
}

async function reexportCompatibility() {
    const sc = await import("styled-components");
    const themed = sc as ThemedStyledComponentsModule<any>;

    let { ...scExports } = sc;
    let { ...themedExports } = themed;
    // both branches must be assignable to each other
    if (Math.random()) {
        scExports = themedExports;
    } else {
        themedExports = scExports;
    }
}

async function themeAugmentation() {
    interface BaseTheme {
        background: string;
    }
    interface ExtraTheme extends BaseTheme {
        accent: string;
    }

    const base = (await import("styled-components")) as any as ThemedStyledComponentsModule<
        BaseTheme
    >;
    const extra = (await import("styled-components")) as any as ThemedStyledComponentsModule<
        ExtraTheme,
        BaseTheme
    >;

    return (
        <base.ThemeProvider
            theme={{
                background: "black"
            }}
        >
            <>
                <extra.ThemeProvider
                    theme={base => base} // $ExpectError
                >
                    <extra.ThemeConsumer>{() => null}</extra.ThemeConsumer>
                </extra.ThemeProvider>
                <extra.ThemeProvider
                    theme={base => ({
                        ...base,
                        accent: "blue"
                    })}
                >
                    <extra.ThemeConsumer>{() => null}</extra.ThemeConsumer>
                </extra.ThemeProvider>
            </>
        </base.ThemeProvider>
    );
}

// NOTE: this is needed for some tests inside cssProp,
// but actually running this module augmentation will cause
// tests elsewhere to break, and there is no way to contain it.
// Uncomment out as needed to run tests.

// declare module "styled-components" {
//     interface DefaultTheme {
//         background: string;
//     }
// }

function cssProp() {
    function Custom(props: React.ComponentPropsWithoutRef<"div">) {
        return <div {...props} />;
    }

    const myCss = "background: blue;";

    return (
        <>
            <div css="background: blue;" />
            <div css={{ background: "blue" }} />
            <div
                // would be nice to be able to turn this into an error as it also crashes the plugin,
                // but this is how optional properties work in TypeScript...
                css={undefined}
            />
            <div
                // css used as tagged function is fine and is correctly handled by the plugin
                css={css`
                    background: blue;
                `}
            />
            <div
                // but this crashes the plugin, even though it's valid type-wise and we can't forbid it
                css={css({ background: "blue" })}
            />
            <div
                // this also crashes the plugin, only inline strings or css template tag work
                css={myCss}
            />
            <div
                css={css`
                    background: ${() => "blue"};
                `}
            />
            <div
                css={css`
                    background: ${props => {
                        // This requires the DefaultTheme augmentation
                        // // $ExpectType string
                        // props.theme.background;
                        return props.theme.background;
                    }};
                `}
            />
            <Custom css="background: blue;" />
            <Custom css={undefined} />
            <Custom
                css={css`
                    background: blue;
                `}
            />
            <Custom
                css={css`
                    background: ${() => "blue"};
                `}
            />
            <Custom
                css={css`
                    background: ${props => {
                        // This requires the DefaultTheme augmentation
                        // // $ExpectType string
                        // props.theme.background;
                        return props.theme.background;
                    }};
                `}
            />
        </>
    );
}

function validateArgumentsAndReturns() {
    const t1: FlattenSimpleInterpolation[] = [
        css({ color: "blue" }),
        css`
            color: blue;
        `,
        css`
            color: ${"blue"};
        `
    ];
    const t4: FlattenInterpolation<any> = [
        css`
            color: ${() => "blue"};
        `,
        css(() => ({ color: "blue" })),
        css(
            () =>
                css`
                    color: "blue";
                `
        )
    ];

    // if the first argument is array-like it's always treated as a string[], this breaks things
    css(
        // $ExpectError
        css`
            ${{ color: "blue" }}
        `
    );
    // _technically_ valid as styled-components doesn't look at .raw but best not to support it
    // $ExpectError
    css([]);

    styled.div({ color: "blue" });
    styled.div(props => ({ color: props.theme.color }));
    styled.div`
        color: ${"blue"};
    `;
    // These don't work for the same reason css doesn't work
    styled.div(
        // $ExpectError
        css`
            ${{ color: "blue" }}
        `
    );
    // $ExpectError
    styled.div([]);

    createGlobalStyle({
        ":root": {
            color: "blue"
        }
    });
    createGlobalStyle`
        :root {
            color: blue;
        }
    `;
    createGlobalStyle(() => ({
        ":root": {
            color: "blue"
        }
    }));
    // these are invalid for the same reason as in styled.div
    // $ExpectError
    createGlobalStyle(css`
        :root {
            color: ${() => "blue"};
        }
    `);
    // $ExpectError
    createGlobalStyle([]);
}

function validateDefaultProps() {
    interface Props {
        requiredProp: boolean;
        optionalProp: string; // Shouldn't need to be optional here
    }

    class MyComponent extends React.PureComponent<Props> {
        static defaultProps = {
            optionalProp: 'fallback'
        };

        render() {
            const { requiredProp, optionalProp } = this.props;
            return (
                <span>
                    {requiredProp.toString()}
                    {optionalProp.toString()}
                </span>
            );
        }
    }

    const StyledComponent = styled(MyComponent)`
        color: red
    `;

    <MyComponent requiredProp />;

    <StyledComponent requiredProp optionalProp="x" />;

    <StyledComponent requiredProp />;

    // still respects the type of optionalProp
    <StyledComponent requiredProp optionalProp={1} />; // $ExpectError

    // example of a simple helper that sets defaultProps and update the type
    type WithDefaultProps<C, D> = C & { defaultProps: D };
    function withDefaultProps<C, D>(component: C, defaultProps: D): WithDefaultProps<C, D> {
        (component as WithDefaultProps<C, D>).defaultProps = defaultProps;
        return component as WithDefaultProps<C, D>;
    }

    const OtherStyledComponent = withDefaultProps(
        styled(MyComponent)` color: red `,
        { requiredProp: true }
    );

    <OtherStyledComponent />;

    <OtherStyledComponent requiredProp="1" />; // $ExpectError
}

interface WrapperProps {
    className?: string;
}
export class WrapperClass extends React.Component<WrapperProps> {
    render() { return <div />; }
}
const StyledWrapperClass = styled(WrapperClass)``;
// React.Component typings always add `children` to props, so this should accept children
const wrapperClass = <StyledWrapperClass>Text</StyledWrapperClass>;

export class WrapperClassFuncChild extends React.Component<WrapperProps & {children: () => any}> {
    render() { return <div />; }
}
const StyledWrapperClassFuncChild = styled(WrapperClassFuncChild)``;
// React.Component typings always add `children` to props, so this should accept children
const wrapperClassNoChildrenGood = <StyledWrapperClassFuncChild>{() => "text"}</StyledWrapperClassFuncChild>;
const wrapperClassNoChildren = <StyledWrapperClassFuncChild>Text</StyledWrapperClassFuncChild>; // $ExpectError

const WrapperFunction: React.FunctionComponent<WrapperProps> = () => <div />;
const StyledWrapperFunction = styled(WrapperFunction)``;
// React.FunctionComponent typings always add `children` to props, so this should accept children
const wrapperFunction = <StyledWrapperFunction>Text</StyledWrapperFunction>;

const WrapperFunc = (props: WrapperProps) => <div />;
const StyledWrapperFunc = styled(WrapperFunc)``;
// No `children` in props, so this should generate an error
const wrapperFunc = <StyledWrapperFunc>Text</StyledWrapperFunc>; // $ExpectError

// Test if static properties added to the underlying component is passed through.
function staticPropertyPassthrough() {
    interface AProps { a: number; }
    interface BProps { b?: string; }
    interface BState { b?: string; }
    class A extends React.Component<AProps> {}
    class B extends React.Component {
        static A = A;
        PUBLIC = 'PUBIC_VAL';
        static F = (props: BProps, state: BState) => props && state;
        static getDerivedStateFromProps(props: BProps, state: BState) {
            return state;
        }
    }
    // Test FunctionComponent as well which can't be tested in <= TS 3.0
    const C: React.FC & { A: typeof A; F: () => void } = () => <div></div>;
    C.A = A;
    C.F = () => {};
    const StyledB = styled(B)``;
    const StyledC = styled(C)``;
    <StyledB.A />; // $ExpectError
    <StyledB.A a='a' />; // $ExpectError
    <StyledB.A a={0} />;
    StyledB.PUBLIC; // $ExpectError
    StyledB.componentDidMount(); // $ExpectError
    StyledB.F({ b: 'b' } , {  b: 'b' });
    StyledB.getDerivedStateFromProps({ b: 'b' } , { b: 'b' }); // $ExpectError
    <StyledC.A a={0} />;
    StyledC.F();
}

function unionTest() {
    interface Book {
        kind: 'book';
        author: string;
    }

    interface Magazine {
        kind: 'magazine';
        issue: number;
    }

    type SomethingToRead = (Book | Magazine);

    const Readable: React.FunctionComponent<SomethingToRead> = props => {
        if (props.kind === 'magazine') {
            return <div>magazine #{props.issue}</div>;
        }

        return <div>magazine #{props.author}</div>;
    };

    const StyledReadable = styled(Readable)`
        font-size: ${props => props.kind === 'book' ? 16 : 14}
    `;

    // undesired, fix was reverted because of https://github.com/Microsoft/TypeScript/issues/30663
    <StyledReadable kind="book" author="Hejlsberg" />; // $ExpectError
    <StyledReadable kind="magazine" author="Hejlsberg" />; // $ExpectError
}

function unionTest2() {
    // Union of two non-overlapping types
    type Props = {
        foo: number, bar?: undefined
    } | {
        foo?: undefined, bar: string
    };

    const C = styled.div<Props>``;

    <C foo={123} />;
    <C bar="foobar" />;
    <C />; // $ExpectError
    <C foo={123} bar="foobar" />; // $ExpectError
}
