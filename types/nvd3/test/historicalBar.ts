nv.addGraph({
	generate: function() {
		var chart = nv.models.historicalBar();

		d3.select("#test1")
			.datum(sinData())
			.datum(sinData())
			.transition()
			.call(chart);

		return chart;
	},
	callback: function(graph) {
		graph.dispatch.on('elementMouseover', function(e) {
			var offsetElement = document.getElementById("chart"),
				left = e.pos[0],
				top = e.pos[1];
			var content = '<p>' + e.point.y + '</p>';

			nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's');
		});

		graph.dispatch.on('elementMouseout', function(e) {
			nv.tooltip.cleanup();
		});
	}
});

//Simple test data generators
function sinAndCos() {
	var sin = [],
		cos = [];

	for (var i = 0; i < 100; i++) {
		sin.push({x: i, y: Math.sin(i/10)});
		cos.push({x: i, y: .5 * Math.cos(i/10)});
	}

	return [
		{values: sin, key: "Sine Wave", color: "#ff7f0e"},
		{values: cos, key: "Cosine Wave", color: "#2ca02c"}
	];
}

function sinData() {
	var sin = [];

	for (var i = 0; i < 100; i++) {
		sin.push({x: i, y: Math.sin(i/10)});
	}

	return [{
		values: sin,
		key: "Sine Wave",
		color: "#ff7f0e"
	}];
}