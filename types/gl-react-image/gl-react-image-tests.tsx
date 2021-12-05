import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GLImage from 'gl-react-image';
import { Surface } from 'gl-react-dom';

const App = () => (
    <div>
        <Surface width={640} height={480}>
            <GLImage source="http://i.imgur.com/tCatS2c.jpg" resizeMode="stretch" />
        </Surface>
    </div>
);

const element = document.createElement('div');
document.body.appendChild(element);
ReactDOM.render(<App />, element);
