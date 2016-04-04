
/// <reference path="../react/react.d.ts" />
/// <reference path="./react-motion.ts"/>

import * as React from 'react';
import {Motion, spring} from 'react-motion';


class Root extends React.Component<{}, {}> {
    render() {
        return (
            <Motion defaultStyle={{ x: 0 }} style = {{ x: spring(10) }}>
                {value => <div>{ value.x } </div>}
            </Motion>
        );
    }
}
