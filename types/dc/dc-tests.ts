import * as crossfilter from 'crossfilter';
import * as d3 from "d3";
import * as dc from "dc";


interface IYelpData {
    city: string;
    review_count: number;
    name: string;
    neighborhoods: string[];
    type: string;
    business_id: string;
    full_address: string;
    state: string;
    longitude: number;
    stars: number;
    latitude: number;
    open: boolean;
    categories: string[]
}

interface IYelpDataExtended {
    count: number;
    review_sum: number;
    star_sum: number;
    review_avg: number;
    star_avg: number;
}


/********************************************************
 *                            *
 *  dj.js example using Yelp Kaggle Test Dataset    *
 *  Eamonn O'Loughlin 9th May 2013            *
 *                            *
 ********************************************************/

/********************************************************
 *                            *
 *  Step0: Load data from json file           *
 *                            *
 ********************************************************/
d3.json("data/yelp_test_set_business.json", (yelp_data:IYelpData[]) => {

    /********************************************************
     *                           *
     *   Step1: Create the dc.js chart objects & ling to div *
     *                           *
     ********************************************************/
    var bubbleChart: dc.BubbleChart = dc.bubbleChart("#dc-bubble-graph");
    var pieChart: dc.PieChart = dc.pieChart("#dc-pie-graph");
    var volumeChart: dc.BarChart = dc.barChart("#dc-volume-chart");
    var lineChart: dc.LineChart = dc.lineChart("#dc-line-chart");
    var dataTable: dc.DataTableWidget = dc.dataTable("#dc-table-graph");
    var rowChart: dc.RowChart = dc.rowChart("#dc-row-graph");

    /********************************************************
     *                           *
     *   Step2:  Run data through crossfilter        *
     *                           *
     ********************************************************/
    var ndx: CrossFilter.CrossFilter<IYelpData> = crossfilter(yelp_data);

    /********************************************************
     *                           *
     *   Step3:  Create Dimension that we'll need      *
     *                           *
     ********************************************************/

    // for volumechart
    var cityDimension: CrossFilter.Dimension<IYelpData, string> = ndx.dimension((d: IYelpData) => d.city);
    var cityGroup: CrossFilter.Group<IYelpData, string, string> = cityDimension.group();
    var cityDimensionGroup: CrossFilter.Group<IYelpData, string, IYelpDataExtended> = cityDimension.group().reduce(
        //add
        (p: IYelpDataExtended, v:IYelpData) => {
            ++p.count;
            p.review_sum += v.review_count;
            p.star_sum += v.stars;
            p.review_avg = p.review_sum / p.count;
            p.star_avg = p.star_sum / p.count;
            return p;
        },
        //remove
        (p: IYelpDataExtended, v:IYelpData) => {
            --p.count;
            p.review_sum -= v.review_count;
            p.star_sum -= v.stars;
            p.review_avg = p.review_sum / p.count;
            p.star_avg = p.star_sum / p.count;
            return p;
        },
        //init
        () => {
            return {count: 0, review_sum: 0, star_sum: 0, review_avg: 0, star_avg: 0};
        }
    );

    // for pieChart
    var startValue: CrossFilter.Dimension<IYelpData, number> = ndx.dimension((d: IYelpData) => d.stars * 1.0);
    var startValueGroup: CrossFilter.Group<IYelpData, number, number> = startValue.group();

    // For datatable
    var businessDimension: CrossFilter.Dimension<IYelpData, string> = ndx.dimension((d: IYelpData) => d.business_id);
    /********************************************************
     *                           *
     *   Step4: Create the Visualisations          *
     *                           *
     ********************************************************/

    bubbleChart
        .width(650)
        .height(300)
        .dimension(cityDimension)
        .group(cityDimensionGroup)
        .transitionDuration(1500)
        .colors(["#a60000","#ff0000", "#ff4040","#ff7373","#67e667","#39e639","#00cc00"])
        .colorDomain([-12000, 12000])
        .x(d3.scale.linear().domain([0, 5.5]))
        .y(d3.scale.linear().domain([0, 5.5]))
        .r(d3.scale.linear().domain([0, 2500]))
        .keyAccessor((p: any) => p.value.star_avg)
        .valueAccessor((p: any) => p.value.review_avg)
        .radiusValueAccessor((p: any) => p.value.count)
        .transitionDuration(1500)
        .elasticY(true)
        .yAxisPadding(1)
        .xAxisPadding(1)
        .label((p: any) => p.key)
        .renderLabel(true)
        .renderlet((chart: dc.BubbleChart) => rowChart.filter(chart.filter()))
        .on("postRedraw", (chart: dc.BubbleChart) => dc.events.trigger(() => rowChart.filter(chart.filter())));

    pieChart
        .width(200)
        .height(200)
        .transitionDuration(1500)
        .dimension(startValue)
        .group(startValueGroup)
        .radius(90)
        .minAngleForLabel(0)
        .label((d: any) => d.data.key)
        .on("filtered", (chart: dc.PieChart) =>
            dc.events.trigger(() => {
                if (chart.filter()) {
                    console.log(chart.filter());
                    volumeChart.filter([chart.filter()-.25,chart.filter()-(-0.25)]);
                }
                else volumeChart.filterAll();
            }));

    volumeChart
        .width(230)
        .height(200)
        .dimension(startValue)
        .group(startValueGroup)
        .transitionDuration(1500)
        .centerBar(true)
        .gap(17)
        .x(d3.scale.linear().domain([0.5, 5.5]))
        .elasticY(true)
        .on("filtered", (chart: dc.BarChart) =>
            dc.events.trigger(() => {
                if(chart.filter()) {
                    console.log(chart.filter());
                    lineChart.filter(chart.filter());
                }
                else {
                    lineChart.filterAll()
                }
            }))
        .xAxis()
            .tickFormat((v: string) => v);

    console.log(startValueGroup.top(1)[0].value);

    lineChart
        .width(230)
        .height(200)
        .dimension(startValue)
        .group(startValueGroup)
        .x(d3.scale.linear().domain([0.5, 5.5]))
        .valueAccessor((d: any) => d.value)
        .renderHorizontalGridLines(true)
        .elasticY(true)
        .xAxis()
            .tickFormat((v: string) => v);

    lineChart.legend(dc.legend().x(200).y(10).itemHeight(13).gap(5));

    rowChart
        .width(340)
        .height(850)
        .dimension(cityDimension)
        .group(cityGroup)
        .renderLabel(true)
        .colors(["#a60000","#ff0000", "#ff4040","#ff7373","#67e667","#39e639","#00cc00"])
        .colorDomain([0, 0])
        .renderlet((chart: dc.RowChart) => bubbleChart.filter(chart.filter()))
        .on("filtered", (chart: dc.RowChart) =>
            dc.events.trigger(() =>
                bubbleChart.filter(chart.filter())));

    dataTable
        .width(800)
        .height(800)
        .dimension(businessDimension)
        .group((d: any) => "List of all Selected Businesses")
        .size(100)
        .columns([
            (d: IYelpData) => d.name,
            (d: IYelpData) => d.city,
            (d: IYelpData) => d.stars,
            (d: IYelpData) => d.review_count,
            (d: IYelpData) => '<a href=\"http://maps.google.com/maps?z=12&t=m&q=loc:' + d.latitude + '+' + d.longitude +"\" target=\"_blank\">Map</a>"
        ])
        .sortBy((d: IYelpData) => d.stars)
        // (optional) sort order, :default ascending
        .order(d3.ascending);
    /********************************************************
     *                           *
     *   Step6:  Render the Charts             *
     *                           *
     ********************************************************/

    dc.renderAll();
});

// Stolen from website
/* global dc,d3,crossfilter */

var gainOrLossChart = dc.pieChart('#gain-loss-chart');
var fluctuationChart = dc.barChart('#fluctuation-chart');
var quarterChart = dc.pieChart('#quarter-chart');
var dayOfWeekChart = dc.rowChart('#day-of-week-chart');
var moveChart = dc.lineChart('#monthly-move-chart');
var volumeChart = dc.barChart('#monthly-volume-chart');
var yearlyBubbleChart = dc.bubbleChart('#yearly-bubble-chart');
var nasdaqCount = dc.dataCount('.dc-data-count');
var nasdaqTable = dc.dataTable('.dc-data-table');

/*

    <div id='your-chart'></div>

    <div id='chart'><span>Days by Gain or Loss</span></div>

    <div id='chart'>
       <a class='reset'
          href='javascript:myChart.filterAll();dc.redrawAll();'
          style='visibility: hidden;'>reset</a>
    </div>

    <div id='chart'>
        <span class='reset' style='visibility: hidden;'>
          Current filter: <span class='filter'></span>
        </span>
    </div>
*/

d3.csv('ndx.csv').then(function (data) {

    var dateFormatSpecifier = '%m/%d/%Y';
    var dateFormat = d3.timeFormat(dateFormatSpecifier);
    var dateFormatParser = d3.timeParse(dateFormatSpecifier);
    var numberFormat = d3.format('.2f');

    data.forEach(function (d) {
        d.dd = dateFormatParser(d.date);
        d.month = d3.timeMonth(d.dd); // pre-calculate month for better performance
        d.close = +d.close; // coerce to number
        d.open = +d.open;
    });

    var ndx = crossfilter(data);
    var all = ndx.groupAll();

    var yearlyDimension = ndx.dimension(function (d) {
        return d3.timeYear(d.dd).getFullYear();
    });

    var yearlyPerformanceGroup = yearlyDimension.group().reduce(
        /* callback for when data is added to the current filter results */
        function (p, v) {
            ++p.count;
            p.absGain += v.close - v.open;
            p.fluctuation += Math.abs(v.close - v.open);
            p.sumIndex += (v.open + v.close) / 2;
            p.avgIndex = p.sumIndex / p.count;
            p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
            p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
            return p;
        },
        /* callback for when data is removed from the current filter results */
        function (p, v) {
            --p.count;
            p.absGain -= v.close - v.open;
            p.fluctuation -= Math.abs(v.close - v.open);
            p.sumIndex -= (v.open + v.close) / 2;
            p.avgIndex = p.count ? p.sumIndex / p.count : 0;
            p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
            p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
            return p;
        },
        /* initialize p */
        function () {
            return {
                count: 0,
                absGain: 0,
                fluctuation: 0,
                fluctuationPercentage: 0,
                sumIndex: 0,
                avgIndex: 0,
                percentageGain: 0
            };
        }
    );

    var dateDimension = ndx.dimension(function (d) {
        return d.dd;
    });

    var moveMonths = ndx.dimension(function (d) {
        return d.month;
    });

    var monthlyMoveGroup = moveMonths.group().reduceSum(function (d) {
        return Math.abs(d.close - d.open);
    });

    var volumeByMonthGroup = moveMonths.group().reduceSum(function (d) {
        return d.volume / 500000;
    });
    var indexAvgByMonthGroup = moveMonths.group().reduce(
        function (p, v) {
            ++p.days;
            p.total += (v.open + v.close) / 2;
            p.avg = Math.round(p.total / p.days);
            return p;
        },
        function (p, v) {
            --p.days;
            p.total -= (v.open + v.close) / 2;
            p.avg = p.days ? Math.round(p.total / p.days) : 0;
            return p;
        },
        function () {
            return {days: 0, total: 0, avg: 0};
        }
    );

    var gainOrLoss = ndx.dimension(function (d) {
        return d.open > d.close ? 'Loss' : 'Gain';
    });

    var gainOrLossGroup = gainOrLoss.group();

    var fluctuation = ndx.dimension(function (d) {
        return Math.round((d.close - d.open) / d.open * 100);
    });
    var fluctuationGroup = fluctuation.group();

    var quarter = ndx.dimension(function (d) {
        var month = d.dd.getMonth();
        if (month <= 2) {
            return 'Q1';
        } else if (month > 2 && month <= 5) {
            return 'Q2';
        } else if (month > 5 && month <= 8) {
            return 'Q3';
        } else {
            return 'Q4';
        }
    });
    var quarterGroup = quarter.group().reduceSum(function (d) {
        return d.volume;
    });

    var dayOfWeek = ndx.dimension(function (d) {
        var day = d.dd.getDay();
        var name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return day + '.' + name[day];
    });
    var dayOfWeekGroup = dayOfWeek.group();


    yearlyBubbleChart /* dc.bubbleChart('#yearly-bubble-chart', 'chartGroup') */

        .width(990)

        .height(250)

        .transitionDuration(1500)
        .margins({top: 10, right: 50, bottom: 30, left: 40})
        .dimension(yearlyDimension)

        .group(yearlyPerformanceGroup)

        .colors(d3.schemeRdYlGn[9])

        .colorDomain([-500, 500])

        .colorAccessor(function (d) {
            return d.value.absGain;
        })

        .keyAccessor(function (p) {
            return p.value.absGain;
        })

        .valueAccessor(function (p) {
            return p.value.percentageGain;
        })

        .radiusValueAccessor(function (p) {
            return p.value.fluctuationPercentage;
        })
        .maxBubbleRelativeSize(0.3)
        .x(d3.scaleLinear().domain([-2500, 2500]))
        .y(d3.scaleLinear().domain([-100, 100]))
        .r(d3.scaleLinear().domain([0, 4000]))

        .elasticY(true)
        .elasticX(true)

        .yAxisPadding(100)
        .xAxisPadding(500)

        .renderHorizontalGridLines(true)

        .renderVerticalGridLines(true)

        .xAxisLabel('Index Gain')

        .yAxisLabel('Index Gain %')

        .renderLabel(true)
        .label(function (p) {
            return p.key;
        })

        .renderTitle(true)
        .title(function (p) {
            return [
                p.key,
                'Index Gain: ' + numberFormat(p.value.absGain),
                'Index Gain in Percentage: ' + numberFormat(p.value.percentageGain) + '%',
                'Fluctuation / Index Ratio: ' + numberFormat(p.value.fluctuationPercentage) + '%'
            ].join('\n');
        })

        .yAxis().tickFormat(function (v) {
            return v + '%';
        });


    gainOrLossChart /* dc.pieChart('#gain-loss-chart', 'chartGroup') */

        .width(180)

        .height(180)

        .radius(80)

        .dimension(gainOrLoss)

        .group(gainOrLossGroup)

        .label(function (d) {
            if (gainOrLossChart.hasFilter() && !gainOrLossChart.hasFilter(d.key)) {
                return d.key + '(0%)';
            }
            var label = d.key;
            if (all.value()) {
                label += '(' + Math.floor(d.value / all.value() * 100) + '%)';
            }
            return label;
        })
    /*

        .renderLabel(true)

        .innerRadius(40)

        .transitionDuration(500)

        .colors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])

        .colorDomain([-1750, 1644])

        .colorAccessor(function(d, i){return d.value;})
        */;

    quarterChart /* dc.pieChart('#quarter-chart', 'chartGroup') */
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(quarter)
        .group(quarterGroup);


    dayOfWeekChart /* dc.rowChart('#day-of-week-chart', 'chartGroup') */
        .width(180)
        .height(180)
        .margins({top: 20, left: 10, right: 10, bottom: 20})
        .group(dayOfWeekGroup)
        .dimension(dayOfWeek)

        .ordinalColors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
        .label(function (d) {
            return d.key.split('.')[1];
        })

        .title(function (d) {
            return d.value;
        })
        .elasticX(true)
        .xAxis().ticks(4);


    fluctuationChart /* dc.barChart('#volume-month-chart', 'chartGroup') */
        .width(420)
        .height(180)
        .margins({top: 10, right: 50, bottom: 30, left: 40})
        .dimension(fluctuation)
        .group(fluctuationGroup)
        .elasticY(true)

        .centerBar(true)

        .gap(1)

        .round(dc.round.floor)
        .alwaysUseRounding(true)
        .x(d3.scaleLinear().domain([-25, 25]))
        .renderHorizontalGridLines(true)

        .filterPrinter(function (filters) {
            var filter = filters[0], s = '';
            s += numberFormat(filter[0]) + '% -> ' + numberFormat(filter[1]) + '%';
            return s;
        });

    fluctuationChart.xAxis().tickFormat(
        function (v) { return v + '%'; });
    fluctuationChart.yAxis().ticks(5);


    moveChart /* dc.lineChart('#monthly-move-chart', 'chartGroup') */
        .renderArea(true)
        .width(990)
        .height(200)
        .transitionDuration(1000)
        .margins({top: 30, right: 50, bottom: 25, left: 40})
        .dimension(moveMonths)
        .mouseZoomable(true)

        .rangeChart(volumeChart)
        .x(d3.scaleTime().domain([new Date(1985, 0, 1), new Date(2012, 11, 31)]))
        .round(d3.timeMonth.round)
        .xUnits(d3.timeMonths)
        .elasticY(true)
        .renderHorizontalGridLines(true)

        .legend(dc.legend().x(800).y(10).itemHeight(13).gap(5))
        .brushOn(false)

        .group(indexAvgByMonthGroup, 'Monthly Index Average')
        .valueAccessor(function (d) {
            return d.value.avg;
        })

        .stack(monthlyMoveGroup, 'Monthly Index Move', function (d) {
            return d.value;
        })

        .title(function (d) {
            var value = d.value.avg ? d.value.avg : d.value;
            if (isNaN(value)) {
                value = 0;
            }
            return dateFormat(d.key) + '\n' + numberFormat(value);
        });

    volumeChart.width(990) /* dc.barChart('#monthly-volume-chart', 'chartGroup'); */
        .height(40)
        .margins({top: 0, right: 50, bottom: 20, left: 40})
        .dimension(moveMonths)
        .group(volumeByMonthGroup)
        .centerBar(true)
        .gap(1)
        .x(d3.scaleTime().domain([new Date(1985, 0, 1), new Date(2012, 11, 31)]))
        .round(d3.timeMonth.round)
        .alwaysUseRounding(true)
        .xUnits(d3.timeMonths);


    nasdaqCount /* dc.dataCount('.dc-data-count', 'chartGroup'); */
        .crossfilter(ndx)
        .groupAll(all)

        .html({
            some: '<strong>%filter-count</strong> selected out of <strong>%total-count</strong> records' +
                ' | <a href=\'javascript:dc.filterAll(); dc.renderAll();\'>Reset All</a>',
            all: 'All records selected. Please click on the graph to apply filters.'
        });


    nasdaqTable /* dc.dataTable('.dc-data-table', 'chartGroup') */
        .dimension(dateDimension)

        .section(function (d) {
            var format = d3.format('02d');
            return d.dd.getFullYear() + '/' + format((d.dd.getMonth() + 1));
        })

        .size(10)

        .columns([

            'date',

            'open',
            'close',
            {

                label: 'Change',
                format: function (d) {
                    return numberFormat(d.close - d.open);
                }
            },

            'volume'
        ])

        .sortBy(function (d) {
            return d.dd;
        })

        .order(d3.ascending)

        .on('renderlet', function (table) {
            table.selectAll('.dc-table-group').classed('info', true);
        });

    /*


    dc.geoChoroplethChart('#us-chart')

        .width(990)

        .height(500)

        .transitionDuration(1000)

        .dimension(states)

        .group(stateRaisedSum)

        .colors(['#ccc', '#E2F2FF','#C4E4FF','#9ED2FF','#81C5FF','#6BBAFF','#51AEFF','#36A2FF','#1E96FF','#0089FF',
            '#0061B5'])

        .colorDomain([-5, 200])

        .colorAccessor(function(d, i){return d.value;})

        .overlayGeoJson(statesJson.features, 'state', function(d) {
            return d.properties.name;
        })

        .title(function(d) {
            return 'State: ' + d.key + '\nTotal Amount Raised: ' + numberFormat(d.value ? d.value : 0) + 'M';
        });


        dc.bubbleOverlay('#bubble-overlay', 'chartGroup')

            .svg(d3.select('#bubble-overlay svg'))

            .width(990)

            .height(500)

            .transitionDuration(1000)

            .dimension(states)

            .group(stateRaisedSum)

            .keyAccessor(function(p) {return p.value.absGain;})

            .valueAccessor(function(p) {return p.value.percentageGain;})

            .colors(['#ccc', '#E2F2FF','#C4E4FF','#9ED2FF','#81C5FF','#6BBAFF','#51AEFF','#36A2FF','#1E96FF','#0089FF',
                '#0061B5'])

            .colorDomain([-5, 200])

            .colorAccessor(function(d, i){return d.value;})

            .radiusValueAccessor(function(p) {return p.value.fluctuationPercentage;})

            .r(d3.scaleLinear().domain([0, 3]))

            .renderLabel(true)

            .label(function(p) {return p.key.getFullYear();})

            .renderTitle(true)

            .title(function(d) {
                return 'Title: ' + d.key;
            })

            .point('California', 100, 120)
            .point('Colorado', 300, 120)

            .debug(true);
    */

    dc.renderAll();
    /*

    dc.renderAll('group');

    dc.redrawAll();

    dc.redrawAll('group');
    */

});

d3.selectAll('#version').text(dc.version);

d3.json('https://api.github.com/repos/dc-js/dc.js/releases/latest').then(function (latestRelease) {
    /* eslint camelcase: 0 */
    d3.selectAll('#latest').text(latestRelease.tag_name);
});

