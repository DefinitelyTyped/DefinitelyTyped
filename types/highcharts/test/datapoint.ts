import { IndividualSeriesOptions } from "highcharts";

const numbers: IndividualSeriesOptions = {
    data: [1, 2, 3]
};

const numbersWithNulls: IndividualSeriesOptions = {
    data: [1, null, 3]
};

const pairs: IndividualSeriesOptions = {
    data: [[0, 1], [1, 3], [2, 9]]
};

const pairsWithNulls: IndividualSeriesOptions = {
    data: [[0, 1], [1, null], [2, 9]]
};

const stringNumbers: IndividualSeriesOptions = {
    data: [["a", 21], ["b", 4]]
};

const dataPoints: IndividualSeriesOptions = {
    data: [{ x: 0, y: 1 }, { x: 1, y: null }]
};
