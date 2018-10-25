import * as React from 'react';

import * as ReactNative from 'react';

import styled, {
    css,
    isStyledComponent,
    ThemeProps,
    ThemeProvider,
    withTheme,
    ThemeConsumer,
} from 'styled-components/native';

/**
 * general usage
 */

// Create a <Title> react native component that renders a <Text> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.Text`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <View> with
// some padding and a papayawhip background
const Wrapper = styled.View`
    padding: 4em;
    background: papayawhip;
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
        return (
            <ReactNative.Button>
                Custom button
            </ReactNative.Button>
        );
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

const theme = {
    main: 'mediumseagreen',
};

class Example extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <Title>
                        Hello World, this is my first styled component!
                    </Title>
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
const styledButton = styled.Button`
  ${cssWithValues1} ${[cssWithValues1, cssWithValues2]}
  ${cssWithFunc1} ${[cssWithFunc1, cssWithFunc2]}
  ${() => [cssWithFunc1, cssWithFunc2]}
`;

const name = 'hey';

const ThemedMyButton = withTheme(MyButton);

<ThemedMyButton name={name} />;

/**
 * nested styles
 */

const Link = styled.Text`
    color: red;
`;

const AlternativeLink = styled.Text`
    color: blue;
`;

const freeStyles = css`
    background-color: black;
    color: white;
    ${Link} {
        color: blue;
    }
`;

const Article = styled.View`
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
const LinkFromString = styled('Text')`
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

const LinkFromStringWithProps = styled('Text')`
    font-size: 1.5em;
    text-align: center;
    color: ${(text: LinkProps) => (text.canClick ? 'palevioletred' : 'gray')};
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
const LinkFromStringWithPropsAndGenerics = styled<LinkProps, 'Text'>('Text')`
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

const ObjectStylesBox = styled.View`
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

const AttrsInput = styled.TextInput.attrs({
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
 * function themes
 */

// Define our button, but with the use of props.theme this time
const ThemedButton = styled.Button`
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

        return <Text>Hello</Text>;
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
    <View style={{ color: props.theme.color }}>{props.text}</View>
);

const ComponentWithTheme = withTheme(Component);

<ComponentWithTheme text={'hi'} />; // ok
<ComponentWithTheme text={'hi'} theme={{ color: 'red' }} />; // ok

<ThemeConsumer>
    {(theme) => <Component text="hi" theme={theme} />}
</ThemeConsumer>;

/**
 * isStyledComponent utility
 */

const StyledComponent = styled.View``;

const StatelessComponent = () => <Text />;

class ClassComponent extends React.Component {
    render() {
        return <Text />;
    }
}

isStyledComponent(StyledComponent);
isStyledComponent(StatelessComponent);
isStyledComponent(ClassComponent);
isStyledComponent('View');


interface TestContainerProps {
    size: 'big' | 'small';
    test?: boolean;
}
const TestContainer = ({ size, test }: TestContainerProps) => {
    return null;
};

const StyledTestContainer = styled(TestContainer)`
    background: red;
`;

interface Test2ContainerProps {
    type: 'foo' | 'bar';
}
class Test2Container extends React.Component<Test2ContainerProps> {
    render() {
        return null;
    }
}

const containerTest = (
    <StyledTestContainer as={Test2Container} size="small" />
);
