/** @jsxImportSource react */
import Blessed = require("blessed");
import ReactBlessed = require("react-blessed");
import React = require("react");
import { BlessedIntrinsicElementsPrefixed, BlessedAttributes, Element } from "react-blessed";

// Testing example from demos page
// https://github.com/Yomguithereal/react-blessed/blob/master/examples/dashboard.jsx
/**
 * Stylesheet
 */

const stylesheet: { [key: string]: BlessedAttributes<Element>["class"] } = {
    bordered: {
        border: {
            type: "line",
        },
        style: {
            border: {
                fg: "blue",
            },
        },
    },
};

/**
 * Top level component.
 */
class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Log />
                <Request />
                <Response />
                <Jobs />
                <Progress />
                <Stats />
            </>
        );
    }
}

/**
 * Log component.
 */
class Log extends React.Component {
    render() {
        return (
            <blessed-box label="Log" class={stylesheet.bordered} width="60%" height="70%" draggable={true}>
                {"Hello"}, {0}, {"World"}
            </blessed-box>
        );
    }
}

/**
 * Request component.
 */
class Request extends React.Component {
    render() {
        return (
            <blessed-box label="Request" class={stylesheet.bordered} top="70%" width="30%">
                {0}
            </blessed-box>
        );
    }
}

/**
 * Response component.
 */
class Response extends React.Component {
    render() {
        return <blessed-box class={stylesheet.bordered} top="70%" left="30%" width="30%" />;
    }
}

/**
 * Jobs component.
 */
class Jobs extends React.Component {
    render() {
        return <blessed-box label="Jobs" class={stylesheet.bordered} left="60%" width="40%" height="60%" />;
    }
}

/**
 * Progress component.
 */
class Progress extends React.Component<any, any> {
    state: {
        progress: number;
        color: string;
    } = {
        progress: 0,
        color: "blue",
    };

    constructor(props: any) {
        super(props);
        const interval: NodeJS.Timer = setInterval(() => {
            const { progress } = this.state;
            if (this.state.progress >= 100) {
                clearInterval(interval);
                return;
            }
            this.setState({
                progress: progress + 1,
            });
        }, 50);
    }

    render() {
        const { progress, color } = this.state;
        const label = `Progress - ${progress}%`;

        return (
            <blessed-progressbar
                label={label}
                onComplete={() =>
                    this.setState({
                        color: "green",
                    })
                }
                onKeypress={(...args) => {}}
                class={stylesheet.bordered}
                filled={progress}
                top="60%"
                left="60%"
                width="40%"
                height="10%"
                style={{
                    bar: {
                        bg: color,
                    },
                }}
            />
        );
    }
}

/**
 * Stats component.
 */
class Stats extends React.Component {
    render() {
        return (
            <blessed-box label="Stats" class={stylesheet.bordered} top="70%" left="60%" width="40%" height="31%">
                Some stats
            </blessed-box>
        );
    }
}

/**
 * Rendering the screen.
 */
const screen = Blessed.screen({
    autoPadding: true,
    smartCSR: true,
    title: "react-blessed dashboard",
});

screen.key(["escape", "q", "C-c"], () => {
    return process.exit(0);
});

ReactBlessed.render(<Dashboard />, screen);

/**
 * Test JSX.IntrinsicElements set in jsx-runtime.
 */
const Box = () => <box style={{ fg: "blue" }} />;
const BlessedBox = () => <blessed-box style={{ fg: "blue" }} />;
const FF: React.FC<ReactBlessed.BlessedIntrinsicElements["box"]> = props => <box {...props} />;

// @ts-expect-error
const Div = () => <div />;

/**
 * Test ReactElement attributes
 * Tests from DefinitelyTyped/types/react/test/tsx.tsx
 */
const ContextWithRenderProps = React.createContext("defaultValue");
class NewContext extends React.Component {
    static contextType = ContextWithRenderProps;
    context: React.ContextType<typeof ContextWithRenderProps> = "";

    render() {
        // $ExpectType string
        this.context;
        return this.context;
    }
}

const ForwardRef = React.forwardRef(
    (props: BlessedIntrinsicElementsPrefixed["blessed-box"], ref?: React.Ref<ReactBlessed.BoxElement>) => (
        <blessed-box {...props} ref={ref} />
    ),
);
const ForwardRef2 = React.forwardRef(
    (props: React.ComponentProps<typeof ForwardRef>, ref?: React.Ref<ReactBlessed.BoxElement>) => (
        <ForwardRef {...props} ref={ref} />
    ),
);
const boxFnRef = (ref: ReactBlessed.BoxElement | null) => {
    /* empty */
};
const boxRef = React.createRef<ReactBlessed.BoxElement>();

<ForwardRef ref={boxFnRef} />;
<ForwardRef ref={boxRef} />;
// @ts-expect-error
<ForwardRef ref="string" />;
<ForwardRef2 ref={boxFnRef} />;
<ForwardRef2 ref={boxRef} />;
// @ts-expect-error
<ForwardRef2 ref="string" />;

const newContextRef = React.createRef<NewContext>();
<NewContext ref={newContextRef} />;

<NewContext ref="string" />;

const ForwardNewContext = React.forwardRef((_props: {}, ref?: React.Ref<NewContext>) => <NewContext ref={ref} />);
<ForwardNewContext ref={newContextRef} />;
// @ts-expect-error
<ForwardNewContext ref="string" />;

const ForwardRef3 = React.forwardRef(
    (
        props: BlessedIntrinsicElementsPrefixed["blessed-box"] &
            Pick<BlessedIntrinsicElementsPrefixed["blessed-box"] & { theme?: {} }, "ref" | "theme">,
        ref?: React.Ref<ReactBlessed.BoxElement>,
    ) => <blessed-box {...props} ref={ref} />,
);

<ForwardRef3 ref={boxFnRef} />;
<ForwardRef3 ref={boxRef} />;

interface Props {
    hello: string;
}
interface State {
    foobar: string;
}
class ComponentWithPropsAndState extends React.Component<Props, State> {}
<ComponentWithPropsAndState hello="TypeScript" />;

class ComponentWithoutState extends React.Component<Props> {}
<ComponentWithoutState hello="TypeScript" />;

class ComponentWithoutPropsAndState extends React.Component {}
<ComponentWithoutPropsAndState />;
