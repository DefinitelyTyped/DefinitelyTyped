
namespace nvd3_test_furiousLegend {
    var width = 500,
        height = 40;

    var legend = nv.models.legend().vers('furious');

    d3.select('#test1')
        .attr('width', width)
        .attr('height', height)
        .datum(sinAndCos());

    var legend2 = nv.models.legend().vers('furious')
        .align(false);

    d3.select('#test2')
        .attr('width', width)
        .attr('height', height)
        .datum(sinAndCos()).call(legend2);

    var legend3 = nv.models.legend().vers('furious')
        .width(900)
        .padding(70);

    d3.select('#test3')
        .attr('width', 900)
        .attr('height', 200)
        .datum(sinAndCos()).call(legend3);

    var update = function (i, l) {
        d3.select('#test' + i).call(l);
    }

    update(1, legend);
    legend.dispatch.on('stateChange', function (d) {
        console.log(d);
        update(1, legend);
    });

    legend2.dispatch.on('stateChange', function (d) {
        console.log(d);
        update(2, legend2);
    });

    legend3.dispatch.on('stateChange', function (d) {
        console.log(d);
        update(3, legend3);
    });

    d3.select('#changeData').on('click', function () {
        var exp = legend.expanded();

        legend.expanded(!exp);

        d3.select('#test1')
            .call(legend);
    });

    function sinAndCos() {
        return [
            { key: "Sine Wave" },
            { key: "averylongserieslabelthatcontainsmorethantwentycharacters" },
            { key: "A Very Long Series Label" },
            { key: "A Very Long Series Label" },
            { key: "Cosine Wave" },
            { key: "Another test label" },
            { key: "Bonds", disengaged: true },
            { key: "Stocks", disengaged: true },
            { key: "Apple", disengaged: true }
        ];
    }
}
