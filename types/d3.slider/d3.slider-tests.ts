d3.select('#slider1').call(d3.slider());
d3.select('#slider2').call(d3.slider().value( [ 10, 25 ] ));
d3.select('#slider3').call(d3.slider().axis(true).value( [ 10, 25 ] )
    .on("slide", function(evt, value) {
        d3.select('#slider3textmin').text(value[ 0 ]);
        d3.select('#slider3textmax').text(value[ 1 ]);
    }));
d3.select('#slider4').call(d3.slider().on("slide", function(evt, value) {
      d3.select('#slider4text').text(value);
    }));
d3.select('#slider5').call(d3.slider().axis(true));
var axis = d3.svg.axis().orient("top").ticks(4);
d3.select('#slider6').call(d3.slider().axis(axis));
d3.select('#slider7').call(d3.slider().axis(true).min(2000).max(2100).step(5));
d3.select('#slider8').call(d3.slider().value(50).orientation("vertical"));
d3.select('#slider9').call(d3.slider().value( [10, 30] ).orientation("vertical"));
d3.select('#slider10').call(d3.slider().scale(d3.time.scale().domain([new Date(1984,1,1), new Date(2014,1,1)])).axis(d3.svg.axis()));
d3.select('#slider11').call(d3.slider().scale(d3.time.scale().domain([new Date(1984,1,1), new Date(2014,1,1)])).axis(d3.svg.axis()).snap(true).value(new Date(2000,1,1)));
let essai = d3.slider().scale(d3.scale.ordinal().domain(["Gecko", "Webkit", "Blink", "Trident"]).rangePoints([0, 1], 0.5)).axis(d3.svg.axis()).snap(true).value("Gecko");
d3.select('#slider12').call(essai);

