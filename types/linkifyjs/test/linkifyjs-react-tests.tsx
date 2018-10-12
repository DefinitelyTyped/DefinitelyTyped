'use strict';

import * as React from 'react';

// React
import Linkify from 'linkifyjs/react';
class LinkfiyTest extends React.Component {
    render() {
        return (
            <div>
                Foobar
                <Linkify>
                    You should navigate to http://www.google.com/
                </Linkify>
            </div>
        );
    }
}
