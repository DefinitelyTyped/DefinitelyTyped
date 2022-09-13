import * as React from 'react';

import { TransitionStyle, OpaqueConfig } from 'react-motion';
import {
    AnimatableStyles,
    AnimatedRoute,
    AnimatedSwitch,
    AnimatedSwitchProps,
    spring,
    Styles
} from 'react-router-transition';

const mapStyles: AnimatedSwitchProps["mapStyles"] = (styles) => {
    return {
        opacity: styles.opacity as number,
        transform: `scale(${styles.scale})`
    };
};

function bounce(val: number): OpaqueConfig {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

const style1: Styles = { opacity: 0, scale: 1.2 };
const style2: AnimatableStyles = { opacity: 0, scale: bounce(0.8) };
// tslint:disable-next-line no-object-literal-type-assertion
const style3 = { opacity: 1, scale: bounce(1) } as const;
// @ts-expect-error
const style4: ReturnType<typeof spring> = style3;

const ReactRouterTransitionTest: React.FC = () => {
    return (
        <AnimatedSwitch
            atActive={style1}
            atLeave={style2}
            // @ts-expect-error
            atEnter={style3}
            className="switch-wrapper"
            didLeave={(styleThatLeft: TransitionStyle) => {}}
            mapStyles={mapStyles}
            runOnMount={true}
            wrapperComponent={"main"}
        >
            <AnimatedRoute
                atEnter={style1}
                atLeave={style2}
                atActive={style3}
                runOnMount={true}
                didLeave={(styleThatLeft: TransitionStyle) => {}}
                exact
                strict
                sensitive
                path={"/a"}
                component={class extends React.Component<any, any> {}}
            />
            <AnimatedRoute
                atEnter={style1}
                atLeave={style2}
                atActive={style3}
                runOnMount={true}
                // @ts-expect-error
                didLeave={(styleThatLeft: number) => {}}
                exact
                strict
                sensitive
                path={"/b"}
                render={() => <p>Hello World!</p>}
            />
            <AnimatedRoute
                atEnter={style1}
                atLeave={style2}
                atActive={style3}
                runOnMount={true}
                // @ts-expect-error
                didLeave={(styleThatLeft: string) => {}}
                exact
                strict
                sensitive
                path={"/c"}
            >
                <p>Goodbye World!</p>
            </AnimatedRoute>
        </AnimatedSwitch>
    );
};
