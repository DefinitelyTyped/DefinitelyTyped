import * as Plotly from 'plotly.js/lib/core';
import { ScatterData, Layout, PlotlyHTMLElement, newPlot } from 'plotly.js/lib/core';

const graphDiv = '#test';

//////////////////////////////////////////////////////////////////////
// Plotly.newPlot
(() => {
	const trace1 = {
		x: [1999, 2000, 2001, 2002],
		y: [10, 15, 13, 17],
		type: 'scatter'
	} as ScatterData;
	const trace2 = {
		x: [1999, 2000, 2001, 2002],
		y: [16, 5, 11, 9],
		type: 'scatter'
	} as ScatterData;
	const data = [trace1, trace2];
	const layout = {
		title: 'Sales Growth',
		xaxis: {
			title: 'Year',
			showgrid: false,
			zeroline: false
		},
		yaxis: {
			title: 'Percent',
			showline: false
		}
	};
	Plotly.newPlot(graphDiv, data, layout);
})();
(() => {
	// deprecated: calling plot again will add new trace(s) to the plot,
	// but will ignore new layout.
	const data2 = [{
		x: [1999, 2000, 2001, 2002],
		y: [10, 9, 8, 7],
		type: 'scatter'
	} as ScatterData];
	const layout2 = { title: 'Revenue' };
	Plotly.newPlot(graphDiv, data2, layout2);
})();

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.restyle
// restyle a single trace using attribute strings
(() => {
	const update = {
		opacity: 0.4,
		'marker.color': 'red'
	};
	Plotly.restyle(graphDiv, update, 0);
})();

// restyle all traces using attribute strings
(() => {
	const update = {
		opacity: 0.4,
		'marker.color': 'red'
	};
	Plotly.restyle(graphDiv, update);
})();
// restyle the first trace's marker color 'red' and the second's 'green'
(() => {
	const update = {
		'marker.color': ['red', 'green']
	};
	Plotly.restyle(graphDiv, update, [0, 1]);
})();

// alternate between red and green for all traces (note omission of traces)
(() => {
	const update = {
		'marker.color': ['red', 'green']
	};
	Plotly.restyle(graphDiv, update);
})();

// restyle two traces using attribute strings
(() => {
	const update = {
		opacity: 0.4,
		'marker.color': 'red'
	};
	Plotly.restyle(graphDiv, update, [1, 2]);
})();

// update the color attribute of the first trace so that the markers within the same trace
// have different colors
(() => {
	const update = {
		'marker.color': [['red', 'green']]
	};
	Plotly.restyle(graphDiv, update, [0]);
})();

// update two traces with new z data
(() => {
	const update = { z: [[[1, 2, 3], [2, 1, 2], [1, 1, 1]], [[0, 1, 1], [0, 2, 1], [3, 2, 1]]] };
	Plotly.restyle(graphDiv, update, [1, 2]);
})();

// replace the entire marker object with the one provided
(() => {
	const update = {
		marker: { color: 'red' }
	};
	Plotly.restyle(graphDiv, update, [0]);
})();

// Set the first trace's line to red, the second to the default, and ignore the third
(() => {
	Plotly.restyle(graphDiv, {
		'line.color': ['red', null, undefined]
	}, [0, 1, 2]);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.relayout
// update only values within nested objects
(() => {
	const update = {
		title: 'some new title', // updates the title
		'xaxis.range': [0, 5],   // updates the xaxis range
		'yaxis.range[1]': 15     // updates the end of the yaxis range
	} as Layout;
	Plotly.relayout(graphDiv, update);
})();

(() => {
	const data_update = {
		marker: { color: 'red' }
	};
	const layout_update = {
		title: 'some new title', // updates the title
	};
	Plotly.update(graphDiv, data_update, layout_update);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.update
(() => {
	const data_update = {
		marker: { color: 'red' }
	};
	const layout_update = {
		title: 'some new title', // updates the title
	};
	Plotly.update(graphDiv, data_update, layout_update);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.addTraces
(() => {
	// add a single trace to an existing graphDiv
	Plotly.addTraces(graphDiv, { y: [2, 1, 2] });

	// add two traces
	Plotly.addTraces(graphDiv, [{ y: [2, 1, 2] }, { y: [4, 5, 7] }]);

	// add a trace at the beginning of the data array
	Plotly.addTraces(graphDiv, { y: [1, 5, 7] }, 0);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.deleteTraces
(() => {
	// remove the first trace
	Plotly.deleteTraces(graphDiv, 0);

	// remove the last two traces
	Plotly.deleteTraces(graphDiv, [-2, -1]);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.moveTraces
(() => {
	// move the first trace (at index 0) the the end of the data array
	Plotly.moveTraces(graphDiv, 0);

	// move selected traces (at indices [0, 3, 5]) to the end of the data array
	Plotly.moveTraces(graphDiv, [0, 3, 5]);

	// move last trace (at index -1) to the beginning of the data array (index 0)
	Plotly.moveTraces(graphDiv, -1, 0);

	// move selected traces (at indices [1, 4, 5]) to new indices [0, 3, 2]
	Plotly.moveTraces(graphDiv, [1, 4, 5], [0, 3, 2]);
})();
//////////////////////////////////////////////////////////////////////

function rand() {
	return Math.random();
}

//////////////////////////////////////////////////////////////////////
// Plotly.extendTraces
(() => {
	// extend one trace
	Plotly.extendTraces(graphDiv, { y: [[rand()]] }, [0]);

	// extend multiple traces
	Plotly.extendTraces(graphDiv, { y: [[rand()], [rand()]] }, [0, 1]);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.prependTraces
(() => {
	// prepend one trace
	Plotly.prependTraces(graphDiv, { y: [[rand()]] }, [0]);

	// prepend multiple traces
	Plotly.prependTraces(graphDiv, { y: [[rand()], [rand()]] }, [0, 1]);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.purge
(() => {
	// purge will be used on the div that you wish clear of Plotly plots
	Plotly.purge(graphDiv);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.toImage
(() => {
	// Plotly.toImage will turn the plot in the given div into a data URL string
	// toImage takes the div as the first argument and an object specifying image properties as the other
	Plotly.toImage(graphDiv, { format: 'png', width: 800, height: 600 }).then((dataUrl) => {
		// use the dataUrl
	});
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.downloadImage
(() => {
	// downloadImage will accept the div as the first argument and an object specifying image properties as the other
	Plotly.downloadImage(graphDiv, { format: 'png', width: 800, height: 600, filename: 'newplot' });
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Using events
(async () => {
	const myPlot = await newPlot(graphDiv, [{
		x: [1999, 2000, 2001, 2002],
		y: [10, 9, 8, 7],
		type: 'scatter'
	}]);
	myPlot.on('plotly_click', (data) => {
		let pn = 0;
		let tn = 0;
		let colors = [] as string[];
		for (const pt of data.points) {
			pn = pt.pointNumber;
			tn = pt.curveNumber;
			colors = pt.data.marker.color as string[];
		}
		colors[pn] = '#C54C82';

		const update = { marker: { color: colors, size: 16 } };
		Plotly.restyle('myDiv', update, [tn]);
	});

	myPlot.on('plotly_hover', (data) => {
		let pn = 0;
		let tn = 0;
		let colors = [] as string[];
		for (const pt of data.points) {
			pn = pt.pointNumber;
			tn = pt.curveNumber;
			colors = pt.data.marker.color as string[];
		}
		colors[pn] = '#C54C82';

		const update = { marker: { color: colors, size: 16 } };
		Plotly.restyle('myDiv', update, [tn]);
	});

	myPlot.on('plotly_unhover', (data) => {
		let pn = 0;
		let tn = 0;
		let colors = [] as string[];
		for (const pt of data.points) {
			pn = pt.pointNumber;
			tn = pt.curveNumber;
			colors = pt.data.marker.color as string[];
		}
		colors[pn] = '#00000';

		const update = { marker: { color: colors, size: 16 } };
		Plotly.restyle('myDiv', update, [tn]);
	});

	myPlot.on('plotly_selected', (data) => {
		const x = [] as number[];
		const y = [] as number[];
		const N = 1000;
		const color1 = '#7b3294';
		const color1Light = '#c2a5cf';

		const colors = [] as string[];
		for (let i = 0; i < N; i++) colors.push(color1Light);

		data.points.forEach((pt) => {
			x.push(pt.x);
			y.push(pt.y);
			colors[pt.pointNumber] = color1;
		});

		Plotly.restyle(myPlot, {
			x: [x, y]
		}, [1, 2]);

		Plotly.restyle(myPlot, {
			'marker.color': [colors]
		}, [0]);
	});

	myPlot.on('plotly_restyle', (data) => {
		console.log('restyling');
	});

	myPlot.on('plotly_doubleclick', () => {
		const orgColors = ['#00000', '#00000', '#00000',
			'#00000', '#00000', '#00000'];
		const update = { marker: { color: orgColors, size: 16 } };
		Plotly.restyle('myDiv', update);
	});

	myPlot.on('plotly_afterplot', () => {
		console.log('done plotting');
	});
})();
//////////////////////////////////////////////////////////////////////
