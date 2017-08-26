import * as React from 'react';
import * as ReactDOM from 'react-dom';

import DoughnutExample from './doughnut';
import DynamicDoughnutExample from './dynamic-doughnut';
import PieExample from './pie';
import LineExample from './line';
import BarExample from './bar';
import HorizontalBarExample from './horizontalBar';
import RadarExample from './radar';
import PolarExample from './polar';
import BubbleExample from './bubble';
import MixedDataExample from './mix';
import RandomizedDataLineExample from './randomizedLine';

class App extends React.Component {
	render() {
		return (
			<div>
				<hr />
				<DoughnutExample />
				<hr />
				<DynamicDoughnutExample />
				<hr />
				<PieExample />
				<hr />
				<LineExample />
				<hr />
				<BarExample />
				<hr />
				<HorizontalBarExample />
				<hr />
				<RadarExample />
				<hr />
				<PolarExample />
				<hr />
				<BubbleExample />
				<hr />
				<MixedDataExample />
				<hr />
				<RandomizedDataLineExample />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
