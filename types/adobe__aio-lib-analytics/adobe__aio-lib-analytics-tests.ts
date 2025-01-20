import * as adobeAnalytics from "@adobe/aio-lib-analytics";

(async () => {
    const client = await adobeAnalytics.init(
        "foo",
        "bar",
        "foobar",
    );

    const report = await client.getReport({
        rsid: "foo",
        globalFilters: [
            {
                type: "dateRange",
                dateRange: `2020-01-02|2021-01-02`,
            },
        ],
        metricContainer: {
            metrics: [{ id: "foobar" }],
        },
        dimension: "foobar",
        settings: {
            limit: 20,
            page: 2,
        },
    });

    const rowsValue = report.body.rows?.map(row => {
        return row.value;
    });
})();
