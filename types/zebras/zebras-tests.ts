import Z = require('zebras');

const df = [{label: "A", value: 7}, {label: "B", value: 2}];
const series = ["2010-12-15", "2010-12-16"];
Z.addCol("date", series, df);
// [{date: "2010-12-15", label: "A", value: 7}, {date: "2010-12-16", label: "B", value: 2}]

const df1 = [{label: "A", value: 7}, {label: "B", value: 2}];
const df2 = [{label: "C", value: 17}, {label: "D", value: 2}];
Z.concat(df1, df2);
// [{label: "A", value: 7}, {label: "B", value: 2}, {label: "C", value: 17}, {label: "D", value: 2}]

const series1 = [10, 15, 20, 25, 50, 55];
const series2 = [12, 18, 34, 52, 71, 86];
Z.corr(series1, series2);
// 0.969035563335365

const seriesCU = [7, 2, 30, 30, 56, 75];
Z.countUnique(seriesCU);
// 5

const seriesCumulative = [7, 2, 30, 30, 56, 75];
Z.cumulative(Z.mean, seriesCumulative);
// [7, 4.5, 13, 17.25, 25, 33.333333333333336]

const temps = [{date: "1990-05-06", tempCelsius: 0}, {date: "1990-05-07", tempCelsius: 4}];
const fahrenheit = Z.deriveCol((r: any) => r.tempCelsius * 1.8 + 32, temps);
Z.addCol("tempFahrenheit", fahrenheit, temps);
// [{date: "1990-05-06", tempCelsius: 0, "tempFahrenheit": 32}, {date: "1990-05-07", tempCelsius: 4, "tempFahrenheit": 39.2}]

const seriesDiff = [7, 2, 30, 30, 56, 75];
Z.diff(seriesDiff);
// [NaN, -5, 28, 0, 26, 19]

const dfGB = [{Day: "Monday", value: 10}, {Day: "Tuesday", value: 5}, {Day: "Monday", value: 7}];
Z.groupBy((x: any) => x.Day, dfGB);
// {"Monday": [{Day: "Monday", value: 10}, {Day: "Monday", value: 7}], "Tuesday": [{Day: "Tuesday", value: 5}]}

const seriesK = [7, 2, 30, 56, 75];
Z.kurt(seriesK);
// -2.040541067936147

const seriesMax = [7, 2, 30, 56, 75];
Z.max(seriesMax);
// 75

const seriesMean = [7, 2, 30, 56, 75];
Z.mean(seriesMean);
// 34

const df1merge = [{label: "A", value: 7}, {label: "B", value: 2}, {label: "C", value: 75}];
const df2merge = [{label: "A", value: "2010-12-13"}, {label: "B", value: "2010-12-15"}, {label: "C", value: "2010-12-17"}];
Z.merge(df1merge, df2merge, "label", "label", "_df1", "_df2");
// [
//   { label: "A", value_df1: 7, value_df2: "2010-12-13" },
//   { label: "B", value_df1: 2, value_df2: "2010-12-15" },
//   { label: "C", value_df1: 75, value_df2: "2010-12-17" },
// ]

const dfDates = [{label: "A", value: "2010-12-13"}, {label: "B", value: "2010-12-15"}, {label: "C", value: "2010-12-17"}];
Z.parseDates(["value"], dfDates);
// [{label: "A", value: 1292198400000}, {label: "B", value: 1292371200000}, {label: "C", value: 1292544000000}]

const seriesRolling = [7, 2, 30, 30, 56, 75];
Z.rolling(Z.mean, 2, seriesRolling);
// ["NotANumber", 4.5, 16, 30, 43, 65.5]
