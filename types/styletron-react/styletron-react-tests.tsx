import * as React from 'react';
import {
    DebugEngine,
    styled,
    StandardEngine,
    withStyle,
    withStyleDeep,
    withTransform,
    withWrapper,
    Provider,
    useStyletron,
    DevProvider,
} from 'styletron-react';

// styled()
// --------------------------

// Static Styles
const BasicStyled = styled('div', { color: 'red' });

// Dynamic Styles
interface DynamicStyledProps {
    $fraction: number;
}

const DynamicStyled = styled('div', (props: DynamicStyledProps) => {
    return { color: props.$fraction < 0.5 ? 'red' : 'green' };
});

<DynamicStyled $fraction={Math.random()} />;

const Button = () => <button>Do something</button>;

const StyledButton = styled(Button, { color: 'blue' });

<StyledButton />;

const DynamicStyledButton = styled(Button, (props: DynamicStyledProps) => {
    return { color: props.$fraction < 0.5 ? 'red' : 'green' };
});

<DynamicStyledButton $fraction={Math.random()} />;

const ComplexButton = ({ isDisabled }: { isDisabled: boolean }) => (
    <button disabled={isDisabled}>Disabled button</button>
);

const StyledComplexButton = styled(ComplexButton, { color: 'blue' });

<StyledComplexButton isDisabled />;

const DynamicStyledComplexButton = styled(ComplexButton, (props: DynamicStyledProps) => {
    return { color: props.$fraction < 0.5 ? 'red' : 'green' };
});

<DynamicStyledComplexButton $fraction={Math.random()} isDisabled />;

// Allows $as prop
<BasicStyled $as="button" />;

// Allows $style prop
<BasicStyled $style={{ color: 'blue' }} />;

const $styleFn = (props: DynamicStyledProps) => ({ color: props.$fraction < 0.2 ? 'red' : 'green' });

<DynamicStyled $style={$styleFn} $fraction={Math.random()} />;

// withStyle()
// --------------------------

// Static Styles
const WithStyledSimple = withStyle(BasicStyled, { color: 'blue' });

<WithStyledSimple />;

// Dynamic Styles
interface WithStyledDynamicProps {
    $crushed: boolean;
}

const WithStyledDynamic = withStyle(BasicStyled, (props: WithStyledDynamicProps) => ({
    letterSpacing: props.$crushed ? '-5px' : '0',
}));

<WithStyledDynamic $crushed />;

// withStyleDeep()
// --------------------------

// Static Styles
const WithStyledDeepSimple = withStyleDeep(BasicStyled, { color: 'blue' });

<WithStyledDeepSimple />;

// Dynamic Styles
interface WithStyledDeepDynamicProps {
    $crushed: boolean;
}

const WithStyledDeepDynamic = withStyleDeep(BasicStyled, (props: WithStyledDeepDynamicProps) => ({
    letterSpacing: props.$crushed ? '-5px' : '0',
}));

<WithStyledDeepDynamic $crushed />;

// withTransform()
// --------------------------

interface WithTransformTestProps {
    $inline: boolean;
}

const WithTransformTest = withTransform(BasicStyled, (style, props: WithTransformTestProps) => {
    const display = style.display === 'none' ? 'none' : props.$inline ? 'inline-flex' : 'flex';
    return { ...styled, display };
});

<WithTransformTest $inline />;

// withWrapper()
// --------------------------

const PrettyButton = styled('button', { background: 'green' });

const { Consumer } = React.createContext(true);

const WithWrapped = withWrapper(PrettyButton, Styled => props => (
    <Consumer>{value => <Styled {...props} disabled={value} />}</Consumer>
));

<WithWrapped />;

// Style composition still works as normal;
const StyledWithWrapper = withStyle(WithWrapped, { background: 'red' });

<StyledWithWrapper />;

// <Provider />
// --------------------------

const engineNoop = (arg: any) => (arg ? '' : '');

const engine: StandardEngine = {
    renderStyle: engineNoop,
    renderKeyframes: engineNoop,
    renderFontFace: engineNoop,
};

const App = () => (
    <Provider value={engine}>
        <PrettyButton />
    </Provider>
);

<App />;

// <DevProvider />
// --------------------------

const debug = new DebugEngine();

const DevApp = () => (
    <DevProvider value={engine} debug={debug}>
        <PrettyButton />
    </DevProvider>
);

<DevApp />;

// useStyletron()
// --------------------------

const [css] = useStyletron();

<div className={css({ backgroundColor: 'pink' })} />;
