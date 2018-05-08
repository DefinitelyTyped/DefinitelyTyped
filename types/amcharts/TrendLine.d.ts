/**
 * Trend lines are straight lines indicating trends, might also be used for some different purposes.
 * Can be used by Serial and XY charts.
 * To add/remove trend line, use chart.addTrendLine(trendLine)/chart.removeTrendLine(trendLine) methods
 * or simply pass array of trend lines: chart.trendLines = [trendLine1, trendLine2].
 * @example
 * let trendLine = new AmCharts.TrendLine();
 * trendLine.initialDate = new Date(2012, 0, 2, 12); // 12 is hour - to start trend line in the middle of the day
 * trendLine.finalDate = new Date(2012, 0, 11, 12);
 * trendLine.initialValue = 10;
 * trendLine.finalValue = 19;
 * trendLine.lineColor = "#CC0000";
 * chart.addTrendLine(trendLine);
 */
export default class TrendLine { }
