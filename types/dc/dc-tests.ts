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
