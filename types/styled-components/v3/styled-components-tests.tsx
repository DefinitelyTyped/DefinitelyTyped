import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';

import styled, {
    css,
    injectGlobal,
    isStyledComponent,
    keyframes,
    ServerStyleSheet,
    StyleSheetManager,
    ThemeProps,
    ThemeProvider,
    withTheme,
} from 'styled-components';

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
    background: ${props => (props.primary ? 'palevioletred' : 'white')};
    color: ${props => (props.primary ? 'white' : 'palevioletred')};

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
    border-color: ${'red'};
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const theme = {
    main: 'mediumseagreen',
};

injectGlobal`
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
                <Wrapper>
                    <Title>
                        Hello World, this is my first styled component!
                    </Title>

                    <Input placeholder="@mxstbr" type="text" />
                    <TomatoButton name="demo" />
                </Wrapper>
                ;
            </ThemeProvider>
        );
    }
}

// css which only uses simple interpolations without functions
const cssWithValues1 = css`
    font-size: ${14} ${'pt'};
`;
// css which uses other simple interpolations without functions
const cssWithValues2 = css`
  ${cssWithValues1}
  ${[cssWithValues1, cssWithValues1]}
  font-weight: ${'bold'};
`;
// injectGlobal accepts simple interpolations if they're not using functions
injectGlobal`
  ${'font-size'}: ${10}pt;
  ${cssWithValues1}
  ${[cssWithValues1, cssWithValues2]}
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
// css with function interpolations cannot be used in injectGlobal
/*
injectGlobal`
  ${cssWithFunc1}
`;
*/

const name = 'hey';

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
const LinkFromString = styled('a')`
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

const LinkFromStringWithProps = styled('a')`
    font-size: 1.5em;
    text-align: center;
    color: ${(a: LinkProps) => (a.canClick ? 'palevioletred' : 'gray')};
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
const LinkFromStringWithPropsAndGenerics = styled<LinkProps, 'a'>('a')`
    font-size: 1.5em;
    text-align: center;
    color: ${a => (a.canClick ? 'palevioletred' : 'gray')};
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
    padding: props.size === 'big' ? '10px' : 2,
});

const ObjectStylesBox = styled.div`
    ${functionReturningStyleObject} ${{
        backgroundColor: 'red',

        // Supports nested objects (pseudo selectors, media queries, etc)
        '@media screen and (min-width: 800px)': {
            backgroundColor: 'blue',
        },

        fontSize: 2,
    }};
`;

<ObjectStylesBox size="big" />;

/**
 * attrs
 */

const AttrsInput = styled.input.attrs({
    // we can define static props
    type: 'password',

    // or we can define dynamic ones
    margin: (props: any) => (props.size as string) || '1em',
    padding: (props: any) => (props.size as string) || '1em',
})`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    /* here we use the dynamically computed props */
    margin: ${props => props.margin};
    padding: ${props => props.padding};
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
 * extend
 */

const ExtendButton = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

// We're extending Button with some extra styles
const TomatoExtendButton = ExtendButton.extend`
    color: tomato;
    border-color: tomato;
`;

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
    fg: 'palevioletred',
    bg: 'white',
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }: { fg: string; bg: string }) => ({
    fg: bg,
    bg: fg,
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

        console.log('Current theme: ', theme);

        return <h1>Hello</h1>;
    }
}

const ThemedMyComponent = withTheme(MyComponent);

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

<ComponentWithTheme text={'hi'} />; // ok
<ComponentWithTheme text={'hi'} theme={{ color: 'red' }} />; // ok

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
isStyledComponent('div');

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

const sheet2 = new ServerStyleSheet();
const element = (
    <StyleSheetManager sheet={sheet2.instance}>
        <SSRTitle>Hello world</SSRTitle>
    </StyleSheetManager>
);

const css2 = sheet2.getStyleElement();

// Wrapping a node stream returned from renderToNodeStream with interleaveWithNodeStream

const sheet3 = new ServerStyleSheet();
const appStream = ReactDOMServer.renderToNodeStream(<Title>Hello world</Title>);
const wrappedCssStream: NodeJS.ReadableStream = sheet3.interleaveWithNodeStream(
    appStream,
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

const WithComponentH2 = WithComponentH1.withComponent('h2');
const WithComponentAbbr = WithComponentH1.withComponent('abbr');

const WithComponentAnchor = WithComponentH1.withComponent('a');
const AnchorContainer = () => (
    <WithComponentAnchor href="https://example.com">
        withComponent Anchor
    </WithComponentAnchor>
);

const WithComponentRandomHeading = WithComponentH1.withComponent(Random);

const WithComponentCompA: React.SFC<{ a: number; className?: string }> = ({
    className,
}) => <div className={className} />;
const WithComponentCompB: React.SFC<{ b: number; className?: string }> = ({
    className,
}) => <div className={className} />;
const WithComponentStyledA = styled(WithComponentCompA)`
    color: ${(props: { color: string }) => props.color};
`;

const WithComponentFirstStyledA = styled(WithComponentStyledA).attrs({
    a: 1,
})``;

const WithComponentFirstStyledB = WithComponentFirstStyledA.withComponent(
    WithComponentCompB,
);

const test = () => [
    <WithComponentFirstStyledA color={'black'} />,
    <WithComponentFirstStyledB b={2} color={'black'} />,
];
