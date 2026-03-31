import * as React from "react";
import GaugeChart from "react-gauge-chart";

// Test some examples available in https://github.com/Martin36/react-gauge-chart?tab=readme-ov-file#examples

// Default chart

const DefaultGauge: React.ReactElement = <GaugeChart id="gauge-chart1" />;

// Chart with 20 levels and pointer at 86%

const GagueWithLevels: React.ReactElement = <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={0.86} />;

// Chart with custom colors and larger arc width

const GagueWithCustomColorsAndLargeArcWidth: React.ReactElement = (
    <GaugeChart id="gauge-chart3" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={0.37} />
);

// Chart with other corner radius and larger padding between arcs

const GagueWithOtherCornerRadiusAndLargerPaddingBetweenArcs: React.ReactElement = (
    <GaugeChart id="gauge-chart4" nrOfLevels={10} arcPadding={0.1} cornerRadius={3} percent={0.6} />
);

// Chart with custom arcs width

const GagueWithCustomArcsWidth: React.ReactElement = (
    <GaugeChart
        id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={[0.3, 0.5, 0.2]}
        colors={["#5BE12C", "#F5CD19", "#EA4228"]}
        percent={0.37}
        arcPadding={0.02}
    />
);

// Chart with disabled animation

const GagueWithDisabledAnimation: React.ReactElement = (
    <GaugeChart id="gauge-chart6" animate={false} nrOfLevels={15} percent={0.56} needleColor="#345243" />
);
