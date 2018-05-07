/// <reference types="react-dom"/>

import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { Grid, Cell, findMatch, setBreakpoints, findBreakpoints, getCurrentBreakpoints, optimizedResize, palm, lap, portable, desk } from "react-flexr";

class Example extends React.Component {
    render() {
        return (
            <Grid>
                <Cell>1/3</Cell>
                <Cell>1/3</Cell>
                <Cell>1/3</Cell>
            </Grid>
        );
    }
}

class Example2 extends React.Component {
    render() {
        return (
            <Grid>
                <Cell size="6/12">
                    Fills Half
                </Cell>

                <Cell>
                    Fills Rest.. (Yay for Flexbox)
                </Cell>

                <Cell size={200} lap={150}>
                    Fills 150px on lap and 200px everywhere else
                </Cell>

                <Cell size={0.5} lap={0.25}>
                    Fills a quarter on lap and half everywhere else
                </Cell>

                <Cell size="3/12">
                    Fills a quarter
                </Cell>

                <Cell palm="3/12" lap="1/2">
                    Fills a quarter on palm (mobile), half on lap and dynamicly sized everywhere else
                </Cell>

                <Cell palm="hidden" size="1/2">
                    Hidden on palm, half width otherwise
                </Cell>
            </Grid>
        );
    }
}

class App1 extends React.Component {
    render() {
        const isPalm = findMatch("palm");

        if (isPalm) console.log( "only logged in palm" );

        return (
            <div>
                <h1>Only visible in palm:</h1>
                { isPalm
                    ? <h2>Palm</h2>
                    : null }

                <h1>Allows Multiple Matches</h1>
                { findMatch("desk", "lap")
                    ? <h2>Lap or Desk</h2>
                    : null }
            </div>
        );
    }
}

const isMobile = /iP(hone|od)|Mobile/;
function textFxn(req: any, res: any): void {
    if ( isMobile.test( req.headers["user-agent"] ) ) {
        setBreakpoints(["palm", "portable"])
    }
    else {
        setBreakpoints(["desk"])
    }
    const html = ReactDOMServer.renderToString( <App1 />);

    res.send( "<!doctype html>" + html );
}

const breakpoints: string[] | boolean = findBreakpoints();

class App2 extends React.Component {
    componentDidMount() {
        optimizedResize.init( () => {
            if ( findBreakpoints() ) {
                console.log("New Breakpoints");
                this.forceUpdate();
            }
        });
    }
}

const breakpoints2: string[] = getCurrentBreakpoints();

const someStrings: string[] = [palm, lap, portable, desk];
