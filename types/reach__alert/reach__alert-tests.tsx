import Alert from '@reach/alert';

import * as React from "react";
import { render } from "react-dom";

render(<Alert />, document.getElementById('app'));

// should handle both types
render(<Alert type="assertive" />, document.getElementById('app'));
render(<Alert type="polite" />, document.getElementById('app'));

// Should take div props and spread them down to div tag
render(<Alert onDoubleClick={() => {}} />, document.getElementById('app'));
render(
    <Alert type="assertive">This is a standard alert.</Alert>,
    document.getElementById('app')
);

// Should explode on a bad type
// $ExpectError
render(<Alert type="foo" />, document.getElementById('app'));

// Should throw on a bad prop
// $ExpectError
render(<Alert badProp />, document.getElementById('app'));
