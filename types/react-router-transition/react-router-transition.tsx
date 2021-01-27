// Type definitions for react-router-transition 2.0
// Project: https://github.com/maisano/react-router-transition, https://www.npmjs.com/package/react-router-transition
// Definitions by: TheDSCPL <https://github.com/TheDSCPL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';

import { TransitionStyle, OpaqueConfig } from 'react-motion';
import {
    AnimatedRoute,
    AnimatedSwitch,
    spring
} from 'react-router-transition';
import type {
    AnimatedRouteProps,
    AnimatedSwitchProps,
    RouteTransitionProps,
    Styles
} from 'react-router-transition';

const mapStyles: AnimatedSwitchProps["mapStyles"] = (styles) => {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

function bounce(val: number): OpaqueConfig {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

const style1: Styles = { opacity: 0, scale: 1.2 }
const style2: Styles = { opacity: 0, scale: bounce(0.8) }
const style3 = { opacity: 1, scale: bounce(1) } as const;
// $ExpectError
const style4: ReturnType<typeof spring> = style3

const ReactRouterTransitionTest: React.FC = () => {
    return (
        <AnimatedSwitch
            atEnter={style1}
            atLeave={style2}
            atActive={style3}
            className="switch-wrapper"
            didLeave={(styleThatLeft: TransitionStyle)=>{}}
            mapStyles={mapStyles}
            runOnMount={true}
            wrapperComponent={"main"}
        >
            <AnimatedRoute
                atEnter={style1}
                atLeave={style2}
                atActive={style3}
                runOnMount={true}
                didLeave={(styleThatLeft: TransitionStyle)=>{}}
                exact
                strict
                sensitive
                path={"/a"}
                component={class extends React.Component<any, any>{}}
            />
            <AnimatedRoute
                atEnter={style1}
                atLeave={style2}
                atActive={style3}
                runOnMount={true}
                // $ExpectError
                didLeave={(styleThatLeft: number)=>{}}
                exact
                strict
                sensitive
                path={"/b"}
                render={()=><p>Hello World!</p>}
            />
            <AnimatedRoute
                atEnter={style1}
                atLeave={style2}
                atActive={style3}
                runOnMount={true}
                // $ExpectError
                didLeave={(styleThatLeft: string)=>{}}
                exact
                strict
                sensitive
                path={"/c"}
            >
                <p>Goodbye World!</p>
            </AnimatedRoute>
        </AnimatedSwitch>
    )
}
