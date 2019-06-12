import * as React from 'react';
import * as dg from './index';

React.createElement(
    dg.GUI,
    {
        style : {width : '200px'},
        expanded : false
    },
    React.createElement(
        dg.Folder,
        {
            label : 'Some Folder',
            onFinishChange : (value : boolean) => {}
        },
        React.createElement(
            dg.Button,
            {
                label : 'Some Button',
                onClick : () => {}
            }
        ),
        React.createElement(
            dg.Checkbox,
            {
                checked : true,
                label : 'Check me out'
            }
        ),
        React.createElement(
            dg.Color,
            {
                red : 100,
                green : 50,
                blue : 25,
                onChange : (value : {red : number, green : number, blue : number}) => {}
            }
        ),
        React.createElement(
            dg.Folder,
            {
                label : 'We must go deeper'
            },
            React.createElement(
                dg.Gradient,
                {
                    stops : [{
                        red : 10,
                        green : 10,
                        blue : 10,
                        stop : 0.5
                    }]
                }
            ),
            React.createElement(
                dg.Number,
                {
                    min : 0,
                    max : 10,
                    step : 1
                }
            ),
            React.createElement(
                dg.Select,
                {
                    options : ['inny', 'mini', 'myni', 'mo'],
                    label : 'Choose your hero'
                }
            )
        ),
        React.createElement(
            dg.Text,
            {
                value : 'Hello World'
            }
        )
    )
);