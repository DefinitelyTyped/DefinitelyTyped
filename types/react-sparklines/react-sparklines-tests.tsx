import * as React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesCurve,
    SparklinesBars,
    SparklinesReferenceLine,
    SparklinesNormalBand,
    SparklinesSpots,
    SparklinesText,
} from 'react-sparklines';

class SparklinesDefaultTest extends React.Component {
    render() {
        return (
            <Sparklines>
                <SparklinesLine />
                <SparklinesBars />
                <SparklinesCurve />
                <SparklinesReferenceLine />
                <SparklinesNormalBand />
                <SparklinesSpots />
                <SparklinesText />
            </Sparklines>
        );
    }
}

class SparklinesRegularTest extends React.Component {
    render() {
        return (
            <Sparklines data={[0, 1, 2, 3, 4, 5, 10, 23, 0, 5]}>
                <SparklinesBars style={{ fill: '#273e62', opacity: 0.25 }} />
                <SparklinesLine color="#273e62" />
                <SparklinesSpots style={{ fill: '#00aaff' }} />
            </Sparklines>
        );
    }
}
