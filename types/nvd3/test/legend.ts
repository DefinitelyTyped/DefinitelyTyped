namespace nvd3_test_legend {
    var width = 500,
        height = 20;

    var legend = nv.models.legend();

    d3.select('#test1')
        .attr('width', width)
        .attr('height', height)
        .datum(sinAndCos());

    var legend2 = nv.models.legend()
        .align(false);

    d3.select('#test2')
        .attr('width', width)
        .attr('height', height)
        .datum(sinAndCos()).call(legend2);

    var legend3 = nv.models.legend()
        .width(900)
        .padding(70);

    d3.select('#test3')
        .attr('width', 900)
        .attr('height', 200)
        .datum(sinAndCos()).call(legend3);

    var update = function () {
        d3.select('#test1').call(legend);
    }

    update();
    legend.dispatch.on('stateChange', function (d) {
        console.log(d);
        update();
    });

    d3.select('#changeData').on('click', function () {
        d3.select('#test1')
            .datum(differentData())
            .call(legend);
    });

    function sinAndCos() {
        return [
            { key: "Sine Wave" },
            { key: "A Very Long Label With Over Twenty Characters" },
            { key: "A Very Long Series Label With Over Twenty Characters" },
            { key: "A Very Long Series Label With Over Twenty Characters" },
            { key: "Cosine Wave" },
            { key: "Another test label" }
        ];
    }

    function differentData() {
        return [
            { key: "Fixed Income" },
            { key: "Derivatives" },
            { key: "Credit Default Swaps" },
            { key: "Equities" },
            { key: "Bonds" },
            { key: "Stocks" },
            { key: "Apple" }
        ];
    }
}
