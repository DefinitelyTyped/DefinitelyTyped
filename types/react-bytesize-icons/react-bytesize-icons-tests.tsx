import * as React from 'react';
import { render } from 'react-dom';
import {
    Activity, Bag, Clipboard, CreditCard, Desktop, External, Export, Feed, Filter,
    Fullscreen, FullscreenExit, GitHub, Microphone, Mobile, Move, Moon, SignIn, SignOut,
    Telephone, ZoomIn, ZoomOut, ZoomReset
} from 'react-bytesize-icons';

render(<Activity/>, document.getElementById('test'));
render(<External width={42} color="blue"/>, document.getElementById('test'));
render(<Export width={42} height={21} strokeWidth="10%" strokeLinejoin="bevel" strokeLinecap="butt" color="blue" className="exportClass" id="export"/>, document.getElementById('test'));

render(<Bag/>, document.getElementById('test'));
render(<Clipboard/>, document.getElementById('test'));
render(<CreditCard/>, document.getElementById('test'));
render(<Desktop/>, document.getElementById('test'));
render(<Feed/>, document.getElementById('test'));
render(<Filter/>, document.getElementById('test'));
render(<Fullscreen/>, document.getElementById('test'));
render(<FullscreenExit/>, document.getElementById('test'));
render(<GitHub width={42}/>, document.getElementById('test'));
render(<Microphone/>, document.getElementById('test'));
render(<Mobile/>, document.getElementById('test'));
render(<Move/>, document.getElementById('test'));
render(<Moon/>, document.getElementById('test'));
render(<SignIn/>, document.getElementById('test'));
render(<SignOut/>, document.getElementById('test'));
render(<Telephone/>, document.getElementById('test'));
render(<ZoomIn/>, document.getElementById('test'));
render(<ZoomOut/>, document.getElementById('test'));
render(<ZoomReset/>, document.getElementById('test'));
